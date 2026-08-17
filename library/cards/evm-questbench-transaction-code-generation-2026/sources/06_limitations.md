1. **Safety extrapolation:** Forked chains, test wallets, and controlled contracts do not cover mainnet MEV, slippage, RPC failures, or malicious contracts.

2. **Task scale:** Although 107 templates are dynamically sampled, protocol and chain coverage remain limited, and models may learn template structure.

3. **Verifier risk:** Validators that inspect only part of terminal state may miss dangerous approvals or asset changes. Invariants, allowances, and gas audits should be added.
