import { default as supertest } from 'supertest';
import { Express } from 'express-serve-static-core';
import { StatusCodes } from 'http-status-codes';
import { getNotNullOrThrowError } from '../../src/connectors/kujira/kujira.helpers';
import * as superagent from 'superagent';

export type SendRequestOptions<R> = {
  strategy?: 'RESTful' | 'controller';
  isMock?: boolean;
  RESTExpress?: Express;
  RESTMethod: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  RESTRoute: string;
  RESTRequest: any;
  RESTStatusCode?: StatusCodes;
  RESTAccept?: string;
  RESTContentType?: string;
  controller?: any;
  controllerFunction?: (...args: any[]) => R;
  controllerFunctionParameters?: any[];
};

export type SendRequestFunction = <R>(
  options: SendRequestOptions<R>
) => Promise<Response | superagent.Response>;

export const sendRequest: SendRequestFunction = async <R>(
  options: SendRequestOptions<R>
): Promise<Response | superagent.Response> => {
  if (options.strategy == 'RESTful') {
    return (await (
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
      )) as any;
  } else if (options.strategy == 'controller') {
    return {
      body: (await getNotNullOrThrowError<any>(
        options.controllerFunction
      ).apply(options.controller, options.controllerFunctionParameters)) as R,
    } as any;
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
