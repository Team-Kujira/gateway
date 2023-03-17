import {
  CancelOrderOptions,
  CancelOrdersOptions,
  CreateOrdersRequest,
  EstimatedFees,
  EstimatedGaResponse,
  GetMarketEstimatedFeesOptions,
  GetMarketOptions,
  GetOrderBookOptions,
  GetOrderOptions,
  GetTickerOptions,
  IMap,
  KujiraOrder,
  KujiraOrderBook,
  KujiraSettlement,
  Market,
  MarketId,
  Order,
  OrderBook,
  OrderId,
  OrderSide,
  OrderStatus,
  OrderType as KujiraOrderType,
  PlaceOrderOptions,
  PlaceOrdersOptions,
  Settlement,
  Ticker,
  TransactionSignatures,
} from './kujira.types';
import {
  ClobBatchUpdateRequest,
  ClobDeleteOrderRequest,
  ClobDeleteOrderRequestExtract,
  ClobDeleteOrderResponse,
  ClobGetOrderRequest,
  ClobGetOrderResponse,
  ClobMarketResponse,
  ClobMarketsRequest,
  ClobOrderbookRequest,
  ClobOrderbookResponse,
  ClobPostOrderRequest,
  ClobPostOrderResponse,
  ClobTickerRequest,
  ClobTickerResponse,
  CreateOrderParam,
} from '../../clob/clob.requests';
import { Side, OrderType as ClobOrderType } from '../../amm/amm.requests';
import { KujiraConfig } from './kujira.config';
import { fin } from 'kujira.js';
import { DeliverTxResponse } from '@cosmjs/stargate/build/stargateclient';
import contracts from 'kujira.js/src/resources/contracts.json';
import { SpotMarket } from '@injectivelabs/sdk-ts';
import { PriceLevel } from '@injectivelabs/sdk-ts/dist/client/indexer/types/exchange';
import { getNotNullOrThrowError } from './kujira.helpers';

const config = KujiraConfig.config;

export const convertClobMarketsRequestToGetMarketOptions = (
  request: ClobMarketsRequest
): GetMarketOptions => {
  return {
    id: request.market,
  } as GetMarketOptions;
};

export const convertClobOrderbookRequestToGetOrderBookOptions = (
  request: ClobOrderbookRequest
): GetOrderBookOptions => {
  return {
    marketId: request.market,
  } as GetOrderBookOptions;
};

export const convertClobTickerRequestToGetTickerOptions = (
  request: ClobTickerRequest
): GetTickerOptions => {
  return {
    marketId: request.market,
  } as GetTickerOptions;
};

export const convertClobSideToKujiraOrderSide = (request: Side): OrderSide => {
  if (request == 'BUY') {
    return OrderSide.BUY;
  } else if (request == 'SELL') {
    return OrderSide.SELL;
  } else {
    throw new Error('Error converting Side to OrderSide');
  }
};

export const convertKujiraOrderSideToClobSide = (request: OrderSide): Side => {
  if (request == OrderSide.BUY) {
    return 'BUY';
  } else if (request == OrderSide.SELL) {
    return 'SELL';
  } else {
    throw new Error('Error converting OrderSide to Side');
  }
};

export const convertClobOrderTypeToKujiraOrderType = (
  request: ClobOrderType
): KujiraOrderType => {
  if (request == 'LIMIT') {
    return KujiraOrderType.LIMIT;
  } else if (request == 'LIMIT_MAKER') {
    return KujiraOrderType.POST_ONLY;
  } else {
    throw new Error('Error in conversion between order type');
  }
};

export const convertClobPostOrderRequestToPlaceOrderOptions = (
  request: ClobPostOrderRequest | CreateOrderParam
): PlaceOrderOptions => {
  return {
    waitUntilIncludedInBlock: false,
    marketId: request.market,
    ownerAddress: 'address' in request ? request.address : undefined,
    side: convertClobSideToKujiraOrderSide(request.side),
    price: Number.parseFloat(request.price),
    amount: Number.parseFloat(request.amount),
    type: convertClobOrderTypeToKujiraOrderType(request.orderType),
    payerAddress: 'address' in request ? request.address : undefined, // TODO, is the payer always the owner? !!!
  } as PlaceOrderOptions;
};

export const convertClobGetOrderRequestToGetOrderOptions = (
  request: ClobGetOrderRequest
): GetOrderOptions => {
  return {
    id: request.orderId,
    marketId: request.market,
    marketIds: undefined,
    ownerAddress: request.address,
    status: OrderStatus.OPEN,
    statuses: undefined,
  } as GetOrderOptions;
};

export const convertClobBatchUpdateRequestToPlaceOrdersOptions = (
  request: ClobBatchUpdateRequest
): PlaceOrdersOptions => {
  return {
    waitUntilIncludedInBlock: false,
    orders: request.createOrderParams?.map((order) => {
      return convertClobPostOrderRequestToPlaceOrderOptions(order);
    }),
  } as PlaceOrdersOptions;
};

export const convertClobBatchUpdateRequestToDeleteOrdersOptions = (
  request: ClobBatchUpdateRequest
): CancelOrdersOptions => {
  const marketId = convertClobDeleteOrderRequestToCancelOrderOptions(
    getNotNullOrThrowError<ClobDeleteOrderRequestExtract[]>(
      request.cancelOrderParams
    )[0]
  ).marketId;

  return {
    ids: request.cancelOrderParams?.map((order) => {
      return convertClobDeleteOrderRequestToCancelOrderOptions(order).id;
    }),
    marketId: marketId,
    ownerAddress: request.address,
  } as CancelOrdersOptions;
};

export const convertClobDeleteOrderRequestToCancelOrderOptions = (
  request: ClobDeleteOrderRequest | ClobDeleteOrderRequestExtract
): CancelOrderOptions => {
  return {
    id: request.orderId,
    ownerAddress: 'address' in request ? request.address : undefined,
    marketId: 'market' in request ? request.market : undefined,
  } as CancelOrderOptions;
};

export const convertEstimateGasRequestToGetMarketEstimatedFeesOptions = (
  _gasPrice: number,
  _gasPriceToken: string,
  _gasLimit: number,
  _gasCost: number
): GetMarketEstimatedFeesOptions => {
  return {
    marketId: undefined as unknown as MarketId,
  } as GetMarketEstimatedFeesOptions;
};

export const convertToClobMarketResponse = (
  response: Market
): ClobMarketResponse => {
  return {
    network: config.network,
    timestamp: Date.now(),
    latency: 0,
    markets: {
      market: {
        marketId: response.id,
        marketStatus: 'active',
        ticker: undefined,
        baseDenom: undefined,
        quoteDenom: undefined,
        makerFeeRate: undefined,
        quoteToken: undefined,
        baseToken: undefined,
        takerFeeRate: undefined,
        serviceProviderFee: undefined,
        minPriceTickSize: undefined,
        minQuantityTickSize: undefined,
      } as unknown as SpotMarket,
    },
  } as ClobMarketResponse;
};

export const convertToClobOrderbookResponse = (
  _response: OrderBook
): ClobOrderbookResponse => {
  return {
    network: config.network,
    timestamp: Date.now(),
    latency: 0,
    orderbook: {
      buys: [] as PriceLevel[],
      sells: [] as PriceLevel[],
    },
  } as ClobOrderbookResponse;
};

export const convertToClobTickerResponse = (
  _response: Ticker
): ClobTickerResponse => {
  return {
    network: config.network,
    timestamp: Date.now(),
    latency: 0,
    markets: {
      market: {
        marketId: undefined,
        marketStatus: undefined,
        ticker: undefined,
        baseDenom: undefined,
        quoteDenom: undefined,
        makerFeeRate: undefined,
        quoteToken: undefined,
        baseToken: undefined,
        takerFeeRate: undefined,
        serviceProviderFee: undefined,
        minPriceTickSize: undefined,
        minQuantityTickSize: undefined,
      } as unknown as SpotMarket,
    },
  } as ClobTickerResponse;
};

export const convertToClobPostOrderResponse = (
  response: Order
): ClobPostOrderResponse => {
  return {
    network: config.network,
    timestamp: Date.now(),
    latency: 0,
    txHash: response.signatures?.creation,
  } as ClobPostOrderResponse;
};

export const convertToClobGetOrderResponse = (
  _response: Order
): ClobGetOrderResponse => {
  return {
    network: config.network,
    timestamp: Date.now(),
    latency: 0,
    orders: [],
  } as ClobGetOrderResponse;
};

export const convertToClobDeleteOrderResponse = (
  response: Order
): ClobDeleteOrderResponse => {
  return {
    network: config.network,
    timestamp: Date.now(),
    latency: 0,
    txHash: response.signatures?.cancellation,
  } as ClobDeleteOrderResponse;
};

export const convertToEstimatedFeesResponse = (
  _response: EstimatedFees
): EstimatedGaResponse => {
  return {
    gasPrice: undefined as unknown as number,
    gasPriceToken: undefined as unknown as string,
    gasLimit: undefined as unknown as number,
    gasCost: undefined as unknown as number,
  } as EstimatedGaResponse;
};

export const convertKujiraMarketToMarket = (_market: fin.Pair): Market => {
  throw Error('Not implemented');
};

export const convertKujiraOrderBookToOrderBook = (
  _market: Market,
  _kujiraOrderBook: KujiraOrderBook
): OrderBook => {
  throw Error('Not implemented');
};

export const convertKujiraOrdersToMapOfOrders = (
  _orders: KujiraOrder[] | KujiraOrderBook | DeliverTxResponse | any[],
  _market?: Market,
  _ownerAddress?: string,
  _status?: OrderStatus
): IMap<OrderId, Order> => {
  throw new Error('Not implemented');
};

export const convertToTicker = (input: any): Ticker => {
  const price = parseFloat(input.price);
  const timestamp = new Date(input.last_updated).getTime();

  return {
    price: price,
    timestamp: timestamp,
    ticker: input,
  };
};

export const convertKujiraOrderToOrder = (
  _market: Market,
  _kujiraOrder?: KujiraOrder, // | Record<string, unknown>,
  _candidateOrder?: CreateOrdersRequest,
  _ownerAddress?: string,
  _status?: OrderStatus,
  _signatures?: TransactionSignatures
): Order => {
  throw new Error('Not implemented');
};

export const convertKujiraSettlementToSettlement = (
  _input: KujiraSettlement
): Settlement => {
  throw new Error('Not implemented');
};

export const convertNetworkToKujiraNetwork = (
  input: string
): keyof typeof contracts => {
  return input.toLowerCase() as keyof typeof contracts;
};
