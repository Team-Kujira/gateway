import { StatusCodes } from 'http-status-codes';
import { ResponseWrapper } from '../../services/common-interfaces';
import { HttpException } from '../../services/error-handler';
import { Kujira as Connector } from './kujira';
import { convertToResponseBody } from './kujira.convertors';
import {
  Address,
  BalanceNotFoundError,
  Block,
  CancelAllOrdersOptions,
  CancelOrderOptions,
  CancelOrdersOptions,
  EstimatedFees,
  GetAllBalancesOptions,
  GetAllMarketsOptions,
  GetAllOrderBookOptions,
  GetAllTickersOptions,
  GetAllTokensOptions,
  GetBalanceOptions,
  GetBalancesOptions,
  GetCurrentBlockOptions,
  GetEstimatedFeesOptions,
  GetMarketOptions,
  GetMarketsOptions,
  GetOrderBookOptions,
  GetOrderBooksOptions,
  GetOrderOptions,
  GetOrdersOptions,
  GetTickerOptions,
  GetTickersOptions,
  GetTokenOptions,
  GetTokensOptions,
  GetTransactionOptions,
  GetTransactionsOptions,
  GetWalletPublicKeyOptions,
  GetWalletsPublicKeysOptions,
  IMap,
  Market,
  MarketId,
  MarketNotFoundError,
  Order,
  OrderBook,
  OrderBookNotFoundError,
  OrderId,
  OrderNotFoundError,
  OwnerAddress,
  PlaceOrderOptions,
  PlaceOrdersOptions,
  Settlement,
  SettlementOptions,
  SettlementsAllOptions,
  SettlementsOptions,
  TickerNotFoundError,
  Token,
  TokenId,
  TokenNotFoundError,
  Transaction,
  TransactionNotFoundError,
  TransactionSignature,
  WalletPublicKeyNotFoundError,
} from './kujira.types';
import {
  validateCancelAllOrdersRequest,
  validateCancelOrderRequest,
  validateCancelOrdersRequest,
  validateGetAllBalancesRequest,
  validateGetAllMarketsRequest,
  validateGetAllOrderBooksRequest,
  validateGetAllTickersRequest,
  validateGetAllTokensRequest,
  validateGetBalanceRequest,
  validateGetBalancesRequest,
  validateGetMarketRequest,
  validateGetMarketsRequest,
  validateGetOrderBookRequest,
  validateGetOrderBooksRequest,
  validateGetOrderRequest,
  validateGetOrdersRequest,
  validateGetTickerRequest,
  validateGetTickersRequest,
  validateGetTokenRequest,
  validateGetTokensRequest,
  validatePlaceOrderRequest,
  validatePlaceOrdersRequest,
} from './kujira.validators';

export async function getToken(
  connector: Connector,
  request: GetTokenOptions
): Promise<ResponseWrapper<Token>> {
  validateGetTokenRequest(request);

  const response = new ResponseWrapper<Token>();

  try {
    response.body = convertToResponseBody(await connector.getToken(request));

    response.status = StatusCodes.OK;

    return response;
  } catch (exception) {
    if (exception instanceof TokenNotFoundError) {
      throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
    } else {
      throw exception;
    }
  }
}

export async function getTokens(
  connector: Connector,
  request: GetTokensOptions
): Promise<ResponseWrapper<IMap<TokenId, Token>>> {
  validateGetTokensRequest(request);

  const response = new ResponseWrapper<IMap<TokenId, Token>>();

  try {
    response.body = convertToResponseBody(await connector.getTokens(request));

    response.status = StatusCodes.OK;

    return response;
  } catch (exception) {
    if (exception instanceof TokenNotFoundError) {
      throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
    } else {
      throw exception;
    }
  }
}

export async function getAllTokens(
  connector: Connector,
  request: GetAllTokensOptions
): Promise<ResponseWrapper<IMap<TokenId, Token>>> {
  validateGetAllTokensRequest(request);

  const response = new ResponseWrapper<IMap<TokenId, Token>>();

  try {
    response.body = convertToResponseBody(
      await connector.getAllTokens(request)
    );

    response.status = StatusCodes.OK;

    return response;
  } catch (exception) {
    if (exception instanceof TokenNotFoundError) {
      throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
    } else {
      throw exception;
    }
  }
}

export async function getMarket(
  connector: Connector,
  request: GetMarketOptions
): Promise<ResponseWrapper<Market>> {
  validateGetMarketRequest(request);

  const response = new ResponseWrapper<Market>();

  try {
    response.body = convertToResponseBody(await connector.getMarket(request));

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

export async function getMarkets(
  connector: Connector,
  request: GetMarketsOptions
): Promise<ResponseWrapper<IMap<MarketId, Market>>> {
  validateGetMarketsRequest(request);

  const response = new ResponseWrapper<IMap<MarketId, Market>>();

  try {
    response.body = convertToResponseBody(await connector.getMarkets(request));

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

export async function getAllMarkets(
  connector: Connector,
  request: GetAllMarketsOptions
): Promise<ResponseWrapper<IMap<MarketId, Market>>> {
  validateGetAllMarketsRequest(request);

  const response = new ResponseWrapper<IMap<MarketId, Market>>();

  try {
    response.body = convertToResponseBody(
      await connector.getAllMarkets(request)
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

export async function getOrderBook(
  connector: Connector,
  request: GetOrderBookOptions
): Promise<ResponseWrapper<OrderBook>> {
  validateGetOrderBookRequest(request);

  const response = new ResponseWrapper<OrderBook>();

  try {
    response.body = convertToResponseBody(
      await connector.getOrderBook(request)
    );

    response.status = StatusCodes.OK;

    return response;
  } catch (exception) {
    if (exception instanceof OrderBookNotFoundError) {
      throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
    } else {
      throw exception;
    }
  }
}

export async function getOrderBooks(
  connector: Connector,
  request: GetOrderBooksOptions
): Promise<ResponseWrapper<IMap<MarketId, OrderBook>>> {
  validateGetOrderBooksRequest(request);

  const response = new ResponseWrapper<IMap<MarketId, OrderBook>>();

  try {
    response.body = convertToResponseBody(
      await connector.getOrderBooks(request)
    );

    response.status = StatusCodes.OK;

    return response;
  } catch (exception) {
    if (exception instanceof OrderBookNotFoundError) {
      throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
    } else {
      throw exception;
    }
  }
}

export async function getAllOrderBooks(
  connector: Connector,
  request: GetAllOrderBookOptions
): Promise<ResponseWrapper<IMap<MarketId, OrderBook>>> {
  validateGetAllOrderBooksRequest(request);

  const response = new ResponseWrapper<IMap<MarketId, OrderBook>>();

  try {
    response.body = convertToResponseBody(
      await connector.getAllOrderBooks(request)
    );

    response.status = StatusCodes.OK;

    return response;
  } catch (exception) {
    if (exception instanceof OrderBookNotFoundError) {
      throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
    } else {
      throw exception;
    }
  }
}

export async function getTicker(
  connector: Connector,
  request: GetTickerOptions
): Promise<ResponseWrapper<any>> {
  validateGetTickerRequest(request);

  const response = new ResponseWrapper<any>();

  try {
    response.body = convertToResponseBody(await connector.getTicker(request));

    response.status = StatusCodes.OK;

    return response;
  } catch (exception) {
    if (exception instanceof TickerNotFoundError) {
      throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
    } else {
      throw exception;
    }
  }
}

export async function getTickers(
  connector: Connector,
  request: GetTickersOptions
): Promise<ResponseWrapper<any>> {
  validateGetTickersRequest(request);

  const response = new ResponseWrapper<any>();

  try {
    response.body = convertToResponseBody(await connector.getTickers(request));

    response.status = StatusCodes.OK;

    return response;
  } catch (exception) {
    if (exception instanceof TickerNotFoundError) {
      throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
    } else {
      throw exception;
    }
  }
}

export async function getAllTickers(
  connector: Connector,
  request: GetAllTickersOptions
): Promise<ResponseWrapper<any>> {
  validateGetAllTickersRequest(request);

  const response = new ResponseWrapper<any>();

  try {
    response.body = convertToResponseBody(
      await connector.getAllTickers(request)
    );

    response.status = StatusCodes.OK;

    return response;
  } catch (exception) {
    if (exception instanceof TickerNotFoundError) {
      throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
    } else {
      throw exception;
    }
  }
}

export async function getBalance(
  connector: Connector,
  request: GetBalanceOptions
): Promise<ResponseWrapper<any>> {
  validateGetBalanceRequest(request);

  const response = new ResponseWrapper<any>();

  try {
    response.body = convertToResponseBody(await connector.getBalance(request));

    response.status = StatusCodes.OK;

    return response;
  } catch (exception) {
    if (exception instanceof BalanceNotFoundError) {
      throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
    } else {
      throw exception;
    }
  }
}

export async function getBalances(
  connector: Connector,
  request: GetBalancesOptions
): Promise<ResponseWrapper<any>> {
  validateGetBalancesRequest(request);

  const response = new ResponseWrapper<any>();

  try {
    response.body = convertToResponseBody(await connector.getBalances(request));

    response.status = StatusCodes.OK;

    return response;
  } catch (exception) {
    if (exception instanceof BalanceNotFoundError) {
      throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
    } else {
      throw exception;
    }
  }
}

export async function getAllBalances(
  connector: Connector,
  request: GetAllBalancesOptions
): Promise<ResponseWrapper<any>> {
  validateGetAllBalancesRequest(request);

  const response = new ResponseWrapper<any>();

  try {
    response.body = convertToResponseBody(
      await connector.getAllBalances(request)
    );

    response.status = StatusCodes.OK;

    return response;
  } catch (exception) {
    if (exception instanceof BalanceNotFoundError) {
      throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
    } else {
      throw exception;
    }
  }
}

export async function getOrder(
  connector: Connector,
  request: GetOrderOptions
): Promise<ResponseWrapper<Order>> {
  validateGetOrderRequest(request);

  const response = new ResponseWrapper<Order>();

  try {
    response.body = convertToResponseBody(await connector.getOrder(request));

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

export async function getOrders(
  connector: Connector,
  request: GetOrdersOptions
): Promise<ResponseWrapper<IMap<OrderId, Order>>> {
  validateGetOrdersRequest(request);

  const response = new ResponseWrapper<IMap<OrderId, Order>>();

  try {
    response.body = convertToResponseBody(await connector.getOrders(request));

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

export async function placeOrder(
  connector: Connector,
  request: PlaceOrderOptions
): Promise<ResponseWrapper<Order>> {
  validatePlaceOrderRequest(request);

  const response = new ResponseWrapper<Order>();

  response.body = convertToResponseBody(await connector.placeOrder(request));

  response.status = StatusCodes.OK;

  return response;
}

export async function placeOrders(
  connector: Connector,
  request: PlaceOrdersOptions
): Promise<ResponseWrapper<IMap<OrderId, Order>>> {
  validatePlaceOrdersRequest(request);

  const response = new ResponseWrapper<IMap<OrderId, Order>>();

  response.body = convertToResponseBody(await connector.placeOrders(request));

  response.status = StatusCodes.OK;

  return response;
}

export async function cancelOrder(
  connector: Connector,
  request: CancelOrderOptions
): Promise<ResponseWrapper<Order>> {
  validateCancelOrderRequest(request);

  const response = new ResponseWrapper<Order>();

  try {
    response.body = convertToResponseBody(await connector.cancelOrder(request));

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

export async function cancelOrders(
  connector: Connector,
  request: CancelOrdersOptions
): Promise<ResponseWrapper<IMap<OrderId, Order>>> {
  validateCancelOrdersRequest(request);

  const response = new ResponseWrapper<IMap<OrderId, Order>>();

  try {
    response.body = convertToResponseBody(
      await connector.cancelOrders(request)
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

export async function cancelAllOrders(
  connector: Connector,
  request: CancelAllOrdersOptions
): Promise<ResponseWrapper<IMap<OrderId, Order>>> {
  validateCancelAllOrdersRequest(request);

  const response = new ResponseWrapper<IMap<OrderId, Order>>();

  response.body = convertToResponseBody(
    await connector.cancelAllOrders(request)
  );

  response.status = StatusCodes.OK;

  return response;
}

export async function settleMarketFunds(
  connector: Connector,
  request: SettlementOptions
): Promise<ResponseWrapper<IMap<OwnerAddress, Settlement>>> {
  // validateSettleMarketFundsRequest(request);

  const response = new ResponseWrapper<IMap<OwnerAddress, Settlement>>();

  try {
    response.body = convertToResponseBody(
      await connector.settleMarketFunds(request)
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

export async function settleMarketsFunds(
  connector: Connector,
  request: SettlementsOptions
): Promise<ResponseWrapper<IMap<MarketId, IMap<OwnerAddress, Settlement>>>> {
  // validateSettleMarketsFundsRequest(request);

  const response = new ResponseWrapper<
    IMap<MarketId, IMap<OwnerAddress, Settlement>>
  >();

  try {
    response.body = convertToResponseBody(
      await connector.settleMarketsFunds(request)
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

export async function settleAllMarketsFunds(
  connector: Connector,
  request: SettlementsAllOptions
): Promise<ResponseWrapper<IMap<MarketId, IMap<OwnerAddress, Settlement>>>> {
  // validateSettleAllMarketsFundsRequest(request);

  const response = new ResponseWrapper<
    IMap<MarketId, IMap<OwnerAddress, Settlement>>
  >();

  response.body = convertToResponseBody(
    await connector.settleAllMarketsFunds(request)
  );

  response.status = StatusCodes.OK;

  return response;
}

export async function getWalletPublicKey(
  connector: Connector,
  request: GetWalletPublicKeyOptions
): Promise<ResponseWrapper<Address>> {
  // validateGetWalletPublicKeyRequest(request);

  const response = new ResponseWrapper<Address>();

  try {
    response.body = convertToResponseBody(
      await connector.getWalletPublicKey(request)
    );

    response.status = StatusCodes.OK;

    return response;
  } catch (exception) {
    if (exception instanceof WalletPublicKeyNotFoundError) {
      throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
    } else {
      throw exception;
    }
  }
}

export async function getWalletsPublicKeys(
  connector: Connector,
  request: GetWalletsPublicKeysOptions
): Promise<ResponseWrapper<Address[]>> {
  // validateGetWalletsPublicKeysRequest(request);

  const response = new ResponseWrapper<Address[]>();

  try {
    response.body = convertToResponseBody(
      await connector.getWalletsPublicKeys(request)
    );

    response.status = StatusCodes.OK;

    return response;
  } catch (exception) {
    if (exception instanceof WalletPublicKeyNotFoundError) {
      throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
    } else {
      throw exception;
    }
  }
}

export async function getTransaction(
  connector: Connector,
  request: GetTransactionOptions
): Promise<ResponseWrapper<Transaction>> {
  // validateGetTransactionRequest(request);

  const response = new ResponseWrapper<Transaction>();

  try {
    response.body = convertToResponseBody(
      await connector.getTransaction(request)
    );

    response.status = StatusCodes.OK;

    return response;
  } catch (exception) {
    if (exception instanceof TransactionNotFoundError) {
      throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
    } else {
      throw exception;
    }
  }
}

export async function getTransactions(
  connector: Connector,
  request: GetTransactionsOptions
): Promise<ResponseWrapper<IMap<TransactionSignature, Transaction>>> {
  // validateGetTransactionsRequest(request);

  const response = new ResponseWrapper<
    IMap<TransactionSignature, Transaction>
  >();

  try {
    response.body = convertToResponseBody(
      await connector.getTransactions(request)
    );

    response.status = StatusCodes.OK;

    return response;
  } catch (exception) {
    if (exception instanceof TransactionNotFoundError) {
      throw new HttpException(StatusCodes.NOT_FOUND, exception.message);
    } else {
      throw exception;
    }
  }
}

export async function getCurrentBlock(
  connector: Connector,
  request: GetCurrentBlockOptions
): Promise<ResponseWrapper<Block>> {
  // validateGetCurrentBlockRequest(request);

  const response = new ResponseWrapper<Block>();

  response.body = convertToResponseBody(
    await connector.getCurrentBlock(request)
  );

  response.status = StatusCodes.OK;

  return response;
}

export async function getEstimatedFees(
  connector: Connector,
  request: GetEstimatedFeesOptions
): Promise<ResponseWrapper<EstimatedFees>> {
  // validateGetEstimatedFeesRequest(request);

  const response = new ResponseWrapper<EstimatedFees>();

  response.body = convertToResponseBody(
    await connector.getEstimatedFees(request)
  );

  response.status = StatusCodes.OK;

  return response;
}
