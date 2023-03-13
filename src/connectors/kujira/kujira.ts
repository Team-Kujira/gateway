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
  OrderNotFoundError,
  OrderSide,
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
  Denom,
  fin,
  kujiraQueryClient,
  KujiraQueryClient,
  msg,
  registry,
} from 'kujira.js';
import contracts from 'kujira.js/src/resources/contracts.json';
import axios from 'axios';
import constants from './kujira.constants';
import {
  convertArrayOfKujiraOrdersToMapOfOrders,
  convertKujiraMarketToMarket,
  convertKujiraOrderBookToOrderBook,
  convertKujiraOrderToOrder,
  convertNetworkToKujiraNetwork,
  convertToTicker,
} from './kujira.convertors';
import { Cache, CacheContainer } from 'node-ts-cache';
import { MemoryStorage } from 'node-ts-cache-storage-memory';
import { AccountData } from '@cosmjs/proto-signing/build/signer';
import { coins, GasPrice, SigningStargateClient } from '@cosmjs/stargate';
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate/build/signingcosmwasmclient';
import { DirectSecp256k1HdWallet, EncodeObject } from '@cosmjs/proto-signing';
import { Slip10RawIndex } from '@cosmjs/crypto';
import { HttpBatchClient, Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { JsonObject } from '@cosmjs/cosmwasm-stargate';
import { StdFee } from '@cosmjs/amino';
import { DeliverTxResponse } from '@cosmjs/stargate/build/stargateclient';

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
   * The correct type for this property would be kujira.js/NETWORK
   *  but the compile method is incompatible with it.
   *
   * @private
   */
  private readonly kujiraNetwork: keyof typeof contracts;

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

    this.kujiraNetwork = convertNetworkToKujiraNetwork(this.network);
  }

  /**
   * Initialize the Kujira instance.
   */
  async init() {
    if (!this.isReady && !this.isInitializing) {
      this.isInitializing = true;

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

  private async kujiraQueryClientWasmQueryContractSmart(
    address: string,
    query: JsonObject
  ): Promise<JsonObject> {
    return await runWithRetryAndTimeout<Promise<JsonObject>>(
      this.kujiraQueryClient,
      this.kujiraQueryClient.wasm.queryContractSmart,
      [address, query]
    );
  }

  private async kujiraSigningStargateClientSignAndBroadcast(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee | 'auto' | number,
    memo?: string
  ): Promise<DeliverTxResponse> {
    return await runWithRetryAndTimeout<Promise<JsonObject>>(
      this.signingStargateClient,
      this.signingStargateClient.signAndBroadcast,
      [signerAddress, messages, fee, memo]
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

    const orderBook = await this.kujiraQueryClientWasmQueryContractSmart(
      market.connectorMarket.address,
      {
        book: {
          offset: constants.orderBook.offset,
          limit: constants.orderBook.limit,
        },
      }
    );

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
        if (!source || source === TickerSource.ORDER_BOOK_SAP) {
          const orderBook = await this.getOrderBook({ marketId: market.id });
          const bestBid = orderBook.bestBid;
          const bestAsk = orderBook.bestAsk;

          const simpleAveragePrice =
            (getNotNullOrThrowError<Order>(bestBid).price +
              getNotNullOrThrowError<Order>(bestAsk).price) /
            2;

          const result = {
            price: simpleAveragePrice,
            timestamp: Date.now(),
          };

          return convertToTicker(result);
        } else if (source === TickerSource.ORDER_BOOK_WAP) {
          // TODO Calculate mid price from the best bid and ask!!!
          throw Error('Not implemented.');
        } else if (source === TickerSource.ORDER_BOOK_VWAP) {
          // TODO Calculate mid price from the best bid and ask!!!
          throw Error('Not implemented.');
        } else if (source === TickerSource.LAST_FILLED_ORDER) {
          const filledOrders = await this.getFilledOrders({});

          if (filledOrders.size) {
            const lastFilledOrder = filledOrders.values().next().value;

            const result = {
              price: lastFilledOrder.price,
              timestamp: Date.now(),
            };

            return convertToTicker(result);
          } else {
            throw new TickerNotFoundError(
              `Ticker data is currently not available for market "${market.id}".`
            );
          }
        } else if (source === TickerSource.NOMICS) {
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
      `Ticker data is currently not available for market "${options.marketId}".`
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
    if (options.marketId) {
      const market = await this.getMarket({ id: options.marketId });

      const result = await this.kujiraQueryClientWasmQueryContractSmart(
        market.connectorMarket.address,
        {
          order: {
            order_idx: options.exchangeOrderId,
          },
        }
      );

      if (!result) {
        throw new OrderNotFoundError(
          `Order with id "${options.exchangeOrderId}" not found in market "${market.id}".`
        );
      }

      const order = convertKujiraOrderToOrder(market, result);

      if (options.status && order.status !== options.status) {
        throw new OrderNotFoundError(
          `Order with id "${options.exchangeOrderId}" with status "${options.status}" not found in market "${market.id}".`
        );
      } else if (
        options.statuses &&
        !options.statuses.includes(getNotNullOrThrowError(order.status))
      ) {
        throw new OrderNotFoundError(
          `Order with id "${
            options.exchangeOrderId
          }" with one of the statuses "${options.statuses.join(
            ', '
          )}" not found in market "${market.id}".`
        );
      }

      if (options.ownerAddress && order.ownerAddress !== options.ownerAddress) {
        throw new OrderNotFoundError(
          `Order with id "${options.exchangeOrderId}" with owner address "${options.ownerAddress}" not found in market "${market.id}".`
        );
      }

      return result;
    } else {
      for (const market of (await this.getAllMarkets({})).values()) {
        try {
          const order = await this.getOrder({
            ...options,
            marketId: market.id,
          });

          return order;
        } catch (exception) {
          // Ignoring so other markets can be tried.
        }
      }

      throw new OrderNotFoundError(
        `Order with id "${options.exchangeOrderId}" not found in any market.`
      );
    }
  }

  /**
   *
   * @param options
   */
  async getOrders(
    options: GetOrdersOptions
  ): Promise<IMap<OrderExchangeOrderId, Order>> {
    let orders: IMap<OrderExchangeOrderId, Order>;

    if (options.marketId) {
      const market = await this.getMarket({ id: options.marketId });

      const results = await this.kujiraQueryClientWasmQueryContractSmart(
        market.connectorMarket.address,
        {
          orders_by_user: {
            address: this.account.address,
            limit: constants.orders.filled.limit,
          },
        }
      );

      orders = convertArrayOfKujiraOrdersToMapOfOrders(market, results);
    } else {
      const marketIds =
        options.marketIds || (await this.getAllMarkets()).keySeq().toArray();

      orders = IMap<OrderExchangeOrderId, Order>().asMutable();

      const getOrders = async (marketId: string): Promise<void> => {
        const marketOrders = await this.getOrders({
          ...options,
          marketId,
        });

        orders.merge(marketOrders);
      };

      await promiseAllInBatches(getOrders, marketIds);
    }

    orders.filter((order) => {
      if (options.status && order.status !== options.status) {
        return false;
      } else if (
        options.statuses &&
        !options.statuses.includes(getNotNullOrThrowError(order.status))
      ) {
        return false;
      }

      if (options.ownerAddress && order.ownerAddress !== options.ownerAddress) {
        return false;
      } else if (
        options.ownerAddresses &&
        !options.ownerAddresses.includes(
          getNotNullOrThrowError(order.ownerAddress)
        )
      ) {
        return false;
      }

      return true;
    });

    return orders;
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
    const candidateMessages: EncodeObject[] = [];

    for (const candidate of options.orders) {
      const market = await this.getMarket({ id: candidate.marketId });

      let denom: Denom;
      if (candidate.side == OrderSide.BUY) {
        denom = market.connectorMarket.denoms[1];
      } else if (candidate.side == OrderSide.SELL) {
        denom = market.connectorMarket.denoms[0];
      } else {
        throw Error('Unrecognized order side.');
      }

      const message = msg.wasm.msgExecuteContract({
        sender: candidate.ownerAddress || this.account.address,
        contract: market.id,
        msg: Buffer.from(
          JSON.stringify({
            submit_order: { price: candidate.price },
          })
        ),
        funds: coins(candidate.amount, denom.reference),
      });

      candidateMessages.push(message);
    }

    const messages: readonly EncodeObject[] = candidateMessages;

    const results = await this.kujiraSigningStargateClientSignAndBroadcast(
      this.account.address,
      messages,
      constants.orders.create.fee
    );

    const orders = convertArrayOfKujiraOrdersToMapOfOrders(results);

    return orders;
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
    const market = await this.getMarket({ id: options.marketId });

    const message = msg.wasm.msgExecuteContract({
      sender: this.account.address,
      contract: market.id,
      msg: Buffer.from(
        JSON.stringify({
          retract_orders: {
            order_idxs: options.exchangeOrderIds,
          },
        })
      ),
      funds: coins(amount, denom.reference),
    });

    const messages: readonly EncodeObject[] = [message];

    const results = await this.kujiraSigningStargateClientSignAndBroadcast(
      this.account.address,
      messages,
      constants.orders.create.fee
    );

    const orders = convertArrayOfKujiraOrdersToMapOfOrders(results);

    return orders;
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
