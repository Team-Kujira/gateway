import supertest from 'supertest';
import { Express } from 'express-serve-static-core';
import { StatusCodes } from 'http-status-codes';
import { getNotNullOrThrowError } from '../../src/connectors/kujira/kujira.helpers';
import {
  RequestStrategy,
  RESTfulMethod,
} from '../../src/connectors/kujira/kujira.types';

export type SendRequestOptions<R> = {
  strategy?: RequestStrategy;
  isMock?: boolean;
  RESTExpress?: Express;
  RESTMethod: RESTfulMethod;
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
) => Promise<supertest.Response>;

export const sendRequest: SendRequestFunction = async <R>(
  options: SendRequestOptions<R>
): Promise<supertest.Response> => {
  if (options.strategy == RequestStrategy.RESTful) {
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
      )) as supertest.Response;

    return result;
  } else if (options.strategy == RequestStrategy.Controller) {
    const result = await getNotNullOrThrowError<any>(
      options.controllerFunction
    ).apply(options.controller, [
      options.controllerFunctionParameters || options.RESTRequest,
    ]);

    return {
      body: result as R,
    } as supertest.Response;
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

export function printStackTrace() {
  const error = new Error();
  const stackTrace = error.stack || '';
  const stackLines = stackTrace.split('\n').slice(1); // Ignoring this function itself

  let output = '';

  stackLines.forEach((line) => {
    const match = line.match(/at\s+(.*)\s+\((.*):(\d+):\d+\)/);
    if (match) {
      const functionName = match[1];
      const filePath = match[2];
      const lineNumber = match[3];
      output += `${filePath}:${lineNumber} (${functionName})\n`;
    }
  });

  console.log(output);
}
