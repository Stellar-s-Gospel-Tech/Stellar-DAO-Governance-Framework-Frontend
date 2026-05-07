/**
 * /proposals/[id] — single proposal detail page.
 *
 * Contributor note (Phase 2):
 * 1. Call `getProposal(BigInt(params.id))` from `lib/contracts/governance.ts`.
 * 2. Display proposal title, description, status, vote tallies, and end ledger.
 * 3. If status is Active and wallet is connected, show the `<VoteForm>` component.
 * 4. If status is Approved, show an Execute button (calls `finalizeProposal`).
 *
 * TODO (Phase 2): fetch proposal data and render detail view.
 */
export default async function ProposalDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-sm text-gray-500">Proposal #{id}</p>
      <h1 className="mt-2 text-2xl font-bold">—</h1>

      {/* TODO (Phase 2): render proposal details */}
      <div className="mt-6 rounded-xl border border-gray-800 bg-gray-900 p-6">
        <p className="text-gray-500">
          Proposal data will appear here once contract integration is complete.
        </p>
      </div>

      {/* TODO (Phase 2): render <VoteForm proposalId={id} /> when Active */}
    </main>
  )
}
