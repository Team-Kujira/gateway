import 'jest-extended';
import { Kujira } from '../../../../src/connectors/kujira/kujira';
import { KujiraConfig } from '../../../../src/connectors/kujira/kujira.config';
import {
  getNotNullOrThrowError,
  logRequest as helperLogRequest,
  logResponse as helperLogResponse,
} from '../../../helpers';
import {
  CancelOrdersOptions,
  GetBalancesOptions,
  GetOrderOptions,
  GetOrdersOptions,
  IMap,
  Order,
  OrderClientId,
  OrderStatus,
  OwnerAddress,
  PlaceOrderOptions,
  PlaceOrdersOptions,
} from '../../../../src/connectors/kujira/kujira.types';
import { DEMO, fin, KUJI, TESTNET, USK_TESTNET } from 'kujira.js';
import { addWallet } from '../../../../src/services/wallet/wallet.controllers';
import { AddWalletRequest } from '../../../../src/services/wallet/wallet.requests';

jest.setTimeout(30 * 60 * 1000);

let request: any;
let response: any;

let testTitle: string;
let logRequest: (target: any) => void;
let logResponse: (target: any) => void;
// let logOutput: (target: any) => void;

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

const orders: IMap<OrderClientId, Record<any, any>> = IMap<
  OrderClientId,
  Record<any, any>
>().asMutable();

const getOrder = (ordinal: OrderClientId): Record<any, any> => {
  return getOrders([ordinal]).first();
};

const getOrders = (
  ordinals: OrderClientId[]
): IMap<OrderClientId, Record<any, any>> => {
  const output = IMap<OrderClientId, Record<any, any>>().asMutable();
  for (const ordinal of ordinals) {
    output.set(
      ordinal,
      getNotNullOrThrowError<Record<any, any>>(orders.get(ordinal))
    );
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
    id: null,
    clientId: '1',
    ownerAddress: ownerAddress,
    marketId: marketIds[1],
    side: 'BUY',
    price: 0.001,
    amount: 10,
    type: 'LIMIT',
    payerAddress: ownerAddress,
    status: null,
    signature: null,
    fee: null,
  });

  orders.set('2', {
    id: null,
    clientId: '2',
    ownerAddress: ownerAddress,
    marketId: marketIds[1],
    side: 'SELL',
    price: 999.99,
    amount: 10,
    type: 'LIMIT',
    payerAddress: ownerAddress,
    status: null,
    signature: null,
    fee: null,
  });

  orders.set('3', {
    id: null,
    clientId: 3,
    ownerAddress: ownerAddress,
    marketId: marketIds[1],
    side: 'BUY',
    price: 0.001,
    amount: 10,
    type: 'LIMIT',
    payerAddress: ownerAddress,
    status: null,
    signature: null,
    fee: null,
  });

  orders.set('4', {
    id: null,
    clientId: '4',
    ownerAddress: ownerAddress,
    marketId: marketIds[1],
    side: 'SELL',
    price: 999.99,
    amount: 10,
    type: 'LIMIT',
    payerAddress: ownerAddress,
    status: null,
    signature: null,
    fee: null,
  });

  orders.set('5', {
    id: null,
    clientId: '5',
    ownerAddress: ownerAddress,
    marketId: marketIds[1],
    side: 'BUY',
    price: 0.001,
    amount: 10,
    type: 'LIMIT',
    payerAddress: ownerAddress,
    status: null,
    signature: null,
    fee: null,
  });

  orders.set('6', {
    id: null,
    clientId: '6',
    ownerAddress: ownerAddress,
    marketId: marketIds[1],
    side: 'SELL',
    price: 999.99,
    amount: 10,
    type: 'LIMIT',
    payerAddress: ownerAddress,
    status: null,
    signature: null,
    fee: null,
  });

  orders.set('7', {
    id: null,
    clientId: '7',
    ownerAddress: ownerAddress,
    marketId: marketIds[1],
    side: 'BUY',
    price: 0.001,
    amount: 10,
    type: 'LIMIT',
    payerAddress: ownerAddress,
    status: null,
    signature: null,
    fee: null,
  });

  orders.set('8', {
    id: null,
    clientId: '8',
    ownerAddress: ownerAddress,
    marketId: marketIds[1],
    side: 'SELL',
    price: 999.99,
    amount: 10,
    type: 'LIMIT',
    payerAddress: ownerAddress,
    status: null,
    signature: null,
    fee: null,
  });

  orders.set('9', {
    id: null,
    clientId: '9',
    ownerAddress: ownerAddress,
    marketId: marketIds[1],
    side: 'BUY',
    price: 0.001,
    amount: 10,
    type: 'LIMIT',
    payerAddress: ownerAddress,
    status: null,
    signature: null,
    fee: null,
  });

  orders.set('10', {
    id: null,
    clientId: '10',
    ownerAddress: ownerAddress,
    marketId: marketIds[1],
    side: 'BUY',
    price: 0.001,
    amount: 10,
    type: 'LIMIT',
    payerAddress: ownerAddress,
    status: null,
    signature: null,
    fee: null,
  });

  orders.set('11', {
    id: null,
    clientId: '11',
    ownerAddress: ownerAddress,
    marketId: marketIds[2],
    side: 'SELL',
    price: 999.99,
    amount: 10,
    type: 'LIMIT',
    payerAddress: ownerAddress,
    status: null,
    signature: null,
    fee: null,
  });
});

beforeEach(async () => {
  testTitle = expect.getState().currentTestName;
  logRequest = (target: any) => helperLogRequest(target, testTitle);
  logResponse = (target: any) => helperLogResponse(target, testTitle);
  // logOutput = (target: any) => helperLogOutput(target, testTitle);
});

describe('Kujira Full Flow', () => {
  describe('Tokens', () => {
    it('Get token 1', async () => {
      request = {
        id: tokenIds[1],
      };

      logRequest(request);

      response = await kujira.getToken(request);

      logResponse(response);
    });

    it('Get tokens 2 and 3', async () => {
      request = {
        ids: [tokenIds[2], tokenIds[3]],
      };

      logRequest(request);

      response = await kujira.getTokens(request);

      logResponse(response);
    });

    it('Get all tokens', async () => {
      request = {};

      logRequest(request);

      response = await kujira.getAllTokens(request);

      logResponse(response);
    });
  });

  describe('Markets', () => {
    it('Get market 1', async () => {
      request = {
        id: marketIds[1],
      };

      logRequest(request);

      response = await kujira.getMarket(request);

      logResponse(response);
    });

    it('Get markets 2 and 3', async () => {
      request = {
        ids: [marketIds[2], marketIds[3]],
      };

      logRequest(request);

      response = await kujira.getMarkets(request);

      logResponse(response);
    });

    it('Get all markets', async () => {
      request = {};

      logRequest(request);

      response = await kujira.getAllMarkets(request);

      logResponse(response);
    });
  });

  describe('Order books', () => {
    it('Get order book from market 1', async () => {
      request = {
        marketId: marketIds[1],
      };

      logRequest(request);

      response = await kujira.getOrderBook(request);

      logResponse(response);
    });

    it('Get order books from the markets 2 and 3', async () => {
      request = {
        marketIds: [marketIds[2], marketIds[3]],
      };

      logRequest(request);

      response = await kujira.getOrderBooks(request);

      logResponse(response);
    });

    it('Get all order books', async () => {
      request = {};

      logRequest(request);

      response = await kujira.getAllOrderBooks(request);

      logResponse(response);
    });
  });

  describe('Tickers', () => {
    it('Get ticker from market 1', async () => {
      request = {
        marketId: marketIds[1],
      };

      logRequest(request);

      response = await kujira.getTicker(request);

      logResponse(response);
    });

    it('Get tickers from markets 2 and 3', async () => {
      request = {
        marketIds: [marketIds[2], marketIds[3]],
      };

      logRequest(request);

      response = await kujira.getTickers(request);

      logResponse(response);
    });

    it('Get all tickers', async () => {
      request = {};

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
      };

      logRequest(request);

      response = await kujira.getBalance(request);

      logResponse(response);
    });

    it('Get balances of tokens 2 and 3', async () => {
      request = {
        tokenIds: [tokenIds[2], tokenIds[3]],
        ownerAddress: ownerAddress,
      };

      logRequest(request);

      response = await kujira.getBalances(request);

      logResponse(response);
    });

    it('Get all balances', async () => {
      request = {
        ownerAddress: ownerAddress,
      };

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

    it('Get the wallet balances from the tokens 1, 2, and 3', async () => {
      request = {
        tokenIds: [tokenIds[1], tokenIds[2], tokenIds[3]],
        ownerAddress: ownerAddress,
      } as GetBalancesOptions;

      logRequest(request);

      response = await kujira.getBalances(request);

      logResponse(response);
    });

    it('Create a buy order 1 for market 1', async () => {
      const candidate = getOrder('1');

      request = { ...candidate } as PlaceOrderOptions;

      logRequest(request);

      response = await kujira.placeOrder(request);

      candidate.id = response.id;

      logResponse(response);
    });

    it('Check the available wallet balances from the tokens 1 and 2', async () => {
      request = {
        tokenIds: [tokenIds[1], tokenIds[2]],
        ownerAddress: ownerAddress,
      } as GetBalancesOptions;

      logRequest(request);

      response = await kujira.getBalances(request);

      logResponse(response);
    });

    it('Get the open order 1', async () => {
      const id = getOrder('1').id;

      request = { id, status: OrderStatus.OPEN } as GetOrderOptions;

      logRequest(request);

      response = await kujira.getOrder(request);

      logResponse(response);
    });

    it('Create a sell order 2 for market 2', async () => {
      const candidate = getOrder('2');

      request = { ...candidate } as PlaceOrderOptions;

      logRequest(request);

      response = await kujira.placeOrder(request);

      logResponse(response);

      candidate.id = response.id;
    });

    it('Check the available wallet balances from the tokens 1 and 2', async () => {
      request = {
        tokenIds: [tokenIds[1], tokenIds[2]],
        ownerAddress: ownerAddress,
      } as GetBalancesOptions;

      logRequest(request);

      response = await kujira.getBalances(request);

      logResponse(response);
    });

    it('Get the open order 2', async () => {
      const id = getOrder('2').id;

      request = { id, status: OrderStatus.OPEN } as GetOrderOptions;

      logRequest(request);

      response = await kujira.getOrder(request);

      logResponse(response);
    });

    it('Create 7 orders at once', async () => {
      const candidates = getOrders(['3', '4', '5', '6', '7', '8', '9']);

      request = {
        orders: candidates
          .valueSeq()
          .map((candidate) => ({ ...candidate }))
          .toArray(),
      } as PlaceOrdersOptions;

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

    it('Check the wallet balances from the tokens 1, 2, and 3', async () => {
      request = {
        tokenIds: [tokenIds[1], tokenIds[2], tokenIds[3]],
        ownerAddress: ownerAddress,
      } as GetBalancesOptions;

      logRequest(request);

      response = await kujira.getBalances(request);

      logResponse(response);
    });

    it('Get the open orders 6 and 7', async () => {
      const ids = getOrders(['6', '7'])
        .map((order) => order.id)
        .valueSeq()
        .toArray();

      request = {
        ids,
        ownerAddresses: [ownerAddress],
        status: OrderStatus.OPEN,
      } as GetOrdersOptions;

      logRequest(request);

      response = await kujira.getOrders(request);

      logResponse(response);
    });

    it('Get all open orders', async () => {
      request = {
        ownerAddresses: [ownerAddress],
        status: OrderStatus.OPEN,
      } as GetOrdersOptions;

      logRequest(request);

      logRequest(request);

      response = await kujira.getOrders(request);

      logResponse(response);
    });

    it('Cancel the order 1', async () => {
      const id = getOrder('1').id;

      request = { id } as GetOrderOptions;

      logRequest(request);

      response = await kujira.getOrder(request);

      logResponse(response);
    });

    it('Check the wallet balances from the tokens 1 and 2', async () => {
      request = {
        tokenIds: [tokenIds[1], tokenIds[2]],
        ownerAddress: ownerAddress,
      } as GetBalancesOptions;

      logRequest(request);

      response = await kujira.getBalances(request);

      logResponse(response);
    });

    it("Check that it's not possible to get the cancelled order 1", async () => {
      const id = getOrder('1').id;

      request = { id } as GetOrderOptions;

      logRequest(request);

      response = await kujira.getOrder(request);

      logResponse(response);
    });

    it('Get all open orders and check that order 1 is missing', async () => {
      request = {
        ownerAddresses: [ownerAddress],
        status: OrderStatus.OPEN,
      } as GetOrdersOptions;

      logRequest(request);

      response = await kujira.getOrders(request);

      logResponse(response);
    });

    it('Cancel the orders 3, 4, and 5 from markets 1 and 2', async () => {
      request = {} as CancelOrdersOptions;

      logRequest(request);

      response = undefined;

      logResponse(response);
    });

    it('Check the wallet balances from the tokens 1, 2, and 3', async () => {
      request = {
        ownerAddress: ownerAddress,
      };

      logRequest(request);

      response = undefined;

      logResponse(response);
    });

    it("Check that it's not possible to get the cancelled orders 3, 4, and 5 from the markets 1 and 2", async () => {
      request = {};

      logRequest(request);

      response = undefined;

      logResponse(response);
    });

    it('Get all open orders and check that the orders 1, 3, 4, and 5 are missing', async () => {
      request = {};

      logRequest(request);

      response = undefined;

      logResponse(response);
    });

    it('Force the filling of order 2', async () => {
      request = {};

      logRequest(request);

      response = undefined;

      logResponse(response);
    });

    it('Check the wallet balances from the tokens 1 and 2', async () => {
      request = {
        ownerAddress: ownerAddress,
      };

      logRequest(request);

      response = undefined;

      logResponse(response);
    });

    it('Get the filled order 2', async () => {
      request = {};

      logRequest(request);

      response = undefined;

      logResponse(response);
    });

    it('Get all open orders and check that the orders 1, 2, 3, 4, and 5 are missing', async () => {
      request = {};

      logRequest(request);

      response = undefined;

      logResponse(response);
    });

    it('Get all orders (open or filled) and check that the order 2 is present', async () => {
      request = {};

      logRequest(request);

      response = undefined;

      logResponse(response);
    });

    it('Force the filling of orders 6 and 7', async () => {
      request = {};

      logRequest(request);

      response = undefined;

      logResponse(response);
    });

    it('Check the wallet balances from the tokens 1, 2, and 3', async () => {
      request = {
        ownerAddress: ownerAddress,
      };

      logRequest(request);

      response = undefined;

      logResponse(response);
    });

    it('Get the filled orders 6 and 7', async () => {
      request = {};

      logRequest(request);

      response = undefined;

      logResponse(response);
    });

    it('Get all filled orders and check that the orders 2, 6, and 7 are present', async () => {
      request = {};

      logRequest(request);

      response = undefined;

      logResponse(response);
    });

    it('Get all open orders and check that the orders 1, 2, 3, 4, 5, 6, and 7 are missing', async () => {
      request = {};

      logRequest(request);

      response = undefined;

      logResponse(response);
    });

    it('Get all orders (open or filled) and check that the orders 2, 6, and 7 are present', async () => {
      request = {};

      logRequest(request);

      response = undefined;

      logResponse(response);
    });

    it('Cancel all the open orders', async () => {
      request = {};

      logRequest(request);

      response = undefined;

      logResponse(response);
    });

    it('Check the wallet balances from the tokens 2 and 3', async () => {
      request = {
        ownerAddress: ownerAddress,
      };

      logRequest(request);

      response = undefined;

      logResponse(response);
    });

    it('Get all open orders and check that there are no open orders', async () => {
      request = {};

      logRequest(request);

      response = undefined;

      logResponse(response);
    });

    it('Get all orders (open or filled) and check that the orders 2, 6, and 7 are present', async () => {
      request = {};

      logRequest(request);

      response = undefined;

      logResponse(response);
    });

    it('Create 2 orders at once', async () => {
      request = {};

      logRequest(request);

      response = undefined;

      logResponse(response);
    });

    it('Cet all open orders and check that the orders 10 and 11 are present', async () => {
      request = {};

      logRequest(request);

      response = undefined;

      logResponse(response);
    });

    it('Get all orders (open or filled) and check that the orders 2, 6, 7, 10, and 11 are present', async () => {
      request = {};

      logRequest(request);

      response = undefined;

      logResponse(response);
    });

    it('Cancel all the open orders', async () => {
      request = {};

      logRequest(request);

      response = undefined;

      logResponse(response);
    });

    it('Check the wallet balances from the tokens 2 and 3', async () => {
      request = {
        ownerAddress: ownerAddress,
      };

      logRequest(request);

      response = undefined;

      logResponse(response);
    });

    it('Get all open orders and check that there are no open orders', async () => {
      request = {};

      logRequest(request);

      response = undefined;

      logResponse(response);
    });

    it('Settle funds for an order', async () => {
      request = {};

      logRequest(request);

      response = undefined;

      logResponse(response);
    });
  });
});
