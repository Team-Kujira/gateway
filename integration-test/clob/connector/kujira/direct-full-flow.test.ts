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
  msg,
  registry,
  kujiraQueryClient,
  KujiraQueryClient,
  fin,
  MAINNET,
} from 'kujira.js';
import { coins, GasPrice, SigningStargateClient } from '@cosmjs/stargate';
const { Map } = require('immutable');

jest.setTimeout(30 * 60 * 1000);

let account: AccountData;
let querier: KujiraQueryClient;
let stargateClient: SigningStargateClient;
let markets: any;
let market_pairs: any;

let request: any;
let response: any;

let testTitle: string;
let logRequest: (target: any) => void;
let logResponse: (target: any) => void;
let logOutput: (target: any) => void;

const ordersMap = Map({}).asMutable();

beforeAll(async () => {
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

  // const tokens = {
  //   1: 'KUJI',
  //   2: 'DEMO',
  //   3: 'USK',
  // };

  markets = {
    1: 'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh', // KUJI/DEMO
    2: 'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6', // KUJI/USK
    3: 'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg', // DEMO/USK
  };

  market_pairs = {
    1: ['KUJI', 'DEMO'],
    2: ['KUJI', 'USK'],
    3: ['DEMO', 'USK'],
  };

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
      gasPrice: GasPrice.fromString('0.00125ukuji'),
    }
  );
});

beforeEach(async () => {
  testTitle = expect.getState().currentTestName;
  logRequest = (target: any) => helperLogRequest(target, testTitle);
  logResponse = (target: any) => helperLogResponse(target, testTitle);
  logOutput = (target: any) => helperLogOutput(target, testTitle);
});

describe('Kujira Full Flow', () => {
  describe('Markets', () => {
    it('Get one market', async () => {
      response =
        fin.PAIRS.find((it) => it.address == markets[1]) &&
        fin.PAIRS.find((it) => it.chainID == MAINNET);

      logResponse(response);

      const output =
        'address: ' +
        response['address'] +
        '; ' +
        'chainID: ' +
        response['chainID'] +
        '; ' +
        'base: ' +
        response['denoms'][0]['symbol'] +
        '; ' +
        'quote: ' +
        response['denoms'][1]['symbol'];

      logOutput(output);
    });

    it('Get two markets', async () => {
      const selected_markets = [1, 2];

      for (const i of selected_markets) {
        response = fin.PAIRS.find(
          (it) =>
            [it.denoms[0]['symbol'], it.denoms[1]['symbol']] ==
            [market_pairs[i][0], market_pairs[i][1]]
        );

        if (!response) response = 'Market not found...';
      }

      logResponse(response);
    });

    it('Get all markets', async () => {
      console.log('');
    });
  });

  describe('Order books', () => {
    it('Get one order book', async () => {
      request = [
        markets[1],
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

      const output = {
        market: null, // TODO fill!!!
        asks: response['base'],
        bids: response['quote'],
      };

      logOutput(output);
    });

    it('Get two order books for two different markets', async () => {
      console.log('');
    });

    it('Get all order books', async () => {
      console.log('');
    });
  });

  describe('Tickers', () => {
    it('Get one ticker', async () => {
      request = [
        markets[1],
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

      const output =
        (Number(response['base'][0]['quote_price']) +
          Number(response['quote'][0]['quote_price'])) /
        2;

      logOutput(output);
    });

    it('Get two tickers for two different markets', async () => {
      console.log('');
    });

    it('Get all tickers', async () => {
      console.log('');
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

    check that it's not possible to get the canceled order 1

    get all open orders and check that order 1 is missing

    cancel the orders 3, 4, and 5 from markets 1 and 2

    check the wallet balances from the tokens 1, 2, and 3

    check that it's not possible to get the canceled orders 3, 4, and 5 from the markets 1 and 2

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
      console.log('');
    });

    it('Create a buy order 1 for market 1', async () => {
      const market = markets[1];
      const price = 999.99;
      const amount = 1000000;
      const denom = 'ukuji';

      const message = msg.wasm.msgExecuteContract({
        sender: account.address,
        contract: market,
        msg: Buffer.from(
          JSON.stringify({ submit_order: { price: price.toString() } })
        ),
        funds: coins(amount, denom),
      });

      request = [account.address, [message], 'auto'];

      logRequest(request);

      response = await stargateClient.signAndBroadcast(
        account.address,
        [message],
        'auto'
      );

      logResponse(response);

      const orderId: number = response['events']
        .filter((obj: any) => obj['type'] == 'wasm')[0]
        ['attributes'].filter((obj: any) => obj['key'] == 'order_idx')[0][
        'value'
      ];
      ordersMap.set(1, orderId);

      const output = {
        id: null, // TODO Can we add a custom order id?!!!
        exchangeId: orderId,
        marketName: market,
        ownderAddress: account.address, // TODO Use the info from the response!!!
        side: 'SELL', // TODO Use the info from the response!!!
        price: price,
        amount: amount,
        type: 'LIMIT', // TODO Can we have other types? Try to get the info from the response!!!
        status: 'OPEN', // TODO Try to get the info from the response!!!
        fee: response['gasUsed'], // TODO Is this the fee?!!!
      };

      logOutput(output);
    });

    it('Check the available wallet balances from the tokens 1 and 2', async () => {
      console.log('');
    });

    it('Get the open order 1', async () => {
      console.log('');
    });

    it('Create a sell order 2 for market 2', async () => {
      console.log('');
    });

    it('Check the available wallet balances from the tokens 1 and 2', async () => {
      console.log('');
    });

    it('Get the open order 2', async () => {
      console.log('');
    });

    it('Create 7 orders at once', async () => {
      console.log('');
    });

    it('Check the wallet balances from the tokens 1, 2, and 3', async () => {
      console.log('');
    });

    it('Get the open orders 6 and 7', async () => {
      console.log('');
    });

    it('Get all open orders', async () => {
      const result = await querier.wasm.queryContractSmart(markets[1], {
        orders_by_user: { address: account.address, limit: 100 },
      });
      console.log(result);
    });

    it('Cancel the order 1', async () => {
      console.log('');
    });

    it('Check the wallet balances from the tokens 1 and 2', async () => {
      console.log('');
    });

    it("Check that it's not possible to get the canceled order 1", async () => {
      console.log('');
    });

    it('Get all open orders and check that order 1 is missing', async () => {
      console.log('');
    });

    it('Cancel the orders 3, 4, and 5 from markets 1 and 2', async () => {
      console.log('');
    });

    it('Check the wallet balances from the tokens 1, 2, and 3', async () => {
      console.log('');
    });

    it("Check that it's not possible to get the canceled orders 3, 4, and 5 from the markets 1 and 2", async () => {
      console.log('');
    });

    it('Get all open orders and check that the orders 1, 3, 4, and 5 are missing', async () => {
      console.log('');
    });

    it('Force the filling of order 2', async () => {
      console.log('');
    });

    it('Check the wallet balances from the tokens 1 and 2', async () => {
      console.log('');
    });

    it('Get the filled order 2', async () => {
      console.log('');
    });

    it('Get all filled orders and check that order 2 is present', async () => {
      console.log('');
    });

    it('Get all open orders and check that the orders 1, 2, 3, 4, and 5 are missing', async () => {
      console.log('');
    });

    it('Get all orders (open or filled) and check that the order 2 is present', async () => {
      console.log('');
    });

    it('Force the filling of orders 6 and 7', async () => {
      console.log('');
    });

    it('Check the wallet balances from the tokens 1, 2, and 3', async () => {
      console.log('');
    });

    it('Get the filled orders 6 and 7', async () => {
      console.log('');
    });

    it('Get all filled orders and check that the orders 2, 6, and 7 are present', async () => {
      console.log('');
    });

    it('Get all open orders and check that the orders 1, 2, 3, 4, 5, 6, and 7 are missing', async () => {
      console.log('');
    });

    it('Get all orders (open or filled) and check that the orders 2, 6, and 7 are present', async () => {
      console.log('');
    });

    it('Cancel all the open orders', async () => {
      console.log('');
    });

    it('Check the wallet balances from the tokens 2 and 3', async () => {
      console.log('');
    });

    it('Get all open orders and check that there are no open orders', async () => {
      console.log('');
    });

    it('Get all orders (open or filled) and check that the orders 2, 6, and 7 are present', async () => {
      console.log('');
    });

    it('Create 2 orders at once', async () => {
      console.log('');
    });

    it('Cet all open orders and check that the orders 10 and 11 are present', async () => {
      console.log('');
    });

    it('Get all orders (open or filled) and check that the orders 2, 6, 7, 10, and 11 are present', async () => {
      console.log('');
    });

    it('Cancel all the open orders', async () => {
      console.log('');
    });

    it('Check the wallet balances from the tokens 2 and 3', async () => {
      console.log('');
    });

    it('Get all open orders and check that there are no open orders', async () => {
      console.log('');
    });
  });
});
