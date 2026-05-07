/**
 * ProposalCard — summary card shown in the proposal list.
 *
 * Currently renders with real prop types but uses placeholder display values.
 *
 * Contributor steps:
 * 1. The `proposal` prop is already typed — all fields are available.
 *
 * 2. The vote percentage bar is implemented. Verify it looks correct once
 *    real data flows in.
 *
 * 3. Add a "time remaining" indicator below the vote bar:
 *    - Fetch the current ledger sequence from `rpc.getLatestLedger()` in the
 *      parent page (server component), pass it as a prop.
 *    - Compute: remaining = (proposal.endLedger - currentLedger) * 5  (seconds)
 *    - Format with a helper: formatDuration(remaining) → "2 days", "4 hours", etc.
 *    - Show "Voting closed" if remaining <= 0.
 *
 * 4. Add a proposer address display (truncated):
 *      <p>{proposal.proposer.slice(0,4)}…{proposal.proposer.slice(-4)}</p>
 *
 * 5. TODO (Phase 3): add a "Delegate" button that appears when the user is
 *    connected and the proposal is Active.
 */

import type { Proposal } from '@/types/governance'
import Link from 'next/link'
import StatusBadge from './StatusBadge'

interface Props {
  proposal: Proposal
}

export default function ProposalCard({ proposal }: Props) {
  const total = proposal.votesFor + proposal.votesAgainst + proposal.votesAbstain
  const forPct = total > BigInt(0) ? Number((proposal.votesFor * BigInt(100)) / total) : 0

  return (
    <Link
      href={`/proposals/${proposal.id}`}
      className="block rounded-xl border border-gray-800 bg-gray-900 p-5 transition hover:border-gray-600"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs text-gray-500">#{proposal.id.toString()}</p>
          <h3 className="mt-1 font-semibold">{proposal.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-gray-400">{proposal.description}</p>
        </div>
        <StatusBadge status={proposal.status} />
      </div>

      {/* Vote bar — shows % For as a green fill */}
      <div className="mt-4">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
          <div className="h-full rounded-full bg-green-500" style={{ width: `${forPct}%` }} />
        </div>
        <p className="mt-1 text-xs text-gray-500">{forPct}% For</p>
      </div>

      {/* TODO: add time remaining indicator (see step 3 above) */}
      {/* TODO: add proposer address (see step 4 above) */}
    </Link>
  )
}
