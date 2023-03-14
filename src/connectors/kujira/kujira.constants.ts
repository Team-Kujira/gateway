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
};

export default constants;
