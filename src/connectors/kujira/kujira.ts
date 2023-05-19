import {
  Address,
  AllMarketsWithdrawsRequest,
  AllMarketsWithdrawsResponse,
  Balance,
  Balances,
  BasicKujiraMarket,
  BasicKujiraToken,
  CancelAllOrdersRequest,
  CancelAllOrdersResponse,
  CancelOrderRequest,
  CancelOrderResponse,
  CancelOrdersRequest,
  CancelOrdersResponse,
  ConvertOrderType,
  DecryptWalletRequest,
  DecryptWalletResponse,
  EncryptWalletRequest,
  EncryptWalletResponse,
  EstimatedFees,
  GetAllBalancesRequest,
  GetAllBalancesResponse,
  GetAllMarketsRequest,
  GetAllMarketsResponse,
  GetAllOrderBooksRequest,
  GetAllOrderBooksResponse,
  GetAllTickersRequest,
  GetAllTickersResponse,
  GetAllTokensRequest,
  GetAllTokensResponse,
  GetBalanceRequest,
  GetBalanceResponse,
  GetBalancesRequest,
  GetBalancesResponse,
  GetCurrentBlockRequest,
  GetCurrentBlockResponse,
  GetEstimatedFeesRequest,
  GetMarketRequest,
  GetMarketResponse,
  GetMarketsRequest,
  GetMarketsResponse,
  GetOrderBookRequest,
  GetOrderBookResponse,
  GetOrderBooksRequest,
  GetOrderBooksResponse,
  GetOrderRequest,
  GetOrderResponse,
  GetOrdersRequest,
  GetOrdersResponse,
  GetTickerRequest,
  GetTickerResponse,
  GetTickersRequest,
  GetTickersResponse,
  GetTokenRequest,
  GetTokenResponse,
  GetTokensRequest,
  GetTokensResponse,
  GetTokenSymbolsToTokenIdsMapRequest,
  GetTokenSymbolsToTokenIdsMapResponse,
  GetTransactionRequest,
  GetTransactionResponse,
  GetTransactionsRequest,
  GetTransactionsResponse,
  GetWalletArtifactsRequest,
  GetWalletPublicKeyRequest,
  GetWalletPublicKeyResponse,
  GetWalletsPublicKeysRequest,
  IMap,
  KujiraOrder,
  KujiraWalletArtifacts,
  Market,
  MarketId,
  MarketNotFoundError,
  MarketsWithdrawsFundsResponse,
  MarketsWithdrawsRequest,
  MarketWithdrawRequest,
  MarketWithdrawResponse,
  Mnemonic,
  Order,
  OrderBook,
  OrderId,
  OrderOwnerAddress,
  OrderPrice,
  OrderSide,
  OrderStatus,
  OrderType,
  OwnerAddress,
  PlaceOrderRequest,
  PlaceOrderResponse,
  PlaceOrdersRequest,
  PlaceOrdersResponse,
  Ticker,
  TickerNotFoundError,
  TickerSource,
  Token,
  TokenId,
  TokenNotFoundError,
  TokenSymbol,
  Transaction,
  TransactionHash,
  Withdraw,
} from './kujira.types';
import { KujiraConfig } from './kujira.config';
import { Slip10RawIndex } from '@cosmjs/crypto';
import {
  getNotNullOrThrowError,
  promiseAllInBatches,
  runWithRetryAndTimeout,
} from './kujira.helpers';
import {
  Denom,
  fin,
  KujiraQueryClient,
  kujiraQueryClient,
  MAINNET,
  msg,
  NETWORKS,
  registry,
  RPCS,
  USK,
  USK_TESTNET,
} from 'kujira.js';
import contracts from 'kujira.js/src/resources/contracts.json';
import axios from 'axios';
import {
  convertKujiraBalancesToBalances,
  convertKujiraEventsToMapOfEvents,
  convertKujiraMarketToMarket,
  convertKujiraOrderBookToOrderBook,
  convertKujiraOrdersToMapOfOrders,
  convertKujiraRawLogEventsToMapOfEvents,
  convertKujiraSettlementToSettlement,
  convertKujiraTickerToTicker,
  convertKujiraTokenToToken,
  convertKujiraTransactionToTransaction,
  convertNetworkToKujiraNetwork,
} from './kujira.convertors';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Cache, CacheContainer } from 'node-ts-cache';
import { MemoryStorage } from 'node-ts-cache-storage-memory';
import {
  coins,
  GasPrice,
  SigningStargateClient,
  StargateClient,
} from '@cosmjs/stargate';
import { ExecuteResult, JsonObject } from '@cosmjs/cosmwasm-stargate';
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate/build/signingcosmwasmclient';
import {
  Coin,
  DirectSecp256k1HdWallet,
  EncodeObject,
} from '@cosmjs/proto-signing';
import { HttpBatchClient, Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { StdFee } from '@cosmjs/amino';
import { IndexedTx } from '@cosmjs/stargate/build/stargateclient';
import { BigNumber } from 'bignumber.js';
import { fromBase64, toBase64 } from '@cosmjs/encoding';
import { walletPath } from '../../services/base';
import fse from 'fs-extra';
import { ConfigManagerCertPassphrase } from '../../services/config-manager-cert-passphrase';
import { EncryptedPrivateKey } from '../../chains/cosmos/cosmos-base';
import * as crypto from 'crypto';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const caches = {
  instances: new CacheContainer(new MemoryStorage()),
  tokens: new CacheContainer(new MemoryStorage()),
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
  private accounts: IMap<OwnerAddress, KujiraWalletArtifacts>;

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
  private stargateClient: StargateClient;

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

    this.kujiraNetwork = convertNetworkToKujiraNetwork(this.network);

    this.accounts = IMap<OwnerAddress, KujiraWalletArtifacts>().asMutable();
  }

  private async getRPCEndpoint(): Promise<string> {
    let rpcEndpoint = config.rpcEndpoint;

    // TODO implement a mechanism to get the RPC with the lowest latency!!!
    if (!rpcEndpoint) {
      rpcEndpoint = RPCS[this.kujiraNetwork][0];
    }

    return rpcEndpoint;
  }

  async getDirectSecp256k1HdWallet(
    mnemonic: Mnemonic,
    prefix: string,
    accountNumber: number
  ): Promise<DirectSecp256k1HdWallet> {
    return await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
      prefix: prefix,
      hdPaths: [
        [
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          Slip10RawIndex.hardened(44),
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          Slip10RawIndex.hardened(118),
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          Slip10RawIndex.hardened(0),
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          Slip10RawIndex.normal(0),
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          Slip10RawIndex.normal(accountNumber),
        ],
      ],
    });
  }

  /**
   * Initialize the Kujira instance.
   */
  async init() {
    if (!this.isReady && !this.isInitializing) {
      this.isInitializing = true;

      const rpcEndpoint: string = await this.getRPCEndpoint();

      this.httpBatchClient = new HttpBatchClient(rpcEndpoint, {
        dispatchInterval: 2000,
      });

      this.tendermint34Client = await Tendermint34Client.create(
        this.httpBatchClient
      );

      this.kujiraQueryClient = kujiraQueryClient({
        client: this.tendermint34Client,
      });

      this.stargateClient = await StargateClient.connect(rpcEndpoint);

      await this.getAllMarkets();

      this.isReady = true;
      this.isInitializing = false;
    }
  }

  @Cache(caches.tokens, { ttl: config.cache.tokensData })
  async kujiraGetBasicTokens(): Promise<IMap<TokenId, BasicKujiraToken>> {
    const tokensURL = config.tokens.url;

    const basicTokens: IMap<TokenId, BasicKujiraToken> = IMap<
      TokenId,
      BasicKujiraToken
    >().asMutable();

    if (tokensURL.startsWith('https')) {
      const rawBasicTokens = (
        await runWithRetryAndTimeout<any>(axios, axios.get, [tokensURL])
      ).data;

      Object.keys(rawBasicTokens).map((key: string) => {
        const basicToken = Denom.from(key);

        basicTokens.set(basicToken.reference, basicToken);
      });
    } else {
      // kujira.js/src/resources/tokens.json
      const rawBasicTokens = require(tokensURL);

      Object.keys(rawBasicTokens).map((key: string) => {
        const basicToken = Denom.from(key);

        basicTokens.set(basicToken.reference, basicToken);
      });
    }

    return basicTokens;
  }

  @Cache(caches.markets, { ttl: config.cache.marketsData })
  async kujiraGetBasicMarkets(): Promise<IMap<MarketId, BasicKujiraMarket>> {
    const marketsURL = config.markets.url;

    let basicMarkets: IMap<MarketId, BasicKujiraMarket>;

    try {
      if (marketsURL.startsWith('https')) {
        const rawBasicMarkets = (
          await runWithRetryAndTimeout<any>(axios, axios.get, [marketsURL])
        ).data;

        const data = rawBasicMarkets[this.kujiraNetwork].fin.reduce(
          fin.compile(this.kujiraNetwork),
          {}
        );

        basicMarkets = IMap<MarketId, BasicKujiraMarket>(data).asMutable();
      } else {
        // kujira.js/src/resources/contracts.json
        const contracts = require(marketsURL);

        const data = contracts[this.kujiraNetwork].fin.reduce(
          fin.compile(this.kujiraNetwork),
          {}
        );

        basicMarkets = IMap<MarketId, BasicKujiraMarket>(data).asMutable();
      }
    } catch (exception) {
      basicMarkets = IMap<MarketId, BasicKujiraMarket>(
        fin.PAIRS[this.kujiraNetwork]
      );
    }

    return basicMarkets;
  }

  getWalletsPublicKeys(_options: GetWalletsPublicKeysRequest): Address[] {
    return this.accounts.keySeq().toArray();
  }

  private async getWalletArtifacts(
    options: GetWalletArtifactsRequest
  ): Promise<KujiraWalletArtifacts> {
    if (this.accounts.has(options.ownerAddress)) {
      return getNotNullOrThrowError<KujiraWalletArtifacts>(
        this.accounts.get(options.ownerAddress)
      );
    }

    const basicWallet = await this.decryptWallet({
      accountAddress: options.ownerAddress,
    });

    const rpcEndpoint = await this.getRPCEndpoint();

    const prefix: string = config.prefix;

    const gasPrice: string = `${config.gasPrice}${config.gasPriceSuffix}`;

    const mnemonic: string = basicWallet.mnemonic;

    const accountNumber: number =
      basicWallet.accountNumber || config.accountNumber;

    // signer
    const directSecp256k1HdWallet = await this.getDirectSecp256k1HdWallet(
      mnemonic,
      prefix,
      accountNumber
    );

    const accounts = await directSecp256k1HdWallet.getAccounts();

    const account = accounts[0];

    const publicKey = account.address;

    const signingStargateClient = await SigningStargateClient.connectWithSigner(
      rpcEndpoint,
      directSecp256k1HdWallet,
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        registry: registry,
        gasPrice: GasPrice.fromString(gasPrice),
      }
    );

    const signingCosmWasmClient = await SigningCosmWasmClient.connectWithSigner(
      rpcEndpoint,
      directSecp256k1HdWallet,
      {
        registry: registry,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        gasPrice: GasPrice.fromString(gasPrice),
      }
    );

    const walletArtifacts: KujiraWalletArtifacts = {
      publicKey: publicKey,
      accountData: account,
      accountNumber: accountNumber,
      directSecp256k1HdWallet: directSecp256k1HdWallet,
      signingStargateClient: signingStargateClient,
      signingCosmWasmClient: signingCosmWasmClient,
      finClients: IMap<MarketId, fin.FinClient>().asMutable(),
    };

    this.accounts.set(publicKey, walletArtifacts);

    return walletArtifacts;
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
    signingStargateClient: SigningStargateClient,
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee | 'auto' | number,
    memo?: string
  ): Promise<KujiraOrder> {
    return await runWithRetryAndTimeout<Promise<JsonObject>>(
      signingStargateClient,
      signingStargateClient.signAndBroadcast,
      [signerAddress, messages, fee, memo]
    );
  }

  private async kujiraStargateClientGetHeight(): Promise<number> {
    return await runWithRetryAndTimeout<Promise<number>>(
      this.stargateClient,
      this.stargateClient.getHeight,
      []
    );
  }

  /**
   *
   * @param id
   * @private
   */
  private async kujiraStargateClientGetTx(
    id: string
  ): Promise<IndexedTx | null> {
    return await runWithRetryAndTimeout<Promise<IndexedTx | null>>(
      this.stargateClient,
      this.stargateClient.getTx,
      [id]
    );
  }

  private async kujiraStargateClientGetAllBalances(
    address: string
  ): Promise<readonly Coin[]> {
    return await runWithRetryAndTimeout<Promise<readonly Coin[]>>(
      this.stargateClient,
      this.stargateClient.getAllBalances,
      [address]
    );
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private async kujiraStargateClientGetBalanceStaked(
    address: string
  ): Promise<Coin | null> {
    return await runWithRetryAndTimeout<Promise<Coin | null>>(
      this.stargateClient,
      this.stargateClient.getBalanceStaked,
      [address]
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
  async getToken(options: GetTokenRequest): Promise<GetTokenResponse> {
    if (options.id) {
      return convertKujiraTokenToToken(
        Denom.from(getNotNullOrThrowError<TokenId>(options.id))
      );
    } else {
      const allTokens = await this.getAllTokens({});

      let token: Token | undefined;

      if (options.symbol) {
        token = allTokens
          .valueSeq()
          .find((token) => token.symbol == options.symbol);
      } else if (options.name) {
        token = allTokens
          .valueSeq()
          .find((token) => token.name == options.name);
      }

      if (!token)
        throw new TokenNotFoundError(`Token ${options.symbol} not found.`);

      return token;
    }
  }

  /**
   *
   * @param options
   */
  async getTokens(options: GetTokensRequest): Promise<GetTokensResponse> {
    const tokens = IMap<TokenId, Token>().asMutable();

    if (options.ids) {
      for (const id of options.ids) {
        const token = await this.getToken({ id });

        tokens.set(token.id, token);
      }

      return tokens;
    } else if (options.names) {
      for (const name of options.names) {
        const token = await this.getToken({ name });

        tokens.set(token.id, token);
      }

      return tokens;
    } else if (options.symbols) {
      for (const symbol of options.symbols) {
        const token = await this.getToken({ symbol });

        tokens.set(token.id, token);
      }

      return tokens;
    } else {
      throw new Error('No token identifiers provided.');
    }
  }

  /**
   *
   * @param _options
   */
  @Cache(caches.tokens, { ttl: config.cache.tokens })
  async getAllTokens(
    _options: GetAllTokensRequest
  ): Promise<GetAllTokensResponse> {
    const tokenIds = (await this.kujiraGetBasicTokens())
      .valueSeq()
      .map((token) => token.reference)
      .toArray();

    return await this.getTokens({ ids: tokenIds });
  }

  @Cache(caches.tokens, { ttl: config.cache.tokens })
  async getTokenSymbolsToTokenIdsMap(
    options?: GetTokenSymbolsToTokenIdsMapRequest
  ): Promise<GetTokenSymbolsToTokenIdsMapResponse> {
    const tokens = await this.getAllTokens({});

    let output = IMap<TokenSymbol, TokenId>().asMutable();

    tokens.map((token) => output.set(token.symbol, token.id));

    if (options?.symbols) {
      const symbols = getNotNullOrThrowError<TokenSymbol[]>(options.symbols);
      output = output.filter((_, symbol) => symbols.includes(symbol));
    }

    return output;
  }

  /**
   *
   * @param options
   */
  async getMarket(options: GetMarketRequest): Promise<GetMarketResponse> {
    const markets = await this.getAllMarkets();

    const marketId =
      options.id || markets.findKey((market) => market.name === options.name);
    if (!marketId) throw new MarketNotFoundError(`No market informed.`);

    const market = markets.get(marketId);

    if (!market)
      throw new MarketNotFoundError(`Market "${options.id}" not found.`);

    return getNotNullOrThrowError<GetMarketResponse>(market);
  }

  /**
   *
   * @param options
   */
  async getMarkets(options: GetMarketsRequest): Promise<GetMarketsResponse> {
    const allMarkets = await this.getAllMarkets();

    const markets = allMarkets.filter(
      (market) =>
        options.ids?.includes(market.id) ||
        options.names?.includes(market.name) ||
        false
    );

    return markets;
  }

  /**
   *
   */
  @Cache(caches.markets, { ttl: config.cache.markets })
  async getAllMarkets(
    _options?: GetAllMarketsRequest
  ): Promise<GetAllMarketsResponse> {
    const allMarkets = IMap<MarketId, Market>().asMutable();

    let marketsData: IMap<MarketId, BasicKujiraMarket> =
      await this.kujiraGetBasicMarkets();

    marketsData = marketsData.filter(
      (item) =>
        (config.markets.disallowed?.length
          ? !config.markets.disallowed.includes(item.address) &&
            !config.markets.disallowed.includes(
              `${item.denoms[0].symbol}/${item.denoms[1].symbol}`
            )
          : true) &&
        (config.markets.allowed?.length
          ? config.markets.allowed.includes(item.address) ||
            config.markets.allowed.includes(
              `${item.denoms[0].symbol}/${item.denoms[1].symbol}`
            )
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
  async getOrderBook(
    options: GetOrderBookRequest
  ): Promise<GetOrderBookResponse> {
    const market = await this.getMarket({
      id: options.marketId,
      name: options.marketName,
    });

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
    options: GetOrderBooksRequest
  ): Promise<GetOrderBooksResponse> {
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
    _options: GetAllOrderBooksRequest
  ): Promise<GetAllOrderBooksResponse> {
    const marketIds = (await this.getAllMarkets()).keySeq().toArray();

    return this.getOrderBooks({ marketIds });
  }

  /**
   *
   * @param options
   */
  async getTicker(options: GetTickerRequest): Promise<GetTickerResponse> {
    const market = await this.getMarket({ id: options.marketId });

    for (const [source, configuration] of config.tickers.sources) {
      try {
        if (!source || source === TickerSource.ORDER_BOOK_SAP) {
          const orderBook = await this.getOrderBook({ marketId: market.id });
          const bestBid = orderBook.bestBid;
          const bestAsk = orderBook.bestAsk;

          let simpleAveragePrice: BigNumber;

          if (bestBid && bestAsk) {
            simpleAveragePrice = getNotNullOrThrowError<OrderPrice>(
              bestBid.price
            )
              .plus(getNotNullOrThrowError<OrderPrice>(bestAsk.price))
              .div(BigNumber(2));
          } else {
            simpleAveragePrice = BigNumber('NaN');
          }

          const result = {
            price: simpleAveragePrice,
          };

          return convertKujiraTickerToTicker(result, market);
        } else if (source === TickerSource.ORDER_BOOK_WAP) {
          throw Error('Not implemented.');
        } else if (source === TickerSource.ORDER_BOOK_VWAP) {
          throw Error('Not implemented.');
        } else if (source === TickerSource.LAST_FILLED_ORDER) {
          throw Error('Not implemented.');
        } else if (source === TickerSource.NOMICS) {
          const finalUrl = configuration.url.replace(
            '${marketAddress}',
            market.connectorMarket.address
          );

          const result: { price: any; last_updated_at: any } = (
            await runWithRetryAndTimeout(
              axios,
              axios.get,
              [finalUrl],
              config.retry.all.maxNumberOfRetries,
              0
            )
          ).data.items[0];

          return convertKujiraTickerToTicker(result, market);
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
  async getTickers(options: GetTickersRequest): Promise<GetTickersResponse> {
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
    _options: GetAllTickersRequest
  ): Promise<GetAllTickersResponse> {
    const marketIds = (await this.getAllMarkets()).keySeq().toArray();

    return await this.getTickers({ marketIds });
  }

  async getBalance(options: GetBalanceRequest): Promise<GetBalanceResponse> {
    const balances = await this.getBalances({
      ownerAddress: options.ownerAddress,
      tokenIds: options.tokenId ? [options.tokenId] : undefined,
      tokenSymbols: options.tokenSymbol ? [options.tokenSymbol] : undefined,
    });

    if (balances.tokens.has(options.tokenId)) {
      return getNotNullOrThrowError<Balance>(
        balances.tokens.get(options.tokenId)
      );
    }

    throw new Error(`Token "${options.tokenId}" not found.`);
  }

  async getBalances(options: GetBalancesRequest): Promise<GetBalancesResponse> {
    const allBalances = await this.getAllBalances({
      ownerAddress: options.ownerAddress,
    });

    const balances: Balances = {
      tokens: IMap<TokenId, Balance>().asMutable(),
      total: {
        token: 'total',
        free: BigNumber(0),
        lockedInOrders: BigNumber(0),
        unsettled: BigNumber(0),
      },
    };

    const tokenIds =
      options.tokenIds ||
      (
        await this.getTokenSymbolsToTokenIdsMap({
          symbols: options.tokenSymbols,
        })
      )
        .valueSeq()
        .toArray();

    for (const [tokenId, balance] of allBalances.tokens) {
      if (tokenIds.includes(tokenId)) {
        balances.tokens.set(tokenId, balance);

        balances.total.free = balances.total.free.plus(balance.free);
        balances.total.lockedInOrders = balances.total.lockedInOrders.plus(
          balance.lockedInOrders
        );
        balances.total.unsettled = balances.total.unsettled.plus(
          balance.unsettled
        );
      }
    }

    return balances;
  }

  /**
   *
   * @param options
   */
  async getAllBalances(
    options: GetAllBalancesRequest
  ): Promise<GetAllBalancesResponse> {
    const kujiraBalances = await this.kujiraStargateClientGetAllBalances(
      options.ownerAddress
    );

    const orders = (await this.getOrders({
      ownerAddress: options.ownerAddress,
    })) as IMap<OrderId, Order>;

    let tickers: IMap<MarketId, Ticker>;

    try {
      const tokenIds = kujiraBalances.map((token: Coin) => token.denom);

      const uskToken =
        config.network.toLowerCase() == NETWORKS[MAINNET].toLowerCase()
          ? convertKujiraTokenToToken(USK)
          : convertKujiraTokenToToken(USK_TESTNET);

      const marketIds = (await this.getAllMarkets())
        .valueSeq()
        .filter(
          (market) =>
            tokenIds.includes(market.baseToken.id) &&
            market.quoteToken.id == uskToken.id
        )
        .map((market) => market.id)
        .toArray();

      tickers = await this.getAllTickers({ marketIds });
    } catch (exception) {
      tickers = IMap<string, Ticker>().asMutable();
    }

    return convertKujiraBalancesToBalances(kujiraBalances, orders, tickers);
  }

  /**
   *
   * @param options
   */
  async getOrder(options: GetOrderRequest): Promise<GetOrderResponse> {
    return (
      (await this.getOrders({
        ...options,
        ids: [options.id],
        ownerAddresses: [options.ownerAddress],
      })) as IMap<OrderId, Order>
    ) // Cast because we only have one ownerAddress.
      .first();
  }

  /**
   *
   * @param options
   */
  async getOrders(options: GetOrdersRequest): Promise<GetOrdersResponse> {
    const output = IMap<OwnerAddress, IMap<OrderId, Order>>().asMutable();

    const ownerAddresses: OrderOwnerAddress[] = options.ownerAddresses
      ? getNotNullOrThrowError<OrderOwnerAddress[]>(options.ownerAddresses)
      : [getNotNullOrThrowError<OrderOwnerAddress>(options.ownerAddress)];

    for (const ownerAddress of ownerAddresses) {
      let orders: IMap<OrderId, Order>;

      if (options.marketId || options.marketName) {
        const market = await this.getMarket({
          id: options.marketId,
          name: options.marketName,
        });

        const response = await this.kujiraQueryClientWasmQueryContractSmart(
          market.connectorMarket.address,
          {
            orders_by_user: {
              address: ownerAddress,
              limit: KujiraConfig.config.orders.open.limit,
            },
          }
        );

        const bundles = IMap<string, any>().asMutable();

        bundles.setIn(['common', 'response'], response);
        bundles.setIn(['common', 'status'], options.status);
        bundles.setIn(['common', 'market'], market);
        bundles.setIn(['orders'], response.orders);

        orders = convertKujiraOrdersToMapOfOrders({
          type: ConvertOrderType.GET_ORDERS,
          bundles,
        });
      } else {
        const marketIds =
          options.marketIds || (await this.getAllMarkets()).keySeq().toArray();

        orders = IMap<OrderId, Order>().asMutable();

        const getOrders = async (marketId: string): Promise<void> => {
          const marketOrders = getNotNullOrThrowError<IMap<OrderId, Order>>(
            await this.getOrders({
              ...options,
              marketId,
            })
          );

          orders.merge(marketOrders);
        };

        await promiseAllInBatches(getOrders, marketIds);
      }

      orders = orders.filter((order) => {
        if (options.status && order.status !== options.status) {
          return false;
        } else if (
          options.statuses &&
          !options.statuses.includes(getNotNullOrThrowError(order.status))
        ) {
          return false;
        } else if (
          options.ids &&
          !options.ids.includes(getNotNullOrThrowError<OrderId>(order.id))
        ) {
          return false;
        }

        return true;
      });

      output.set(ownerAddress, orders);
    }

    if (ownerAddresses.length == 1) {
      return output.first();
    }

    return output;
  }

  /**
   *
   * @param options
   */
  async placeOrder(options: PlaceOrderRequest): Promise<PlaceOrderResponse> {
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
  async placeOrders(options: PlaceOrdersRequest): Promise<PlaceOrdersResponse> {
    // TODO Make this method support multiple owner addresses!!!
    const ownerAddress =
      options.ownerAddress ||
      getNotNullOrThrowError<OrderOwnerAddress>(options.orders[0].ownerAddress);

    const candidateMessages: EncodeObject[] = [];

    const bundles = IMap<string, any>().asMutable();
    let bundleIndex = 0;
    for (const candidate of options.orders) {
      bundles.setIn(['orders', bundleIndex, 'candidate'], candidate);

      const market = await this.getMarket({
        id: candidate.marketId,
        name: candidate.marketName,
      });
      bundles.setIn(['orders', bundleIndex, 'market'], market);

      let denom: Denom;
      if (candidate.side == OrderSide.BUY) {
        denom = market.connectorMarket.denoms[1];
      } else if (candidate.side == OrderSide.SELL) {
        denom = market.connectorMarket.denoms[0];
      } else {
        throw Error('Unrecognized order side.');
      }

      let innerMessage;

      if (candidate.type == OrderType.MARKET) {
        innerMessage = {
          swap: {},
        };
      } else if (candidate.type == OrderType.LIMIT) {
        innerMessage = {
          submit_order: {
            price: BigNumber(candidate.price)
              .decimalPlaces(market.connectorMarket.precision.decimal_places)
              .toString(),
          },
        };
      } else {
        throw new Error('Unrecognized order type.');
      }

      const message = msg.wasm.msgExecuteContract({
        sender: ownerAddress, // We use the same owner address for all orders.
        contract: market.connectorMarket.address,
        msg: Buffer.from(JSON.stringify(innerMessage)),
        funds: coins(
          BigNumber(candidate.amount)
            .multipliedBy(BigNumber(10).pow(denom.decimals))
            .integerValue()
            .toString(),
          denom.reference
        ),
      });

      candidateMessages.push(message);

      bundleIndex++;
    }

    const messages: readonly EncodeObject[] = candidateMessages;

    const walletArtifacts = await this.getWalletArtifacts({
      ownerAddress,
    });

    const response = await this.kujiraSigningStargateClientSignAndBroadcast(
      walletArtifacts.signingStargateClient,
      ownerAddress,
      messages,
      config.orders.create.fee
    );

    bundles.setIn(['common', 'response'], response);
    bundles.setIn(['common', 'status'], OrderStatus.OPEN);
    bundles.setIn(
      ['common', 'events'],
      convertKujiraEventsToMapOfEvents(response.events)
    );

    const mapOfEvents = convertKujiraRawLogEventsToMapOfEvents(
      JSON.parse(getNotNullOrThrowError<string>(response.rawLog))
    );

    for (const [bundleIndex, events] of mapOfEvents.entries()) {
      for (const [key, value] of events.entries()) {
        bundles.setIn(['orders', bundleIndex, 'events', key], value);
      }
    }

    return convertKujiraOrdersToMapOfOrders({
      type: ConvertOrderType.PLACE_ORDERS,
      bundles: bundles,
    });
  }

  /**
   *
   * @param options
   */
  async cancelOrder(options: CancelOrderRequest): Promise<CancelOrderResponse> {
    return (
      (await this.cancelOrders({
        ids: [options.id],
        ownerAddresses: [options.ownerAddress],
        marketId: options.marketId,
        marketName: options.marketName,
      })) as IMap<OrderId, Order>
    ) // Cast because we only have one ownerAddress.
      .first();
  }

  /**
   *
   * @param options
   */
  async cancelOrders(
    options: CancelOrdersRequest
  ): Promise<CancelOrdersResponse> {
    // TODO Make this method to support multiple markets!!!
    const market = await this.getMarket({
      id: options.marketId,
      name: options.marketName,
    });

    const output = IMap<OwnerAddress, IMap<OrderId, Order>>().asMutable();

    const ownerAddresses: OrderOwnerAddress[] = options.ownerAddresses
      ? getNotNullOrThrowError<OrderOwnerAddress[]>(options.ownerAddresses)
      : [getNotNullOrThrowError<OrderOwnerAddress>(options.ownerAddress)];

    for (const ownerAddress of ownerAddresses) {
      // TODO check if using index 0 would work for all !!!
      const denom: Denom = market.connectorMarket.denoms[0];

      const message = msg.wasm.msgExecuteContract({
        sender: ownerAddress,
        contract: market.id,
        msg: Buffer.from(
          JSON.stringify({
            retract_orders: {
              order_idxs: options.ids,
            },
          })
        ),
        funds: coins(1, denom.reference),
      });

      const messages: readonly EncodeObject[] = [message];

      const walletArtifacts = await this.getWalletArtifacts({
        ownerAddress,
      });

      const response = await this.kujiraSigningStargateClientSignAndBroadcast(
        walletArtifacts.signingStargateClient,
        ownerAddress,
        messages,
        config.orders.create.fee
      );

      const bundles = IMap<string, any>().asMutable();

      bundles.setIn(['common', 'response'], response);
      bundles.setIn(['common', 'status'], OrderStatus.CANCELLED);
      bundles.setIn(
        ['common', 'events'],
        convertKujiraEventsToMapOfEvents(response.events)
      );

      const mapOfEvents = convertKujiraRawLogEventsToMapOfEvents(
        JSON.parse(getNotNullOrThrowError<string>(response.rawLog)),
        options.ids.length
      );

      for (const [bundleIndex, events] of mapOfEvents.entries()) {
        for (const [key, value] of events.entries()) {
          bundles.setIn(
            ['orders', bundleIndex, 'id'],
            options.ids[Number(bundleIndex)]
          );
          bundles.setIn(['orders', bundleIndex, 'market'], market);
          bundles.setIn(['orders', bundleIndex, 'events', key], value);
        }
      }

      output.set(
        ownerAddress,
        convertKujiraOrdersToMapOfOrders({
          type: ConvertOrderType.CANCELLED_ORDERS,
          bundles,
        })
      );
    }

    if (ownerAddresses.length == 1) {
      return output.first();
    }

    return output;
  }

  /**
   *
   * @param options
   */
  async cancelAllOrders(
    options: CancelAllOrdersRequest
  ): Promise<CancelAllOrdersResponse> {
    const output = IMap<OwnerAddress, IMap<OrderId, Order>>().asMutable();

    const ownerAddresses: OrderOwnerAddress[] = options.ownerAddresses
      ? getNotNullOrThrowError<OrderOwnerAddress[]>(options.ownerAddresses)
      : [getNotNullOrThrowError<OrderOwnerAddress>(options.ownerAddress)];

    for (const ownerAddress of ownerAddresses) {
      const marketIds: MarketId[] = options?.marketId
        ? [options?.marketId]
        : options?.marketIds || (await this.getAllMarkets()).keySeq().toArray();

      const cancelledOrders = IMap<OrderId, Order>().asMutable();

      for (const marketId of marketIds) {
        const openOrders = (await this.getOrders({
          ownerAddresses: [ownerAddress],
          marketId: marketId,
          status: OrderStatus.OPEN,
        })) as IMap<OrderId, Order>; // Cast because we have only one ownerAddress

        const openOrdersIds = openOrders.keySeq().toArray();

        cancelledOrders.merge(
          (await this.cancelOrders({
            ids: openOrdersIds,
            marketId,
            ownerAddresses: [ownerAddress],
          })) as IMap<OrderId, Order> // Cast because we have only one ownerAddress
        );
      }

      output.set(ownerAddress, cancelledOrders);
    }

    if (ownerAddresses.length == 1) {
      return output.first();
    }

    return output;
  }

  /**
   *
   * @param options
   */
  async settleMarketFunds(
    options: MarketWithdrawRequest
  ): Promise<MarketWithdrawResponse> {
    const market = await this.getMarket({ id: options.marketId });

    const output = IMap<OwnerAddress, Withdraw>().asMutable();

    const ownerAddresses: OrderOwnerAddress[] = options.ownerAddresses
      ? getNotNullOrThrowError<OrderOwnerAddress[]>(options.ownerAddresses)
      : [getNotNullOrThrowError<OrderOwnerAddress>(options.ownerAddress)];

    for (const ownerAddress of ownerAddresses) {
      const walletArtifacts = await this.getWalletArtifacts({
        ownerAddress,
      });

      let finClient: fin.FinClient;

      if (walletArtifacts.finClients.has(ownerAddress)) {
        finClient = getNotNullOrThrowError<fin.FinClient>(
          walletArtifacts.finClients.get(ownerAddress)
        );
      } else {
        finClient = new fin.FinClient(
          walletArtifacts.signingCosmWasmClient,
          ownerAddress,
          market.id
        );

        walletArtifacts.finClients.set(ownerAddress, finClient);
      }

      const filledOrdersIds = getNotNullOrThrowError<IMap<OrderId, Order>>(
        (await this.getOrders({
          ownerAddresses: [ownerAddress],
          status: OrderStatus.FILLED,
        })) as IMap<OrderId, Order> // Cast because we have only one ownerAddress
      )
        .valueSeq()
        .map((order) => getNotNullOrThrowError<OrderId>(order.id))
        .toArray();

      const result = await this.kujiraFinClientWithdrawOrders(finClient, {
        orderIdxs: filledOrdersIds,
      });

      output.set(ownerAddress, convertKujiraSettlementToSettlement(result));
    }

    if (ownerAddresses.length == 1) {
      return output.first();
    }

    return output;
  }

  /**
   *
   * @param options
   */
  async settleMarketsFunds(
    options: MarketsWithdrawsRequest
  ): Promise<MarketsWithdrawsFundsResponse> {
    if (!options.marketIds)
      throw new MarketNotFoundError(`No market informed.`);

    const output = IMap<OwnerAddress, IMap<MarketId, Withdraw>>().asMutable();

    interface HelperSettleFundsOptions {
      marketId: MarketId;
      ownerAddresses: OrderOwnerAddress[];
    }

    const ownerAddresses: OrderOwnerAddress[] = options.ownerAddresses
      ? getNotNullOrThrowError<OrderOwnerAddress[]>(options.ownerAddresses)
      : [getNotNullOrThrowError<OrderOwnerAddress>(options.ownerAddress)];

    for (const ownerAddress of ownerAddresses) {
      const settleMarketFunds = async (
        options: HelperSettleFundsOptions
      ): Promise<void> => {
        const results = (await this.settleMarketFunds({
          marketId: options.marketId,
          ownerAddresses: ownerAddresses,
        })) as Withdraw; // Cast because we have only one ownerAddress

        output.setIn([ownerAddress, options.marketId], results);
      };

      for (const marketId of options.marketIds) {
        settleMarketFunds({
          marketId: marketId,
          ownerAddresses: [ownerAddress],
        });
      }

      // await promiseAllInBatches<HelperSettleFundsOptions, void>(
      //   settleMarketFunds,
      //   options.marketIds.map((id) => {
      //     return { marketId: id, ownerAddresses: [ownerAddress] };
      //   })
      // );
    }

    if (ownerAddresses.length == 1) {
      return output.first();
    }

    return output;
  }

  /**
   *
   * @param options
   */
  async settleAllMarketsFunds(
    options: AllMarketsWithdrawsRequest
  ): Promise<AllMarketsWithdrawsResponse> {
    const marketIds = (await this.getAllMarkets()).keySeq().toArray();

    const ownerAddresses: OrderOwnerAddress[] = options.ownerAddresses
      ? getNotNullOrThrowError<OrderOwnerAddress[]>(options.ownerAddresses)
      : [getNotNullOrThrowError<OrderOwnerAddress>(options.ownerAddress)];

    return await this.settleMarketsFunds({
      marketIds,
      ownerAddresses,
    });
  }

  async getCurrentBlock(
    _options: GetCurrentBlockRequest
  ): Promise<GetCurrentBlockResponse> {
    return await this.kujiraStargateClientGetHeight();
  }

  async getTransaction(
    options: GetTransactionRequest
  ): Promise<GetTransactionResponse> {
    return convertKujiraTransactionToTransaction(
      getNotNullOrThrowError<IndexedTx>(
        await this.kujiraStargateClientGetTx(options.hash)
      )
    );
  }

  /**
   *
   * @param options
   */
  async getTransactions(
    options: GetTransactionsRequest
  ): Promise<GetTransactionsResponse> {
    const transactions = IMap<TransactionHash, Transaction>().asMutable();

    const getTransaction = async (
      options: GetTransactionRequest
    ): Promise<void> => {
      const transaction = await this.getTransaction(options);

      transactions.set(transaction.hash, transaction);
    };

    await promiseAllInBatches<GetTransactionRequest, void>(
      getTransaction,
      options.hashes.map((hash) => {
        return { hash };
      })
    );

    return transactions;
  }

  getEstimatedFees(_options: GetEstimatedFeesRequest): GetEstimatedFeesRequest {
    return {
      token: config.nativeToken,
      price: config.gasPrice,
      limit: config.gasLimitEstimate,
      cost: config.gasPrice.multipliedBy(config.gasLimitEstimate),
    } as EstimatedFees;
  }

  /**
   *
   * @param options
   */
  async getWalletPublicKey(
    options: GetWalletPublicKeyRequest
  ): Promise<GetWalletPublicKeyResponse> {
    return (
      await (
        await this.getDirectSecp256k1HdWallet(
          options.mnemonic,
          KujiraConfig.config.prefix,
          options.accountNumber || KujiraConfig.config.accountNumber
        )
      ).getAccounts()
    )[0].address;
  }

  /**
   *
   * @param options
   */
  async encryptWallet(
    options: EncryptWalletRequest
  ): Promise<EncryptWalletResponse> {
    const passphrase = ConfigManagerCertPassphrase.readPassphrase();
    if (!passphrase) {
      throw new Error('missing passphrase');
    }

    const iv = crypto.webcrypto.getRandomValues(new Uint8Array(16));
    const salt = crypto.webcrypto.getRandomValues(new Uint8Array(16));
    const keyMaterial = await crypto.webcrypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(passphrase),
      'PBKDF2',
      false,
      ['deriveBits', 'deriveKey']
    );
    const keyAlgorithm = {
      name: 'PBKDF2',
      salt: salt,
      iterations: 500000,
      hash: 'SHA-256',
    };
    const key = await crypto.webcrypto.subtle.deriveKey(
      keyAlgorithm,
      keyMaterial,
      { name: 'AES-GCM', length: 256 },
      true,
      ['encrypt', 'decrypt']
    );
    const cipherAlgorithm = {
      name: 'AES-GCM',
      iv: iv,
    };
    const enc = new TextEncoder();
    const ciphertext: Uint8Array = (await crypto.webcrypto.subtle.encrypt(
      cipherAlgorithm,
      key,
      enc.encode(JSON.stringify(options.wallet))
    )) as Uint8Array;

    const encryptedString = JSON.stringify(
      {
        keyAlgorithm,
        cipherAlgorithm,
        ciphertext: new Uint8Array(ciphertext),
      },
      (key, value) => {
        switch (key) {
          case 'ciphertext':
          case 'salt':
          case 'iv':
            return toBase64(Uint8Array.from(Object.values(value)));
          default:
            return value;
        }
      }
    );

    return encryptedString;
  }

  /**
   *
   * @param options
   */
  async decryptWallet(
    options: DecryptWalletRequest
  ): Promise<DecryptWalletResponse> {
    const path = `${walletPath}/${this.chain}`;

    const encryptedPrivateKey: EncryptedPrivateKey = JSON.parse(
      await fse.readFile(`${path}/${options.accountAddress}.json`, 'utf8'),
      (key, value) => {
        switch (key) {
          case 'ciphertext':
          case 'salt':
          case 'iv':
            return fromBase64(value);
          default:
            return value;
        }
      }
    );

    const passphrase = ConfigManagerCertPassphrase.readPassphrase();
    if (!passphrase) {
      throw new Error('missing passphrase');
    }

    const enc = new TextEncoder();
    const keyMaterial = await crypto.webcrypto.subtle.importKey(
      'raw',
      enc.encode(passphrase),
      'PBKDF2',
      false,
      ['deriveBits', 'deriveKey']
    );
    const key = await crypto.webcrypto.subtle.deriveKey(
      encryptedPrivateKey.keyAlgorithm,
      keyMaterial,
      { name: 'AES-GCM', length: 256 },
      true,
      ['encrypt', 'decrypt']
    );
    const decrypted = await crypto.webcrypto.subtle.decrypt(
      encryptedPrivateKey.cipherAlgorithm,
      key,
      encryptedPrivateKey.ciphertext
    );
    const dec = new TextDecoder();
    const decryptedString = dec.decode(decrypted);

    return JSON.parse(decryptedString);
  }
}
