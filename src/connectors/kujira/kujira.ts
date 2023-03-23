import {
  Balance,
  Balances,
  BasicKujiraMarket,
  CancelAllOrdersOptions,
  CancelOrderOptions,
  CancelOrdersOptions,
  EstimatedFees,
  GetAllBalancesOptions,
  GetAllMarketsOptions,
  GetAllOrderBookOptions,
  GetAllTickerOptions,
  GetBalanceOptions,
  GetBalancesOptions,
  GetEstimatedFeesOptions,
  GetMarketOptions,
  GetMarketsOptions,
  GetOrderBookOptions,
  GetOrderBooksOptions,
  GetOrderOptions,
  GetOrdersOptions,
  GetTickerOptions,
  GetTickersOptions,
  GetTransactionOptions,
  GetTransactionsOptions,
  IMap,
  Market,
  MarketId,
  MarketNotFoundError,
  Order,
  OrderBook,
  OrderId,
  OrderNotFoundError,
  OrderOwnerAddress,
  OrderSide,
  OrderStatus,
  PlaceOrderOptions,
  PlaceOrdersOptions,
  Settlement,
  SettlementOptions,
  SettlementsAllOptions,
  SettlementsOptions,
  Ticker,
  TickerNotFoundError,
  TickerSource,
  TokenId,
  Transaction,
  TransactionSignature,
} from './kujira.types';
import { KujiraConfig } from './kujira.config';
import { config as cosmosConfig } from '../../chains/cosmos/cosmos.config';
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
  RPCS,
} from 'kujira.js';
import contracts from 'kujira.js/src/resources/contracts.json';
import axios from 'axios';
import {
  convertKujiraMarketToMarket,
  convertKujiraOrderBookToOrderBook,
  convertKujiraOrdersToMapOfOrders,
  convertKujiraOrderToOrder,
  convertKujiraSettlementToSettlement,
  convertNetworkToKujiraNetwork,
  convertToTicker,
} from './kujira.convertors';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Cache, CacheContainer } from 'node-ts-cache';
import { MemoryStorage } from 'node-ts-cache-storage-memory';
import { AccountData } from '@cosmjs/proto-signing/build/signer';
import { coins, GasPrice, SigningStargateClient } from '@cosmjs/stargate';
import { ExecuteResult, JsonObject } from '@cosmjs/cosmwasm-stargate';
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate/build/signingcosmwasmclient';
import {
  Coin,
  DirectSecp256k1HdWallet,
  EncodeObject,
} from '@cosmjs/proto-signing';
import { Slip10RawIndex } from '@cosmjs/crypto';
import { HttpBatchClient, Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { StdFee } from '@cosmjs/amino';
import { DeliverTxResponse } from '@cosmjs/stargate/build/stargateclient';
import { BigNumber } from 'ethers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const caches = {
  instances: new CacheContainer(new MemoryStorage()),
  markets: new CacheContainer(new MemoryStorage()),
};

const config = KujiraConfig.config;

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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private readonly cosmosConfig;

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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private accounts: readonly AccountData[];

  /**
   *
   * @private
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private account: AccountData;

  /**
   *
   * @private
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private directSecp256k1HdWallet: DirectSecp256k1HdWallet;

  /**
   *
   * @private
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private httpBatchClient: HttpBatchClient;

  /**
   *
   * @private
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private tendermint34Client: Tendermint34Client;

  /**
   *
   * @private
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private kujiraQueryClient: KujiraQueryClient;

  /**
   *
   * @private
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private signingStargateClient: SigningStargateClient;

  /**
   *
   * @private
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private signingCosmWasmClient: SigningCosmWasmClient;

  /**
   *
   * @private
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private cosmos: Cosmos;

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
   *
   */
  isReady: boolean = false;

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

    this.cosmosConfig = cosmosConfig;

    this.kujiraNetwork = convertNetworkToKujiraNetwork(this.network);
  }

  private async getRPCEndpoint(): Promise<string> {
    let rpcEndpoint = config.rpcEndpoint;

    // TODO implement a mechanism to get the RPC with the lowest latency!!!
    if (!rpcEndpoint) {
      rpcEndpoint = RPCS[this.kujiraNetwork][0];
    }

    return rpcEndpoint;
  }

  /**
   * Initialize the Kujira instance.
   */
  async init() {
    if (!this.isReady && !this.isInitializing) {
      this.isInitializing = true;

      this.cosmos = await Cosmos.getInstance(this.network);
      await this.cosmos.init();

      const rpcEndpoint: string = await this.getRPCEndpoint();

      const mnemonic: string = await this.getMnemonic();

      const prefix: string = config.prefix;

      const accountNumber: number = config.accountNumber;

      const gasPrice: string = `${config.gasPrice}${config.gasPriceSuffix}`;

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

  @Cache(caches.markets, { ttl: config.cache.marketsData })
  async kujiraGetMarketsData(): Promise<IMap<MarketId, BasicKujiraMarket>> {
    const marketsURL =
      config.markets.url ||
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

  private async getMnemonic(): Promise<string> {
    // TODO this needs to come from the wallet!!!
    throw new Error('Not implemented.');
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

  private async kujiraFinClientWithdrawOrders(
    finClient: fin.FinClient,
    {
      orderIdxs,
    }: {
      orderIdxs?: string[];
    },
    fee: number | StdFee | 'auto' = 'auto',
    memo?: string,
    funds?: readonly Coin[]
  ): Promise<ExecuteResult> {
    return await runWithRetryAndTimeout<Promise<ExecuteResult>>(
      finClient,
      finClient.withdrawOrders,
      [orderIdxs, fee, memo, funds]
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
  @Cache(caches.markets, { ttl: config.cache.markets })
  async getAllMarkets(
    _options?: GetAllMarketsOptions
  ): Promise<IMap<MarketId, Market>> {
    const allMarkets = IMap<MarketId, Market>().asMutable();

    let marketsData: IMap<MarketId, BasicKujiraMarket> =
      await this.kujiraGetMarketsData();

    marketsData = marketsData.filter(
      (item) =>
        (config.markets.blacklist?.length
          ? !config.markets.blacklist.includes(item.address)
          : true) &&
        (config.markets.whiteList?.length
          ? config.markets.whiteList.includes(item.address)
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
          offset: config.orderBook.offset,
          limit: config.orderBook.limit,
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
    if (!options.marketIds)
      throw new MarketNotFoundError(`No market informed.`);

    const orderBooks = IMap<string, OrderBook>().asMutable();

    const getOrderBook = async (marketId: string): Promise<void> => {
      const orderBook = await this.getOrderBook({ marketId });

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
    const marketIds = (await this.getAllMarkets()).keySeq().toArray();

    return this.getOrderBooks({ marketIds });
  }

  /**
   *
   * @param options
   */
  async getTicker(options: GetTickerOptions): Promise<Ticker> {
    const market = await this.getMarket({ id: options.marketId });

    for (const [source, configuration] of config.tickers.sources) {
      try {
        if (!source || source === TickerSource.ORDER_BOOK_SAP) {
          const orderBook = await this.getOrderBook({ marketId: market.id });
          const bestBid = orderBook.bestBid;
          const bestAsk = orderBook.bestAsk;

          const simpleAveragePrice = getNotNullOrThrowError<Order>(bestBid)
            .price.add(getNotNullOrThrowError<Order>(bestAsk).price)
            .div(BigNumber.from(2));

          const result = {
            price: simpleAveragePrice,
            timestamp: Date.now(),
          };

          return convertToTicker(result);
        } else if (source === TickerSource.ORDER_BOOK_WAP) {
          // const orderBook = await this.getOrderBook({ marketId: market.id });

          throw Error('Not implemented.');
        } else if (source === TickerSource.ORDER_BOOK_VWAP) {
          // const orderBook = await this.getOrderBook({ marketId: market.id });

          throw Error('Not implemented.');
        } else if (source === TickerSource.LAST_FILLED_ORDER) {
          const filledOrders = await this.getOrders({
            status: OrderStatus.FILLED,
            marketId: market.id,
          });

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
            configuration.url ||
            'https://nomics.com/data/exchange-markets-ticker?convert=USD&exchange=kujira_dex&interval=1m&market=${marketAddress}'
          ).replace('${marketAddress}', market.connectorMarket.address);

          const result: { price: any; last_updated_at: any } = (
            await runWithRetryAndTimeout(
              axios,
              axios.get,
              [finalUrl],
              config.retry.all.maxNumberOfRetries,
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
    if (!options.marketIds)
      throw new MarketNotFoundError(`No market informed.`);

    const tickers = IMap<string, Ticker>().asMutable();

    const getTicker = async (marketId: string): Promise<void> => {
      const ticker = await this.getTicker({ marketId });

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
    const marketIds = (await this.getAllMarkets()).keySeq().toArray();

    return await this.getTickers({ marketIds });
  }

  async getBalance(options: GetBalanceOptions): Promise<Balance> {
    const balances = await this.getBalances({ tokenIds: [options.tokenId] });

    if (balances.tokens.has(options.tokenId)) {
      return getNotNullOrThrowError<Promise<Balance>>(
        await balances.tokens.get(options.tokenId)
      );
    }

    throw new Error(`Token "${options.tokenId}" not found.`);
  }

  async getBalances(options: GetBalancesOptions): Promise<Balances> {
    const allBalances = await this.getAllBalances({});

    const balances: Balances = {
      tokens: IMap<TokenId, Balance>().asMutable(),
      total: {
        free: BigNumber.from(0),
        lockedInOrders: BigNumber.from(0),
        unsettled: BigNumber.from(0),
      },
    };

    for (const [tokenId, balance] of allBalances.tokens) {
      if (options.tokenIds.includes(tokenId)) {
        balances.tokens.set(tokenId, balance);

        balances.total.free = balances.total.free.add(balance.free);
        balances.total.lockedInOrders = balances.total.lockedInOrders.add(
          balance.lockedInOrders
        );
        balances.total.unsettled = balances.total.unsettled.add(
          balance.unsettled
        );
      } else {
        throw new Error(`Token "${tokenId}" not found.`);
      }
    }

    return balances;
  }

  /**
   *
   * @param _options
   */
  async getAllBalances(_options: GetAllBalancesOptions): Promise<Balances> {
    // TODO Implement this method!!!

    // const balances: Balances = {
    //   tokens: IMap<TokenId, Balance>().asMutable(),
    //   total: {
    //     free: BigNumber.from(0),
    //     lockedInOrders: BigNumber.from(0),
    //     unsettled: BigNumber.from(0),
    //   },
    // };

    // return balances;

    throw new Error('Not implemented.');
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
            order_idx: options.id,
          },
        }
      );

      if (!result) {
        throw new OrderNotFoundError(
          `Order with id "${options.id}" not found in market "${market.id}".`
        );
      }

      const order = convertKujiraOrderToOrder(market, result);

      if (options.status && order.status !== options.status) {
        throw new OrderNotFoundError(
          `Order with id "${options.id}" with status "${options.status}" not found in market "${market.id}".`
        );
      } else if (
        options.statuses &&
        !options.statuses.includes(getNotNullOrThrowError(order.status))
      ) {
        throw new OrderNotFoundError(
          `Order with id "${
            options.id
          }" with one of the statuses "${options.statuses.join(
            ', '
          )}" not found in market "${market.id}".`
        );
      }

      if (options.ownerAddress && order.ownerAddress !== options.ownerAddress) {
        throw new OrderNotFoundError(
          `Order with id "${options.id}" with owner address "${options.ownerAddress}" not found in market "${market.id}".`
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
        `Order with id "${options.id}" not found in any market.`
      );
    }
  }

  /**
   *
   * @param options
   */
  async getOrders(options: GetOrdersOptions): Promise<IMap<OrderId, Order>> {
    let orders: IMap<OrderId, Order>;

    if (options.marketId) {
      const market = await this.getMarket({ id: options.marketId });

      const results = await this.kujiraQueryClientWasmQueryContractSmart(
        market.connectorMarket.address,
        {
          orders_by_user: {
            address: this.account.address,
            limit: config.orders.filled.limit,
          },
        }
      );

      return convertKujiraOrdersToMapOfOrders(market, results);
    } else {
      const marketIds =
        options.marketIds || (await this.getAllMarkets()).keySeq().toArray();

      orders = IMap<OrderId, Order>().asMutable();

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
    return (
      await this.placeOrders({
        orders: [options],
        waitUntilIncludedInBlock: options.waitUntilIncludedInBlock,
      })
    ).first();
  }

  /**
   *
   * @param options
   */
  async placeOrders(
    options: PlaceOrdersOptions
  ): Promise<IMap<OrderId, Order>> {
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
        funds: coins(candidate.amount.toString(), denom.reference),
      });

      candidateMessages.push(message);
    }

    const messages: readonly EncodeObject[] = candidateMessages;

    const results = await this.kujiraSigningStargateClientSignAndBroadcast(
      this.account.address,
      messages,
      config.orders.create.fee
    );

    return convertKujiraOrdersToMapOfOrders(results);
  }

  /**
   *
   * @param options
   */
  async cancelOrder(options: CancelOrderOptions): Promise<Order> {
    return (
      await this.cancelOrders({
        ids: [options.id],
        ownerAddresses: [options.ownerAddress],
        marketId: options.marketId,
      })
    ).first();
  }

  /**
   *
   * @param options
   */
  async cancelOrders(
    options: CancelOrdersOptions
  ): Promise<IMap<OrderId, Order>> {
    const market = await this.getMarket({ id: options.marketId });

    // TODO check if using index 0 would work for all!!!
    const denom: Denom = market.connectorMarket.denoms[0];

    const message = msg.wasm.msgExecuteContract({
      sender: this.account.address,
      contract: market.id,
      msg: Buffer.from(
        JSON.stringify({
          retract_orders: {
            order_idxs: options.ids,
          },
        })
      ),
      funds: coins(0, denom.reference),
    });

    const messages: readonly EncodeObject[] = [message];

    const results = await this.kujiraSigningStargateClientSignAndBroadcast(
      this.account.address,
      messages,
      config.orders.create.fee
    );

    return convertKujiraOrdersToMapOfOrders(results);
  }

  /**
   *
   * @param options
   */
  async cancelAllOrders(
    options?: CancelAllOrdersOptions
  ): Promise<IMap<OrderId, Order>> {
    const marketIds: MarketId[] = options?.marketId
      ? [options?.marketId]
      : options?.marketIds || (await this.getAllMarkets()).keySeq().toArray();

    const cancelledOrders = IMap<OrderId, Order>().asMutable();

    for (const marketId of marketIds) {
      const openOrdersIds = (await this.getOrders({ status: OrderStatus.OPEN }))
        .valueSeq()
        .map((order) => getNotNullOrThrowError<OrderId>(order.id))
        .toArray();

      cancelledOrders.merge(
        await this.cancelOrders({
          ids: openOrdersIds,
          marketId,
          ownerAddresses: options?.ownerAddresses,
        })
      );
    }

    return cancelledOrders;
  }

  /**
   *
   * @param options
   */
  async settleMarketFunds(options: SettlementOptions): Promise<Settlement> {
    const market = await this.getMarket({ id: options.marketId });

    const finClient = new fin.FinClient(
      this.signingCosmWasmClient,
      this.account.address,
      market.id
    );

    const filledOrdersIds = (
      await this.getOrders({ status: OrderStatus.FILLED })
    )
      .valueSeq()
      .map((order) => getNotNullOrThrowError<OrderId>(order.id))
      .toArray();

    const result = await this.kujiraFinClientWithdrawOrders(finClient, {
      orderIdxs: filledOrdersIds,
    });

    return convertKujiraSettlementToSettlement(result);
  }

  /**
   *
   * @param options
   */
  async settleMarketsFunds(
    options: SettlementsOptions
  ): Promise<IMap<MarketId, Settlement>> {
    if (!options.marketIds)
      throw new MarketNotFoundError(`No market informed.`);

    const settlements = IMap<MarketId, Settlement>().asMutable();

    interface HelperSettleFundsOptions {
      marketId: MarketId;
      ownerAddresses: OrderOwnerAddress[];
    }

    const settleMarketFunds = async (
      options: HelperSettleFundsOptions
    ): Promise<void> => {
      const results = await this.settleMarketFunds({
        marketId: options.marketId,
        ownerAddresses: options.ownerAddresses,
      });

      settlements.set(options.marketId, results);
    };

    await promiseAllInBatches<HelperSettleFundsOptions, void>(
      settleMarketFunds,
      options.marketIds.map((id) => {
        return { marketId: id, ownerAddresses: options.ownerAddresses };
      })
    );

    return settlements;
  }

  /**
   *
   * @param options
   */
  async settleAllMarketsFunds(
    options?: SettlementsAllOptions
  ): Promise<IMap<MarketId, Settlement>> {
    const marketIds = (await this.getAllMarkets()).keySeq().toArray();

    return await this.settleMarketsFunds({
      marketIds,
      ownerAddresses: options?.ownerAddresses || [this.account.address],
    });
  }

  async getTransaction(_options: GetTransactionOptions): Promise<Transaction> {
    // TODO implement method!!!
    // return convertKujiraTransactionToTransaction(transaction);

    throw new Error('Not implemented.');
  }

  /**
   *
   * @param options
   */
  async getTransactions(
    options: GetTransactionsOptions
  ): Promise<IMap<TransactionSignature, Transaction>> {
    const transactions = IMap<TransactionSignature, Transaction>().asMutable();

    const getTransaction = async (
      options: GetTransactionOptions
    ): Promise<void> => {
      const transaction = await this.getTransaction(options);

      transactions.set(transaction.signature, transaction);
    };

    await promiseAllInBatches<GetTransactionOptions, void>(
      getTransaction,
      options.signatures.map((signature) => {
        return { signature };
      })
    );

    return transactions;
  }

  getEstimatedFees(_options: GetEstimatedFeesOptions): EstimatedFees {
    return {
      token: config.nativeToken,
      price: config.gasPrice,
      limit: config.gasLimitEstimate,
      cost: config.gasPrice.mul(config.gasLimitEstimate),
    } as EstimatedFees;
  }
}
