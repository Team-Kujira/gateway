import { ConfigManagerV2 } from '../../services/config-manager-v2';

const configManager = ConfigManagerV2.getInstance();

export const constants = {
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
    marketsData: configManager.get('kujira.cache.marketsData') || 3600, // in seconds
    markets: configManager.get('kujira.cache.markets') || 3600, // in seconds
  },
  prefix: configManager.get('kujira.prefix') || 'kujira',
  accountNumber: configManager.get('kujira.accountNumber') || 0,
  gasPrice: configManager.get('kujira.gasPrice') || '0.00125ukuji',
  orderBook: {
    offset: configManager.get('kujira.orderBook.offset') || 0,
    limit: configManager.get('kujira.orderBook.limit') || 100,
  },
  orders: {
    create: {
      fee: configManager.get('kujira.orders.create.fee') || 'auto',
      maxPerTransaction:
        configManager.get('kujira.orders.create.maxPerTransaction') || 8,
    },
    filled: {
      limit: configManager.get('kujira.orders.filled.limit') || 1000,
    },
    cancel: {
      maxPerTransaction:
        configManager.get('kujira.orders.cancel.maxPerTransaction') || 25,
    },
  },
};

export default constants;
