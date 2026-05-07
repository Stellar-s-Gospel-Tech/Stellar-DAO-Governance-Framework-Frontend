/**
 * /proposals/[id] — proposal detail page.
 *
 * This is a React Server Component. The vote form is a separate client component.
 *
 * Contributor steps:
 * 1. Fetch the proposal:
 *      const proposal = await getProposal(BigInt(params.id))
 *    Import `getProposal` from `@/lib/contracts/governance`.
 *    If the proposal is not found, call `notFound()` from `next/navigation`.
 *
 * 2. Render the proposal header:
 *      <p>#{proposal.id.toString()}</p>
 *      <h1>{proposal.title}</h1>
 *      <StatusBadge status={proposal.status} />
 *      <p>{proposal.description}</p>
 *
 * 3. Render the vote tally bar:
 *      - Total = votesFor + votesAgainst + votesAbstain
 *      - Show three coloured segments: green (For), red (Against), gray (Abstain)
 *      - Show raw counts next to each label
 *
 * 4. Render the end ledger info:
 *      <p>Voting closes at ledger {proposal.endLedger}</p>
 *    Optionally convert to an estimated date:
 *      estimatedDate = new Date(Date.now() + (proposal.endLedger - currentLedger) * 5000)
 *    (1 ledger ≈ 5 seconds)
 *
 * 5. Conditionally render the vote form:
 *      {proposal.status === 'Active' && <VoteForm proposalId={proposal.id} />}
 *    Import VoteForm from `@/components/proposals/VoteForm`.
 *
 * 6. If status is 'Approved', render a FinalizeButton client component that
 *    calls `finalizeProposal(proposal.id, signTransaction)`.
 */

export default async function ProposalDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  // TODO: const proposal = await getProposal(BigInt(id))
  // TODO: if (!proposal) notFound()

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">

      {/* ── Header ─────────────────────────────────────────────────────────────
          TODO: replace with proposal.id, proposal.title, <StatusBadge> */}
      <p className="text-sm text-gray-500">Proposal #{id}</p>
      <h1 className="mt-1 text-2xl font-bold">—</h1>

      {/* ── Description ────────────────────────────────────────────────────────
          TODO: replace with proposal.description */}
      <div className="mt-6 rounded-xl border border-gray-800 bg-gray-900 p-6">
        <p className="text-gray-500">Proposal description will appear here.</p>
      </div>

      {/* ── Vote tally ─────────────────────────────────────────────────────────
          TODO: render three-segment bar using proposal.votesFor/Against/Abstain.
          Example structure:
            <div className="flex h-2 overflow-hidden rounded-full">
              <div className="bg-green-500" style={{ width: `${forPct}%` }} />
              <div className="bg-red-500"   style={{ width: `${againstPct}%` }} />
              <div className="bg-gray-600"  style={{ width: `${abstainPct}%` }} />
            </div> */}
      <div className="mt-6">
        <div className="h-2 w-full rounded-full bg-gray-800" />
        <div className="mt-2 flex gap-4 text-xs text-gray-500">
          <span>For: —</span>
          <span>Against: —</span>
          <span>Abstain: —</span>
        </div>
      </div>

      {/* ── Voting closes ──────────────────────────────────────────────────────
          TODO: replace with proposal.endLedger and estimated date */}
      <p className="mt-4 text-sm text-gray-500">Voting closes at ledger —</p>

      {/* ── Vote form ──────────────────────────────────────────────────────────
          TODO: replace with:
            {proposal.status === 'Active' && <VoteForm proposalId={proposal.id} />} */}
      <div className="mt-6 rounded-xl border border-gray-800 bg-gray-900 p-6">
        <p className="text-gray-500">Vote form will appear here for active proposals.</p>
      </div>

    </main>
  )
}
