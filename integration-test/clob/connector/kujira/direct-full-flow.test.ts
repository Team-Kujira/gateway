// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'jest-extended';
import {
  getNotNullOrThrowError,
  logOutput as helperLogOutput,
  logRequest as helperLogRequest,
  logResponse as helperLogResponse,
} from '../../../helpers';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { Slip10RawIndex } from '@cosmjs/crypto';
import { HttpBatchClient, Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { AccountData } from '@cosmjs/proto-signing/build/signer';
import {
  fin,
  Denom,
  KujiraQueryClient,
  kujiraQueryClient,
  msg,
  registry,
  TESTNET,
} from 'kujira.js';
import { coins, GasPrice, SigningStargateClient } from '@cosmjs/stargate';
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate/build/signingcosmwasmclient';
import assert from 'assert';

import { Map as ImmutableMap } from 'immutable';

jest.setTimeout(30 * 60 * 1000);

let account: AccountData;
let querier: KujiraQueryClient;
let stargateClient: SigningStargateClient;
let signingCosmWasmClient: SigningCosmWasmClient;

const allowedMarkets: ImmutableMap<number, Record<any, any>> = ImmutableMap<
  number,
  Record<any, any>
>().asMutable();
const orders: ImmutableMap<number, Record<any, any>> = ImmutableMap<
  number,
  Record<any, any>
>().asMutable();
const allowedMarketsIds: Array<string> = [];

let request: any;
let response: any;

let testTitle: string;
let logRequest: (target: any) => void;
let logResponse: (target: any) => void;
let logOutput: (target: any) => void;

let network: string;

const getMarket = (ordinal: number) =>
  getNotNullOrThrowError<Record<any, any>>(allowedMarkets.get(ordinal));

const getOrder = (ordinal: number) =>
  getNotNullOrThrowError<Record<any, any>>(orders.get(ordinal));

const getOrders = (ordinal: [number]) => {
  const ordersArray = [];
  for (const o in ordinal) {
    ordersArray.push(
      getNotNullOrThrowError<Record<any, any>>(orders.get(ordinal[o]))
    );
  }
  return ordersArray;
};

beforeAll(async () => {
  network = getNotNullOrThrowError<string>(
    process.env.TEST_KUJIRA_NETWORK || TESTNET
  );

  const rpcEndpoint: string = getNotNullOrThrowError<string>(
    process.env.TEST_KUJIRA_RPC_ENDPOINT ||
      'https://test-rpc-kujira.mintthemoon.xyz:443'
  );

  const mnemonic: string = getNotNullOrThrowError<string>(
    process.env.TEST_KUJIRA_MNEMONIC
  );

  const prefix: string = getNotNullOrThrowError<string>(
    process.env.TEST_KUJIRA_PREFIX || 'kujira'
  );

  const accountNumber: number = getNotNullOrThrowError<number>(
    Number(process.env.TEST_KUJIRA_ACCOUNT_NUMBER) || 0
  );

  const marketsAddresses = {
    1: 'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh', // KUJI/DEMO
    2: 'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6', // KUJI/USK
    3: 'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg', // DEMO/USK
  };

  const gasPrice = '0.00125ukuji';

  const signer: DirectSecp256k1HdWallet =
    await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
      prefix: prefix,
      hdPaths: [
        [
          Slip10RawIndex.hardened(44),
          Slip10RawIndex.hardened(118),
          Slip10RawIndex.hardened(0),
          Slip10RawIndex.normal(0),
          Slip10RawIndex.normal(accountNumber),
        ],
      ],
    });

  [account] = await signer.getAccounts();

  const rpcClient: HttpBatchClient = new HttpBatchClient(rpcEndpoint, {
    dispatchInterval: 2000,
  });

  const client: Tendermint34Client = await Tendermint34Client.create(rpcClient);

  querier = kujiraQueryClient({ client });

  stargateClient = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    signer,
    {
      registry,
      gasPrice: GasPrice.fromString(gasPrice),
    }
  );

  signingCosmWasmClient = await SigningCosmWasmClient.connectWithSigner(
    rpcEndpoint,
    signer,
    {
      registry,
      gasPrice: GasPrice.fromString(gasPrice),
    }
  );

  for (const [order, marketAddress] of Object.entries(marketsAddresses)) {
    const pair = getNotNullOrThrowError<fin.Pair>(
      fin.PAIRS.find(
        (it) => it.address == marketAddress && it.chainID == network
      )
    );

    allowedMarkets.set(Number(order), {
      pair: pair,
      address: pair.address,
      base: pair.denoms[0],
      quote: pair.denoms[1],
    });

    allowedMarketsIds.push(pair.address);
  }

  orders.set(1, {
    id: null,
    exchangeOrderId: null,
    ownerAddress: account.address,
    marketId: getMarket(1).address,
    side: 'BUY',
    price: 0.001,
    amount: 10,
    type: 'LIMIT',
    payerAddress: account.address,
    status: null,
    signature: null,
    fee: null,
  });

  orders.set(2, {
    id: null,
    exchangeOrderId: null,
    ownerAddress: account.address,
    marketId: getMarket(1).address,
    side: 'SELL',
    price: 999.99,
    amount: 10,
    type: 'LIMIT',
    payerAddress: account.address,
    status: null,
    signature: null,
    fee: null,
  });

  orders.set(3, {
    id: null,
    exchangeOrderId: null,
    ownerAddress: account.address,
    marketId: getMarket(1).address,
    side: 'BUY',
    price: 0.001,
    amount: 10,
    type: 'LIMIT',
    payerAddress: account.address,
    status: null,
    signature: null,
    fee: null,
  });

  orders.set(4, {
    id: null,
    exchangeOrderId: null,
    ownerAddress: account.address,
    marketId: getMarket(1).address,
    side: 'SELL',
    price: 999.99,
    amount: 10,
    type: 'LIMIT',
    payerAddress: account.address,
    status: null,
    signature: null,
    fee: null,
  });

  orders.set(5, {
    id: null,
    exchangeOrderId: null,
    ownerAddress: account.address,
    marketId: getMarket(1).address,
    side: 'BUY',
    price: 0.001,
    amount: 10,
    type: 'LIMIT',
    payerAddress: account.address,
    status: null,
    signature: null,
    fee: null,
  });

  orders.set(6, {
    id: null,
    exchangeOrderId: null,
    ownerAddress: account.address,
    marketId: getMarket(1).address,
    side: 'SELL',
    price: 999.99,
    amount: 10,
    type: 'LIMIT',
    payerAddress: account.address,
    status: null,
    signature: null,
    fee: null,
  });

  orders.set(7, {
    id: null,
    exchangeOrderId: null,
    ownerAddress: account.address,
    marketId: getMarket(1).address,
    side: 'BUY',
    price: 0.001,
    amount: 10,
    type: 'LIMIT',
    payerAddress: account.address,
    status: null,
    signature: null,
    fee: null,
  });

  orders.set(8, {
    id: null,
    exchangeOrderId: null,
    ownerAddress: account.address,
    marketId: getMarket(1).address,
    side: 'SELL',
    price: 999.99,
    amount: 10,
    type: 'LIMIT',
    payerAddress: account.address,
    status: null,
    signature: null,
    fee: null,
  });

  orders.set(9, {
    id: null,
    exchangeOrderId: null,
    ownerAddress: account.address,
    marketId: getMarket(1).address,
    side: 'BUY',
    price: 0.001,
    amount: 10,
    type: 'LIMIT',
    payerAddress: account.address,
    status: null,
    signature: null,
    fee: null,
  });

  orders.set(10, {
    id: null,
    exchangeOrderId: null,
    ownerAddress: account.address,
    marketId: getMarket(1).address,
    side: 'BUY',
    price: 0.001,
    amount: 10,
    type: 'LIMIT',
    payerAddress: account.address,
    status: null,
    signature: null,
    fee: null,
  });

  orders.set(11, {
    id: null,
    exchangeOrderId: null,
    ownerAddress: account.address,
    marketId: getMarket(2).address,
    side: 'SELL',
    price: 999.99,
    amount: 10,
    type: 'LIMIT',
    payerAddress: account.address,
    status: null,
    signature: null,
    fee: null,
  });
});

beforeEach(async () => {
  testTitle = expect.getState().currentTestName;
  logRequest = (target: any) => helperLogRequest(target, testTitle);
  logResponse = (target: any) => helperLogResponse(target, testTitle);
  logOutput = (target: any) => helperLogOutput(target, testTitle);
});

describe('Kujira Full Flow', () => {
  describe('Markets', () => {
    it('Get market 1', async () => {
      const targetMarketOrdinal = 1;

      const marketId = getMarket(targetMarketOrdinal).address;

      request = {
        id: marketId,
      };

      logRequest(request);

      response = getNotNullOrThrowError<fin.Pair>(
        fin.PAIRS.find((it) => it.address == marketId && it.chainID == network)
      );

      logResponse(response);

      // TODO Fill all fields properly using the response as much as possible and/or retrieving extra info from other calls!!!
      const output = {
        address: response['address'],
        chainID: response['chainID'],
        base: response['denoms'][0]['symbol'],
        quote: response['denoms'][1]['symbol'],
      };

      logOutput(output);
    });

    it('Get markets 2 and 3', async () => {
      const targetMarketOrdinals = [2, 3];

      const marketIds = [
        getMarket(targetMarketOrdinals[0]).address,
        getMarket(targetMarketOrdinals[1]).address,
      ];

      request = {
        ids: marketIds,
      };

      logRequest(request);

      response = fin.PAIRS.filter((it) => marketIds.includes(it.address));

      logResponse(response);

      // TODO Fill all fields properly using the response as much as possible and/or retrieving extra info from other calls!!!
      const output = {};

      logOutput(output);
    });

    it('Get all markets', async () => {
      request = {};

      logRequest(request);

      response = fin.PAIRS.filter((it) =>
        allowedMarketsIds.includes(it.address)
      );

      logResponse(response);

      // TODO Fill all fields properly using the response as much as possible and/or retrieving extra info from other calls!!!
      const output = {};

      logOutput(output);
    });
  });

  describe('Order books', () => {
    it('Get order book from market 1', async () => {
      const targetMarketOrdinal = 1;

      const marketId = getMarket(targetMarketOrdinal).address;

      request = [
        marketId,
        {
          book: {
            offset: 0,
            limit: 3,
          },
        },
      ];

      logRequest(request);

      response = await querier.wasm.queryContractSmart.apply(null, request);

      logResponse(response);

      // TODO Fill all fields properly using the response as much as possible and/or retrieving extra info from other calls!!!
      const output = {
        market: null,
        asks: response['base'],
        bids: response['quote'],
      };

      logOutput(output);
    });

    it('Get order books from the markets 2 and 3', async () => {
      console.log('Not implemented.');
    });

    it('Get all order books', async () => {
      console.log('Not implemented.');
    });
  });

  describe('Tickers', () => {
    it('Get ticker from market 1', async () => {
      const targetMarketOrdinal = 1;

      const marketId = getMarket(targetMarketOrdinal).address;

      request = [
        marketId,
        {
          book: {
            offset: 0,
            limit: 1,
          },
        },
      ];

      logRequest(request);

      response = await querier.wasm.queryContractSmart.apply(null, request);

      logResponse(response);

      // TODO Fill all fields properly using the response as much as possible and/or retrieving extra info from other calls!!!
      const output = {
        price:
          (Number(response['base'][0]['quote_price']) +
            Number(response['quote'][0]['quote_price'])) /
          2,
        timestamp: null,
      };

      logOutput(output);
    });

    it('Get tickers from markets 2 and 3', async () => {
      console.log('Not implemented.');
    });

    it('Get all tickers', async () => {
      console.log('Not implemented.');
    });
  });

  describe('Orders', () => {
    /*
    Full flow for testing orders
    =============================
    market 1: token1/token2
    market 2: token1/token3
    market 3: token2/token3

    get the available wallet balances from the tokens 1, 2, and 3

    create a buy order 1 for market 1

    check the available wallet balances from the tokens 1 and 2

    get the open order 1

    create a sell order 2 for market 2

    check the available wallet balances from the tokens 1 and 2

    get the open order 2

    create 7 orders at once as the following:
      order 3, buy, market 1
      order 4, sell, market 1
      order 5, buy, market 2
      order 6, sell, market 2
      order 7, buy, market 3
      order 8, sell, market 3
      order 9, buy, market 3

    check the wallet balances from the tokens 1, 2, and 3

    get the open orders 6 and 7

    get all open orders

    cancel the order 1

    check the wallet balances from the tokens 1 and 2

    check that it's not possible to get the cancelled order 1

    get all open orders and check that order 1 is missing

    cancel the orders 3, 4, and 5 from markets 1 and 2

    check the wallet balances from the tokens 1, 2, and 3

    check that it's not possible to get the cancelled orders 3, 4, and 5 from the markets 1 and 2

    get all open orders and check that the orders 1, 3, 4, and 5 are missing

    force the filling of order 2

    check the wallet balances from the tokens 1 and 2

    get the filled order 2

    get all filled orders and check that order 2 is present

    get all open orders and check that the orders 1, 2, 3, 4, and 5 are missing

    get all orders (open or filled) and check that the order 2 is present

    force the filling of orders 6 and 7

    check the wallet balances from the tokens 1, 2, and 3

    get the filled orders 6 and 7

    get all filled orders and check that the orders 2, 6, and 7 are present

    get all open orders and check that the orders 1, 2, 3, 4, 5, 6, and 7 are missing

    get all orders (open or filled) and check that the orders 2, 6, and 7 are present

    cancel all the open orders

    check the wallet balances from the tokens 2 and 3

    get all open orders and check that there are no open orders

    get all orders (open or filled) and check that the orders 2, 6, and 7 are present

    create 2 orders at once as the following:
      order 10, buy, market 1
      order 11, sell, market 2

    get all open orders and check that the orders 10 and 11 are present

    get all orders (open or filled) and check that the orders 2, 6, 7, 10, and 11 are present

    cancel all the open orders

    check the wallet balances from the tokens 2 and 3

    get all open orders and check that there are no open orders
    */

    it('Get the available wallet balances from the tokens 1, 2, and 3', async () => {
      // Get balance of a token
      // const marketId = getNotNullOrThrowError<fin.Pair>(allowedMarkets.get(1));
      //
      // const pair = getNotNullOrThrowError<fin.Pair>(
      //   fin.PAIRS.find(
      //     (it) => it.address == marketId.address && it.chainID == network
      //   )
      // );
      //
      // const response = await stargateClient.getBalance(
      //   account.address,
      //   pair.denoms[1]['reference']
      // );

      // Get all balances
      const response = await stargateClient.getAllBalances(account.address);

      console.log(response);
    });

    it('Create a buy order 1 for market 1', async () => {
      const targetOrderOrdinal = 1;
      const targetOrder = getOrder(targetOrderOrdinal);

      const marketId = targetOrder.marketId;

      const market = getNotNullOrThrowError<fin.Pair>(
        fin.PAIRS.find((it) => it.address == marketId && it.chainID == network)
      );

      let denom: Denom;
      if (targetOrder.side == 'BUY') {
        denom = market.denoms[1];
      } else if (targetOrder.side == 'SELL') {
        denom = market.denoms[0];
      } else {
        throw Error('Unrecognized order side.');
      }

      const message = msg.wasm.msgExecuteContract({
        sender: targetOrder.ownerAddress,
        contract: market.address,
        msg: Buffer.from(
          JSON.stringify({
            submit_order: { price: targetOrder.price.toString() },
          })
        ),
        funds: coins(targetOrder.amount, denom.reference),
      });

      request = [account.address, [message], 'auto'];

      logRequest(request);

      response = await stargateClient.signAndBroadcast(
        account.address,
        [message],
        'auto'
      );

      logResponse(response);

      const exchangeOrderId: number = response['events']
        .filter((obj: any) => obj['type'] == 'wasm')[0]
        ['attributes'].filter((obj: any) => obj['key'] == 'order_idx')[0][
        'value'
      ];

      targetOrder.exchangeOrderId = exchangeOrderId;

      const sender: string = response['events']
        .filter((obj: any) => obj['type'] == 'transfer')[0]
        ['attributes'].filter((obj: any) => obj['key'] == 'sender')[0]['value'];

      const offerDenom: Denom = Denom.from(
        response['events']
          .filter((obj: any) => obj['type'] == 'wasm')[0]
          ['attributes'].filter((obj: any) => obj['key'] == 'offer_denom')[0][
          'value'
        ]
      );

      const fee: string = response['events']
        .filter((obj: any) => obj['type'] == 'tx')[0]
        ['attributes'].filter((obj: any) => obj['key'] == 'fee')[0]['value'];

      let side: string;
      if (offerDenom.eq(market.denoms[0])) {
        side = 'SELL';
      } else if (offerDenom.eq(market.denoms[1])) {
        side = 'BUY';
      } else {
        throw new Error("Can't define the order side, implementation error");
      }

      // TODO Fill all fields properly using the response as much as possible and/or retrieving extra info from other calls!!!
      const output = {
        id: null,
        exchangeId: exchangeOrderId,
        marketId: null,
        ownerAddress: sender,
        side: side,
        price: null,
        amount: null,
        type: null,
        status: null,
        fee: fee,
        signature: response['transactionHash'],
      };

      logOutput(output);
    });

    it('Check the available wallet balances from the tokens 1 and 2', async () => {
      console.log('Not implemented.');
    });

    it('Get the open order 1', async () => {
      const targetOrderOrdinal = 1;
      const targetOrder = getOrder(targetOrderOrdinal);
      const marketId = targetOrder.marketId;
      let output = {}; // TODO Fill all fields properly using the response as much as possible and/or retrieving extra info from other calls!!!
      let filled: number;

      request = [
        marketId,
        {
          order: {
            order_idx: targetOrder.exchangeOrderId,
          },
        },
      ];

      const result = await querier.wasm.queryContractSmart.apply(null, request);

      if (result.original_offer_amount > result.offer_amount) {
        filled = 100 * (1 - result.offer_amount / result.original_offer_amount);
      } else {
        filled = 0;
      }

      if (
        result.original_offer_amount == result.filled_amount &&
        result.offer_amount == 0
      ) {
        response = 'This order is finished.';
        output = {
          message: 'Order finished.',
          status: 'filled',
        };
      } else {
        response = result;
        output = {
          owner: result.owner,
          original_offer_amount: result.original_offer_amount,
          filled_amount: result.filled_amount,
          filled_percentage: filled,
          side: '', // TODO !!!
          price: 0, // TODO !!!
          status: 'open',
        };
      }

      logResponse(response);

      logOutput(output);
    });

    it('Create a sell order 2 for market 2', async () => {
      const targetOrderOrdinal = 2;
      const targetOrder = getOrder(targetOrderOrdinal);

      const marketId = targetOrder.marketId;

      const market = getNotNullOrThrowError<fin.Pair>(
        fin.PAIRS.find((it) => it.address == marketId && it.chainID == network)
      );

      let denom: Denom;
      if (targetOrder.side == 'BUY') {
        denom = market.denoms[1];
      } else if (targetOrder.side == 'SELL') {
        denom = market.denoms[0];
      } else {
        throw Error('Unrecognized order side.');
      }

      const message = msg.wasm.msgExecuteContract({
        sender: targetOrder.ownerAddress,
        contract: market.address,
        msg: Buffer.from(
          JSON.stringify({
            submit_order: { price: targetOrder.price.toString() },
          })
        ),
        funds: coins(targetOrder.amount, denom.reference),
      });

      request = [account.address, [message], 'auto'];

      logRequest(request);

      response = await stargateClient.signAndBroadcast(
        account.address,
        [message],
        'auto'
      );

      logResponse(response);

      const exchangeOrderId: number = response['events']
        .filter((obj: any) => obj['type'] == 'wasm')[0]
        ['attributes'].filter((obj: any) => obj['key'] == 'order_idx')[0][
        'value'
      ];

      targetOrder.exchangeOrderId = exchangeOrderId;

      const sender: string = response['events']
        .filter((obj: any) => obj['type'] == 'transfer')[0]
        ['attributes'].filter((obj: any) => obj['key'] == 'sender')[0]['value'];

      const offerDenom: Denom = Denom.from(
        response['events']
          .filter((obj: any) => obj['type'] == 'wasm')[0]
          ['attributes'].filter((obj: any) => obj['key'] == 'offer_denom')[0][
          'value'
        ]
      );

      const fee: string = response['events']
        .filter((obj: any) => obj['type'] == 'tx')[0]
        ['attributes'].filter((obj: any) => obj['key'] == 'fee')[0]['value'];

      let side: string;
      if (offerDenom.eq(market.denoms[0])) {
        side = 'SELL';
      } else if (offerDenom.eq(market.denoms[1])) {
        side = 'BUY';
      } else {
        throw new Error("Can't define the order side, implementation error");
      }

      // TODO Fill all fields properly using the response as much as possible and/or retrieving extra info from other calls!!!
      const output = {
        id: null,
        exchangeId: exchangeOrderId,
        marketId: null,
        ownerAddress: sender,
        side: side,
        price: null,
        amount: null,
        type: null,
        status: null,
        fee: fee,
        signature: response['transactionHash'],
      };

      logOutput(output);
    });

    it('Check the available wallet balances from the tokens 1 and 2', async () => {
      console.log('Not implemented.');
    });

    it('Get the open order 2', async () => {
      console.log('Not implemented.');
    });

    it('Create 7 orders at once', async () => {
      console.log('Not implemented.');
    });

    it('Check the wallet balances from the tokens 1, 2, and 3', async () => {
      console.log('Not implemented.');
    });

    it('Get the open orders 6 and 7', async () => {
      console.log('Not implemented.');
    });

    it('Get all open orders', async () => {
      let output = {};

      for (const marketId of allowedMarketsIds) {
        request = [
          marketId,
          {
            orders_by_user: {
              address: account.address,
              limit: 100,
            },
          },
        ];

        logRequest(request);

        response = await querier.wasm.queryContractSmart.apply(null, request);

        logResponse(response);

        // const marketName: string =
        //   `${market.denoms[0].symbol}/${market.denoms[1].symbol}`.toString();
        //
        // const orders = response.orders.filter((it: any) => {
        //   return parseFloat(it['offer_amount']) > 0;
        // });

        // TODO Fill all fields properly using the response as much as possible and/or retrieving extra info from other calls!!!
        output = { ...output };
      }

      logOutput(output);
    });

    it('Cancel the order 1', async () => {
      const targetOrderOrdinal = 1;
      const targetOrder = getOrder(targetOrderOrdinal);

      const marketId = targetOrder.marketId;

      const market = getNotNullOrThrowError<fin.Pair>(
        fin.PAIRS.find((it) => it.address == marketId && it.chainID == network)
      );
      const amount = 1000;

      let denom: Denom;
      if (targetOrder.side == 'BUY') {
        denom = market.denoms[1];
      } else if (targetOrder.side == 'SELL') {
        denom = market.denoms[0];
      } else {
        throw Error('Unrecognized order side.');
      }

      const message = msg.wasm.msgExecuteContract({
        sender: account.address,
        contract: market.address,
        msg: Buffer.from(
          JSON.stringify({
            retract_order: {
              order_idx: targetOrderOrdinal.toString(),
              // amount: null, for partial retraction
            },
            // retract_orders: {
            //   order_idxs: [id],
            // },
          })
        ),
        funds: coins(amount, denom.reference),
      });

      request = [account.address, [message], 'auto'];

      logRequest(request);

      response = await stargateClient.signAndBroadcast(
        account.address,
        [message],
        'auto'
      );

      logResponse(response);

      // TODO Fill all fields properly using the response as much as possible and/or retrieving extra info from other calls!!!
      const output = {
        id: null,
        exchangeId: targetOrderOrdinal,
        marketName: market,
        ownerAddress: null,
        side: null,
        price: null,
        amount: null,
        type: null,
        status: 'CANCELLED', // Or CANCELATION_PENDING
        signature: null,
        fee: response['gasUsed'],
      };

      logOutput(output);
    });

    it('Check the wallet balances from the tokens 1 and 2', async () => {
      console.log('Not implemented.');
    });

    it("Check that it's not possible to get the cancelled order 1", async () => {
      console.log('Not implemented.');
    });

    it('Get all open orders and check that order 1 is missing', async () => {
      console.log('Not implemented.');
    });

    it('Cancel the orders 3, 4, and 5 from markets 1 and 2', async () => {
      console.log('Not implemented.');
    });

    it('Check the wallet balances from the tokens 1, 2, and 3', async () => {
      console.log('Not implemented.');
    });

    it("Check that it's not possible to get the cancelled orders 3, 4, and 5 from the markets 1 and 2", async () => {
      console.log('Not implemented.');
    });

    it('Get all open orders and check that the orders 1, 3, 4, and 5 are missing', async () => {
      console.log('Not implemented.');
    });

    it('Force the filling of order 2', async () => {
      console.log('Not implemented.');
    });

    it('Check the wallet balances from the tokens 1 and 2', async () => {
      console.log('Not implemented.');
    });

    it('Get the filled order 2', async () => {
      const targetOrderOrdinal = 2;
      const targetOrder = getOrder(targetOrderOrdinal);

      const marketId = targetOrder.marketId;

      request = [
        marketId,
        {
          orders_by_user: {
            address: account.address,
            limit: 100,
          },
        },
      ];

      logRequest(request);

      response = await querier.wasm.queryContractSmart.apply(null, request);

      logResponse(response);

      const output: [any] = response.orders
        .filter((it: any) => {
          return parseFloat(it['offer_amount']) == 0;
        })
        .filter((it: any) => Number(it['idx']) == targetOrder.exchangeOrderId);

      logOutput(output);

      assert(output.length == 1);
    });

    it('Get all open orders and check that the orders 1, 2, 3, 4, and 5 are missing', async () => {
      console.log('Not implemented.');
    });

    it('Get all orders (open or filled) and check that the order 2 is present', async () => {
      console.log('Not implemented.');
      request = [
        markets[1],
        {
          orders_by_user: { address: account.address, limit: 100 },
        },
      ];

      logRequest(request);

      response = await querier.wasm.queryContractSmart.apply(null, request);

      logResponse(response);

      const output: [any] = response.orders.filter((it: any) => {
        return parseInt(it['idx']) == ordersMap.get(2);
      });

      logOutput(output);

      assert(output.length == 1);
    });

    it('Force the filling of orders 6 and 7', async () => {
      console.log('Not implemented.');
    });

    it('Check the wallet balances from the tokens 1, 2, and 3', async () => {
      console.log('Not implemented.');
    });

    it('Get the filled orders 6 and 7', async () => {
      console.log('Not implemented.');
    });

    it('Get all filled orders and check that the orders 2, 6, and 7 are present', async () => {
      console.log('Not implemented.');
    });

    it('Get all open orders and check that the orders 1, 2, 3, 4, 5, 6, and 7 are missing', async () => {
      console.log('Not implemented.');
    });

    it('Get all orders (open or filled) and check that the orders 2, 6, and 7 are present', async () => {
      console.log('Not implemented.');
    });

    it('Cancel all the open orders', async () => {
      const ordersIds = [];
      let output = {};

      for (const marketId of allowedMarketsIds) {
        request = [
          marketId,
          {
            orders_by_user: {
              address: account.address,
              limit: 100,
            },
          },
        ];

        logRequest(request);

        response = await querier.wasm.queryContractSmart.apply(null, request);

        logResponse(response);

        // TODO fill with the correct value!!!
        ordersIds.push(response['order_idx']);

        const amount = 1000;
        const pair = getNotNullOrThrowError<fin.Pair>(
          fin.PAIRS.find(
            (it) => it.address == marketId && it.chainID == network
          )
        );
        const denom = pair.denoms[1];

        const message = msg.wasm.msgExecuteContract({
          sender: account.address,
          contract: marketId,
          msg: Buffer.from(
            JSON.stringify({
              retract_orders: {
                order_idxs: ordersIds,
              },
            })
          ),
          funds: coins(amount, denom.reference),
        });

        request = [account.address, [message], 'auto'];

        logRequest(request);

        response = await stargateClient.signAndBroadcast(
          account.address,
          [message],
          'auto'
        );

        logResponse(response);

        // TODO Fill all fields properly using the response as much as possible and/or retrieving extra info from other calls!!!
        output = { ...output };
      }

      logOutput(output);
    });

    it('Check the wallet balances from the tokens 2 and 3', async () => {
      console.log('Not implemented.');
    });

    it('Get all open orders and check that there are no open orders', async () => {
      console.log('Not implemented.');
    });

    it('Get all orders (open or filled) and check that the orders 2, 6, and 7 are present', async () => {
      console.log('Not implemented.');
    });

    it('Create 2 orders at once', async () => {
      const targetOrderOrdinals = [10, 11];
      const targetOrders = getOrders(targetOrderOrdinals);

      const messages = [];

      for (const targetOrder of targetOrders) {
        const marketId = targetOrder.marketId;
        const market = getNotNullOrThrowError<fin.Pair>(
          fin.PAIRS.find(
            (it) => it.address == marketId && it.chainID == network
          )
        );

        let denom: Denom;
        if (targetOrder.side == 'BUY') {
          denom = market.denoms[1];
        } else if (targetOrder.side == 'SELL') {
          denom = market.denoms[0];
        } else {
          throw Error('Unrecognized order side.');
        }

        const message = msg.wasm.msgExecuteContract({
          sender: targetOrder.ownerAddress,
          contract: market.address,
          msg: Buffer.from(
            JSON.stringify({
              submit_order: { price: targetOrder.price.toString() },
            })
          ),
          funds: coins(targetOrder.amount, denom.reference),
        });

        messages.push(message);
      }

      request = [account.address, messages, 'auto'];

      logRequest(request);

      response = await stargateClient.signAndBroadcast(
        account.address,
        messages,
        'auto'
      );

      logResponse(response);

      // const exchangeOrderId: number = response['events']
      //   .filter((obj: any) => obj['type'] == 'wasm')[0]
      //   ['attributes'].filter((obj: any) => obj['key'] == 'order_idx')[0][
      //   'value'
      // ];
      //
      // targetOrder.exchangeOrderId = exchangeOrderId;
      //
      // const sender: string = response['events']
      //   .filter((obj: any) => obj['type'] == 'transfer')[0]
      //   ['attributes'].filter((obj: any) => obj['key'] == 'sender')[0]['value'];
      //
      // const offerDenom: Denom = Denom.from(
      //   response['events']
      //     .filter((obj: any) => obj['type'] == 'wasm')[0]
      //     ['attributes'].filter((obj: any) => obj['key'] == 'offer_denom')[0][
      //     'value'
      //   ]
      // );
      //
      // const fee: string = response['events']
      //   .filter((obj: any) => obj['type'] == 'tx')[0]
      //   ['attributes'].filter((obj: any) => obj['key'] == 'fee')[0]['value'];
      //
      // let side: string;
      // if (offerDenom.eq(market.denoms[0])) {
      //   side = 'SELL';
      // } else if (offerDenom.eq(market.denoms[1])) {
      //   side = 'BUY';
      // } else {
      //   throw new Error("Can't define the order side, implementation error");
      // }
      //
      // // TODO Fill all fields properly using the response as much as possible and/or retrieving extra info from other calls!!!
      // const output = {
      //   id: null,
      //   exchangeId: exchangeOrderId,
      //   marketId: null,
      //   ownerAddress: sender,
      //   side: side,
      //   price: null,
      //   amount: null,
      //   type: null,
      //   status: null,
      //   fee: fee,
      //   signature: response['transactionHash'],
      // };
      //
      // logOutput(output);
    });

    it('Cet all open orders and check that the orders 10 and 11 are present', async () => {
      console.log('Not implemented.');
    });

    it('Get all orders (open or filled) and check that the orders 2, 6, 7, 10, and 11 are present', async () => {
      console.log('Not implemented.');
    });

    it('Cancel all the open orders', async () => {
      console.log('Not implemented.');
    });

    it('Check the wallet balances from the tokens 2 and 3', async () => {
      console.log('Not implemented.');
    });

    it('Get all open orders and check that there are no open orders', async () => {
      console.log('Not implemented.');
    });

    it('Settle funds for an order', async () => {
      const targetOrderOrdinal = 2;
      const targetOrder = getOrder(targetOrderOrdinal);
      const marketId = targetOrder.marketId;

      const market = getNotNullOrThrowError<fin.Pair>(
        fin.PAIRS.find((it) => it.address == marketId && it.chainID == network)
      );

      const finClient = new fin.FinClient(
        signingCosmWasmClient,
        account.address,
        market.address
      );

      request = {
        orderIdxs: [57324], // TODO Hard code to fast test. Change it.!!!
        fee: 'auto',
      };

      response = await finClient.withdrawOrders(request);

      console.log(response);
    });
  });
});
