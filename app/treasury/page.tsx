/**
 * /treasury — treasury balance and spend history.
 *
 * This is a React Server Component.
 *
 * Contributor steps:
 * 1. Define the XLM contract address for testnet:
 *      const XLM = 'CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQVU2HHGCYSC'
 *    For mainnet, read it from an env variable.
 *
 * 2. Fetch the balance:
 *      const rawBalance = await getTreasuryBalance(XLM)
 *    Import `getTreasuryBalance` from `@/lib/contracts/treasury`.
 *    Format it for display: XLM has 7 decimal places.
 *      const balance = (Number(rawBalance) / 1e7).toFixed(2)
 *
 * 3. Fetch spend records:
 *      const count = await getSpendCount()
 *    Then fetch individual records in a loop or in parallel:
 *      const records = await Promise.all(
 *        Array.from({ length: Number(count) }, (_, i) => getSpendRecord(BigInt(i)))
 *      )
 *    Add `getSpendRecord(index: bigint)` to `lib/contracts/treasury.ts` first.
 *
 * 4. Replace the balance placeholder with the formatted balance string.
 *
 * 5. Replace the spend history placeholder with a table:
 *      <table>
 *        <thead><tr><th>Ledger</th><th>Token</th><th>Recipient</th><th>Amount</th></tr></thead>
 *        <tbody>
 *          {records.map((r, i) => (
 *            <tr key={i}>
 *              <td>{r.ledger}</td>
 *              <td>{r.token}</td>
 *              <td>{r.recipient}</td>
 *              <td>{r.amount.toString()}</td>
 *            </tr>
 *          ))}
 *        </tbody>
 *      </table>
 *
 * 6. Add a multi-token balance section (Phase 3):
 *    Allow querying balances for USDC and other SAC tokens in addition to XLM.
 */

export default function TreasuryPage() {
  // TODO: const rawBalance = await getTreasuryBalance(XLM)
  // TODO: const balance = (Number(rawBalance) / 1e7).toFixed(2)
  // TODO: const count = await getSpendCount()
  // TODO: const records = await Promise.all(...)

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-8 text-2xl font-bold">Treasury</h1>

      {/* ── Balance card ───────────────────────────────────────────────────────
          TODO: replace "—" with `${balance} XLM` once fetching is implemented */}
      <div className="mb-8 rounded-xl border border-gray-800 bg-gray-900 p-6">
        <p className="text-sm text-gray-400">XLM Balance</p>
        <p className="mt-1 text-3xl font-bold">—</p>
        {/* TODO (Phase 3): add more token rows for USDC etc. */}
      </div>

      {/* ── Spend history ──────────────────────────────────────────────────────
          TODO: replace placeholder with spend records table (see steps above) */}
      <h2 className="mb-4 text-xl font-semibold">Spend History</h2>
      <div className="overflow-hidden rounded-xl border border-gray-800">
        <table className="w-full text-sm">
          <thead className="bg-gray-900 text-left text-gray-400">
            <tr>
              <th className="px-4 py-3">Ledger</th>
              <th className="px-4 py-3">Token</th>
              <th className="px-4 py-3">Recipient</th>
              <th className="px-4 py-3 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: replace with records.map(...) */}
            <tr>
              <td colSpan={4} className="px-4 py-6 text-center text-gray-500">
                No spend records yet.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}
