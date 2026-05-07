'use client'

/**
 * WalletProvider context.
 *
 * Provides wallet state (connected address, signTransaction) to all child components.
 *
 * Contributor note (Phase 2):
 * 1. Initialise `StellarWalletsKit` from `lib/wallet.ts`.
 * 2. Store `address: string | null` and `connected: boolean` in state.
 * 3. Implement `connect()` — calls `connectWallet(kit)`, sets address.
 * 4. Implement `disconnect()` — clears address.
 * 5. Implement `signTransaction(xdr)` — delegates to `kit.signTransaction`.
 * 6. Wrap the app in this provider in `app/layout.tsx`.
 *
 * TODO (Phase 2): implement wallet state management.
 */

import { createContext, useContext } from 'react'

interface WalletContextValue {
  address: string | null
  connected: boolean
  connect: () => Promise<void>
  disconnect: () => void
  signTransaction: (xdr: string) => Promise<string>
}

const WalletContext = createContext<WalletContextValue>({
  address: null,
  connected: false,
  connect: async () => {
    throw new Error('WalletProvider not mounted')
  },
  disconnect: () => {},
  signTransaction: async () => {
    throw new Error('WalletProvider not mounted')
  },
})

export function useWallet() {
  return useContext(WalletContext)
}

export default function WalletProvider({ children }: { children: React.ReactNode }) {
  // TODO (Phase 2): implement wallet state with StellarWalletsKit.
  // const [address, setAddress] = useState<string | null>(null)
  // const kit = useMemo(() => createWalletKit(), [])

  return (
    <WalletContext.Provider
      value={{
        address: null,
        connected: false,
        connect: async () => {},
        disconnect: () => {},
        signTransaction: async () => '',
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}
