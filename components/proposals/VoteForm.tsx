'use client'

/**
 * VoteForm — For / Against / Abstain vote buttons.
 *
 * This is a client component because it submits a signed transaction.
 *
 * Contributor steps:
 * 1. Read wallet state:
 *      const { address, connected, signTransaction } = useWallet()
 *    Import `useWallet` from `@/components/providers/WalletProvider`.
 *
 * 2. Add local state:
 *      const [loading, setLoading] = useState(false)
 *      const [txHash, setTxHash] = useState<string | null>(null)
 *      const [error, setError] = useState<string | null>(null)
 *
 * 3. Implement handleVote:
 *      async function handleVote(choice: VoteChoice) {
 *        if (!address) return
 *        setLoading(true)
 *        setError(null)
 *        try {
 *          const hash = await castVote(address, proposalId, choice, signTransaction)
 *          setTxHash(hash)
 *        } catch (err) {
 *          setError(err instanceof Error ? err.message : 'Transaction failed')
 *        } finally {
 *          setLoading(false)
 *        }
 *      }
 *    Import `castVote` from `@/lib/contracts/governance`.
 *
 * 4. Disable all buttons when:
 *    - `!connected` (wallet not connected)
 *    - `loading` (transaction in flight)
 *    - `txHash !== null` (already voted in this session)
 *
 * 5. Show a success state when txHash is set:
 *      <p>Vote submitted! Tx: {txHash.slice(0,8)}…</p>
 *
 * 6. Show an error message when error is set:
 *      <p className="text-red-400">{error}</p>
 *
 * 7. TODO (Phase 2): check if the user has already voted on-chain by calling
 *    `getVote(proposalId, address)` — if a vote exists, show it instead of the buttons.
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
  // TODO: const { address, connected, signTransaction } = useWallet()
  // TODO: const [loading, setLoading] = useState(false)
  // TODO: const [txHash, setTxHash] = useState<string | null>(null)
  // TODO: const [error, setError] = useState<string | null>(null)

  // TODO: implement handleVote (see steps above)
  async function handleVote(_choice: VoteChoice) {
    console.log('vote', proposalId, _choice) // placeholder — remove when implemented
  }

  return (
    <div className="mt-6 rounded-xl border border-gray-800 bg-gray-900 p-6">
      <h3 className="mb-4 font-semibold">Cast Your Vote</h3>

      <div className="flex gap-3">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => handleVote(choice)}
            // TODO: add disabled={!connected || loading || !!txHash}
            className={`flex-1 rounded-lg border px-4 py-2 text-sm font-medium transition disabled:opacity-40 ${choiceStyles[choice]}`}
          >
            {choice}
          </button>
        ))}
      </div>

      {/* TODO: show "Connect your wallet to vote" when !connected */}
      {/* TODO: show success message when txHash is set */}
      {/* TODO: show error message when error is set */}
    </div>
  )
}
