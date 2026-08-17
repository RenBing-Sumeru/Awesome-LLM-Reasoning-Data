1. **End-to-end vericoding evaluation:** Measure specification-equivalence rate, verified-implementation rate, and complete success separately with fixed Lean versions and proof budgets.

2. **Staged training:** First fine-tune NL-to-spec models, then use specification equivalence and correctness theorems as verifiers for RL. Hidden ground truth must not be exposed to policy inputs.

3. **Data expansion:** Reuse manual specification audits, vacuity checks, and the dual-proof contract. Tasks whose properties cannot be precisely expressed in Lean, or that require only runtime correctness, should use test-based benchmarks instead.
