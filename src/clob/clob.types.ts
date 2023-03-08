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
export type OwnerAddress = Address;
export type PayerAddress = Address;
export type FloatingNumber = number;
export type Price = FloatingNumber;
export type Amount = FloatingNumber;
export type Fee = FloatingNumber;
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
export type OrderOwnerAddress = OwnerAddress;
export type OrderPayerAddress = PayerAddress;
export type OrderPrice = Price;
export type OrderAmount = Amount;
export type OrderFee = Fee;
export type OrderFillingTimestamp = Timestamp;
export type OrderTransactionSignatures = TransactionSignatures;
export type OrderReplaceIfExists = boolean;

export type Fund = TransactionSignature;

export type FeeMaker = Fee;
export type FeeTaker = Fee;

export type MaxNumberOfFilledOrders = number;

export interface Market {
  id: MarketId;
  name: MarketName;
  minimumOrderSize: MarketMinimumOrderSize;
  tickSize: MarketTickSize;
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
  connectorOrderBook: ConnectorOrderBook;
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
  fundsSettlement?: TransactionSignature;
  creations?: TransactionSignature[];
  cancellations?: TransactionSignature[];
  fundsSettlements?: TransactionSignature[];
}

export interface MarketFee {
  maker: FeeMaker;
  taker: FeeTaker;
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
  | { marketId: string }
  | { marketIds: string[] };

export interface GetOrderBookResponse {
  market: GetMarketResponse;
  bids: Map<OrderId, GetOrderResponse>;
  asks: Map<OrderId, GetOrderResponse>;
}

export type GetOrderBooksResponse =
  | GetOrderBookResponse
  | IMap<MarketId, GetOrderBookResponse>;

export type GetTickersRequest = { marketId: string } | { marketIds: string[] };

export interface GetTickerResponse {
  price: TickerPrice;
  timestamp: TickerTimestamp;
}

export type GetTickersResponse =
  | GetTickerResponse
  | IMap<MarketId, GetTickerResponse>;

export interface GetOrderRequest {
  id?: OrderId;
  exchangeId?: OrderExchangeOrderId;
  marketId?: OrderMarketId;
  ownerAddress: OrderOwnerAddress;
  maxNumberOfFilledOrders?: MaxNumberOfFilledOrders;
}

export interface GetOrdersRequest {
  ids?: OrderId[];
  exchangeOrderIds?: OrderExchangeOrderId[];
  marketId?: OrderMarketId;
  ownerAddress: OrderOwnerAddress;
  maxNumberOfFilledOrders?: MaxNumberOfFilledOrders;
}

export interface GetOrderResponse {
  id?: OrderId;
  exchangeOrderId?: OrderExchangeOrderId;
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
  | IMap<OrderExchangeOrderId, GetOrderResponse>
  | IMap<MarketId, IMap<OrderExchangeOrderId, GetOrderResponse>>;

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
  exchangeOrderId?: OrderExchangeOrderId;
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
  | IMap<OrderExchangeOrderId, CreateOrderResponse>
  | IMap<MarketId, IMap<OrderExchangeOrderId, CreateOrderResponse>>;

export interface CancelOrderRequest {
  id?: OrderId;
  exchangeOrderId?: OrderExchangeOrderId;
  marketId: OrderMarketId;
  ownerAddress: OrderOwnerAddress;
}

export interface CancelOrdersRequest {
  ids?: OrderId[];
  exchangeOrderIds?: OrderExchangeOrderId[];
  marketId: MarketId;
  ownerAddress: OrderOwnerAddress;
}

export interface CancelOrderResponse {
  id?: OrderId;
  exchangeOrderId?: OrderExchangeOrderId;
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
  | IMap<OrderExchangeOrderId, CancelOrderResponse>
  | IMap<MarketId, IMap<OrderExchangeOrderId, CancelOrderResponse>>;

export interface GetOpenOrderRequest {
  id?: OrderId;
  exchangeOrderId?: OrderExchangeOrderId;
  marketId?: OrderMarketId;
  ownerAddress: OrderOwnerAddress;
}

export interface GetOpenOrdersRequest {
  ids?: OrderId[];
  exchangeOrderIds?: OrderExchangeOrderId[];
  marketId?: OrderMarketId;
  ownerAddress: OrderOwnerAddress;
}

export interface GetOpenOrderResponse {
  id?: OrderId;
  exchangeOrderId?: OrderExchangeOrderId;
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
  | IMap<OrderId, GetOpenOrderResponse>
  | IMap<MarketId, IMap<OrderExchangeOrderId, GetOpenOrderResponse>>;

export interface GetFilledOrderRequest {
  id?: OrderId;
  exchangeOrderId?: OrderExchangeOrderId;
  marketId?: OrderMarketId;
  ownerAddress: OrderOwnerAddress;
}

export interface GetFilledOrdersRequest {
  ids?: OrderId[];
  exchangeOrderIds?: OrderExchangeOrderId[];
  marketId?: OrderExchangeOrderId;
  ownerAddress?: OrderOwnerAddress;
  maxNumberOfFilledOrders?: MaxNumberOfFilledOrders;
}

export interface GetFilledOrderResponse {
  id?: OrderId;
  exchangeOrderId?: OrderExchangeOrderId;
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
  | IMap<OrderExchangeOrderId, GetFilledOrderResponse>
  | IMap<MarketId, IMap<OrderExchangeOrderId, GetFilledOrderResponse>>;

export type SettleFundsRequest =
  | { ownerAddress: OwnerAddress }
  | { marketId: MarketId; ownerAddress: OwnerAddress }
  | { marketIds: MarketId[]; ownerAddress: OwnerAddress };

export type PostSettleFundResponse = TransactionSignature[];

export type SettleFundsResponse =
  | PostSettleFundResponse
  | IMap<MarketId, PostSettleFundResponse>;

//
//  Errors
//

export class CLOBishError extends Error {}

export class MarketNotFoundError extends CLOBishError {}

export class TickerNotFoundError extends CLOBishError {}

export class OrderNotFoundError extends CLOBishError {}

export class FundsSettlementError extends CLOBishError {}
