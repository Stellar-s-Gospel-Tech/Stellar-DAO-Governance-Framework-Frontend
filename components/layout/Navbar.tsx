'use client'

/**
 * Navbar — top navigation bar with wallet connect button.
 *
 * This is a client component because it reads wallet state.
 *
 * Contributor steps:
 * 1. Read wallet state:
 *      const { address, connected, connect, disconnect } = useWallet()
 *    Import `useWallet` from `@/components/providers/WalletProvider`.
 *
 * 2. Replace the static "Connect Wallet" button with conditional rendering:
 *      {connected ? (
 *        <div className="flex items-center gap-2">
 *          <span className="text-xs text-gray-400">
 *            {address?.slice(0, 4)}…{address?.slice(-4)}
 *          </span>
 *          <button onClick={disconnect}>Disconnect</button>
 *        </div>
 *      ) : (
 *        <button onClick={connect}>Connect Wallet</button>
 *      )}
 *
 * 3. Handle the async `connect()` call — it opens the wallet selection modal.
 *    Wrap it in a try/catch and show a toast or inline error if it fails.
 *    Example:
 *      async function handleConnect() {
 *        try { await connect() }
 *        catch { setError('Could not connect wallet') }
 *      }
 *
 * 4. Add a loading state while the wallet modal is open:
 *      const [connecting, setConnecting] = useState(false)
 *    Disable the button and show "Connecting…" while connecting is true.
 */

import Link from 'next/link'

export default function Navbar() {
  // TODO: const { address, connected, connect, disconnect } = useWallet()
  // TODO: const [connecting, setConnecting] = useState(false)

  // TODO: implement handleConnect (see steps above)

  return (
    <nav className="border-b border-gray-800 bg-gray-950 px-4 py-3">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/" className="font-bold text-white">
          Stellar DAO
        </Link>

        <div className="flex items-center gap-6 text-sm text-gray-400">
          <Link href="/proposals" className="hover:text-white">
            Proposals
          </Link>
          <Link href="/treasury" className="hover:text-white">
            Treasury
          </Link>

          {/* ── Wallet button ─────────────────────────────────────────────────
              TODO: replace with connected/disconnected conditional (see steps above) */}
          <button className="rounded-lg border border-gray-700 px-3 py-1.5 hover:border-gray-500">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  )
}
