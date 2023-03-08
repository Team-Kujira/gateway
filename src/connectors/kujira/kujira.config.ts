import { ConfigManagerV2 } from '../../services/config-manager-v2';
import { AvailableNetworks } from '../../services/config-manager-types';

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
    tradingTypes: ['SOL_CLOB'],
    markets: {
      url: ConfigManagerV2.getInstance().get(`kujira.markets.url`),
      blacklist: ConfigManagerV2.getInstance().get(`kujira.markets.blacklist`),
      whiteList: ConfigManagerV2.getInstance().get(`kujira.markets.whitelist`),
    },
    tickers: {
      sources: new Map(
        Object.entries(
          ConfigManagerV2.getInstance().get(`kujira.tickers.sources`)
        )
      ),
    },
    transactions: {
      merge: {
        createOrders: ConfigManagerV2.getInstance().get(
          `kujira.transactions.merge.createOrders`
        ),
        cancelOrders: ConfigManagerV2.getInstance().get(
          `kujira.transactions.merge.cancelOrders`
        ),
        settleFunds: ConfigManagerV2.getInstance().get(
          `kujira.transactions.merge.settleFunds`
        ),
      },
    },
    availableNetworks: [
      {
        chain: 'cosmos',
        networks: Object.keys(
          ConfigManagerV2.getInstance().get(`cosmos.networks`)
        ),
      },
    ],
  };
}
