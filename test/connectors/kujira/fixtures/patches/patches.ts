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

export const enablePatches = () => (usePatches = true);
export const disablePatches = () => (usePatches = false);

export const createPatches = (
  kujira: Kujira
): IMap<string, AsyncFunctionType<any, any>> => {
  const patches = IMap<string, AsyncFunctionType<any, any>>().asMutable();

  patches.setIn(
    ['kujira', 'kujiraFinClientWithdrawOrders'],
    async (ordinal: number = 1) => {
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
          if (!usePatches) {
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
          const serializedArguments = (...args: any[]) => serialize(args);

          return data.getIn([
            'kujira',
            'kujiraFinClientWithdrawOrders',
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
          const serializedArguments = (...args: any[]) => serialize(args);

          return data.getIn([
            'kujira',
            'kujiraFinClientWithdrawOrders',
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
          const serializedArguments = (...args: any[]) => serialize(args);

          return data.getIn([
            'kujira',
            'kujiraFinClientWithdrawOrders',
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
          const serializedArguments = (...args: any[]) => serialize(args);

          return data.getIn([
            'kujira',
            'kujiraFinClientWithdrawOrders',
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
          const serializedArguments = (...args: any[]) => serialize(args);

          return data.getIn([
            'kujira',
            'kujiraFinClientWithdrawOrders',
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
          const serializedArguments = (...args: any[]) => serialize(args);

          return data.getIn([
            'kujira',
            'kujiraFinClientWithdrawOrders',
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
          const serializedArguments = (...args: any[]) => serialize(args);

          return data.getIn([
            'kujira',
            'kujiraFinClientWithdrawOrders',
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
          const serializedArguments = (...args: any[]) => serialize(args);

          return data.getIn([
            'kujira',
            'kujiraFinClientWithdrawOrders',
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
