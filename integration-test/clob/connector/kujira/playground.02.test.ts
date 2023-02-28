import { msg, registry } from 'kujira.js';
import { GasPrice, SigningStargateClient, coins } from '@cosmjs/stargate';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';

it('Kujira Playground', async () => {
  const RPC_ENDPOINT = 'https://rpc-harpoon.kujira.app';
  const MNEMONIC = '...';

  const signer = await DirectSecp256k1HdWallet.fromMnemonic(MNEMONIC);

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
