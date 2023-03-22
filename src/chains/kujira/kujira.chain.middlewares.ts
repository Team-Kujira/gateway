// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Cache, CacheContainer } from 'node-ts-cache';
import { MemoryStorage } from 'node-ts-cache-storage-memory';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const caches = {
  instances: new CacheContainer(new MemoryStorage()),
};

export class KujiraChainMiddleware {
  network: string;

  storedTokenList: any;

  private constructor(network: string) {
    this.network = network;
  }

  @Cache(caches.instances, { isCachedForever: true })
  static async getInstance(network: string): Promise<KujiraChainMiddleware> {
    return new KujiraChainMiddleware(network);
  }

  async init() {
    throw Error('Not implemented');
  }

  public static getConnectedInstances(): {
    [name: string]: KujiraChainMiddleware;
  } {
    throw Error('Not implemented');
  }

  ready(): boolean {
    throw Error('Not implemented');
  }

  getTokenForSymbol(_symbol: string): any {
    throw Error('Not implemented');
  }

  getWalletFromPrivateKey(_privateKey: string): any {
    throw Error('Not implemented');
  }

  async encrypt(_privateKey: string, _password: string): Promise<string> {
    throw Error('Not implemented');
  }
}
