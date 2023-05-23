import 'jest-extended';
import { Kujira } from '../../../../src/connectors/kujira/kujira';
import { KujiraConfig } from '../../../../src/connectors/kujira/kujira.config';
import {
  logRequest as helperLogRequest,
  logResponse as helperLogResponse,
} from '../../../helpers';

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
});
