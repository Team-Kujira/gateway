// import {
//   CancelOrderOptions,
//   CancelOrderResponse,
//   CancelOrdersResponse,
//   CreateOrderResponse,
//   CreateOrdersResponse,
//   GetFilledOrderResponse,
//   GetFilledOrdersResponse,
//   GetMarketOptions,
//   GetMarketsResponse,
//   GetOpenOrderResponse,
//   GetOpenOrdersResponse,
//   GetOrderBookOptions,
//   GetOrderBooksResponse,
//   GetOrderOptions,
//   GetOrderResponse,
//   GetOrdersResponse,
//   GetTickerOptions,
//   GetTickerResponse,
//   GetTickersResponse,
//   IMap,
//   Market,
//   Order,
//   OrderBook,
//   OrderId,
//   OrderSide,
//   OrderStatus,
//   OrderType,
//   PlaceOrderOptions,
//   PlaceOrdersOptions,
//   Settlement,
//   SettlementResponse,
//   Ticker,
//   TransactionSignatures,
// } from './kujira.types'
// import {
//   ClobBatchUpdateRequest,
//   ClobDeleteOrderRequest,
//   ClobDeleteOrderRequestExtract,
//   ClobDeleteOrderResponse,
//   ClobGetOrderRequest,
//   ClobGetOrderResponse,
//   ClobMarketResponse,
//   ClobMarketsRequest,
//   ClobOrderbookRequest,
//   ClobOrderbookResponse,
//   ClobPostOrderRequest,
//   ClobPostOrderResponse,
//   ClobTickerRequest,
//   ClobTickerResponse,
//   CreateOrderParam,
// } from '../../clob/clob.requests'
// import {KujiraConfig} from './kujira.config'
// import {convertToGetMarketResponse, convertToGetOrderBookResponse} from "./kujira.convertors"
//
// const config = KujiraConfig.config;
//
// export const convertClobMarketsRequestToGetMarketOptions = (
//   request: ClobMarketsRequest
// ): GetMarketOptions => {
//   return {
//     id: request.market,
//   } as GetMarketOptions;
// };
//
// export const convertClobOrderbookRequestToGetOrderBookOptions = (
//   request: ClobOrderbookRequest
// ): GetOrderBookOptions => {
//   return {
//     marketId: request.market,
//   } as GetOrderBookOptions;
// };
//
// export const convertClobTickerRequestToGetTickerOptions = (
//   request: ClobTickerRequest
// ): GetTickerOptions => {
//   return {
//     marketId: request.market,
//   } as GetTickerOptions;
// };
//
// export const convertClobPostOrderRequestToPlaceOrderOptions = (
//   request: ClobPostOrderRequest | CreateOrderParam
// ): PlaceOrderOptions => {
//   return {
//     waitUntilIncludedInBlock: false,
//     marketId: request.market,
//     ownerAddress: 'address' in request ? request.address : undefined,
//     side: request.side,
//     price: Number.parseFloat(request.price),
//     amount: Number.parseFloat(request.amount),
//     type: request.orderType,
//     payerAddress: undefined,
//   } as PlaceOrderOptions;
// };
//
// export const convertClobGetOrderRequestToGetOrderOptions = (
//   request: ClobGetOrderRequest
// ): GetOrderOptions => {
//   return {
//     id: request.orderId,
//     marketId: request.market,
//     marketIds: undefined,
//     ownerAddress: request.address,
//     status: OrderStatus.OPEN,
//     statuses: undefined,
//   } as GetOrderOptions;
// };
//
// export const convertClobBatchUpdateRequestToPlaceOrdersOptions = (
//   request: ClobBatchUpdateRequest
// ): PlaceOrdersOptions => {
//   return {
//     waitUntilIncludedInBlock: false,
//     orders: request.createOrderParams?.map((order) => {
//       return convertClobPostOrderRequestToPlaceOrderOptions(order);
//     }),
//   } as PlaceOrdersOptions;
// };
//
// export const convertClobDeleteOrderRequestToCancelOrderOptions = (
//   request: ClobDeleteOrderRequest | ClobDeleteOrderRequestExtract
// ): CancelOrderOptions => {
//   return {
//     id: request.orderId,
//     ownerAddress: 'address' in request ? request.address : undefined,
//     marketId: request.market,
//   } as CancelOrderOptions;
// };
//
// export const convertToClobMarketResponse = (
//   response: Market
// ): ClobMarketResponse => {
//   return {
//     network: config.network,
//     timestamp: Date.now(),
//     latency: 0,
//     markets:,
//   } as ClobMarketResponse;
// };
//
// export const convertToClobOrderbookResponse = (
//   response: OrderBook
// ): ClobOrderbookResponse => {
//   return {
//     network: ,
//     timestamp: ,
//     latency: ,
//     orderbook: ,
//   } as ClobOrderbookResponse;
// };
//
// export const convertToClobTickerResponse = (
//   response: Ticker
// ): ClobTickerResponse => {
//   return {
//     network: ,
//     timestamp: ,
//     latency: ,
//     markets: ,
//   } as ClobTickerResponse;
// };
//
// export const convertToClobPostOrderResponse = (
//   response: Order
// ): ClobPostOrderResponse => {
//   return {
//     network: ,
//     timestamp: ,
//     latency: ,
//     txHash: ,
//   } as ClobPostOrderResponse;
// };
//
// export const convertToClobGetOrderResponse = (
//   response: Order
// ): ClobGetOrderResponse => {
//   return {
//     network: ,
//     timestamp: ,
//     latency: ,
//     orders: ,
//   } as ClobGetOrderResponse;
// };
//
// export const convertToClobDeleteOrderResponse = (
//   response: Order
// ): ClobDeleteOrderResponse => {
//   return {
//     network: ,
//     timestamp: ,
//     latency: ,
//     txHash: ,
//   } as ClobDeleteOrderResponse;
// };
//
//
// export enum Types {
//   GetMarketsResponse = 'GetMarketsResponse',
//   GetTickersResponse = 'GetTickersResponse',
//   GetOrderBooksResponse = 'GetOrderBooksResponse',
//   GetOrdersResponse = 'GetOrdersResponse',
//   GetOpenOrdersResponse = 'GetOpenOrdersResponse',
//   GetFilledOrdersResponse = 'GetFilledOrdersResponse',
//   CreateOrdersResponse = 'CreateOrdersResponse',
//   CancelOrdersResponse = 'CancelOrdersResponse',
//   PostSettleFundsResponse = 'PostSettleFundsResponse',
// }
//
// type SingleInput = Market | OrderBook | Ticker | Order | Settlement[];
//
// type InputMap =
//   | IMap<string, Market>
//   | IMap<string, OrderBook>
//   | IMap<string, Ticker>
//   | IMap<OrderId, Order>
//   | IMap<string, Settlement[]>;
//
// type InputMapMap = IMap<string, InputMap>;
//
// type Input = SingleInput | InputMap | InputMapMap;
//
// type SingleOutput =
//   | GetMarketsResponse
//   | GetOrderBooksResponse
//   | GetTickersResponse
//   | GetOrdersResponse
//   | CreateOrdersResponse
//   | CancelOrdersResponse
//   | GetOpenOrdersResponse
//   | GetFilledOrdersResponse
//   | SettlementResponse;
//
// type Output = SingleOutput;
//
// export const convert = <I extends Input, O extends Output>(
//   input: I,
//   type: Types
// ): O => {
//   if (IMap.isMap(input)) {
//     if (IMap.isMap(input.first())) {
//       return convertMapMap(input as InputMapMap, type);
//     }
//
//     return convertMap(input as InputMap, type);
//   }
//
//   return convertSingle<O>(input as SingleInput, type);
// };
//
// export const convertMapMap = <O extends Output>(
//   input: InputMapMap,
//   type: Types
// ): O => {
//   const output = IMap<string, O>().asMutable();
//
//   if (IMap.isMap(input)) {
//     if (IMap.isMap(input.first())) {
//       input.forEach((value: InputMap, key: string) => {
//         output.set(key, convert<InputMap, O>(value, type));
//       });
//     }
//   }
//
//   return output as unknown as O;
// };
//
// export const convertMap = <O extends Output>(
//   input: InputMap,
//   type: Types
// ): O => {
//   const output = IMap<string, O>().asMutable();
//
//   if (IMap.isMap(input)) {
//     input.forEach((value: SingleInput, key: string) => {
//       output.set(key, convert<Input, O>(value, type));
//     });
//   }
//
//   return output as unknown as O;
// };
//
// export const convertSingle = <O extends Output>(
//   input: SingleInput,
//   type: Types
// ): O => {
//   if (type === Types.GetMarketsResponse)
//     return convertToGetMarketResponse(input as Market) as O;
//
//   if (type === Types.GetOrderBooksResponse)
//     return convertToGetOrderBookResponse(input as OrderBook) as O;
//
//   if (type === Types.GetTickersResponse)
//     return convertToGetTickerResponse(input as Ticker) as O;
//
//   if (type === Types.GetOrdersResponse)
//     return convertToGetOrderResponse(input as Order) as O;
//
//   if (type === Types.CreateOrdersResponse)
//     return convertToCreateOrderResponse(input as Order) as O;
//
//   if (type === Types.CancelOrdersResponse)
//     return convertToCancelOrderResponse(input as Order) as O;
//
//   if (type === Types.GetOpenOrdersResponse)
//     return convertToGetOpenOrderResponse(input as Order) as O;
//
//   if (type === Types.GetFilledOrdersResponse)
//     return convertToGetFilledOrderResponse(input as Order) as O;
//
//   if (type === Types.PostSettleFundsResponse)
//     return convertToPostSettleFundsResponse(input as Settlement[]) as O;
//
//   throw new Error(`Unsupported input type "${type}".`);
// };
//
// export const convertToJsonIfNeeded = (input: any): any => {
//   let output = input;
//
//   if (IMap.isMap(input)) output = input.toJS();
//
//   return output;
// };
//
// export const convertToGetTickerResponse = (
//   input: Ticker
// ): GetTickerResponse => {
//   return {
//     price: input.price,
//     timestamp: input.timestamp,
//   };
// };
//
// export const convertToGetOrderResponse = (input: Order): GetOrderResponse => {
//   return {
//     id: input.id,
//     exchangeOrderId: input.id,
//     marketId: input.marketId,
//     ownerAddress: input.ownerAddress,
//     price: input.price,
//     amount: input.amount,
//     side: input.side,
//     status: input.status,
//     type: input.type,
//     fillingTimestamp: input.fillingTimestamp,
//   };
// };
//
// export const convertToCreateOrderResponse = (
//   input: Order
// ): CreateOrderResponse => {
//   return {
//     id: input.id,
//     id: input.id,
//     marketId: input.marketId,
//     ownerAddress: input.ownerAddress,
//     price: input.price,
//     amount: input.amount,
//     side: input.side,
//     status: input.status,
//     type: input.type,
//     signature: getNotNullOrThrowError<TransactionSignatures>(input.signatures)
//       .creation,
//   };
// };
//
// export const convertToCancelOrderResponse = (
//   input: Order
// ): CancelOrderResponse => {
//   return {
//     id: input.id,
//     id: input.id,
//     marketId: input.marketId,
//     ownerAddress: getNotNullOrThrowError(
//       input.ownerAddress,
//       'Owner address is not defined.'
//     ),
//     price: input.price,
//     amount: input.amount,
//     side: input.side,
//     status: input.status,
//     type: input.type,
//     signatures: input.signatures,
//   };
// };
//
// export const convertToGetOpenOrderResponse = (
//   input: Order
// ): GetOpenOrderResponse => {
//   return {
//     id: input.id,
//     id: input.id,
//     marketId: input.marketId,
//     ownerAddress: input.ownerAddress,
//     price: input.price,
//     amount: input.amount,
//     side: input.side,
//     status: input.status,
//     type: input.type,
//   };
// };
//
// export const convertToGetFilledOrderResponse = (
//   input: Order
// ): GetFilledOrderResponse => {
//   return {
//     id: input.id,
//     id: input.id,
//     marketId: input.marketId,
//     // ownerAddress: input.ownerAddress,
//     price: input.price,
//     amount: input.amount,
//     side: input.side,
//     status: input.status,
//     type: input.type,
//     fillingTimestamp: input.fillingTimestamp,
//   };
// };
//
// export const convertToPostSettleFundsResponse = (
//   input: Settlement[]
// ): SettlementResponse => {
//   return input;
// };
//
// export const convertOrderSideToKujiraSide = (
//   input: OrderSide
// ): 'buy' | 'sell' => {
//   return input.toLowerCase() as 'buy' | 'sell';
// };
//
// export const convertKujiraSideToOrderSide = (
//   input: 'buy' | 'sell'
// ): OrderSide => {
//   if (input == 'buy') return OrderSide.BUY;
//   if (input == 'sell') return OrderSide.SELL;
//   throw new Error(`Invalid order side: ${input}`);
// };
//
// export const convertOrderTypeToKujiraType = (
//   input?: OrderType
// ): 'limit' | 'ioc' | 'postOnly' => {
//   if (!input) return 'limit';
//   else if (['limit', 'ioc'].includes(input.toLowerCase()))
//     return input.toLowerCase() as 'limit' | 'ioc' | 'postOnly';
//   else if (['post_only', 'postOnly'].includes(input.toLowerCase()))
//     return 'postOnly';
//   else throw new Error(`Invalid order type: ${input}`);
// };
//
// export const convertKujiraTypeToOrderType = (
//   input: 'limit' | 'ioc' | 'postOnly'
// ): OrderType => {
//   if (input == 'limit') return OrderType.LIMIT;
//   if (input == 'ioc') return OrderType.IOC;
//   if (input == 'postOnly') return OrderType.POST_ONLY;
//   throw new Error(`Invalid order type: ${input}`);
// };
