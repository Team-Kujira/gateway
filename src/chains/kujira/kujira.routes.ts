/* eslint-disable no-inner-declarations */
/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response, Router } from 'express';
import { asyncHandler } from '../../services/error-handler';
import { balances, poll } from './kujira.controllers';
import { KujiraChainMiddleware } from './kujira';
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
        const kujira = await getChain(
          <string>req.body.chain,
          <string>req.body.network
        );
        res
          .status(200)
          .json(await balances(<KujiraChainMiddleware>kujira, req.body));
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
        const kujira = await getChain(
          <string>req.body.chain,
          <string>req.body.network
        );
        res
          .status(200)
          .json(await poll(<KujiraChainMiddleware>kujira, req.body));
      }
    )
  );
}
