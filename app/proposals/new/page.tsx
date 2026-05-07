/**
 * /proposals/new — create a new proposal.
 *
 * Contributor note (Phase 2):
 * 1. This should be a client component (`'use client'`) since it needs wallet access.
 * 2. Read the connected wallet address from WalletProvider context.
 * 3. On submit, call `createProposal(proposer, title, description, signTransaction)`
 *    from `lib/contracts/governance.ts`.
 * 4. Redirect to `/proposals/[newId]` on success.
 * 5. Show an error message if the proposer's balance is below the threshold.
 *
 * TODO (Phase 2): implement the form with wallet-connected submission.
 */
export default function NewProposalPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-8 text-2xl font-bold">New Proposal</h1>

      {/* TODO (Phase 2): replace with a real <NewProposalForm /> client component */}
      <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
        <p className="text-gray-500">
          Connect your wallet to create a proposal. Minimum token balance required.
        </p>
      </div>
    </main>
  )
}
