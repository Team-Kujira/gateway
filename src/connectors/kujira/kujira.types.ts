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
import { fin } from 'kujira.js';
import { JsonObject } from '@cosmjs/cosmwasm-stargate';

export type BasicKujiraMarket = fin.Pair;
export type KujiraOrder = any;
export type KujiraOrderBook = JsonObject;
export type KujiraOrderParams = any;

export enum TickerSource {
  NOMICS = 'nomics',
  ORDER_BOOK_SAP = 'orderBookSimpleAveragePrice',
  ORDER_BOOK_WAP = 'orderBookWeightedAverage',
  ORDER_BOOK_VWAP = 'orderBookVolumeWeightedAveragePrice',
  LAST_FILLED_ORDER = 'lastFilledOrder',
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
  marketId?: MarketId;
  marketIds?: [MarketId];
  ownerAddress?: OrderOwnerAddress;
  status?: OrderStatus;
  statuses?: [OrderStatus];
}

export interface GetOrdersOptions {
  exchangeOrderIds?: [OrderExchangeOrderId];
  marketId?: MarketId;
  marketIds?: [MarketId];
  ownerAddress?: OrderOwnerAddress;
  ownerAddresses?: [OrderOwnerAddress];
  status?: OrderStatus;
  statuses?: [OrderStatus];
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
  orders: [PlaceOrderOptions];
}

export interface CancelOrderOptions {
  exchangeOrderId: OrderExchangeOrderId;
  ownerAddress: OrderOwnerAddress;
  marketId: MarketId;
}

export interface CancelOrdersOptions {
  exchangeOrderIds?: [OrderExchangeOrderId];
  marketId: MarketId;
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
