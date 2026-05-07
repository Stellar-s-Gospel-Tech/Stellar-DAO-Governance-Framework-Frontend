/**
 * StatusBadge component.
 *
 * Renders a coloured pill for a ProposalStatus value.
 */

import type { ProposalStatus } from '@/types/governance'

const colours: Record<ProposalStatus, string> = {
  Active: 'bg-blue-900 text-blue-300',
  Approved: 'bg-green-900 text-green-300',
  Rejected: 'bg-red-900 text-red-300',
  Executed: 'bg-gray-800 text-gray-400',
}

export default function StatusBadge({ status }: { status: ProposalStatus }) {
  return (
    <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${colours[status]}`}>
      {status}
    </span>
  )
}
