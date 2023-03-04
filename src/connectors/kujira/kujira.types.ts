export type MarketAddress = string;
export type ExchangeOrderId = number;
export type WalletAddress = string;
export type Price = number;
export type Amount = number;

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
  LIMIT = 'LIMIT',
}

export interface GetMarketOptions {
  id?: MarketAddress;
}

export interface GetMarketsOptions {
  ids?: [MarketAddress];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetAllMarketsOptions {}

export interface GetOrderBookOptions {
  marketId?: MarketAddress;
}

export interface GetOrderBooksOptions {
  marketIds?: [MarketAddress];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetAllOrderBookOptions {}

export interface GetTickerOptions {
  marketId?: MarketAddress;
}

export interface GetTickersOptions {
  marketIds?: [MarketAddress];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetAllTickerOptions {}

export interface GetOrderOptions {
  exchangeOrderId: ExchangeOrderId;

  ownerAddress?: WalletAddress;

  status?: OrderStatus;
}

export interface GetOrdersOptions {
  exchangeOrderIds?: [ExchangeOrderId];

  ownerAddresses?: [WalletAddress];

  statuses?: [OrderStatus];
}

export interface PlaceOrderOptions {
  waitUntilIncludedInBlock?: boolean;
  marketId: MarketAddress;
  ownerAddress: WalletAddress;
  side: OrderSide;
  price: Price;
  amount: Amount;
  type: OrderType;
  payerAddress?: WalletAddress;
}

export interface PlaceOrdersOptions {
  waitUntilIncludedInBlock?: boolean;
  orders: [PlaceOrderOptions];
}

export interface CancelOrderOptions {
  exchangeOrderId: ExchangeOrderId;

  ownerAddress: WalletAddress;
}

export interface CancelOrdersOptions {
  exchangeOrderIds?: [ExchangeOrderId];

  ownerAddress: [WalletAddress];
}

export interface SettleFundsOptions {
  marketId?: MarketAddress;

  ownerAddress: [WalletAddress];
}

export interface SettleSeveralFundsOptions {
  marketIds?: [MarketAddress];

  ownerAddress: [WalletAddress];
}
