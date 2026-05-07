import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stellar DAO Governance',
  description:
    'On-chain DAO governance for Stellar — browse proposals, vote, and manage the treasury.',
}

/**
 * RootLayout
 *
 * Contributor note (Phase 2 — wallet provider):
 * Wrap children with <WalletProvider> once wallet.ts is implemented so
 * wallet state is available across all pages.
 *
 * TODO (Phase 2): import and wrap with WalletProvider.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-gray-950 text-gray-100 antialiased`}>
        {/* TODO (Phase 2): <WalletProvider>{children}</WalletProvider> */}
        {children}
      </body>
    </html>
  )
}
