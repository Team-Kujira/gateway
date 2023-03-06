// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'jest-extended';
import {
  getNotNullOrThrowError,
  log as helperLog,
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
  KujiraQueryClient,
  kujiraQueryClient,
  registry,
  TESTNET,
} from 'kujira.js';
import { GasPrice, SigningStargateClient } from '@cosmjs/stargate';

import { Map as ImmutableMap } from 'immutable';

jest.setTimeout(30 * 60 * 1000);

let account: AccountData;
let querier: KujiraQueryClient;
let stargateClient: SigningStargateClient;

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
let log: (target: any) => void;
let logRequest: (target: any) => void;
let logResponse: (target: any) => void;
let logOutput: (target: any) => void;

let network: string;

const getMarket = (ordinal: number) =>
  getNotNullOrThrowError<Record<any, any>>(allowedMarkets.get(ordinal));

const getOrder = (ordinal: number) =>
  getNotNullOrThrowError<Record<any, any>>(orders.get(ordinal));

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
});

beforeEach(async () => {
  testTitle = expect.getState().currentTestName;
  log = (target: any) => helperLog(target, testTitle);
  logRequest = (target: any) => helperLogRequest(target, testTitle);
  logResponse = (target: any) => helperLogResponse(target, testTitle);
  logOutput = (target: any) => helperLogOutput(target, testTitle);
});

describe('Cosmos and Kujira Use Cases', () => {
  it('#01 - Get information from one market', async () => {
    console.log('Not implemented.'); // TODO (PARTIAL) The response haven't information as "minimumOrderSize" and "tickSize"!!!
  });

  it('#02 - Get information from several markets', async () => {
    console.log('Not implemented.'); // TODO (YES(If Single)) If we have a market list, we can get information from that markets using the single getter method!!!
  });

  it('#03 - Get information from all markets', async () => {
    console.log('Not implemented.'); // TODO (PARTIAL) We have not a complete list of markets yet. We can get information only from the markets listed in pairs.ts!!!
  });

  it('#04 - Get the order book from one market', async () => {
    console.log('Not implemented.'); // TODO (PARTIAL) We can get the order book, but the orders in the response haven't informations like "orderExchangeId", "status" and "owner"!!!
  });

  it('#05 - Get the order books from several markets', async () => {
    console.log('Not implemented.'); // TODO (YES(If Single)) Not implemented, but we can use the single method!!!
  });

  it('#06 - Get the order books from all markets', async () => {
    console.log('Not implemented.'); // TODO (YES(If Single)) Not implemented, but we can use the single method!!!
  });

  it('#07 - Get the ticker from one market', async () => {
    console.log('Not implemented.'); // TODO (YES(MAIN)) The response don't have timestamp of the sample!!!
  });

  it('#08 - Get the tickers from several markets', async () => {
    console.log('Not implemented.'); // TODO (YES(If Single)) If we have a market list, we can get information from that markets using the single getter method!!!
  });

  it('#09 - Get the tickers from all markets', async () => {
    console.log('Not implemented.'); // TODO (PARTIAL) We have not a complete list of markets yet. We can get information only from the markets listed in pairs.ts!!!
  });

  it('#10 - Get an open order by its exchange order id from any user', async () => {
    console.log('Not implemented.'); // TODO (YES) Using the 'order_idx', we can get an open order of any owner. Also we can use 'orders_by_user' query to return the orders of an specific owner!!!
  });

  it('#11 - Get a cancelled order by its exchange order id from any user', async () => {
    console.log('Not implemented.'); // TODO (NO) The chain API don't implements this feature!!!
  });

  it('#12 - Get a filled order by its exchange order id from any user', async () => {
    console.log('Not implemented.'); // TODO (YES) We can get the totally filled orders verifying if the 'offer_amount' equal to zero!!!
  });

  it('#13 - Get an order (open, filled or cancelled) by its exchange order id from any user', async () => {
    console.log('Not implemented.'); // TODO (YES) We can get open and filled orders by the 'order_idx', but cancelled orders is not possible!!!
  });

  it('#14 - Get an open order by its exchange order id from an user', async () => {
    console.log('Not implemented.'); // TODO (YES) With the 'order_idx', we can get an open order of any owner verifying if the order 'offer_amount' not equals to zero. If 'offer_amount' is zero, the order is totally filled!!!
  });

  it('#15 - Get a cancelled order by its exchange order id from an user', async () => {
    console.log('Not implemented.'); // TODO (NO) The chain API removed this feature!!!
  });

  it('#16 - Get a filled order by its exchange order id from an user', async () => {
    console.log('Not implemented.'); // TODO (YES) We can get any order by the 'order_idx', then if its 'offer_amount' equals to zero, represents that is a totally filled order!!!
  });

  it('#17 - Get an order (open, filled or cancelled) by its exchange order id from an user', async () => {
    console.log('Not implemented.'); // TODO (YES) Having the 'order_idx', we can get an open or a filled order for any user, but we can not get cancelled orders because chain API don't implements this feature!!!
  });

  it('#18 - Get several open orders by theirs exchange orders ids from any users', async () => {
    console.log('Not implemented.'); // TODO (YES) We can use single methods of tests #10, #14 and #17!!!
  });

  it('#19 - Get several cancelled orders by theirs exchange orders ids from any users', async () => {
    console.log('Not implemented.'); // TODO (NO) Equal to tests #11 and #15!!!
  });

  it('#20 - Get several filled orders by theirs exchange orders ids from any users', async () => {
    console.log('Not implemented.'); // TODO (Yes) We can use single methods from tests #12, #13 and #16!!!
  });

  it('#21 - Get several orders (open, filled or cancelled) by theirs exchange orders ids from any users', async () => {
    console.log('Not implemented.'); // TODO (Partially) Equal to tests #18 and #20!!!
  });

  it('#22 - Get several open orders by theirs exchange orders ids from an user', async () => {
    console.log('Not implemented.'); // TODO (YES) Equal to test #18!!!
  });

  it('#23 - Get several cancelled orders by theirs exchange orders ids from an user', async () => {
    console.log('Not implemented.'); // TODO (No) Equal to test #19!!!
  });

  it('#24 - Get several filled orders by theirs exchange orders ids from a user', async () => {
    console.log('Not implemented.'); // TODO (YES) Equal to test #20!!!
  });

  it('#25 - Get several orders (open, filled or cancelled) by theirs exchange orders ids from an user', async () => {
    console.log('Not implemented.'); // TODO (YES) Equal to test #21!!!
  });

  it('#26 - Get several open orders by theirs exchange orders ids from several users', async () => {
    console.log('Not implemented.'); // TODO (YES) Equal to test #22!!!
  });

  it('#27 - Get several cancelled orders by theirs exchange orders ids from several users', async () => {
    console.log('Not implemented.'); // TODO (NO) Equal to test #23!!!
  });

  it('#28 - Get several filled orders by theirs exchange orders ids from several users', async () => {
    console.log('Not implemented.'); // TODO (YES) Equal to test #20!!!
  });

  it('#29 - Get several orders (open, filled or cancelled) by theirs exchange orders ids from several users', async () => {
    console.log('Not implemented.'); // TODO (YES) Equal to test #21!!!
  });

  it('#30 - Get all open orders from any users', async () => {
    console.log('Not implemented.'); // TODO (YES) We can use query like "orders_by_user" to get!!!
  });

  it('#31 - Get all cancelled orders from any users', async () => {
    console.log('Not implemented.');
  });

  it('#32 - Get all filled orders from any users', async () => {
    console.log('Not implemented.');
  });

  it('#33 - Get all orders (open, filled or cancelled) from any users', async () => {
    console.log('Not implemented.');
  });

  it('#34 - Get all open orders from an user', async () => {
    console.log('Not implemented.');
  });

  it('#35 - Get all cancelled orders from an user', async () => {
    console.log('Not implemented.');
  });

  it('#36 - Get all filled orders from an user', async () => {
    console.log('Not implemented.');
  });

  it('#37 - Get all orders (open, filled or cancelled) from an user', async () => {
    console.log('Not implemented.');
  });

  it('#38 - Get all open orders from several users', async () => {
    console.log('Not implemented.');
  });

  it('#39 - Get all cancelled orders from several users', async () => {
    console.log('Not implemented.');
  });

  it('#40 - Get all filled orders from several users', async () => {
    console.log('Not implemented.');
  });

  it('#41 - Get all orders (open, filled or cancelled) from several users', async () => {
    console.log('Not implemented.');
  });

  it('#42 - Create a buy order for a user and a market', async () => {
    console.log('Not implemented.');
  });

  it('#43 - Create a sell order for a user and a market', async () => {
    console.log('Not implemented.');
  });

  it('#44 - Create several orders (buy and sell) for an user and a market', async () => {
    console.log('Not implemented.');
  });

  it('#45 - Create several orders (buy and sell) for an user and several markets', async () => {
    console.log('Not implemented.');
  });

  it('#46 - Create several orders (buy and sell) for several users and several markets', async () => {
    console.log('Not implemented.');
  });

  it('#47 - Replace a buy order for an user and a market', async () => {
    console.log('Not implemented.');
  });

  it('#48 - Replace a sell order for an user and a market', async () => {
    console.log('Not implemented.');
  });

  it('#49 - Replace several orders (buy and sell) for an user and a market', async () => {
    console.log('Not implemented.');
  });

  it('#50 - Replace several orders (buy and sell) for an user and several markets', async () => {
    console.log('Not implemented.');
  });

  it('#51 - Replace several orders (buy and sell) for several users and several markets', async () => {
    console.log('Not implemented.');
  });

  it('#52 - Cancel an order from an user and a market', async () => {
    console.log('Not implemented.');
  });

  it('#53 - Cancel several orders from an user and a market', async () => {
    console.log('Not implemented.');
  });

  it('#54 - Cancel several orders from an user and a several markets', async () => {
    console.log('Not implemented.');
  });

  it('#55 - Cancel several orders from several users and a several markets', async () => {
    console.log('Not implemented.');
  });

  it('#56 - Cancel all orders from an user and a market', async () => {
    console.log('Not implemented.');
  });

  it('#57 - Cancel all orders from an user and a several markets', async () => {
    console.log('Not implemented.');
  });

  it('#58 - Cancel all orders from several users and a several markets', async () => {
    console.log('Not implemented.');
  });

  it('#59 - Settle funds for an user and a market', async () => {
    console.log('Not implemented.');
  });

  it('#60 - Settle funds for an user and a several markets', async () => {
    console.log('Not implemented.');
  });

  it('#61 - Settle funds for several users and a several markets', async () => {
    console.log('Not implemented.');
  });
});
