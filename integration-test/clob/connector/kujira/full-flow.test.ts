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
  MarketName,
  MarketsWithdrawsRequest,
  MarketWithdrawRequest,
  Order,
  OrderClientId,
  OrderMarketName,
  OrderSide,
  OrderStatus,
  OrderType,
  OwnerAddress,
  PlaceOrderRequest,
  PlaceOrdersRequest,
  TokenId,
} from '../../../../src/connectors/kujira/kujira.types';
import { Denom, DEMO, fin, KUJI, TESTNET, USK_TESTNET } from 'kujira.js';
import { addWallet } from '../../../../src/services/wallet/wallet.controllers';
import { AddWalletRequest } from '../../../../src/services/wallet/wallet.requests';

jest.setTimeout(30 * 60 * 1000);

let request: any;
let response: any;

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

const getMarketName = (marketId: any): any => {
  const market = Object.entries(networkPairs).find(([key]) => key === marketId);
  let base;
  let quote;
  if (market) {
    base = market[1]['denoms'][0]['symbol'];
    quote = market[1]['denoms'][1]['symbol'];
  }
  return base + '/' + quote;
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
    ownerAddress: ownerAddress,
    payerAddress: ownerAddress,
    price: BigNumber(0.001),
    amount: BigNumber(100),
    side: OrderSide.BUY,
    status: undefined,
    type: OrderType.LIMIT,
    fee: undefined,
    fillingTimestamp: undefined,
    signatures: undefined,
  });

  orders.set('2', {
    id: undefined,
    clientId: '2',
    marketName: undefined as unknown as OrderMarketName,
    marketId: marketIds[2],
    ownerAddress: ownerAddress,
    payerAddress: ownerAddress,
    price: BigNumber(999.999),
    amount: BigNumber(100),
    side: OrderSide.SELL,
    status: undefined,
    type: OrderType.LIMIT,
    fee: undefined,
    fillingTimestamp: undefined,
    signatures: undefined,
  });

  orders.set('3', {
    id: undefined,
    clientId: '3',
    marketName: undefined as unknown as OrderMarketName,
    marketId: marketIds[1],
    ownerAddress: ownerAddress,
    payerAddress: ownerAddress,
    price: BigNumber(0.001),
    amount: BigNumber(100),
    side: OrderSide.BUY,
    status: undefined,
    type: OrderType.LIMIT,
    fee: undefined,
    fillingTimestamp: undefined,
    signatures: undefined,
  });

  orders.set('4', {
    id: undefined,
    clientId: '4',
    marketName: undefined as unknown as OrderMarketName,
    marketId: marketIds[1],
    ownerAddress: ownerAddress,
    payerAddress: ownerAddress,
    price: BigNumber(999.99),
    amount: BigNumber(100),
    side: OrderSide.SELL,
    status: undefined,
    type: OrderType.LIMIT,
    fee: undefined,
    fillingTimestamp: undefined,
    signatures: undefined,
  });

  orders.set('5', {
    id: undefined,
    clientId: '5',
    marketName: undefined as unknown as OrderMarketName,
    marketId: marketIds[2],
    ownerAddress: ownerAddress,
    payerAddress: ownerAddress,
    price: BigNumber(0.001),
    amount: BigNumber(100),
    side: OrderSide.BUY,
    status: undefined,
    type: OrderType.LIMIT,
    fee: undefined,
    fillingTimestamp: undefined,
    signatures: undefined,
  });

  orders.set('6', {
    id: undefined,
    clientId: '6',
    marketName: undefined as unknown as OrderMarketName,
    marketId: marketIds[2],
    ownerAddress: ownerAddress,
    payerAddress: ownerAddress,
    price: BigNumber(999.99),
    amount: BigNumber(100),
    side: OrderSide.SELL,
    status: undefined,
    type: OrderType.LIMIT,
    fee: undefined,
    fillingTimestamp: undefined,
    signatures: undefined,
  });

  orders.set('7', {
    id: undefined,
    clientId: '7',
    marketName: undefined as unknown as OrderMarketName,
    marketId: marketIds[3],
    ownerAddress: ownerAddress,
    payerAddress: ownerAddress,
    price: BigNumber(0.001),
    amount: BigNumber(100),
    side: OrderSide.BUY,
    status: undefined,
    type: OrderType.LIMIT,
    fee: undefined,
    fillingTimestamp: undefined,
    signatures: undefined,
  });

  orders.set('8', {
    id: undefined,
    clientId: '8',
    marketName: undefined as unknown as OrderMarketName,
    marketId: marketIds[3],
    ownerAddress: ownerAddress,
    payerAddress: ownerAddress,
    price: BigNumber(999.99),
    amount: BigNumber(100),
    side: OrderSide.SELL,
    status: undefined,
    type: OrderType.LIMIT,
    fee: undefined,
    fillingTimestamp: undefined,
    signatures: undefined,
  });

  orders.set('9', {
    id: undefined,
    clientId: '9',
    marketName: undefined as unknown as OrderMarketName,
    marketId: marketIds[3],
    ownerAddress: ownerAddress,
    payerAddress: ownerAddress,
    price: BigNumber(0.001),
    amount: BigNumber(100),
    side: OrderSide.BUY,
    status: undefined,
    type: OrderType.LIMIT,
    fee: undefined,
    fillingTimestamp: undefined,
    signatures: undefined,
  });

  orders.set('10', {
    id: undefined,
    clientId: '10',
    marketName: undefined as unknown as OrderMarketName,
    marketId: marketIds[1],
    ownerAddress: ownerAddress,
    payerAddress: ownerAddress,
    price: BigNumber(999.99),
    amount: BigNumber(100),
    side: OrderSide.SELL,
    status: undefined,
    type: OrderType.LIMIT,
    fee: undefined,
    fillingTimestamp: undefined,
    signatures: undefined,
  });

  orders.set('11', {
    id: undefined,
    clientId: '11',
    marketName: undefined as unknown as OrderMarketName,
    marketId: marketIds[2],
    ownerAddress: ownerAddress,
    payerAddress: ownerAddress,
    price: BigNumber(0.001),
    amount: BigNumber(100),
    side: OrderSide.BUY,
    status: undefined,
    type: OrderType.LIMIT,
    fee: undefined,
    fillingTimestamp: undefined,
    signatures: undefined,
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
      request = {
        id: tokenIds[1],
      } as GetTokenRequest;

      logRequest(request);

      response = await kujira.getToken(request);

      logResponse(response);
    });

    it('Get tokens 2 and 3', async () => {
      request = {
        ids: [tokenIds[2], tokenIds[3]],
      } as GetTokensRequest;

      logRequest(request);

      response = await kujira.getTokens(request);

      logResponse(response);
    });

    it('Get all tokens', async () => {
      request = {} as GetAllTokensRequest;

      logRequest(request);

      allTokens = await kujira.getAllTokens(request);

      logResponse(allTokens);
    });
  });

  describe('Markets', () => {
    it('Get market 1', async () => {
      request = {
        id: marketIds[1],
      } as GetMarketRequest;

      logRequest(request);

      response = await kujira.getMarket(request);

      logResponse(response);
    });

    it('Get markets 2 and 3', async () => {
      request = {
        ids: [marketIds[2], marketIds[3]],
      } as GetMarketsRequest;

      logRequest(request);

      response = await kujira.getMarkets(request);

      logResponse(response);
    });

    it('Get all markets', async () => {
      request = {} as GetAllMarketsRequest;

      logRequest(request);

      response = await kujira.getAllMarkets(request);

      logResponse(response);
    });
  });

  describe('Order books', () => {
    it('Get order book from market 1', async () => {
      request = {
        marketId: marketIds[1],
      } as GetOrderBookRequest;

      logRequest(request);

      response = await kujira.getOrderBook(request);

      logResponse(response);
    });

    it('Get order books from the markets 2 and 3', async () => {
      request = {
        marketIds: [marketIds[2], marketIds[3]],
      } as GetOrderBooksRequest;

      logRequest(request);

      response = await kujira.getOrderBooks(request);

      logResponse(response);
    });

    it('Get all order books', async () => {
      request = {} as GetAllOrderBooksRequest;

      logRequest(request);

      response = await kujira.getAllOrderBooks(request);

      logResponse(response);
    });
  });

  describe('Tickers', () => {
    it('Get ticker from market 1', async () => {
      request = {
        marketId: marketIds[1],
      } as GetTickerRequest;

      logRequest(request);

      response = await kujira.getTicker(request);

      logResponse(response);
    });

    it('Get tickers from markets 2 and 3', async () => {
      request = {
        marketIds: [marketIds[2], marketIds[3]],
      } as GetTickersRequest;

      logRequest(request);

      response = await kujira.getTickers(request);

      logResponse(response);
    });

    it('Get all tickers', async () => {
      request = {} as GetAllTickersRequest;

      logRequest(request);

      response = await kujira.getAllTickers(request);

      logResponse(response);
    });
  });

  describe('User', () => {
    it('Get balance of token 1', async () => {
      request = {
        tokenId: tokenIds[1],
        ownerAddress: ownerAddress,
      } as GetBalanceRequest;

      logRequest(request);

      response = await kujira.getBalance(request);

      logResponse(response);
    });

    it('Get balances of tokens 2 and 3', async () => {
      request = {
        tokenIds: [tokenIds[2], tokenIds[3]],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      logRequest(request);

      response = await kujira.getBalances(request);

      logResponse(response);
    });

    it('Get all balances', async () => {
      request = {
        ownerAddress: ownerAddress,
      } as GetAllBalancesRequest;

      logRequest(request);

      response = await kujira.getAllBalances(request);

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

    Get the wallet balances from the tokens 1, 2, and 3

    create a limit buy order 1 for market 1

    check the available wallet balances from the tokens 1 and 2

    get the open order 1

    create a market sell order 2 for market 2

    check the available wallet balances from the tokens 1 and 2

    get the open order 2

    create 7 orders at once as the following:
      order 3, limit, buy, market 1
      order 4, limit, sell, market 1
      order 5, limit, buy, market 2
      order 6, market, sell, market 2
      order 7, market, buy, market 3
      order 8, limit, sell, market 3
      order 9, limit, buy, market 3

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
      order 10, sell, market 1
      order 11, buy, market 2

    get all open orders and check that the orders 10 and 11 are present

    get all orders (open or filled) and check that the orders 2, 6, 7, 10, and 11 are present

    cancel all the open orders

    check the wallet balances from the tokens 2 and 3

    get all open orders and check that there are no open orders
    */

    it('Get the wallet balances from the tokens 1, 2, and 3', async () => {
      request = {
        tokenIds: [tokenIds[1], tokenIds[2], tokenIds[3]],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      logRequest(request);

      response = await kujira.getBalances(request);

      expect(response).toContainKey('total');
      expect(response['total']).toContainKeys([
        'free',
        'unsettled',
        'lockedInOrders',
      ]);

      logResponse(response);

      userBalances = response;

      const balances = userBalances.tokens.toArray();

      if (balances) {
        const output = {
          token1: {
            symbol: 'token1',
            balances: {
              free: balances[0][1].free.toNumber().toPrecision(2),
              lockedInOrders: balances[0][1].lockedInOrders.toNumber(),
              unsettled: balances[0][1].unsettled.toNumber(),
            },
          },
          token2: {
            symbol: 'token2',
            balances: {
              free: balances[1][1].free.toNumber(),
              lockedInOrders: balances[1][1].lockedInOrders.toNumber(),
              unsettled: balances[1][1].unsettled.toNumber(),
            },
          },
          token3: {
            symbol: 'token3',
            balances: {
              free: balances[2][1].free.toNumber(),
              lockedInOrders: balances[2][1].lockedInOrders.toNumber(),
              unsettled: balances[2][1].unsettled.toNumber(),
            },
          },
        };
        console.log(output);
      }
    });

    it('Create a buy order 1 for market 1', async () => {
      const candidate = getOrder('1');

      request = { ...candidate } as PlaceOrderRequest;

      logRequest(request);

      response = await kujira.placeOrder(request);

      candidate.id = response.id;
      candidate.marketName = response.marketName;
      candidate.status = response.status;
      candidate.fee = response.fee;
      candidate.signatures = response.signatures;

      expect(response).toBeObject();
      expect(response['signatures']['creation'].length).toBeCloseTo(64);
      expect(response.id.length).toBeGreaterThan(0);
      expect(response.marketId).toBe(candidate.marketId);
      expect(response.ownerAddress).toBe(candidate.ownerAddress);
      expect(response.price).toEqual(candidate.price.toNumber().toString());
      expect(response.amount).toEqual(candidate.amount.toNumber().toString());
      expect(response.side).toBe(candidate.side);

      const marketName: MarketName = getMarketName(marketIds['1']);

      expect(response.marketName).toBe(marketName);
      expect(response.payerAddress).toBe(candidate.payerAddress);
      // expect(response.status).toBe(OrderStatus.OPEN);

      logResponse(response);
    });

    it('Check the available wallet balances from the tokens 1 and 3', async () => {
      request = {
        tokenIds: [tokenIds[1], tokenIds[3]],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      logRequest(request);

      response = await kujira.getBalances(request);

      expect(Object.entries(response.tokens.toJS())[0][1]).toContainKeys([
        'free',
        'unsettled',
        'lockedInOrders',
      ]);

      expect(Object.entries(response.tokens.toJS())[0][1]).toContainKeys([
        'free',
        'unsettled',
        'lockedInOrders',
      ]);

      logResponse(response);

      const order = getOrder('1');
      const marketTokens = networkPairs[order.marketId].denoms;
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

      const oldKujiBalance = getNotNullOrThrowError<Balance>(
        userBalances.tokens.get(KUJI.reference)
      );
      const newKujiBalance = getNotNullOrThrowError<Balance>(
        response.tokens.get(KUJI.reference)
      );
      expect(oldKujiBalance.free.toNumber() - orderFee.toNumber()).toEqual(
        newKujiBalance.free.toNumber()
      );

      expect(oldQuoteBalance.free.toNumber() - orderAmount.toNumber()).toEqual(
        newQuoteBalance.free.toNumber()
      );

      userBalances.tokens.set(marketTokens[0].reference, newBaseBalance);
      userBalances.tokens.set(marketTokens[1].reference, newQuoteBalance);
    });

    it('Get the open order 1', async () => {
      const orderPlaced = getOrder('1');
      const marketName: MarketName = getMarketName(marketIds['1']);

      request = {
        id: orderPlaced.id,
        status: OrderStatus.OPEN,
        ownerAddress: ownerAddress,
      } as GetOrderRequest;

      logRequest(request);

      response = await kujira.getOrder(request);

      expect(response).toBeObject();
      expect(response.status).toEqual(OrderStatus.OPEN);
      expect(response.id).toEqual(orderPlaced.id);
      expect(response.marketName).toBe(marketName);
      expect(response.marketId).toBe(marketIds['1']);
      expect(response.ownerAddress).toEqual(ownerAddress);
      expect(response.price.toNumber()).toEqual(orderPlaced.price.toNumber());
      expect(response.amount.toNumber()).toEqual(orderPlaced.amount.toNumber());

      logResponse(response);
    });

    it('Create a sell order 2 for market 2', async () => {
      const candidate = getOrder('2');

      request = { ...candidate } as PlaceOrderRequest;

      logRequest(request);

      response = await kujira.placeOrder(request);

      candidate.id = response.id;
      candidate.marketName = response.marketName;
      candidate.status = response.status;
      candidate.fee = response.fee;
      candidate.signatures = response.signatures;

      expect(response).toBeObject();
      expect(response['id'].length).toBeGreaterThan(0);
      expect(response['signatures']['creation'].length).toBeCloseTo(64);
      expect(response.marketId).toBe(candidate.marketId);
      expect(response.ownerAddress).toBe(candidate.ownerAddress);
      expect(response.price).toEqual(candidate.price.toNumber().toString());
      expect(response.amount).toEqual(candidate.amount.toNumber().toString());
      expect(response.side).toBe(candidate.side);

      const marketName: MarketName = getMarketName(marketIds['2']);

      expect(response.marketName).toBe(marketName);
      expect(response.payerAddress).toBe(candidate.payerAddress);
      expect(response.status).toBe(OrderStatus.OPEN);

      logResponse(response);
    });

    it('Check the available wallet balances from the tokens 1 and 2', async () => {
      request = {
        tokenIds: [tokenIds[1], tokenIds[2]],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      logRequest(request);

      response = await kujira.getBalances(request);

      const RequestTokensDenom = [
        Denom.from(request.tokenIds[0]),
        Denom.from(request.tokenIds[1]),
      ];

      const ResponseTokens = response.tokens
        .keySeq()
        .map((obj: any) => obj)
        .toArray();
      const ResponseTokensDenom = [
        Denom.from(ResponseTokens[0]),
        Denom.from(ResponseTokens[1]),
      ];

      expect(ResponseTokensDenom[0].eq(ResponseTokensDenom[1])).toBeFalsy;
      expect(
        RequestTokensDenom[0].eq(ResponseTokensDenom[0]) ||
          RequestTokensDenom[0].eq(ResponseTokensDenom[1])
      ).toBeTruthy();
      expect(
        RequestTokensDenom[1].eq(ResponseTokensDenom[1]) ||
          RequestTokensDenom[1].eq(ResponseTokensDenom[0])
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

      expect(
        oldBaseBalance.free.toNumber() -
          (orderFee.toNumber() + orderAmount.toNumber())
      ).toEqual(newBaseBalance.free?.toNumber());

      expect(oldQuoteBalance.free.toNumber()).toEqual(
        newQuoteBalance.free.toNumber()
      );
      userBalances.tokens.set(marketTokens[0].reference, newBaseBalance);
      userBalances.tokens.set(marketTokens[1].reference, newQuoteBalance);
    });

    it('Get the open order 2', async () => {
      const orderPlaced = getOrder('2');
      const marketName: MarketName = getMarketName(marketIds['2']);

      request = {
        id: orderPlaced.id,
        status: OrderStatus.OPEN,
        ownerAddress: ownerAddress,
      } as GetOrderRequest;

      logRequest(request);

      response = await kujira.getOrder(request);

      expect(response).toBeObject();
      expect(response.status).toEqual(OrderStatus.OPEN);
      expect(response.id).toEqual(orderPlaced.id);
      expect(response.marketName).toBe(marketName);
      expect(response.marketId).toBe(marketIds['2']);
      expect(response.ownerAddress).toEqual(ownerAddress);
      expect(response.price.toNumber()).toEqual(orderPlaced.price.toNumber());
      expect(response.amount.toNumber()).toEqual(orderPlaced.amount.toNumber());

      logResponse(response);
    });

    it('Create 7 orders at once', async () => {
      const candidates = getOrders(['3', '4', '5', '6', '7', '8', '9']);

      request = {
        orders: candidates
          .valueSeq()
          .map((candidate) => ({ ...candidate }))
          .toArray(),
      } as PlaceOrdersRequest;

      logRequest(request);

      response = await kujira.placeOrders(request);

      response
        .valueSeq()
        .toArray()
        .map((order: Order) => {
          const clientId = getNotNullOrThrowError<OrderClientId>(
            order.clientId
          );
          const candidateOrder = getNotNullOrThrowError<Order>(
            candidates.get(clientId)
          );
          candidateOrder.id = order.id;
          candidateOrder.marketName = order.marketName;
          candidateOrder.status = order.status;
          candidateOrder.fee = order.fee;
          candidateOrder.signatures = order.signatures;
        });

      for (const [, order] of response.entries()) {
        const clientId = getNotNullOrThrowError<Order>(order.clientId);
        const candidate = candidates.get(clientId.toString());

        expect(order.id).toBeString();
        expect(order.marketId).toBe(candidate?.marketId);
        expect(order.ownerAddress).toBe(candidate?.ownerAddress);
        expect(order.price).toEqual(candidate?.price.toNumber().toString());
        expect(order.amount).toEqual(candidate?.amount.toNumber().toString());
        expect(order.side).toBe(candidate?.side);
        expect(order.payerAddress).toBe(candidate?.payerAddress);
        expect(order.status).toBe(OrderStatus.OPEN);
        expect(order.signatures).toBeObject();
        expect(order.type).toBe(candidate?.type);
      }

      logResponse(response);
    });

    it('Check the wallet balances from the tokens 1, 2, and 3', async () => {
      request = {
        tokenIds: [tokenIds[1], tokenIds[2], tokenIds[3]],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      logRequest(request);

      response = await kujira.getBalances(request);
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

    it('Get the open orders 6 and 7', async () => {
      const ordersPlaced = getOrders(['6', '7']);
      const ids = ordersPlaced
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const numOfOrders = Object.entries(ordersPlaced.toArray()).length;

      console.log(numOfOrders);

      request = {
        ids,
        ownerAddresses: [ownerAddress],
        status: OrderStatus.OPEN,
      } as GetOrdersRequest;

      logRequest(request);

      response = await kujira.getOrders(request);
      // const responseArray = response.toArray();
      // console.log(responseArray);

      // for (let i = 0; i < numOfOrders; i++) {
      //   expect(responseArray[i][1].toArray()[i][1].status).toEqual(
      //     OrderStatus.OPEN
      //   );
      //   // expect(responseArray[i].id).toEqual(ordersPlaced.toArray()[i].id);
      //   // expect(order.marketName).toBe(marketName);
      //   // expect(responseArray[i].marketId).toBe(marketIds['2']);
      //   expect(responseArray[i][1].toArray().ownerAddress).toEqual(
      //     ownerAddress
      //   );
      //   // expect(responseArray[i].price.toNumber()).toEqual(ordersPlaced.toArray()[i].price.toNumber());
      //   // expect(responseArray[i].amount.toNumber()).toEqual(ordersPlaced.toArray()[i].amount.toNumber());
      // }

      logResponse(response);
    });

    it('Get all open orders', async () => {
      request = {
        ownerAddresses: [ownerAddress],
        status: OrderStatus.OPEN,
      } as GetOrdersRequest;

      logRequest(request);

      response = await kujira.getOrders(request);

      logResponse(response);
    });

    it('Cancel the order 1', async () => {
      const order = getOrder('1');

      request = {
        id: order.id,
        marketId: order.marketId,
        ownerAddress: order.ownerAddress,
      } as CancelOrderRequest;

      logRequest(request);

      response = await kujira.cancelOrder(request);

      expect(response).not.toBeEmpty();
      expect(response.id).toEqual(order.id);
      expect(response.marketId).toBe(order.marketId);
      expect(response.status).toBe(OrderStatus.CANCELLED);
      expect(response.signatures).toHaveProperty('cancellation');
      expect(response.signatures['cancellation'].length).toBeGreaterThan(0);

      order.fee = response.fee;
      // TODO Assign the cancellation signature to the order !!!

      logResponse(response);
    });

    it('Check the wallet balances from the tokens 1 and 3', async () => {
      request = {
        tokenIds: [tokenIds[1], tokenIds[3]],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      logRequest(request);

      response = await kujira.getBalances(request);

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
      const order = getOrder('1');

      request = {
        id: order.id,
        ownerAddress: order.ownerAddress,
        marketId: order.marketId,
      } as GetOrderRequest;

      logRequest(request);

      response = await kujira.getOrder(request);

      expect(response).not.toBeObject();
      expect(response).toBeUndefined();

      logResponse(response);
    });

    it('Get all open orders and check that order 1 is missing', async () => {
      const order = getOrder('1');

      request = {
        ownerAddresses: [ownerAddress],
        status: OrderStatus.OPEN,
      } as GetOrdersRequest;

      logRequest(request);

      response = await kujira.getOrders(request);

      expect(response.first().keySeq().toArray()).not.toContain(
        getNotNullOrThrowError(order.id)
      );

      logResponse(response);
    });

    it('Cancel the orders 3, 4, and 5 from markets 1 and 2', async () => {
      const orders = getOrders(['3', '4', '5']).valueSeq().toArray();

      request = {
        ids: [orders[0].id, orders[1].id],
        marketId: orders[0].marketId,
        ownerAddresses: [ownerAddress],
      } as CancelOrdersRequest;

      logRequest(request);

      response = await kujira.cancelOrders(request);

      expect(response).not.toBeEmpty();
      for (const value of response.first()) {
        expect(value[1].status).toBe(OrderStatus.CANCELLED);
        expect(value[1].signatures).toHaveProperty('cancellation');
        expect(value[1].signatures['cancellation'].length).toEqual(64);
      }
      expect(
        Object.entries(response.first().keySeq().toArray()).length
      ).toEqual(request.ids.length);
      expect(response.first().keySeq().toArray()).toEqual(request.ids);
      expect(response.first().first().marketId).toEqual(request.marketId);

      logResponse(response);

      request = {
        id: orders[2].id,
        ownerAddress: ownerAddress,
        marketId: orders[2].marketId,
      } as CancelOrderRequest;

      logRequest(request);

      response = await kujira.cancelOrder(request);

      expect(response).not.toBeEmpty();
      expect(response.id).toEqual(request.id);
      expect(response.marketId).toEqual(request.marketId);
      expect(response.status).toBe(OrderStatus.CANCELLED);
      expect(response.signatures).toHaveProperty('cancellation');
      expect(response.signatures['cancellation'].length).toEqual(64);

      logResponse(response);
    });

    it('Check the wallet balances from the tokens 1, 2, and 3', async () => {
      request = {
        tokenIds: [tokenIds[1], tokenIds[2], tokenIds[3]],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      logRequest(request);

      response = await kujira.getBalances(request);

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

    it("Check that it's not possible to get the cancelled orders 3, 4, and 5 from the markets 1 and 2", async () => {
      const orders = getOrders(['3', '4', '5']);
      const ids = orders
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      request = {
        ids,
        ownerAddresses: [ownerAddress],
        status: OrderStatus.OPEN,
      } as GetOrdersRequest;

      logRequest(request);

      response = await kujira.getOrders(request);

      // expect(response).not.toBeObject();
      // expect(response).toBeUndefined();
      expect(response.first().keySeq().toArray().length).toEqual(0);

      logResponse(response);
    });

    it('Get all open orders and check that the orders 1, 3, 4, and 5 are missing', async () => {
      const orders = getOrders(['1', '3', '4', '5']);
      const ids = orders
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      request = {
        ownerAddresses: [ownerAddress],
        status: OrderStatus.OPEN,
      } as GetOrdersRequest;

      logRequest(request);

      response = await kujira.getOrders(request);

      // const numOfOpenOrders = response.first().keySeq().toArray().length;
      // console.log(numOfOpenOrders);

      for (const id of ids) {
        for (const value of response.valueSeq().first().toArray()) {
          expect(value[1].id).not.toEqual(id);
        }
      }

      logResponse(response);
    });

    it('Force the filling of order 2', async () => {
      const order = getOrder('2');

      request = {
        id: order.id,
        ownerAddress: ownerAddress,
        marketId: order.marketId,
      } as CancelOrderRequest;

      logRequest(request);

      response = await kujira.cancelOrder(request);

      order.id = undefined;
      order.status = undefined;
      order.fee = undefined;
      order.signatures = undefined;

      // request = {
      //   marketId: marketIds[2],
      // } as GetTickerRequest;
      //
      // response = await kujira.getTicker(request);

      request = {
        marketIds: [marketIds[2]],
      } as GetOrderBooksRequest;

      response = await kujira.getOrderBooks(request);

      const modifiedOrder = { ...order } as Order;

      modifiedOrder.price = BigNumber(response.first().bestBid.price);

      request = { ...modifiedOrder } as PlaceOrderRequest;

      logRequest(request);

      response = await kujira.placeOrder(request);

      order.id = response.id;

      logResponse(response);
    });

    it('Check the wallet balances from the tokens 1 and 2', async () => {
      request = {
        tokenIds: [tokenIds[1], tokenIds[2]],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      logRequest(request);

      response = await kujira.getBalances(request);

      logResponse(response);
    });

    it('Get the filled order 2', async () => {
      const order = getOrder('2');
      const id = order.id;

      request = {
        id,
        status: OrderStatus.FILLED,
        ownerAddress: ownerAddress,
      } as GetOrderRequest;

      logRequest(request);

      response = await kujira.getOrder(request);

      expect(response.id).toEqual(id);
      expect(response.status).toEqual(OrderStatus.FILLED);
      expect(response.connectorOrder.offer_amount).toEqual('0');
      expect(response.connectorOrder.filled_amount).toEqual(
        order.amount.toNumber().toString()
      );

      logResponse(response);
    });

    it('Get all open orders and check that the orders 1, 2, 3, 4, and 5 are missing', async () => {
      const orders = getOrders(['1', '2', '3', '4', '5']);
      const ids = orders
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      request = {
        ownerAddresses: [ownerAddress],
        status: OrderStatus.OPEN,
      } as GetOrdersRequest;

      logRequest(request);

      response = await kujira.getOrders(request);

      for (const id of ids) {
        for (const value of response.valueSeq().first().toArray()) {
          expect(value[1].id).not.toEqual(id);
        }
      }

      logResponse(response);
    });

    it('Get all orders (open or filled) and check that the order 2 is present', async () => {
      const order = getOrder('2');
      const id = order.id;

      request = {
        ownerAddresses: [ownerAddress],
      } as GetOrdersRequest;

      logRequest(request);

      response = await kujira.getOrders(request);

      expect(response.first().keySeq().toArray()).toContain(id);
      expect(response.first().get(id).status).toEqual(OrderStatus.FILLED);

      logResponse(response);
    });

    // it('Force the filling of orders 6 and 7', async () => {
    // });

    it('Check the wallet balances from the tokens 1, 2, and 3', async () => {
      request = {
        tokenIds: [tokenIds[1], tokenIds[2], tokenIds[3]],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      logRequest(request);

      response = await kujira.getBalances(request);

      logResponse(response);
    });

    it('Get the filled orders 6 and 7', async () => {
      const ids = getOrders(['6', '7'])
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      request = {
        ids,
        ownerAddresses: [ownerAddress],
        status: OrderStatus.FILLED,
      } as GetOrdersRequest;

      logRequest(request);

      response = await kujira.getOrders(request);

      logResponse(response);
    });

    it('Get all filled orders and check that the orders 2, 6, and 7 are present', async () => {
      request = {
        ownerAddresses: [ownerAddress],
        status: OrderStatus.FILLED,
      } as GetOrdersRequest;

      logRequest(request);

      response = await kujira.getOrders(request);

      logResponse(response);
    });

    it('Get all open orders and check that the orders 1, 2, 3, 4, 5, 6, and 7 are missing', async () => {
      request = {
        ownerAddresses: [ownerAddress],
        status: OrderStatus.OPEN,
      } as GetOrdersRequest;

      logRequest(request);

      response = await kujira.getOrders(request);

      logResponse(response);
    });

    it('Get all orders (open or filled) and check that the orders 2, 6, and 7 are present', async () => {
      request = {
        ownerAddresses: [ownerAddress],
      } as GetOrdersRequest;

      logRequest(request);

      response = await kujira.getOrders(request);

      logResponse(response);
    });

    it('Cancel all the open orders', async () => {
      request = {
        ownerAddresses: [ownerAddress],
      } as CancelAllOrdersRequest;

      logRequest(request);

      response = await kujira.cancelAllOrders(request);

      logResponse(response);
    });

    it('Check the wallet balances from the tokens 2 and 3', async () => {
      request = {
        tokenIds: [tokenIds[2], tokenIds[3]],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      logRequest(request);

      response = await kujira.getBalances(request);

      logResponse(response);
    });

    it('Get all open orders and check that there are no open orders', async () => {
      request = {
        ownerAddresses: [ownerAddress],
        status: OrderStatus.OPEN,
      } as GetOrdersRequest;

      logRequest(request);

      response = await kujira.getOrders(request);

      logResponse(response);
    });

    it('Get all orders (open or filled) and check that the orders 2, 6, and 7 are present', async () => {
      request = {
        ownerAddresses: [ownerAddress],
      } as GetOrdersRequest;

      logRequest(request);

      response = await kujira.getOrders(request);

      logResponse(response);
    });

    it('Create orders 10 and 11 at once', async () => {
      const candidates = getOrders(['10', '11']);

      request = {
        orders: candidates
          .valueSeq()
          .map((candidate) => ({ ...candidate }))
          .toArray(),
      } as PlaceOrdersRequest;

      logRequest(request);

      response = await kujira.placeOrders(request);

      response.valueSeq().map((order: Order) => {
        const clientId = getNotNullOrThrowError<OrderClientId>(order.clientId);
        const candidateOrder = getNotNullOrThrowError<Order>(
          candidates.get(clientId)
        );
        candidateOrder.id = order.id;
      });

      logResponse(response);
    });

    it('Get all open orders and check that the orders 10 and 11 are present', async () => {
      request = {
        ownerAddresses: [ownerAddress],
        status: OrderStatus.OPEN,
      } as GetOrdersRequest;

      logRequest(request);

      response = await kujira.getOrders(request);

      logResponse(response);
    });

    it('Get all orders (open or filled) and check that the orders 2, 6, 7, 10, and 11 are present', async () => {
      request = {
        ownerAddresses: [ownerAddress],
      } as GetOrdersRequest;

      logRequest(request);

      response = await kujira.getOrders(request);

      logResponse(response);
    });

    it('Cancel all the open orders', async () => {
      request = {
        ownerAddresses: [ownerAddress],
      } as CancelAllOrdersRequest;

      logRequest(request);

      response = await kujira.cancelAllOrders(request);

      logResponse(response);
    });

    it('Check the wallet balances from the tokens 2 and 3', async () => {
      request = {
        tokenIds: [tokenIds[2], tokenIds[3]],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      logRequest(request);

      response = await kujira.getBalances(request);

      logResponse(response);
    });

    it('Get all open orders and check that there are no open orders', async () => {
      request = {
        ownerAddresses: [ownerAddress],
        status: OrderStatus.OPEN,
      } as GetOrdersRequest;

      logRequest(request);

      response = await kujira.getOrders(request);

      logResponse(response);
    });

    it('Settle funds for market 1', async () => {
      request = {
        marketId: marketIds[1],
        ownerAddresses: [ownerAddress],
      } as MarketWithdrawRequest;

      logRequest(request);

      response = await kujira.settleMarketFunds(request);

      logResponse(response);
    });

    it('Check the wallet balances', async () => {
      request = {
        ownerAddress: ownerAddress,
      } as GetAllBalancesRequest;

      logRequest(request);

      response = await kujira.getAllBalances(request);

      logResponse(response);
    });

    it('Settle funds for markets 2 and 3', async () => {
      request = {
        marketIds: [marketIds[2], marketIds[3]],
        ownerAddresses: [ownerAddress],
      } as MarketsWithdrawsRequest;

      logRequest(request);

      response = await kujira.settleMarketsFunds(request);

      logResponse(response);
    });

    it('Check the wallet balances', async () => {
      request = {
        ownerAddress: ownerAddress,
      } as GetAllBalancesRequest;

      logRequest(request);

      response = await kujira.getAllBalances(request);

      logResponse(response);
    });

    it('Settle funds for all markets', async () => {
      request = {
        ownerAddresses: [ownerAddress],
      } as AllMarketsWithdrawsRequest;

      logRequest(request);

      response = await kujira.settleAllMarketsFunds(request);

      logResponse(response);
    });
  });
});
