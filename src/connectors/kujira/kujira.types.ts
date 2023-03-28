import { Denom, fin } from 'kujira.js';
import { ExecuteResult } from '@cosmjs/cosmwasm-stargate';

import { Map as ImmutableMap, Set as ImmutableSet } from 'immutable';
import { BigNumber } from 'bignumber.js';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { AccountData } from '@cosmjs/proto-signing/build/signer';
import { SigningStargateClient } from '@cosmjs/stargate';
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate/build/signingcosmwasmclient';

//
//  Types and Constants
//

export type FunctionType<Arguments, Return> = (...args: Arguments[]) => Return;

export type AsyncFunctionType<Arguments, Return> = (
  ...args: Arguments[]
) => Promise<Return>;

export type IMap<K, V> = ImmutableMap<K, V>;
export const IMap = ImmutableMap;
export type ISet<V> = ImmutableSet<V>;
export const ISet = ImmutableSet;

export type BasicKujiraToken = Denom;
export type BasicKujiraMarket = fin.Pair;
export type KujiraOrder = any;

export type KujiraOrderParams = any;
export type KujiraSettlement = ExecuteResult;

export type Address = string;
export type OwnerAddress = Address;
export type PayerAddress = Address;
// export type FloatingNumber = number;
export type Price = BigNumber;
export type Amount = BigNumber;
export type Fee = BigNumber;
export type Timestamp = number;
export type BlockNumber = number;

export type ConnectorMarket = any;
export type ConnectorTicker = any;
export type ConnectorOrderBook = any;
export type ConnectorOrder = any;

export type TokenId = Address;
export type TokenName = string;
export type TokenSymbol = string;
export type TokenDecimals = number;

export type MarketName = string;
export type MarketId = Address;
export type MarketProgramId = Address;
export type MarketDeprecation = boolean;
export type MarketMinimumOrderSize = BigNumber;
export type MarketTickSize = BigNumber;
export type MarketMinimumBaseIncrement = BigNumber;

export type TickerPrice = Price;
export type TickerTimestamp = Timestamp;

export type TransactionSignature = string;

export type OrderId = string;
export type OrderClientId = string;
export type OrderMarketName = MarketName;
export type OrderMarketId = MarketId;
export type OrderOwnerAddress = OwnerAddress;
export type OrderPayerAddress = PayerAddress;
export type OrderPrice = Price;
export type OrderAmount = Amount;
export type OrderFee = Fee;
export type OrderFillingTimestamp = Timestamp;
export type OrderTransactionSignatures = TransactionSignatures;
export type OrderReplaceIfExists = boolean;

export type Settlement = {
  signature: TransactionSignature;
};

export type FeeMaker = Fee;
export type FeeTaker = Fee;

export type EstimatedFeesToken = string;
export type EstimatedFeesPrice = Price;
export type EstimateFeesLimit = BigNumber;
export type EstimateFeesCost = BigNumber;

export type MaxNumberOfFilledOrders = number;

export type Mnemonic = string;
export type Password = string;
export type AccountNumber = number;

//
//  Enums
//

export enum OrderSide {
  BUY = 'BUY',
  SELL = 'SELL',
}

export enum OrderStatus {
  OPEN = 'OPEN',
  CANCELLED = 'CANCELLED',
  FILLED = 'FILLED',
  CREATION_PENDING = 'CREATION_PENDING',
  CANCELLATION_PENDING = 'CANCELLATION_PENDING',
  UNKNOWN = 'UNKNOWN',
}

export enum OrderType {
  MARKET = 'MARKET',
  LIMIT = 'LIMIT',
  IOC = 'IOC', // Immediate or Cancel
  POST_ONLY = 'POST_ONLY',
}

export enum TickerSource {
  ORDER_BOOK_SAP = 'orderBookSimpleAveragePrice',
  ORDER_BOOK_WAP = 'orderBookWeightedAveragePrice',
  ORDER_BOOK_VWAP = 'orderBookVolumeWeightedAveragePrice',
  LAST_FILLED_ORDER = 'lastFilledOrder',
  NOMICS = 'nomics',
}

//
//  Interfaces
//

export interface KujiraOrderBookItem {
  quote_price: string;
  offer_denom: {
    native: string;
  };
  total_offer_amount: string;
}

export interface KujiraOrderBook {
  base: KujiraOrderBookItem[];
  quote: KujiraOrderBookItem[];
}

export interface Token {
  id: TokenId;
  name: TokenName;
  symbol: TokenSymbol;

  decimals: TokenDecimals;
}

export interface Market {
  id: MarketId;
  name: MarketName;
  baseToken: Token;
  quoteToken: Token;

  /**
   *
   */
  minimumOrderSize: MarketMinimumOrderSize;

  /**
   *
   */
  tickSize: MarketTickSize;

  /**
   *
   */
  minimumBaseIncrement?: MarketMinimumBaseIncrement;
  fee: MarketFee;
  programId?: MarketProgramId;
  deprecated?: MarketDeprecation;
  connectorMarket: ConnectorMarket;
}

export interface OrderBook {
  market: Market;
  bids: IMap<OrderId, Order>;
  asks: IMap<OrderId, Order>;
  bestBid?: Order;
  bestAsk?: Order;
  connectorOrderBook: ConnectorOrderBook;
}

export interface Ticker {
  market: Market;
  price: TickerPrice;
  timestamp: TickerTimestamp;
  ticker: ConnectorTicker;
}

export interface Balance {
  token: Token | 'total';
  ticker?: Ticker;
  free: Amount;
  lockedInOrders: Amount;
  unsettled: Amount;
}

export interface Balances {
  tokens: IMap<TokenId, Balance>;
  total: Balance;
}

export interface Order {
  id?: OrderId;
  clientId?: OrderClientId; // Client custom id
  marketName: OrderMarketName;
  marketId: OrderMarketId;
  ownerAddress?: OrderOwnerAddress;
  payerAddress?: OrderPayerAddress;
  price: OrderPrice;
  amount: OrderAmount;
  side: OrderSide;
  status?: OrderStatus;
  type?: OrderType;
  fee?: OrderFee;
  fillingTimestamp?: OrderFillingTimestamp;
  signatures?: OrderTransactionSignatures;
  connectorOrder?: ConnectorOrder;
}

export interface TransactionSignatures {
  creation?: TransactionSignature;
  cancellation?: TransactionSignature;
  settlement?: TransactionSignature;
  creations?: TransactionSignature[];
  cancellations?: TransactionSignature[];
  settlements?: TransactionSignature[];
}

export interface MarketFee {
  maker: FeeMaker;
  taker: FeeTaker;
}

export interface EstimatedFees {
  token: EstimatedFeesToken;
  price: EstimatedFeesPrice;
  limit: EstimateFeesLimit;
  cost: EstimateFeesCost;
}

export interface Transaction {
  signature: TransactionSignature;
  blockNumber: number;
  gasUsed: number;
  gasWanted: number;
  code: number;
}

export interface BasicWallet {
  mnemonic: Mnemonic;

  accountNumber: AccountNumber;

  publicKey: Address;
}

export interface KujiraWalletArtifacts {
  publicKey: Address;

  accountData: AccountData;

  accountNumber: AccountNumber;

  directSecp256k1HdWallet: DirectSecp256k1HdWallet;

  signingStargateClient: SigningStargateClient;

  signingCosmWasmClient: SigningCosmWasmClient;

  finClients: IMap<MarketId, fin.FinClient>;
}

//
//  Errors
//

export class CLOBishError extends Error {}

export class TokenNotFoundError extends CLOBishError {}

export class MarketNotFoundError extends CLOBishError {}

export class TickerNotFoundError extends CLOBishError {}

export class OrderNotFoundError extends CLOBishError {}

export class SettlementError extends CLOBishError {}

//
//  Main methods options
//

export interface GetTokenOptions {
  id?: TokenId;
  symbol?: TokenSymbol;
}

export interface GetTokensOptions {
  ids?: TokenId[];

  symbols?: TokenSymbol[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetAllTokensOptions {}

export interface GetMarketOptions {
  id?: MarketId;
}

export interface GetMarketsOptions {
  ids?: MarketId[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetAllMarketsOptions extends GetMarketsOptions {}

export interface GetOrderBookOptions {
  marketId?: MarketId;
}

export interface GetOrderBooksOptions {
  marketIds?: MarketId[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetAllOrderBookOptions extends GetOrderBooksOptions {}

export interface GetTickerOptions {
  marketId?: MarketId;
}

export interface GetTickersOptions {
  marketIds?: MarketId[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetAllTickerOptions extends GetTickersOptions {}

export interface GetWalletArtifactsOptions {
  ownerAddress: OwnerAddress;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetBalanceOptions {
  tokenId: TokenId;

  ownerAddress: OwnerAddress;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetBalancesOptions {
  tokenIds: TokenId[];

  ownerAddress: OwnerAddress;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetAllBalancesOptions {
  ownerAddress: OwnerAddress;
}

export interface GetOrderOptions {
  id: OrderId;
  marketId?: MarketId;
  marketIds?: MarketId[];
  ownerAddress?: OrderOwnerAddress;
  status?: OrderStatus;
  statuses?: OrderStatus[];
}

export interface GetOrdersOptions {
  ids?: OrderId[];
  marketId?: MarketId;
  marketIds?: MarketId[];
  ownerAddresses: OrderOwnerAddress[];
  status?: OrderStatus;
  statuses?: OrderStatus[];
}

export interface PlaceOrderOptions {
  waitUntilIncludedInBlock?: boolean;
  marketId: MarketId;
  ownerAddress?: OrderOwnerAddress;
  side: OrderSide;
  price: OrderPrice;
  amount: OrderAmount;
  type: OrderType;
  payerAddress?: OrderPayerAddress;
}

export interface PlaceOrdersOptions {
  ownerAddress?: OrderOwnerAddress;
  waitUntilIncludedInBlock?: boolean;
  orders: PlaceOrderOptions[];
}

export interface CancelOrderOptions {
  id: OrderId;
  ownerAddress: OrderOwnerAddress;
  marketId: MarketId;
}

export interface CancelOrdersOptions {
  ids: OrderId[];
  marketId: MarketId;
  ownerAddresses: OrderOwnerAddress[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CancelAllOrdersOptions {
  marketId?: MarketId;
  marketIds?: MarketId[];
  ownerAddresses: OrderOwnerAddress[];
}

export interface SettlementOptions {
  marketId?: MarketId;
  ownerAddresses: OrderOwnerAddress[];
}

export interface SettlementsOptions {
  marketIds?: MarketId[];
  ownerAddresses: OrderOwnerAddress[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SettlementsAllOptions extends SettlementsOptions {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetCurrentBlockOptions {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetTransactionOptions {
  signature: TransactionSignature;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetTransactionsOptions {
  signatures: TransactionSignature[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetEstimatedFeesOptions {}

export interface GetWalletPublicKeyOptions {
  mnemonic: Mnemonic;
  accountNumber: AccountNumber;
}

export interface EncryptWalletOptions {
  wallet: BasicWallet;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DecryptWalletOptions {
  accountAddress: OwnerAddress;
}

//
// Requests subtypes
//

export type GetMarketsRequest = { id: MarketId } | { ids: MarketId[] };

export interface GetMarketResponse {
  id: MarketId;
  name: MarketName;
  minimumOrderSize: MarketMinimumOrderSize;
  tickSize: MarketTickSize;
  minimumBaseIncrement?: MarketMinimumBaseIncrement;
  fee: MarketFee;
  programId: MarketProgramId;
  deprecated: MarketDeprecation;
}

export type GetMarketsResponse =
  | GetMarketResponse
  | IMap<MarketId, GetMarketResponse>;

export type GetOrderBooksRequest =
  | { marketId: MarketId }
  | { marketIds: MarketId[] };

export interface GetOrderBookResponse {
  market: GetMarketResponse;
  bids: Map<OrderClientId, GetOrderResponse>;
  asks: Map<OrderClientId, GetOrderResponse>;
}

export type GetOrderBooksResponse =
  | GetOrderBookResponse
  | IMap<MarketId, GetOrderBookResponse>;

export type GetTickersRequest =
  | { marketId: MarketId }
  | { marketIds: MarketId[] };

export interface GetTickerResponse {
  price: TickerPrice;
  timestamp: TickerTimestamp;
}

export type GetTickersResponse =
  | GetTickerResponse
  | IMap<MarketId, GetTickerResponse>;

export interface GetOrdersRequest {
  id?: OrderId;
  ids?: OrderId[];
  clientId?: OrderClientId;
  clientIds?: OrderClientId[];
  marketId?: OrderMarketId;
  ownerAddress: OrderOwnerAddress;
  maxNumberOfFilledOrders?: MaxNumberOfFilledOrders;
}

export interface GetOrderResponse {
  id?: OrderId;
  clientId?: OrderClientId;
  marketId: MarketId;
  marketName: MarketName;
  ownerAddress?: OrderOwnerAddress;
  price: OrderPrice;
  amount: OrderAmount;
  side: OrderSide;
  status?: OrderStatus;
  type?: OrderType;
  fee?: Fee;
  fillingTimestamp?: OrderFillingTimestamp;
}

export type GetOrdersResponse =
  | GetOrderResponse
  | IMap<OrderClientId, GetOrderResponse>
  | IMap<MarketId, IMap<OrderClientId, GetOrderResponse>>;

export interface CreateOrdersRequest {
  id?: OrderId;
  marketId: OrderMarketId;
  ownerAddress: OrderOwnerAddress;
  payerAddress?: OrderPayerAddress;
  side: OrderSide;
  price: OrderPrice;
  amount: OrderAmount;
  type?: OrderType;
  replaceIfExists?: OrderReplaceIfExists;
}

export interface CreateOrderResponse {
  id?: OrderId;
  clientId?: OrderClientId;
  marketId: OrderMarketId;
  ownerAddress?: OrderOwnerAddress;
  price: OrderPrice;
  amount: OrderAmount;
  side: OrderSide;
  status?: OrderStatus;
  type?: OrderType;
  fee?: OrderFee;
  signature?: TransactionSignature;
}

export type CreateOrdersResponse =
  | CreateOrderResponse
  | IMap<OrderClientId, CreateOrderResponse>
  | IMap<MarketId, IMap<OrderClientId, CreateOrderResponse>>;

export interface CancelOrdersRequest {
  id?: OrderId;
  ids?: OrderId[];
  clientId?: OrderClientId;
  clientIds?: OrderClientId[];
  marketId: MarketId;
  ownerAddress: OrderOwnerAddress;
}

export interface CancelOrderResponse {
  id?: OrderId;
  clientId?: OrderClientId;
  marketId: OrderMarketId;
  ownerAddress: OrderOwnerAddress;
  price: OrderPrice;
  amount: OrderAmount;
  side: OrderSide;
  status?: OrderStatus;
  type?: OrderType;
  fee?: OrderFee;
  signatures?: TransactionSignatures;
}

export type CancelOrdersResponse =
  | CancelOrderResponse
  | IMap<OrderClientId, CancelOrderResponse>
  | IMap<MarketId, IMap<OrderClientId, CancelOrderResponse>>;

export interface GetOpenOrderRequest {
  id?: OrderId;
  clientId?: OrderClientId;
  marketId?: OrderMarketId;
  ownerAddress: OrderOwnerAddress;
}

export interface GetOpenOrdersRequest {
  ids?: OrderId[];
  clientIds?: OrderClientId[];
  marketId?: OrderMarketId;
  ownerAddress: OrderOwnerAddress;
}

export interface GetOpenOrderResponse {
  id?: OrderId;
  clientId?: OrderClientId;
  marketId: OrderMarketId;
  ownerAddress?: OrderOwnerAddress;
  price: OrderPrice;
  amount: OrderAmount;
  side: OrderSide;
  status?: OrderStatus;
  type?: OrderType;
  fee?: OrderFee;
  signatures?: OrderTransactionSignatures;
}

export type GetOpenOrdersResponse =
  | GetOpenOrderResponse
  | IMap<OrderClientId, GetOpenOrderResponse>
  | IMap<MarketId, IMap<OrderClientId, GetOpenOrderResponse>>;

export interface GetFilledOrdersRequest {
  id?: OrderId;
  ids?: OrderId[];
  clientId?: OrderClientId;
  clientIds?: OrderClientId[];
  marketId?: OrderClientId;
  ownerAddress?: OrderOwnerAddress;
  maxNumberOfFilledOrders?: MaxNumberOfFilledOrders;
}

export interface GetFilledOrderResponse {
  id?: OrderId;
  clientId?: OrderClientId;
  marketId: OrderMarketId;
  ownerAddress?: OrderOwnerAddress;
  price: OrderPrice;
  amount: OrderAmount;
  side: OrderSide;
  status?: OrderStatus;
  type?: OrderType;
  fee?: OrderFee;
  fillingTimestamp?: OrderFillingTimestamp;
  signatures?: OrderTransactionSignatures;
}

export type GetFilledOrdersResponse =
  | GetFilledOrderResponse
  | IMap<OrderClientId, GetFilledOrderResponse>
  | IMap<MarketId, IMap<OrderClientId, GetFilledOrderResponse>>;

export type PostSettlementRequest =
  | { ownerAddress: OwnerAddress }
  | { marketId: MarketId; ownerAddress: OwnerAddress }
  | { marketIds: MarketId[]; ownerAddress: OwnerAddress };

export type PostSettlementResponse = TransactionSignature[];

export type PostSettlementsResponse =
  | PostSettlementResponse
  | IMap<MarketId, PostSettlementResponse>;

//
// Extensions
//

export interface EstimatedGaResponse {
  gasPrice: number;
  gasPriceToken: string;
  gasLimit: number;
  gasCost: number;
}
