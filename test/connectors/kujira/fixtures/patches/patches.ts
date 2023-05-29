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
import { Serializer } from '../../../../../src/connectors/kujira/kujira.helpers';

let usePatches = true;
let useInputOutputWrapper = true;

export const enablePatches = () => (usePatches = true);
export const disablePatches = () => (usePatches = false);
export const enableInputOutputWrapper = () => (useInputOutputWrapper = true);
export const disableInputOutputWrapper = () => (useInputOutputWrapper = false);

export const createPatches = (
  kujira: Kujira
): IMap<string, AsyncFunctionType<any, any>> => {
  const patches = IMap<string, AsyncFunctionType<any, any>>().asMutable();

  patches.setIn(['global', 'fetch'], async (ordinal: number = 1) => {
    if (!usePatches) return;

    patch(global, 'fetch', async (...any: any[]) => {
      const inputArguments = any;

      const serializedArguments = Serializer.serialize(inputArguments);

      const dataKey = ['global', 'fetch', serializedArguments, `${ordinal}`];

      if (useInputOutputWrapper) {
        return await inputOutputWrapper<any>(
          dataKey,
          global,
          'fetch',
          inputArguments
        );
      }

      return data.getIn(dataKey) as any;
    });
  });

  patches.setIn(
    ['kujira', 'kujiraFinClientWithdrawOrders'],
    async (ordinal: number = 1) => {
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

          const serializedArguments = Serializer.serialize(inputArguments);

          const dataKey = [
            'kujira',
            'kujiraFinClientWithdrawOrders',
            serializedArguments,
            `${ordinal}`,
          ];

          if (useInputOutputWrapper) {
            return await inputOutputWrapper<ExecuteResult>(
              dataKey,
              kujira,
              'kujiraFinClientWithdrawOrders',
              inputArguments
            );
          }

          return data.getIn(dataKey) as ExecuteResult;
        }
      );
    }
  );

  patches.setIn(
    ['kujira', 'kujiraGetBasicMarkets'],
    async (ordinal: number = 1) => {
      if (!usePatches) return;

      patch(
        kujira,
        'kujiraGetBasicMarkets',
        async (): Promise<IMap<MarketId, BasicKujiraMarket>> => {
          const inputArguments: any[] = [];

          const serializedArguments = Serializer.serialize(inputArguments);

          const dataKey = [
            'kujira',
            'kujiraGetBasicMarkets',
            serializedArguments,
            `${ordinal}`,
          ];

          if (useInputOutputWrapper) {
            return await inputOutputWrapper<IMap<MarketId, BasicKujiraMarket>>(
              dataKey,
              kujira,
              'kujiraGetBasicMarkets',
              inputArguments
            );
          }

          return data.getIn(dataKey) as IMap<MarketId, BasicKujiraMarket>;
        }
      );
    }
  );

  patches.setIn(
    ['kujira', 'kujiraGetBasicTokens'],
    async (ordinal: number = 1) => {
      if (!usePatches) return;

      patch(
        kujira,
        'kujiraGetBasicTokens',
        async (): Promise<IMap<TokenId, BasicKujiraToken>> => {
          const inputArguments: any[] = [];

          const serializedArguments = Serializer.serialize(inputArguments);

          const dataKey = [
            'kujira',
            'kujiraGetBasicTokens',
            serializedArguments,
            `${ordinal}`,
          ];

          if (useInputOutputWrapper) {
            return await inputOutputWrapper<IMap<TokenId, BasicKujiraToken>>(
              dataKey,
              kujira,
              'kujiraGetBasicTokens',
              inputArguments
            );
          }

          return data.getIn(dataKey) as IMap<TokenId, BasicKujiraToken>;
        }
      );
    }
  );

  patches.setIn(
    ['kujira', 'kujiraQueryClientWasmQueryContractSmart'],
    async (ordinal: number = 1) => {
      if (!usePatches) return;

      patch(
        kujira,
        'kujiraQueryClientWasmQueryContractSmart',
        async (address: string, query: JsonObject): Promise<JsonObject> => {
          const inputArguments = [address, query];

          const serializedArguments = Serializer.serialize(inputArguments);

          const dataKey = [
            'kujira',
            'kujiraQueryClientWasmQueryContractSmart',
            serializedArguments,
            `${ordinal}`,
          ];

          if (useInputOutputWrapper) {
            return await inputOutputWrapper<JsonObject>(
              dataKey,
              kujira,
              'kujiraQueryClientWasmQueryContractSmart',
              inputArguments
            );
          }

          return data.getIn(dataKey) as JsonObject;
        }
      );
    }
  );

  patches.setIn(
    ['kujira', 'kujiraSigningStargateClientSignAndBroadcast'],
    async (ordinal: number = 1) => {
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

          const serializedArguments = Serializer.serialize(inputArguments);

          const dataKey = [
            'kujira',
            'kujiraSigningStargateClientSignAndBroadcast',
            serializedArguments,
            `${ordinal}`,
          ];

          if (useInputOutputWrapper) {
            return await inputOutputWrapper<KujiraOrder>(
              dataKey,
              kujira,
              'kujiraSigningStargateClientSignAndBroadcast',
              inputArguments
            );
          }

          return data.getIn(dataKey) as KujiraOrder;
        }
      );
    }
  );

  patches.setIn(
    ['kujira', 'kujiraStargateClientGetAllBalances'],
    async (ordinal: number = 1) => {
      if (!usePatches) return;

      patch(
        kujira,
        'kujiraStargateClientGetAllBalances',
        async (address: string): Promise<readonly Coin[]> => {
          const inputArguments = [address];

          const serializedArguments = Serializer.serialize(inputArguments);

          const dataKey = [
            'kujira',
            'kujiraStargateClientGetAllBalances',
            serializedArguments,
            `${ordinal}`,
          ];

          if (useInputOutputWrapper) {
            return await inputOutputWrapper<readonly Coin[]>(
              dataKey,
              kujira,
              'kujiraStargateClientGetAllBalances',
              inputArguments
            );
          }

          return data.getIn(dataKey) as readonly Coin[];
        }
      );
    }
  );

  patches.setIn(
    ['kujira', 'kujiraStargateClientGetBalanceStaked'],
    async (ordinal: number = 1) => {
      if (!usePatches) return;

      patch(
        kujira,
        'kujiraStargateClientGetBalanceStaked',
        async (address: string): Promise<Coin | null> => {
          const inputArguments = [address];

          const serializedArguments = Serializer.serialize(inputArguments);

          const dataKey = [
            'kujira',
            'kujiraStargateClientGetBalanceStaked',
            serializedArguments,
            `${ordinal}`,
          ];

          if (useInputOutputWrapper) {
            return await inputOutputWrapper<Coin | null>(
              dataKey,
              kujira,
              'kujiraStargateClientGetBalanceStaked',
              inputArguments
            );
          }

          return data.getIn(dataKey) as Coin | null;
        }
      );
    }
  );

  patches.setIn(
    ['kujira', 'kujiraStargateClientGetHeight'],
    async (ordinal: number = 1) => {
      if (!usePatches) return;

      patch(
        kujira,
        'kujiraStargateClientGetHeight',
        async (): Promise<number> => {
          const inputArguments: any[] = [];

          const serializedArguments = Serializer.serialize(inputArguments);

          const dataKey = [
            'kujira',
            'kujiraStargateClientGetHeight',
            serializedArguments,
            `${ordinal}`,
          ];

          if (useInputOutputWrapper) {
            return await inputOutputWrapper<number>(
              dataKey,
              kujira,
              'kujiraStargateClientGetHeight',
              inputArguments
            );
          }

          return data.getIn(dataKey) as number;
        }
      );
    }
  );

  patches.setIn(
    ['kujira', 'kujiraStargateClientGetTx'],
    async (ordinal: number = 1) => {
      if (!usePatches) return;

      patch(
        kujira,
        'kujiraStargateClientGetTx',
        async (id: string): Promise<IndexedTx | null> => {
          const inputArguments = [id];

          const serializedArguments = Serializer.serialize(inputArguments);

          const dataKey = [
            'kujira',
            'kujiraStargateClientGetTx',
            serializedArguments,
            `${ordinal}`,
          ];

          if (useInputOutputWrapper) {
            return await inputOutputWrapper<IndexedTx | null>(
              dataKey,
              kujira,
              'kujiraStargateClientGetTx',
              inputArguments
            );
          }

          return data.getIn(dataKey) as IndexedTx | null;
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
  dataKey: string[],
  targetObject: any,
  targetFunctionName: string,
  targetFunctionArguments: any[] = []
): Promise<R> => {
  console.log('key:\n', dataKey);

  console.log('input:\n', targetFunctionArguments);

  const originalTargetFunction =
    targetObject[`__original__${targetFunctionName}`];

  const result = await originalTargetFunction.value.apply(
    targetObject,
    targetFunctionArguments
  );

  // console.log('output:\n', JSON.stringify(result));

  console.log(
    `data.setIn(${JSON.stringify(dataKey)}, ${JSON.stringify(result)})`
  );

  return result as R;
};
