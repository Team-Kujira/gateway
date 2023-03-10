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
  TickerSource,
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
import {
  fin,
  kujiraQueryClient,
  KujiraQueryClient,
  NETWORK,
  registry,
} from 'kujira.js';
import axios from 'axios';
import constants from './kujira.constants';
import {
  convertKujiraMarketToMarket,
  convertKujiraOrderBookToOrderBook,
  convertNetworkToKujiraNetwork,
  convertToTicker,
} from './kujira.convertors';
import { Cache, CacheContainer } from 'node-ts-cache';
import { MemoryStorage } from 'node-ts-cache-storage-memory';
import { AccountData } from '@cosmjs/proto-signing/build/signer';
import { GasPrice, SigningStargateClient } from '@cosmjs/stargate';
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate/build/signingcosmwasmclient';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { Slip10RawIndex } from '@cosmjs/crypto';
import { HttpBatchClient, Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { JsonObject } from '@cosmjs/cosmwasm-stargate';

const caches = {
  instances: new CacheContainer(new MemoryStorage()),
  markets: new CacheContainer(new MemoryStorage()),
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
  private isInitializing: boolean = false;

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
  private kujiraNetwork: NETWORK;

  /**
   *
   * @private
   */
  private accounts: readonly AccountData[];

  /**
   *
   * @private
   */
  private account: AccountData;

  /**
   *
   * @private
   */
  private directSecp256k1HdWallet: DirectSecp256k1HdWallet;

  /**
   *
   * @private
   */
  private httpBatchClient: HttpBatchClient;

  /**
   *
   * @private
   */
  private tendermint34Client: Tendermint34Client;

  /**
   *
   * @private
   */
  private kujiraQueryClient: KujiraQueryClient;

  /**
   *
   * @private
   */
  private signingStargateClient: SigningStargateClient;

  /**
   *
   * @private
   */
  private signingCosmWasmClient: SigningCosmWasmClient;

  /**
   *
   * @private
   */
  private cosmos: Cosmos;

  /**
   *
   * @private
   */
  private isReady: boolean = false;

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
  }

  /**
   * Initialize the Kujira instance.
   */
  async init() {
    if (!this.isReady && !this.isInitializing) {
      this.isInitializing = true;

      this.kujiraNetwork = convertNetworkToKujiraNetwork(this.network);

      this.cosmos = await Cosmos.getInstance(this.network);
      await this.cosmos.init();

      const rpcEndpoint: string = this.config.rpcEndpoint;

      // TODO this needs to come from the wallet!!!
      const mnemonic: string = this.config.mnemonic;

      const prefix: string = this.config.prefix || constants.prefix;

      const accountNumber: number =
        this.config.accountNumber || constants.accountNumber;

      const gasPrice: string = this.config.gasPrice || constants.gasPrice;

      // signer
      this.directSecp256k1HdWallet = await DirectSecp256k1HdWallet.fromMnemonic(
        mnemonic,
        {
          prefix: prefix,
          hdPaths: [
            [
              Slip10RawIndex.hardened(44),
              Slip10RawIndex.hardened(118),
              Slip10RawIndex.hardened(0),
              Slip10RawIndex.normal(0),
              Slip10RawIndex.normal(accountNumber),
            ],
          ],
        }
      );

      this.accounts = await this.directSecp256k1HdWallet.getAccounts();

      this.account = this.accounts[0];

      this.httpBatchClient = new HttpBatchClient(rpcEndpoint, {
        dispatchInterval: 2000,
      });

      this.tendermint34Client = await Tendermint34Client.create(
        this.httpBatchClient
      );

      this.kujiraQueryClient = kujiraQueryClient({
        client: this.tendermint34Client,
      });

      this.signingStargateClient =
        await SigningStargateClient.connectWithSigner(
          rpcEndpoint,
          this.directSecp256k1HdWallet,
          {
            registry,
            gasPrice: GasPrice.fromString(gasPrice),
          }
        );

      this.signingCosmWasmClient =
        await SigningCosmWasmClient.connectWithSigner(
          rpcEndpoint,
          this.directSecp256k1HdWallet,
          {
            registry,
            gasPrice: GasPrice.fromString(gasPrice),
          }
        );

      await this.getAllMarkets();

      this.isReady = true;
      this.isInitializing = false;
    }
  }

  /**
   */
  ready(): boolean {
    return this.isReady;
  }

  @Cache(caches.markets, { ttl: constants.cache.marketsData })
  async kujiraGetMarketsData(): Promise<IMap<MarketId, BasicKujiraMarket>> {
    const marketsURL =
      this.config.markets.url ||
      'https://raw.githubusercontent.com/Team-Kujira/kujira.js/master/src/resources/contracts.json';

    let marketsData: IMap<MarketId, BasicKujiraMarket>;

    try {
      if (marketsURL.startsWith('https')) {
        const contracts = (
          await runWithRetryAndTimeout<any>(axios, axios.get, [marketsURL])
        ).data;

        const data = contracts[this.kujiraNetwork].fin.reduce(
          fin.compile(this.kujiraNetwork),
          {}
        );

        marketsData = IMap<MarketId, BasicKujiraMarket>(data).asMutable();
      } else {
        // kujira.js/src/resources/contracts.json
        const contracts = require(marketsURL);

        const data = contracts[this.kujiraNetwork].fin.reduce(
          fin.compile(this.kujiraNetwork),
          {}
        );

        marketsData = IMap<MarketId, BasicKujiraMarket>(data).asMutable();
      }
    } catch (exception) {
      marketsData = IMap<MarketId, BasicKujiraMarket>(
        fin.PAIRS[this.kujiraNetwork]
      );
    }

    return marketsData;
  }

  private async kujiraGetOrderBook(market: Market): Promise<JsonObject> {
    return await runWithRetryAndTimeout<Promise<JsonObject>>(
      this.kujiraQueryClient,
      this.kujiraQueryClient.wasm.queryContractSmart,
      [
        market.connectorMarket.address,
        {
          book: {
            offset: constants.orderBook.offset,
            limit: constants.orderBook.limit,
          },
        },
      ]
    );
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
    _options?: GetAllMarketsOptions
  ): Promise<IMap<MarketId, Market>> {
    const allMarkets = IMap<MarketId, Market>().asMutable();

    let marketsData: IMap<MarketId, BasicKujiraMarket> =
      await this.kujiraGetMarketsData();

    marketsData = marketsData.filter(
      (item) =>
        (this.config.markets.blacklist?.length
          ? !this.config.markets.blacklist.includes(item.address)
          : true) &&
        (this.config.markets.whiteList?.length
          ? this.config.markets.whiteList.includes(item.address)
          : true)
    );

    const loadMarket = async (market: BasicKujiraMarket): Promise<void> => {
      allMarkets.set(market.address, convertKujiraMarketToMarket(market));
    };

    await promiseAllInBatches(loadMarket, marketsData.valueSeq().toArray());

    return allMarkets;
  }

  /**
   *
   * @param options
   */
  async getOrderBook(options: GetOrderBookOptions): Promise<OrderBook> {
    const market = await this.getMarket({ id: options.marketId });

    const orderBook = await this.kujiraGetOrderBook(market);

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
    const market = await this.getMarket({ id: options.marketId });

    for (const [source, config] of this.config.tickers.sources) {
      try {
        if (source === TickerSource.NOMICS) {
          const finalUrl = (
            config.url ||
            'https://nomics.com/data/exchange-markets-ticker?convert=USD&exchange=kujira_dex&interval=1m&market=${marketAddress}'
          ).replace('${marketAddress}', market.connectorMarket.address);

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
        } else if (source === TickerSource.LAST_FILLED_ORDER) {
          const filledOrders = await this.getFilledOrders({});

          if (filledOrders.size) {
            const lastFilledOrder = filledOrders.values().next().value;

            const result = {
              price: lastFilledOrder.price,
              timestamp: Date.now(),
              ticker: lastFilledOrder,
            };

            return convertToTicker(result);
          } else {
            throw new TickerNotFoundError(
              `Ticker data is currently not available for market "${market.id}".`
            );
          }
        } else if (source === TickerSource.ORDER_BOOK_SAP) {
          // TODO Calculate mid price from the best bid and ask!!!
        } else if (source === TickerSource.ORDER_BOOK_WAP) {
          // TODO Calculate mid price from the best bid and ask!!!
        } else if (source === TickerSource.ORDER_BOOK_VWAP) {
          // TODO Calculate mid price from the best bid and ask!!!
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

  async getFilledOrders(
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
    options?: CancelAllOrdersOptions
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
    options?: SettleAllFundsOptions
  ): Promise<IMap<MarketId, SettleFund>> {
    // TODO implement!!!
  }
}
