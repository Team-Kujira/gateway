import { default as supertest } from 'supertest';
import { Response } from 'express';
import { Express } from 'express-serve-static-core';
import { StatusCodes } from 'http-status-codes';
import { getNotNullOrThrowError } from '../../src/connectors/kujira/kujira.helpers';
import { RESTfulMethods } from '../../src/connectors/kujira/kujira.types';

export type SendRequestOptions<R> = {
  strategy?: 'RESTful' | 'controller';
  isMock?: boolean;
  RESTExpress?: Express;
  RESTMethod: RESTfulMethods;
  RESTRoute: string;
  RESTRequest: any;
  RESTStatusCode?: StatusCodes;
  RESTAccept?: string;
  RESTContentType?: string;
  controller?: any;
  controllerFunction?: (...args: any[]) => Promise<R>;
  controllerFunctionParameters?: any[];
};

export type SendRequestFunction = <R>(
  options: SendRequestOptions<R>
) => Promise<Response<R, any>>;

export const sendRequest: SendRequestFunction = async <R>(
  options: SendRequestOptions<R>
): Promise<Response<R, any>> => {
  if (options.strategy == 'RESTful') {
    const result = (await (
      (supertest(options.RESTExpress) as any)[
        options.RESTMethod.toLowerCase()
      ] as any
    )(options.RESTRoute)
      .send(options.RESTRequest)
      .set('Accept', options.RESTAccept || 'application/json')
      .expect(options.RESTStatusCode || StatusCodes.OK)
      .expect(
        'Content-Type',
        options.RESTContentType || 'application/json; charset=utf-8'
      )) as Response<R, any>;

    return result;
  } else if (options.strategy == 'controller') {
    const result = {
      body: (await getNotNullOrThrowError<any>(
        options.controllerFunction
      ).apply(
        options.controller,
        options.controllerFunctionParameters || options.RESTRequest
      )) as R,
    } as unknown as Response<R, any>;

    return result;
  } else {
    throw new Error(`Unknown strategy: ${options.strategy}`);
  }
};

export function log(target: any, title: string, subTitle?: string) {
  let output = '';

  output += title ? `${title}\n` : '';
  output += subTitle ? `${subTitle}\n` : '';
  output += JSON.stringify(target, null, 2);

  console.log(output);
}

export function logRequest(target: any, title: string) {
  log(target, title, 'request');
}

export function logResponse(target: any, title: string) {
  log(target, title, 'response');
}

// export function logOutput(target: any, title: string) {
//   log(target, title, 'output');
// }
