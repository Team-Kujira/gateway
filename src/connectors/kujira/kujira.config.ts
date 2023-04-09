import { BigNumber } from 'bignumber.js';
import { ConfigManagerV2 } from '../../services/config-manager-v2';
import { getNotNullOrThrowError } from './kujira.helpers';

const configManager = ConfigManagerV2.getInstance();

export namespace KujiraConfig {
  export const config = {
    tradingTypes: ['CLOB_COSMOS_KUJIRA'],
    chain: 'kujira',
    network: configManager.get('kujira.network') || 'mainnet',
    rpcEndpoint: configManager.get(`kujira.rpcEndpoint`),
    prefix: configManager.get('kujira.prefix') || 'kujira',
    accountNumber: configManager.get('kujira.accountNumber') || 0,
    nativeToken: 'KUJI',
    gasPrice: BigNumber(configManager.get('kujira.gasPrice') || 0.00125),
    gasPriceSuffix: 'ukuji',
    gasLimitEstimate: BigNumber(
      configManager.get('kujira.gasLimitEstimate') || 0.009147
    ),
    tokens: {
      url:
        configManager.get(`kujira.tokens.url`) ||
        'https://raw.githubusercontent.com/Team-Kujira/kujira.js/master/src/resources/tokens.json',
      disallowed: configManager.get(`kujira.tokens.disallowed`),
      allowed: configManager.get(`kujira.tokens.allowed`),
    },
    markets: {
      url:
        configManager.get(`kujira.markets.url`) ||
        'https://raw.githubusercontent.com/Team-Kujira/kujira.js/master/src/resources/contracts.json',
      disallowed: configManager.get(`kujira.markets.disallowed`),
      allowed: configManager.get(`kujira.markets.allowed`),
    },
    tickers: {
      sources: new Map<string, { url: string }>(
        Object.entries(configManager.get(`kujira.tickers.sources`))
      ),
    },
    orders: {
      create: {
        fee: configManager.get(`kujira.orders.create.fee`),
        maxPerTransaction: configManager.get(
          `kujira.orders.create.maxPerTransaction`
        ),
      },
      open: {
        limit: configManager.get(`kujira.orders.open.limit`) | 255,
      },
      filled: {
        limit: configManager.get(`kujira.orders.filled.limit`) | 255,
      },
      cancel: {
        maxPerTransaction: configManager.get(
          `kujira.orders.cancel.maxPerTransaction`
        ),
      },
    },
    transactions: {
      merge: {
        createOrders: configManager.get(
          `kujira.transactions.merge.createOrders`
        ),
        cancelOrders: configManager.get(
          `kujira.transactions.merge.cancelOrders`
        ),
        settleFunds: configManager.get(`kujira.transactions.merge.settleFunds`),
      },
    },
    orderBook: {
      offset: configManager.get(`kujira.orderBook.offset`) || 0,
      limit: configManager.get(`kujira.orderBook.limit`) || 255,
    },
    availableNetworks: [
      {
        chain: 'kujira',
        networks: ['mainnet', 'testnet', 'localnet'],
      },
    ],
    retry: {
      all: {
        maxNumberOfRetries:
          configManager.get('kujira.retry.all.maxNumberOfRetries') || 0, // 0 means no retries
        delayBetweenRetries:
          configManager.get('kujira.retry.all.delayBetweenRetries') || 0, // 0 means no delay (milliseconds)
      },
    },
    timeout: {
      all: configManager.get('kujira.timeout.all') || 0, // 0 means no timeout (milliseconds)
    },
    parallel: {
      all: {
        batchSize: configManager.get('kujira.parallel.all.batchSize') || 0, // 0 means no batching (group all)
        delayBetweenBatches:
          configManager.get('kujira.parallel.all.delayBetweenBatches') || 0, // 0 means no delay (milliseconds)
      },
    },
    cache: {
      tokensData: configManager.get('kujira.cache.tokensData') || 3600, // in seconds
      marketsData: configManager.get('kujira.cache.marketsData') || 3600, // in seconds
      markets: configManager.get('kujira.cache.markets') || 3600, // in seconds
      tokens: configManager.get('kujira.cache.markets') || 3600, // in seconds
    },
  };
}

if (KujiraConfig.config.tickers.sources.has('nomics')) {
  getNotNullOrThrowError<any>(
    KujiraConfig.config.tickers.sources.get('nomics')
  ).url =
    KujiraConfig.config.tickers.sources.get('nomics')?.url ||
    'https://nomics.com/data/exchange-markets-ticker?convert=USD&exchange=kujira_dex&interval=1m&market=${marketAddress}';
}
