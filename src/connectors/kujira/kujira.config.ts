import { BigNumber } from 'ethers';
import { ConfigManagerV2 } from '../../services/config-manager-v2';
import { LOCALNET, MAINNET, TESTNET } from 'kujira.js';

const configManager = ConfigManagerV2.getInstance();

export namespace KujiraConfig {
  export const config = {
    tradingTypes: ['CLOB_COSMOS_KUJIRA'],
    network: configManager.get('kujira.network') || 'mainnet',
    rpcEndpoint: configManager.get(`kujira.rpcEndpoint`),
    prefix: configManager.get('kujira.prefix') || 'kujira',
    accountNumber: configManager.get('kujira.accountNumber') || 0,
    nativeToken: 'KUJI',
    gasPrice: BigNumber.from(configManager.get('kujira.gasPrice') || 0.00125),
    gasPriceSuffix: configManager.get('kujira.gasPrice') || 'ukuji',
    gasLimitEstimate: BigNumber.from(
      configManager.get('kujira.gasLimitEstimate') || 0.009147
    ),
    markets: {
      url: configManager.get(`kujira.markets.url`),
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
