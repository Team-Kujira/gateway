// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */

import { GetMarketOptions } from './kujira.types';

/**
 *
 */
export class Kujira {
  /**
   *
   * @private
   */
  private initializing: boolean = false;

  /**
   *
   * @private
   */
  private readonly config: KujiraConfig.Config;

  /**
   *
   * @private
   */
  private readonly cosmosConfig: CosmosConfig;

  /**
   *
   * @private
   */
  private readonly connection: Connection;

  /**
   *
   * @private
   */
  private cosmos: Cosmos;

  /**
   *
   * @private
   */
  private _ready: boolean = false;

  /**
   *
   */
  chain: string;

  /**
   *
   */
  network: string;

  /**
   *
   */
  readonly connector: string = 'kujira';

  /**
   * Creates a new instance of Kujira.
   *
   * @param chain
   * @param network
   * @private
   */
  private constructor(chain: string, network: string) {
    this.chain = chain;
    this.network = network;

    this.config = KujiraConfig.config;
    this.cosmosConfig = getCosmosConfig(chain, network);

    this.connection = new Connection(this.cosmosConfig.network.rpcUrl);
  }

  @Cache(caches.markets, { ttl: constants.cache.marketsData })
  async kujiraGetMarketsData(): Promise<BasicKujiraMarket[]> {
    const marketsURL = this.config.markets.url || '';

    let marketsData: BasicKujiraMarket[];

    try {
      if (!marketsURL.startsWith('https')) {
        marketsData = require(marketsURL);
      } else {
        marketsData = (
          await runWithRetryAndTimeout<any>(axios, axios.get, [marketsURL])
        ).data;
      }
    } catch (exception) {
      marketsData = fin.PAIRS;
    }

    return marketsData;
  }

  /**
   * Get the Kujira instance for the given chain and network.
   * It's cached forever.
   *
   * @param chain
   * @param network
   */
  @Cache(caches.instances, { isCachedForever: true })
  static async getInstance(chain: string, network: string): Promise<Kujira> {
    return new Kujira(chain, network);
  }

  /**
   * Initialize the Kujira instance.
   */
  async init() {
    if (!this._ready && !this.initializing) {
      this.initializing = true;

      this.cosmos = await Cosmos.getInstance(this.network);
      await this.cosmos.init();

      await this.getAllMarkets();

      this._ready = true;
      this.initializing = false;
    }
  }

  /**
   * 0 external API call.
   */
  ready(): boolean {
    return this._ready;
  }

  /**
   * 0 external API call.
   */
  getConnection(): Connection {
    return this.connection;
  }

  /**
   * 0 external API call.
   *
   * @param id
   */
  async getMarket(options: GetMarketOptions = {}): Promise<Market> {
    if (!options.id) throw new MarketNotFoundError(`No market informed.`);

    const markets = await this.getAllMarkets();

    const market = markets.get(options.id);

    if (!market) throw new MarketNotFoundError(`Market "${id}" not found.`);

    return market;
  }

  /**
   * @param ids
   */
  async getMarkets(ids: string[]): Promise<IMap<string, Market>> {
    const markets = IMap<string, Market>().asMutable();

    const getMarket = async (name: string): Promise<void> => {
      const market = await this.getMarket(name);

      markets.set(name, market);
    };

    await promiseAllInBatches(getMarket, ids);

    return markets;
  }
}
