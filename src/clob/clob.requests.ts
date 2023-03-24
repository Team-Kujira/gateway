import { NetworkSelectionRequest } from '../services/common-interfaces';
import { OrderType, Side } from '../amm/amm.requests';
import { Orderbook } from '@injectivelabs/sdk-ts';

export interface ClobMarketsRequest extends NetworkSelectionRequest {
  market?: string;
}

export interface CLOBMarkets {
  [key: string]: any;
}

export interface ClobMarketResponse {
  network: string;
  timestamp: number;
  latency: number;
  markets: CLOBMarkets;
}

export type ClobTickerRequest = ClobMarketsRequest;

export type ClobTickerResponse = ClobMarketResponse;

export interface ClobOrderbookRequest extends ClobMarketsRequest {
  market: string;
}

export interface ClobOrderbookResponse {
  network: string;
  timestamp: number;
  latency: number;
  orderbook: Orderbook;
}

export interface ClobGetOrderRequest extends ClobOrderbookRequest {
  address?: string;
  orderId: string;
}

export interface ClobGetOrderResponse {
  network: string;
  timestamp: number;
  latency: number;
  orders:
    | [
        {
          [key: string]: string;
        }
      ]
    | [];
}

export interface CreateOrderParam {
  price: string;
  amount: string;
  orderType: OrderType;
  side: Side;
  market: string;
  clientOrderID?: string;
}

export interface ClobPostOrderRequest
  extends NetworkSelectionRequest,
    CreateOrderParam {
  address: string;
}

export interface ClobDeleteOrderRequestExtract {
  market: string;
  orderId: string;
}

export interface ClobBatchUpdateRequest extends NetworkSelectionRequest {
  address: string;
  createOrderParams?: CreateOrderParam[];
  cancelOrderParams?: ClobDeleteOrderRequestExtract[];
}

export interface ClobPostOrderResponse {
  network: string;
  timestamp: number;
  latency: number;
  txHash: string;
  clientOrderID?: string | string[];
}

export type ClobDeleteOrderRequest = ClobGetOrderRequest & { address: string };

export type ClobDeleteOrderResponse = ClobPostOrderResponse;
