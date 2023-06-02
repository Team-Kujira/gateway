import 'jest-extended';
import { Kujira } from '../../../src/connectors/kujira/kujira';
import { KujiraConfig } from '../../../src/connectors/kujira/kujira.config';
import {
  logRequest as helperLogRequest,
  logResponse as helperLogResponse,
} from '../../../test/connectors/helpers';
import {
  GetAllMarketsRequest,
  GetAllMarketsResponse,
  GetTokenSymbolsToTokenIdsMapRequest,
} from '../../../src/connectors/kujira/kujira.types';
import { Serializer } from '../../../src/connectors/kujira/kujira.helpers';

jest.setTimeout(30 * 60 * 1000);

let testTitle: string;
let logRequest: (target: any) => void;
let logResponse: (target: any) => void;
// let logOutput: (target: any) => void;

let kujira: Kujira;

const config = KujiraConfig.config;

beforeAll(async () => {
  kujira = await Kujira.getInstance(config.chain, config.network);

  await kujira.init();
});

beforeEach(async () => {
  testTitle = expect.getState().currentTestName;
  logRequest = (target: any) => helperLogRequest(target, testTitle);
  logResponse = (target: any) => helperLogResponse(target, testTitle);
  // logOutput = (target: any) => helperLogOutput(target, testTitle);
});

describe('Playground', () => {
  it('Playground 01', async () => {
    const request = {};

    logRequest(request);

    const response = await kujira.kujiraGetBasicTokens();

    logResponse(response);
  });

  it('Playground 02', async () => {
    const request = {
      symbols: ['KUJI', 'DEMO'],
    } as GetTokenSymbolsToTokenIdsMapRequest;

    logRequest(request);

    const response = await kujira.getTokenSymbolsToTokenIdsMap(request);

    logResponse(response);
  });

  it('Playground 03', async () => {
    const request = {} as GetAllMarketsRequest;

    logRequest(request);

    const response: GetAllMarketsResponse = await kujira.getAllMarkets(request);

    logResponse(response);

    const filepath = '/tmp/playground-03.dat';

    await Serializer.serializeToFile(response, filepath);
    const newResponse: GetAllMarketsResponse =
      await Serializer.deserializeFromFile<GetAllMarketsResponse>(filepath);

    console.log(newResponse);
  });
});
