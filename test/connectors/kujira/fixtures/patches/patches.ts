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
import { serialize } from '../../../../../src/connectors/kujira/kujira.helpers';

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

  patches.setIn(
    ['kujira', 'kujiraFinClientWithdrawOrders'],
    async (ordinal: number = 1) => {
      if (!usePatches) return;

      patch(
        kujira,
        'kujiraFinClientWithdrawOrders',
        async (
          _finClient: fin.FinClient,
          _orderIdxs: {
            orderIdxs?: string[];
          },
          _fee: number | StdFee | 'auto' = 'auto',
          _memo?: string,
          _funds?: readonly Coin[]
        ): Promise<ExecuteResult> => {
          if (useInputOutputWrapper) {
            return await inputOutputWrapper<ExecuteResult>(
              kujira,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              kujira.kujiraFinClientWithdrawOrders
            );
          }

          const serializedArguments = (...args: any[]) => serialize(args);

          return data.getIn([
            'kujira',
            'kujiraFinClientWithdrawOrders',
            serializedArguments,
            ordinal,
          ]) as ExecuteResult;
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
          if (useInputOutputWrapper) {
            return await inputOutputWrapper<IMap<MarketId, BasicKujiraMarket>>(
              kujira,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              kujira.kujiraGetBasicMarkets
            );
          }

          const serializedArguments = (...args: any[]) => serialize(args);

          return data.getIn([
            'kujira',
            'kujiraGetBasicMarkets',
            serializedArguments,
            ordinal,
          ]) as IMap<MarketId, BasicKujiraMarket>;
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
          if (useInputOutputWrapper) {
            return await inputOutputWrapper<IMap<TokenId, BasicKujiraToken>>(
              kujira,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              kujira.kujiraGetBasicTokens
            );
          }

          const serializedArguments = (...args: any[]) => serialize(args);

          return data.getIn([
            'kujira',
            'kujiraGetBasicTokens',
            serializedArguments,
            ordinal,
          ]) as IMap<TokenId, BasicKujiraToken>;
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
        async (_address: string, _query: JsonObject): Promise<JsonObject> => {
          if (useInputOutputWrapper) {
            return await inputOutputWrapper<JsonObject>(
              kujira,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              kujira.kujiraQueryClientWasmQueryContractSmart
            );
          }

          const serializedArguments = (...args: any[]) => serialize(args);

          return data.getIn([
            'kujira',
            'kujiraQueryClientWasmQueryContractSmart',
            serializedArguments,
            ordinal,
          ]) as JsonObject;
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
          _signingStargateClient: SigningStargateClient,
          _signerAddress: string,
          _messages: readonly EncodeObject[],
          _fee: StdFee | 'auto' | number,
          _memo?: string
        ): Promise<KujiraOrder> => {
          if (useInputOutputWrapper) {
            return await inputOutputWrapper<KujiraOrder>(
              kujira,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              kujira.kujiraSigningStargateClientSignAndBroadcast
            );
          }

          const serializedArguments = (...args: any[]) => serialize(args);

          return data.getIn([
            'kujira',
            'kujiraSigningStargateClientSignAndBroadcast',
            serializedArguments,
            ordinal,
          ]) as KujiraOrder;
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
        async (_address: string): Promise<readonly Coin[]> => {
          if (useInputOutputWrapper) {
            return await inputOutputWrapper<readonly Coin[]>(
              kujira,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              kujira.kujiraStargateClientGetAllBalances
            );
          }

          const serializedArguments = (...args: any[]) => serialize(args);

          return data.getIn([
            'kujira',
            'kujiraStargateClientGetAllBalances',
            serializedArguments,
            ordinal,
          ]) as readonly Coin[];
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
        async (_address: string): Promise<Coin | null> => {
          if (useInputOutputWrapper) {
            return await inputOutputWrapper<Coin | null>(
              kujira,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              kujira.kujiraStargateClientGetBalanceStaked
            );
          }

          const serializedArguments = (...args: any[]) => serialize(args);

          return data.getIn([
            'kujira',
            'kujiraStargateClientGetBalanceStaked',
            serializedArguments,
            ordinal,
          ]) as Coin | null;
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
          if (useInputOutputWrapper) {
            return await inputOutputWrapper<number>(
              kujira,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              kujira.kujiraStargateClientGetHeight
            );
          }

          const serializedArguments = (...args: any[]) => serialize(args);

          return data.getIn([
            'kujira',
            'kujiraStargateClientGetHeight',
            serializedArguments,
            ordinal,
          ]) as number;
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
        async (_id: string): Promise<IndexedTx | null> => {
          if (useInputOutputWrapper) {
            return await inputOutputWrapper<IndexedTx | null>(
              kujira,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              kujira.kujiraStargateClientGetTx
            );
          }

          const serializedArguments = (...args: any[]) => serialize(args);

          return data.getIn([
            'kujira',
            'kujiraStargateClientGetTx',
            serializedArguments,
            ordinal,
          ]) as IndexedTx | null;
        }
      );
    }
  );

  return patches;
};

export const getPatch = async <R>(
  patches: IMap<string, AsyncFunctionType<any, any>>,
  keyPath: string[]
): Promise<R> => {
  return patches.getIn(keyPath) as R;
};

const inputOutputWrapper = async <R>(
  targetObject: any,
  targetFunction: any
) => {
  const args = {};

  console.log('input', args);

  const result = await targetFunction.apply(targetObject, args);

  console.log('output', result);

  return result as R;
};
