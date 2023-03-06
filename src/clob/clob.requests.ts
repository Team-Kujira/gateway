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
    | { ownerAddress: string; marketName: string; marketNames?: string[] }
    | { order: GetOrderRequest }
    | {
        orders: GetOrdersRequest[];
      }
  ) & {
    limit?: number;
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
  ) & { replaceIfExists?: boolean };

export type CLOBCreateOrdersResponse = CreateOrdersResponse;

//
// DELETE /clob/orders
//

export type CLOBCancelOrdersRequest = NetworkSelectionRequest &
  (
    | { ownerAddress: string; marketName: string; marketNames?: string[] }
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
    | { ownerAddress: string; marketName?: string; marketNames?: string[] }
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
        // ownerAddress: string;
        marketName: string;
        marketNames?: string[];
      }
    | { order: GetFilledOrderRequest }
    | {
        orders: GetFilledOrdersRequest[];
      }
  ) & {
    limit?: number;
  };

export type CLOBGetFilledOrdersResponse = GetFilledOrdersResponse;

//
// POST /clob/settleFunds
//

export type CLOBPostSettleFundsRequest = NetworkSelectionRequest &
  SettleFundsRequest;

export type CLOBPostSettleFundsResponse = SettleFundsResponse;
