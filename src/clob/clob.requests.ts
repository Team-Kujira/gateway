import { NetworkSelectionRequest } from '../services/common-interfaces';
import {
  CancelOrderRequest,
  CancelOrdersRequest,
  CancelOrdersResponse,
  CreateOrdersRequest,
  CreateOrdersResponse,
  GetFilledOrderRequest,
  GetFilledOrdersRequest,
  GetFilledOrdersResponse,
  GetMarketsRequest,
  GetMarketsResponse,
  GetOpenOrderRequest,
  GetOpenOrdersRequest,
  GetOpenOrdersResponse,
  GetOrderBooksRequest,
  GetOrderBooksResponse,
  GetOrderRequest,
  GetOrdersRequest,
  GetOrdersResponse,
  GetTickersRequest,
  GetTickersResponse,
  MaxNumberOfFilledOrders,
  OrderMarketId,
  OrderOwnerAddress,
  OrderReplaceIfExists,
  SettleFundsRequest,
  SettleFundsResponse,
} from './clob.types';

//
// GET /clob/markets
//

export type CLOBGetMarketsRequest = NetworkSelectionRequest & GetMarketsRequest;

export type CLOBGetMarketsResponse = GetMarketsResponse;

//
// GET /clob/orderBooks
//

export type CLOBGetOrderBooksRequest = NetworkSelectionRequest &
  GetOrderBooksRequest;

export type CLOBGetOrderBooksResponse = GetOrderBooksResponse;

//
// GET /clob/tickers
//

export type CLOBGetTickersRequest = NetworkSelectionRequest & GetTickersRequest;

export type CLOBGetTickersResponse = GetTickersResponse;

//
// GET /clob/orders
//

export type CLOBGetOrdersRequest = NetworkSelectionRequest &
  (
    | {
        marketId?: OrderMarketId;
        marketIds?: OrderMarketId[];
        ownerAddress?: OrderOwnerAddress;
      }
    | { order: GetOrderRequest }
    | {
        orders: GetOrdersRequest[];
      }
  ) & {
    maxNumberOfFilledOrders?: MaxNumberOfFilledOrders;
  };

export type CLOBGetOrdersResponse = GetOrdersResponse;

//
// POST /clob/orders
//

export type CLOBCreateOrdersRequest = NetworkSelectionRequest &
  (
    | { order: CreateOrdersRequest }
    | {
        orders: CreateOrdersRequest[];
      }
  ) & { replaceIfExists?: OrderReplaceIfExists };

export type CLOBCreateOrdersResponse = CreateOrdersResponse;

//
// DELETE /clob/orders
//

export type CLOBCancelOrdersRequest = NetworkSelectionRequest &
  (
    | {
        marketId: OrderMarketId;
        marketIds?: OrderMarketId[];
        ownerAddress: OrderOwnerAddress;
      }
    | { order: CancelOrderRequest }
    | {
        orders: CancelOrdersRequest[];
      }
  );

export type CLOBCancelOrdersResponse = CancelOrdersResponse;

//
// GET /clob/orders/open
//

export type CLOBGetOpenOrdersRequest = NetworkSelectionRequest &
  (
    | {
        marketId?: OrderMarketId;
        marketIds?: OrderMarketId[];
        ownerAddress?: OrderOwnerAddress;
      }
    | { order: GetOpenOrderRequest }
    | {
        orders: GetOpenOrdersRequest[];
      }
  );

export type CLOBGetOpenOrdersResponse = GetOpenOrdersResponse;

//
// GET /clob/orders/filled
//

export type CLOBGetFilledOrdersRequest = NetworkSelectionRequest &
  (
    | {
        marketId: OrderMarketId;
        marketIds?: OrderMarketId[];
        ownerAddress?: OrderOwnerAddress;
      }
    | { order: GetFilledOrderRequest }
    | {
        orders: GetFilledOrdersRequest[];
      }
  ) & {
    maxNumberOfFilledOrders?: MaxNumberOfFilledOrders;
  };

export type CLOBGetFilledOrdersResponse = GetFilledOrdersResponse;

//
// POST /clob/settleFunds
//

export type CLOBPostSettleFundsRequest = NetworkSelectionRequest &
  SettleFundsRequest;

export type CLOBPostSettleFundsResponse = SettleFundsResponse;
