import {
  MarketId,
  OrderAmount,
  OrderExchangeOrderId,
  OrderOwnerAddress,
  OrderPayerAddress,
  OrderPrice,
  OrderSide,
  OrderStatus,
  OrderType,
} from '../../clob/clob.types';
import { Market as ExtendedMarket } from './extensions/market';

export type KujiraMarket = ExtendedMarket;
export const KujiraMarket = ExtendedMarket;
export type BasicKujiraMarket = any;
export type KujiraOrder = any;
export type KujiraOrderBook = any;
export type KujiraOrderParams = any;
export type Address = string;
export type ChainID = string;
export type Denom = any[];
export type Denoms = [Denom, Denom];
export type Precision = any[];
export type DecimalDelta = number;
export type MultiSwap = boolean;
export type Pool = string;
export type Queue = string;
export type Calc = string;

// export type KujiraMarket = {
//   address: Address;
//   chainID: ChainID;
//   denoms: Denoms;
//   precision: Precision;
//   decimalDelta: DecimalDelta;
//   multiswap: MultiSwap;
//   pool: Pool;
//   queue: Queue;
//   calc: Calc;
// };

export enum TickerSource {
  NOMIMCS = 'nomics',
  ORDER_BOOK = 'orderBook',
}

export interface GetMarketOptions {
  id?: MarketId;
}

export interface GetMarketsOptions {
  ids?: [MarketId];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetAllMarketsOptions extends GetMarketsOptions {}

export interface GetOrderBookOptions {
  marketId?: MarketId;
}

export interface GetOrderBooksOptions {
  marketIds?: [MarketId];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetAllOrderBookOptions extends GetOrderBooksOptions {}

export interface GetTickerOptions {
  marketId?: MarketId;
}

export interface GetTickersOptions {
  marketIds?: [MarketId];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GetAllTickerOptions extends GetTickersOptions {}

export interface GetOrderOptions {
  exchangeOrderId: OrderExchangeOrderId;
  ownerAddress?: OrderOwnerAddress;
  status?: OrderStatus;
}

export interface GetOrdersOptions {
  exchangeOrderIds?: [OrderExchangeOrderId];
  ownerAddresses?: [OrderOwnerAddress];
  statuses?: [OrderStatus];
}

export interface PlaceOrderOptions {
  waitUntilIncludedInBlock?: boolean;
  marketId: MarketId;
  ownerAddress: OrderOwnerAddress;
  side: OrderSide;
  price: OrderPrice;
  amount: OrderAmount;
  type: OrderType;
  payerAddress?: OrderPayerAddress;
}

export interface PlaceOrdersOptions {
  waitUntilIncludedInBlock?: boolean;
  orders: [PlaceOrderOptions];
}

export interface CancelOrderOptions {
  exchangeOrderId: OrderExchangeOrderId;
  ownerAddress: OrderOwnerAddress;
}

export interface CancelOrdersOptions {
  exchangeOrderIds?: [OrderExchangeOrderId];
  ownerAddresses: [OrderOwnerAddress];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CancelAllOrdersOptions extends CancelOrdersOptions {}

export interface SettleFundsOptions {
  marketId?: MarketId;
  ownerAddresses: [OrderOwnerAddress];
}

export interface SettleSeveralFundsOptions {
  marketIds?: [MarketId];
  ownerAddresses: [OrderOwnerAddress];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SettleAllFundsOptions extends SettleSeveralFundsOptions {}
