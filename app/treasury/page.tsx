/**
 * /treasury — treasury balance and spend history.
 *
 * Contributor note (Phase 2):
 * 1. Call `getTreasuryBalance(XLM_ADDRESS)` from `lib/contracts/treasury.ts`.
 * 2. Call `getSpendCount()` and paginate through spend records.
 * 3. Render a balance card and a spend history table.
 *
 * TODO (Phase 2): fetch and render live treasury data.
 */
export default function TreasuryPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-8 text-2xl font-bold">Treasury</h1>

      {/* Balance card */}
      <div className="mb-8 rounded-xl border border-gray-800 bg-gray-900 p-6">
        <p className="text-sm text-gray-400">XLM Balance</p>
        <p className="mt-1 text-3xl font-bold">—</p>
        {/* TODO (Phase 2): fetch and display real balance */}
      </div>

      {/* Spend history */}
      <h2 className="mb-4 text-xl font-semibold">Spend History</h2>
      {/* TODO (Phase 2): render spend records table */}
      <p className="text-gray-500">No spend records yet.</p>
    </main>
  )
}
