import 'jest-extended';
import { BigNumber } from 'bignumber.js';
import { Kujira } from '../../../../src/connectors/kujira/kujira';
import { KujiraConfig } from '../../../../src/connectors/kujira/kujira.config';
import {
  getNotNullOrThrowError,
  logRequest as helperLogRequest,
  logResponse as helperLogResponse,
} from '../../../helpers';
import {
  AllMarketsWithdrawsRequest,
  Balance,
  Balances,
  CancelAllOrdersRequest,
  CancelOrderRequest,
  CancelOrdersRequest,
  GetAllBalancesRequest,
  GetAllMarketsRequest,
  GetAllOrderBooksRequest,
  GetAllTickersRequest,
  GetAllTokensRequest,
  GetBalanceRequest,
  GetBalancesRequest,
  GetMarketRequest,
  GetMarketsRequest,
  GetOrderBookRequest,
  GetOrderBooksRequest,
  GetOrderRequest,
  GetOrdersRequest,
  GetTickerRequest,
  GetTickersRequest,
  GetTokenRequest,
  GetTokensRequest,
  IMap,
  Market,
  MarketsWithdrawsRequest,
  MarketWithdrawRequest,
  Order,
  OrderClientId,
  OrderFee,
  OrderId,
  OrderMarketName,
  OrderSide,
  OrderStatus,
  OrderType,
  OwnerAddress,
  PlaceOrderRequest,
  PlaceOrdersRequest,
  TokenId,
} from '../../../../src/connectors/kujira/kujira.types';
import { DEMO, Denom, fin, KUJI, TESTNET, USK_TESTNET } from 'kujira.js';
import { addWallet } from '../../../../src/services/wallet/wallet.controllers';
import { AddWalletRequest } from '../../../../src/services/wallet/wallet.requests';

jest.setTimeout(30 * 60 * 1000);

let testTitle: string;
let logRequest: (target: any) => void;
let logResponse: (target: any) => void;
// let logOutput: (target: any) => void;

let allTokens: any;

let kujira: Kujira;

const config = KujiraConfig.config;

const tokenIds = {
  1: KUJI.reference, // KUJI
  2: USK_TESTNET.reference, // USK
  3: DEMO.reference, // DEMO
};

const networkPairs: Record<string, fin.Pair> = fin.PAIRS[TESTNET];

const marketIds = {
  1: networkPairs[
    'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh'
  ].address, // KUJI/DEMO
  2: networkPairs[
    'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6'
  ].address, // KUJI/USK
  3: networkPairs[
    'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg'
  ].address, // DEMO/USK
};

const orders: IMap<OrderClientId, Order> = IMap<
  OrderClientId,
  Order
>().asMutable();

let userBalances: Balances;

let lastPayedFeeSum: OrderFee | undefined;

const getOrder = (clientId: OrderClientId): Order => {
  return getOrders([clientId]).first();
};

const getOrders = (clientIds: OrderClientId[]): IMap<OrderClientId, Order> => {
  const output = IMap<OrderClientId, Order>().asMutable();
  for (const clientId of clientIds) {
    output.set(clientId, getNotNullOrThrowError<Order>(orders.get(clientId)));
  }

  return output;
};

let ownerAddress: OwnerAddress;

beforeAll(async () => {
  const mnemonic: string = getNotNullOrThrowError<string>(
    process.env.TEST_KUJIRA_MNEMONIC
  );

  const accountNumber: number = getNotNullOrThrowError<number>(
    Number(process.env.TEST_KUJIRA_ACCOUNT_NUMBER) || config.accountNumber
  );

  ownerAddress = (
    await addWallet({
      chain: config.chain,
      network: config.network,
      privateKey: mnemonic,
      address: undefined,
      accountId: accountNumber,
    } as AddWalletRequest)
  ).address;

  kujira = await Kujira.getInstance(config.chain, config.network);

  await kujira.init();

  orders.set('1', {
    id: undefined,
    clientId: '1',
    marketName: undefined as unknown as OrderMarketName,
    marketId: marketIds[1],
    market: undefined as unknown as Market,
    ownerAddress: ownerAddress,
    payerAddress: ownerAddress,
    price: BigNumber(0.001),
    amount: BigNumber(1),
    side: OrderSide.BUY,
    status: undefined,
    type: OrderType.LIMIT,
    fee: undefined,
    fillingTimestamp: undefined,
    hashes: undefined,
  });

  orders.set('2', {
    id: undefined,
    clientId: '2',
    marketName: undefined as unknown as OrderMarketName,
    marketId: marketIds[2],
    market: undefined as unknown as Market,
    ownerAddress: ownerAddress,
    payerAddress: ownerAddress,
    price: undefined,
    amount: BigNumber(1),
    side: OrderSide.SELL,
    status: undefined,
    type: OrderType.LIMIT,
    fee: undefined,
    fillingTimestamp: undefined,
    hashes: undefined,
  });

  orders.set('3', {
    id: undefined,
    clientId: '3',
    marketName: undefined as unknown as OrderMarketName,
    marketId: marketIds[3],
    market: undefined as unknown as Market,
    ownerAddress: ownerAddress,
    payerAddress: ownerAddress,
    price: undefined,
    amount: BigNumber(1),
    side: OrderSide.SELL,
    status: undefined,
    type: OrderType.MARKET,
    fee: undefined,
    fillingTimestamp: undefined,
    hashes: undefined,
  });

  orders.set('4', {
    id: undefined,
    clientId: '4',
    marketName: undefined as unknown as OrderMarketName,
    marketId: marketIds[1],
    market: undefined as unknown as Market,
    ownerAddress: ownerAddress,
    payerAddress: ownerAddress,
    price: BigNumber(0.001),
    amount: BigNumber(1),
    side: OrderSide.BUY,
    status: undefined,
    type: OrderType.LIMIT,
    fee: undefined,
    fillingTimestamp: undefined,
    hashes: undefined,
  });

  orders.set('5', {
    id: undefined,
    clientId: '5',
    marketName: undefined as unknown as OrderMarketName,
    marketId: marketIds[2],
    market: undefined as unknown as Market,
    ownerAddress: ownerAddress,
    payerAddress: ownerAddress,
    price: BigNumber(999.999),
    amount: BigNumber(1),
    side: OrderSide.SELL,
    status: undefined,
    type: OrderType.LIMIT,
    fee: undefined,
    fillingTimestamp: undefined,
    hashes: undefined,
  });

  orders.set('6', {
    id: undefined,
    clientId: '6',
    marketName: undefined as unknown as OrderMarketName,
    marketId: marketIds[3],
    market: undefined as unknown as Market,
    ownerAddress: ownerAddress,
    payerAddress: ownerAddress,
    price: undefined,
    amount: BigNumber(1),
    side: OrderSide.BUY,
    status: undefined,
    type: OrderType.LIMIT,
    fee: undefined,
    fillingTimestamp: undefined,
    hashes: undefined,
  });

  orders.set('7', {
    id: undefined,
    clientId: '7',
    marketName: undefined as unknown as OrderMarketName,
    marketId: marketIds[1],
    market: undefined as unknown as Market,
    ownerAddress: ownerAddress,
    payerAddress: ownerAddress,
    price: undefined,
    amount: BigNumber(1),
    side: OrderSide.SELL,
    status: undefined,
    type: OrderType.LIMIT,
    fee: undefined,
    fillingTimestamp: undefined,
    hashes: undefined,
  });

  orders.set('8', {
    id: undefined,
    clientId: '8',
    marketName: undefined as unknown as OrderMarketName,
    marketId: marketIds[2],
    market: undefined as unknown as Market,
    ownerAddress: ownerAddress,
    payerAddress: ownerAddress,
    price: BigNumber(0.001),
    amount: BigNumber(1),
    side: OrderSide.BUY,
    status: undefined,
    type: OrderType.LIMIT,
    fee: undefined,
    fillingTimestamp: undefined,
    hashes: undefined,
  });

  orders.set('9', {
    id: undefined,
    clientId: '9',
    marketName: undefined as unknown as OrderMarketName,
    marketId: marketIds[3],
    market: undefined as unknown as Market,
    ownerAddress: ownerAddress,
    payerAddress: ownerAddress,
    price: BigNumber(999.999),
    amount: BigNumber(1),
    side: OrderSide.SELL,
    status: undefined,
    type: OrderType.LIMIT,
    fee: undefined,
    fillingTimestamp: undefined,
    hashes: undefined,
  });

  orders.set('10', {
    id: undefined,
    clientId: '10',
    marketName: undefined as unknown as OrderMarketName,
    marketId: marketIds[1],
    market: undefined as unknown as Market,
    ownerAddress: ownerAddress,
    payerAddress: ownerAddress,
    price: undefined,
    amount: BigNumber(1),
    side: OrderSide.BUY,
    status: undefined,
    type: OrderType.MARKET,
    fee: undefined,
    fillingTimestamp: undefined,
    hashes: undefined,
  });

  orders.set('11', {
    id: undefined,
    clientId: '11',
    marketName: undefined as unknown as OrderMarketName,
    marketId: marketIds[2],
    market: undefined as unknown as Market,
    ownerAddress: ownerAddress,
    payerAddress: ownerAddress,
    price: undefined,
    amount: BigNumber(1),
    side: OrderSide.SELL,
    status: undefined,
    type: OrderType.MARKET,
    fee: undefined,
    fillingTimestamp: undefined,
    hashes: undefined,
  });

  orders.set('12', {
    id: undefined,
    clientId: '12',
    marketName: undefined as unknown as OrderMarketName,
    marketId: marketIds[3],
    market: undefined as unknown as Market,
    ownerAddress: ownerAddress,
    payerAddress: ownerAddress,
    price: BigNumber(0.001),
    amount: BigNumber(1),
    side: OrderSide.BUY,
    status: undefined,
    type: OrderType.LIMIT,
    fee: undefined,
    fillingTimestamp: undefined,
    hashes: undefined,
  });

  orders.set('13', {
    id: undefined,
    clientId: '13',
    marketName: undefined as unknown as OrderMarketName,
    marketId: marketIds[1],
    market: undefined as unknown as Market,
    ownerAddress: ownerAddress,
    payerAddress: ownerAddress,
    price: BigNumber(999.99),
    amount: BigNumber(1),
    side: OrderSide.SELL,
    status: undefined,
    type: OrderType.LIMIT,
    fee: undefined,
    fillingTimestamp: undefined,
    hashes: undefined,
  });
});

beforeEach(async () => {
  testTitle = expect.getState().currentTestName;
  logRequest = (target: any) => helperLogRequest(target, testTitle);
  logResponse = (target: any) => helperLogResponse(target, testTitle);
  // logOutput = (target: any) => helperLogOutput(target, testTitle);
});

// TODO Add tests to test the retrieval of the estimated fees, current block, and one or more transactions or wallet public keys.
describe('Kujira Full Flow', () => {
  describe('Tokens', () => {
    it('Get token 1', async () => {
      const request = {
        id: tokenIds[1],
      } as GetTokenRequest;

      logRequest(request);

      const response = await kujira.getToken(request);

      logResponse(response);
    });

    it('Get tokens 2 and 3', async () => {
      const request = {
        ids: [tokenIds[2], tokenIds[3]],
      } as GetTokensRequest;

      logRequest(request);

      const response = await kujira.getTokens(request);

      logResponse(response);
    });

    it('Get all tokens', async () => {
      const request = {} as GetAllTokensRequest;

      logRequest(request);

      allTokens = await kujira.getAllTokens(request);

      logResponse(allTokens);
    });
  });

  describe('Markets', () => {
    it('Get market 1', async () => {
      const request = {
        id: marketIds[1],
      } as GetMarketRequest;

      logRequest(request);

      const response = await kujira.getMarket(request);

      logResponse(response);
    });

    it('Get markets 2 and 3', async () => {
      const request = {
        ids: [marketIds[2], marketIds[3]],
      } as GetMarketsRequest;

      logRequest(request);

      const response = await kujira.getMarkets(request);

      logResponse(response);
    });

    it('Get all markets', async () => {
      const request = {} as GetAllMarketsRequest;

      logRequest(request);

      const response = await kujira.getAllMarkets(request);

      logResponse(response);
    });
  });

  describe('Order books', () => {
    it('Get order book from market 1', async () => {
      const request = {
        marketId: marketIds[1],
      } as GetOrderBookRequest;

      logRequest(request);

      const response = await kujira.getOrderBook(request);

      logResponse(response);
    });

    it('Get order books from the markets 2 and 3', async () => {
      const request = {
        marketIds: [marketIds[2], marketIds[3]],
      } as GetOrderBooksRequest;

      logRequest(request);

      const response = await kujira.getOrderBooks(request);

      logResponse(response);
    });

    it('Get all order books', async () => {
      const request = {} as GetAllOrderBooksRequest;

      logRequest(request);

      const response = await kujira.getAllOrderBooks(request);

      logResponse(response);
    });
  });

  describe('Tickers', () => {
    it('Get ticker from market 1', async () => {
      const request = {
        marketId: marketIds[1],
      } as GetTickerRequest;

      logRequest(request);

      const response = await kujira.getTicker(request);

      logResponse(response);
    });

    it('Get tickers from markets 2 and 3', async () => {
      const request = {
        marketIds: [marketIds[2], marketIds[3]],
      } as GetTickersRequest;

      logRequest(request);

      const response = await kujira.getTickers(request);

      logResponse(response);
    });

    it('Get all tickers', async () => {
      const request = {} as GetAllTickersRequest;

      logRequest(request);

      const response = await kujira.getAllTickers(request);

      logResponse(response);
    });
  });

  describe('User', () => {
    it('Get balance of token 1', async () => {
      const request = {
        tokenId: tokenIds[1],
        ownerAddress: ownerAddress,
      } as GetBalanceRequest;

      logRequest(request);

      const response = await kujira.getBalance(request);

      logResponse(response);
    });

    it('Get balances of tokens 2 and 3', async () => {
      const request = {
        tokenIds: [tokenIds[2], tokenIds[3]],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      logRequest(request);

      const response = await kujira.getBalances(request);

      logResponse(response);
    });

    it('Get all balances', async () => {
      const request = {
        ownerAddress: ownerAddress,
      } as GetAllBalancesRequest;

      logRequest(request);

      const response = await kujira.getAllBalances(request);

      logResponse(response);
    });
  });

  describe('Orders', () => {
    /*
    Full flow for testing orders
    =============================
    market 1: token1/token2
    market 2: token1/token3
    market 3: token2/token3

    cancel all open orders

    get the wallet balances from the tokens 1, 2, and 3

    create a limit buy order 1 for market 1

    check the available wallet balances from the tokens 1 and 3

    get the open order 1

    create a limit sell order 2 for market 2 (slightly better than the market price)

    check the available wallet balances from the tokens 1 and 3

    get the filled order 2

    create a market sell order 3 for market 3

    check the available wallet balances from the tokens 2 and 3

    get the filled order 3

    create 8 orders at once as the following:
      order 4, limit, buy, market 1
      order 5, limit, sell, market 2
      order 6, limit, buy, market 3  (slightly better than the market price)
      order 7, limit, sell, market 1  (slightly better than the market price)
      order 8, limit, buy, market 2
      order 9, limit, sell, market 3
      order 10, market, buy, market 1
      order 11, market, sell, market 2

    check the wallet balances from the tokens 1, 2, and 3

    get the open orders 8 and 9

    get all open orders and check that the orders 2, 3, 6, 7, 10, and 11 are missing

    cancel the order 1

    check the wallet balances from the tokens 1 and 2

    check that it's not possible to get the cancelled order 1

    get all open orders and check that orders 1, 2, 3, 6, 7, 10, and 11 are missing

    cancel the orders 4 and 5

    check the wallet balances from the tokens 1, 2, and 3

    check that it's not possible to get the cancelled orders 4 and 5

    get all open orders and check that the orders 1, 2, 3, 4, 5, 6, 7, 10, and 11 are missing

    get all filled orders and check that the orders 2, 3, 6, 7, 10, and 11 are present

    get all orders (open or filled) and check that the orders 2, 3, 6, 7, 10, and 11 are present and the orders 1, 4, 5 are missing

    cancel all the open orders

    check the wallet balances from the tokens 1, 2 and 3

    get all open orders and check that there are no open orders

    get all orders (open or filled) and check that the orders 2, 3, 6, 7, 10, and 11 are present

    create 2 orders at once as the following:
      order 12, limit, buy, market 3
      order 13, limit, sell, market 1

    get all open orders and check that the orders 12 and 13 are present

    get all orders (open or filled) and check that the orders 2, 3, 6, 7, 10, 11, 12, and 13 are present

    cancel all open orders

    check the wallet balances from the tokens 1, 2 and 3

    get all open orders and check that there are no open orders

    settle funds for market 1

    check the wallet balances from the tokens 1, 2 and 3

    settle funds for markets 2 and 3

    check the wallet balances from the tokens 1, 2 and 3

    settle funds for all markets
    */

    it('Cancel all open orders', async () => {
      const request = {
        ownerAddress: ownerAddress,
      } as CancelAllOrdersRequest;

      logRequest(request);

      const response = await kujira.cancelAllOrders(request);

      logResponse(response);
    });

    it('Settle funds for all markets', async () => {
      const request = {
        ownerAddress: ownerAddress,
      } as AllMarketsWithdrawsRequest;

      logRequest(request);

      const response = await kujira.settleAllMarketsFunds(request);

      logResponse(response);
    });

    it('Get the wallet balances from the tokens 1, 2, and 3', async () => {
      const request = {
        tokenIds: [tokenIds[1], tokenIds[2], tokenIds[3]],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      logRequest(request);

      const response = await kujira.getBalances(request);

      logResponse(response);

      expect(response.total.free.gte(0)).toBeTrue();
      expect(response.total.unsettled.gte(0)).toBeTrue();
      expect(response.total.lockedInOrders.gte(0)).toBeTrue();

      for (const balance of response.tokens.values()) {
        expect(balance.free.gte(0)).toBeTrue();
        expect(balance.unsettled.gte(0)).toBeTrue();
        expect(balance.lockedInOrders.gte(0)).toBeTrue();
      }

      userBalances = response;
    });

    it('Create a limit buy order 1 for market 1', async () => {
      const candidate = getOrder('1');

      const request = { ...candidate } as PlaceOrderRequest;

      logRequest(request);

      const response = await kujira.placeOrder(request);

      logResponse(response);

      candidate.id = response.id;
      candidate.marketName = response.marketName;
      candidate.market = response.market;
      candidate.status = response.status;
      candidate.fee = response.fee;
      candidate.hashes = response.hashes;

      expect(response).toBeObject();
      expect(response.id?.length).toBeGreaterThan(0);
      expect(response.marketId).toBe(candidate.marketId);
      expect(response.ownerAddress).toBe(candidate.ownerAddress);
      expect(response.price).toEqual(candidate.price);
      expect(response.amount).toEqual(candidate.amount);
      expect(response.side).toBe(candidate.side);
      expect(response.marketName).toBe(candidate.marketName);
      expect(response.payerAddress).toBe(candidate.payerAddress);
      expect(response.status).toBe(OrderStatus.OPEN);
      expect(response.hashes?.creation?.length).toBeCloseTo(64);

      lastPayedFeeSum = response.fee;
    });

    // TODO Fix!!!
    it('Check the available wallet balances from the tokens 1 and 3', async () => {
      const order = getOrder('1');
      const marketTokens = networkPairs[order.marketId].denoms;

      const request = {
        tokenIds: [tokenIds[1], tokenIds[3]],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      logRequest(request);

      const response = await kujira.getBalances(request);

      logResponse(response);

      // Verifying token 1 balance
      expect(response.tokens.get(tokenIds['1'])?.free).toEqual(
        getNotNullOrThrowError<any>(
          userBalances.tokens.get(tokenIds['1'])
        ).free.minus(lastPayedFeeSum)
      );

      // Verifying token 2 balance
      expect(response.tokens.get(tokenIds['3'])?.free).toEqual(
        getNotNullOrThrowError<any>(
          userBalances.tokens.get(tokenIds['3'])
        ).free.minus(response.total.lockedInOrders)
      );

      const currentBaseBalance = getNotNullOrThrowError<Balance>(
        response.tokens.get(marketTokens[0].reference)
      );

      const currentQuoteBalance = getNotNullOrThrowError<Balance>(
        response.tokens.get(marketTokens[1].reference)
      );

      userBalances.tokens.set(marketTokens[0].reference, currentBaseBalance);
      userBalances.tokens.set(marketTokens[1].reference, currentQuoteBalance);
    });

    it('Get the open order 1', async () => {
      const target = getOrder('1');

      const request = {
        id: target.id,
        status: OrderStatus.OPEN,
        marketId: target.marketId,
        ownerAddress: ownerAddress,
      } as GetOrderRequest;

      logRequest(request);

      const response = await kujira.getOrder(request);

      logResponse(response);

      expect(response).toBeObject();
      expect(response.status).toEqual(OrderStatus.OPEN);
      expect(response.id).toEqual(target.id);
      expect(response.marketName).toBe(target.marketName);
      expect(response.marketId).toBe(target.marketId);
      expect(response.ownerAddress).toEqual(target.ownerAddress);
      expect(response.price).toEqual(target.price);
      expect(response.amount).toEqual(target.amount);
    });

    it('Create a limit sell order 2 for market 2 (slightly better than the market price)', async () => {
      const candidate = getOrder('2');

      const orderBookRequest = {
        marketId: candidate.marketId,
      } as GetOrderBookRequest;

      const orderBookResponse = await kujira.getOrderBook(orderBookRequest);

      const marketPrecision = getNotNullOrThrowError<number>(
        orderBookResponse.market.precision
      );

      const spread = 1; // 1%
      candidate.price = getNotNullOrThrowError<BigNumber>(
        orderBookResponse.bestBid?.price
      )
        .times((100 - spread) / 100)
        .decimalPlaces(marketPrecision);

      const request = { ...candidate } as PlaceOrderRequest;

      logRequest(request);

      const response = await kujira.placeOrder(request);

      logResponse(response);

      candidate.id = response.id;
      candidate.marketName = response.marketName;
      candidate.market = response.market;
      candidate.status = response.status;
      candidate.fee = response.fee;
      candidate.hashes = response.hashes;

      expect(response).toBeObject();
      expect(response.id?.length).toBeGreaterThan(0);
      expect(response.marketId).toBe(candidate.marketId);
      expect(response.ownerAddress).toBe(candidate.ownerAddress);
      expect(response.price).toEqual(candidate.price);
      expect(response.amount).toEqual(candidate.amount);
      expect(response.side).toBe(candidate.side);
      expect(response.marketName).toBe(candidate.marketName);
      expect(response.payerAddress).toBe(candidate.payerAddress);
      expect(response.hashes?.creation?.length).toBeCloseTo(64);
    });

    // TODO Fix!!!
    it('Check the available wallet balances from the tokens 1 and 2', async () => {
      const request = {
        tokenIds: [tokenIds[1], tokenIds[2]],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      logRequest(request);

      const response = await kujira.getBalances(request);

      const requestTokensDenoms = [
        Denom.from(getNotNullOrThrowError<TokenId[]>(request.tokenIds)[0]),
        Denom.from(getNotNullOrThrowError<TokenId[]>(request.tokenIds)[1]),
      ];

      const responseTokens = response.tokens
        .keySeq()
        .map((obj: any) => obj)
        .toArray();
      const responseTokensDenom = [
        Denom.from(responseTokens[0]),
        Denom.from(responseTokens[1]),
      ];

      expect(responseTokensDenom[0].eq(responseTokensDenom[1])).toBeFalsy;
      expect(
        requestTokensDenoms[0].eq(responseTokensDenom[0]) ||
          requestTokensDenoms[0].eq(responseTokensDenom[1])
      ).toBeTruthy();
      expect(
        requestTokensDenoms[1].eq(responseTokensDenom[1]) ||
          requestTokensDenoms[1].eq(responseTokensDenom[0])
      ).toBeTruthy();

      expect(response).toContainKey('total');

      response.tokens.valueSeq().forEach((token: any) => {
        expect(token).toContainKeys(['free', 'unsettled', 'lockedInOrders']);
      });
      logResponse(response);

      const order = getOrder('2');
      const marketTokens = networkPairs[order.marketId].denoms;
      const oldBaseBalance = getNotNullOrThrowError<Balance>(
        userBalances.tokens.get(marketTokens[0].reference)
      );
      const newBaseBalance = getNotNullOrThrowError<Balance>(
        response.tokens.get(marketTokens[0].reference)
      );
      const oldQuoteBalance = getNotNullOrThrowError<Balance>(
        userBalances.tokens.get(marketTokens[1].reference)
      );
      const newQuoteBalance = getNotNullOrThrowError<Balance>(
        response.tokens.get(marketTokens[1].reference)
      );
      const orderFee = getNotNullOrThrowError<BigNumber>(order.fee);
      const orderAmount = getNotNullOrThrowError<BigNumber>(order.amount);

      expect(oldBaseBalance.free.minus(orderFee.plus(orderAmount))).toEqual(
        newBaseBalance.free
      );

      expect(oldQuoteBalance.free).toEqual(newQuoteBalance.free);
      userBalances.tokens.set(marketTokens[0].reference, newBaseBalance);
      userBalances.tokens.set(marketTokens[1].reference, newQuoteBalance);
    });

    it('Get the filled order 2', async () => {
      const target = getOrder('2');

      const request = {
        id: target.id,
        status: OrderStatus.FILLED,
        marketId: target.marketId,
        ownerAddress: ownerAddress,
      } as GetOrderRequest;

      logRequest(request);

      const response = await kujira.getOrder(request);

      logResponse(response);

      expect(response).toBeObject();
      expect(response.status).toEqual(OrderStatus.FILLED);
      expect(response.id).toEqual(target.id);
      expect(response.marketName).toBe(target.marketName);
      expect(response.marketId).toBe(target.marketId);
      expect(response.ownerAddress).toEqual(target.ownerAddress);
      expect(response.price).toBe(target.price);
      expect(response.amount).toEqual(target.amount);
    });

    it('Create a market sell order 3 for market 3', async () => {
      const candidate = getOrder('3');

      const request = { ...candidate } as PlaceOrderRequest;

      logRequest(request);

      const response = await kujira.placeOrder(request);

      logResponse(response);

      candidate.id = response.id;
      candidate.marketName = response.marketName;
      candidate.market = response.market;
      candidate.status = response.status;
      candidate.fee = response.fee;
      candidate.hashes = response.hashes;

      expect(response).toBeObject();
      expect(response.id?.length).toBeGreaterThan(0);
      expect(response.marketId).toBe(candidate.marketId);
      expect(response.ownerAddress).toBe(candidate.ownerAddress);
      expect(response.price).toEqual(candidate.price);
      expect(response.amount).toEqual(candidate.amount);
      expect(response.side).toBe(candidate.side);
      expect(response.marketName).toBe(candidate.marketName);
      expect(response.payerAddress).toBe(candidate.payerAddress);
      expect(response.status).toBe(OrderStatus.FILLED);
      expect(response.hashes?.creation?.length).toBeCloseTo(64);
    });

    // TODO Fix!!!
    it('Check the available wallet balances from the tokens 2 and 3', async () => {
      const request = {
        tokenIds: [tokenIds[2], tokenIds[3]],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      logRequest(request);

      const response = await kujira.getBalances(request);

      const requestTokensDenoms = [
        Denom.from(getNotNullOrThrowError<TokenId[]>(request.tokenIds)[0]),
        Denom.from(getNotNullOrThrowError<TokenId[]>(request.tokenIds)[1]),
      ];

      const responseTokens = response.tokens
        .keySeq()
        .map((obj: any) => obj)
        .toArray();
      const responseTokensDenom = [
        Denom.from(responseTokens[0]),
        Denom.from(responseTokens[1]),
      ];

      expect(responseTokensDenom[0].eq(responseTokensDenom[1])).toBeFalsy;
      expect(
        requestTokensDenoms[0].eq(responseTokensDenom[0]) ||
          requestTokensDenoms[0].eq(responseTokensDenom[1])
      ).toBeTruthy();
      expect(
        requestTokensDenoms[1].eq(responseTokensDenom[1]) ||
          requestTokensDenoms[1].eq(responseTokensDenom[0])
      ).toBeTruthy();

      expect(response).toContainKey('total');

      response.tokens.valueSeq().forEach((token: any) => {
        expect(token).toContainKeys(['free', 'unsettled', 'lockedInOrders']);
      });
      logResponse(response);

      const order = getOrder('2');
      const marketTokens = networkPairs[order.marketId].denoms;
      const oldBaseBalance = getNotNullOrThrowError<Balance>(
        userBalances.tokens.get(marketTokens[0].reference)
      );
      const newBaseBalance = getNotNullOrThrowError<Balance>(
        response.tokens.get(marketTokens[0].reference)
      );
      const oldQuoteBalance = getNotNullOrThrowError<Balance>(
        userBalances.tokens.get(marketTokens[1].reference)
      );
      const newQuoteBalance = getNotNullOrThrowError<Balance>(
        response.tokens.get(marketTokens[1].reference)
      );
      const orderFee = getNotNullOrThrowError<BigNumber>(order.fee);
      const orderAmount = getNotNullOrThrowError<BigNumber>(order.amount);

      expect(oldBaseBalance.free.minus(orderFee.plus(orderAmount))).toEqual(
        newBaseBalance.free
      );

      expect(oldQuoteBalance.free).toEqual(newQuoteBalance.free);
      userBalances.tokens.set(marketTokens[0].reference, newBaseBalance);
      userBalances.tokens.set(marketTokens[1].reference, newQuoteBalance);
    });

    it.skip('Get the filled order 3', async () => {
      const target = getOrder('3');

      const request = {
        id: target.id,
        status: OrderStatus.FILLED,
        marketId: target.marketId,
        ownerAddress: ownerAddress,
      } as GetOrderRequest;

      logRequest(request);

      const response = await kujira.getOrder(request);

      logResponse(response);

      expect(response).toBeObject();
      expect(response.status).toEqual(OrderStatus.OPEN);
      expect(response.id).toEqual(target.id);
      expect(response.marketName).toBe(target.marketName);
      expect(response.marketId).toBe(marketIds['3']);
      expect(response.ownerAddress).toEqual(ownerAddress);
      expect(response.price).toEqual(target.price);
      expect(response.amount).toEqual(target.amount);
    });

    it('Create 8 orders at once', async () => {
      const candidates = getOrders(['4', '5', '6', '7', '8', '9', '10', '11']);

      const orderBookRequest = {
        marketIds: [
          candidates.valueSeq().toArray()[2].marketId,
          candidates.valueSeq().toArray()[3].marketId,
        ],
      } as GetOrderBooksRequest;

      const orderBookResponse = await kujira.getOrderBooks(orderBookRequest);

      const marketPrecisions: any[] = [];
      for (const item of orderBookResponse.valueSeq().toArray()) {
        marketPrecisions.push(item.market.precision);
      }

      const spread = 2; // 2%

      getNotNullOrThrowError<Order>(candidates.get('6')).price = BigNumber(
        getNotNullOrThrowError<BigNumber>(
          orderBookResponse.valueSeq().toArray()[0].bestAsk?.price
        )
          .times((100 - spread) / 100)
          .decimalPlaces(marketPrecisions[0])
      );

      getNotNullOrThrowError<Order>(candidates.get('7')).price = BigNumber(
        getNotNullOrThrowError<BigNumber>(
          orderBookResponse.valueSeq().toArray()[1].bestBid?.price
        )
          .times((100 - spread) / 100)
          .decimalPlaces(marketPrecisions[1])
      );

      const request = {
        orders: candidates
          .valueSeq()
          .map((candidate) => ({ ...candidate }))
          .toArray(),
      } as PlaceOrdersRequest;

      logRequest(request);

      const response = await kujira.placeOrders(request);

      logResponse(response);

      response
        .valueSeq()
        .toArray()
        .map((order: Order) => {
          const clientId = getNotNullOrThrowError<OrderClientId>(
            order.clientId
          );
          const candidate = getNotNullOrThrowError<Order>(
            candidates.get(clientId)
          );
          candidate.id = order.id;
          candidate.marketName = order.marketName;
          candidate.market = order.market;
          candidate.status = order.status;
          candidate.fee = order.fee;
          candidate.hashes = order.hashes;
        });

      for (const [orderId, order] of (
        response as IMap<OrderId, Order>
      ).entries()) {
        const clientId = getNotNullOrThrowError<OrderClientId>(order.clientId);
        const candidate = orders.get(clientId);

        expect(order).toBeObject();
        expect(orderId).toBe(order.id);
        expect(order.id?.length).toBeGreaterThan(0);
        expect(order.id).toBe(candidate?.id);
        expect(order.marketId).toBe(candidate?.marketId);
        expect(order.ownerAddress).toBe(candidate?.ownerAddress);
        expect(order.price).toEqual(candidate?.price);
        expect(order.amount).toEqual(candidate?.amount);
        expect(order.side).toBe(candidate?.side);
        expect(order.payerAddress).toBe(candidate?.payerAddress);

        if (['10', '11'].includes(clientId)) {
          // Market orders
          expect(order.status).toBe(OrderStatus.FILLED);
        } else {
          // Limit orders
          expect(order.status).toBe(OrderStatus.OPEN);
        }

        expect(order.hashes?.creation?.length).toBeCloseTo(64);
      }
    });

    // TODO Fix!!!
    it('Check the wallet balances from the tokens 1, 2, and 3', async () => {
      const request = {
        tokenIds: [tokenIds[1], tokenIds[2], tokenIds[3]],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      logRequest(request);

      const response = await kujira.getBalances(request);
      const finalBalanceChange: Balances = {
        tokens: IMap<TokenId, Balance>().asMutable(),
        total: {
          token: 'total',
          free: BigNumber(0),
          lockedInOrders: BigNumber(0),
          unsettled: BigNumber(0),
        },
      } as Balances;

      for (const [key, balance] of userBalances.tokens.entries()) {
        finalBalanceChange.tokens.set(key, {
          token: balance.token,
          ticker: balance.ticker,
          free: BigNumber(0),
          lockedInOrders: BigNumber(0),
          unsettled: BigNumber(0),
        } as Balance);
      }

      const orders = getOrders(['3', '4', '5', '6', '7', '8', '9']);
      const kujiBalanceChange = getNotNullOrThrowError<Balance>(
        finalBalanceChange.tokens.get(KUJI.reference)
      );
      const orderFee = getNotNullOrThrowError<BigNumber>(orders.first()?.fee);
      kujiBalanceChange.free = kujiBalanceChange.free.plus(orderFee);
      orders.map((order) => {
        const orderAmount = getNotNullOrThrowError<BigNumber>(order.amount);
        const marketTokens = networkPairs[order.marketId].denoms;
        const oldBaseBalance = getNotNullOrThrowError<Balance>(
          finalBalanceChange.tokens.get(marketTokens[0].reference)
        );
        const oldQuoteBalance = getNotNullOrThrowError<Balance>(
          finalBalanceChange.tokens.get(marketTokens[1].reference)
        );

        if (order.side == OrderSide.BUY) {
          oldQuoteBalance.free = oldQuoteBalance.free.plus(orderAmount);
        } else if (order.side == OrderSide.SELL) {
          oldBaseBalance.free = oldBaseBalance.free.plus(orderAmount);
        }
      });

      userBalances.tokens.keySeq().forEach((key) => {
        const oldBalance = getNotNullOrThrowError<Balance>(
          userBalances.tokens.get(key)
        );
        const balanceChange = getNotNullOrThrowError<Balance>(
          finalBalanceChange.tokens.get(key)
        );
        const newBalance = getNotNullOrThrowError<Balance>(
          response.tokens.get(key)
        );
        expect(oldBalance.free.minus(balanceChange.free)).toEqual(
          newBalance.free
        );
      });

      userBalances = response;

      logResponse(response);
    });

    it('Get the open orders 8 and 9', async () => {
      const targets = getOrders(['8', '9']);
      const targetsIds = targets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const request = {
        ids: targetsIds,
        ownerAddress: ownerAddress,
        status: OrderStatus.OPEN,
      } as GetOrdersRequest;

      logRequest(request);

      const response = await kujira.getOrders(request);

      logResponse(response);

      expect(response.size).toBe(targets.size);

      for (const [orderId, order] of (
        response as IMap<OrderId, Order>
      ).entries()) {
        const clientId = getNotNullOrThrowError<OrderClientId>(order.clientId);
        const candidate = orders.get(clientId);

        expect(order).toBeObject();
        expect(orderId).toBe(order.id);
        expect(order.id?.length).toBeGreaterThan(0);
        expect(order.id).toBe(candidate?.id);
        expect(order.marketId).toBe(candidate?.marketId);
        expect(order.ownerAddress).toBe(candidate?.ownerAddress);
        expect(order.price).toEqual(candidate?.price);
        expect(order.amount).toEqual(candidate?.amount);
        expect(order.side).toBe(candidate?.side);
        expect(order.payerAddress).toBe(candidate?.payerAddress);
        expect(order.status).toBe(OrderStatus.OPEN);
        expect(order.hashes).toBeObject();
        expect(order.type).toBe(candidate?.type);
      }
    });

    it('Get all open orders and check that the orders 2, 3, 6, 7, 10, and 11 are missing', async () => {
      const targets = getOrders(['2', '3', '6', '7', '10', '11']);

      const targetsIds = targets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const request = {
        ownerAddress: ownerAddress,
        status: OrderStatus.OPEN,
      } as GetOrdersRequest;

      logRequest(request);

      const response = await kujira.getOrders(request);

      logResponse(response);

      const responseOrdersIds = (response as IMap<OrderId, Order>)
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      targetsIds.forEach((orderId) =>
        expect(responseOrdersIds.includes(orderId)).toBeFalse()
      );
    });

    it('Cancel the order 1', async () => {
      const target = getOrder('1');

      const request = {
        id: target.id,
        marketId: target.marketId,
        ownerAddress: target.ownerAddress,
      } as CancelOrderRequest;

      logRequest(request);

      const response = await kujira.cancelOrder(request);

      logResponse(response);

      expect(response).toBeObject();
      expect(response.id?.length).toBeGreaterThan(0);
      expect(response.id).toEqual(target.id);
      expect(response.marketId).toBe(target.marketId);
      expect(response.ownerAddress).toBe(target.ownerAddress);
      expect(response.price).toEqual(target.price);
      expect(response.amount).toEqual(target.amount);
      expect(response.side).toBe(target.side);
      expect(response.marketName).toBe(target.marketName);
      expect(response.payerAddress).toBe(target.payerAddress);
      expect(response.status).toBe(OrderStatus.CANCELLED);
      expect(response.hashes?.cancellation?.length).toBeCloseTo(64);

      target.fee = response.fee;
      target.hashes = response.hashes;
      target.status = OrderStatus.CANCELLED;
    });

    // TODO Fix!!!
    it('Check the wallet balances from the tokens 1 and 2', async () => {
      const request = {
        tokenIds: [tokenIds[1], tokenIds[3]],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      logRequest(request);

      const response = await kujira.getBalances(request);

      const order = getOrder('1');
      const finalBalanceChange: Balances = {
        tokens: IMap<TokenId, Balance>().asMutable(),
        total: {
          token: 'total',
          free: BigNumber(0),
          lockedInOrders: BigNumber(0),
          unsettled: BigNumber(0),
        },
      } as Balances;

      for (const [key, balance] of userBalances.tokens.entries()) {
        finalBalanceChange.tokens.set(key, {
          token: balance.token,
          ticker: balance.ticker,
          free: BigNumber(0),
          lockedInOrders: BigNumber(0),
          unsettled: BigNumber(0),
        } as Balance);
      }
      const kujiBalanceChange = getNotNullOrThrowError<Balance>(
        finalBalanceChange.tokens.get(KUJI.reference)
      );
      const orderFee = getNotNullOrThrowError<BigNumber>(order.fee);
      kujiBalanceChange.free = kujiBalanceChange.free.plus(orderFee); // TODO should have +1 of cancellation fee !!!

      const orderAmount = getNotNullOrThrowError<BigNumber>(order.amount);
      const marketTokens = networkPairs[order.marketId].denoms;
      const oldBaseBalance = getNotNullOrThrowError<Balance>(
        finalBalanceChange.tokens.get(marketTokens[0].reference)
      );
      const oldQuoteBalance = getNotNullOrThrowError<Balance>(
        finalBalanceChange.tokens.get(marketTokens[1].reference)
      );

      if (order.side == OrderSide.BUY) {
        oldQuoteBalance.free = oldQuoteBalance.free.minus(orderAmount);
      } else if (order.side == OrderSide.SELL) {
        oldBaseBalance.free = oldBaseBalance.free.minus(orderAmount);
      }
      let tolerance = BigNumber(0.001).times(orderAmount);
      if (tolerance.lt(1)) {
        tolerance = BigNumber(1);
      }

      response.tokens.keySeq().forEach((key: string) => {
        const oldBalance = getNotNullOrThrowError<Balance>(
          userBalances.tokens.get(key)
        );
        const balanceChange = getNotNullOrThrowError<Balance>(
          finalBalanceChange.tokens.get(key)
        );
        const newBalance = getNotNullOrThrowError<Balance>(
          response.tokens.get(key)
        );
        expect(
          oldBalance.free
            .minus(balanceChange.free)
            .minus(tolerance)
            .lte(newBalance.free)
        ).toBeTruthy();

        expect(
          oldBalance.free
            .minus(balanceChange.free)
            .plus(tolerance)
            .gte(newBalance.free)
        ).toBeTruthy();

        userBalances.tokens.set(key, newBalance);
      });

      logResponse(response);
    });

    it("Check that it's not possible to get the cancelled order 1", async () => {
      const target = getOrder('1');

      const request = {
        id: target.id,
        ownerAddress: target.ownerAddress,
        marketId: target.marketId,
      } as GetOrderRequest;

      logRequest(request);

      const response = await kujira.getOrder(request);

      logResponse(response);

      expect(response.hashes).toBeUndefined();
    });

    it('Get all open orders and check that orders 1, 2, 3, 6, 7, 10, and 11 are missing', async () => {
      const targets = getOrders(['1', '2', '3', '6', '7', '10', '11']);

      const targetsIds = targets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const request = {
        ownerAddress: ownerAddress,
        status: OrderStatus.OPEN,
      } as GetOrdersRequest;

      logRequest(request);

      const response = await kujira.getOrders(request);

      logResponse(response);

      const responseOrdersIds = (response as IMap<OrderId, Order>)
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      targetsIds.forEach((orderId) =>
        expect(responseOrdersIds.includes(orderId)).toBeFalse()
      );
    });

    it('Cancel the orders 4 and 5', async () => {
      const targets = getOrders(['4', '5']);

      const targetsIds = targets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const targetMarketsIds = targets
        .map((order) => order.marketId)
        .valueSeq()
        .toArray();

      const request = {
        ids: targetsIds,
        marketIds: targetMarketsIds,
        ownerAddress: ownerAddress,
      } as CancelOrdersRequest;

      logRequest(request);

      const response = (await kujira.cancelOrders(request)) as IMap<
        OrderId,
        Order
      >;

      logResponse(response);

      expect(response.size).toBe(targetsIds.length);
      expect(response.keySeq().toArray()).toIncludeSameMembers(targetsIds);

      for (const [orderId, order] of (
        response as IMap<OrderId, Order>
      ).entries()) {
        const clientId = getNotNullOrThrowError<OrderClientId>(order.clientId);
        const candidate = orders.get(clientId);

        expect(order).toBeObject();
        expect(orderId).toBe(order.id);
        expect(order.id?.length).toBeGreaterThan(0);
        expect(order.id).toBe(candidate?.id);
        expect(order.marketId).toBe(candidate?.marketId);
        expect(order.ownerAddress).toBe(candidate?.ownerAddress);
        expect(order.price).toEqual(candidate?.price);
        expect(order.amount).toEqual(candidate?.amount);
        expect(order.side).toBe(candidate?.side);
        expect(order.payerAddress).toBe(candidate?.payerAddress);
        expect(order.status).toBe(OrderStatus.CANCELLED);
        expect(order.hashes?.cancellation?.length).toBeCloseTo(64);
      }
    });

    // // TODO Fix!!!
    it('Check the wallet balances from the tokens 1, 2, and 3', async () => {
      const request = {
        tokenIds: [tokenIds[1], tokenIds[2], tokenIds[3]],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      logRequest(request);

      const response = await kujira.getBalances(request);

      const orders = getOrders(['3', '4', '5']).valueSeq().toArray();
      const finalBalanceChange: Balances = {
        tokens: IMap<TokenId, Balance>().asMutable(),
        total: {
          token: 'total',
          free: BigNumber(0),
          lockedInOrders: BigNumber(0),
          unsettled: BigNumber(0),
        },
      } as Balances;
      const tolerance = IMap<TokenId, BigNumber>().asMutable();

      for (const [key, balance] of userBalances.tokens.entries()) {
        finalBalanceChange.tokens.set(key, {
          token: balance.token,
          ticker: balance.ticker,
          free: BigNumber(0),
          lockedInOrders: BigNumber(0),
          unsettled: BigNumber(0),
        } as Balance);
        tolerance.set(key, BigNumber(0));
      }
      const kujiBalanceChange = getNotNullOrThrowError<Balance>(
        finalBalanceChange.tokens.get(KUJI.reference)
      );

      const firstCancellationOrderFee = getNotNullOrThrowError<BigNumber>(
        orders[0].fee
      );
      const secondCancellationOrderFee = getNotNullOrThrowError<BigNumber>(
        orders[2].fee
      );
      kujiBalanceChange.free = kujiBalanceChange.free.plus(
        firstCancellationOrderFee
      );
      kujiBalanceChange.free = kujiBalanceChange.free.plus(
        secondCancellationOrderFee
      );

      orders.forEach((order) => {
        const orderAmount = getNotNullOrThrowError<BigNumber>(order.amount);
        const marketTokens = networkPairs[order.marketId].denoms;
        const oldBaseBalance = getNotNullOrThrowError<Balance>(
          finalBalanceChange.tokens.get(marketTokens[0].reference)
        );
        const oldQuoteBalance = getNotNullOrThrowError<Balance>(
          finalBalanceChange.tokens.get(marketTokens[1].reference)
        );

        if (order.side == OrderSide.BUY) {
          const toleranceNumber = getNotNullOrThrowError<BigNumber>(
            tolerance.get(marketTokens[1].reference)
          );
          tolerance.set(
            marketTokens[1].reference,
            toleranceNumber.plus(orderAmount.times(0.01))
          );
          oldQuoteBalance.free = oldQuoteBalance.free.minus(orderAmount);
        } else if (order.side == OrderSide.SELL) {
          const toleranceNumber = getNotNullOrThrowError<BigNumber>(
            tolerance.get(marketTokens[0].reference)
          );
          tolerance.set(
            marketTokens[0].reference,
            toleranceNumber.plus(orderAmount.times(0.01))
          );
          oldBaseBalance.free = oldBaseBalance.free.minus(orderAmount);
        }
      });

      response.tokens.keySeq().forEach((key: string) => {
        const oldBalance = getNotNullOrThrowError<Balance>(
          userBalances.tokens.get(key)
        );
        const balanceChange = getNotNullOrThrowError<Balance>(
          finalBalanceChange.tokens.get(key)
        );
        const newBalance = getNotNullOrThrowError<Balance>(
          response.tokens.get(key)
        );
        let toleranceNumber = getNotNullOrThrowError<BigNumber>(
          tolerance.get(key)
        );
        if (toleranceNumber.lt(1)) {
          toleranceNumber = BigNumber(1);
        }
        expect(
          newBalance.free.lte(
            oldBalance.free.minus(balanceChange.free).plus(toleranceNumber)
          )
        ).toBeTruthy();
        expect(
          newBalance.free.gte(
            oldBalance.free.minus(balanceChange.free).minus(toleranceNumber)
          )
        ).toBeTruthy();
        userBalances.tokens.set(key, newBalance);
      });

      logResponse(response);
    });

    it("Check that it's not possible to get the cancelled orders 4 and 5", async () => {
      const targets = getOrders(['4', '5']);

      const targetsIds = targets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const request = {
        ids: targetsIds,
        ownerAddress: ownerAddress,
        status: OrderStatus.OPEN,
      } as GetOrdersRequest;

      logRequest(request);

      const response = await kujira.getOrders(request);

      logResponse(response);

      expect(response.size).toEqual(0);
    });

    it('Get all open orders and check that the orders 1, 2, 3, 4, 5, 6, 7, 10, and 11 are missing', async () => {
      const targets = getOrders([
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '10',
        '11',
      ]);

      const targetsIds = targets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const request = {
        ownerAddress: ownerAddress,
        status: OrderStatus.OPEN,
      } as GetOrdersRequest;

      logRequest(request);

      const response = await kujira.getOrders(request);

      logResponse(response);

      const responseOrdersIds = (response as IMap<OrderId, Order>)
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      targetsIds.forEach((orderId) =>
        expect(responseOrdersIds.includes(orderId)).toBeFalse()
      );
    });

    it('Get all filled orders and check that the orders 2, 3, 6, 7, 10, and 11 are present', async () => {
      const targets = getOrders(['2', '6', '7']);

      const targetsIds = targets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const request = {
        ownerAddress: ownerAddress,
        status: OrderStatus.FILLED,
      } as GetOrdersRequest;

      logRequest(request);

      const response = await kujira.getOrders(request);

      logResponse(response);

      const responseOrdersIds = (response as IMap<OrderId, Order>)
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      targetsIds.forEach((orderId) =>
        expect(responseOrdersIds.includes(orderId)).toBeTrue()
      );
    });

    it('Get all orders (open or filled) and check that the orders 2, 3, 6, 7, 10, and 11 are present and the orders 1, 4, 5 are missing', async () => {
      const limitOrdersTargets = getOrders(['2', '6', '7']);
      const marketOrdersTargets = getOrders(['3', '10', '11']);
      const cancelledOrdersTargets = getOrders(['1', '4', '5']);

      const limitOrdersTargetsIds = limitOrdersTargets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const marketOrdersTargetsIds = marketOrdersTargets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const cancelledOrdersTargetsIds = cancelledOrdersTargets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const request = {
        ownerAddress: ownerAddress,
      } as GetOrdersRequest;

      logRequest(request);

      const response = await kujira.getOrders(request);

      logResponse(response);

      const responseOrdersIds = (response as IMap<OrderId, Order>)
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      limitOrdersTargetsIds.forEach((orderId) =>
        expect(responseOrdersIds).toInclude(
          getNotNullOrThrowError<OrderId>(orderId)
        )
      );

      marketOrdersTargetsIds.forEach((orderId) =>
        expect(responseOrdersIds).not.toInclude(
          getNotNullOrThrowError<OrderId>(orderId)
        )
      );

      cancelledOrdersTargetsIds.forEach((orderId) =>
        expect(responseOrdersIds).not.toInclude(
          getNotNullOrThrowError<OrderId>(orderId)
        )
      );
    });

    // // TODO Fix!!!
    it('Cancel all open orders', async () => {
      const request = {
        ownerAddress: ownerAddress,
      } as CancelAllOrdersRequest;

      logRequest(request);

      const response = await kujira.cancelAllOrders(request);

      logResponse(response);
    });

    // // TODO Fix!!!
    it('Check the wallet balances from the tokens 1, 2 and 3', async () => {
      const request = {
        tokenIds: [tokenIds[2], tokenIds[3]],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      logRequest(request);

      const response = await kujira.getBalances(request);

      logResponse(response);
    });

    // // TODO Fix!!!
    it('Get all open orders and check that there are no open orders', async () => {
      const request = {
        ownerAddress: ownerAddress,
        status: OrderStatus.OPEN,
      } as GetOrdersRequest;

      logRequest(request);

      const response = await kujira.getOrders(request);

      logResponse(response);
    });

    // // TODO Fix!!!
    it('Get all orders (open or filled) and check that the orders 2, 3, 6, 7, 10, and 11 are present', async () => {
      const request = {
        ownerAddress: ownerAddress,
      } as GetOrdersRequest;

      logRequest(request);

      const response = await kujira.getOrders(request);

      logResponse(response);
    });

    // // TODO Fix!!!
    it('Create orders 12 and 13 at once', async () => {
      const candidates = getOrders(['12', '13']);

      const request = {
        orders: candidates
          .valueSeq()
          .map((candidate) => ({ ...candidate }))
          .toArray(),
      } as PlaceOrdersRequest;

      logRequest(request);

      const response = await kujira.placeOrders(request);

      response.valueSeq().map((order: Order) => {
        const clientId = getNotNullOrThrowError<OrderClientId>(order.clientId);
        const candidateOrder = getNotNullOrThrowError<Order>(
          candidates.get(clientId)
        );
        candidateOrder.id = order.id;
      });

      logResponse(response);
    });

    // // TODO Fix!!!
    it('Get all open orders and check that the orders 12 and 13 are present', async () => {
      const request = {
        ownerAddress: ownerAddress,
        status: OrderStatus.OPEN,
      } as GetOrdersRequest;

      logRequest(request);

      const response = await kujira.getOrders(request);

      logResponse(response);
    });

    // // TODO Fix!!!
    it('Get all orders (open or filled) and check that the orders 2, 3, 6, 7, 10, 11, 12, and 13 are present', async () => {
      const request = {
        ownerAddress: ownerAddress,
      } as GetOrdersRequest;

      logRequest(request);

      const response = await kujira.getOrders(request);

      logResponse(response);
    });

    // // TODO Fix!!!
    it('Cancel all open orders', async () => {
      const request = {
        ownerAddress: ownerAddress,
      } as CancelAllOrdersRequest;

      logRequest(request);

      const response = await kujira.cancelAllOrders(request);

      logResponse(response);
    });

    // // TODO Fix!!!
    it('Check the wallet balances from the tokens 1, 2 and 3', async () => {
      const request = {
        tokenIds: [tokenIds[2], tokenIds[3]],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      logRequest(request);

      const response = await kujira.getBalances(request);

      logResponse(response);
    });

    // // TODO Fix!!!
    it('Get all open orders and check that there are no open orders', async () => {
      const request = {
        ownerAddress: ownerAddress,
        status: OrderStatus.OPEN,
      } as GetOrdersRequest;

      logRequest(request);

      const response = await kujira.getOrders(request);

      logResponse(response);
    });

    // // TODO Fix!!!
    it('Settle funds for market 1', async () => {
      const request = {
        marketId: marketIds[1],
        ownerAddress: ownerAddress,
      } as MarketWithdrawRequest;

      logRequest(request);

      const response = await kujira.settleMarketFunds(request);

      logResponse(response);
    });

    // // TODO Fix!!!
    it('Check the wallet balances from the tokens 1, 2 and 3', async () => {
      const request = {
        ownerAddress: ownerAddress,
      } as GetAllBalancesRequest;

      logRequest(request);

      const response = await kujira.getAllBalances(request);

      logResponse(response);
    });

    // // TODO Fix!!!
    it('Settle funds for markets 2 and 3', async () => {
      const request = {
        marketIds: [marketIds[2], marketIds[3]],
        ownerAddress: ownerAddress,
      } as MarketsWithdrawsRequest;

      logRequest(request);

      const response = await kujira.settleMarketsFunds(request);

      logResponse(response);
    });

    // // TODO Fix!!!
    it('Check the wallet balances from the tokens 1, 2 and 3', async () => {
      const request = {
        ownerAddress: ownerAddress,
      } as GetAllBalancesRequest;

      logRequest(request);

      const response = await kujira.getAllBalances(request);

      logResponse(response);
    });

    // // TODO Fix!!!
    it('Settle funds for all markets', async () => {
      const request = {
        ownerAddress: ownerAddress,
      } as AllMarketsWithdrawsRequest;

      logRequest(request);

      const response = await kujira.settleAllMarketsFunds(request);

      logResponse(response);
    });
  });
});
