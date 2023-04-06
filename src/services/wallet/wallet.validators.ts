import {
  mkValidator,
  mkRequestValidator,
  RequestValidator,
  Validator,
  mkSelectingValidator,
} from '../validators';
const { fromBase64 } = require('@cosmjs/encoding');

export const invalidEthPrivateKeyError: string =
  'The privateKey param is not a valid Ethereum private key (64 hexadecimal characters).';

export const invalidNearPrivateKeyError: string =
  'The privateKey param is not a valid Near private key.';

export const invalidCosmosPrivateKeyError: string =
  'The privateKey param is not a valid Cosmos private key.';

export const invalidKujiraPrivateKeyError: string =
  'The privateKey param is not a valid Kujira private key.';

// test if a string matches the shape of an Ethereum private key
export const isEthPrivateKey = (str: string): boolean => {
  return /^(0x|xdc)?[a-fA-F0-9]{64}$/.test(str);
};

// test if a string matches the Near private key encoding format (i.e. <curve>:<encoded key>')
export const isNearPrivateKey = (str: string): boolean => {
  const parts = str.split(':');
  return parts.length === 2;
};

export const isCosmosPrivateKey = (str: string): boolean => {
  try {
    fromBase64(str);

    return true;
  } catch {
    return false;
  }
};

export const isKujiraPrivateKey = (str: string): boolean => {
  return /^(?:\b[a-z]+\b(?:\s|$)){12}(?:(?:\b[a-z]+\b(?:\s|$)){12})?$/.test(
    str
  );
};

// given a request, look for a key called privateKey that is an Ethereum private key
export const validatePrivateKey: Validator = mkSelectingValidator(
  'chain',
  (req, key) => req[key],
  {
    ethereum: mkValidator(
      'privateKey',
      invalidEthPrivateKeyError,
      (val) => typeof val === 'string' && isEthPrivateKey(val)
    ),
    cronos: mkValidator(
      'privateKey',
      invalidEthPrivateKeyError,
      (val) => typeof val === 'string' && isEthPrivateKey(val)
    ),
    avalanche: mkValidator(
      'privateKey',
      invalidEthPrivateKeyError,
      (val) => typeof val === 'string' && isEthPrivateKey(val)
    ),
    harmony: mkValidator(
      'privateKey',
      invalidEthPrivateKeyError,
      (val) => typeof val === 'string' && isEthPrivateKey(val)
    ),
    near: mkValidator(
      'privateKey',
      invalidNearPrivateKeyError,
      (val) => typeof val === 'string' && isNearPrivateKey(val)
    ),
    cosmos: mkValidator(
      'privateKey',
      invalidCosmosPrivateKeyError,
      (val) => typeof val === 'string' && isCosmosPrivateKey(val)
    ),
    polygon: mkValidator(
      'privateKey',
      invalidEthPrivateKeyError,
      (val) => typeof val === 'string' && isEthPrivateKey(val)
    ),
    'binance-smart-chain': mkValidator(
      'privateKey',
      invalidEthPrivateKeyError,
      (val) => typeof val === 'string' && isEthPrivateKey(val)
    ),
    injective: mkValidator(
      'privateKey',
      invalidEthPrivateKeyError,
      (val) => typeof val === 'string' && isEthPrivateKey(val)
    ),
    xdc: mkValidator(
      'privateKey',
      invalidEthPrivateKeyError,
      (val) => typeof val === 'string' && isEthPrivateKey(val)
    ),
    kujira: mkValidator(
      'privateKey',
      invalidKujiraPrivateKeyError,
      (val) => typeof val === 'string' && isKujiraPrivateKey(val)
    ),
  }
);

export const invalidChainError: string =
  'chain must be "ethereum", "avalanche", "near", "harmony", "cosmos", "binance-smart-chain", "injective", or "kujira"';

export const invalidNetworkError: string =
  'expected a string for the network key';

export const invalidAddressError: string = 'address must be a string';

export const invalidAccountIDError: string = 'account ID must be a string';

export const invalidMessageError: string =
  'message to be signed must be a string';

export const validateChain: Validator = mkValidator(
  'chain',
  invalidChainError,
  (val) =>
    typeof val === 'string' &&
    (val === 'ethereum' ||
      val === 'avalanche' ||
      val === 'polygon' ||
      val === 'xdc' ||
      val === 'near' ||
      val === 'harmony' ||
      val === 'cronos' ||
      val === 'cosmos' ||
      val === 'binance-smart-chain' ||
      val === 'injective' ||
      val === 'kujira')
);

export const validateNetwork: Validator = mkValidator(
  'network',
  invalidNetworkError,
  (val) => typeof val === 'string'
);

export const validateAddress: Validator = mkValidator(
  'address',
  invalidAddressError,
  (val) => typeof val === 'string'
);

export const validateAccountID: Validator = mkValidator(
  'accountId',
  invalidAccountIDError,
  (val) => typeof val === 'string',
  true
);

export const validateMessage: Validator = mkValidator(
  'message',
  invalidMessageError,
  (val) => typeof val === 'string',
  true
);

export const validateAddWalletRequest: RequestValidator = mkRequestValidator([
  validatePrivateKey,
  validateChain,
  validateNetwork,
  validateAccountID,
]);

export const validateRemoveWalletRequest: RequestValidator = mkRequestValidator(
  [validateAddress, validateChain]
);

export const validateWalletSignRequest: RequestValidator = mkRequestValidator([
  validateAddress,
  validateChain,
  validateNetwork,
  validateMessage,
]);
