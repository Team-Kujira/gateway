import {
  BasicKujiraMarket,
  CancelAllOrdersOptions,
  CancelOrderOptions,
  CancelOrdersOptions,
  GetAllMarketsOptions,
  GetAllOrderBookOptions,
  GetAllTickerOptions,
  GetMarketOptions,
  GetMarketsOptions,
  GetOrderBookOptions,
  GetOrderBooksOptions,
  GetOrderOptions,
  GetOrdersOptions,
  GetTickerOptions,
  GetTickersOptions,
  PlaceOrderOptions,
  PlaceOrdersOptions,
  SettleAllFundsOptions,
  SettleFundsOptions,
  SettleSeveralFundsOptions,
} from './kujira.types';
import {
  IMap,
  Market,
  MarketId,
  MarketNotFoundError,
  Order,
  OrderBook,
  OrderExchangeOrderId,
  SettleFund,
  Ticker,
  TickerNotFoundError,
} from '../../clob/clob.types';
import { KujiraConfig } from './kujira.config';
import { CosmosConfig } from '../../chains/cosmos/cosmos.config';
import { Cosmos } from '../../chains/cosmos/cosmos';
import {
  getNotNullOrThrowError,
  promiseAllInBatches,
  runWithRetryAndTimeout,
} from './kujira.helpers';
import { fin, KujiraQueryClient } from 'kujira.js';
import axios from 'axios';
import constants from './kujira.constants';
import {
  convertKujiraMarketToMarket,
  convertToTicker,
} from './kujira.convertors';
import { TickerSource } from '../../../../temporary/hummingbot/gateway/src/connectors/serum/serum.types';
import { Cache, CacheContainer } from 'node-ts-cache';
import { MemoryStorage } from 'node-ts-cache-storage-memory';
import { AccountData } from '@cosmjs/proto-signing/build/signer';
import { SigningStargateClient } from '@cosmjs/stargate';
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate/build/signingcosmwasmclient';

const caches = {
  instances: new CacheContainer(new MemoryStorage()),
  markets: new CacheContainer(new MemoryStorage()),
  serumFindQuoteTokenAccountsForOwner: new CacheContainer(new MemoryStorage()),
  serumFindBaseTokenAccountsForOwner: new CacheContainer(new MemoryStorage()),
};

export type Kujiraish = Kujira;

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
  private readonly cosmosConfig: CosmosConfig.Config;

  /**
   *
   * @private
   */
  private readonly account: AccountData;

  /**
   *
   * @private
   */
  private readonly querier: KujiraQueryClient;

  /**
   *
   * @private
   */
  private readonly stargateClient: SigningStargateClient;

  /**
   *
   * @private
   */
  private readonly signingCosmWasmClient: SigningCosmWasmClient;

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
    this.cosmosConfig = CosmosConfig.config;

    this.cosmos = null;

    this.account = null;
    this.querier = null;
    this.stargateClient = null;
    this.signingCosmWasmClient = null;
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
   */
  ready(): boolean {
    return this._ready;
  }

  /**
   *
   * @param options
   */
  async getMarket(options: GetMarketOptions): Promise<Market> {
    if (!options.id) throw new MarketNotFoundError(`No market informed.`);

    const markets = await this.getAllMarkets();

    const market = markets.get(options.id);

    if (!market)
      throw new MarketNotFoundError(`Market "${options.id}" not found.`);

    return market;
  }

  /**
   *
   * @param options
   */
  async getMarkets(
    options: GetMarketsOptions
  ): Promise<IMap<MarketId, Market>> {
    if (!options.ids) throw new MarketNotFoundError(`No market informed.`);

    const markets = IMap<string, Market>().asMutable();

    const getMarket = async (id: MarketId): Promise<void> => {
      const market = await this.getMarket({ id });

      markets.set(id, market);
    };

    await promiseAllInBatches(getMarket, options.ids);

    return markets;
  }

  /**
   *
   */
  @Cache(caches.markets, { ttl: constants.cache.markets })
  async getAllMarkets(
    options?: GetAllMarketsOptions
  ): Promise<IMap<MarketId, Market>> {
    const allMarkets = IMap<string, Market>().asMutable();

    let marketsData: BasicKujiraMarket[] = await this.kujiraGetMarketsData();

    marketsData = marketsData.filter(
      (item) =>
        !item.deprecated &&
        (this.config.markets.blacklist?.length
          ? !this.config.markets.blacklist.includes(item.name)
          : true) &&
        (this.config.markets.whiteList?.length
          ? this.config.markets.whiteList.includes(item.name)
          : true)
    );

    const loadMarket = async (market: BasicKujiraMarket): Promise<void> => {
      const kujiraMarket = await this.kujiraLoadMarket(market.address);

      allMarkets.set(
        market.name,
        convertKujiraMarketToMarket(kujiraMarket, market)
      );
    };

    await promiseAllInBatches(loadMarket, marketsData);

    return allMarkets;
  }

  /**
   *
   * @param options
   */
  async getOrderBook(options: GetOrderBookOptions): Promise<OrderBook> {
    const market = await this.getMarket(options.marketId);

    const orderBook = await this.kujiraGetOrderBook(market.id);

    return convertKujiraOrderBookToOrderBook(market, orderBook);
  }

  /**
   *
   * @param options
   */
  async getOrderBooks(
    options: GetOrderBooksOptions
  ): Promise<IMap<MarketId, OrderBook>> {
    const orderBooks = IMap<string, OrderBook>().asMutable();

    const getOrderBook = async (marketId: string): Promise<void> => {
      const orderBook = await this.getOrderBook(marketId);

      orderBooks.set(marketId, orderBook);
    };

    await promiseAllInBatches(getOrderBook, options.marketIds);

    return orderBooks;
  }

  /**
   *
   * @param _options
   */
  async getAllOrderBooks(
    _options: GetAllOrderBookOptions
  ): Promise<IMap<MarketId, OrderBook>> {
    const marketsIds = Array.from((await this.getAllMarkets()).keys());

    return this.getOrderBooks(marketsIds);
  }

  /**
   *
   * @param options
   */
  async getTicker(options: GetTickerOptions): Promise<Ticker> {
    const market = await this.getMarket(marketId);

    for (const [source, config] of this.config.tickers.sources) {
      try {
        if (source === TickerSource.NOMIMCS) {
          const marketsData = await this.kujiraGetMarketsData();
          const basicMarketInformation: BasicKujiraMarket = marketsData.filter(
            (item) => !item.deprecated && item.address == market.address
          )[0];

          const tickerAddress = market.address.toString();

          const finalUrl = (
            config.url ||
            'https://nomics.com/data/exchange-markets-ticker?convert=USD&exchange=kujira_dex&interval=1m&market=${MarketId}'
          ).replace('${MarketId}', tickerAddress);

          const result: { price: any; last_updated_at: any } = (
            await runWithRetryAndTimeout(
              axios,
              axios.get,
              [finalUrl],
              constants.retry.all.maxNumberOfRetries,
              0
            )
          ).data.items[0];

          return convertToTicker(result);
        } else if (source == TickerSource.PYTH) {
          const pythPublicKey = getPythProgramKeyForCluster(
            this.network as PythCluster
          );
          const pythClient = new PythHttpClient(this.connection, pythPublicKey);

          const split = marketId.split('/');
          const base = split[0]
            .replace(/(.*)\s\(NEW\)/, '$1')
            .replace(/([A-Za-z]+)/, '$1');
          const quote = split[1]
            .replace(/(.*)\s\(NEW\)/, '$1')
            .replace(/([A-Za-z]+)/, '$1')
            .replace(/B*USD[CT]*/, 'USD');
          const symbol = `Crypto.${base}/${quote}`;

          const result = await runWithRetryAndTimeout(
            null,
            async function getPythPrice() {
              const data = await pythClient.getData();
              const result = data.productPrice.get(symbol);

              return getNotNullOrThrowError(result);
            },
            [symbol],
            constants.retry.all.maxNumberOfRetries,
            0
          );

          const ticker = {
            price: getNotNullOrThrowError<number>(
              getNotNullOrThrowError<PriceData>(result).price
            ),
            timestamp: Date.now(),
            ticker: result,
          };

          return ticker;
        } else if (source === TickerSource.LAST_FILLED_ORDER) {
          const filledOrders = await this.getFilledOrdersForMarket(market.name);

          if (filledOrders.size) {
            const lastFilledOrder = filledOrders.values().next().value;

            const ticker = {
              price: lastFilledOrder.price,
              timestamp: Date.now(),
              ticker: lastFilledOrder,
            };

            return ticker;
          } else if (source === TickerSource.ORDER_BOOK) {
            // TODO Calculate mid price from the best bid and ask!!!
          } else {
            throw new TickerNotFoundError(
              `Ticker data is currently not available for market "${marketId}".`
            );
          }
        } else {
          throw new TickerNotFoundError(
            `Ticker source (${source}) not supported, check your kujira configuration file.`
          );
        }
      } catch (exception) {
        // Ignoring so other sources can be tried.
      }
    }

    throw new TickerNotFoundError(
      `Ticker data is currently not available for market "${marketId}".`
    );
  }

  /**
   *
   * @param options
   */
  async getTickers(
    options: GetTickersOptions
  ): Promise<IMap<MarketId, Ticker>> {
    const tickers = IMap<string, Ticker>().asMutable();

    const getTicker = async (marketId: string): Promise<void> => {
      const ticker = await this.getTicker(marketId);

      tickers.set(marketId, ticker);
    };

    await promiseAllInBatches(getTicker, options.marketIds);

    return tickers;
  }

  /**
   *
   * @param _options
   */
  async getAllTickers(
    _options: GetAllTickerOptions
  ): Promise<IMap<MarketId, Ticker>> {
    const marketsIds = Array.from((await this.getAllMarkets()).keys());

    return await this.getTickers(marketsIds);
  }

  /**
   *
   * @param options
   */
  async getOrder(options: GetOrderOptions): Promise<Order> {
    // TODO implement!!!
  }

  /**
   *
   * @param options
   */
  async getOrders(
    options: GetOrdersOptions
  ): Promise<IMap<OrderExchangeOrderId, Order>> {
    // TODO implement!!!
  }

  /**
   *
   * @param options
   */
  async placeOrder(options: PlaceOrderOptions): Promise<Order> {
    return (await this.placeOrders([candidate])).first();
  }

  /**
   *
   * @param options
   */
  async placeOrders(
    options: PlaceOrdersOptions
  ): Promise<IMap<OrderExchangeOrderId, Order>> {
    // TODO implement!!!
  }

  /**
   *
   * @param options
   */
  async cancelOrder(options: CancelOrderOptions): Promise<Order> {
    // TODO implement!!!
  }

  /**
   *
   * @param options
   */
  async cancelOrders(
    options: CancelOrdersOptions
  ): Promise<IMap<OrderExchangeOrderId, Order>> {
    // TODO implement!!!
  }

  /**
   *
   * @param options
   */
  async cancelAllOrders(
    options: CancelAllOrdersOptions
  ): Promise<IMap<OrderExchangeOrderId, Order>> {
    // TODO implement!!!
  }

  /**
   *
   * @param options
   */
  async settleFunds(options: SettleFundsOptions): Promise<SettleFund> {
    // TODO implement!!!
  }

  /**
   *
   * @param options
   */
  async settleSeveralFunds(
    options: SettleSeveralFundsOptions
  ): Promise<IMap<MarketId, SettleFund>> {
    // TODO implement!!!
  }

  /**
   *
   * @param options
   */
  async settleAllFunds(
    options: SettleAllFundsOptions
  ): Promise<IMap<MarketId, SettleFund>> {
    // TODO implement!!!
  }
}
