// import { StatusCodes } from 'http-status-codes';
// import { Cosmosish } from '../../chains/cosmos/cosmos';
// import { ResponseWrapper } from '../../services/common-interfaces';
// import { HttpException } from '../../services/error-handler';
// import './extensions/json';
// import { Kujiraish } from './kujira';
// import {
//   convert,
//   convertToJsonIfNeeded,
//   Types,
// } from './kujira.controllers.convertors';
// import {
//   Settlement,
//   IMap,
//   Market,
//   MarketNotFoundError,
//   Order,
//   OrderBook,
//   OrderNotFoundError,
//   Ticker,
//   CancelOrdersRequest,
//   CancelOrdersResponse,
//   CreateOrdersRequest,
//   CreateOrdersResponse,
//   GetFilledOrdersRequest,
//   GetFilledOrdersResponse,
//   GetMarketsRequest,
//   GetMarketsResponse,
//   GetOpenOrdersRequest,
//   GetOpenOrdersResponse,
//   GetOrderBooksRequest,
//   GetOrderBooksResponse,
//   GetOrdersRequest,
//   GetOrdersResponse,
//   GetTickersRequest,
//   GetTickersResponse,
//   PostSettlementsRequest,
//   PostSettlementsResponse,
//   GetMarketOptions,
//   MarketId,
// } from './kujira.types';
// import {
//   validateCancelAllOrdersRequest,
//   validateCancelOrderRequest,
//   validateCancelOrdersRequest,
//   validateCreateOrderRequest,
//   validateCreateOrdersRequest,
//   validateGetAllOrdersRequest,
//   validateGetFilledOrderRequest,
//   validateGetFilledOrdersRequest,
//   validateGetMarketRequest,
//   validateGetMarketsRequest,
//   validateGetOpenOrderRequest,
//   validateGetOpenOrdersRequest,
//   validateGetOrderBookRequest,
//   validateGetOrderBooksRequest,
//   validateGetOrderRequest,
//   validateGetOrdersRequest,
//   validateGetTickerRequest,
//   validateGetTickersRequest,
//   validateSettleAllFundsRequest,
//   validateSettleFundsRequest,
//   validateSettleFundsSeveralRequest,
// } from './kujira.validators';
//
// /**
//  * Get the all or the informed markets and their configurations.
//  *
//  * @param _cosmos
//  * @param kujira
//  * @param request
//  */
// export async function getMarkets(
//   _cosmos: Cosmosish,
//   kujira: Kujiraish,
//   request: GetMarketsRequest
// ): Promise<ResponseWrapper<GetMarketsResponse>> {
//   const response = new ResponseWrapper<GetMarketsResponse>();
//
//   if ('id' in request) {
//     validateGetMarketRequest(request);
//
//     try {
//       response.body = convertToJsonIfNeeded(
//         convert<Market, GetMarketsResponse>(
//           await kujira.getMarket({ id: request.id } as GetMarketOptions),
//           Types.GetMarketsResponse
//         )
//       );
//
//       response.status = StatusCodes.OK;
//
//       return response;
//     } catch (exception) {
//       if (exception instanceof MarketNotFoundError) {
//         throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
//       } else {
//         throw exception;
//       }
//     }
//   }
//
//   if ('ids' in request) {
//     validateGetMarketsRequest(request);
//
//     try {
//       response.body = convertToJsonIfNeeded(
//         convert<IMap<string, Market>, GetMarketsResponse>(
//           await kujira.getMarkets({ ids: request.ids }),
//           Types.GetMarketsResponse
//         )
//       );
//
//       response.status = StatusCodes.OK;
//
//       return response;
//     } catch (exception: any) {
//       if (exception instanceof MarketNotFoundError) {
//         throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
//       } else {
//         throw exception;
//       }
//     }
//   }
//
//   response.body = convertToJsonIfNeeded(
//     convert<IMap<string, Market>, GetMarketsResponse>(
//       await kujira.getAllMarkets(),
//       Types.GetMarketsResponse
//     )
//   );
//
//   response.status = StatusCodes.OK;
//
//   return response;
// }
//
// /**
//  * Get the current orderbook for each informed market.
//  *
//  * @param _cosmos
//  * @param kujira
//  * @param request
//  */
// export async function getOrderBooks(
//   _cosmos: Cosmosish,
//   kujira: Kujiraish,
//   request: GetOrderBooksRequest
// ): Promise<ResponseWrapper<GetOrderBooksResponse>> {
//   const response = new ResponseWrapper<GetOrderBooksResponse>();
//
//   if ('marketId' in request) {
//     validateGetOrderBookRequest(request);
//
//     try {
//       response.body = convertToJsonIfNeeded(
//         convert<OrderBook, GetOrderBooksResponse>(
//           await kujira.getOrderBook({ marketId: request.marketId }),
//           Types.GetOrderBooksResponse
//         )
//       );
//
//       response.status = StatusCodes.OK;
//
//       return response;
//     } catch (exception) {
//       if (exception instanceof MarketNotFoundError) {
//         throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
//       } else {
//         throw exception;
//       }
//     }
//   }
//
//   if ('marketIds' in request) {
//     validateGetOrderBooksRequest(request);
//
//     try {
//       response.body = convertToJsonIfNeeded(
//         convert<IMap<string, OrderBook>, GetOrderBooksResponse>(
//           await kujira.getOrderBooks({ marketIds: request.marketIds }),
//           Types.GetOrderBooksResponse
//         )
//       );
//
//       response.status = StatusCodes.OK;
//
//       return response;
//     } catch (exception: any) {
//       if (exception instanceof MarketNotFoundError) {
//         throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
//       } else {
//         throw exception;
//       }
//     }
//   }
//
//   response.body = convertToJsonIfNeeded(
//     convert<IMap<string, OrderBook>, GetOrderBooksResponse>(
//       await kujira.getAllOrderBooks(),
//       Types.GetOrderBooksResponse
//     )
//   );
//
//   response.status = StatusCodes.OK;
//
//   return response;
// }
//
// /**
//  * Get the last traded prices for each informed market.
//  *
//  * @param _cosmos
//  * @param kujira
//  * @param request
//  */
// export async function getTickers(
//   _cosmos: Cosmosish,
//   kujira: Kujiraish,
//   request: GetTickersRequest
// ): Promise<ResponseWrapper<GetTickersResponse>> {
//   const response = new ResponseWrapper<GetTickersResponse>();
//
//   if ('marketId' in request) {
//     validateGetTickerRequest(request);
//
//     try {
//       response.body = convertToJsonIfNeeded(
//         convert<Ticker, GetTickersResponse>(
//           await kujira.getTicker({ marketId: request.marketId }),
//           Types.GetTickersResponse
//         )
//       );
//
//       response.status = StatusCodes.OK;
//
//       return response;
//     } catch (exception) {
//       if (exception instanceof MarketNotFoundError) {
//         throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
//       } else {
//         throw exception;
//       }
//     }
//   }
//
//   if ('marketIds' in request) {
//     validateGetTickersRequest(request);
//
//     try {
//       response.body = convertToJsonIfNeeded(
//         convert<IMap<string, Ticker>, GetTickersResponse>(
//           await kujira.getTickers({ marketIds: request.marketIds }),
//           Types.GetTickersResponse
//         )
//       );
//
//       response.status = StatusCodes.OK;
//
//       return response;
//     } catch (exception: any) {
//       if (exception instanceof MarketNotFoundError) {
//         throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
//       } else {
//         throw exception;
//       }
//     }
//   }
//
//   response.body = convertToJsonIfNeeded(
//     convert<IMap<string, Ticker>, GetTickersResponse>(
//       await kujira.getAllTickers({}),
//       Types.GetTickersResponse
//     )
//   );
//
//   response.status = StatusCodes.OK;
//
//   return response;
// }
//
// /**
//  * Get one or more orders.
//  *
//  * @param _cosmos
//  * @param kujira
//  * @param request
//  */
// export async function getOrders(
//   _cosmos: Cosmosish,
//   kujira: Kujiraish,
//   request: GetOrdersRequest
// ): Promise<ResponseWrapper<GetOrdersResponse>> {
//   const response = new ResponseWrapper<GetOrdersResponse>();
//
//   if ('id' in request) {
//     validateGetOrderRequest(request);
//
//     try {
//       response.body = convertToJsonIfNeeded(
//         convert<Order, GetOrdersResponse>(
//           await kujira.getOrder(request),
//           Types.GetOrdersResponse
//         )
//       );
//
//       response.status = StatusCodes.OK;
//
//       return response;
//     } catch (exception) {
//       if (exception instanceof OrderNotFoundError) {
//         throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
//       } else {
//         throw exception;
//       }
//     }
//   }
//
//   if ('ids' in request) {
//     validateGetOrdersRequest(request);
//
//     try {
//       const orders = await kujira.getOrders(request);
//
//       if (!orders.size) throw new OrderNotFoundError('No orders found.');
//
//       response.body = convertToJsonIfNeeded(
//         convert<IMap<string, Order>, GetOrdersResponse>(
//           orders,
//           Types.GetOrdersResponse
//         )
//       );
//
//       response.status = StatusCodes.OK;
//
//       return response;
//     } catch (exception: any) {
//       if (exception instanceof OrderNotFoundError) {
//         throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
//       } else {
//         throw exception;
//       }
//     }
//   }
//
//   validateGetAllOrdersRequest(request);
//
//   response.body = convertToJsonIfNeeded(
//     convert<IMap<string, IMap<string, Order>>, GetOrdersResponse>(
//       await kujira.getAllOrders(request),
//       Types.GetFilledOrdersResponse
//     )
//   );
//
//   response.status = StatusCodes.OK;
//
//   return response;
// }
//
// /**
//  * Create one or more orders.
//  *
//  * @param _cosmos
//  * @param kujira
//  * @param request
//  */
// export async function createOrders(
//   _cosmos: Cosmosish,
//   kujira: Kujiraish,
//   request: CreateOrdersRequest
// ): Promise<ResponseWrapper<CreateOrdersResponse>> {
//   const response = new ResponseWrapper<CreateOrdersResponse>();
//
//   if ('order' in request) {
//     validateCreateOrderRequest(request.order);
//
//     response.body = convertToJsonIfNeeded(
//       convert<Order, CreateOrdersResponse>(
//         await kujira.createOrder(request.order, request.replaceIfExists),
//         Types.CreateOrdersResponse
//       )
//     );
//
//     response.status = StatusCodes.OK;
//
//     return response;
//   }
//
//   if ('orders' in request) {
//     validateCreateOrdersRequest(request.orders);
//
//     response.body = convertToJsonIfNeeded(
//       convert<IMap<string, Order>, CreateOrdersResponse>(
//         await kujira.createOrders(request.orders, request.replaceIfExists),
//         Types.CreateOrdersResponse
//       )
//     );
//
//     response.status = StatusCodes.OK;
//
//     return response;
//   }
//
//   throw new HttpException(
//     StatusCodes.BAD_REQUEST,
//     `No order(s) was/were informed.`
//   );
// }
//
// /**
//  * Cancel one or more orders.
//  *
//  * @param _cosmos
//  * @param kujira
//  * @param request
//  */
// export async function cancelOrders(
//   _cosmos: Cosmosish,
//   kujira: Kujiraish,
//   request: CancelOrdersRequest
// ): Promise<ResponseWrapper<CancelOrdersResponse>> {
//   const response = new ResponseWrapper<CancelOrdersResponse>();
//
//   if ('order' in request) {
//     validateCancelOrderRequest(request.order);
//
//     response.body = convertToJsonIfNeeded(
//       convert<Order, CancelOrdersResponse>(
//         await kujira.cancelOrder(request.order),
//         Types.CancelOrdersResponse
//       )
//     );
//
//     response.status = StatusCodes.OK;
//
//     return response;
//   }
//
//   if ('orders' in request) {
//     validateCancelOrdersRequest(request.orders);
//
//     response.body = convertToJsonIfNeeded(
//       convert<IMap<string, Order>, CancelOrdersResponse>(
//         await kujira.cancelOrders(request.orders),
//         Types.CancelOrdersResponse
//       )
//     );
//
//     response.status = StatusCodes.OK;
//
//     return response;
//   }
//
//   validateCancelAllOrdersRequest(request);
//
//   response.body = convertToJsonIfNeeded(
//     convert<IMap<string, Order>, CancelOrdersResponse>(
//       await kujira.cancelAllOrders(
//         request.ownerAddress,
//         request.marketId,
//         request.marketIds
//       ),
//       Types.CancelOrdersResponse
//     )
//   );
//
//   response.status = StatusCodes.OK;
//
//   return response;
// }
//
// /**
//  * Get all open orders for each informed market.
//  *
//  * @param _cosmos
//  * @param kujira
//  * @param request
//  */
// export async function getOpenOrders(
//   _cosmos: Cosmosish,
//   kujira: Kujiraish,
//   request: GetOpenOrdersRequest
// ): Promise<ResponseWrapper<GetOpenOrdersResponse>> {
//   const response = new ResponseWrapper<GetOpenOrdersResponse>();
//
//   if ('order' in request) {
//     validateGetOpenOrderRequest(request.order);
//
//     try {
//       response.body = convertToJsonIfNeeded(
//         convert<Order, GetOpenOrdersResponse>(
//           await kujira.getOpenOrder(request.order),
//           Types.GetOpenOrdersResponse
//         )
//       );
//
//       response.status = StatusCodes.OK;
//
//       return response;
//     } catch (exception) {
//       if (exception instanceof OrderNotFoundError) {
//         throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
//       } else {
//         throw exception;
//       }
//     }
//   }
//
//   if ('orders' in request) {
//     validateGetOpenOrdersRequest(request.orders);
//
//     try {
//       const orders = await kujira.getOpenOrders(request.orders);
//
//       if (!orders.size) throw new OrderNotFoundError('No open orders found.');
//
//       response.body = convertToJsonIfNeeded(
//         convert<IMap<string, Order>, GetOrdersResponse>(
//           orders,
//           Types.GetOrdersResponse
//         )
//       );
//
//       response.status = StatusCodes.OK;
//
//       return response;
//     } catch (exception: any) {
//       if (exception instanceof OrderNotFoundError) {
//         throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
//       } else {
//         throw exception;
//       }
//     }
//   }
//
//   validateGetAllOrdersRequest(request);
//
//   response.body = convertToJsonIfNeeded(
//     convert<IMap<string, IMap<string, Order>>, GetOpenOrdersResponse>(
//       await kujira.getAllOpenOrders(
//         request.ownerAddress,
//         request.marketId,
//         request.marketIds
//       ),
//       Types.GetOpenOrdersResponse
//     )
//   );
//
//   response.status = StatusCodes.OK;
//
//   return response;
// }
//
// /**
//  * Get one or more filled orders.
//  *
//  * @param _cosmos
//  * @param kujira
//  * @param request
//  */
// export async function getFilledOrders(
//   _cosmos: Cosmosish,
//   kujira: Kujiraish,
//   request: GetFilledOrdersRequest
// ): Promise<ResponseWrapper<GetFilledOrdersResponse>> {
//   const response = new ResponseWrapper<GetFilledOrdersResponse>();
//
//   if ('order' in request) {
//     validateGetFilledOrderRequest(request.order);
//
//     try {
//       response.body = convertToJsonIfNeeded(
//         convert<Order, GetFilledOrdersResponse>(
//           await kujira.getFilledOrder(
//             request.order,
//             request.maxNumberOfFilledOrders
//           ),
//           Types.GetFilledOrdersResponse
//         )
//       );
//
//       response.status = StatusCodes.OK;
//
//       return response;
//     } catch (exception) {
//       if (exception instanceof OrderNotFoundError) {
//         throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
//       } else {
//         throw exception;
//       }
//     }
//   }
//
//   if ('orders' in request) {
//     validateGetFilledOrdersRequest(request.orders);
//
//     try {
//       response.body = convertToJsonIfNeeded(
//         convert<IMap<string, Order>, GetFilledOrdersResponse>(
//           await kujira.getFilledOrders(
//             request.orders,
//             request.maxNumberOfFilledOrders
//           ),
//           Types.GetFilledOrdersResponse
//         )
//       );
//
//       response.status = StatusCodes.OK;
//
//       return response;
//     } catch (exception: any) {
//       if (exception instanceof OrderNotFoundError) {
//         throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
//       } else {
//         throw exception;
//       }
//     }
//   }
//
//   validateGetAllOrdersRequest(request);
//
//   response.body = convertToJsonIfNeeded(
//     convert<IMap<string, IMap<string, Order>>, GetFilledOrdersResponse>(
//       await kujira.getAllFilledOrders(
//         request.marketId,
//         request.marketIds,
//         request.maxNumberOfFilledOrders
//       ),
//       Types.GetFilledOrdersResponse
//     )
//   );
//
//   response.status = StatusCodes.OK;
//
//   return response;
// }
//
// /**
//  * Settle funds for one or more markets.
//  *
//  * @param _cosmos
//  * @param kujira
//  * @param request
//  */
// export async function settleMarkets(
//   _cosmos: Cosmosish,
//   kujira: Kujiraish,
//   request: PostSettlementsRequest
// ): Promise<ResponseWrapper<PostSettlementsResponse>> {
//   const response = new ResponseWrapper<PostSettlementsResponse>();
//
//   if ('marketId' in request) {
//     validateSettleFundsRequest(request);
//
//     try {
//       response.body = convertToJsonIfNeeded(
//         convert<Settlement, PostSettlementsResponse>(
//           await kujira.settleMarketFunds(request),
//           Types.PostSettleFundsResponse
//         )
//       );
//
//       response.status = StatusCodes.OK;
//
//       return response;
//     } catch (exception) {
//       if (exception instanceof MarketNotFoundError) {
//         throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
//       } else {
//         throw exception;
//       }
//     }
//   }
//
//   if ('marketIds' in request) {
//     validateSettleFundsSeveralRequest(request);
//
//     try {
//       response.body = convertToJsonIfNeeded(
//         convert<IMap<MarketId, Settlement[]>, PostSettlementsResponse>(
//           await kujira.settleMarketsFunds(request),
//           Types.PostSettleFundsResponse
//         )
//       );
//
//       response.status = StatusCodes.OK;
//
//       return response;
//     } catch (exception: any) {
//       if (exception instanceof MarketNotFoundError) {
//         throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
//       } else {
//         throw exception;
//       }
//     }
//   }
//
//   validateSettleAllFundsRequest(request);
//
//   response.body = convertToJsonIfNeeded(
//     convert<IMap<MarketId, Settlement[]>, PostSettlementsResponse>(
//       await kujira.settleAllMarketsFunds(request.ownerAddress),
//       Types.PostSettleFundsResponse
//     )
//   );
//
//   response.status = StatusCodes.OK;
//
//   return response;
// }
