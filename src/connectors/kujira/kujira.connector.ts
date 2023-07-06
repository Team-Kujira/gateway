import { Kujira } from './kujira';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Cache, CacheContainer } from 'node-ts-cache';
import { MemoryStorage } from 'node-ts-cache-storage-memory';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const caches = {
  instances: new CacheContainer(new MemoryStorage()),
};

export class KujiraConnector {
  chain: string;

  network: string;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private kujira: Kujira;

  private constructor(chain: string, network: string) {
    this.chain = chain;
    this.network = network;
  }

  @Cache(caches.instances, { isCachedForever: true })
  static async getInstance(
    chain: string,
    network: string
  ): Promise<KujiraConnector> {
    return new KujiraConnector(chain, network);
  }

  async init() {
    this.kujira = await Kujira.getInstance(this.chain, this.network);
    await this.kujira.init();
  }

  ready(): boolean {
    return this.kujira && this.kujira.isReady;
  }
}
