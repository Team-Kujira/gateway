import { fin } from 'kujira.js';
import { ExecuteResult, JsonObject } from '@cosmjs/cosmwasm-stargate';

import { Map as ImmutableMap, Set as ImmutableSet } from 'immutable';

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

export type BasicKujiraMarket = fin.Pair;
export type KujiraOrder = any;
export type KujiraOrderBook = JsonObject;
export type KujiraOrderParams = any;
export type KujiraSettleFund = ExecuteResult;

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

export type SettleFund = TransactionSignature;

export type FeeMaker = Fee;
export type FeeTaker = Fee;

export type MaxNumberOfFilledOrders = number;

export type ClobPostOrderRequest = ClobPostOrderRequest;
export const ClobPostOrderRequest = ClobPostOrderRequest;

// Needed for type comparisons if the definitions are not changed.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const ClobDeleteOrderRequest = ClobDeleteOrderRequest;

//
//  Enums
//

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
  bestBid?: Order;
  bestAsk?: Order;
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
//  Errors
//

export class CLOBishError extends Error {}

export class MarketNotFoundError extends CLOBishError {}

export class TickerNotFoundError extends CLOBishError {}

export class OrderNotFoundError extends CLOBishError {}

export class FundsSettlementError extends CLOBishError {}

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

export interface GetOrderOptions {
  exchangeOrderId: OrderExchangeOrderId;
  marketId?: MarketId;
  marketIds?: MarketId[];
  ownerAddress?: OrderOwnerAddress;
  status?: OrderStatus;
  statuses?: OrderStatus[];
}

export interface GetOrdersOptions {
  exchangeOrderIds?: OrderExchangeOrderId[];
  marketId?: MarketId;
  marketIds?: MarketId[];
  ownerAddress?: OrderOwnerAddress;
  ownerAddresses?: OrderOwnerAddress[];
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
  waitUntilIncludedInBlock?: boolean;
  orders: PlaceOrderOptions[];
}

export interface CancelOrderOptions {
  exchangeOrderId: OrderExchangeOrderId;
  ownerAddress: OrderOwnerAddress;
  marketId: MarketId;
}

export interface CancelOrdersOptions {
  exchangeOrderIds: OrderExchangeOrderId[];
  marketId: MarketId;
  ownerAddresses?: OrderOwnerAddress[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CancelAllOrdersOptions extends CancelOrdersOptions {
  marketId: MarketId;
  marketIds: MarketId[];
  ownerAddresses?: OrderOwnerAddress[];
}

export interface SettleFundsOptions {
  marketId?: MarketId;
  ownerAddresses: OrderOwnerAddress[];
}

export interface SettleSeveralFundsOptions {
  marketIds?: MarketId[];
  ownerAddresses: OrderOwnerAddress[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SettleAllFundsOptions extends SettleSeveralFundsOptions {}
