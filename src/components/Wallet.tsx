'use client';

import React from 'react';

import { client } from "../client";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";

 // @ts-ignore
const wallets = [
  // @ts-ignore
  createWallet("io.metamask"),
  // @ts-ignore
  createWallet("com.coinbase.wallet"),
  // @ts-ignore
  createWallet("com.okex.wallet"),
  // @ts-ignore
  createWallet("me.rainbow"),
];
 

const Wallet = () => {
  return (
    <div>
      <ConnectButton client={client} wallets={wallets} />
    </div>
  );
}

export default Wallet;