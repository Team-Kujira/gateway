// import 'jest-extended';
// import { getNotNullOrThrowError } from '../../../helpers';
// import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
// import { Slip10RawIndex } from '@cosmjs/crypto';
//
// jest.setTimeout(30 * 60 * 1000);
//
// let directSecp256k1HdWallet: DirectSecp256k1HdWallet;
//
// beforeAll(async () => {
//   const mnemonic: string = getNotNullOrThrowError<string>(
//     process.env.TEST_KUJIRA_MNEMONIC
//   );
//
//   const prefix: string = getNotNullOrThrowError<string>(
//     process.env.TEST_KUJIRA_PREFIX || 'kujira'
//   );
//
//   const accountNumber: number = getNotNullOrThrowError<number>(
//     Number(process.env.TEST_KUJIRA_ACCOUNT_NUMBER) || 0
//   );
//
//   directSecp256k1HdWallet = await DirectSecp256k1HdWallet.fromMnemonic(
//     mnemonic,
//     {
//       prefix: prefix,
//       hdPaths: [
//         [
//           Slip10RawIndex.hardened(44),
//           Slip10RawIndex.hardened(118),
//           Slip10RawIndex.hardened(0),
//           Slip10RawIndex.normal(0),
//           Slip10RawIndex.normal(accountNumber),
//         ],
//       ],
//     }
//   );
// });
//
// it('Temporary', async () => {
//   console.log((await directSecp256k1HdWallet.getAccounts())[0].address);
//
//   const password = 'asdf';
//   const encripted = await directSecp256k1HdWallet.serialize(password);
//
//   console.log(encripted);
//
//   const decrypted = await DirectSecp256k1HdWallet.deserialize(
//     encripted,
//     password
//   );
//
//   console.log(decrypted);
//
//   console.log((await decrypted.getAccounts())[0].address);
// });
