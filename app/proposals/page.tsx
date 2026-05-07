/**
 * /proposals — list all proposals.
 *
 * Contributor note (Phase 2):
 * 1. Call `getProposals()` from `lib/contracts/governance.ts`.
 * 2. Render a `<ProposalCard>` for each proposal.
 * 3. Add pagination controls (offset / limit).
 *
 * TODO (Phase 2): fetch and render live proposals.
 */
import Link from 'next/link'

export default function ProposalsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Proposals</h1>
        {/* TODO (Phase 2): show button only when wallet is connected */}
        <Link
          href="/proposals/new"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-500"
        >
          New Proposal
        </Link>
      </div>

      {/* TODO (Phase 2): replace with mapped <ProposalCard> components */}
      <p className="text-gray-500">No proposals found.</p>
    </main>
  )
}
