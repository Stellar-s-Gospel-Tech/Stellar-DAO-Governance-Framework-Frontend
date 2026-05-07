'use client'

/**
 * WalletProvider — global wallet state context.
 *
 * Wraps the entire app (added in app/layout.tsx) so any component can call
 * `useWallet()` to read the connected address or sign a transaction.
 *
 * Contributor steps:
 * 1. Import wallet helpers:
 *      import { createWalletKit, connectWallet, signTransaction as signTx }
 *        from '@/lib/wallet'
 *    These are stubbed in lib/wallet.ts — implement them there first.
 *
 * 2. Create the kit instance once with useMemo:
 *      const kit = useMemo(() => createWalletKit(), [])
 *
 * 3. Implement `connect`:
 *      async function connect() {
 *        const addr = await connectWallet(kit)
 *        setAddress(addr)
 *      }
 *    On success, persist the address to localStorage so the session survives
 *    a page refresh:
 *      localStorage.setItem('walletAddress', addr)
 *
 * 4. Implement `disconnect`:
 *      function disconnect() {
 *        setAddress(null)
 *        localStorage.removeItem('walletAddress')
 *      }
 *
 * 5. Implement `signTransaction`:
 *      async function signTransaction(xdr: string) {
 *        return signTx(kit, xdr)
 *      }
 *
 * 6. On mount, restore the address from localStorage:
 *      useEffect(() => {
 *        const saved = localStorage.getItem('walletAddress')
 *        if (saved) setAddress(saved)
 *      }, [])
 *
 * 7. Add this provider to app/layout.tsx:
 *      import WalletProvider from '@/components/providers/WalletProvider'
 *      // wrap children: <WalletProvider>{children}</WalletProvider>
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
  connect: async () => { throw new Error('WalletProvider not mounted') },
  disconnect: () => {},
  signTransaction: async () => { throw new Error('WalletProvider not mounted') },
})

export function useWallet() {
  return useContext(WalletContext)
}

export default function WalletProvider({ children }: { children: React.ReactNode }) {
  // TODO: const [address, setAddress] = useState<string | null>(null)
  // TODO: const kit = useMemo(() => createWalletKit(), [])
  // TODO: implement connect, disconnect, signTransaction (see steps above)
  // TODO: restore address from localStorage on mount (useEffect)

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
