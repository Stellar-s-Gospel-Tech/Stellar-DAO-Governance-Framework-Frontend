/**
 * types/governance.ts
 *
 * TypeScript mirrors of the on-chain Soroban types defined in
 * `contracts/governance/src/types.rs`.
 *
 * Keep these in sync with the contract types. When a field is added
 * to a contract struct, add it here too.
 */

export type VoteChoice = 'For' | 'Against' | 'Abstain'

export type ProposalStatus = 'Active' | 'Approved' | 'Rejected' | 'Executed'

export interface Proposal {
  id: bigint
  proposer: string
  title: string
  description: string
  /** Hex-encoded action payload bytes. Empty string = signalling-only. */
  actionPayload: string
  votesFor: bigint
  votesAgainst: bigint
  votesAbstain: bigint
  status: ProposalStatus
  /** Ledger sequence at which voting closes. */
  endLedger: number
}

export interface Vote {
  voter: string
  choice: VoteChoice
  weight: bigint
}

export interface GovernanceConfig {
  admin: string
  weightContract: string
  /** Approval threshold in basis points (5000 = 50%). */
  quorumBps: number
  /** How many ledgers a proposal stays open. */
  votingPeriodLedgers: number
}
