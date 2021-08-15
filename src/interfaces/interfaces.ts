import { KeyringPair } from '@polymathnetwork/polymesh-sdk/types';

// import {
//   KeyringPair,
//   KeyringPair$Json,
//   KeyringPair$Meta,
// } from "@polkadot/keyring/types";

export interface IPolymeshAccount {
  mnemonic: string | null;
  address: string | null;
  accountJson: any | null;
}

export interface IPolymeshUser {
  success: boolean;
  did: string;
  uuid: string;
  cdd_id: string;
}
