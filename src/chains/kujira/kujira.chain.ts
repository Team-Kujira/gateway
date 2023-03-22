// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Cache, CacheContainer } from 'node-ts-cache';
import { MemoryStorage } from 'node-ts-cache-storage-memory';
import {
  BalancesRequest,
  BalancesResponse,
  PollRequest,
  PollResponse,
} from './kujira.requests';
import { Kujira } from '../../connectors/kujira/kujira';
import {
  convertBalanceRequestToGetAllBalancesOptions,
  convertPollRequestToGetTransactionOptions,
  convertToBalancesResponse,
  convertToPollResponse,
} from '../../connectors/kujira/kujira.convertors';
import { TokenInfo } from '../../services/base';
import { Wallet } from 'ethers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const caches = {
  instances: new CacheContainer(new MemoryStorage()),
};

export class KujiraChain {
  chain: string = 'kujira';
  network: string;

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

  public static getConnectedInstances(): {
    [name: string]: KujiraChain;
  } {
    // TODO implement method!!!

    throw Error('Not implemented');
  }

  ready(): boolean {
    return this.kujira.isReady;
  }

  getTokenForSymbol(_symbol: string): TokenInfo | null {
    // TODO implement method!!!

    throw Error('Not implemented');
  }

  getWalletFromPrivateKey(_privateKey: string): Wallet {
    // TODO implement method!!!

    throw Error('Not implemented');
  }

  async encrypt(_privateKey: string, _password: string): Promise<string> {
    // TODO implement method!!!

    throw Error('Not implemented');
  }

  async balances(body: BalancesRequest): Promise<BalancesResponse> {
    return convertToBalancesResponse(
      await this.kujira.getAllBalances(
        convertBalanceRequestToGetAllBalancesOptions(body)
      )
    );
  }

  async poll(body: PollRequest): Promise<PollResponse> {
    return convertToPollResponse(
      await this.kujira.getTransaction(
        convertPollRequestToGetTransactionOptions(body)
      )
    );
  }
}
