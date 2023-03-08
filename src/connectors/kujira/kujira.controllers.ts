import { StatusCodes } from 'http-status-codes';
import { Cosmosish } from '../../chains/cosmos/cosmos';
import { ResponseWrapper } from '../../services/common-interfaces';
import { HttpException } from '../../services/error-handler';
import './extensions/json';
import { Kujiraish } from './kujira';
import { convert, convertToJsonIfNeeded, Types } from './kujira.convertors';
import {
  CLOBCancelOrdersRequest,
  CLOBCancelOrdersResponse,
  CLOBCreateOrdersRequest,
  CLOBCreateOrdersResponse,
  CLOBGetFilledOrdersRequest,
  CLOBGetFilledOrdersResponse,
  CLOBGetMarketsRequest,
  CLOBGetMarketsResponse,
  CLOBGetOpenOrdersRequest,
  CLOBGetOpenOrdersResponse,
  CLOBGetOrderBooksRequest,
  CLOBGetOrderBooksResponse,
  CLOBGetOrdersRequest,
  CLOBGetOrdersResponse,
  CLOBGetTickersRequest,
  CLOBGetTickersResponse,
  CLOBPostSettleFundsRequest,
  CLOBPostSettleFundsResponse,
} from '../../clob/clob.requests';
import {
  Fund,
  IMap,
  Market,
  MarketNotFoundError,
  Order,
  OrderBook,
  OrderNotFoundError,
  Ticker,
} from '../../clob/clob.types';
import {
  validateCancelAllOrdersRequest,
  validateCancelOrderRequest,
  validateCancelOrdersRequest,
  validateCreateOrderRequest,
  validateCreateOrdersRequest,
  validateGetAllOrdersRequest,
  validateGetFilledOrderRequest,
  validateGetFilledOrdersRequest,
  validateGetMarketRequest,
  validateGetMarketsRequest,
  validateGetOpenOrderRequest,
  validateGetOpenOrdersRequest,
  validateGetOrderBookRequest,
  validateGetOrderBooksRequest,
  validateGetOrderRequest,
  validateGetOrdersRequest,
  validateGetTickerRequest,
  validateGetTickersRequest,
  validateSettleAllFundsRequest,
  validateSettleFundsRequest,
  validateSettleFundsSeveralRequest,
} from './kujira.validators';

/**
 * Get the all or the informed markets and their configurations.
 *
 * @param _cosmos
 * @param kujira
 * @param request
 */
export async function getMarkets(
  _cosmos: Cosmosish,
  kujira: Kujiraish,
  request: CLOBGetMarketsRequest
): Promise<ResponseWrapper<CLOBGetMarketsResponse>> {
  const response = new ResponseWrapper<CLOBGetMarketsResponse>();

  if ('name' in request) {
    validateGetMarketRequest(request);

    try {
      response.body = convertToJsonIfNeeded(
        convert<Market, CLOBGetMarketsResponse>(
          await kujira.getMarket(request.name),
          Types.GetMarketsResponse
        )
      );

      response.status = StatusCodes.OK;

      return response;
    } catch (exception) {
      if (exception instanceof MarketNotFoundError) {
        throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
      } else {
        throw exception;
      }
    }
  }

  if ('names' in request) {
    validateGetMarketsRequest(request);

    try {
      response.body = convertToJsonIfNeeded(
        convert<IMap<string, Market>, CLOBGetMarketsResponse>(
          await kujira.getMarkets(request.names),
          Types.GetMarketsResponse
        )
      );

      response.status = StatusCodes.OK;

      return response;
    } catch (exception: any) {
      if (exception instanceof MarketNotFoundError) {
        throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
      } else {
        throw exception;
      }
    }
  }

  response.body = convertToJsonIfNeeded(
    convert<IMap<string, Market>, CLOBGetMarketsResponse>(
      await kujira.getAllMarkets(),
      Types.GetMarketsResponse
    )
  );

  response.status = StatusCodes.OK;

  return response;
}

/**
 * Get the current orderbook for each informed market.
 *
 * @param _cosmos
 * @param kujira
 * @param request
 */
export async function getOrderBooks(
  _cosmos: Cosmosish,
  kujira: Kujiraish,
  request: CLOBGetOrderBooksRequest
): Promise<ResponseWrapper<CLOBGetOrderBooksResponse>> {
  const response = new ResponseWrapper<CLOBGetOrderBooksResponse>();

  if ('marketName' in request) {
    validateGetOrderBookRequest(request);

    try {
      response.body = convertToJsonIfNeeded(
        convert<OrderBook, CLOBGetOrderBooksResponse>(
          await kujira.getOrderBook(request.marketName),
          Types.GetOrderBooksResponse
        )
      );

      response.status = StatusCodes.OK;

      return response;
    } catch (exception) {
      if (exception instanceof MarketNotFoundError) {
        throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
      } else {
        throw exception;
      }
    }
  }

  if ('marketNames' in request) {
    validateGetOrderBooksRequest(request);

    try {
      response.body = convertToJsonIfNeeded(
        convert<IMap<string, OrderBook>, CLOBGetOrderBooksResponse>(
          await kujira.getOrderBooks(request.marketNames),
          Types.GetOrderBooksResponse
        )
      );

      response.status = StatusCodes.OK;

      return response;
    } catch (exception: any) {
      if (exception instanceof MarketNotFoundError) {
        throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
      } else {
        throw exception;
      }
    }
  }

  response.body = convertToJsonIfNeeded(
    convert<IMap<string, OrderBook>, CLOBGetOrderBooksResponse>(
      await kujira.getAllOrderBooks(),
      Types.GetOrderBooksResponse
    )
  );

  response.status = StatusCodes.OK;

  return response;
}

/**
 * Get the last traded prices for each informed market.
 *
 * @param _cosmos
 * @param kujira
 * @param request
 */
export async function getTickers(
  _cosmos: Cosmosish,
  kujira: Kujiraish,
  request: CLOBGetTickersRequest
): Promise<ResponseWrapper<CLOBGetTickersResponse>> {
  const response = new ResponseWrapper<CLOBGetTickersResponse>();

  if ('marketName' in request) {
    validateGetTickerRequest(request);

    try {
      response.body = convertToJsonIfNeeded(
        convert<Ticker, CLOBGetTickersResponse>(
          await kujira.getTicker(request.marketName),
          Types.GetTickersResponse
        )
      );

      response.status = StatusCodes.OK;

      return response;
    } catch (exception) {
      if (exception instanceof MarketNotFoundError) {
        throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
      } else {
        throw exception;
      }
    }
  }

  if ('marketNames' in request) {
    validateGetTickersRequest(request);

    try {
      response.body = convertToJsonIfNeeded(
        convert<IMap<string, Ticker>, CLOBGetTickersResponse>(
          await kujira.getTickers(request.marketNames),
          Types.GetTickersResponse
        )
      );

      response.status = StatusCodes.OK;

      return response;
    } catch (exception: any) {
      if (exception instanceof MarketNotFoundError) {
        throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
      } else {
        throw exception;
      }
    }
  }

  response.body = convertToJsonIfNeeded(
    convert<IMap<string, Ticker>, CLOBGetTickersResponse>(
      await kujira.getAllTickers(),
      Types.GetTickersResponse
    )
  );

  response.status = StatusCodes.OK;

  return response;
}

/**
 * Get one or more orders.
 *
 * @param _cosmos
 * @param kujira
 * @param request
 */
export async function getOrders(
  _cosmos: Cosmosish,
  kujira: Kujiraish,
  request: CLOBGetOrdersRequest
): Promise<ResponseWrapper<CLOBGetOrdersResponse>> {
  const response = new ResponseWrapper<CLOBGetOrdersResponse>();

  if ('order' in request) {
    validateGetOrderRequest(request.order);

    try {
      response.body = convertToJsonIfNeeded(
        convert<Order, CLOBGetOrdersResponse>(
          await kujira.getOrder(request.order, request.limit),
          Types.GetOrdersResponse
        )
      );

      response.status = StatusCodes.OK;

      return response;
    } catch (exception) {
      if (exception instanceof OrderNotFoundError) {
        throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
      } else {
        throw exception;
      }
    }
  }

  if ('orders' in request) {
    validateGetOrdersRequest(request.orders);

    try {
      const orders = await kujira.getOrders(request.orders, request.limit);

      if (!orders.size) throw new OrderNotFoundError('No orders found.');

      response.body = convertToJsonIfNeeded(
        convert<IMap<string, Order>, CLOBGetOrdersResponse>(
          orders,
          Types.GetOrdersResponse
        )
      );

      response.status = StatusCodes.OK;

      return response;
    } catch (exception: any) {
      if (exception instanceof OrderNotFoundError) {
        throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
      } else {
        throw exception;
      }
    }
  }

  validateGetAllOrdersRequest(request);

  response.body = convertToJsonIfNeeded(
    convert<IMap<string, IMap<string, Order>>, CLOBGetOrdersResponse>(
      await kujira.getAllOrders(
        request.ownerAddress,
        request.marketName,
        request.marketNames,
        request.limit
      ),
      Types.GetFilledOrdersResponse
    )
  );

  response.status = StatusCodes.OK;

  return response;
}

/**
 * Create one or more orders.
 *
 * @param _cosmos
 * @param kujira
 * @param request
 */
export async function createOrders(
  _cosmos: Cosmosish,
  kujira: Kujiraish,
  request: CLOBCreateOrdersRequest
): Promise<ResponseWrapper<CLOBCreateOrdersResponse>> {
  const response = new ResponseWrapper<CLOBCreateOrdersResponse>();

  if ('order' in request) {
    validateCreateOrderRequest(request.order);

    response.body = convertToJsonIfNeeded(
      convert<Order, CLOBCreateOrdersResponse>(
        await kujira.createOrder(request.order, request.replaceIfExists),
        Types.CreateOrdersResponse
      )
    );

    response.status = StatusCodes.OK;

    return response;
  }

  if ('orders' in request) {
    validateCreateOrdersRequest(request.orders);

    response.body = convertToJsonIfNeeded(
      convert<IMap<string, Order>, CLOBCreateOrdersResponse>(
        await kujira.createOrders(request.orders, request.replaceIfExists),
        Types.CreateOrdersResponse
      )
    );

    response.status = StatusCodes.OK;

    return response;
  }

  throw new HttpException(
    StatusCodes.BAD_REQUEST,
    `No order(s) was/were informed.`
  );
}

/**
 * Cancel one or more orders.
 *
 * @param _cosmos
 * @param kujira
 * @param request
 */
export async function cancelOrders(
  _cosmos: Cosmosish,
  kujira: Kujiraish,
  request: CLOBCancelOrdersRequest
): Promise<ResponseWrapper<CLOBCancelOrdersResponse>> {
  const response = new ResponseWrapper<CLOBCancelOrdersResponse>();

  if ('order' in request) {
    validateCancelOrderRequest(request.order);

    response.body = convertToJsonIfNeeded(
      convert<Order, CLOBCancelOrdersResponse>(
        await kujira.cancelOrder(request.order),
        Types.CancelOrdersResponse
      )
    );

    response.status = StatusCodes.OK;

    return response;
  }

  if ('orders' in request) {
    validateCancelOrdersRequest(request.orders);

    response.body = convertToJsonIfNeeded(
      convert<IMap<string, Order>, CLOBCancelOrdersResponse>(
        await kujira.cancelOrders(request.orders),
        Types.CancelOrdersResponse
      )
    );

    response.status = StatusCodes.OK;

    return response;
  }

  validateCancelAllOrdersRequest(request);

  response.body = convertToJsonIfNeeded(
    convert<IMap<string, Order>, CLOBCancelOrdersResponse>(
      await kujira.cancelAllOrders(
        request.ownerAddress,
        request.marketName,
        request.marketNames
      ),
      Types.CancelOrdersResponse
    )
  );

  response.status = StatusCodes.OK;

  return response;
}

/**
 * Get all open orders for each informed market.
 *
 * @param _cosmos
 * @param kujira
 * @param request
 */
export async function getOpenOrders(
  _cosmos: Cosmosish,
  kujira: Kujiraish,
  request: CLOBGetOpenOrdersRequest
): Promise<ResponseWrapper<CLOBGetOpenOrdersResponse>> {
  const response = new ResponseWrapper<CLOBGetOpenOrdersResponse>();

  if ('order' in request) {
    validateGetOpenOrderRequest(request.order);

    try {
      response.body = convertToJsonIfNeeded(
        convert<Order, CLOBGetOpenOrdersResponse>(
          await kujira.getOpenOrder(request.order),
          Types.GetOpenOrdersResponse
        )
      );

      response.status = StatusCodes.OK;

      return response;
    } catch (exception) {
      if (exception instanceof OrderNotFoundError) {
        throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
      } else {
        throw exception;
      }
    }
  }

  if ('orders' in request) {
    validateGetOpenOrdersRequest(request.orders);

    try {
      const orders = await kujira.getOpenOrders(request.orders);

      if (!orders.size) throw new OrderNotFoundError('No open orders found.');

      response.body = convertToJsonIfNeeded(
        convert<IMap<string, Order>, CLOBGetOrdersResponse>(
          orders,
          Types.GetOrdersResponse
        )
      );

      response.status = StatusCodes.OK;

      return response;
    } catch (exception: any) {
      if (exception instanceof OrderNotFoundError) {
        throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
      } else {
        throw exception;
      }
    }
  }

  validateGetAllOrdersRequest(request);

  response.body = convertToJsonIfNeeded(
    convert<IMap<string, IMap<string, Order>>, CLOBGetOpenOrdersResponse>(
      await kujira.getAllOpenOrders(
        request.ownerAddress,
        request.marketName,
        request.marketNames
      ),
      Types.GetOpenOrdersResponse
    )
  );

  response.status = StatusCodes.OK;

  return response;
}

/**
 * Get one or more filled orders.
 *
 * @param _cosmos
 * @param kujira
 * @param request
 */
export async function getFilledOrders(
  _cosmos: Cosmosish,
  kujira: Kujiraish,
  request: CLOBGetFilledOrdersRequest
): Promise<ResponseWrapper<CLOBGetFilledOrdersResponse>> {
  const response = new ResponseWrapper<CLOBGetFilledOrdersResponse>();

  if ('order' in request) {
    validateGetFilledOrderRequest(request.order);

    try {
      response.body = convertToJsonIfNeeded(
        convert<Order, CLOBGetFilledOrdersResponse>(
          await kujira.getFilledOrder(request.order, request.limit),
          Types.GetFilledOrdersResponse
        )
      );

      response.status = StatusCodes.OK;

      return response;
    } catch (exception) {
      if (exception instanceof OrderNotFoundError) {
        throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
      } else {
        throw exception;
      }
    }
  }

  if ('orders' in request) {
    validateGetFilledOrdersRequest(request.orders);

    try {
      response.body = convertToJsonIfNeeded(
        convert<IMap<string, Order>, CLOBGetFilledOrdersResponse>(
          await kujira.getFilledOrders(request.orders, request.limit),
          Types.GetFilledOrdersResponse
        )
      );

      response.status = StatusCodes.OK;

      return response;
    } catch (exception: any) {
      if (exception instanceof OrderNotFoundError) {
        throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
      } else {
        throw exception;
      }
    }
  }

  validateGetAllOrdersRequest(request);

  response.body = convertToJsonIfNeeded(
    convert<IMap<string, IMap<string, Order>>, CLOBGetFilledOrdersResponse>(
      await kujira.getAllFilledOrders(
        request.marketName,
        request.marketNames,
        request.limit
      ),
      Types.GetFilledOrdersResponse
    )
  );

  response.status = StatusCodes.OK;

  return response;
}

/**
 * Settle funds for one or more markets.
 *
 * @param _cosmos
 * @param kujira
 * @param request
 */
export async function settleFunds(
  _cosmos: Cosmosish,
  kujira: Kujiraish,
  request: CLOBPostSettleFundsRequest
): Promise<ResponseWrapper<CLOBPostSettleFundsResponse>> {
  const response = new ResponseWrapper<CLOBPostSettleFundsResponse>();

  if ('marketName' in request) {
    validateSettleFundsRequest(request);

    try {
      response.body = convertToJsonIfNeeded(
        convert<Fund[], CLOBPostSettleFundsResponse>(
          await kujira.settleFundsForMarket(
            request.marketName,
            request.ownerAddress
          ),
          Types.PostSettleFundsResponse
        )
      );

      response.status = StatusCodes.OK;

      return response;
    } catch (exception) {
      if (exception instanceof MarketNotFoundError) {
        throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
      } else {
        throw exception;
      }
    }
  }

  if ('marketNames' in request) {
    validateSettleFundsSeveralRequest(request);

    try {
      response.body = convertToJsonIfNeeded(
        convert<IMap<string, Fund[]>, CLOBPostSettleFundsResponse>(
          await kujira.settleFundsForMarkets(
            request.marketNames,
            request.ownerAddress
          ),
          Types.PostSettleFundsResponse
        )
      );

      response.status = StatusCodes.OK;

      return response;
    } catch (exception: any) {
      if (exception instanceof MarketNotFoundError) {
        throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
      } else {
        throw exception;
      }
    }
  }

  validateSettleAllFundsRequest(request);

  response.body = convertToJsonIfNeeded(
    convert<IMap<string, Fund[]>, CLOBPostSettleFundsResponse>(
      await kujira.settleAllFunds(request.ownerAddress),
      Types.PostSettleFundsResponse
    )
  );

  response.status = StatusCodes.OK;

  return response;
}
