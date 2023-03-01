import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { kujiraQueryClient } from 'kujira.js';
import 'jest-extended';
import { Slip10RawIndex } from "@cosmjs/crypto";
import { HttpBatchClient, Tendermint34Client } from "@cosmjs/tendermint-rpc";

jest.setTimeout(30 * 60 * 1000);


it('Kujira Playground', async () => {
  const RPC_ENDPOINT = 'https://test-rpc-kujira.mintthemoon.xyz:443';
  const MNEMONIC = process.env.TEST_KUJIRA_MNEMONIC!;
  const PREFIX = process.env.PREFIX || "kujira";
  const account_number = 0;

  const signer = await DirectSecp256k1HdWallet.fromMnemonic(MNEMONIC, {
    prefix: PREFIX,
    hdPaths: [
      [
        Slip10RawIndex.hardened(44),
        Slip10RawIndex.hardened(118),
        Slip10RawIndex.hardened(0),
        Slip10RawIndex.normal(0),
        Slip10RawIndex.normal(account_number),
      ],
    ],
  });

  const FIN_KUJI_DEMO =
    'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh';

  const [account] = await signer.getAccounts();

  const rpcClient = new HttpBatchClient(RPC_ENDPOINT, { dispatchInterval: 2000 });
  const client = await Tendermint34Client.create(rpcClient);
  const querier = kujiraQueryClient({ client });

  const result = await querier.wasm.queryContractSmart(FIN_KUJI_DEMO, {
    orders_by_user: { address: account.address, limit: 10 },
  });

  console.log(result);
});
