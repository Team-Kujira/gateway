// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Cache, CacheContainer } from 'node-ts-cache';
import { MemoryStorage } from 'node-ts-cache-storage-memory';
import { Kujira } from '../../connectors/kujira/kujira';
import { convertToGetTokensResponse } from '../../connectors/kujira/kujira.convertors';
import { KujiraConfig } from '../../connectors/kujira/kujira.config';
import { Address } from '../../connectors/kujira/kujira.types';
import { TokenInfo } from '../ethereum/ethereum-base';
import { MAINNET, NETWORKS, TESTNET } from 'kujira.js';

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
}
