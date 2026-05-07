'use client'

/**
 * VoteForm component.
 *
 * Renders For / Against / Abstain buttons and submits a vote transaction.
 *
 * Contributor note (Phase 2):
 * 1. Read the connected wallet address and `signTransaction` from WalletProvider context.
 * 2. On button click, call `castVote(voter, proposalId, choice, signTransaction)`
 *    from `lib/contracts/governance.ts`.
 * 3. Show a loading state while the transaction is in flight.
 * 4. Show a success message with the transaction hash on completion.
 * 5. Disable buttons if wallet is not connected or user has already voted.
 *
 * TODO (Phase 2): implement vote submission.
 */

import type { VoteChoice } from '@/types/governance'

interface Props {
  proposalId: bigint
}

const choices: VoteChoice[] = ['For', 'Against', 'Abstain']

const choiceStyles: Record<VoteChoice, string> = {
  For: 'border-green-700 hover:bg-green-900 text-green-300',
  Against: 'border-red-700 hover:bg-red-900 text-red-300',
  Abstain: 'border-gray-700 hover:bg-gray-800 text-gray-400',
}

export default function VoteForm({ proposalId }: Props) {
  // TODO (Phase 2): get wallet context
  // const { address, signTransaction } = useWallet()

  async function handleVote(choice: VoteChoice) {
    // TODO (Phase 2): call castVote(address, proposalId, choice, signTransaction)
    console.log('vote', proposalId, choice)
  }

  return (
    <div className="mt-6 rounded-xl border border-gray-800 bg-gray-900 p-6">
      <h3 className="mb-4 font-semibold">Cast Your Vote</h3>
      <div className="flex gap-3">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => handleVote(choice)}
            className={`flex-1 rounded-lg border px-4 py-2 text-sm font-medium transition ${choiceStyles[choice]}`}
          >
            {choice}
          </button>
        ))}
      </div>
      {/* TODO (Phase 2): show wallet-not-connected warning */}
    </div>
  )
}
