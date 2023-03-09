import { TokenListType } from '../../services/base';
import { ConfigManagerV2 } from '../../services/config-manager-v2';

const configManager = ConfigManagerV2.getInstance();

export interface NetworkConfig {
  name: string;
  rpcURL: string;
  tokenListType: TokenListType;
  tokenListSource: string;
}

export interface Config {
  network: NetworkConfig;
  nativeCurrencySymbol: string;
  manualGasPrice: number;
}

export namespace CosmosConfig {
  export interface Config {
    network: NetworkConfig;
    nativeCurrencySymbol: string;
    manualGasPrice: number;
  }

  export interface NetworkConfig {
    name: string;
    rpcURL: string;
    tokenListType: TokenListType;
    tokenListSource: string;
  }

  export const config: Config = {
    network: {
      name: configManager.get('cosmos.network'),
      rpcURL: configManager.get(
        `cosmos.networks.${configManager.get('cosmos.network')}.rpcURL`
      ),
      tokenListType: configManager.get(
        `cosmos.networks.${configManager.get('cosmos.network')}.tokenListType`
      ),
      tokenListSource: configManager.get(
        `cosmos.networks.${configManager.get('cosmos.network')}.tokenListSource`
      ),
    },
    nativeCurrencySymbol: configManager.get('cosmos.nativeCurrencySymbol'),
    manualGasPrice: configManager.get('cosmos.manualGasPrice'),
  };
}
