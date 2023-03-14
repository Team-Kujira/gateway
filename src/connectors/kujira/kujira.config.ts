import { ConfigManagerV2 } from '../../services/config-manager-v2';
import { AvailableNetworks } from '../../services/config-manager-types';

const configManager = ConfigManagerV2.getInstance();

export namespace KujiraConfig {
  export interface Config {
    tradingTypes: Array<string>;
    prefix: string;
    accountNumber: number;
    gasPrice: string;
    rpcEndpoint: string;
    availableNetworks: Array<AvailableNetworks>;
    markets: MarketsConfig;
    tickers: TickersConfig;
    transactions: TransactionsConfig;
    orderBook: OrderBookConfig;
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

  export interface OrderBookConfig {
    offset: number;
    limit: number;
  }

  export const config: Config = {
    tradingTypes: ['CLOB_COSMOS_KUJIRA'],
    prefix: configManager.get('kujira.prefix') || 'kujira',
    accountNumber: configManager.get('kujira.accountNumber') || 0,
    gasPrice: configManager.get('kujira.gasPrice') || '0.00125ukuji',
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
    orderBook: {
      offset: configManager.get(`kujira.orderBook.offset`) || 0,
      limit: configManager.get(`kujira.orderBook.limit`) || 100,
    },
    rpcEndpoint: '', // TODO fix!!!
    availableNetworks: [
      {
        chain: 'kujira',
        networks: [], // TODO fix!!!
      },
    ],
  };
}
