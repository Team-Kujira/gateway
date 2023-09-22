import {
  Address,
  AllMarketsWithdrawsRequest,
  AllMarketsWithdrawsResponse,
  TokenBalance,
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
  GetEstimatedFeesResponse,
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
  GetRootRequest,
  GetRootResponse,
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
  LatencyData,
  Market,
  MarketId,
  MarketName,
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
  Withdraws,
  Price,
  CoinGeckoId,
  CoinGeckoSymbol,
  GetKujiraTokenSymbolsToCoinGeckoTokenIdsMapResponse,
} from './kujira.types';
import { KujiraConfig, NetworkConfig } from './kujira.config';
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
  msg,
  registry,
  RPCS,
} from 'kujira.js';
import contracts from 'kujira.js/src/resources/contracts.json';
import axios from 'axios';
import {
  convertCoinGeckoQuotationsToQuotations,
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
  convertNonStandardKujiraTokenIds,
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
import { walletPath } from '../../services/base';
import fse from 'fs-extra';
import { ConfigManagerCertPassphrase } from '../../services/config-manager-cert-passphrase';
import * as crypto from 'crypto';
import util from 'util';

const pbkdf2 = util.promisify(crypto.pbkdf2);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const caches = {
  instances: new CacheContainer(new MemoryStorage()),
  tokens: new CacheContainer(new MemoryStorage()),
  markets: new CacheContainer(new MemoryStorage()),
  coinGeckoCoins: new CacheContainer(new MemoryStorage()),
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
  private rpcEndpoint: string;

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
    if (!this.rpcEndpoint) {
      this.rpcEndpoint =
        getNotNullOrThrowError<NetworkConfig>(
          getNotNullOrThrowError<Map<string, NetworkConfig>>(
            config.networks
          ).get(this.network)
        ).nodeURL || (await this.getFastestRpc());
    }

    return this.rpcEndpoint;
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

      this.kujiraGetHttpBatchClient(rpcEndpoint);

      await this.kujiraGetTendermint34Client();

      this.kujiraGetKujiraQueryClient();

      await this.kujiraGetStargateClient(rpcEndpoint);

      await this.getAllMarkets({}, this.network);

      this.isReady = true;
      this.isInitializing = false;
    }
  }

  private async kujiraGetStargateClient(rpcEndpoint: string) {
    this.stargateClient = await StargateClient.connect(rpcEndpoint);
  }

  private kujiraGetKujiraQueryClient() {
    this.kujiraQueryClient = kujiraQueryClient({
      client: this.tendermint34Client,
    });
  }

  private async kujiraGetTendermint34Client() {
    this.tendermint34Client = await Tendermint34Client.create(
      this.httpBatchClient
    );
  }

  private kujiraGetHttpBatchClient(rpcEndpoint: string) {
    this.httpBatchClient = new HttpBatchClient(rpcEndpoint, {
      dispatchInterval: 2000,
    });
  }

  @Cache(caches.tokens, { ttl: config.cache.tokensData })
  async kujiraGetBasicTokens(
    _network?: string
  ): Promise<IMap<TokenId, BasicKujiraToken>> {
    const basicTokens: IMap<TokenId, BasicKujiraToken> = IMap<
      TokenId,
      BasicKujiraToken
    >().asMutable();

    if (config.tokens.resolutionStrategy == 'tokens') {
      const tokensURL = config.tokens.url;

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
    } else if (config.tokens.resolutionStrategy == 'markets') {
      const basicMarkets = await this.kujiraGetBasicMarkets(this.network);

      for (const basicMarket of basicMarkets.values()) {
        const basicBaseToken = Denom.from(basicMarket.denoms[0].reference);
        const basicQuoteToken = Denom.from(basicMarket.denoms[1].reference);

        basicTokens.set(basicBaseToken.reference, basicBaseToken);
        basicTokens.set(basicQuoteToken.reference, basicQuoteToken);
      }
    }

    return basicTokens;
  }

  @Cache(caches.markets, { ttl: config.cache.marketsData })
  async kujiraGetBasicMarkets(
    _network?: string
  ): Promise<IMap<MarketId, BasicKujiraMarket>> {
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

  getRoot(_options: GetRootRequest): GetRootResponse {
    return {
      chain: this.chain,
      network: this.network,
      connector: this.connector,
      connection: this.isReady,
      timestamp: Date.now(),
    } as GetRootResponse;
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

    const signingStargateClient = await this.kujiraGetSigningStargateClient(
      rpcEndpoint,
      directSecp256k1HdWallet,
      gasPrice
    );

    const signingCosmWasmClient = await this.kujiraGetSigningCosmWasmClient(
      rpcEndpoint,
      directSecp256k1HdWallet,
      gasPrice
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

  private async kujiraGetSigningCosmWasmClient(
    rpcEndpoint: string,
    directSecp256k1HdWallet: DirectSecp256k1HdWallet,
    gasPrice: string
  ) {
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
    return signingCosmWasmClient;
  }

  private async kujiraGetSigningStargateClient(
    rpcEndpoint: string,
    directSecp256k1HdWallet: DirectSecp256k1HdWallet,
    gasPrice: string
  ) {
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

    return signingStargateClient;
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
      const allTokens = await this.getAllTokens({}, this.network);

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
    _options: GetAllTokensRequest,
    _network?: string
  ): Promise<GetAllTokensResponse> {
    const basicTokens = await this.kujiraGetBasicTokens(this.network);

    const tokenIds = basicTokens
      .valueSeq()
      .map((token) => token.reference)
      .toArray();

    convertNonStandardKujiraTokenIds(tokenIds);

    return await this.getTokens({ ids: tokenIds });
  }

  @Cache(caches.tokens, { ttl: config.cache.tokens })
  async getTokenSymbolsToTokenIdsMap(
    options?: GetTokenSymbolsToTokenIdsMapRequest,
    _network?: string
  ): Promise<GetTokenSymbolsToTokenIdsMapResponse> {
    const tokens = await this.getAllTokens({}, this.network);

    let output = IMap<TokenSymbol, TokenId>().asMutable();

    tokens.valueSeq().forEach((token) => output.set(token.symbol, token.id));

    if (options?.symbols) {
      const symbols = getNotNullOrThrowError<TokenSymbol[]>(options.symbols);
      output = output.filter((_, symbol) => symbols.includes(symbol));
    }

    return output;
  }

  @Cache(caches.coinGeckoCoins, { ttl: config.cache.coinGeckoCoins })
  async getKujiraTokenSymbolsToCoinGeckoIdsMap(
    _options?: any,
    _network?: string
  ): Promise<GetKujiraTokenSymbolsToCoinGeckoTokenIdsMapResponse> {
    const output = IMap<TokenSymbol, CoinGeckoId | undefined>().asMutable();

    const url = config.coinGecko.coinsUrl;

    const result: any = (
      await runWithRetryAndTimeout(
        axios,
        axios.get,
        [url],
        config.retry.all.maxNumberOfRetries,
        0
      )
    ).data;

    const coinGeckoSymbolsToIdsMap = IMap<
      CoinGeckoSymbol,
      CoinGeckoId
    >().asMutable();

    for (const item of result) {
      coinGeckoSymbolsToIdsMap.set(item.symbol, item.id);
    }

    const tokensSymbols = (
      await this.getTokenSymbolsToTokenIdsMap({}, this.network)
    )
      .keySeq()
      .toArray();

    for (const tokenSymbol of tokensSymbols) {
      const coinGeckoSymbol: CoinGeckoSymbol = tokenSymbol.toLowerCase();
      const coinGeckoId: CoinGeckoId | undefined =
        coinGeckoSymbolsToIdsMap.get(coinGeckoSymbol);
      output.set(tokenSymbol, coinGeckoId);
    }

    return output;
  }

  /**
   *
   * @param options
   */
  async getMarket(options: GetMarketRequest): Promise<GetMarketResponse> {
    const markets = await this.getAllMarkets({}, this.network);

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
    const allMarkets = await this.getAllMarkets({}, this.network);

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
    _options?: GetAllMarketsRequest,
    _network?: string
  ): Promise<GetAllMarketsResponse> {
    const allMarkets = IMap<MarketId, Market>().asMutable();

    let basicMarkets: IMap<MarketId, BasicKujiraMarket> =
      await this.kujiraGetBasicMarkets(this.network);

    basicMarkets = basicMarkets.filter(
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

    await promiseAllInBatches(loadMarket, basicMarkets.valueSeq().toArray());

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
      if (!options.marketNames)
        throw new MarketNotFoundError(`No market informed.`);

    const orderBooks = IMap<string, OrderBook>().asMutable();

    if (options.marketIds) {
      const getOrderBook = async (marketId: string): Promise<void> => {
        const orderBook = await this.getOrderBook({ marketId });

        orderBooks.set(marketId, orderBook);
      };

      await promiseAllInBatches(
        getOrderBook,
        getNotNullOrThrowError<MarketId[]>(options.marketIds)
      );
    } else {
      const getOrderBook = async (marketName: MarketName): Promise<void> => {
        const orderBook = await this.getOrderBook({ marketName });

        orderBooks.set(marketName, orderBook);
      };

      await promiseAllInBatches(
        getOrderBook,
        getNotNullOrThrowError<MarketId[]>(options.marketNames)
      );
    }

    return orderBooks;
  }

  /**
   *
   * @param _options
   */
  async getAllOrderBooks(
    _options: GetAllOrderBooksRequest
  ): Promise<GetAllOrderBooksResponse> {
    const marketIds = (await this.getAllMarkets({}, this.network))
      .keySeq()
      .toArray();

    return this.getOrderBooks({ marketIds });
  }

  /**
   *
   * @param options
   */
  async getTicker(options: GetTickerRequest): Promise<GetTickerResponse> {
    const market = await this.getMarket(
      options.marketId ? { id: options.marketId } : { name: options.marketName }
    );

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

          return convertKujiraTickerToTicker(source, result, market, null);
        } else if (source === TickerSource.ORDER_BOOK_WAP) {
          throw Error('Not implemented.');
        } else if (source === TickerSource.ORDER_BOOK_VWAP) {
          throw Error('Not implemented.');
        } else if (source === TickerSource.LAST_FILLED_ORDER) {
          throw Error('Not implemented.');
        } else if (source === TickerSource.COINGECKO) {
          const kujiraSymbolsToCoinGeckoIdsMap =
            await this.getKujiraTokenSymbolsToCoinGeckoIdsMap({}, this.network);

          const coinGeckoBaseTokenId = kujiraSymbolsToCoinGeckoIdsMap.get(
            market.baseToken.symbol
          );
          const coinGeckoQuoteTokenId = kujiraSymbolsToCoinGeckoIdsMap.get(
            market.quoteToken.symbol
          );

          let result: any;

          if (!coinGeckoBaseTokenId || !coinGeckoQuoteTokenId) {
            result = {};
          } else {
            const finalUrl = configuration.url.replace(
              '{targets}',
              coinGeckoBaseTokenId.concat(',').concat(coinGeckoQuoteTokenId)
            );

            result = (
              await runWithRetryAndTimeout(
                axios,
                axios.get,
                [finalUrl],
                config.retry.all.maxNumberOfRetries,
                0
              )
            ).data;
          }

          const tokens = {
            base: coinGeckoBaseTokenId,
            quote: coinGeckoQuoteTokenId,
          };

          return convertKujiraTickerToTicker(source, result, market, tokens);
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
      if (!options.marketNames)
        throw new MarketNotFoundError(`No market informed.`);

    const tickers = IMap<string, Ticker>().asMutable();

    if (options.marketIds) {
      const getTicker = async (marketId: string): Promise<void> => {
        const ticker = await this.getTicker({ marketId });

        tickers.set(marketId, ticker);
      };

      await promiseAllInBatches(getTicker, options.marketIds);
    } else {
      const getTicker = async (marketName: string): Promise<void> => {
        const ticker = await this.getTicker({ marketName });

        tickers.set(marketName, ticker);
      };

      await promiseAllInBatches(
        getTicker,
        getNotNullOrThrowError<MarketName[]>(options.marketNames)
      );
    }

    return tickers;
  }

  /**
   *
   * @param _options
   */
  async getAllTickers(
    _options: GetAllTickersRequest
  ): Promise<GetAllTickersResponse> {
    const marketIds = (await this.getAllMarkets({}, this.network))
      .keySeq()
      .toArray();

    return await this.getTickers({ marketIds });
  }

  async getAllTokensQuotationsInUSD(
    _options: any
  ): Promise<IMap<TokenId, Price>> {
    const kujiraSymbolsToCoinGeckoIdsMap =
      await this.getKujiraTokenSymbolsToCoinGeckoIdsMap({}, this.network);

    const coinGeckoIds = kujiraSymbolsToCoinGeckoIdsMap
      .valueSeq()
      .toArray()
      .join(',');

    const finalUrl = getNotNullOrThrowError<{ url: string }>(
      config.tickers.sources.get(TickerSource.COINGECKO)
    ).url.replace('{targets}', coinGeckoIds);

    const result: any = (
      await runWithRetryAndTimeout(
        axios,
        axios.get,
        [finalUrl],
        config.retry.all.maxNumberOfRetries,
        0
      )
    ).data;

    const tokensSymbolsToTokensIdsMap = await this.getTokenSymbolsToTokenIdsMap(
      {},
      this.network
    );

    return convertCoinGeckoQuotationsToQuotations(
      result,
      tokensSymbolsToTokensIdsMap,
      kujiraSymbolsToCoinGeckoIdsMap
    );
  }

  async getBalance(options: GetBalanceRequest): Promise<GetBalanceResponse> {
    if (!options.tokenSymbol && options.tokenId) {
      if (options.tokenId.startsWith('ibc')) {
        const tokenDenom = Denom.from(options.tokenId);
        options.tokenId = getNotNullOrThrowError<string>(
          tokenDenom.trace?.base_denom
        ).replace(':', '/');
      }
    }

    const balances = await this.getBalances({
      ownerAddress: options.ownerAddress,
      tokenIds: options.tokenId ? [options.tokenId] : undefined,
      tokenSymbols: options.tokenSymbol ? [options.tokenSymbol] : undefined,
    });

    if (options.tokenId) {
      if (balances.tokens.has(options.tokenId)) {
        return getNotNullOrThrowError<TokenBalance>(
          balances.tokens.get(options.tokenId)
        );
      }

      throw new Error(`Token "${options.tokenId}" not found.`);
    } else {
      if (
        getNotNullOrThrowError<any>(balances.tokens.valueSeq().first()).token
          ?.symbol == options.tokenSymbol
      ) {
        return getNotNullOrThrowError<any>(balances.tokens.valueSeq().first());
      }

      throw new Error(`Token "${options.tokenSymbol}" not found.`);
    }
  }

  async getBalances(options: GetBalancesRequest): Promise<GetBalancesResponse> {
    const allBalances = await this.getAllBalances({
      ownerAddress: options.ownerAddress,
    });

    const balances: Balances = {
      tokens: IMap<TokenId, TokenBalance>().asMutable(),
      total: {
        free: BigNumber(0),
        lockedInOrders: BigNumber(0),
        unsettled: BigNumber(0),
        total: BigNumber(0),
      },
    };

    const tokenIds = [
      ...new Set(
        options.tokenIds ||
          (
            await this.getTokenSymbolsToTokenIdsMap({
              symbols: options.tokenSymbols,
            })
          )
            .valueSeq()
            .toArray()
      ),
    ];

    for (const [tokenId, balance] of allBalances.tokens) {
      if (
        tokenIds.includes(tokenId) ||
        tokenIds.includes(Denom.from(tokenId).reference)
      ) {
        balances.tokens.set(tokenId, balance);
      }
    }

    if (tokenIds.length > 1) {
      for (const tokenBalance of balances.tokens.valueSeq()) {
        balances.total.free = balances.total.free.plus(tokenBalance.inUSD.free);
        balances.total.lockedInOrders = balances.total.lockedInOrders.plus(
          tokenBalance.inUSD.lockedInOrders
        );
        balances.total.unsettled = balances.total.unsettled.plus(
          tokenBalance.inUSD.unsettled
        );
        balances.total.total = balances.total.total.plus(
          tokenBalance.inUSD.total
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

    const quotations = await this.getAllTokensQuotationsInUSD({});

    return await convertKujiraBalancesToBalances(
      kujiraBalances,
      orders,
      quotations
    );
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
    ).first();
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

        const response: JsonObject = { orders: [] };
        let partialResponse: JsonObject;

        do {
          let startAfter = '0';
          if (partialResponse && partialResponse.orders.length) {
            startAfter = partialResponse.orders.reduce(
              (target: any, current: any) =>
                parseInt(current.idx) > parseInt(target.idx) ? current : target
            ).idx;
          }

          partialResponse = await this.kujiraQueryClientWasmQueryContractSmart(
            market.connectorMarket.address,
            {
              orders_by_user: {
                address: ownerAddress,
                limit: KujiraConfig.config.orders.open.paginationLimit,
                start_after: startAfter,
              },
            }
          );

          const combinedOrders = [
            ...response.orders,
            ...partialResponse.orders,
          ];

          const seenIndices = new Set<number>();
          response.orders = combinedOrders.filter((order) => {
            if (!seenIndices.has(order.idx)) {
              seenIndices.add(order.idx);

              return true;
            }

            return false;
          });
        } while (
          partialResponse.orders.length > 0 &&
          response.orders.length < KujiraConfig.config.orders.open.limit
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
          options.marketIds ||
          (await this.getAllMarkets({}, this.network)).keySeq().toArray();

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
    ).first();
  }

  /**
   *
   * @param options
   */
  async cancelOrders(
    options: CancelOrdersRequest
  ): Promise<CancelOrdersResponse> {
    const output = IMap<OwnerAddress, IMap<OrderId, Order>>().asMutable();

    if (options.ids) {
      let markets;
      if (options.marketName || options.marketId) {
        options.marketIds = options.marketId ? [options.marketId] : undefined;
        options.marketNames = options.marketName
          ? [options.marketName]
          : undefined;

        markets = await this.getMarkets({
          ids: options.marketIds,
          names: options.marketNames,
        });
      } else {
        markets = await this.getMarkets({
          ids: options.marketIds,
          names: options.marketNames,
        });
      }

      const ownerAddresses: OrderOwnerAddress[] = options.ownerAddresses
        ? getNotNullOrThrowError<OrderOwnerAddress[]>(options.ownerAddresses)
        : [getNotNullOrThrowError<OrderOwnerAddress>(options.ownerAddress)];

      const ordersByMarketIds: IMap<MarketId, Order[]> = IMap<
        MarketId,
        Order[]
      >().asMutable();

      const ordersByOwnerByMarketIds: IMap<
        OwnerAddress,
        IMap<MarketId, Order[]>
      > = IMap<OwnerAddress, IMap<MarketId, Order[]>>().asMutable();

      for (const ownerAddress of ownerAddresses) {
        for (const id of options.ids) {
          const request = {
            id: id,
            ownerAddress: ownerAddress,
            marketIds: markets.keySeq().toArray(),
            statuses: [
              OrderStatus.OPEN,
              OrderStatus.CANCELLATION_PENDING,
              OrderStatus.CREATION_PENDING,
              OrderStatus.PARTIALLY_FILLED,
              OrderStatus.UNKNOWN,
            ],
          };
          const targetOrder = await this.getOrder(request);
          if (targetOrder != undefined) {
            if (targetOrder.ownerAddress === ownerAddress) {
              if (!ordersByMarketIds.get(targetOrder.marketId)) {
                ordersByMarketIds.set(targetOrder.marketId, [targetOrder]);
              } else {
                const aux = getNotNullOrThrowError<any>(
                  ordersByMarketIds.get(targetOrder.marketId)
                );
                aux.push(targetOrder);
                ordersByMarketIds.set(targetOrder.marketId, aux);
              }
              ordersByOwnerByMarketIds.set(ownerAddress, ordersByMarketIds);
            }
          }
        }
      }

      for (const market of markets.valueSeq()) {
        for (const ownerAddress of ownerAddresses) {
          const filteredOrdersByOwner = IMap<MarketId, Order[]>(
            ordersByOwnerByMarketIds.get(ownerAddress)
          );

          const selectedOrdersIds = [];

          for (const orders of filteredOrdersByOwner.valueSeq()) {
            for (const order of orders) {
              if (order.ownerAddress === ownerAddress) {
                if (order.marketId === market.id) {
                  selectedOrdersIds.push(order.id);
                }
              }
            }
          }

          if (selectedOrdersIds.length == 0) {
            continue;
          }

          const denom: Denom = market.connectorMarket.denoms[0];

          const message = msg.wasm.msgExecuteContract({
            sender: ownerAddress,
            contract: market.id,
            msg: Buffer.from(
              JSON.stringify({
                retract_orders: {
                  order_idxs: selectedOrdersIds,
                },
              })
            ),
            funds: coins(1, denom.reference),
          });

          const messages: readonly EncodeObject[] = [message];

          const walletArtifacts = await this.getWalletArtifacts({
            ownerAddress,
          });

          const response =
            await this.kujiraSigningStargateClientSignAndBroadcast(
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
            selectedOrdersIds.length
          );

          for (const [bundleIndex, events] of mapOfEvents.entries()) {
            for (const [key, value] of events.entries()) {
              bundles.setIn(
                ['orders', bundleIndex, 'id'],
                selectedOrdersIds[Number(bundleIndex)]
              );
              bundles.setIn(['orders', bundleIndex, 'market'], market);
              bundles.setIn(['orders', bundleIndex, 'events', key], value);
            }
          }

          if (output.get(ownerAddress)) {
            output.get(ownerAddress)?.merge(
              convertKujiraOrdersToMapOfOrders({
                type: ConvertOrderType.CANCELLED_ORDERS,
                bundles,
              })
            );
          } else {
            output.set(
              ownerAddress,
              convertKujiraOrdersToMapOfOrders({
                type: ConvertOrderType.CANCELLED_ORDERS,
                bundles,
              })
            );
          }
        }
      }

      if (ownerAddresses.length == 1) {
        return output.first();
      }
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

    let marketIds: MarketId[] = [];

    if (options?.marketId) {
      marketIds.push(options?.marketId);
    }

    if (options?.marketIds) {
      marketIds = [...marketIds, ...options?.marketIds];
    }

    if (options?.marketName) {
      marketIds.push((await this.getMarket({ name: options?.marketName })).id);
    }

    if (options?.marketNames) {
      marketIds = [
        ...marketIds,
        ...(await this.getMarkets({ names: options?.marketNames }))
          .keySeq()
          .toArray(),
      ];
    }

    if (marketIds && !marketIds.length) {
      marketIds = (await this.getAllMarkets({}, this.network))
        .keySeq()
        .toArray();
    }

    const openOrders = IMap<any, Order>().asMutable();

    for (const ownerAddress of ownerAddresses) {
      for (const marketId of marketIds) {
        const partialOpenOrdersIds = (
          await this.getOrders({
            ownerAddress: ownerAddress,
            marketId: marketId,
            status: OrderStatus.OPEN,
          })
        )
          .keySeq()
          .toArray();

        openOrders.setIn([ownerAddress, marketId], partialOpenOrdersIds);
      }
    }

    if (openOrders.size > 0) {
      for (const ownerAddress of ownerAddresses) {
        const cancelledOrders = IMap<OrderId, Order>().asMutable();

        for (const marketId of marketIds) {
          const partialCancelledOrders = (await this.cancelOrders({
            ids: getNotNullOrThrowError<OrderId[]>(
              openOrders.getIn([ownerAddress, marketId])
            ),
            marketId: marketId,
            ownerAddress: ownerAddress,
          })) as IMap<OrderId, Order>;

          cancelledOrders.merge(partialCancelledOrders);
        }

        output.set(ownerAddress, cancelledOrders);
      }

      if (ownerAddresses.length == 1) {
        return output.first();
      }
    }

    return output;
  }

  /**
   *
   * @param options
   */
  async withdrawFromMarket(
    options: MarketWithdrawRequest
  ): Promise<MarketWithdrawResponse> {
    const market = await this.getMarket({ id: options.marketId });

    const output = IMap<OwnerAddress, Withdraws>().asMutable();

    const ownerAddresses: OrderOwnerAddress[] = options.ownerAddresses
      ? getNotNullOrThrowError<OrderOwnerAddress[]>(options.ownerAddresses)
      : [getNotNullOrThrowError<OrderOwnerAddress>(options.ownerAddress)];

    for (const ownerAddress of ownerAddresses) {
      const walletArtifacts = await this.getWalletArtifacts({
        ownerAddress,
      });

      const finClient: fin.FinClient = new fin.FinClient(
        walletArtifacts.signingCosmWasmClient,
        ownerAddress,
        market.id
      );

      walletArtifacts.finClients.set(ownerAddress, finClient);

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

      const quotations = await this.getAllTokensQuotationsInUSD({});

      output.set(
        ownerAddress,
        convertKujiraSettlementToSettlement(result, quotations)
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
  async withdrawFromMarkets(
    options: MarketsWithdrawsRequest
  ): Promise<MarketsWithdrawsFundsResponse> {
    if (!options.marketIds)
      throw new MarketNotFoundError(`No market informed.`);

    const output = IMap<OwnerAddress, IMap<MarketId, Withdraws>>().asMutable();

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
        const results = await this.withdrawFromMarket({
          marketId: options.marketId,
          ownerAddresses: ownerAddresses,
        });

        output.setIn([ownerAddress, options.marketId], results);
      };

      for (const marketId of options.marketIds) {
        await settleMarketFunds({
          marketId: marketId,
          ownerAddresses: [ownerAddress],
        });
      }
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
  async withdrawFromAllMarkets(
    options: AllMarketsWithdrawsRequest
  ): Promise<AllMarketsWithdrawsResponse> {
    const marketIds = (await this.getAllMarkets({}, this.network))
      .keySeq()
      .toArray();

    const ownerAddresses: OrderOwnerAddress[] = options.ownerAddresses
      ? getNotNullOrThrowError<OrderOwnerAddress[]>(options.ownerAddresses)
      : [getNotNullOrThrowError<OrderOwnerAddress>(options.ownerAddress)];

    return await this.withdrawFromMarkets({
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

  getEstimatedFees(
    _options: GetEstimatedFeesRequest
  ): GetEstimatedFeesResponse {
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

  async encryptWallet(
    options: EncryptWalletRequest
  ): Promise<EncryptWalletResponse> {
    const passphrase = ConfigManagerCertPassphrase.readPassphrase();
    if (!passphrase) {
      throw new Error('missing passphrase');
    }

    const keyAlgorithm = 'pbkdf2';
    const cipherAlgorithm = 'aes-256-cbc';
    const ivSize = 16;
    const saltSize = 16;
    const iterations = 500000;
    const keyLength = 32;
    const digest = 'sha256';

    const iv = crypto.randomBytes(ivSize);
    const salt = crypto.randomBytes(saltSize);
    const keyMaterial = await pbkdf2(
      passphrase,
      salt,
      iterations,
      keyLength,
      digest
    );
    const cipher = crypto.createCipheriv(cipherAlgorithm, keyMaterial, iv);

    const cipherText = Buffer.concat([
      cipher.update(JSON.stringify(options.wallet), 'utf8'),
      cipher.final(),
    ]);

    const encryptedString = JSON.stringify({
      keyAlgorithm: {
        name: keyAlgorithm,
        salt: salt.toString('base64'),
        iterations: iterations,
        keyLength: keyLength,
        digest: digest,
      },
      cipherAlgorithm: {
        name: cipherAlgorithm,
        iv: iv.toString('base64'),
      },
      ciphertext: cipherText.toString('base64'),
    });

    return encryptedString;
  }

  async decryptWallet(
    options: DecryptWalletRequest
  ): Promise<DecryptWalletResponse> {
    const path = `${walletPath}/${this.chain}`;

    const encryptedPrivateKey = JSON.parse(
      await fse.readFile(`${path}/${options.accountAddress}.json`, 'utf8'),
      (key, value) => {
        switch (key) {
          case 'ciphertext':
          case 'salt':
          case 'iv':
            return Buffer.from(value, 'base64');
          default:
            return value;
        }
      }
    );

    const passphrase = ConfigManagerCertPassphrase.readPassphrase();
    if (!passphrase) {
      throw new Error('missing passphrase');
    }

    const keyMaterial = await pbkdf2(
      passphrase,
      encryptedPrivateKey.keyAlgorithm.salt,
      encryptedPrivateKey.keyAlgorithm.iterations,
      encryptedPrivateKey.keyAlgorithm.keyLength,
      encryptedPrivateKey.keyAlgorithm.digest
    );
    const decipher = crypto.createDecipheriv(
      encryptedPrivateKey.cipherAlgorithm.name,
      keyMaterial,
      encryptedPrivateKey.cipherAlgorithm.iv
    );

    const decryptedString =
      decipher.update(encryptedPrivateKey.ciphertext, 'utf8') +
      decipher.final('utf8');

    return JSON.parse(decryptedString);
  }

  async toClient(endpoint: string): Promise<[Tendermint34Client, string]> {
    const client = await Tendermint34Client.create(
      new HttpBatchClient(endpoint, {
        dispatchInterval: 100,
        batchSizeLimit: 200,
      })
    );
    return [client, endpoint];
  }

  async getFastestRpc(): Promise<string> {
    const latencies: LatencyData[] = [];

    await Promise.all(
      RPCS[this.kujiraNetwork].map(async (endpoint) => {
        try {
          const start = new Date().getTime();
          const [client] = await this.toClient(endpoint);
          const status = await client.status();
          const latency = new Date().getTime() - start;
          const latestBlockTime = new Date(
            status.syncInfo.latestBlockTime.toISOString()
          );
          latencies.push({ endpoint, latency, latestBlockTime });
        } catch (error) {
          console.error(`Failed to connect to RPC endpoint ${endpoint}`);
        }
      })
    );

    if (latencies.length === 0) {
      throw new Error('Cannot connect with any RPC.');
    }

    latencies.sort((a, b) => a.latency - b.latency);

    return latencies[0].endpoint;
  }
}
