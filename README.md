# Stellar DAO Governance — Frontend

A Next.js frontend for the [Stellar DAO Governance Framework](https://github.com/Stellar-s-Gospel-Tech/Stellar-DAO-Governance-Framework) — browse proposals, cast votes, and track the treasury directly on-chain.

## Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS**
- **@stellar/stellar-sdk** — Soroban RPC calls
- **@creit.tech/stellar-wallets-kit** — Freighter and SEP-43 wallet support

No backend. All state lives on-chain. The frontend talks directly to Stellar RPC.

## Architecture

```
app/
  page.tsx              ← Dashboard (proposal stats, treasury balance)
  proposals/
    page.tsx            ← Proposal list
    [id]/page.tsx       ← Proposal detail + vote form
    new/page.tsx        ← Create proposal
  treasury/page.tsx     ← Treasury balance + spend history

components/
  layout/Navbar.tsx     ← Nav + wallet connect button
  proposals/
    ProposalCard.tsx    ← Proposal summary card
    StatusBadge.tsx     ← Status pill (Active / Approved / Rejected / Executed)
    VoteForm.tsx        ← For / Against / Abstain vote buttons
  providers/
    WalletProvider.tsx  ← Wallet context (connect, sign, disconnect)

lib/
  stellar.ts            ← Soroban RPC client singleton
  wallet.ts             ← Wallet kit helpers
  contracts/
    governance.ts       ← Typed helpers for governance contract calls
    treasury.ts         ← Typed helpers for treasury contract calls

types/
  governance.ts         ← TypeScript mirrors of on-chain Soroban types
```

## Quickstart

```bash
cp .env.example .env.local
# Fill in contract addresses in .env.local

npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Every `TODO (Phase 2)` comment in the codebase is a potential issue.

## License

MIT
