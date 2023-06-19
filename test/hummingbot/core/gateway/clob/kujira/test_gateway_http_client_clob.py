import asyncio
import unittest
from contextlib import ExitStack
from decimal import Decimal
from os.path import join, realpath
from test.mock.http_recorder import HttpPlayer
from typing import Any, Dict
from unittest.mock import patch

from aiohttp import ClientSession
from aiounittest import async_test

from hummingbot.connector.gateway.gateway_in_flight_order import GatewayInFlightOrder
from hummingbot.connector.utils import combine_to_hb_trading_pair
from hummingbot.core.data_type.common import OrderType
from hummingbot.core.event.events import TradeType
from hummingbot.core.gateway.gateway_http_client import GatewayHttpClient

ev_loop: asyncio.AbstractEventLoop = asyncio.get_event_loop()


class GatewayHttpClientUnitTest(unittest.TestCase):
    _db_path: str
    _http_player: HttpPlayer
    _patch_stack: ExitStack

    @classmethod
    def setUpClass(cls) -> None:
        super().setUpClass()
        cls._db_path = realpath(join(__file__, "../../../fixtures/gateway_http_client_clob_fixture.db"))
        cls._http_player = HttpPlayer(cls._db_path)
        cls._patch_stack = ExitStack()
        cls._patch_stack.enter_context(cls._http_player.patch_aiohttp_client())
        cls._patch_stack.enter_context(
            patch(
                "hummingbot.core.gateway.gateway_http_client.GatewayHttpClient._http_client",
                return_value=ClientSession(),
            )
        )
        GatewayHttpClient.get_instance().base_url = "https://localhost:15888"

    @classmethod
    def tearDownClass(cls) -> None:
        cls._patch_stack.close()

    @async_test(loop=ev_loop)
    async def test_clob_place_order(self):

        payload = {
            "connector": "kujira",
            "chain": "kujira",
            "network": "testnet",
            "marketId": "kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh",
            "ownerAddress": "kujira1yrensec9gzl7y3t3duz44efzgwj2qv6gwayrn7",
            "side": "BUY",
            "price": 0.001,
            "amount": 1.0,
            "type": "LIMIT",
            "payerAddress": "kujira1yrensec9gzl7y3t3duz44efzgwj2qv6gwayrn7"
        }

        result: Dict[str, Any] = await GatewayHttpClient.get_instance().kujira_post_order(payload=payload)

        self.assertGreater(Decimal(result["id"]), 0)
        self.assertEqual(result["marketName"], "KUJI/DEMO")
        self.assertEquals(result["marketId"], "kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh")
        self.assertEqual(result["ownerAddress"], "kujira1yrensec9gzl7y3t3duz44efzgwj2qv6gwayrn7")
        self.assertEqual(result["payerAddress"], "kujira1yrensec9gzl7y3t3duz44efzgwj2qv6gwayrn7")
        self.assertEqual(result["price"], "0.001")
        self.assertEqual(result["amount"], "100")
        self.assertEqual(result["side"], "BUY")
        self.assertEqual(result["status"], "OPEN")
        self.assertEqual(result["type"], "LIMIT")
        self.assertGreater(Decimal(result["fee"]), 0)
        self.assertEqual(len(result["hashes"]["creation"]), 64)

    @async_test(loop=ev_loop)
    async def test_clob_cancel_order(self):
        payload = {
            "connector": "kujira",
            "chain": "kujira",
            "network": "testnet",
            "id": "198462",
            "ownerAddress": "kujira1yrensec9gzl7y3t3duz44efzgwj2qv6gwayrn7",
            "marketId": "kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh"
        }

        result = await GatewayHttpClient.get_instance().kujira_delete_order(payload=payload)

        self.assertGreater(len(result["id"]), 0)
        self.assertEqual(result["market"]["name"], "KUJI/DEMO")
        self.assertEquals(result["marketId"], "kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh")
        self.assertEqual(result["ownerAddress"], "kujira1yrensec9gzl7y3t3duz44efzgwj2qv6gwayrn7")
        self.assertEqual(result["payerAddress"], "kujira1yrensec9gzl7y3t3duz44efzgwj2qv6gwayrn7")
        self.assertEqual(result["status"], "CANCELLED")
        self.assertEqual(result["type"], "LIMIT")
        self.assertGreater(Decimal(result["fee"]), 0)
        self.assertEqual(len(result["hashes"]["cancellation"]), 64)

    @async_test(loop=ev_loop)
    async def test_clob_order_status_updates(self):
        result = await GatewayHttpClient.get_instance().get_clob_order_status_updates(
            trading_pair="COIN-ALPHA",
            chain="kujira",
            network="mainnet",
            connector="kujira",
            address="0xc7287236f64484b476cfbec0fd21bc49d85f8850c8885665003928a122041e18",  # noqa: mock
        )

        self.assertEqual(2, len(result["orders"]))
        self.assertEqual("EOID1", result["orders"][0]["exchangeID"])
        self.assertEqual("EOID2", result["orders"][1]["exchangeID"])

        result = await GatewayHttpClient.get_instance().get_clob_order_status_updates(
            trading_pair="COIN-ALPHA",
            chain="kujira",
            network="mainnet",
            connector="kujira",
            address="0xc7287236f64484b476cfbec0fd21bc49d85f8850c8885665003928a122041e18",  # noqa: mock
            exchange_order_id="0x66b533792f45780fc38573bfd60d6043ab266471607848fb71284cd0d9eecff9",  # noqa: mock
        )

        self.assertEqual(1, len(result["orders"]))
        self.assertEqual("EOID1", result["orders"][0]["exchangeID"])

    @async_test(loop=ev_loop)
    async def test_get_clob_all_markets(self):
        result = await GatewayHttpClient.get_instance().get_clob_markets(
            connector="kujira", chain="kujira", network="mainnet"
        )

        self.assertEqual(2, len(result["markets"]))
        self.assertEqual("COIN-ALPHA", result["markets"][1]["tradingPair"])

    @async_test(loop=ev_loop)
    async def test_get_clob_single_market(self):
        result = await GatewayHttpClient.get_instance().get_clob_markets(
            connector="kujira", chain="kujira", network="mainnet", trading_pair="COIN-ALPHA"
        )

        self.assertEqual(1, len(result["markets"]))
        self.assertEqual("COIN-ALPHA", result["markets"][0]["tradingPair"])

    @async_test(loop=ev_loop)
    async def test_get_clob_orderbook(self):
        result = await GatewayHttpClient.get_instance().get_clob_orderbook_snapshot(
            trading_pair="COIN-ALPHA", connector="kujira", chain="kujira", network="mainnet"
        )

        expected_orderbook = {
            "bids": [[1, 2], [3, 4]],
            "asks": [[5, 6]],
        }
        self.assertEqual(expected_orderbook, result["orderbook"])

    @async_test(loop=ev_loop)
    async def test_get_clob_ticker(self):
        result = await GatewayHttpClient.get_instance().get_clob_ticker(
            connector="kujira", chain="kujira", network="mainnet"
        )
        expected_markets = [
            {
                "pair": "COIN-ALPHA",
                "lastPrice": 9,
            },
            {
                "pair": "BTC-USDT",
                "lastPrice": 10,
            }
        ]

        self.assertEqual(expected_markets, result["markets"])

        result = await GatewayHttpClient.get_instance().get_clob_ticker(
            connector="kujira", chain="", network="mainnet", trading_pair="COIN-ALPHA"
        )
        expected_markets = [
            {
                "pair": "COIN-ALPHA",
                "lastPrice": 9,
            },
        ]

        self.assertEqual(expected_markets, result["markets"])

    @async_test(loop=ev_loop)
    async def test_clob_batch_order_update(self):
        trading_pair = combine_to_hb_trading_pair(base="COIN", quote="ALPHA")
        order_to_create = GatewayInFlightOrder(
            client_order_id="someOrderIDCreate",
            trading_pair=trading_pair,
            order_type=OrderType.LIMIT,
            trade_type=TradeType.BUY,
            creation_timestamp=123123123,
            amount=Decimal("10"),
            price=Decimal("100"),
        )
        order_to_cancel = GatewayInFlightOrder(
            client_order_id="someOrderIDCancel",
            trading_pair=trading_pair,
            order_type=OrderType.LIMIT,
            trade_type=TradeType.SELL,
            creation_timestamp=123123123,
            price=Decimal("90"),
            amount=Decimal("9"),
            exchange_order_id="someExchangeOrderID",
        )
        result: Dict[str, Any] = await GatewayHttpClient.get_instance().clob_batch_order_modify(
            connector="kujira",
            chain="kujira",
            network="mainnet",
            address="0xc7287236f64484b476cfbec0fd21bc49d85f8850c8885665003928a122041e18",  # noqa: mock
            orders_to_create=[order_to_create],
            orders_to_cancel=[order_to_cancel],
        )

        self.assertEqual("mainnet", result["network"])
        self.assertEqual(1647066456595, result["timestamp"])
        self.assertEqual(3, result["latency"])
        self.assertEqual("0x7E5F4552091A69125d5DfCb7b8C2659029395Ceg", result["txHash"])  # noqa: mock
