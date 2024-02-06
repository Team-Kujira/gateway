// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Cache, CacheContainer } from 'node-ts-cache';
import { MemoryStorage } from 'node-ts-cache-storage-memory';
import { Kujira } from '../../connectors/kujira/kujira';
import { convertToGetTokensResponse } from '../../connectors/kujira/kujira.convertors';
import { KujiraConfig } from '../../connectors/kujira/kujira.config';
import {
  Address,
  GetCurrentBlockRequest,
  GetCurrentBlockResponse,
  Token,
  TransferRequest,
  TransferResponse,
} from '../../connectors/kujira/kujira.types';
import { TokenInfo } from '../ethereum/ethereum-base';
import { MAINNET, NETWORKS, TESTNET } from 'kujira.js';
import {BalanceRequest, PollRequest, TokensRequest, TokensResponse} from "../../network/network.requests";
import {Chain, CustomTransaction} from "../../services/common-interfaces";
import {AllowancesRequest, ApproveRequest, CancelRequest, NonceRequest, NonceResponse} from "../chain.requests";
import {BigNumber} from "bignumber.js";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const caches = {
  instances: new CacheContainer(new MemoryStorage()),
};

export class KujiraChain {
  chain: string = 'kujira';
  network: string;
  controller: KujiraChain = this;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private kujira: Kujira;

  storedTokenList: any;

  private constructor(network: string) {
    this.network = network;
  }

  @Cache(caches.instances, { isCachedForever: true })
  static async getInstance(network: string): Promise<KujiraChain> {
    return new KujiraChain(network);
  }

  async init() {
    this.kujira = await Kujira.getInstance(this.chain, this.network);
    await this.kujira.init();
  }

  public static async getConnectedInstances(): Promise<{
    [name: string]: KujiraChain;
  }> {
    const connectedInstances: { [name: string]: KujiraChain } = {};

    for (let network of [NETWORKS[MAINNET], NETWORKS[TESTNET]]) {
      network = network.toLowerCase();

      let instance: KujiraChain = (await caches.instances.getItem(
        network
      )) as KujiraChain;

      if (!instance) {
        instance = await this.getInstance(network);
        await instance.init();
      }

      connectedInstances[network] = instance as KujiraChain;
    }

    return connectedInstances;
  }

  ready(): boolean {
    return this.kujira ? this.kujira.isReady : false;
  }

  async getWalletPublicKey(
    mnemonic: string,
    accountNumber: number | undefined
  ): Promise<Address> {
    return await this.kujira.getWalletPublicKey({
      mnemonic: mnemonic,
      accountNumber: accountNumber || KujiraConfig.config.accountNumber,
    });
  }

  async encrypt(
    mnemonic: string,
    accountNumber: number,
    publicKey: string
  ): Promise<string> {
    return await this.kujira.encryptWallet({
      wallet: {
        mnemonic,
        accountNumber,
        publicKey,
      },
    });
  }

  async getTokenForSymbol(symbol: string): Promise<TokenInfo> {
    return convertToGetTokensResponse(await this.kujira.getToken({ symbol }));
  }

  async getCurrentBlockNumber(
    _options: GetCurrentBlockRequest
  ): Promise<GetCurrentBlockResponse> {
    return await this.kujira.getCurrentBlock(_options);
  }

  async balances(
    _chain: any,
    req: BalanceRequest
  ): Promise<{ balances: Record<string, string> }> {
    let balances;
    if (req.tokenSymbols && req.tokenSymbols.length) {
      balances = await this.kujira.getBalances({
        ownerAddress: req.address,
        tokenSymbols: req.tokenSymbols,
      });
    } else {
      balances = await this.kujira.getAllBalances({
        ownerAddress: req.address,
      });
    }

    const output: Record<string, string> = {};

    for (const balance of balances.tokens.values()) {
      output[(balance.token as Token).symbol] = balance.free.toString();
    }

    return { balances: output };
  }

  async poll(_chain: Chain, req: PollRequest): Promise<any> {
    const currentBlock = await this.kujira.getCurrentBlock({});

    const transaction = await this.kujira.getTransaction({
      hash: req.txHash,
    });

    // noinspection UnnecessaryLocalVariableJS
    const output = {
      currentBlock: currentBlock,
      txHash: transaction.hash,
      txStatus: transaction.code,
      txBlock: transaction.blockNumber,
      txData: transaction.data,
      txReceipt: undefined,
    };

    return output;
  }

  async getTokens(_chain: Chain, _req: TokensRequest): Promise<TokensResponse> {
    const tokens = await this.kujira.getAllTokens({});

    const output: {
      tokens: any[];
    } = {
      tokens: [],
    };

    for (const token of tokens.values()) {
      output.tokens.push({
        chainId: this.kujira.chain,
        address: token.id,
        name: token.name,
        symbol: token.symbol,
        decimals: token.decimals,
      });
    }

    return output;
  }

  async nextNonce(_chain: Chain, _req: NonceRequest): Promise<NonceResponse> {
    // Not applicable.

    return {
      nonce: undefined as unknown as number,
    };
  }

  async nonce(_chain: Chain, _req: NonceRequest): Promise<NonceResponse> {
    // Not applicable.

    return {
      nonce: undefined as unknown as number,
    };
  }

  async allowances(_chain: Chain, _req: AllowancesRequest): Promise<any> {
    // Not applicable.

    return {
      spender: undefined as unknown as string,
      approvals: {} as Record<string, string>,
    };
  }

  async approve(_chain: Chain, _req: ApproveRequest): Promise<any> {
    // Not applicable.

    return {
      tokenAddress: undefined as unknown as string,
      spender: undefined as unknown as string,
      amount: undefined as unknown as string,
      nonce: undefined as unknown as number,
      approval: undefined as unknown as CustomTransaction,
    };
  }

  async cancel(_chain: Chain, _req: CancelRequest): Promise<any> {
    // Not applicable.

    return {
      txHash: undefined as unknown as string,
    };
  }

  async transfer(
    _chain: Chain,
    req: TransferRequest
  ): Promise<TransferResponse> {
    return this.kujira.transferFromTo({
      from: req.from,
      to: req.to,
      tokenSymbol: req.token,
      amount: BigNumber(req.amount),
    });
  }
}
