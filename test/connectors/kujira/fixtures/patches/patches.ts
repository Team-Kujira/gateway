import { Kujira } from '../../../../../src/connectors/kujira/kujira';

let usePatches = true;

export const enablePatches = () => (usePatches = true);
export const disablePatches = () => (usePatches = false);

const patches = (_kujira: Kujira) => {
  const patches = new Map();

  patches.set('kujira/kujiraGetBasicMarkets', () => {
    if (!usePatches) return;
  });

  patches.set('kujira/kujiraGetBasicTokens', () => {
    if (!usePatches) return;
  });

  return patches;
};

export default patches;
