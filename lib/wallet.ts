/**
 * wallet.ts
 *
 * Wallet connection helpers using @creit.tech/stellar-wallets-kit.
 * Supports Freighter and any other SEP-43 compatible wallet.
 *
 * Contributor note (Phase 2 — wallet integration):
 * 1. Import `StellarWalletsKit` and initialise it with the desired wallets.
 * 2. Export `connectWallet()` — opens the wallet selection modal.
 * 3. Export `getPublicKey()` — returns the connected account's public key.
 * 4. Export `signTransaction(xdr)` — signs a built transaction XDR.
 *
 * These are consumed by the `WalletProvider` context in
 * `components/providers/WalletProvider.tsx`.
 *
 * TODO (Phase 2): implement connectWallet, getPublicKey, signTransaction.
 */

// import { StellarWalletsKit, WalletNetwork, FREIGHTER_ID } from '@creit.tech/stellar-wallets-kit'

// export function createWalletKit() {
//   return new StellarWalletsKit({
//     network: WalletNetwork.TESTNET,
//     selectedWalletId: FREIGHTER_ID,
//   })
// }

// export async function connectWallet(kit: StellarWalletsKit): Promise<string> {
//   await kit.openModal({ onWalletSelected: async (option) => kit.setWallet(option.id) })
//   const { address } = await kit.getAddress()
//   return address
// }

// export async function signTransaction(kit: StellarWalletsKit, xdr: string): Promise<string> {
//   const { signedTxXdr } = await kit.signTransaction(xdr)
//   return signedTxXdr
// }

export {}
