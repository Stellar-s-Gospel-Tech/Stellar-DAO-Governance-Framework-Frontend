'use client'

/**
 * /proposals/new — create a new proposal.
 *
 * This MUST be a client component (`'use client'`) because it needs wallet access.
 *
 * Contributor steps:
 * 1. Read wallet state from context:
 *      const { address, connected, signTransaction } = useWallet()
 *    Import `useWallet` from `@/components/providers/WalletProvider`.
 *
 * 2. Add form state with useState:
 *      const [title, setTitle] = useState('')
 *      const [description, setDescription] = useState('')
 *      const [loading, setLoading] = useState(false)
 *      const [error, setError] = useState<string | null>(null)
 *
 * 3. Implement handleSubmit:
 *      async function handleSubmit(e: React.FormEvent) {
 *        e.preventDefault()
 *        if (!address) return
 *        setLoading(true)
 *        try {
 *          const id = await createProposal(address, title, description, signTransaction)
 *          router.push(`/proposals/${id}`)
 *        } catch (err) {
 *          setError(err instanceof Error ? err.message : 'Unknown error')
 *        } finally {
 *          setLoading(false)
 *        }
 *      }
 *    Import `createProposal` from `@/lib/contracts/governance`.
 *    Import `useRouter` from `next/navigation`.
 *
 * 4. Guard the form: if `!connected`, show a "Connect your wallet to continue" message
 *    instead of the form.
 *
 * 5. Wire each input's `value` and `onChange` to the state variables.
 *
 * 6. Disable the submit button while `loading` is true. Show a spinner or
 *    "Submitting…" label.
 *
 * 7. Display `error` in a red alert box below the form if set.
 */

export default function NewProposalPage() {
  // TODO: const { address, connected, signTransaction } = useWallet()
  // TODO: const router = useRouter()
  // TODO: const [title, setTitle] = useState('')
  // TODO: const [description, setDescription] = useState('')
  // TODO: const [loading, setLoading] = useState(false)
  // TODO: const [error, setError] = useState<string | null>(null)

  // TODO: implement handleSubmit (see steps above)

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-8 text-2xl font-bold">New Proposal</h1>

      {/* ── Wallet guard ───────────────────────────────────────────────────────
          TODO: replace with:
            if (!connected) return <p>Connect your wallet to continue.</p> */}

      {/* ── Form ───────────────────────────────────────────────────────────────
          TODO: add onSubmit={handleSubmit} to the <form> tag */}
      <form className="flex flex-col gap-6">

        {/* Title field
            TODO: add value={title} onChange={e => setTitle(e.target.value)} */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-300">Title</label>
          <input
            type="text"
            placeholder="Short proposal title"
            className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-sm text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Description field
            TODO: add value={description} onChange={e => setDescription(e.target.value)} */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-300">Description</label>
          <textarea
            rows={6}
            placeholder="Full rationale for the proposal…"
            className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-sm text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Submit button
            TODO: add disabled={loading || !connected}
            TODO: show "Submitting…" when loading is true */}
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium hover:bg-blue-500 disabled:opacity-50"
        >
          Submit Proposal
        </button>

        {/* Error message
            TODO: replace with: {error && <p className="text-sm text-red-400">{error}</p>} */}
      </form>
    </main>
  )
}
