import { ConfigManagerV2 } from '../../services/config-manager-v2';

const configManager = ConfigManagerV2.getInstance();

export const config = {
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
