import { BigNumber } from 'bignumber.js';
import { ConfigManagerV2 } from '../../services/config-manager-v2';
import { LOCALNET, MAINNET, TESTNET } from 'kujira.js';
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
    gasPriceSuffix: configManager.get('kujira.gasPrice') || 'ukuji',
    gasLimitEstimate: BigNumber(
      configManager.get('kujira.gasLimitEstimate') || 0.009147
    ),
    tokens: {
      url:
        configManager.get(`kujira.tokens.url`) ||
        'https://raw.githubusercontent.com/Team-Kujira/kujira.js/master/src/resources/tokens.json',
      blacklist: configManager.get(`kujira.tokens.blacklist`),
      whiteList: configManager.get(`kujira.tokens.whitelist`),
    },
    markets: {
      url:
        configManager.get(`kujira.markets.url`) ||
        'https://raw.githubusercontent.com/Team-Kujira/kujira.js/master/src/resources/contracts.json',
      blacklist: configManager.get(`kujira.markets.blacklist`),
      whiteList: configManager.get(`kujira.markets.whitelist`),
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
      filled: {
        limit: configManager.get(`kujira.orders.filled.limit`),
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
      limit: configManager.get(`kujira.orderBook.limit`) || 100,
    },
    availableNetworks: [
      {
        chain: 'kujira',
        networks: [MAINNET, TESTNET, LOCALNET],
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
