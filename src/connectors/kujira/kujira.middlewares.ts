import { NextFunction, Request, Response } from 'express';
import { Kujira } from './kujira';

export const verifyKujiraIsAvailable = async (
  request: Request,
  _response: Response,
  next: NextFunction
) => {
  await Kujira.getInstance(request.body.chain, request.body.network);

  return next();
};
