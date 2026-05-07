/**
 * Navbar component.
 *
 * Contributor note (Phase 2 — wallet connect button):
 * 1. Import wallet context from WalletProvider.
 * 2. If not connected, show a "Connect Wallet" button that calls `connectWallet()`.
 * 3. If connected, show a truncated public key and a "Disconnect" option.
 *
 * TODO (Phase 2): add wallet connect/disconnect UI.
 */

import Link from 'next/link'

export default function Navbar() {
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
          {/* TODO (Phase 2): <WalletButton /> */}
          <button className="rounded-lg border border-gray-700 px-3 py-1.5 hover:border-gray-500">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  )
}
