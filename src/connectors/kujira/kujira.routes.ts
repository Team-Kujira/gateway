import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { asyncHandler } from '../../services/error-handler';
import { Kujira } from './kujira';
import { verifyKujiraIsAvailable } from './kujira.helpers';
import {
  cancelAllOrders,
  cancelOrder,
  cancelOrders,
  getAllBalances,
  getAllOrderBooks,
  getAllTickers,
  getAllTokens,
  getBalance,
  getBalances,
  getCurrentBlock,
  getEstimatedFees,
  getOrder,
  getOrderBook,
  getOrderBooks,
  getOrders,
  getTicker,
  getTickers,
  getToken,
  getTokens,
  getTransaction,
  getTransactions,
  getWalletPublicKey,
  getWalletsPublicKeys,
  placeOrder,
  placeOrders,
  withdrawFromAllMarkets,
  widthdrawFromMarket,
  withdrawsFromMarkets,
} from './kujira.controllers';
import {
  CancelAllOrdersRequest,
  CancelAllOrdersResponse,
  CancelOrderRequest,
  CancelOrderResponse,
  CancelOrdersRequest,
  CancelOrdersResponse,
  GetAllBalancesRequest,
  GetAllBalancesResponse,
  GetAllOrderBooksRequest,
  GetAllOrderBooksResponse,
  GetAllTickersRequest,
  GetAllTickersResponse,
  GetAllTokensRequest,
  GetAllTokensResponse,
  GetBalanceRequest,
  GetBalanceResponse,
  GetBalancesRequest,
  GetBalancesResponse,
  GetCurrentBlockRequest,
  GetCurrentBlockResponse,
  GetEstimatedFeesRequest,
  GetEstimatedFeesResponse,
  GetOrderBookRequest,
  GetOrderBookResponse,
  GetOrderBooksRequest,
  GetOrderBooksResponse,
  GetOrderRequest,
  GetOrderResponse,
  GetOrdersRequest,
  GetOrdersResponse,
  GetTickerRequest,
  GetTickerResponse,
  GetTickersRequest,
  GetTickersResponse,
  GetTokenRequest,
  GetTokenResponse,
  GetTokensRequest,
  GetTokensResponse,
  GetTransactionRequest,
  GetTransactionResponse,
  GetTransactionsRequest,
  GetTransactionsResponse,
  GetWalletPublicKeyRequest,
  GetWalletPublicKeyResponse,
  GetWalletsPublicKeysRequest,
  GetWalletsPublicKeysResponse,
  PlaceOrderRequest,
  PlaceOrderResponse,
  PlaceOrdersRequest,
  PlaceOrdersResponse,
  AllMarketsWithdrawsRequest,
  AllMarketsWithdrawsResponse,
  MarketWithdrawRequest,
  MarketWithdrawResponse,
  MarketsWithdrawsRequest,
  MarketsWithdrawsFundsResponse,
} from './kujira.types';

export namespace KujiraRoutes {
  export const router = Router();

  export const getController = async (request: Request) =>
    await Kujira.getInstance(request.body.chain, request.body.network);

  router.use(asyncHandler(verifyKujiraIsAvailable));

  router.get(
    '/',
    asyncHandler(
      async (request: Request<any>, response: Response<any, any>) => {
        const kujira = await getController(request);

        response.status(StatusCodes.OK).json({
          chain: kujira.chain,
          network: kujira.network,
          connector: kujira.connector,
          connection: kujira.isReady,
          timestamp: Date.now(),
        });
      }
    )
  );

  router.get(
    '/token',
    asyncHandler(
      async (
        request: Request<any, any, GetTokenRequest>,
        response: Response<GetTokenResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await getToken(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.get(
    '/tokens',
    asyncHandler(
      async (
        request: Request<any, any, GetTokensRequest>,
        response: Response<GetTokensResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await getTokens(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.get(
    '/tokens/all',
    asyncHandler(
      async (
        request: Request<any, any, GetAllTokensRequest>,
        response: Response<GetAllTokensResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await getAllTokens(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.get(
    '/market',
    asyncHandler(
      async (
        request: Request<any, any, GetMarketRequest>,
        response: Response<GetMarketResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await getMarket(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.get(
    '/markets',
    asyncHandler(
      async (
        request: Request<any, any, GetMarketsRequest>,
        response: Response<GetMarketsResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await getMarkets(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.get(
    '/markets/all',
    asyncHandler(
      async (
        request: Request<any, any, GetAllMarketsRequest>,
        response: Response<GetAllMarketsResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await getAllMarkets(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.get(
    '/orderBook',
    asyncHandler(
      async (
        request: Request<any, any, GetOrderBookRequest>,
        response: Response<GetOrderBookResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await getOrderBook(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.get(
    '/orderBooks',
    asyncHandler(
      async (
        request: Request<any, any, GetOrderBooksRequest>,
        response: Response<GetOrderBooksResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await getOrderBooks(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.get(
    '/orderBooks/all',
    asyncHandler(
      async (
        request: Request<any, any, GetAllOrderBooksRequest>,
        response: Response<GetAllOrderBooksResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await getAllOrderBooks(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.get(
    '/ticker',
    asyncHandler(
      async (
        request: Request<any, any, GetTickerRequest>,
        response: Response<GetTickerResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await getTicker(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.get(
    '/tickers',
    asyncHandler(
      async (
        request: Request<any, any, GetTickersRequest>,
        response: Response<GetTickersResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await getTickers(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.get(
    '/ticker/all',
    asyncHandler(
      async (
        request: Request<any, any, GetAllTickersRequest>,
        response: Response<GetAllTickersResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await getAllTickers(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.get(
    '/balance',
    asyncHandler(
      async (
        request: Request<any, any, GetBalanceRequest>,
        response: Response<GetBalanceResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await getBalance(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.get(
    '/balances',
    asyncHandler(
      async (
        request: Request<any, any, GetBalancesRequest>,
        response: Response<GetBalancesResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await getBalances(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.get(
    '/balances/all',
    asyncHandler(
      async (
        request: Request<any, any, GetAllBalancesRequest>,
        response: Response<GetAllBalancesResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await getAllBalances(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.get(
    '/order',
    asyncHandler(
      async (
        request: Request<any, any, GetOrderRequest>,
        response: Response<GetOrderResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await getOrder(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.get(
    '/orders',
    asyncHandler(
      async (
        request: Request<any, any, GetOrdersRequest>,
        response: Response<GetOrdersResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await getOrders(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.post(
    '/order',
    asyncHandler(
      async (
        request: Request<any, any, PlaceOrderRequest>,
        response: Response<PlaceOrderResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await placeOrder(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.post(
    '/orders',
    asyncHandler(
      async (
        request: Request<any, any, PlaceOrdersRequest>,
        response: Response<PlaceOrdersResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await placeOrders(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.delete(
    '/order',
    asyncHandler(
      async (
        request: Request<any, any, CancelOrderRequest>,
        response: Response<CancelOrderResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await cancelOrder(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.delete(
    '/orders',
    asyncHandler(
      async (
        request: Request<any, any, CancelOrdersRequest>,
        response: Response<CancelOrdersResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await cancelOrders(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.delete(
    '/orders/all',
    asyncHandler(
      async (
        request: Request<any, any, CancelAllOrdersRequest>,
        response: Response<CancelAllOrdersResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await cancelAllOrders(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.post(
    '/market/withdraw',
    asyncHandler(
      async (
        request: Request<any, any, MarketWithdrawRequest>,
        response: Response<MarketWithdrawResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await widthdrawFromMarket(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.post(
    '/market/withdraws',
    asyncHandler(
      async (
        request: Request<any, any, MarketsWithdrawsRequest>,
        response: Response<MarketsWithdrawsFundsResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await withdrawsFromMarkets(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.post(
    '/market/withdraws/all',
    asyncHandler(
      async (
        request: Request<any, any, AllMarketsWithdrawsRequest>,
        response: Response<AllMarketsWithdrawsResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await withdrawFromAllMarkets(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.get(
    '/transaction',
    asyncHandler(
      async (
        request: Request<any, any, GetTransactionRequest>,
        response: Response<GetTransactionResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await getTransaction(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.get(
    '/transactions',
    asyncHandler(
      async (
        request: Request<any, any, GetTransactionsRequest>,
        response: Response<GetTransactionsResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await getTransactions(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.get(
    '/wallet/publicKey',
    asyncHandler(
      async (
        request: Request<any, any, GetWalletPublicKeyRequest>,
        response: Response<GetWalletPublicKeyResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await getWalletPublicKey(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.get(
    '/wallet/publicKeys',
    asyncHandler(
      async (
        request: Request<any, any, GetWalletsPublicKeysRequest>,
        response: Response<GetWalletsPublicKeysResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await getWalletsPublicKeys(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.get(
    '/block/current',
    asyncHandler(
      async (
        request: Request<any, any, GetCurrentBlockRequest>,
        response: Response<GetCurrentBlockResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await getCurrentBlock(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );

  router.get(
    '/fees/estimated',
    asyncHandler(
      async (
        request: Request<any, any, GetEstimatedFeesRequest>,
        response: Response<GetEstimatedFeesResponse, any>
      ) => {
        const controller = await getController(request);

        const result = await getEstimatedFees(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );
}
