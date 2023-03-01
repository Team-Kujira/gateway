import { coins, GasPrice, SigningStargateClient } from '@cosmjs/stargate';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { msg, registry } from 'kujira.js';
import 'jest-extended';
import { Slip10RawIndex } from "@cosmjs/crypto";

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

  const client = await SigningStargateClient.connectWithSigner(
    RPC_ENDPOINT,
    signer,
    {
      registry,
      gasPrice: GasPrice.fromString('0.00125ukuji'),
    }
  );

  const FIN_KUJI_DEMO =
    'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh';

  const [account] = await signer.getAccounts();

  const result = msg.wasm.msgExecuteContract({
    sender: account.address,
    contract: FIN_KUJI_DEMO,
    msg: Buffer.from(JSON.stringify({ submit_order: { price: '210.5' } })),
    funds: coins(1000000, 'ukuji'),
  });

  await client.signAndBroadcast(account.address, [result], 'auto');
});
