import { ConfigManagerV2 } from '../../services/config-manager-v2';

const configManager = ConfigManagerV2.getInstance();

export const constants = {
  retry: {
    all: {
      maxNumberOfRetries:
        configManager.get('solana.retry.all.maxNumberOfRetries') || 0, // 0 means no retries
      delayBetweenRetries:
        configManager.get('solana.retry.all.delayBetweenRetries') || 0, // 0 means no delay (milliseconds)
    },
  },
  timeout: {
    all: configManager.get('solana.timeout.all') || 0, // 0 means no timeout (milliseconds)
  },
  parallel: {
    all: {
      batchSize: configManager.get('solana.parallel.all.batchSize') || 0, // 0 means no batching (group all)
      delayBetweenBatches:
        configManager.get('solana.parallel.all.delayBetweenBatches') || 0, // 0 means no delay (milliseconds)
    },
  },
  cache: {
    marketsInformation:
      configManager.get('kujira.cache.marketsInformation') || 3600, // in seconds
    markets: configManager.get('kujira.cache.markets') || 3600, // in seconds
  },
  orders: {
    filled: {
      limit: configManager.get('kujira.orders.filled.limit') || 1000,
    },
    create: {
      maxPerTransaction:
        configManager.get('kujira.orders.create.maxPerTransaction') || 8,
    },
    cancel: {
      maxPerTransaction:
        configManager.get('kujira.orders.cancel.maxPerTransaction') || 25,
    },
  },
  events: {
    limit: {
      consumeEvents: configManager.get('kujira.events.limit.consumeEvents'),
      matchOrders: configManager.get('kujira.events.limit.matchOrders'),
    },
  },
};

export default constants;
