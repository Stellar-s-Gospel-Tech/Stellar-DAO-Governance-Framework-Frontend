/**
 * ProposalCard component.
 *
 * Displays a summary of a single proposal in a list.
 *
 * Contributor note (Phase 2):
 * 1. Accept a `proposal: Proposal` prop (type from `@/types/governance`).
 * 2. Show title, status badge, vote tallies, and a link to the detail page.
 * 3. Use the `StatusBadge` component for the status indicator.
 *
 * TODO (Phase 2): implement with real Proposal data.
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

      {/* Vote bar */}
      <div className="mt-4">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
          <div className="h-full rounded-full bg-green-500" style={{ width: `${forPct}%` }} />
        </div>
        <p className="mt-1 text-xs text-gray-500">{forPct}% For</p>
      </div>
    </Link>
  )
}
