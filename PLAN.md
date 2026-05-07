# Frontend Build Plan

This document outlines how the frontend is being built, phase by phase.
It mirrors the contract roadmap so both repos stay in sync.

---

## Current State (Phase 1 — Skeleton)

All pages and components are scaffolded with full skeleton structure and
step-by-step contributor comments. No live contract data yet — all values
are placeholders. The app builds, lints, and type-checks cleanly.

**What exists:**

| File | Status |
|---|---|
| `app/page.tsx` | Skeleton — stat cards and recent proposals layout |
| `app/proposals/page.tsx` | Skeleton — proposal list with pagination structure |
| `app/proposals/[id]/page.tsx` | Skeleton — detail view, vote tally bar, vote form slot |
| `app/proposals/new/page.tsx` | Skeleton — create proposal form (inputs wired, no submission) |
| `app/treasury/page.tsx` | Skeleton — balance card and spend history table structure |
| `components/layout/Navbar.tsx` | Skeleton — nav links, static Connect Wallet button |
| `components/proposals/ProposalCard.tsx` | Skeleton — card layout, vote bar, status badge |
| `components/proposals/StatusBadge.tsx` | ✅ Complete — colour-coded status pill |
| `components/proposals/VoteForm.tsx` | Skeleton — For/Against/Abstain buttons, no submission |
| `components/providers/WalletProvider.tsx` | Skeleton — context shape defined, no real wallet state |
| `lib/stellar.ts` | ✅ Complete — Soroban RPC client singleton |
| `lib/wallet.ts` | Skeleton — wallet kit stubs |
| `lib/contracts/governance.ts` | Skeleton — all functions stubbed with step comments |
| `lib/contracts/treasury.ts` | Skeleton — all functions stubbed with step comments |
| `types/governance.ts` | ✅ Complete — TypeScript mirrors of on-chain types |

---

## Phase 2 — Contract Integration

**Goal:** replace every placeholder with live on-chain data.

### 2a. Wallet connection
- Implement `lib/wallet.ts` — `createWalletKit`, `connectWallet`, `signTransaction`
  using `@creit.tech/stellar-wallets-kit`.
- Implement `WalletProvider` — connect, disconnect, persist address to localStorage.
- Wire `Navbar` connect/disconnect button to wallet context.

### 2b. Read contract data
- Implement `lib/contracts/governance.ts`:
  - `getProposalCount()` — call `proposal_count()` on governance contract.
  - `getProposals(offset, limit)` — batch-fetch proposals by ID.
  - `getProposal(id)` — fetch single proposal, deserialise ScVal → `Proposal`.
  - `getVote(proposalId, voter)` — check if a voter has already voted.
- Implement `lib/contracts/treasury.ts`:
  - `getTreasuryBalance(token)` — call `balance(token)` on treasury contract.
  - `getSpendCount()` — call `spend_count()`.
  - `getSpendRecord(index)` — fetch individual spend record.

### 2c. Wire pages to live data
- `app/page.tsx` — fetch proposal count, 3 recent proposals, XLM balance.
- `app/proposals/page.tsx` — paginated proposal list from `getProposals`.
- `app/proposals/[id]/page.tsx` — fetch proposal, render tally bar, show VoteForm if Active.
- `app/treasury/page.tsx` — fetch balance and spend records, render table.

### 2d. Write contract data (transactions)
- Implement `castVote` in `lib/contracts/governance.ts`:
  1. Build the `vote()` transaction using `Contract.call`.
  2. Simulate via `rpc.simulateTransaction`.
  3. Assemble, sign via wallet, submit via `rpc.sendTransaction`.
  4. Poll `rpc.getTransaction` until status is `SUCCESS` or `FAILED`.
- Implement `createProposal` the same way.
- Wire `VoteForm` to `castVote` — loading state, success hash, error message.
- Wire `NewProposalPage` form to `createProposal` — redirect on success.

### 2e. Deploy config
- Fill in `.env.local` with testnet contract addresses after contracts are deployed.
- Add a `lib/constants.ts` file for token addresses (XLM, USDC on testnet/mainnet).

---

## Phase 3 — Hardening & UX

- **Transaction polling** — show a progress indicator while waiting for ledger confirmation.
- **Error handling** — map contract error codes to human-readable messages.
- **Already voted** — check `getVote` on page load; show the user's existing vote instead of buttons.
- **Finalize button** — show on approved proposals; calls `finalizeProposal`.
- **Time remaining** — convert `endLedger` to an estimated date/time display.
- **Proposer display** — truncated public key with a link to Stellar Expert.
- **Responsive design** — mobile layout pass across all pages.
- **Loading skeletons** — animated placeholder cards while data is fetching.

---

## Phase 4 — Ecosystem

- **Indexer integration** — replace direct RPC pagination with Mercury/Subquery
  for fast proposal history queries.
- **Delegation UI** — show delegate/undelegate controls once Phase 2 contracts ship.
- **Multi-token treasury** — display balances for USDC and other SAC tokens.
- **Mainnet config** — environment-based network switching (testnet / mainnet).
- **Docs site** — link to contract reference and architecture docs.

---

## How pages and contracts connect

```
app/page.tsx
  └── getProposalCount()       → governance.proposal_count()
  └── getProposals(0n, 3)      → governance.get_proposal(id) × 3
  └── getTreasuryBalance(XLM)  → treasury.balance(token)

app/proposals/[id]/page.tsx
  └── getProposal(id)          → governance.get_proposal(id)
  └── VoteForm.castVote()      → governance.vote(voter, id, choice)

app/proposals/new/page.tsx
  └── createProposal()         → governance.create_proposal(...)

app/treasury/page.tsx
  └── getTreasuryBalance()     → treasury.balance(token)
  └── getSpendRecord(i)        → treasury.get_spend_record(i)
```

---

## Environment variables

See `.env.example` for the full list. Key ones:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_STELLAR_RPC_URL` | Soroban RPC endpoint |
| `NEXT_PUBLIC_STELLAR_NETWORK_PASSPHRASE` | Network passphrase |
| `NEXT_PUBLIC_GOVERNANCE_CONTRACT_ID` | Deployed governance contract address |
| `NEXT_PUBLIC_TREASURY_CONTRACT_ID` | Deployed treasury contract address |
| `NEXT_PUBLIC_TOKEN_WEIGHT_CONTRACT_ID` | Deployed token-weight contract address |
