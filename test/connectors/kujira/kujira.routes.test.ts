import 'jest-extended';
import { BigNumber } from 'bignumber.js';
import { unpatch } from '../../services/patch';
import { Kujira } from '../../../src/connectors/kujira/kujira';
import { KujiraConfig } from '../../../src/connectors/kujira/kujira.config';
import {
  logRequest as helperLogRequest,
  logResponse as helperLogResponse,
  sendRequest as helperSendRequest,
  SendRequestFunction,
  SendRequestOptions,
} from '../helpers';
import {
  AllMarketsWithdrawsRequest,
  AsyncFunctionType,
  AllMarketsWithdrawsResponse,
  Balance,
  Balances,
  CancelAllOrdersRequest,
  CancelAllOrdersResponse,
  CancelOrderRequest,
  CancelOrderResponse,
  CancelOrdersRequest,
  CancelOrdersResponse,
  GetAllBalancesRequest,
  GetAllMarketsRequest,
  GetAllOrderBooksRequest,
  GetAllTickersRequest,
  GetAllTokensRequest,
  GetBalanceRequest,
  GetBalancesRequest,
  GetBalancesResponse,
  GetMarketRequest,
  GetMarketsRequest,
  GetOrderBookRequest,
  GetOrderBooksRequest,
  GetOrderRequest,
  GetOrderResponse,
  GetOrdersRequest,
  GetOrdersResponse,
  GetTickerRequest,
  GetTickersRequest,
  GetTokenRequest,
  GetTokenResponse,
  GetTokensRequest,
  GetTransactionRequest,
  GetTransactionsRequest,
  IMap,
  Market,
  MarketId,
  MarketName,
  MarketsWithdrawsFundsResponse,
  MarketsWithdrawsRequest,
  MarketWithdrawRequest,
  MarketWithdrawResponse,
  Order,
  OrderBook,
  OrderClientId,
  OrderFee,
  OrderId,
  OrderMarketName,
  OrderSide,
  OrderStatus,
  OrderType,
  OwnerAddress,
  PlaceOrderRequest,
  PlaceOrderResponse,
  PlaceOrdersRequest,
  PlaceOrdersResponse,
  RequestStrategy,
  RESTfulMethod,
  Ticker,
  Token,
  TokenId,
  TokenName,
  TokenSymbol,
  Transaction,
  Withdraw,
} from '../../../src/connectors/kujira/kujira.types';
import { Denom, fin, KUJI, TESTNET } from 'kujira.js';
import { addWallet } from '../../../src/services/wallet/wallet.controllers';
import { AddWalletRequest } from '../../../src/services/wallet/wallet.requests';
import lodash from 'lodash';
import { getNotNullOrThrowError } from '../../../src/connectors/kujira/kujira.helpers';
import {
  createPatches,
  disablePatches,
  // enablePatches,
  getPatch as helperGetPatch,
} from './fixtures/patches/patches';
import { ConfigManagerV2 } from '../../../src/services/config-manager-v2';
import { KujiraRoutes } from '../../../src/connectors/kujira/kujira.routes';
import express from 'express';
import { Express } from 'express-serve-static-core';

// enablePatches();
disablePatches();

let patches: IMap<string, AsyncFunctionType<any, any>>;

jest.setTimeout(30 * 60 * 1000);

let getPatch: any;

let sendRequest: SendRequestFunction;

let testTitle: string;
let logRequest: (target: any) => void;
let logResponse: (target: any) => void;
// let logOutput: (target: any) => void;

let allTokens: any;

let kujira: Kujira;

const config = KujiraConfig.config;

const kujiToken = KUJI;

const tokenIds = {
  1: 'ukuji', // KUJI
  2: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo', // DEMO
  3: 'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk', // USK
};

const tokensDenoms = {
  1: Denom.from(tokenIds[1]),
  2: Denom.from(tokenIds[2]),
  3: Denom.from(tokenIds[3]),
};

const networksPairs: Record<string, fin.Pair> = fin.PAIRS[TESTNET];

const marketsIds = {
  1: networksPairs[
    'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh'
  ].address, // KUJI/DEMO
  2: networksPairs[
    'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6'
  ].address, // KUJI/USK
  3: networksPairs[
    'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg'
  ].address, // DEMO/USK
};

const transactionsHashes = {
  1: 'D5C9B4FBD06482C1B40CEA3B1D10E445049F1F19CA5531265FC523973CC65EF9',
  2: '50F44E09A0617E7506B4F78886C4828A05FC84141A6BB57DA1B87A03EF4ADB91',
  3: '66DBF37EAE15E28AD70E3292216DEE3D6B61E5C5913EBCE584E4971D2A6A2F2B',
};

const orders: IMap<OrderClientId, Order> = IMap<
  OrderClientId,
  Order
>().asMutable();

let userBalances: Balances;

let lastPayedFeeSum: OrderFee = BigNumber(0);

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

let expressApp: Express;

beforeAll(async () => {
  const configManager = ConfigManagerV2.getInstance();
  configManager.set('kujira.timeout.all', 1);
  configManager.set('kujira.retry.all.maxNumberOfRetries', 1);
  configManager.set('kujira.retry.all.delayBetweenRetries', 1);
  configManager.set('kujira.parallel.all.batchSize', 100);
  configManager.set('kujira.parallel.all.delayBetweenBatches', 1);

  expressApp = express();
  expressApp.use(express.json());

  expressApp.use('/kujira', KujiraRoutes.router);

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

  patches = await createPatches(kujira);

  getPatch = async <R>(keyPath: string[]): Promise<R> =>
    helperGetPatch<R>(patches, keyPath);

  (await getPatch(['kujira', 'kujiraFinClientWithdrawOrders']))();
  (await getPatch(['kujira', 'kujiraGetBasicMarkets']))();
  (await getPatch(['kujira', 'kujiraGetBasicTokens']))();
  (await getPatch(['kujira', 'kujiraQueryClientWasmQueryContractSmart']))();
  (await getPatch(['kujira', 'kujiraSigningStargateClientSignAndBroadcast']))();
  (await getPatch(['kujira', 'kujiraStargateClientGetAllBalances']))();
  (await getPatch(['kujira', 'kujiraStargateClientGetBalanceStaked']))();
  (await getPatch(['kujira', 'kujiraStargateClientGetHeight']))();
  (await getPatch(['kujira', 'kujiraStargateClientGetTx']))();

  await kujira.init();

  orders.set('1', {
    id: undefined,
    clientId: '1',
    marketName: undefined as unknown as OrderMarketName,
    marketId: marketsIds[1],
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
    marketId: marketsIds[2],
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
    marketId: marketsIds[3],
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
    marketId: marketsIds[1],
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
    marketId: marketsIds[2],
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
    marketId: marketsIds[3],
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
    marketId: marketsIds[1],
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
    marketId: marketsIds[2],
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
    marketId: marketsIds[3],
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
    marketId: marketsIds[1],
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
    marketId: marketsIds[2],
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
    marketId: marketsIds[3],
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
    marketId: marketsIds[1],
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
  sendRequest = <R>(options: SendRequestOptions<R>) => {
    options.strategy = options.strategy || RequestStrategy.RESTful;
    options.RESTExpress = options.RESTExpress || expressApp;
    options.RESTRoute = `/kujira${options.RESTRoute}`;
    options.controller = options.controller || kujira;

    return helperSendRequest(options);
  };

  testTitle = expect.getState().currentTestName;
  logRequest = (target: any) => helperLogRequest(target, testTitle);
  logResponse = (target: any) => helperLogResponse(target, testTitle);
  // logOutput = (target: any) => helperLogOutput(target, testTitle);
});

afterEach(() => {
  unpatch();
});

// TODO Add tests to test the retrieval of the estimated fees, current block, and one or more transactions or wallet public keys.
describe('Kujira', () => {
  const commonRequestBody = {
    chain: config.chain,
    network: config.network,
    connector: config.connector,
  };

  describe('Tokens', () => {
    it('Get token 1 by id', async () => {
      const requestBody = {
        id: tokenIds[1],
      } as GetTokenRequest;

      logRequest(requestBody);

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      const response = await sendRequest<GetTokenResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/token',
        RESTRequest: request,
        controllerFunction: kujira.getToken,
      });

      const responseBody = response.body as GetTokenResponse;

      logResponse(responseBody);

      const targetDenom = Denom.from(tokenIds[1]);

      expect(responseBody).not.toBeEmpty();
      expect(responseBody.id).toBe(request.id);
      expect(responseBody.symbol).toBe(targetDenom.symbol);
      expect(responseBody.decimals).toBe(targetDenom.decimals);
    });

    it('Get token 1 by name', async () => {
      const target = Denom.from(tokenIds[1]);
      const request = {
        name: target.symbol,
      } as GetTokenRequest;

      logRequest(request);

      const response = await kujira.getToken(request);

      logResponse(response);

      expect(response).not.toBeEmpty();
      expect(response.id).toBe(target.reference);
      expect(response.name).toBe(request.name);
      expect(response.symbol).toBe(target.symbol);
      expect(response.decimals).toBe(target.decimals);
    });

    it('Get token 1 by symbol', async () => {
      const target = Denom.from(tokenIds[1]);
      const request = {
        symbol: target.symbol,
      } as GetTokenRequest;

      logRequest(request);

      const response = await kujira.getToken(request);

      logResponse(response);

      expect(response).not.toBeEmpty();
      expect(response.id).toBe(target.reference);
      expect(response.symbol).toBe(request.symbol);
      expect(response.decimals).toBe(target.decimals);
    });

    it('Get tokens 2 and 3 by ids', async () => {
      const request = {
        ids: [tokenIds[2], tokenIds[3]],
      } as GetTokensRequest;

      logRequest(request);

      const response = await kujira.getTokens(request);

      logResponse(response);

      expect(response.size).toBe(request.ids?.length);

      for (const token of response.values()) {
        const targetToken = Denom.from(token.id);
        expect(token).not.toBeEmpty();
        expect(token.id).toBe(targetToken.reference);
        expect(token.symbol).toBe(targetToken.symbol);
        expect(token.decimals).toBe(targetToken.decimals);
      }

      for (const tokenId of getNotNullOrThrowError<TokenId[]>(request.ids)) {
        const token = Denom.from(tokenId);
        const targetToken = getNotNullOrThrowError<Token>(
          response.get(tokenId)
        );
        expect(targetToken).not.toBeEmpty();
        expect(targetToken.id).toBe(token.reference);
        expect(targetToken.symbol).toBe(token.symbol);
        expect(targetToken.decimals).toBe(token.decimals);
      }
    });

    it('Get tokens 2 and 3 by names', async () => {
      const targetsIds = [tokenIds[2], tokenIds[3]];
      const targetsDenoms: Denom[] = [];
      for (const targetId of targetsIds) {
        targetsDenoms.push(Denom.from(targetId));
      }

      const request = {
        names: [targetsDenoms[0].symbol, targetsDenoms[1].symbol],
      } as GetTokensRequest;

      logRequest(request);

      const response = await kujira.getTokens(request);

      logResponse(response);

      expect(response.size).toBe(request.names?.length);

      for (const token of response.values()) {
        const targetToken = Denom.from(token.id);
        expect(token).not.toBeEmpty();
        expect(token.id).toBe(targetToken.reference);
        expect(token.symbol).toBe(targetToken.symbol);
        expect(token.decimals).toBe(targetToken.decimals);
      }

      for (const tokenName of getNotNullOrThrowError<TokenName[]>(
        request.names
      )) {
        const token = Denom.from(tokenName);
        const targetToken = getNotNullOrThrowError<Token>(
          response.filter((item: Token) => item.name == tokenName).first()
        );
        expect(targetToken).not.toBeEmpty();
        expect(targetToken.symbol).toBe(token.reference);
        expect(targetToken.decimals).toBe(token.decimals);
      }
    });

    it('Get tokens 2 and 3 by symbols', async () => {
      const targetsIds = [tokenIds[2], tokenIds[3]];
      const targetsDenoms: Denom[] = [];
      for (const targetId of targetsIds) {
        targetsDenoms.push(Denom.from(targetId));
      }

      const request = {
        symbols: [targetsDenoms[0].symbol, targetsDenoms[1].symbol],
      } as GetTokensRequest;

      logRequest(request);

      const response = await kujira.getTokens(request);

      logResponse(response);

      expect(response.size).toBe(request.symbols?.length);

      for (const token of response.values()) {
        const targetToken = Denom.from(token.id);
        expect(token).not.toBeEmpty();
        expect(token.id).toBe(targetToken.reference);
        expect(token.symbol).toBe(targetToken.symbol);
        expect(token.decimals).toBe(targetToken.decimals);
      }

      for (const tokenName of getNotNullOrThrowError<TokenSymbol[]>(
        request.symbols
      )) {
        const token = Denom.from(tokenName);
        const targetToken = getNotNullOrThrowError<Token>(
          response.filter((item: Token) => item.name == tokenName).first()
        );
        expect(targetToken).not.toBeEmpty();
        expect(targetToken.symbol).toBe(token.reference);
        expect(targetToken.decimals).toBe(token.decimals);
      }
    });

    it('Get all tokens', async () => {
      const request = {} as GetAllTokensRequest;

      logRequest(request);

      allTokens = await kujira.getAllTokens(request);

      logResponse(allTokens);

      for (const tokenId of Object.values(tokenIds)) {
        if (tokenId != tokenIds['1']) {
          const token = Denom.from(tokenId);
          const targetToken = getNotNullOrThrowError<Token>(
            allTokens
              .filter((item: Token) => item.id == tokenId)
              .toArray()[0][1]
          );
          expect(targetToken).not.toBeEmpty();
          expect(targetToken.id).toBe(token.reference);
          expect(targetToken.symbol).toBe(token.symbol);
          expect(targetToken.decimals).toBe(token.decimals);
        }
      }
    });
  });

  describe('Markets', () => {
    it('Get market 1 by id', async () => {
      const request = {
        id: marketsIds[1],
      } as GetMarketRequest;

      logRequest(request);

      const response = await kujira.getMarket(request);

      logResponse(response);

      const networkPair = networksPairs[marketsIds[1]];
      expect(response.id).toEqual(marketsIds[1]);
      expect([response.baseToken.id, response.quoteToken.id]).toEqual([
        networkPair.denoms[0].reference,
        networkPair.denoms[1].reference,
      ]);
      expect(response.precision).toEqual(
        'decimal_places' in networkPair.precision
          ? networkPair.precision.decimal_places
          : 'significant_figures' in networkPair.precision
          ? networkPair.precision.significant_figures
          : undefined
      );
    });

    it('Get market 1 by name', async () => {
      const networkPair = networksPairs[marketsIds[1]];

      const request = {
        name: networkPair.denoms[0].symbol + '/' + networkPair.denoms[1].symbol,
      } as GetMarketRequest;

      logRequest(request);

      const response = await kujira.getMarket(request);

      logResponse(response);

      expect(response.id).toEqual(marketsIds[1]);
      expect([response.baseToken.id, response.quoteToken.id]).toEqual([
        networkPair.denoms[0].reference,
        networkPair.denoms[1].reference,
      ]);
      expect(response.precision).toEqual(
        'decimal_places' in networkPair.precision
          ? networkPair.precision.decimal_places
          : 'significant_figures' in networkPair.precision
          ? networkPair.precision.significant_figures
          : undefined
      );
    });

    it('Get markets 2 and 3 by ids', async () => {
      const targetMarketIds = [marketsIds[2], marketsIds[3]];

      const request = {
        ids: targetMarketIds,
      } as GetMarketsRequest;

      logRequest(request);

      const response = await kujira.getMarkets(request);

      logResponse(response);

      expect(targetMarketIds.length).toEqual(response.size);

      targetMarketIds.forEach((marketId) => {
        const networkPair = networksPairs[marketId];
        const responseToken = getNotNullOrThrowError<Market>(
          response.get(marketId)
        );

        expect(responseToken.id).toEqual(marketId);
        expect([
          responseToken.baseToken.id,
          responseToken.quoteToken.id,
        ]).toEqual([
          networkPair.denoms[0].reference,
          networkPair.denoms[1].reference,
        ]);
        expect(responseToken.precision).toEqual(
          'decimal_places' in networkPair.precision
            ? networkPair.precision.decimal_places
            : 'significant_figures' in networkPair.precision
            ? networkPair.precision.significant_figures
            : undefined
        );
      });
    });

    it('Get markets 2 and 3 by names', async () => {
      const targetMarketIds = [marketsIds[2], marketsIds[3]];
      const targetNames = [];

      for (const target of targetMarketIds.values()) {
        targetNames.push(
          networksPairs[target].denoms[0].symbol +
            '/' +
            networksPairs[target].denoms[1].symbol
        );
      }

      const request = {
        names: targetNames,
      } as GetMarketsRequest;

      logRequest(request);

      const response = await kujira.getMarkets(request);

      logResponse(response);

      expect(targetMarketIds.length).toEqual(response.size);

      for (const target of targetMarketIds) {
        const networkPair = networksPairs[target];
        const responseToken = getNotNullOrThrowError<Market>(
          response.get(target)
        );

        expect(responseToken.id).toEqual(target);
        expect([
          responseToken.baseToken.id,
          responseToken.quoteToken.id,
        ]).toEqual([
          networkPair.denoms[0].reference,
          networkPair.denoms[1].reference,
        ]);
        expect(responseToken.precision).toEqual(
          'decimal_places' in networkPair.precision
            ? networkPair.precision.decimal_places
            : 'significant_figures' in networkPair.precision
            ? networkPair.precision.significant_figures
            : undefined
        );
      }
    });

    it('Get all markets', async () => {
      const targetMarketIds = [marketsIds[1], marketsIds[2], marketsIds[3]];
      const request = {} as GetAllMarketsRequest;

      logRequest(request);

      const response = await kujira.getAllMarkets(request);

      logResponse(response);

      targetMarketIds.forEach((marketId) => {
        const networkPair = networksPairs[marketId];
        const responseToken = getNotNullOrThrowError<Market>(
          response.get(marketId)
        );

        expect(responseToken.id).toEqual(marketId);
        expect([
          responseToken.baseToken.id,
          responseToken.quoteToken.id,
        ]).toEqual([
          networkPair.denoms[0].reference,
          networkPair.denoms[1].reference,
        ]);
        expect(responseToken.precision).toEqual(
          'decimal_places' in networkPair.precision
            ? networkPair.precision.decimal_places
            : 'significant_figures' in networkPair.precision
            ? networkPair.precision.significant_figures
            : undefined
        );
      });
    });
  });

  describe('Order books', () => {
    it('Get order book from market 1 by id', async () => {
      const request = {
        marketId: marketsIds[1],
      } as GetOrderBookRequest;

      logRequest(request);

      const response = await kujira.getOrderBook(request);

      logResponse(response);

      expect(response).not.toBeUndefined();
      expect(response.market.id).toBe(request.marketId);
      expect(response.bids).not.toBeEmpty();
      expect(response.asks).not.toBeEmpty();
      expect(response.bestBid).not.toBeUndefined();
      expect(response.bestAsk).not.toBeUndefined();
    });

    it('Get order book from market 1 by name', async () => {
      const networkPair = networksPairs[marketsIds[1]];

      const request = {
        marketName:
          networkPair.denoms[0].symbol + '/' + networkPair.denoms[1].symbol,
      } as GetOrderBookRequest;

      logRequest(request);

      const response = await kujira.getOrderBook(request);

      logResponse(response);

      expect(response).not.toBeUndefined();
      expect(response.market.name).toBe(request.marketName);
      expect(response.market.id).toBe(marketsIds[1]);
      expect(response.bids).not.toBeEmpty();
      expect(response.asks).not.toBeEmpty();
      expect(response.bestBid).not.toBeUndefined();
      expect(response.bestAsk).not.toBeUndefined();
    });

    it('Get order books from the markets 2 and 3 by ids', async () => {
      const request = {
        marketIds: [marketsIds[2], marketsIds[3]],
      } as GetOrderBooksRequest;

      logRequest(request);

      const response = await kujira.getOrderBooks(request);

      logResponse(response);

      expect(response.size).toEqual(request.marketIds?.length);

      for (const marketId of getNotNullOrThrowError<MarketId[]>(
        request.marketIds
      )) {
        const orderBook = getNotNullOrThrowError<OrderBook>(
          response.get(marketId)
        );
        expect(orderBook.market.id).toBe(marketId);
        expect(orderBook.bids).not.toBeEmpty();
        expect(orderBook.asks).not.toBeEmpty();
        expect(orderBook.bestBid).not.toBeUndefined();
        expect(orderBook.bestAsk).not.toBeUndefined();
      }
    });

    it('Get order books from the markets 2 and 3 by names', async () => {
      const targetMarketIds = [marketsIds[2], marketsIds[3]];
      const targetNames = [];

      for (const target of targetMarketIds.values()) {
        targetNames.push(
          networksPairs[target].denoms[0].symbol +
            '/' +
            networksPairs[target].denoms[1].symbol
        );
      }

      const request = {
        marketNames: targetNames,
      } as GetOrderBooksRequest;

      logRequest(request);

      const response = await kujira.getOrderBooks(request);

      logResponse(response);

      expect(response.size).toEqual(request.marketNames?.length);

      for (const marketName of getNotNullOrThrowError<MarketName[]>(
        request.marketNames
      )) {
        const orderBook = getNotNullOrThrowError<OrderBook>(
          response.get(marketName)
        );
        expect(orderBook.market.name).toBe(marketName);
        expect(orderBook.bids).not.toBeEmpty();
        expect(orderBook.asks).not.toBeEmpty();
        expect(orderBook.bestBid).not.toBeUndefined();
        expect(orderBook.bestAsk).not.toBeUndefined();
      }
    });

    it('Get all order books', async () => {
      const request = {} as GetAllOrderBooksRequest;

      logRequest(request);

      const response = await kujira.getAllOrderBooks(request);

      logResponse(response);

      Object.values(marketsIds).forEach((marketId) => {
        const orderBook = getNotNullOrThrowError<OrderBook>(
          response.get(marketId)
        );
        expect(orderBook.market.id).toBe(marketId);
        expect(orderBook.bids).not.toBeEmpty();
        expect(orderBook.asks).not.toBeEmpty();
        expect(orderBook.bestBid).not.toBeUndefined();
        expect(orderBook.bestAsk).not.toBeUndefined();
      });
    });
  });

  describe('Tickers', () => {
    it('Get ticker from market 1 by id', async () => {
      const request = {
        marketId: marketsIds[1],
      } as GetTickerRequest;

      logRequest(request);

      const response = await kujira.getTicker(request);

      logResponse(response);

      expect(response.market.id).toEqual(marketsIds[1]);
      expect(response.price.gt(0)).toBeTrue();
      expect(response.timestamp).toBeGreaterThan(0);
    });

    it('Get ticker from market 1 by name', async () => {
      const networkPair = networksPairs[marketsIds[1]];

      const request = {
        marketName:
          networkPair.denoms[0].symbol + '/' + networkPair.denoms[1].symbol,
      } as GetTickerRequest;

      logRequest(request);

      const response = await kujira.getTicker(request);

      logResponse(response);

      expect(response.market.name).toEqual(request.marketName);
      expect(response.market.id).toEqual(marketsIds[1]);
      expect(response.price.gt(0)).toBeTrue();
      expect(response.timestamp).toBeGreaterThan(0);
    });

    it('Get tickers from markets 2 and 3 by ids', async () => {
      const targetMarketsIds = [marketsIds[2], marketsIds[3]];
      const request = {
        marketIds: targetMarketsIds,
      } as GetTickersRequest;

      logRequest(request);

      const response = await kujira.getTickers(request);

      logResponse(response);

      targetMarketsIds.forEach((marketId) => {
        const ticker = getNotNullOrThrowError<Ticker>(response.get(marketId));
        expect(ticker.market.id).toEqual(marketId);
        expect(ticker.price.gt(0)).toBeTrue();
        expect(ticker.timestamp).toBeGreaterThan(0);
      });
    });

    it('Get tickers from markets 2 and 3 by names', async () => {
      const targetMarketIds = [marketsIds[2], marketsIds[3]];
      const targetNames = [];

      for (const target of targetMarketIds.values()) {
        targetNames.push(
          networksPairs[target].denoms[0].symbol +
            '/' +
            networksPairs[target].denoms[1].symbol
        );
      }
      const request = {
        marketNames: targetNames,
      } as GetTickersRequest;

      logRequest(request);

      const response = await kujira.getTickers(request);

      logResponse(response);

      for (const marketName of targetNames.values()) {
        const ticker = getNotNullOrThrowError<Ticker>(response.get(marketName));
        expect(ticker.market.name).toEqual(marketName);
        expect(ticker.price.gt(0)).toBeTrue();
        expect(ticker.timestamp).toBeGreaterThan(0);
      }
    });

    it('Get all tickers', async () => {
      const targetMarketsIds = [marketsIds[1], marketsIds[2], marketsIds[3]];
      const request = {} as GetAllTickersRequest;

      logRequest(request);

      const response = await kujira.getAllTickers(request);

      logResponse(response);

      targetMarketsIds.forEach((marketId) => {
        const ticker = getNotNullOrThrowError<Ticker>(response.get(marketId));
        expect(ticker.market.id).toEqual(marketId);
        expect(ticker.price.gt(0)).toBeTrue();
        expect(ticker.timestamp).toBeGreaterThan(0);
      });
    });
  });

  describe('User', () => {
    it('Get balance of token 1 by id', async () => {
      const request = {
        tokenId: tokensDenoms[1].reference,
        ownerAddress: ownerAddress,
      } as GetBalanceRequest;

      logRequest(request);

      const response = await kujira.getBalance(request);

      logResponse(response);

      expect(response).not.toBeUndefined();
      expect((response.token as Token).id).toBe(request.tokenId);
    });

    it('Get balance of token 1 by symbol', async () => {
      const request = {
        tokenSymbol: tokensDenoms[1].symbol,
        ownerAddress: ownerAddress,
      } as GetBalanceRequest;

      logRequest(request);

      const response = await kujira.getBalance(request);

      logResponse(response);

      expect(response).not.toBeUndefined();
      expect(getNotNullOrThrowError<any>(response.token).symbol).toBe(
        request.tokenSymbol
      );
    });

    it('Get balances of tokens 2 and 3 by ids', async () => {
      const request = {
        tokenIds: [tokenIds[2], tokenIds[3]],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      logRequest(request);

      const response = await kujira.getBalances(request);

      logResponse(response);

      expect(response.tokens.size).toEqual(request.tokenIds?.length);

      for (const tokenId of getNotNullOrThrowError<TokenId[]>(
        request.tokenIds
      )) {
        const balance = getNotNullOrThrowError<Balance>(
          response.tokens.get(tokenId)
        );
        expect(balance).not.toBeUndefined();
        expect((balance.token as Token).id).toBe(tokenId);
      }
    });

    it('Get balances of tokens 2 and 3 by symbols', async () => {
      const targetsSymbols: TokenSymbol[] = [
        tokensDenoms[2].symbol,
        tokensDenoms[3].symbol,
      ];

      const request = {
        tokenSymbols: targetsSymbols,
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      logRequest(request);

      const response = await kujira.getBalances(request);

      logResponse(response);

      expect(response.tokens.size).toEqual(request.tokenSymbols?.length);

      for (const tokenSymbol of getNotNullOrThrowError<TokenSymbol[]>(
        request.tokenSymbols
      )) {
        const balance = getNotNullOrThrowError<Balance>(
          response.tokens
            .filter(
              (token) =>
                getNotNullOrThrowError<Token>(token.token)?.symbol ==
                tokenSymbol
            )
            .first()
        );
        expect(balance).not.toBeUndefined();
        expect(getNotNullOrThrowError<Token>(balance.token)?.symbol).toBe(
          tokenSymbol
        );
      }
    });

    it('Get all balances', async () => {
      const request = {
        ownerAddress: ownerAddress,
      } as GetAllBalancesRequest;

      logRequest(request);

      const response = await kujira.getAllBalances(request);

      logResponse(response);

      Object.values(tokenIds).forEach((tokenId) => {
        const balance = getNotNullOrThrowError<Balance>(
          response.tokens.get(tokenId)
        );
        expect(balance).not.toBeUndefined();
        expect((balance.token as Token).id).toBe(tokenId);
      });
    });
  });

  describe('Transactions', () => {
    it('Get transaction 1', async () => {
      const request = {
        hash: transactionsHashes[1],
      } as GetTransactionRequest;

      logRequest(request);

      const response = await kujira.getTransaction(request);

      logResponse(response);

      expect(response.hash).toEqual(request.hash);
      expect(response.blockNumber).toBeGreaterThan(0);
      expect(response.gasUsed).toBeGreaterThan(0);
      expect(response.gasWanted).toBeGreaterThan(0);
      expect(response.code).toBe(0);
      expect(response.data).toContain('retract_orders');
      expect(response.data).toContain('order_idxs');
    });

    it('Get transactions 2 and 3', async () => {
      const request = {
        hashes: [transactionsHashes[2], transactionsHashes[3]],
      } as GetTransactionsRequest;

      logRequest(request);

      const response = await kujira.getTransactions(request);

      logResponse(response);

      request.hashes.forEach((hash) => {
        const transaction = getNotNullOrThrowError<Transaction>(
          response.get(hash)
        );

        expect(transaction.hash).toEqual(hash);
        expect(transaction.blockNumber).toBeGreaterThan(0);
        expect(transaction.gasUsed).toBeGreaterThan(0);
        expect(transaction.gasWanted).toBeGreaterThan(0);
        expect(transaction.code).toBe(0);
        expect(transaction.data).toContain('submit_order');
        expect(transaction.data).toContain('price');
      });
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
      const requestBody = {
        ownerAddress: ownerAddress,
      } as CancelAllOrdersRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<CancelAllOrdersResponse>({
        RESTMethod: RESTfulMethod.DELETE,
        RESTRoute: '/orders/all',
        RESTRequest: request,
        controllerFunction: kujira.cancelAllOrders,
      });

      const responseBody = response.body as CancelAllOrdersResponse;

      logResponse(responseBody);
    });

    it('Settle funds for all markets', async () => {
      const requestBody = {
        ownerAddress: ownerAddress,
      } as AllMarketsWithdrawsRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<AllMarketsWithdrawsResponse>({
        RESTMethod: RESTfulMethod.POST,
        RESTRoute: '/market/withdraws/all',
        RESTRequest: request,
        controllerFunction: kujira.settleAllMarketsFunds,
      });

      const responseBody = response.body as AllMarketsWithdrawsResponse;

      logResponse(responseBody);
    });

    it('Get the wallet balances from the tokens 1, 2, and 3', async () => {
      const requestBody = {
        tokenIds: [tokenIds[1], tokenIds[2], tokenIds[3]],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetBalancesResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/balances',
        RESTRequest: request,
        controllerFunction: kujira.getBalances,
      });

      const responseBody = response.body as GetBalancesResponse;

      logResponse(responseBody);

      expect(BigNumber(responseBody.total.free).gte(0)).toBeTrue();
      expect(BigNumber(responseBody.total.unsettled).gte(0)).toBeTrue();
      expect(BigNumber(responseBody.total.lockedInOrders).gte(0)).toBeTrue();

      const tokens = IMap(responseBody.tokens);
      for (const balance of tokens.values()) {
        expect(BigNumber(balance.free).gte(0)).toBeTrue();
        expect(BigNumber(balance.unsettled).gte(0)).toBeTrue();
        expect(BigNumber(balance.lockedInOrders).gte(0)).toBeTrue();
      }

      userBalances = {
        ...responseBody,
        tokens: IMap(responseBody.tokens).asMutable(),
      };
      // userBalances.tokens = IMap(responseBody.tokens).asMutable();
    });

    it('Create a limit buy order 1 for market 1', async () => {
      const candidate = getOrder('1');

      const requestBody = { ...candidate } as PlaceOrderRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<PlaceOrderResponse>({
        RESTMethod: RESTfulMethod.POST,
        RESTRoute: '/order',
        RESTRequest: request,
        controllerFunction: kujira.placeOrder,
      });

      const responseBody = response.body as PlaceOrderResponse;

      logResponse(responseBody);

      candidate.id = responseBody.id;
      candidate.marketName = responseBody.marketName;
      candidate.market = responseBody.market;
      candidate.status = responseBody.status;
      candidate.fee = responseBody.fee;
      candidate.hashes = responseBody.hashes;

      expect(responseBody).toBeObject();
      expect(responseBody.id?.length).toBeGreaterThan(0);
      expect(responseBody.marketId).toBe(candidate.marketId);
      expect(responseBody.ownerAddress).toBe(candidate.ownerAddress);
      expect(
        BigNumber(getNotNullOrThrowError(responseBody.price)).toString()
      ).toEqual(candidate.price?.toString());
      expect(BigNumber(responseBody.amount).toString()).toEqual(
        candidate.amount.toString()
      );
      expect(responseBody.side).toBe(candidate.side);
      expect(responseBody.marketName).toBe(candidate.marketName);
      expect(responseBody.payerAddress).toBe(candidate.payerAddress);
      expect(responseBody.status).toBe(OrderStatus.OPEN);
      expect(responseBody.hashes?.creation?.length).toBeCloseTo(64);

      lastPayedFeeSum = BigNumber(
        getNotNullOrThrowError<BigNumber>(responseBody.fee)
      );

      // Updating Quote Balance
      // userBalances.tokens.set(candidate.market.quoteToken.id, {
      //   token: candidate.market.quoteToken,
      //   free: BigNumber(
      //     getNotNullOrThrowError<any>(
      //       userBalances.tokens.get(candidate.market.quoteToken.id)?.free
      //     )
      //   ).minus(candidate.amount),
      //   lockedInOrders: BigNumber(
      //     getNotNullOrThrowError<any>(
      //       userBalances.tokens.get(candidate.market.quoteToken.id)
      //         ?.lockedInOrders
      //     )
      //   ).plus(candidate.amount),
      //   unsettled: BigNumber(
      //     getNotNullOrThrowError<any>(
      //       userBalances.tokens.get(candidate.market.quoteToken.id)?.unsettled
      //     )
      //   ),
      // });
    });

    it('Check the available wallet balances from the tokens 1 and 2', async () => {
      const targetOrder = getOrder('1');

      const requestBody = {
        tokenIds: [
          targetOrder.market.baseToken.id,
          targetOrder.market.quoteToken.id,
        ],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetBalancesResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/balances',
        RESTRequest: request,
        controllerFunction: kujira.getBalances,
      });

      const responseBody = {
        ...response.body,
        tokens: IMap(response.body.tokens),
      } as GetBalancesResponse;

      logResponse(responseBody);

      // Verifying token 1 (base) balance
      const currentBaseBalance = BigNumber(
        getNotNullOrThrowError<any>(
          userBalances.tokens.get(targetOrder.market.baseToken.id)
        ).free
      ).minus(lastPayedFeeSum);

      expect(
        BigNumber(
          getNotNullOrThrowError(
            responseBody.tokens.get(targetOrder.market.baseToken.id)?.free
          )
        )
      ).toEqual(currentBaseBalance);

      const userBalancesSetter = getNotNullOrThrowError<Balance>(
        userBalances.tokens.get(targetOrder.market.baseToken.id)
      );
      userBalancesSetter.free = currentBaseBalance;

      // Verifying token 2 (quote) balance
      const currentQuoteBalance = BigNumber(
        getNotNullOrThrowError<any>(
          userBalances.tokens.get(targetOrder.market.quoteToken.id)
        ).free
      ).minus(getNotNullOrThrowError<any>(targetOrder.amount));

      expect(
        BigNumber(
          getNotNullOrThrowError(
            responseBody.tokens.get(targetOrder.market.quoteToken.id)?.free
          )
        )
      ).toEqual(currentQuoteBalance);

      // Updating Quote Balances (free and lockedInOrders)
      userBalances.tokens.set(targetOrder.market.quoteToken.id, {
        token: targetOrder.market.quoteToken,
        free: currentQuoteBalance,
        lockedInOrders: BigNumber(
          getNotNullOrThrowError<any>(
            userBalances.tokens.get(targetOrder.market.quoteToken.id)
              ?.lockedInOrders
          )
        ).plus(targetOrder.amount),
        unsettled: BigNumber(
          getNotNullOrThrowError<any>(
            userBalances.tokens.get(targetOrder.market.quoteToken.id)?.unsettled
          )
        ),
      });
    });

    it('Get the open order 1', async () => {
      const target = getOrder('1');

      const requestBody = {
        id: target.id,
        status: OrderStatus.OPEN,
        marketId: target.marketId,
        ownerAddress: ownerAddress,
      } as GetOrderRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetOrderResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/order',
        RESTRequest: request,
        controllerFunction: kujira.getOrder,
      });

      const responseBody = response.body as GetOrderResponse;

      logResponse(responseBody);

      expect(responseBody).toBeObject();
      expect(responseBody.status).toEqual(OrderStatus.OPEN);
      expect(responseBody.id).toEqual(target.id);
      expect(responseBody.marketName).toBe(target.marketName);
      expect(responseBody.marketId).toBe(target.marketId);
      expect(responseBody.ownerAddress).toEqual(target.ownerAddress);
      expect(
        BigNumber(getNotNullOrThrowError(responseBody.price)).toString()
      ).toEqual(target.price?.toString());
      expect(responseBody.amount.toString()).toEqual(target.amount.toString());
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

      const orderRequestBody = { ...candidate } as PlaceOrderRequest;

      const request = {
        ...commonRequestBody,
        ...orderRequestBody,
      };

      logRequest(request);

      const response = await sendRequest<PlaceOrderResponse>({
        RESTMethod: RESTfulMethod.POST,
        RESTRoute: '/order',
        RESTRequest: request,
        controllerFunction: kujira.placeOrder,
      });

      const responseBody = response.body as PlaceOrderResponse;

      logResponse(responseBody);

      lastPayedFeeSum = getNotNullOrThrowError<OrderFee>(responseBody.fee);

      expect(responseBody).toBeObject();
      expect(responseBody.id?.length).toBeGreaterThan(0);
      expect(responseBody.marketId).toBe(candidate.marketId);
      expect(responseBody.ownerAddress).toBe(candidate.ownerAddress);
      expect(
        BigNumber(getNotNullOrThrowError(responseBody.price)).toString()
      ).toEqual(candidate.price.toString());
      expect(
        BigNumber(getNotNullOrThrowError(responseBody.amount)).toString()
      ).toEqual(candidate.amount.toString());
      expect(responseBody.side).toBe(candidate.side);
      expect(responseBody.marketName).toBe('KUJI/USK');
      expect(responseBody.payerAddress).toBe(candidate.payerAddress);
      expect(responseBody.hashes?.creation?.length).toBeCloseTo(64);

      candidate.id = responseBody.id;
      candidate.marketName = responseBody.marketName;
      candidate.market = responseBody.market;
      candidate.status = responseBody.status;
      candidate.fee = responseBody.fee;
      candidate.hashes = responseBody.hashes;
    });

    it('Check the available wallet balances from the tokens 1 and 3', async () => {
      const targetOrder = getOrder('2');

      const requestBody = {
        tokenIds: [
          targetOrder.market.baseToken.id,
          targetOrder.market.quoteToken.id,
        ],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetBalancesResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/balances',
        RESTRequest: request,
        controllerFunction: kujira.getBalances,
      });

      const responseBody = {
        ...response.body,
        tokens: IMap(response.body.tokens),
      } as GetBalancesResponse;

      logResponse(responseBody);

      // Verifying token 1 (base) balance
      const currentBaseBalance = BigNumber(
        getNotNullOrThrowError<any>(
          userBalances.tokens.get(targetOrder.market.baseToken.id)
        ).free
      ).minus(
        getNotNullOrThrowError<any>(
          BigNumber(lastPayedFeeSum).plus(targetOrder.amount)
        )
      );

      expect(
        BigNumber(
          getNotNullOrThrowError<any>(
            responseBody.tokens.get(targetOrder.market.baseToken.id)?.free
          )
        )
      ).toEqual(currentBaseBalance);

      // Updating Base Balances (free and lockedInOrders)
      userBalances.tokens.set(targetOrder.market.baseToken.id, {
        token: targetOrder.market.baseToken,
        free: currentBaseBalance,
        lockedInOrders: BigNumber(
          getNotNullOrThrowError<any>(
            userBalances.tokens.get(targetOrder.market.baseToken.id)
              ?.lockedInOrders
          )
        ).plus(targetOrder.amount),
        unsettled: BigNumber(
          getNotNullOrThrowError<any>(
            userBalances.tokens.get(targetOrder.market.baseToken.id)?.unsettled
          )
        ),
      });

      // Verifying token 2 (quote) balance
      const currentQuoteBalance = BigNumber(
        getNotNullOrThrowError<any>(
          userBalances.tokens.get(targetOrder.market.quoteToken.id)
        ).free
      ).minus(
        getNotNullOrThrowError<Balance>(
          responseBody.tokens.get(targetOrder.market.quoteToken.id)
        ).unsettled
      );

      expect(
        BigNumber(
          getNotNullOrThrowError<any>(
            responseBody.tokens.get(targetOrder.market.quoteToken.id)?.free
          )
        )
      ).toEqual(currentQuoteBalance);

      // Updating Quote Balances (free and unsettled)
      userBalances.tokens.set(targetOrder.market.quoteToken.id, {
        token: targetOrder.market.quoteToken,
        free: currentQuoteBalance,
        lockedInOrders: BigNumber(
          getNotNullOrThrowError<any>(
            userBalances.tokens.get(targetOrder.market.quoteToken.id)
              ?.lockedInOrders
          )
        ),
        unsettled: BigNumber(
          getNotNullOrThrowError<any>(
            userBalances.tokens.get(targetOrder.market.quoteToken.id)?.unsettled
          )
        ).plus(getNotNullOrThrowError<any>(targetOrder.price)),
      });
    });

    it('Get the filled order 2', async () => {
      const target = getOrder('2');

      const requestBody = {
        id: target.id,
        status: OrderStatus.FILLED,
        marketId: target.marketId,
        ownerAddress: ownerAddress,
      } as GetOrderRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetOrderResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/order',
        RESTRequest: request,
        controllerFunction: kujira.getOrder,
      });

      const responseBody = response.body as GetOrderResponse;

      logResponse(responseBody);

      expect(responseBody).toBeObject();
      expect(responseBody.status).toEqual(OrderStatus.FILLED);
      expect(responseBody.id).toEqual(target.id);
      expect(responseBody.marketName).toBe(target.marketName);
      expect(responseBody.marketId).toBe(target.marketId);
      expect(responseBody.ownerAddress).toEqual(target.ownerAddress);
      expect(
        BigNumber(getNotNullOrThrowError(responseBody.price)).toString()
      ).toBe(target.price?.toString());
      expect(
        BigNumber(getNotNullOrThrowError(responseBody.amount)).toString()
      ).toEqual(target.amount.toString());
    });

    it('Create a market sell order 3 for market 3', async () => {
      const candidate = getOrder('3');

      const requestBody = { ...candidate } as PlaceOrderRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<PlaceOrderResponse>({
        RESTMethod: RESTfulMethod.POST,
        RESTRoute: '/order',
        RESTRequest: request,
        controllerFunction: kujira.placeOrder,
      });

      const responseBody = response.body as PlaceOrderResponse;

      logResponse(responseBody);

      candidate.marketName = responseBody.marketName;
      candidate.market = responseBody.market;
      candidate.price = responseBody.price;
      candidate.status = responseBody.status;
      candidate.fee = responseBody.fee;
      candidate.hashes = responseBody.hashes;
      candidate.id = responseBody.id;

      expect(responseBody).toBeObject();
      expect(responseBody.marketId).toBe(candidate.marketId);
      expect(responseBody.ownerAddress).toBe(candidate.ownerAddress);
      expect(responseBody.side).toBe(candidate.side);
      expect(responseBody.hashes?.creation?.length).toBeCloseTo(64);
      expect(responseBody.payerAddress).toBe(candidate.payerAddress);
      expect(
        BigNumber(getNotNullOrThrowError<any>(responseBody.amount))
      ).toEqual(candidate.amount);

      lastPayedFeeSum = getNotNullOrThrowError<OrderFee>(responseBody.fee);
    });

    it.skip('Check the available wallet balances from the tokens 2 and 3', async () => {
      const primaryTargetOrder = getOrder('3');

      const requestBody = {
        tokenIds: [
          primaryTargetOrder.market.baseToken.id,
          primaryTargetOrder.market.quoteToken.id,
        ],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetBalancesResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/balances',
        RESTRequest: request,
        controllerFunction: kujira.getBalances,
      });

      const responseBody = {
        ...response.body,
        tokens: IMap(response.body.tokens),
      } as GetBalancesResponse;

      logResponse(responseBody);

      const secundaryTargetOrder = getOrder('2');

      // Verifying token 2 (base) balance
      const currentBaseBalance = BigNumber(
        getNotNullOrThrowError<any>(
          userBalances.tokens.get(primaryTargetOrder.market.baseToken.id)
        ).free
      ).minus(primaryTargetOrder.amount);

      expect(
        BigNumber(
          getNotNullOrThrowError<any>(
            responseBody.tokens.get(primaryTargetOrder.market.baseToken.id)
              ?.free
          )
        ).decimalPlaces(2)
      ).toEqual(currentBaseBalance.decimalPlaces(2));

      // Updating Base Balances (free and lockedInOrders)
      userBalances.tokens.set(primaryTargetOrder.market.baseToken.id, {
        token: primaryTargetOrder.market.baseToken,
        free: currentBaseBalance,
        lockedInOrders: BigNumber(
          getNotNullOrThrowError<any>(
            userBalances.tokens.get(primaryTargetOrder.market.baseToken.id)
              ?.lockedInOrders
          )
        ),
        unsettled: BigNumber(
          getNotNullOrThrowError<any>(
            userBalances.tokens.get(primaryTargetOrder.market.baseToken.id)
              ?.unsettled
          )
        ),
      });

      // Verifying token 3 (quote) balance
      const expectedCurrentQuoteBalance = BigNumber(
        getNotNullOrThrowError<any>(
          userBalances.tokens.get(primaryTargetOrder.market.quoteToken.id)
        ).free
      ).plus(BigNumber(getNotNullOrThrowError<any>(primaryTargetOrder.price)));
      // .plus(getNotNullOrThrowError<any>(secundaryTargetOrder.price));

      expect(
        responseBody.tokens.get(primaryTargetOrder.market.quoteToken.id)?.free
      ).toEqual(expectedCurrentQuoteBalance);

      // Updating Quote Balances (free and unsettled)
      userBalances.tokens.set(primaryTargetOrder.market.quoteToken.id, {
        token: primaryTargetOrder.market.quoteToken,
        free: expectedCurrentQuoteBalance,
        lockedInOrders: BigNumber(
          getNotNullOrThrowError<any>(
            userBalances.tokens.get(primaryTargetOrder.market.quoteToken.id)
              ?.lockedInOrders
          )
        ),
        unsettled: BigNumber(
          getNotNullOrThrowError<any>(
            userBalances.tokens.get(secundaryTargetOrder.market.quoteToken.id)
              ?.unsettled
          )
        ).plus(getNotNullOrThrowError<any>(primaryTargetOrder.price)),
      });
    });

    // it('Get the filled order 3', async () => {});

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

      const requestBody = {
        orders: candidates
          .valueSeq()
          .map((candidate) => ({ ...candidate }))
          .toArray(),
      } as PlaceOrdersRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<PlaceOrdersResponse>({
        RESTMethod: RESTfulMethod.POST,
        RESTRoute: '/orders',
        RESTRequest: request,
        controllerFunction: kujira.placeOrders,
      });

      const responseBody = IMap<OrderId, Order>(
        response.body
      ) as PlaceOrdersResponse;

      logResponse(responseBody);

      responseBody
        .valueSeq()
        .toArray()
        .forEach((order: Order) => {
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
        responseBody as IMap<OrderId, Order>
      ).entries()) {
        const clientId = getNotNullOrThrowError<OrderClientId>(order.clientId);
        const candidate = orders.get(clientId);

        expect(order).toBeObject();
        expect(orderId).toBe(order.id);
        expect(order.id?.length).toBeGreaterThan(0);
        expect(order.id).toBe(candidate?.id);
        expect(order.marketId).toBe(candidate?.marketId);
        expect(order.ownerAddress).toBe(candidate?.ownerAddress);
        if (candidate?.type != OrderType.MARKET) {
          expect(
            BigNumber(getNotNullOrThrowError(order.price)).toString()
          ).toEqual(candidate?.price?.toString());
        } else {
          expect(BigNumber(getNotNullOrThrowError(order.price)).toString());
        }
        expect(
          BigNumber(getNotNullOrThrowError(order.amount)).toString()
        ).toEqual(candidate?.amount.toString());
        expect(order.side).toBe(candidate?.side);
        expect(order.payerAddress).toBe(candidate?.payerAddress);
        expect(order.status).toBe(OrderStatus.OPEN);
        expect(order.hashes?.creation?.length).toBeCloseTo(64);
      }

      lastPayedFeeSum = BigNumber(0);
      for (const order of (responseBody as IMap<OrderId, Order>).values()) {
        lastPayedFeeSum = lastPayedFeeSum.plus(
          getNotNullOrThrowError<BigNumber>(order.fee)
        );
      }
    });

    it.skip('Check the wallet balances from the tokens 1, 2, and 3', async () => {
      const targetOrders = getOrders([
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
      ]);

      const requestBody = {
        tokenIds: Object.values(tokenIds),
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetBalancesResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/balances',
        RESTRequest: request,
        controllerFunction: kujira.getBalances,
      });

      const responseBody = response.body as GetBalancesResponse;

      logResponse(responseBody);

      const currentBalances = lodash.cloneDeep(responseBody);

      for (const order of targetOrders.values()) {
        const baseBalance = getNotNullOrThrowError<Balance>(
          currentBalances.tokens.get(order.market.baseToken.id)
        );

        const quoteBalance = getNotNullOrThrowError<Balance>(
          currentBalances.tokens.get(order.market.quoteToken.id)
        );

        if (order.type == OrderType.LIMIT) {
          if (order.status == OrderStatus.OPEN) {
            if (order.side == OrderSide.BUY) {
              quoteBalance.free = quoteBalance.free.plus(order.amount);
              quoteBalance.lockedInOrders = quoteBalance.lockedInOrders.minus(
                order.amount
              );
            } else if (order.side == OrderSide.SELL) {
              baseBalance.free = baseBalance.free.plus(order.amount);
              baseBalance.lockedInOrders = baseBalance.lockedInOrders.minus(
                order.amount
              );
            } else {
              throw new Error('Invalid order side');
            }
          } else if (order.status == OrderStatus.FILLED) {
            if (order.side == OrderSide.BUY) {
              baseBalance.free = baseBalance.free.minus(order.amount);

              quoteBalance.lockedInOrders = quoteBalance.lockedInOrders.plus(
                order.amount
              );

              baseBalance.unsettled = baseBalance.unsettled.minus(order.amount);
            } else if (order.side == OrderSide.SELL) {
              quoteBalance.free = quoteBalance.free.minus(order.amount);

              baseBalance.lockedInOrders = baseBalance.lockedInOrders.plus(
                order.amount
              );

              quoteBalance.unsettled = quoteBalance.unsettled.minus(
                order.amount
              );
            } else {
              throw new Error('Invalid order side');
            }
          } else if (order.status == OrderStatus.CANCELLED) {
            if (order.side == OrderSide.BUY) {
              quoteBalance.free = quoteBalance.free.minus(order.amount);
              quoteBalance.lockedInOrders = quoteBalance.lockedInOrders.plus(
                order.amount
              );
            } else if (order.side == OrderSide.SELL) {
              baseBalance.free = baseBalance.free.minus(order.amount);
              baseBalance.lockedInOrders = baseBalance.lockedInOrders.plus(
                order.amount
              );
            } else {
              throw new Error('Invalid order side');
            }
          }
        } else if (order.type == OrderType.MARKET) {
          if (order.side == OrderSide.BUY) {
            baseBalance.free = baseBalance.free.minus(order.amount);
            quoteBalance.free = quoteBalance.free.plus(order.amount);
          } else if (order.side == OrderSide.SELL) {
            baseBalance.free = baseBalance.free.plus(order.amount);
            quoteBalance.free = quoteBalance.free.minus(order.amount);
          } else {
            throw new Error('Invalid order side');
          }
        }
      }

      const kujiBalance = getNotNullOrThrowError<Balance>(
        currentBalances.tokens.get(kujiToken.reference)
      );

      kujiBalance.free = kujiBalance.free.plus(lastPayedFeeSum);

      for (const balance of userBalances.tokens.values()) {
        const currentBalance = getNotNullOrThrowError<Balance>(
          currentBalances.tokens.get((balance.token as Token).id)
        );

        expect(balance.free).toBe(currentBalance.free);
        expect(balance.lockedInOrders).toBe(currentBalance.lockedInOrders);
        expect(balance.unsettled).toBe(currentBalance.unsettled);
      }

      userBalances = responseBody;

      getNotNullOrThrowError<Order>(targetOrders.get('10')).status =
        OrderStatus.FILLED;

      getNotNullOrThrowError<Order>(targetOrders.get('11')).status =
        OrderStatus.FILLED;
    });

    it('Get the open orders 8 and 9', async () => {
      const targets = getOrders(['8', '9']);

      const targetsIds: OrderId[] = [];
      targets
        .valueSeq()
        .toArray()
        .forEach((order) =>
          targetsIds.push(getNotNullOrThrowError<OrderId>(order.id))
        );

      const requestBody = {
        ids: targetsIds,
        ownerAddress: ownerAddress,
        status: OrderStatus.OPEN,
      } as GetOrdersRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetOrdersResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/orders',
        RESTRequest: request,
        controllerFunction: kujira.getOrders,
      });

      const responseBody = IMap(response.body) as GetOrdersResponse;

      logResponse(responseBody);

      expect(responseBody.size).toBe(targets.size);

      for (const candidate of targets.values()) {
        const order = getNotNullOrThrowError<Order>(
          responseBody.get(getNotNullOrThrowError(candidate.id))
        );

        expect(order).toBeObject();
        expect(order.id?.length).toBeGreaterThan(0);
        expect(order.id).toBe(candidate?.id);
        expect(order.marketId).toBe(candidate?.marketId);
        expect(order.ownerAddress).toBe(candidate?.ownerAddress);
        expect(
          BigNumber(getNotNullOrThrowError(order.price)).toString()
        ).toEqual(candidate?.price?.toString());
        expect(
          BigNumber(getNotNullOrThrowError(order.amount)).toString()
        ).toEqual(candidate?.amount.toString());
        expect(order.side).toBe(candidate?.side);
        expect(order.payerAddress).toBe(candidate?.payerAddress);
        expect(order.status).toBe(OrderStatus.OPEN);
        expect(order.type).toBe(candidate?.type);
      }
    });

    it('Get all open orders and check that the orders 2, 3, 6, 7, 10, and 11 are missing', async () => {
      const targets = getOrders(['2', '3', '6', '7', '10', '11']);

      const targetsIds = targets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const requestBody = {
        ownerAddress: ownerAddress,
        status: OrderStatus.OPEN,
      } as GetOrdersRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetOrdersResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/orders',
        RESTRequest: request,
        controllerFunction: kujira.getOrders,
      });

      const responseBody = response.body as GetOrdersResponse;

      logResponse(responseBody);

      const responseOrdersIds = (responseBody as IMap<OrderId, Order>)
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      targetsIds.forEach((orderId) =>
        expect(responseOrdersIds.includes(orderId)).toBeFalse()
      );
    });

    it('Cancel the order 1', async () => {
      const target = getOrder('1');

      const requestBody = {
        id: target.id,
        marketId: target.marketId,
        ownerAddress: target.ownerAddress,
      } as CancelOrderRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<CancelOrderResponse>({
        RESTMethod: RESTfulMethod.DELETE,
        RESTRoute: '/order',
        RESTRequest: request,
        controllerFunction: kujira.cancelOrder,
      });

      const responseBody = response.body as CancelOrderResponse;

      logResponse(responseBody);

      expect(responseBody).toBeObject();
      expect(responseBody.id?.length).toBeGreaterThan(0);
      expect(responseBody.id).toEqual(target.id);
      expect(responseBody.marketId).toBe(target.marketId);
      expect(responseBody.ownerAddress).toBe(target.ownerAddress);
      expect(responseBody.price).toEqual(target.price);
      expect(responseBody.amount).toEqual(target.amount);
      expect(responseBody.side).toBe(target.side);
      expect(responseBody.marketName).toBe(target.marketName);
      expect(responseBody.payerAddress).toBe(target.payerAddress);
      expect(responseBody.status).toBe(OrderStatus.CANCELLED);
      expect(responseBody.hashes?.cancellation?.length).toBeCloseTo(64);

      target.fee = responseBody.fee;
      target.hashes = responseBody.hashes;
      target.status = OrderStatus.CANCELLED;

      lastPayedFeeSum = getNotNullOrThrowError<OrderFee>(responseBody.fee);
    });

    it.skip('Check the wallet balances from the tokens 1 and 2', async () => {
      const targetOrder = getOrder('1');

      const requestBody = {
        tokenIds: [
          targetOrder.market.baseToken.id,
          targetOrder.market.quoteToken.id,
        ],
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetBalancesResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/balances',
        RESTRequest: request,
        controllerFunction: kujira.getBalances,
      });

      const responseBody = response.body as GetBalancesResponse;

      logResponse(responseBody);

      // Verifying token 1 (base) balance
      const currentBaseBalance = getNotNullOrThrowError<any>(
        userBalances.tokens.get(targetOrder.market.baseToken.id)
      ).free.minus(lastPayedFeeSum);

      expect(
        responseBody.tokens.get(targetOrder.market.baseToken.id)?.free
      ).toEqual(currentBaseBalance);

      userBalances.tokens.set(
        targetOrder.market.baseToken.id,
        currentBaseBalance
      );

      // Verifying token 2 (quote) balance
      const currentQuoteBalance = getNotNullOrThrowError<any>(
        userBalances.tokens.get(targetOrder.market.quoteToken.id)
      ).free.add(targetOrder.amount);

      expect(
        responseBody.tokens.get(targetOrder.market.quoteToken.id)?.free
      ).toEqual(currentQuoteBalance);

      userBalances.tokens.set(
        targetOrder.market.quoteToken.id,
        currentQuoteBalance
      );
    });

    it("Check that it's not possible to get the cancelled order 1", async () => {
      const target = getOrder('1');

      const requestBody = {
        id: target.id,
        ownerAddress: target.ownerAddress,
        marketId: target.marketId,
      } as GetOrderRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetOrderResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/order',
        RESTRequest: request,
        controllerFunction: kujira.getOrder,
      });

      const responseBody = response.body as GetOrderResponse;

      logResponse(responseBody);

      expect(responseBody.hashes).toBeUndefined();
    });

    it('Get all open orders and check that orders 1, 2, 3, 6, 7, 10, and 11 are missing', async () => {
      const targets = getOrders(['1', '2', '3', '6', '7', '10', '11']);

      const targetsIds = targets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const requestBody = {
        ownerAddress: ownerAddress,
        status: OrderStatus.OPEN,
      } as GetOrdersRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetOrdersResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/orders',
        RESTRequest: request,
        controllerFunction: kujira.getOrders,
      });

      const responseBody = response.body as GetOrdersResponse;

      logResponse(responseBody);

      const responseOrdersIds = (responseBody as IMap<OrderId, Order>)
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

      const requestBody = {
        ids: targetsIds,
        marketIds: targetMarketsIds,
        ownerAddress: ownerAddress,
      } as CancelOrdersRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<CancelOrdersResponse>({
        RESTMethod: RESTfulMethod.DELETE,
        RESTRoute: '/orders',
        RESTRequest: request,
        controllerFunction: kujira.cancelOrders,
      });

      const responseBody = response.body as CancelOrdersResponse as IMap<
        OrderId,
        Order
      >;

      logResponse(responseBody);

      expect(responseBody.size).toBe(targetsIds.length);
      expect(responseBody.keySeq().toArray()).toIncludeSameMembers(targetsIds);

      for (const [orderId, order] of (
        responseBody as IMap<OrderId, Order>
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

    it.skip('Check the wallet balances from the tokens 1, 2, and 3', async () => {
      const targetOrders = getOrders(['4', '5']);

      const requestBody = {
        tokenIds: Object.values(tokenIds),
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetBalancesResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/balances',
        RESTRequest: request,
        controllerFunction: kujira.getBalances,
      });

      const responseBody = response.body as GetBalancesResponse;

      logResponse(responseBody);

      const currentBalances = lodash.cloneDeep(responseBody);

      for (const order of targetOrders.values()) {
        const baseBalance = getNotNullOrThrowError<Balance>(
          currentBalances.tokens.get(order.market.baseToken.id)
        );

        const quoteBalance = getNotNullOrThrowError<Balance>(
          currentBalances.tokens.get(order.market.quoteToken.id)
        );

        if (order.type == OrderType.LIMIT) {
          if (order.status == OrderStatus.OPEN) {
            if (order.side == OrderSide.BUY) {
              quoteBalance.free = quoteBalance.free.plus(order.amount);
              quoteBalance.lockedInOrders = quoteBalance.lockedInOrders.minus(
                order.amount
              );
            } else if (order.side == OrderSide.SELL) {
              baseBalance.free = baseBalance.free.plus(order.amount);
              baseBalance.lockedInOrders = baseBalance.lockedInOrders.minus(
                order.amount
              );
            } else {
              throw new Error('Invalid order side');
            }
          } else if (order.status == OrderStatus.FILLED) {
            if (order.side == OrderSide.BUY) {
              baseBalance.free = baseBalance.free.minus(order.amount);

              quoteBalance.lockedInOrders = quoteBalance.lockedInOrders.plus(
                order.amount
              );

              baseBalance.unsettled = baseBalance.unsettled.minus(order.amount);
            } else if (order.side == OrderSide.SELL) {
              quoteBalance.free = quoteBalance.free.minus(order.amount);

              baseBalance.lockedInOrders = baseBalance.lockedInOrders.plus(
                order.amount
              );

              quoteBalance.unsettled = quoteBalance.unsettled.minus(
                order.amount
              );
            } else {
              throw new Error('Invalid order side');
            }
          } else if (order.status == OrderStatus.CANCELLED) {
            if (order.side == OrderSide.BUY) {
              quoteBalance.free = quoteBalance.free.minus(order.amount);
              quoteBalance.lockedInOrders = quoteBalance.lockedInOrders.plus(
                order.amount
              );
            } else if (order.side == OrderSide.SELL) {
              baseBalance.free = baseBalance.free.minus(order.amount);
              baseBalance.lockedInOrders = baseBalance.lockedInOrders.plus(
                order.amount
              );
            } else {
              throw new Error('Invalid order side');
            }
          }
        } else if (order.type == OrderType.MARKET) {
          if (order.side == OrderSide.BUY) {
            baseBalance.free = baseBalance.free.minus(order.amount);
            quoteBalance.free = quoteBalance.free.plus(order.amount);
          } else if (order.side == OrderSide.SELL) {
            baseBalance.free = baseBalance.free.plus(order.amount);
            quoteBalance.free = quoteBalance.free.minus(order.amount);
          } else {
            throw new Error('Invalid order side');
          }
        }
      }

      const kujiBalance = getNotNullOrThrowError<Balance>(
        currentBalances.tokens.get(kujiToken.reference)
      );

      kujiBalance.free = kujiBalance.free.plus(lastPayedFeeSum);

      for (const balance of userBalances.tokens.values()) {
        const currentBalance = getNotNullOrThrowError<Balance>(
          currentBalances.tokens.get((balance.token as Token).id)
        );

        expect(balance.free).toBe(currentBalance.free);
        expect(balance.lockedInOrders).toBe(currentBalance.lockedInOrders);
        expect(balance.unsettled).toBe(currentBalance.unsettled);
      }

      userBalances = responseBody;
    });

    it("Check that it's not possible to get the cancelled orders 4 and 5", async () => {
      const targets = getOrders(['4', '5']);

      const targetsIds = targets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const requestBody = {
        ids: targetsIds,
        ownerAddress: ownerAddress,
        status: OrderStatus.OPEN,
      } as GetOrdersRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetOrdersResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/orders',
        RESTRequest: request,
        controllerFunction: kujira.getOrders,
      });

      const responseBody = response.body as GetOrdersResponse;

      logResponse(responseBody);

      expect(responseBody.size).toEqual(0);
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

      const requestBody = {
        ownerAddress: ownerAddress,
        status: OrderStatus.OPEN,
      } as GetOrdersRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetOrdersResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/orders',
        RESTRequest: request,
        controllerFunction: kujira.getOrders,
      });

      const responseBody = response.body as GetOrdersResponse;

      logResponse(responseBody);

      const responseOrdersIds = (responseBody as IMap<OrderId, Order>)
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      targetsIds.forEach((orderId) =>
        expect(responseOrdersIds.includes(orderId)).toBeFalse()
      );
    });

    it('Get all filled orders and check that the orders 2, 6, and 7 are present', async () => {
      const targets = getOrders(['2', '6', '7']);

      const targetsIds = targets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const requestBody = {
        ownerAddress: ownerAddress,
        status: OrderStatus.FILLED,
      } as GetOrdersRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetOrdersResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/orders',
        RESTRequest: request,
        controllerFunction: kujira.getOrders,
      });

      const responseBody = response.body as GetOrdersResponse;

      logResponse(responseBody);

      const responseOrdersIds = (responseBody as IMap<OrderId, Order>)
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      targetsIds.forEach((orderId) =>
        expect(responseOrdersIds.includes(orderId)).toBeTrue()
      );
    });

    it('Get all orders (open or filled) and check that the orders 2, 3, 6, 7, 10, and 11 are present and the orders 1, 4, 5 are missing', async () => {
      const openLimitOrdersTargets = getOrders(['8', '9']);
      const filledLimitOrdersTargets = getOrders(['2', '6', '7']);
      const filledMarketOrdersTargets = getOrders(['3', '10', '11']);
      const cancelledOrdersTargets = getOrders(['1', '4', '5']);

      const openLimitOrdersTargetsIds = openLimitOrdersTargets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const filledLimitOrdersTargetsIds = filledLimitOrdersTargets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const filledMarketOrdersTargetsIds = filledMarketOrdersTargets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const cancelledOrdersTargetsIds = cancelledOrdersTargets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const requestBody = {
        ownerAddress: ownerAddress,
      } as GetOrdersRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetOrdersResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/orders',
        RESTRequest: request,
        controllerFunction: kujira.getOrders,
      });

      const responseBody = response.body as GetOrdersResponse;

      logResponse(responseBody);

      const responseOrdersIds = (responseBody as IMap<OrderId, Order>)
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      expect(openLimitOrdersTargetsIds).toIncludeSameMembers(responseOrdersIds);

      filledLimitOrdersTargetsIds.forEach((orderId) =>
        expect(responseOrdersIds).toInclude(
          getNotNullOrThrowError<OrderId>(orderId)
        )
      );

      filledMarketOrdersTargetsIds.forEach((orderId) =>
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

    it('Cancel all open orders', async () => {
      const requestBody = {
        ownerAddress: ownerAddress,
      } as CancelAllOrdersRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<CancelAllOrdersResponse>({
        RESTMethod: RESTfulMethod.DELETE,
        RESTRoute: '/orders/all',
        RESTRequest: request,
        controllerFunction: kujira.cancelAllOrders,
      });

      const responseBody = response.body as CancelAllOrdersResponse;

      logResponse(responseBody);

      const targets = getOrders(['3', '6', '7', '8', '9', '10', '11']);

      const targetsIds = targets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const responseOrdersIds = (responseBody as IMap<OrderId, Order>)
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      targetsIds.forEach((orderId) =>
        expect(responseOrdersIds.includes(orderId)).toBeTrue()
      );

      for (const [orderId, order] of (
        responseBody as IMap<OrderId, Order>
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
        expect(order.hashes?.creation?.length).toBeCloseTo(64);
        expect(order.status).toBe(OrderStatus.CANCELLED);
      }
    });

    it.skip('Check the wallet balances from the tokens 1, 2 and 3', async () => {
      const targetOrders = getOrders(['8', '9']);

      const requestBody = {
        tokenIds: Object.values(tokenIds),
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetBalancesResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/balances',
        RESTRequest: request,
        controllerFunction: kujira.getBalances,
      });

      const responseBody = response.body as GetBalancesResponse;

      logResponse(responseBody);

      const currentBalances = lodash.cloneDeep(responseBody);

      for (const order of targetOrders.values()) {
        const baseBalance = getNotNullOrThrowError<Balance>(
          currentBalances.tokens.get(order.market.baseToken.id)
        );

        const quoteBalance = getNotNullOrThrowError<Balance>(
          currentBalances.tokens.get(order.market.quoteToken.id)
        );

        if (order.type == OrderType.LIMIT) {
          if (order.status == OrderStatus.OPEN) {
            if (order.side == OrderSide.BUY) {
              quoteBalance.free = quoteBalance.free.plus(order.amount);
              quoteBalance.lockedInOrders = quoteBalance.lockedInOrders.minus(
                order.amount
              );
            } else if (order.side == OrderSide.SELL) {
              baseBalance.free = baseBalance.free.plus(order.amount);
              baseBalance.lockedInOrders = baseBalance.lockedInOrders.minus(
                order.amount
              );
            } else {
              throw new Error('Invalid order side');
            }
          } else if (order.status == OrderStatus.FILLED) {
            if (order.side == OrderSide.BUY) {
              baseBalance.free = baseBalance.free.minus(order.amount);

              quoteBalance.lockedInOrders = quoteBalance.lockedInOrders.plus(
                order.amount
              );

              baseBalance.unsettled = baseBalance.unsettled.minus(order.amount);
            } else if (order.side == OrderSide.SELL) {
              quoteBalance.free = quoteBalance.free.minus(order.amount);

              baseBalance.lockedInOrders = baseBalance.lockedInOrders.plus(
                order.amount
              );

              quoteBalance.unsettled = quoteBalance.unsettled.minus(
                order.amount
              );
            } else {
              throw new Error('Invalid order side');
            }
          } else if (order.status == OrderStatus.CANCELLED) {
            if (order.side == OrderSide.BUY) {
              quoteBalance.free = quoteBalance.free.minus(order.amount);
              quoteBalance.lockedInOrders = quoteBalance.lockedInOrders.plus(
                order.amount
              );
            } else if (order.side == OrderSide.SELL) {
              baseBalance.free = baseBalance.free.minus(order.amount);
              baseBalance.lockedInOrders = baseBalance.lockedInOrders.plus(
                order.amount
              );
            } else {
              throw new Error('Invalid order side');
            }
          }
        } else if (order.type == OrderType.MARKET) {
          if (order.side == OrderSide.BUY) {
            baseBalance.free = baseBalance.free.minus(order.amount);
            quoteBalance.free = quoteBalance.free.plus(order.amount);
          } else if (order.side == OrderSide.SELL) {
            baseBalance.free = baseBalance.free.plus(order.amount);
            quoteBalance.free = quoteBalance.free.minus(order.amount);
          } else {
            throw new Error('Invalid order side');
          }
        }
      }

      const kujiBalance = getNotNullOrThrowError<Balance>(
        currentBalances.tokens.get(kujiToken.reference)
      );

      kujiBalance.free = kujiBalance.free.plus(lastPayedFeeSum);

      for (const balance of userBalances.tokens.values()) {
        const currentBalance = getNotNullOrThrowError<Balance>(
          currentBalances.tokens.get((balance.token as Token).id)
        );

        expect(balance.free).toBe(currentBalance.free);
        expect(balance.lockedInOrders).toBe(currentBalance.lockedInOrders);
        expect(balance.unsettled).toBe(currentBalance.unsettled);
      }

      userBalances = responseBody;
    });

    it('Get all open orders and check that there are no open orders', async () => {
      const requestBody = {
        ownerAddress: ownerAddress,
        status: OrderStatus.OPEN,
      } as GetOrdersRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetOrdersResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/orders',
        RESTRequest: request,
        controllerFunction: kujira.getOrders,
      });

      const responseBody = response.body as GetOrdersResponse;

      logResponse(responseBody);

      expect(responseBody.size).toEqual(0);
    });

    it('Get all orders (open or filled) and check that the orders 2, 3, 6, 7, 10, and 11 are present', async () => {
      const openLimitOrdersTargets = getOrders(['8', '9']);
      const filledLimitOrdersTargets = getOrders(['2', '6', '7']);
      const filledMarketOrdersTargets = getOrders(['3', '10', '11']);
      const cancelledOrdersTargets = getOrders(['1', '4', '5']);

      const openLimitOrdersTargetsIds = openLimitOrdersTargets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const filledLimitOrdersTargetsIds = filledLimitOrdersTargets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const filledMarketOrdersTargetsIds = filledMarketOrdersTargets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const cancelledOrdersTargetsIds = cancelledOrdersTargets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const requestBody = {
        ownerAddress: ownerAddress,
      } as GetOrdersRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetOrdersResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/orders',
        RESTRequest: request,
        controllerFunction: kujira.getOrders,
      });

      const responseBody = response.body as GetOrdersResponse;

      logResponse(responseBody);

      const responseOrdersIds = (responseBody as IMap<OrderId, Order>)
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      openLimitOrdersTargetsIds.forEach((orderId) =>
        expect(responseOrdersIds).not.toInclude(
          getNotNullOrThrowError<OrderId>(orderId)
        )
      );

      filledLimitOrdersTargetsIds.forEach((orderId) =>
        expect(responseOrdersIds).toInclude(
          getNotNullOrThrowError<OrderId>(orderId)
        )
      );

      filledMarketOrdersTargetsIds.forEach((orderId) =>
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

    it('Create orders 12 and 13 at once', async () => {
      const candidates = getOrders(['12', '13']);

      const requestBody = {
        orders: candidates
          .valueSeq()
          .map((target) => ({ ...target }))
          .toArray(),
      } as PlaceOrdersRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<PlaceOrdersResponse>({
        RESTMethod: RESTfulMethod.POST,
        RESTRoute: '/orders',
        RESTRequest: request,
        controllerFunction: kujira.placeOrders,
      });

      const responseBody = response.body as PlaceOrdersResponse;

      logResponse(responseBody);

      responseBody
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

      expect(responseBody.size).toBe(candidates.size);

      for (const [orderId, order] of (
        responseBody as IMap<OrderId, Order>
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
        expect(order.hashes?.creation?.length).toBeCloseTo(64);
      }
    });

    it.skip('Check the wallet balances from the tokens 1, 2 and 3', async () => {
      const targetOrders = getOrders(['12', '13']);

      const requestBody = {
        tokenIds: Object.values(tokenIds),
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetBalancesResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/balances',
        RESTRequest: request,
        controllerFunction: kujira.getBalances,
      });

      const responseBody = response.body as GetBalancesResponse;

      logResponse(responseBody);

      const currentBalances = lodash.cloneDeep(responseBody);

      for (const order of targetOrders.values()) {
        const baseBalance = getNotNullOrThrowError<Balance>(
          currentBalances.tokens.get(order.market.baseToken.id)
        );

        const quoteBalance = getNotNullOrThrowError<Balance>(
          currentBalances.tokens.get(order.market.quoteToken.id)
        );

        if (order.type == OrderType.LIMIT) {
          if (order.status == OrderStatus.OPEN) {
            if (order.side == OrderSide.BUY) {
              quoteBalance.free = quoteBalance.free.plus(order.amount);
              quoteBalance.lockedInOrders = quoteBalance.lockedInOrders.minus(
                order.amount
              );
            } else if (order.side == OrderSide.SELL) {
              baseBalance.free = baseBalance.free.plus(order.amount);
              baseBalance.lockedInOrders = baseBalance.lockedInOrders.minus(
                order.amount
              );
            } else {
              throw new Error('Invalid order side');
            }
          } else if (order.status == OrderStatus.FILLED) {
            if (order.side == OrderSide.BUY) {
              baseBalance.free = baseBalance.free.minus(order.amount);

              quoteBalance.lockedInOrders = quoteBalance.lockedInOrders.plus(
                order.amount
              );

              baseBalance.unsettled = baseBalance.unsettled.minus(order.amount);
            } else if (order.side == OrderSide.SELL) {
              quoteBalance.free = quoteBalance.free.minus(order.amount);

              baseBalance.lockedInOrders = baseBalance.lockedInOrders.plus(
                order.amount
              );

              quoteBalance.unsettled = quoteBalance.unsettled.minus(
                order.amount
              );
            } else {
              throw new Error('Invalid order side');
            }
          } else if (order.status == OrderStatus.CANCELLED) {
            if (order.side == OrderSide.BUY) {
              quoteBalance.free = quoteBalance.free.minus(order.amount);
              quoteBalance.lockedInOrders = quoteBalance.lockedInOrders.plus(
                order.amount
              );
            } else if (order.side == OrderSide.SELL) {
              baseBalance.free = baseBalance.free.minus(order.amount);
              baseBalance.lockedInOrders = baseBalance.lockedInOrders.plus(
                order.amount
              );
            } else {
              throw new Error('Invalid order side');
            }
          }
        } else if (order.type == OrderType.MARKET) {
          if (order.side == OrderSide.BUY) {
            baseBalance.free = baseBalance.free.minus(order.amount);
            quoteBalance.free = quoteBalance.free.plus(order.amount);
          } else if (order.side == OrderSide.SELL) {
            baseBalance.free = baseBalance.free.plus(order.amount);
            quoteBalance.free = quoteBalance.free.minus(order.amount);
          } else {
            throw new Error('Invalid order side');
          }
        }
      }

      const kujiBalance = getNotNullOrThrowError<Balance>(
        currentBalances.tokens.get(kujiToken.reference)
      );

      kujiBalance.free = kujiBalance.free.plus(lastPayedFeeSum);

      for (const balance of userBalances.tokens.values()) {
        const currentBalance = getNotNullOrThrowError<Balance>(
          currentBalances.tokens.get((balance.token as Token).id)
        );

        expect(balance.free).toBe(currentBalance.free);
        expect(balance.lockedInOrders).toBe(currentBalance.lockedInOrders);
        expect(balance.unsettled).toBe(currentBalance.unsettled);
      }

      userBalances = responseBody;
    });

    it('Get all open orders and check that the orders 12 and 13 are present', async () => {
      const targets = getOrders(['12', '13']);

      const targetsIds = targets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const requestBody = {
        ownerAddress: ownerAddress,
        status: OrderStatus.OPEN,
      } as GetOrdersRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetOrdersResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/orders',
        RESTRequest: request,
        controllerFunction: kujira.getOrders,
      });

      const responseBody = response.body as GetOrdersResponse;

      logResponse(responseBody);

      const responseOrdersIds = (responseBody as IMap<OrderId, Order>)
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      targetsIds.forEach((orderId) =>
        expect(responseOrdersIds.includes(orderId)).toBeTrue()
      );
    });

    it('Get all orders (open or filled) and check that the orders 2, 3, 6, 7, 10, 11, 12, and 13 are present', async () => {
      const openLimitOrdersTargets = getOrders(['12', '13']);
      const filledLimitOrdersTargets = getOrders(['2', '6', '7']);
      const filledMarketOrdersTargets = getOrders(['3', '10', '11']);
      const cancelledOrdersTargets = getOrders(['1', '4', '5', '8', '9']);

      const openLimitOrdersTargetsIds = openLimitOrdersTargets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const filledLimitOrdersTargetsIds = filledLimitOrdersTargets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const filledMarketOrdersTargetsIds = filledMarketOrdersTargets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const cancelledOrdersTargetsIds = cancelledOrdersTargets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const requestBody = {
        ownerAddress: ownerAddress,
      } as GetOrdersRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetOrdersResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/orders',
        RESTRequest: request,
        controllerFunction: kujira.getOrders,
      });

      const responseBody = response.body as GetOrdersResponse;

      logResponse(responseBody);

      const responseOrdersIds = (responseBody as IMap<OrderId, Order>)
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      expect(openLimitOrdersTargetsIds).toIncludeSameMembers(responseOrdersIds);

      filledLimitOrdersTargetsIds.forEach((orderId) =>
        expect(responseOrdersIds).toInclude(
          getNotNullOrThrowError<OrderId>(orderId)
        )
      );

      filledMarketOrdersTargetsIds.forEach((orderId) =>
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

    it('Cancel all open orders', async () => {
      const requestBody = {
        ownerAddress: ownerAddress,
      } as CancelAllOrdersRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<CancelAllOrdersResponse>({
        RESTMethod: RESTfulMethod.DELETE,
        RESTRoute: '/orders/all',
        RESTRequest: request,
        controllerFunction: kujira.cancelAllOrders,
      });

      const responseBody = response.body as CancelAllOrdersResponse;

      logResponse(responseBody);
      const targets = getOrders(['12', '13']);

      const targetsIds = targets
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      const responseOrdersIds = (responseBody as IMap<OrderId, Order>)
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      targetsIds.forEach((orderId) =>
        expect(responseOrdersIds.includes(orderId)).toBeTrue()
      );

      for (const [orderId, order] of (
        responseBody as IMap<OrderId, Order>
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
        expect(order.hashes?.creation?.length).toBeCloseTo(64);
        expect(order.status).toBe(OrderStatus.CANCELLED);
      }
    });

    it.skip('Check the wallet balances from the tokens 1, 2 and 3', async () => {
      const targetOrders = getOrders(['12', '13']);

      const requestBody = {
        tokenIds: Object.values(tokenIds),
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetBalancesResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/balances',
        RESTRequest: request,
        controllerFunction: kujira.getBalances,
      });

      const responseBody = response.body as GetBalancesResponse;

      logResponse(responseBody);

      const currentBalances = lodash.cloneDeep(responseBody);

      for (const order of targetOrders.values()) {
        const baseBalance = getNotNullOrThrowError<Balance>(
          currentBalances.tokens.get(order.market.baseToken.id)
        );

        const quoteBalance = getNotNullOrThrowError<Balance>(
          currentBalances.tokens.get(order.market.quoteToken.id)
        );

        if (order.type == OrderType.LIMIT) {
          if (order.status == OrderStatus.OPEN) {
            if (order.side == OrderSide.BUY) {
              quoteBalance.free = quoteBalance.free.plus(order.amount);
              quoteBalance.lockedInOrders = quoteBalance.lockedInOrders.minus(
                order.amount
              );
            } else if (order.side == OrderSide.SELL) {
              baseBalance.free = baseBalance.free.plus(order.amount);
              baseBalance.lockedInOrders = baseBalance.lockedInOrders.minus(
                order.amount
              );
            } else {
              throw new Error('Invalid order side');
            }
          } else if (order.status == OrderStatus.FILLED) {
            if (order.side == OrderSide.BUY) {
              baseBalance.free = baseBalance.free.minus(order.amount);

              quoteBalance.lockedInOrders = quoteBalance.lockedInOrders.plus(
                order.amount
              );

              baseBalance.unsettled = baseBalance.unsettled.minus(order.amount);
            } else if (order.side == OrderSide.SELL) {
              quoteBalance.free = quoteBalance.free.minus(order.amount);

              baseBalance.lockedInOrders = baseBalance.lockedInOrders.plus(
                order.amount
              );

              quoteBalance.unsettled = quoteBalance.unsettled.minus(
                order.amount
              );
            } else {
              throw new Error('Invalid order side');
            }
          } else if (order.status == OrderStatus.CANCELLED) {
            if (order.side == OrderSide.BUY) {
              quoteBalance.free = quoteBalance.free.minus(order.amount);
              quoteBalance.lockedInOrders = quoteBalance.lockedInOrders.plus(
                order.amount
              );
            } else if (order.side == OrderSide.SELL) {
              baseBalance.free = baseBalance.free.minus(order.amount);
              baseBalance.lockedInOrders = baseBalance.lockedInOrders.plus(
                order.amount
              );
            } else {
              throw new Error('Invalid order side');
            }
          }
        } else if (order.type == OrderType.MARKET) {
          if (order.side == OrderSide.BUY) {
            baseBalance.free = baseBalance.free.minus(order.amount);
            quoteBalance.free = quoteBalance.free.plus(order.amount);
          } else if (order.side == OrderSide.SELL) {
            baseBalance.free = baseBalance.free.plus(order.amount);
            quoteBalance.free = quoteBalance.free.minus(order.amount);
          } else {
            throw new Error('Invalid order side');
          }
        }
      }

      const kujiBalance = getNotNullOrThrowError<Balance>(
        currentBalances.tokens.get(kujiToken.reference)
      );

      kujiBalance.free = kujiBalance.free.plus(lastPayedFeeSum);

      for (const balance of userBalances.tokens.values()) {
        const currentBalance = getNotNullOrThrowError<Balance>(
          currentBalances.tokens.get((balance.token as Token).id)
        );

        expect(balance.free).toBe(currentBalance.free);
        expect(balance.lockedInOrders).toBe(currentBalance.lockedInOrders);
        expect(balance.unsettled).toBe(currentBalance.unsettled);
      }

      userBalances = responseBody;
    });

    it('Get all open orders and check that there are no open orders', async () => {
      const requestBody = {
        ownerAddress: ownerAddress,
        status: OrderStatus.OPEN,
      } as GetOrdersRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetOrdersResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/orders',
        RESTRequest: request,
        controllerFunction: kujira.getOrders,
      });

      const responseBody = response.body as GetOrdersResponse;

      logResponse(responseBody);

      expect(responseBody.size).toEqual(0);
    });

    it('Settle funds for market 1', async () => {
      const requestBody = {
        marketId: marketsIds[1],
        ownerAddress: ownerAddress,
      } as MarketWithdrawRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<MarketWithdrawResponse>({
        RESTMethod: RESTfulMethod.POST,
        RESTRoute: '/market/withdraw',
        RESTRequest: request,
        controllerFunction: kujira.settleMarketFunds,
      });

      const responseBody = response.body as MarketWithdrawResponse;

      logResponse(responseBody);

      expect((responseBody as Withdraw).hash.length).toBeCloseTo(64);
    });

    it.skip('Check the wallet balances from the tokens 1, 2 and 3', async () => {
      const targetOrders = getOrders(['12', '13']);

      const requestBody = {
        tokenIds: Object.values(tokenIds),
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetBalancesResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/balances',
        RESTRequest: request,
        controllerFunction: kujira.getBalances,
      });

      const responseBody = response.body as GetBalancesResponse;

      logResponse(responseBody);

      const currentBalances = lodash.cloneDeep(responseBody);

      for (const order of targetOrders.values()) {
        const baseBalance = getNotNullOrThrowError<Balance>(
          currentBalances.tokens.get(order.market.baseToken.id)
        );

        const quoteBalance = getNotNullOrThrowError<Balance>(
          currentBalances.tokens.get(order.market.quoteToken.id)
        );

        if (order.type == OrderType.LIMIT) {
          if (order.status == OrderStatus.OPEN) {
            if (order.side == OrderSide.BUY) {
              quoteBalance.free = quoteBalance.free.plus(order.amount);
              quoteBalance.lockedInOrders = quoteBalance.lockedInOrders.minus(
                order.amount
              );
            } else if (order.side == OrderSide.SELL) {
              baseBalance.free = baseBalance.free.plus(order.amount);
              baseBalance.lockedInOrders = baseBalance.lockedInOrders.minus(
                order.amount
              );
            } else {
              throw new Error('Invalid order side');
            }
          } else if (order.status == OrderStatus.FILLED) {
            if (order.side == OrderSide.BUY) {
              baseBalance.free = baseBalance.free.minus(order.amount);

              quoteBalance.lockedInOrders = quoteBalance.lockedInOrders.plus(
                order.amount
              );

              baseBalance.unsettled = baseBalance.unsettled.minus(order.amount);
            } else if (order.side == OrderSide.SELL) {
              quoteBalance.free = quoteBalance.free.minus(order.amount);

              baseBalance.lockedInOrders = baseBalance.lockedInOrders.plus(
                order.amount
              );

              quoteBalance.unsettled = quoteBalance.unsettled.minus(
                order.amount
              );
            } else {
              throw new Error('Invalid order side');
            }
          } else if (order.status == OrderStatus.CANCELLED) {
            if (order.side == OrderSide.BUY) {
              quoteBalance.free = quoteBalance.free.minus(order.amount);
              quoteBalance.lockedInOrders = quoteBalance.lockedInOrders.plus(
                order.amount
              );
            } else if (order.side == OrderSide.SELL) {
              baseBalance.free = baseBalance.free.minus(order.amount);
              baseBalance.lockedInOrders = baseBalance.lockedInOrders.plus(
                order.amount
              );
            } else {
              throw new Error('Invalid order side');
            }
          }
        } else if (order.type == OrderType.MARKET) {
          if (order.side == OrderSide.BUY) {
            baseBalance.free = baseBalance.free.minus(order.amount);
            quoteBalance.free = quoteBalance.free.plus(order.amount);
          } else if (order.side == OrderSide.SELL) {
            baseBalance.free = baseBalance.free.plus(order.amount);
            quoteBalance.free = quoteBalance.free.minus(order.amount);
          } else {
            throw new Error('Invalid order side');
          }
        }
      }

      const kujiBalance = getNotNullOrThrowError<Balance>(
        currentBalances.tokens.get(kujiToken.reference)
      );

      kujiBalance.free = kujiBalance.free.plus(lastPayedFeeSum);

      for (const balance of userBalances.tokens.values()) {
        const currentBalance = getNotNullOrThrowError<Balance>(
          currentBalances.tokens.get((balance.token as Token).id)
        );

        expect(balance.free).toBe(currentBalance.free);
        expect(balance.lockedInOrders).toBe(currentBalance.lockedInOrders);
        expect(balance.unsettled).toBe(currentBalance.unsettled);
      }

      userBalances = responseBody;
    });

    it('Settle funds for markets 2 and 3', async () => {
      const requestBody = {
        marketIds: [marketsIds[2], marketsIds[3]],
        ownerAddress: ownerAddress,
      } as MarketsWithdrawsRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<MarketsWithdrawsFundsResponse>({
        RESTMethod: RESTfulMethod.POST,
        RESTRoute: '/market/withdraws',
        RESTRequest: request,
        controllerFunction: kujira.settleMarketsFunds,
      });

      const responseBody = response.body as MarketsWithdrawsFundsResponse;

      logResponse(responseBody);

      expect(responseBody.size).toBe(
        getNotNullOrThrowError<MarketId[]>(request.marketIds).length
      );

      for (const [marketId, withdraw] of (
        responseBody as IMap<MarketId, Withdraw>
      ).entries()) {
        expect(request.marketIds).toInclude(marketId);
        expect(withdraw.hash.length).toBeCloseTo(64);
      }
    });

    it.skip('Check the wallet balances from the tokens 1, 2 and 3', async () => {
      const targetOrders = getOrders(['12', '13']);

      const requestBody = {
        tokenIds: Object.values(tokenIds),
        ownerAddress: ownerAddress,
      } as GetBalancesRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<GetBalancesResponse>({
        RESTMethod: RESTfulMethod.GET,
        RESTRoute: '/balances',
        RESTRequest: request,
        controllerFunction: kujira.getBalances,
      });

      const responseBody = response.body as GetBalancesResponse;

      logResponse(responseBody);

      const currentBalances = lodash.cloneDeep(responseBody);

      for (const order of targetOrders.values()) {
        const baseBalance = getNotNullOrThrowError<Balance>(
          currentBalances.tokens.get(order.market.baseToken.id)
        );

        const quoteBalance = getNotNullOrThrowError<Balance>(
          currentBalances.tokens.get(order.market.quoteToken.id)
        );

        if (order.type == OrderType.LIMIT) {
          if (order.status == OrderStatus.OPEN) {
            if (order.side == OrderSide.BUY) {
              quoteBalance.free = quoteBalance.free.plus(order.amount);
              quoteBalance.lockedInOrders = quoteBalance.lockedInOrders.minus(
                order.amount
              );
            } else if (order.side == OrderSide.SELL) {
              baseBalance.free = baseBalance.free.plus(order.amount);
              baseBalance.lockedInOrders = baseBalance.lockedInOrders.minus(
                order.amount
              );
            } else {
              throw new Error('Invalid order side');
            }
          } else if (order.status == OrderStatus.FILLED) {
            if (order.side == OrderSide.BUY) {
              baseBalance.free = baseBalance.free.minus(order.amount);

              quoteBalance.lockedInOrders = quoteBalance.lockedInOrders.plus(
                order.amount
              );

              baseBalance.unsettled = baseBalance.unsettled.minus(order.amount);
            } else if (order.side == OrderSide.SELL) {
              quoteBalance.free = quoteBalance.free.minus(order.amount);

              baseBalance.lockedInOrders = baseBalance.lockedInOrders.plus(
                order.amount
              );

              quoteBalance.unsettled = quoteBalance.unsettled.minus(
                order.amount
              );
            } else {
              throw new Error('Invalid order side');
            }
          } else if (order.status == OrderStatus.CANCELLED) {
            if (order.side == OrderSide.BUY) {
              quoteBalance.free = quoteBalance.free.minus(order.amount);
              quoteBalance.lockedInOrders = quoteBalance.lockedInOrders.plus(
                order.amount
              );
            } else if (order.side == OrderSide.SELL) {
              baseBalance.free = baseBalance.free.minus(order.amount);
              baseBalance.lockedInOrders = baseBalance.lockedInOrders.plus(
                order.amount
              );
            } else {
              throw new Error('Invalid order side');
            }
          }
        } else if (order.type == OrderType.MARKET) {
          if (order.side == OrderSide.BUY) {
            baseBalance.free = baseBalance.free.minus(order.amount);
            quoteBalance.free = quoteBalance.free.plus(order.amount);
          } else if (order.side == OrderSide.SELL) {
            baseBalance.free = baseBalance.free.plus(order.amount);
            quoteBalance.free = quoteBalance.free.minus(order.amount);
          } else {
            throw new Error('Invalid order side');
          }
        }
      }

      const kujiBalance = getNotNullOrThrowError<Balance>(
        currentBalances.tokens.get(kujiToken.reference)
      );

      kujiBalance.free = kujiBalance.free.plus(lastPayedFeeSum);

      for (const balance of userBalances.tokens.values()) {
        const currentBalance = getNotNullOrThrowError<Balance>(
          currentBalances.tokens.get((balance.token as Token).id)
        );

        expect(balance.free).toBe(currentBalance.free);
        expect(balance.lockedInOrders).toBe(currentBalance.lockedInOrders);
        expect(balance.unsettled).toBe(currentBalance.unsettled);
      }

      userBalances = responseBody;
    });

    it('Settle funds for all markets', async () => {
      const requestBody = {
        ownerAddress: ownerAddress,
      } as AllMarketsWithdrawsRequest;

      const request = {
        ...commonRequestBody,
        ...requestBody,
      };

      logRequest(request);

      const response = await sendRequest<AllMarketsWithdrawsResponse>({
        RESTMethod: RESTfulMethod.POST,
        RESTRoute: '/market/withdraws/all',
        RESTRequest: request,
        controllerFunction: kujira.settleAllMarketsFunds,
      });

      const responseBody = response.body as AllMarketsWithdrawsResponse;

      logResponse(responseBody);

      expect(responseBody.size).toBe(Object.values(marketsIds).length);

      for (const [marketId, withdraw] of (
        responseBody as IMap<MarketId, Withdraw>
      ).entries()) {
        expect(request.marketIds).toInclude(marketId);
        expect(withdraw.hash.length).toBeCloseTo(64);
      }
    });
  });
});
