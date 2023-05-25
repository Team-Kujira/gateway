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
  AsyncFunctionType,
  Balances,
  IMap,
  Market,
  Order,
  OrderClientId,
  OrderFee,
  OrderMarketName,
  OrderSide,
  OrderType,
  OwnerAddress,
  RequestStrategy,
} from '../../../src/connectors/kujira/kujira.types';
import { Denom, fin, KUJI, TESTNET } from 'kujira.js';
import { addWallet } from '../../../src/services/wallet/wallet.controllers';
import { AddWalletRequest } from '../../../src/services/wallet/wallet.requests';
import { getNotNullOrThrowError } from '../../../src/connectors/kujira/kujira.helpers';
import {
  createPatches,
  disableInputOutputWrapper,
  disablePatches,
  enableInputOutputWrapper,
  enablePatches,
  getPatch as helperGetPatch,
} from './fixtures/patches/patches';
import { ConfigManagerV2 } from '../../../src/services/config-manager-v2';
import { KujiraRoutes } from '../../../src/connectors/kujira/kujira.routes';
import express from 'express';
import { Express } from 'express-serve-static-core';

enablePatches();
disablePatches();
enablePatches();

enableInputOutputWrapper();
disableInputOutputWrapper();
enableInputOutputWrapper();

let patches: IMap<string, AsyncFunctionType<any, any>>;

jest.setTimeout(30 * 60 * 1000);

let getPatch: any;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
let sendRequest: SendRequestFunction;

let testTitle: string;
let logRequest: (target: any) => void;
let logResponse: (target: any) => void;
// let logOutput: (target: any) => void;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let allTokens: any;

let kujira: Kujira;

const config = KujiraConfig.config;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const kujiToken = KUJI;

const tokenIds = {
  1: 'ukuji', // KUJI
  2: 'factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo', // DEMO
  3: 'factory/kujira1r85reqy6h0lu02vyz0hnzhv5whsns55gdt4w0d7ft87utzk7u0wqr4ssll/uusk', // USK
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const transactionsHashes = {
  1: 'D5C9B4FBD06482C1B40CEA3B1D10E445049F1F19CA5531265FC523973CC65EF9',
  2: '50F44E09A0617E7506B4F78886C4828A05FC84141A6BB57DA1B87A03EF4ADB91',
  3: '66DBF37EAE15E28AD70E3292216DEE3D6B61E5C5913EBCE584E4971D2A6A2F2B',
};

const orders: IMap<OrderClientId, Order> = IMap<
  OrderClientId,
  Order
>().asMutable();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let userBalances: Balances;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars, prefer-const
let lastPayedFeeSum: OrderFee = BigNumber(0);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

describe('Playground', () => {
  it('Playground 01', async () => {
    const request = {};

    logRequest(request);

    const response = await kujira.kujiraGetBasicMarkets();

    logResponse(response);
  });
});
