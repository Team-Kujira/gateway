import { Map as ImmutableMap, Set as ImmutableSet } from 'immutable';

export type FunctionType<Arguments, Return> = (...args: Arguments[]) => Return;

export type AsyncFunctionType<Arguments, Return> = (
  ...args: Arguments[]
) => Promise<Return>;

export type IMap<K, V> = ImmutableMap<K, V>;
export const IMap = ImmutableMap;
export type ISet<V> = ImmutableSet<V>;
export const ISet = ImmutableSet;

export enum OrderSide {
  BUY = 'BUY',
  SELL = 'SELL',
}

export enum OrderStatus {
  OPEN = 'OPEN',
  CANCELLED = 'CANCELLED', // TODO Fix remaining references!!!
  FILLED = 'FILLED',
  CREATION_PENDING = 'CREATION_PENDING',
  CANCELLATION_PENDING = 'CANCELLATION_PENDING', // TODO Fix remaining references!!!
  UNKNOWN = 'UNKNOWN',
}

export enum OrderType {
  MARKET = 'MARKET',
  LIMIT = 'LIMIT',
  IOC = 'IOC', // Immediate or Cancel
  POST_ONLY = 'POST_ONLY',
}

export type Address = string;
export type FloatingNumber = number;
export type Price = FloatingNumber;
export type Amount = FloatingNumber;
export type Timestamp = number;

export type ConnectorMarket = any;
export type ConnectorTicker = any;
export type ConnectorOrderBook = any;
export type ConnectorOrder = any;

export type MarketName = string;
export type MarketId = Address;
export type MarketProgramId = Address;
export type MarketDeprecation = boolean;
export type MarketMinimumOrderSize = FloatingNumber;
export type MarketTickSize = FloatingNumber;
export type MarketMinimumBaseIncrement = FloatingNumber;

export type TickerPrice = FloatingNumber;
export type TickerTimestamp = Timestamp;

export type TransactionSignature = string;

export type OrderId = string;
export type OrderExchangeOrderId = string;
export type OrderMarketName = MarketName;
export type OrderMarketId = MarketId;
export type OrderOwnerAddress = Address;
export type OrderPayerAddress = Address;
export type OrderPrice = Price;
export type OrderAmount = Amount;
export type OrderFillmentTimestamp = Timestamp;
export type OrderTransactionSignatures = TransactionSignatures;

export type Fund = TransactionSignature;

export type FeeMaker = FloatingNumber;
export type FeeTaker = FloatingNumber;

export interface Market {
  name: MarketName;
  address: MarketId;
  programId: MarketProgramId;
  deprecated: MarketDeprecation;
  minimumOrderSize: MarketMinimumOrderSize;
  tickSize: MarketTickSize;
  minimumBaseIncrement?: MarketMinimumBaseIncrement;
  fees: Fee;
  market: ConnectorMarket;
}

export interface OrderBook {
  market: Market;
  bids: IMap<string, Order>;
  asks: IMap<string, Order>;
  orderBook: ConnectorOrderBook;
}

export interface Ticker {
  price: TickerPrice;
  timestamp: TickerTimestamp;
  ticker: ConnectorTicker;
}

export interface Order {
  id?: OrderId; // Client custom id
  exchangeOrderId?: OrderExchangeOrderId;
  marketName: OrderMarketName;
  marketAddress: OrderMarketId;
  ownerAddress?: OrderOwnerAddress;
  payerAddress?: OrderPayerAddress;
  price: OrderPrice;
  amount: OrderAmount;
  side: OrderSide;
  status?: OrderStatus;
  type?: OrderType;
  fillmentTimestamp?: OrderFillmentTimestamp;
  signatures?: OrderTransactionSignatures;
  order?: ConnectorOrder;
}

export interface TransactionSignatures {
  creation?: TransactionSignature;
  cancellation?: TransactionSignature;
  fundsSettlement?: TransactionSignature;
  creations?: TransactionSignature[];
  cancellations?: TransactionSignature[];
  fundsSettlements?: TransactionSignature[];
}

export interface Fee {
  maker: FeeMaker;
  taker: FeeTaker;
}

//
// Requests subtypes
//

export type GetMarketsRequest =
  | Record<string, never>
  | { name: string }
  | { names: string[] };

export interface GetMarketResponse {
  name: string;
  address: Address;
  programId: Address;
  deprecated: boolean;
  minimumOrderSize: number;
  tickSize: number;
  minimumBaseIncrement?: string;
  fees: Fee;
}

export type GetMarketsResponse =
  | IMap<string, GetMarketResponse>
  | GetMarketResponse;

export type GetOrderBooksRequest =
  | Record<string, never>
  | { marketName: string }
  | { marketNames: string[] };

export interface GetOrderBookResponse {
  market: GetMarketResponse;
  bids: Map<string, GetOrderResponse>;
  asks: Map<string, GetOrderResponse>;
}

export type GetOrderBooksResponse =
  | IMap<string, GetOrderBookResponse>
  | GetOrderBookResponse;

export type GetTickersRequest =
  | Record<string, never>
  | { marketName: string }
  | { marketNames: string[] };

export interface GetTickerResponse {
  price: number;
  timestamp: number;
}

export type GetTickersResponse =
  | IMap<string, GetTickerResponse>
  | GetTickerResponse;

export interface GetOrderRequest {
  id?: string;
  exchangeId?: string;
  marketName?: string;
  ownerAddress: string;
  limit?: number;
}

export interface GetOrdersRequest {
  ids?: string[];
  exchangeIds?: string[];
  marketName?: string;
  ownerAddress: string;
  limit?: number;
}

export interface GetOrderResponse {
  id?: string;
  exchangeId?: string;
  marketName: string;
  ownerAddress?: string;
  price: number;
  amount: number;
  side: OrderSide;
  status?: OrderStatus;
  type?: OrderType;
  fee?: number;
  fillmentTimestamp?: number;
}

export type GetOrdersResponse =
  | IMap<string, IMap<string, GetOrderResponse>>
  | IMap<string, GetOrderResponse>
  | GetOrderResponse;

export interface CreateOrdersRequest {
  id?: string;
  marketName: string;
  ownerAddress: string;
  payerAddress?: string;
  side: OrderSide;
  price: number;
  amount: number;
  type?: OrderType;
  replaceIfExists?: boolean;
}

export interface CreateOrderResponse {
  id?: string;
  exchangeId?: string;
  marketName: string;
  ownerAddress?: string;
  price: number;
  amount: number;
  side: OrderSide;
  status?: OrderStatus;
  type?: OrderType;
  fee?: number;
  signature?: TransactionSignature;
}

export type CreateOrdersResponse =
  | IMap<string, CreateOrderResponse>
  | CreateOrderResponse;

export interface CancelOrderRequest {
  id?: string;
  exchangeId?: string;
  marketName: string;
  ownerAddress: string;
}

export interface CancelOrdersRequest {
  ids?: string[];
  exchangeIds?: string[];
  marketName: string;
  ownerAddress: string;
}

export interface CancelOrderResponse {
  id?: string;
  exchangeId?: string;
  marketName: string;
  ownerAddress: string;
  price: number;
  amount: number;
  side: OrderSide;
  status?: OrderStatus;
  type?: OrderType;
  fee?: number;
  signatures?: TransactionSignatures;
}

export type CancelOrdersResponse =
  | IMap<string, CancelOrderResponse>
  | CancelOrderResponse;

export interface GetOpenOrderRequest {
  id?: string;
  exchangeId?: string;
  marketName?: string;
  ownerAddress: string;
}

export interface GetOpenOrdersRequest {
  ids?: string[];
  exchangeIds?: string[];
  marketName?: string;
  ownerAddress: string;
}

export interface GetOpenOrderResponse {
  id?: string;
  exchangeId?: string;
  marketName: string;
  ownerAddress?: string;
  price: number;
  amount: number;
  side: OrderSide;
  status?: OrderStatus;
  type?: OrderType;
  fee?: number;
}

export type GetOpenOrdersResponse =
  | IMap<string, IMap<string, GetOpenOrderResponse>>
  | IMap<string, GetOpenOrderResponse>
  | GetOpenOrderResponse;

export interface GetFilledOrderRequest {
  id?: string;
  exchangeId?: string;
  marketName?: string;
  ownerAddress: string;
}

export interface GetFilledOrdersRequest {
  ids?: string[];
  exchangeIds?: string[];
  marketName?: string;
  // ownerAddress?: string;
  limit?: number;
}

export interface GetFilledOrderResponse {
  id?: string;
  exchangeId?: string;
  marketName: string;
  // ownerAddress?: string;
  price: number;
  amount: number;
  side: OrderSide;
  status?: OrderStatus;
  type?: OrderType;
  fee?: number;
  fillmentTimestamp?: number;
}

export type GetFilledOrdersResponse =
  | IMap<string, IMap<string, GetFilledOrderResponse>>
  | IMap<string, GetFilledOrderResponse>
  | GetFilledOrderResponse;

export type SettleFundsRequest =
  | { ownerAddress: string }
  | { marketName: string; ownerAddress: string }
  | { marketNames: string[]; ownerAddress: string };

export type PostSettleFundResponse = Fund[];

export type SettleFundsResponse =
  | IMap<string, PostSettleFundResponse>
  | PostSettleFundResponse;

//
//  Errors
//

export class CLOBishError extends Error {}

export class MarketNotFoundError extends CLOBishError {}

export class TickerNotFoundError extends CLOBishError {}

export class OrderNotFoundError extends CLOBishError {}

export class FundsSettlementError extends CLOBishError {}
