/**
 * Home page — DAO dashboard.
 *
 * This is a React Server Component. Data fetching happens here (no useEffect).
 *
 * Contributor steps:
 * 1. Import `getProposalCount`, `getProposals` from `@/lib/contracts/governance`
 *    and `getTreasuryBalance` from `@/lib/contracts/treasury`.
 * 2. Call them at the top of this function (they are async — await each one).
 *    Example:
 *      const count = await getProposalCount()
 *      const recent = await getProposals(0n, 3)
 *      const balance = await getTreasuryBalance(XLM_CONTRACT_ADDRESS)
 *    XLM_CONTRACT_ADDRESS on testnet: CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQVU2HHGCYSC
 * 3. Pass `count` and `balance` as `value` props to the three <StatCard> components.
 *    For "Active Proposals", filter `recent` by status === 'Active'.
 * 4. Replace the placeholder <p> in the "Recent Proposals" section with:
 *      {recent.map(p => <ProposalCard key={p.id.toString()} proposal={p} />)}
 *    Import ProposalCard from `@/components/proposals/ProposalCard`.
 * 5. Handle the loading state — wrap the data-fetching section in a <Suspense>
 *    boundary with a skeleton fallback (see Next.js docs on streaming).
 */

import Link from 'next/link'

export default function HomePage() {
  // TODO: const count = await getProposalCount()
  // TODO: const recent = await getProposals(0n, 3)
  // TODO: const balance = await getTreasuryBalance(XLM_CONTRACT_ADDRESS)

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold">Stellar DAO Governance</h1>
        <p className="mt-2 text-gray-400">
          Browse proposals, cast votes, and track the treasury — all on-chain.
        </p>
      </header>

      {/* ── Stats row ──────────────────────────────────────────────────────────
          TODO: replace "—" values with live data once fetching is implemented.
          Format balance with formatUnits(balance, 7) — XLM has 7 decimal places. */}
      <section className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Total Proposals" value="—" /* TODO: value={count.toString()} */ />
        <StatCard label="Active Proposals" value="—" /* TODO: value={activeCount.toString()} */ />
        <StatCard label="Treasury Balance" value="—" /* TODO: value={`${formattedBalance} XLM`} */ />
      </section>

      {/* ── Recent proposals ───────────────────────────────────────────────────
          TODO: replace the placeholder <p> with:
            {recent.length === 0
              ? <p className="text-gray-500">No proposals yet.</p>
              : recent.map(p => <ProposalCard key={p.id.toString()} proposal={p} />)
            } */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recent Proposals</h2>
          <Link href="/proposals" className="text-sm text-blue-400 hover:underline">
            View all →
          </Link>
        </div>
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
