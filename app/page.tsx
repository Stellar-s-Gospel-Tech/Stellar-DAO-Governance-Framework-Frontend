import Link from 'next/link'

/**
 * Home page — DAO dashboard landing.
 *
 * Contributor note (Phase 2):
 * Replace the static cards with real data fetched from the governance contract:
 * 1. Call `getProposalCount()` from `lib/contracts/governance.ts`.
 * 2. Call `getProposals(0n, 3)` to show the 3 most recent proposals.
 * 3. Call `getTreasuryBalance(XLM_ADDRESS)` from `lib/contracts/treasury.ts`.
 * 4. Pass data as props to the stat cards and proposal list below.
 *
 * TODO (Phase 2): fetch and display live on-chain data.
 */
export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold">Stellar DAO Governance</h1>
        <p className="mt-2 text-gray-400">
          Browse proposals, cast votes, and track the treasury — all on-chain.
        </p>
      </header>

      {/* Stats row */}
      <section className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Total Proposals" value="—" />
        <StatCard label="Active Proposals" value="—" />
        <StatCard label="Treasury Balance" value="—" />
      </section>

      {/* Recent proposals */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recent Proposals</h2>
          <Link href="/proposals" className="text-sm text-blue-400 hover:underline">
            View all →
          </Link>
        </div>
        {/* TODO (Phase 2): replace with <ProposalList proposals={proposals} /> */}
        <p className="text-gray-500">No proposals yet. Connect your wallet to create one.</p>
      </section>
    </main>
  )
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
      <p className="text-sm text-gray-400">{label}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
    </div>
  )
}
