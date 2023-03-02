import 'jest-extended';
import { getNotNullOrThrowError } from '../../../helpers';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { Slip10RawIndex } from '@cosmjs/crypto';
import { HttpBatchClient, Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { kujiraQueryClient } from 'kujira.js';

jest.setTimeout(30 * 60 * 1000);

describe('Kujira Full Flow', async () => {
  const rpcEndpoint = getNotNullOrThrowError<string>(
    process.env.TEST_KUJIRA_RPC_ENDPOINT
  );

  const mnemonic = getNotNullOrThrowError<string>(
    process.env.TEST_KUJIRA_MNEMONIC
  );

  const prefix = getNotNullOrThrowError<string>(
    process.env.TEST_KUJIRA_PREFIX || 'kujira'
  );

  const accountNumber = getNotNullOrThrowError<number>(
    process.env.TEST_KUJIRA_ACCOUNT_NUMBER || 0
  );

  const signer = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
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

  const [account] = await signer.getAccounts();

  const tokens = {
    1: 'KUJI',
    2: 'DEMO',
    3: 'USK',
  };

  const markets = {
    1: 'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh', // KUJI/DEMO
    2: 'kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6', // KUJI/USK
    3: 'kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg', // DEMO/USK
  };

  const rpcClient = new HttpBatchClient(rpcEndpoint, {
    dispatchInterval: 2000,
  });
  const client = await Tendermint34Client.create(rpcClient);
  const querier = kujiraQueryClient({ client });

  let request: any;
  let response: any;

  describe('Markets', async () => {
    it('Get one market', async () => {
      request = {};

      console.log(`request:`);
      console.log(request);

      response = null;

      console.log(`response:`);
      console.log(response);
    });

    it('Get two markets', async () => {
      console.log('');
    });

    it('Get all markets', async () => {
      console.log('');
    });
  });

  describe('Order books', async () => {
    it('Get one order book', async () => {
      console.log('');
    });

    it('Get two order books for two different markets', async () => {
      console.log('');
    });

    it('Get all order books', async () => {
      console.log('');
    });
  });

  describe('Tickers', async () => {
    it('Get one ticker', async () => {
      console.log('');
    });

    it('Get two tickers for two different markets', async () => {
      console.log('');
    });

    it('Get all tickers', async () => {
      console.log('');
    });
  });

  describe('Orders', async () => {
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
      console.log('');
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
      console.log('');
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
