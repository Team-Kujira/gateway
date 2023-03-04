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
  it('Get information from one market', async () => {
    console.log('Not implemented.');
  });

  it('Get information from several markets', async () => {
    console.log('Not implemented.');
  });

  it('Get information from all markets', async () => {
    console.log('Not implemented.');
  });

  it('Get the order book from one market', async () => {
    console.log('Not implemented.');
  });

  it('Get the order books from several markets', async () => {
    console.log('Not implemented.');
  });

  it('Get the order books from all markets', async () => {
    console.log('Not implemented.');
  });

  it('Get the ticker from one market', async () => {
    console.log('Not implemented.');
  });

  it('Get the tickers from several markets', async () => {
    console.log('Not implemented.');
  });

  it('Get the tickers from all markets', async () => {
    console.log('Not implemented.');
  });

  it('Get a open order by its exchange order id from any user', async () => {
    console.log('Not implemented.');
  });

  it('Get a cancelled order by its exchange order id from any user', async () => {
    console.log('Not implemented.');
  });

  it('Get a filled order by its exchange order id from any user', async () => {
    console.log('Not implemented.');
  });

  it('Get a order (open, filled or cancelled) by its exchange order id from any user', async () => {
    console.log('Not implemented.');
  });

  it('Get a open order by its exchange order id from a user', async () => {
    console.log('Not implemented.');
  });

  it('Get a cancelled order by its exchange order id from a user', async () => {
    console.log('Not implemented.');
  });

  it('Get a filled order by its exchange order id from a user', async () => {
    console.log('Not implemented.');
  });

  it('Get a order (open, filled or cancelled) by its exchange order id from a user', async () => {
    console.log('Not implemented.');
  });

  it('Get several open orders by theirs exchange orders ids from any users', async () => {
    console.log('Not implemented.');
  });

  it('Get several cancelled orders by theirs exchange orders ids from any users', async () => {
    console.log('Not implemented.');
  });

  it('Get several filled orders by theirs exchange orders ids from any users', async () => {
    console.log('Not implemented.');
  });

  it('Get several orders (open, filled or cancelled) by theirs exchange orders ids from any users', async () => {
    console.log('Not implemented.');
  });

  it('Get several open orders by theirs exchange orders ids from a user', async () => {
    console.log('Not implemented.');
  });

  it('Get several cancelled orders by theirs exchange orders ids from a user', async () => {
    console.log('Not implemented.');
  });

  it('Get several filled orders by theirs exchange orders ids from a user', async () => {
    console.log('Not implemented.');
  });

  it('Get several orders (open, filled or cancelled) by theirs exchange orders ids from a user', async () => {
    console.log('Not implemented.');
  });

  it('Get several open orders by theirs exchange orders ids from several users', async () => {
    console.log('Not implemented.');
  });

  it('Get several cancelled orders by theirs exchange orders ids from several users', async () => {
    console.log('Not implemented.');
  });

  it('Get several filled orders by theirs exchange orders ids from several users', async () => {
    console.log('Not implemented.');
  });

  it('Get several orders (open, filled or cancelled) by theirs exchange orders ids from several users', async () => {
    console.log('Not implemented.');
  });

  it('Get all open orders from any users', async () => {
    console.log('Not implemented.');
  });

  it('Get all cancelled orders from any users', async () => {
    console.log('Not implemented.');
  });

  it('Get all filled orders from any users', async () => {
    console.log('Not implemented.');
  });

  it('Get all orders (open, filled or cancelled) from any users', async () => {
    console.log('Not implemented.');
  });

  it('Get all open orders from a user', async () => {
    console.log('Not implemented.');
  });

  it('Get all cancelled orders from a user', async () => {
    console.log('Not implemented.');
  });

  it('Get all filled orders from a user', async () => {
    console.log('Not implemented.');
  });

  it('Get all orders (open, filled or cancelled) from a user', async () => {
    console.log('Not implemented.');
  });

  it('Get all open orders from several users', async () => {
    console.log('Not implemented.');
  });

  it('Get all cancelled orders from several users', async () => {
    console.log('Not implemented.');
  });

  it('Get all filled orders from several users', async () => {
    console.log('Not implemented.');
  });

  it('Get all orders (open, filled or cancelled) from several users', async () => {
    console.log('Not implemented.');
  });

  it('Create a buy order for a user and a market', async () => {
    console.log('Not implemented.');
  });

  it('Create a sell order for a user and a market', async () => {
    console.log('Not implemented.');
  });

  it('Create several orders (buy and sell) for a user and a market', async () => {
    console.log('Not implemented.');
  });

  it('Create several orders (buy and sell) for a user and several markets', async () => {
    console.log('Not implemented.');
  });

  it('Create several orders (buy and sell) for several users and several markets', async () => {
    console.log('Not implemented.');
  });

  it('Replace a buy order for a user and a market', async () => {
    console.log('Not implemented.');
  });

  it('Replace a sell order for a user and a market', async () => {
    console.log('Not implemented.');
  });

  it('Replace several orders (buy and sell) for a user and a market', async () => {
    console.log('Not implemented.');
  });

  it('Replace several orders (buy and sell) for a user and several markets', async () => {
    console.log('Not implemented.');
  });

  it('Replace several orders (buy and sell) for several users and several markets', async () => {
    console.log('Not implemented.');
  });

  it('Cancel a order from a user and a market', async () => {
    console.log('Not implemented.');
  });

  it('Cancel several orders from a user and a market', async () => {
    console.log('Not implemented.');
  });

  it('Cancel several orders from a user and a several markets', async () => {
    console.log('Not implemented.');
  });

  it('Cancel several orders from several users and a several markets', async () => {
    console.log('Not implemented.');
  });

  it('Cancel all orders from a user and a market', async () => {
    console.log('Not implemented.');
  });

  it('Cancel all orders from a user and a several markets', async () => {
    console.log('Not implemented.');
  });

  it('Cancel all orders from several users and a several markets', async () => {
    console.log('Not implemented.');
  });

  it('Settle funds for a user and a market', async () => {
    console.log('Not implemented.');
  });

  it('Settle funds for a user and a several markets', async () => {
    console.log('Not implemented.');
  });

  it('Settle funds for several users and a several markets', async () => {
    console.log('Not implemented.');
  });
});
