import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { asyncHandler } from '../../services/error-handler';
import { Kujira } from './kujira';
import { verifyKujiraIsAvailable } from './kujira.helpers';
import { getMarket } from './kujira.controllers';
import { GetMarketRequest, Market } from './kujira.types';

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
    '/market',
    asyncHandler(
      async (
        request: Request<any, any, GetMarketRequest>,
        response: Response<Market, any>
      ) => {
        const controller = await getController(request);

        const result = await getMarket(controller, request.body);

        return await response.status(result.status).json(result.body);
      }
    )
  );
}
