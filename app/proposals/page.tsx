/**
 * /proposals — paginated proposal list.
 *
 * This is a React Server Component.
 *
 * Contributor steps:
 * 1. Read pagination params from the URL:
 *      const page = Number(searchParams?.page ?? 1)
 *      const limit = 10
 *      const offset = BigInt((page - 1) * limit)
 * 2. Call `getProposals(offset, limit)` from `@/lib/contracts/governance`.
 * 3. Call `getProposalCount()` to know the total for pagination controls.
 * 4. Replace the placeholder <p> with:
 *      {proposals.map(p => <ProposalCard key={p.id.toString()} proposal={p} />)}
 * 5. Add pagination controls below the list:
 *      - "Previous" link: href={`/proposals?page=${page - 1}`} disabled when page === 1
 *      - "Next" link: href={`/proposals?page=${page + 1}`} disabled when no more pages
 * 6. The "New Proposal" button should only be visible when the wallet is connected.
 *    Move this page to a client component OR keep it a server component and make
 *    the button a separate `<NewProposalButton />` client component that reads
 *    wallet context.
 */

import Link from 'next/link'

export default function ProposalsPage() {
  // TODO: const proposals = await getProposals(offset, limit)
  // TODO: const total = await getProposalCount()

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Proposals</h1>
        {/* TODO: replace with <NewProposalButton /> client component that checks wallet */}
        <Link
          href="/proposals/new"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-500"
        >
          New Proposal
        </Link>
      </div>

      {/* ── Proposal list ───────────────────────────────────────────────────────
          TODO: replace with:
            <div className="flex flex-col gap-4">
              {proposals.map(p => <ProposalCard key={p.id.toString()} proposal={p} />)}
            </div> */}
      <p className="text-gray-500">No proposals found.</p>

      {/* ── Pagination ──────────────────────────────────────────────────────────
          TODO: add Previous / Next links once proposal fetching is implemented. */}
    </main>
  )
}
