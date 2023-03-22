/* eslint-disable no-inner-declarations */
/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response, Router } from 'express';
import { asyncHandler } from '../../services/error-handler';
import { KujiraChainMiddleware } from './kujira.chain.middlewares';
import {
  BalancesRequest,
  BalancesResponse,
  PollRequest,
  PollResponse,
} from './kujira.requests';
import {
  validateBalanceRequest,
  validatePollRequest,
} from './kujira.validators';
import { getChain } from '../../services/connection-manager';

export namespace KujiraRoutes {
  export const router = Router();

  router.post(
    '/balances',
    asyncHandler(
      async (
        req: Request<{}, {}, BalancesRequest>,
        res: Response<BalancesResponse, {}>
      ) => {
        validateBalanceRequest(req.body);

        const kujira = await getChain<KujiraChainMiddleware>(
          req.body.chain,
          req.body.network
        );

        const result = await kujira.balances(req.body);

        res.status(200).json(result);
      }
    )
  );

  router.post(
    '/poll',
    asyncHandler(
      async (
        req: Request<{}, {}, PollRequest>,
        res: Response<PollResponse, {}>
      ) => {
        validatePollRequest(req.body);

        const kujira = await getChain<KujiraChainMiddleware>(
          req.body.chain,
          req.body.network
        );

        const result = await kujira.poll(req.body);

        res.status(200).json(result);
      }
    )
  );
}
