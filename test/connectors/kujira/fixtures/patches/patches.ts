import { Kujira } from '../../../../../src/connectors/kujira/kujira';
import {
  AsyncFunctionType,
  BasicKujiraMarket,
  BasicKujiraToken,
  IMap,
  KujiraOrder,
  MarketId,
  TokenId,
} from '../../../../../src/connectors/kujira/kujira.types';
import data from './data';
import { patch } from '../../../../services/patch';
import { ExecuteResult, JsonObject } from '@cosmjs/cosmwasm-stargate';
import { fin } from 'kujira.js';
import { StdFee } from '@cosmjs/amino';
import { Coin, EncodeObject } from '@cosmjs/proto-signing';
import { SigningStargateClient } from '@cosmjs/stargate';
import { IndexedTx } from '@cosmjs/stargate/build/stargateclient';
import { isMap } from 'immutable';
import { getNotNullOrThrowError } from '../../../../../src/connectors/kujira/kujira.helpers';

let usePatches = true;
let useInputOutputWrapper = true;

export const enablePatches = () => (usePatches = true);
export const disablePatches = () => (usePatches = false);
export const enableInputOutputWrapper = () => (useInputOutputWrapper = true);
export const disableInputOutputWrapper = () => (useInputOutputWrapper = false);

const ordinalMap = IMap<string, number>().asMutable();

export const createPatches = (
  kujira: Kujira
): IMap<string, AsyncFunctionType<any, any>> => {
  const patches = IMap<string, AsyncFunctionType<any, any>>().asMutable();

  patches.setIn(['global', 'fetch'], async (testTitle: string) => {
    if (!usePatches) return;

    patch(global, 'fetch', async (...any: any[]) => {
      const inputArguments = any;

      // const serializedArguments = Serializer.serialize(inputArguments);

      if (!ordinalMap.has(testTitle)) {
        ordinalMap.set(testTitle, 1);
      }

      const ordinal =
        getNotNullOrThrowError<number>(ordinalMap.get(testTitle)) + 1;

      ordinalMap.set(testTitle, ordinal);

      const dataKey = ['global', 'fetch', testTitle, ordinal];

      const key: string = JSON.stringify(dataKey);

      if (useInputOutputWrapper) {
        return await inputOutputWrapper<any>(
          dataKey,
          global,
          'fetch',
          inputArguments
        );
      }

      return data.get(key) as any;
    });
  });

  patches.setIn(['kujira', 'decryptWallet'], async (testTitle: string) => {
    if (!usePatches) return;

    patch(kujira, 'decryptWallet', async (...any: any[]) => {
      const inputArguments = any;

      // const serializedArguments = Serializer.serialize(inputArguments);

      if (!ordinalMap.has(testTitle)) {
        ordinalMap.set(testTitle, 1);
      }

      const ordinal =
        getNotNullOrThrowError<number>(ordinalMap.get(testTitle)) + 1;

      ordinalMap.set(testTitle, ordinal);

      const dataKey = ['kujira', 'decryptWallet', testTitle, ordinal];

      const key: string = JSON.stringify(dataKey);

      if (useInputOutputWrapper) {
        return await inputOutputWrapper<any>(
          dataKey,
          kujira,
          'decryptWallet',
          inputArguments
        );
      }

      return data.get(key) as any;
    });
  });

  patches.setIn(['kujira', 'getFastestRpc'], async (testTitle: string) => {
    if (!usePatches) return;

    patch(kujira, 'getFastestRpc', async (...any: any[]) => {
      const inputArguments = any;

      // const serializedArguments = Serializer.serialize(inputArguments);

      if (!ordinalMap.has(testTitle)) {
        ordinalMap.set(testTitle, 1);
      }

      const ordinal =
        getNotNullOrThrowError<number>(ordinalMap.get(testTitle)) + 1;

      ordinalMap.set(testTitle, ordinal);

      const dataKey = ['kujira', 'getFastestRpc', testTitle, ordinal];

      const key: string = JSON.stringify(dataKey);

      if (useInputOutputWrapper) {
        return await inputOutputWrapper<any>(
          dataKey,
          kujira,
          'getFastestRpc',
          inputArguments
        );
      }

      return data.get(key) as any;
    });
  });

  patches.setIn(
    ['kujira', 'kujiraFinClientWithdrawOrders'],
    async (testTitle: string) => {
      if (!usePatches) return;

      patch(
        kujira,
        'kujiraFinClientWithdrawOrders',
        async (
          finClient: fin.FinClient,
          orderIdxs: {
            orderIdxs?: string[];
          },
          fee: number | StdFee | 'auto' = 'auto',
          memo?: string,
          funds?: readonly Coin[]
        ): Promise<ExecuteResult> => {
          const inputArguments = [finClient, orderIdxs, fee, memo, funds];

          // const serializedArguments = Serializer.serialize(inputArguments);

          if (!ordinalMap.has(testTitle)) {
            ordinalMap.set(testTitle, 1);
          }

          const ordinal =
            getNotNullOrThrowError<number>(ordinalMap.get(testTitle)) + 1;

          ordinalMap.set(testTitle, ordinal);

          const dataKey = [
            'kujira',
            'kujiraFinClientWithdrawOrders',
            testTitle,
            ordinal,
          ];

          const key: string = JSON.stringify(dataKey);

          if (useInputOutputWrapper) {
            return await inputOutputWrapper<ExecuteResult>(
              dataKey,
              kujira,
              'kujiraFinClientWithdrawOrders',
              inputArguments
            );
          }

          return data.get(key) as ExecuteResult;
        }
      );
    }
  );

  patches.setIn(
    ['kujira', 'kujiraGetBasicMarkets'],
    async (testTitle: string) => {
      if (!usePatches) return;

      patch(
        kujira,
        'kujiraGetBasicMarkets',
        async (): Promise<IMap<MarketId, BasicKujiraMarket>> => {
          const inputArguments: any[] = [];

          // const serializedArguments = Serializer.serialize(inputArguments);

          if (!ordinalMap.has(testTitle)) {
            ordinalMap.set(testTitle, 1);
          }

          const ordinal =
            getNotNullOrThrowError<number>(ordinalMap.get(testTitle)) + 1;

          ordinalMap.set(testTitle, ordinal);

          const dataKey = [
            'kujira',
            'kujiraGetBasicMarkets',
            testTitle,
            ordinal,
          ];

          const key: string = JSON.stringify(dataKey);

          if (useInputOutputWrapper) {
            return await inputOutputWrapper<IMap<MarketId, BasicKujiraMarket>>(
              dataKey,
              kujira,
              'kujiraGetBasicMarkets',
              inputArguments
            );
          }

          return data.get(key) as IMap<MarketId, BasicKujiraMarket>;
        }
      );
    }
  );

  patches.setIn(
    ['kujira', 'kujiraGetBasicTokens'],
    async (testTitle: string) => {
      if (!usePatches) return;

      patch(
        kujira,
        'kujiraGetBasicTokens',
        async (): Promise<IMap<TokenId, BasicKujiraToken>> => {
          const inputArguments: any[] = [];

          // const serializedArguments = Serializer.serialize(inputArguments);

          if (!ordinalMap.has(testTitle)) {
            ordinalMap.set(testTitle, 1);
          }

          const ordinal =
            getNotNullOrThrowError<number>(ordinalMap.get(testTitle)) + 1;

          ordinalMap.set(testTitle, ordinal);

          const dataKey = [
            'kujira',
            'kujiraGetBasicTokens',
            testTitle,
            ordinal,
          ];

          const key: string = JSON.stringify(dataKey);

          if (useInputOutputWrapper) {
            return await inputOutputWrapper<IMap<TokenId, BasicKujiraToken>>(
              dataKey,
              kujira,
              'kujiraGetBasicTokens',
              inputArguments
            );
          }

          return data.get(key) as IMap<TokenId, BasicKujiraToken>;
        }
      );
    }
  );

  patches.setIn(
    ['kujira', 'kujiraQueryClientWasmQueryContractSmart'],
    async (testTitle: string) => {
      if (!usePatches) return;

      patch(
        kujira,
        'kujiraQueryClientWasmQueryContractSmart',
        async (address: string, query: JsonObject): Promise<JsonObject> => {
          const inputArguments = [address, query];

          // const serializedArguments = Serializer.serialize(inputArguments);

          if (!ordinalMap.has(testTitle)) {
            ordinalMap.set(testTitle, 0);
          }

          const ordinal =
            getNotNullOrThrowError<number>(ordinalMap.get(testTitle)) + 1;

          ordinalMap.set(testTitle, ordinal);

          const dataKey = [
            'kujira',
            'kujiraQueryClientWasmQueryContractSmart',
            testTitle,
            ordinal,
          ];

          const key: string = JSON.stringify(dataKey);

          if (useInputOutputWrapper) {
            return await inputOutputWrapper<JsonObject>(
              dataKey,
              kujira,
              'kujiraQueryClientWasmQueryContractSmart',
              inputArguments
            );
          }

          return data.get(key) as JsonObject;
        }
      );
    }
  );

  patches.setIn(
    ['kujira', 'kujiraSigningStargateClientSignAndBroadcast'],
    async (testTitle: string) => {
      if (!usePatches) return;

      patch(
        kujira,
        'kujiraSigningStargateClientSignAndBroadcast',
        async (
          signingStargateClient: SigningStargateClient,
          signerAddress: string,
          messages: readonly EncodeObject[],
          fee: StdFee | 'auto' | number,
          memo?: string
        ): Promise<KujiraOrder> => {
          const inputArguments = [
            signingStargateClient,
            signerAddress,
            messages,
            fee,
            memo,
          ];

          // const serializedArguments = Serializer.serialize(inputArguments);

          if (!ordinalMap.has(testTitle)) {
            ordinalMap.set(testTitle, 1);
          }

          const ordinal =
            getNotNullOrThrowError<number>(ordinalMap.get(testTitle)) + 1;

          ordinalMap.set(testTitle, ordinal);

          const dataKey = [
            'kujira',
            'kujiraSigningStargateClientSignAndBroadcast',
            testTitle,
            ordinal,
          ];

          const key: string = JSON.stringify(dataKey);

          if (useInputOutputWrapper) {
            return await inputOutputWrapper<KujiraOrder>(
              dataKey,
              kujira,
              'kujiraSigningStargateClientSignAndBroadcast',
              inputArguments
            );
          }

          return data.get(key) as KujiraOrder;
        }
      );
    }
  );

  patches.setIn(
    ['kujira', 'kujiraStargateClientGetAllBalances'],
    async (testTitle: string) => {
      if (!usePatches) return;

      patch(
        kujira,
        'kujiraStargateClientGetAllBalances',
        async (address: string): Promise<readonly Coin[]> => {
          const inputArguments = [address];

          // const serializedArguments = Serializer.serialize(inputArguments);

          if (!ordinalMap.has(testTitle)) {
            ordinalMap.set(testTitle, 1);
          }

          const ordinal =
            getNotNullOrThrowError<number>(ordinalMap.get(testTitle)) + 1;

          ordinalMap.set(testTitle, ordinal);

          const dataKey = [
            'kujira',
            'kujiraStargateClientGetAllBalances',
            testTitle,
            ordinal,
          ];

          const key: string = JSON.stringify(dataKey);

          if (useInputOutputWrapper) {
            return await inputOutputWrapper<readonly Coin[]>(
              dataKey,
              kujira,
              'kujiraStargateClientGetAllBalances',
              inputArguments
            );
          }

          return data.get(key) as readonly Coin[];
        }
      );
    }
  );

  patches.setIn(
    ['kujira', 'kujiraStargateClientGetBalanceStaked'],
    async (testTitle: string) => {
      if (!usePatches) return;

      patch(
        kujira,
        'kujiraStargateClientGetBalanceStaked',
        async (address: string): Promise<Coin | null> => {
          const inputArguments = [address];

          // const serializedArguments = Serializer.serialize(inputArguments);

          if (!ordinalMap.has(testTitle)) {
            ordinalMap.set(testTitle, 1);
          }

          const ordinal =
            getNotNullOrThrowError<number>(ordinalMap.get(testTitle)) + 1;

          ordinalMap.set(testTitle, ordinal);

          const dataKey = [
            'kujira',
            'kujiraStargateClientGetBalanceStaked',
            testTitle,
            ordinal,
          ];

          const key: string = JSON.stringify(dataKey);

          if (useInputOutputWrapper) {
            return await inputOutputWrapper<Coin | null>(
              dataKey,
              kujira,
              'kujiraStargateClientGetBalanceStaked',
              inputArguments
            );
          }

          return data.get(key) as Coin | null;
        }
      );
    }
  );

  patches.setIn(
    ['kujira', 'kujiraStargateClientGetHeight'],
    async (testTitle: string) => {
      if (!usePatches) return;

      patch(
        kujira,
        'kujiraStargateClientGetHeight',
        async (): Promise<number> => {
          const inputArguments: any[] = [];

          // const serializedArguments = Serializer.serialize(inputArguments);

          if (!ordinalMap.has(testTitle)) {
            ordinalMap.set(testTitle, 1);
          }

          const ordinal =
            getNotNullOrThrowError<number>(ordinalMap.get(testTitle)) + 1;

          ordinalMap.set(testTitle, ordinal);

          const dataKey = [
            'kujira',
            'kujiraStargateClientGetHeight',
            testTitle,
            ordinal,
          ];

          const key: string = JSON.stringify(dataKey);

          if (useInputOutputWrapper) {
            return await inputOutputWrapper<number>(
              dataKey,
              kujira,
              'kujiraStargateClientGetHeight',
              inputArguments
            );
          }

          return data.get(key) as number;
        }
      );
    }
  );

  patches.setIn(
    ['kujira', 'kujiraStargateClientGetTx'],
    async (testTitle: string) => {
      if (!usePatches) return;

      patch(
        kujira,
        'kujiraStargateClientGetTx',
        async (id: string): Promise<IndexedTx | null> => {
          const inputArguments = [id];

          // const serializedArguments = Serializer.serialize(inputArguments);

          if (!ordinalMap.has(testTitle)) {
            ordinalMap.set(testTitle, 1);
          }

          const ordinal =
            getNotNullOrThrowError<number>(ordinalMap.get(testTitle)) + 1;

          ordinalMap.set(testTitle, ordinal);

          const dataKey = [
            'kujira',
            'kujiraStargateClientGetTx',
            testTitle,
            ordinal,
          ];

          const key: string = JSON.stringify(dataKey);

          if (useInputOutputWrapper) {
            return await inputOutputWrapper<IndexedTx | null>(
              dataKey,
              kujira,
              'kujiraStargateClientGetTx',
              inputArguments
            );
          }

          return data.get(key) as IndexedTx | null;
        }
      );
    }
  );

  return patches;
};

export const getPatch = <R = AsyncFunctionType<any, any>>(
  patches: IMap<string, AsyncFunctionType<any, any>>,
  keyPath: string[]
): R => {
  return patches.getIn(keyPath) as R;
};

const inputOutputWrapper = async <R>(
  dataKey: any[],
  targetObject: any,
  targetFunctionName: string,
  targetFunctionArguments: any[] = []
): Promise<R> => {
  // console.log('key:\n', dataKey);

  // console.log('input:\n', targetFunctionArguments);

  const originalTargetFunction =
    targetObject[`__original__${targetFunctionName}`];

  const result = await originalTargetFunction.value.apply(
    targetObject,
    targetFunctionArguments
  );

  // console.log('output:\n', JSON.stringify(result));

  const key: string = JSON.stringify(dataKey);

  if (data.has(key)) {
    if (result === data.get(key)) {
      return result as R;
    }

    // dataKey[dataKey.length - 1] = `${
    //   parseInt(dataKey[dataKey.length - 1]) + 1
    // }`;
    //
    // key = `'${JSON.stringify(dataKey)}'`;
  }

  data.set(key, result);

  let value: string;
  if (isMap(result)) {
    value = `IMap<any, any>(${JSON.stringify(result)}).asMutable()`;
  } else if ('tx' in result) {
    value = JSON.stringify(result).replace(
      /"tx":\{(.*?)}/,
      '"tx": new Uint8Array(Object.values({$1}))'
    );
  } else {
    value = JSON.stringify(result);
  }

  console.log(`data.set(\`${key}\`, ${value})`);

  return result as R;
};
