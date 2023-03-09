import { ConfigManagerV2 } from '../../services/config-manager-v2';
import { AvailableNetworks } from '../../services/config-manager-types';

const configManager = ConfigManagerV2.getInstance();

export namespace KujiraConfig {
  export interface Config {
    availableNetworks: Array<AvailableNetworks>;
    tradingTypes: Array<string>;
    markets: MarketsConfig;
    tickers: TickersConfig;
    transactions: TransactionsConfig;
  }

  export interface MarketsConfig {
    url: string;
    blacklist: string[];
    whiteList: string[];
  }

  export interface TickersConfig {
    sources: Map<string, SourcesConfig>;
  }

  export interface SourcesConfig {
    url: string;
  }

  export interface TransactionsConfig {
    merge: {
      createOrders: boolean;
      cancelOrders: boolean;
      settleFunds: boolean;
    };
  }

  export const config: Config = {
    tradingTypes: ['CLOB_COSMOS_KUJIRA'],
    markets: {
      url: configManager.get(`kujira.markets.url`),
      blacklist: configManager.get(`kujira.markets.blacklist`),
      whiteList: configManager.get(`kujira.markets.whitelist`),
    },
    tickers: {
      sources: new Map(
        Object.entries(configManager.get(`kujira.tickers.sources`))
      ),
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
    availableNetworks: [
      {
        chain: 'cosmos',
        networks: Object.keys(configManager.get(`cosmos.networks`)),
      },
    ],
  };
}
