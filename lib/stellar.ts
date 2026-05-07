/**
 * stellar.ts
 *
 * Singleton Soroban RPC client.
 *
 * Usage:
 *   import { rpc, networkPassphrase } from '@/lib/stellar'
 *
 * Contributor note: all contract calls should go through the helpers in
 * `contracts/` rather than calling rpc directly from components.
 */

import { rpc as SorobanRpc } from '@stellar/stellar-sdk'

export const rpcUrl =
  process.env.NEXT_PUBLIC_STELLAR_RPC_URL ?? 'https://soroban-testnet.stellar.org'

export const networkPassphrase =
  process.env.NEXT_PUBLIC_STELLAR_NETWORK_PASSPHRASE ??
  'Test SDF Network ; September 2015'

export const rpc = new SorobanRpc.Server(rpcUrl, { allowHttp: false })
