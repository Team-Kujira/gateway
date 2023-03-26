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
import { getNotNullOrThrowError } from '../../connectors/kujira/kujira.helpers';
import { KujiraConfig } from '../../connectors/kujira/kujira.config';
import { Address } from '../../connectors/kujira/kujira.types';

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

  public static async getConnectedInstances(): Promise<{
    [name: string]: KujiraChain;
  }> {
    return {
      mainnet: getNotNullOrThrowError<KujiraChain>(
        await caches.instances.getItem('mainnet')
      ),
    };
  }

  ready(): boolean {
    return this.kujira.isReady;
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
      ),
      await this.kujira.getCurrentBlock({})
    );
  }
}
