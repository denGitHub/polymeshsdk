import { KeyringPair, KeyringPair$Json, KeyringPair$Meta } from '@polkadot/keyring/types';
import { cryptoWaitReady,mnemonicGenerate } from '@polkadot/util-crypto';
import { Keyring } from '@polymathnetwork/polymesh-sdk';

import { IPolymeshAccount } from '../interfaces/interfaces';

/**
 * Decode Wallet (Curently this is a admin wallet)
 */
/* export function decodeJsonWallet(): Keyring {
  const keyring = new Keyring();
  const keyringPairJson = JSON.parse(JSON.stringify(accountJson)) as KeyringPair$Json;
  const account = keyring.addFromJson(keyringPairJson);
  // console.log("Is Account Locked After Joson Load ? ", account.isLocked);
  // console.log("Ulock Account !!!");
  account.decodePkcs8('pppkkk2003');
  return keyring;
} */

export async function createWallet(): Promise<IPolymeshAccount> {
  let acc: KeyringPair[];
  // let mnemonic: string;

  const account: IPolymeshAccount = {
    mnemonic: null,
    address: null,
    accountJson: null,
  };

  return cryptoWaitReady()
    .then(
      (): IPolymeshAccount => {
        const mnemonic = mnemonicGenerate();
        const keyring = new Keyring({ type: 'sr25519' });
        keyring.addFromUri(mnemonic);
        acc = keyring.getPairs();
        account.address = acc[0].address;
        account.mnemonic = mnemonic;
        account.accountJson = acc[0].toJson();

        return account;
      }
    )
    .catch(err => {
      return account;
    })
    .finally(() => {
      return account;
    });
}
