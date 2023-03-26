// import { kujiraQueryClient } from 'kujira.js';
// import 'jest-extended';
// import { HttpBatchClient, Tendermint34Client } from "@cosmjs/tendermint-rpc";
//
//
//
// jest.setTimeout(30 * 60 * 1000);
//
//
// it('Kujira Playground', async () => {
//   const RPC_ENDPOINT = 'https://test-rpc-kujira.mintthemoon.xyz:443';
//
//   const rpcClient = new HttpBatchClient(RPC_ENDPOINT, { dispatchInterval: 2000 });
//   const client = await Tendermint34Client.create(rpcClient);
//   const querier = kujiraQueryClient({ client });
//
//   const FIN_KUJI_DEMO =
//     'kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh';
//
//   const result = await querier.wasm.queryContractSmart(FIN_KUJI_DEMO, {
//     book: { offset: 0, limit: 10 },
//   });
//   console.log(result);
// });
