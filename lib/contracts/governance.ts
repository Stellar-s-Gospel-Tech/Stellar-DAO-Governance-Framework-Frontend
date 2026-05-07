/**
 * contracts/governance.ts
 *
 * Typed helpers for calling the governance contract.
 *
 * Each function corresponds to a public entry point in
 * `contracts/governance/src/lib.rs`.
 *
 * Contributor note — how to implement a contract call:
 * 1. Build a `Contract` instance with the contract ID from env.
 * 2. Use `contract.call(methodName, ...args)` to build the operation.
 * 3. Wrap it in a transaction, simulate via `rpc.simulateTransaction`,
 *    then sign and submit via `rpc.sendTransaction`.
 * 4. Parse the return value using `scValToNative` from `@stellar/stellar-sdk`.
 *
 * Reference: https://developers.stellar.org/docs/build/guides/dapps
 *
 * TODO (Phase 2): implement each function below.
 */

import type { Proposal, ProposalStatus, Vote, VoteChoice } from '@/types/governance'

const CONTRACT_ID = process.env.NEXT_PUBLIC_GOVERNANCE_CONTRACT_ID ?? ''

/**
 * Fetch a single proposal by ID.
 *
 * Steps:
 * 1. Call `get_proposal(proposal_id: u64)` on the governance contract.
 * 2. Deserialise the returned ScVal into a `Proposal` object.
 * 3. Return it.
 *
 * TODO (Phase 2): implement.
 */
export async function getProposal(_id: bigint): Promise<Proposal> {
  void CONTRACT_ID
  throw new Error('getProposal: not yet implemented')
}

/**
 * Fetch the total number of proposals.
 *
 * Steps:
 * 1. Call `proposal_count()` on the governance contract.
 * 2. Return the result as a bigint.
 *
 * TODO (Phase 2): implement.
 */
export async function getProposalCount(): Promise<bigint> {
  throw new Error('getProposalCount: not yet implemented')
}

/**
 * Fetch all proposals (paginated).
 *
 * Steps:
 * 1. Call `getProposalCount()`.
 * 2. Fetch proposals from ID `offset` to `offset + limit` in parallel.
 * 3. Return the array.
 *
 * TODO (Phase 2): implement.
 */
export async function getProposals(_offset?: bigint, _limit?: number): Promise<Proposal[]> {
  throw new Error('getProposals: not yet implemented')
}

/**
 * Submit a vote on a proposal.
 *
 * Steps:
 * 1. Build a `vote(voter, proposal_id, choice)` transaction.
 * 2. Simulate, sign (via wallet), and submit.
 * 3. Return the transaction hash.
 *
 * TODO (Phase 2): implement.
 */
export async function castVote(
  _voter: string,
  _proposalId: bigint,
  _choice: VoteChoice,
  _signTransaction: (xdr: string) => Promise<string>
): Promise<string> {
  throw new Error('castVote: not yet implemented')
}

/**
 * Create a new proposal.
 *
 * Steps:
 * 1. Build a `create_proposal(proposer, title, description, action_payload)` transaction.
 * 2. Simulate, sign, and submit.
 * 3. Return the new proposal ID.
 *
 * TODO (Phase 2): implement.
 */
export async function createProposal(
  _proposer: string,
  _title: string,
  _description: string,
  _signTransaction: (xdr: string) => Promise<string>
): Promise<bigint> {
  throw new Error('createProposal: not yet implemented')
}

/**
 * Fetch the vote cast by `voter` on `proposalId`, if any.
 *
 * TODO (Phase 2): implement.
 */
export async function getVote(_proposalId: bigint, _voter: string): Promise<Vote | null> {
  throw new Error('getVote: not yet implemented')
}

/**
 * Finalize a proposal after its voting period ends.
 *
 * TODO (Phase 2): implement.
 */
export async function finalizeProposal(
  _proposalId: bigint,
  _signTransaction: (xdr: string) => Promise<string>
): Promise<ProposalStatus> {
  throw new Error('finalizeProposal: not yet implemented')
}
