/**
 * contracts/treasury.ts
 *
 * Typed helpers for calling the treasury contract.
 *
 * TODO (Phase 2): implement each function below.
 */

const CONTRACT_ID = process.env.NEXT_PUBLIC_TREASURY_CONTRACT_ID ?? ''

/**
 * Fetch the treasury's balance of a given SAC token.
 *
 * Steps:
 * 1. Call `balance(token: Address)` on the treasury contract.
 * 2. Return the result as a bigint (raw token units).
 *
 * TODO (Phase 2): implement.
 */
export async function getTreasuryBalance(_tokenAddress: string): Promise<bigint> {
  void CONTRACT_ID
  throw new Error('getTreasuryBalance: not yet implemented')
}

/**
 * Fetch the total number of spend records (audit log length).
 *
 * TODO (Phase 2): implement.
 */
export async function getSpendCount(): Promise<bigint> {
  throw new Error('getSpendCount: not yet implemented')
}
