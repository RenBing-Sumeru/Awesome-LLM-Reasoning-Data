1. **Lean proof SFT:** Stratify public theorem–proof pairs by source file, proof length, and tactic type to train tactic or full-proof generators. Success must be measured by replay in a fixed Lean/Mathlib version rather than string matching.

2. **Process supervision:** State graphs naturally provide `state → tactic → next state` records for next-action prediction, value estimation, or failed-branch datasets. Source-theorem and node identifiers should be retained for deduplication and lineage audits.

3. **Pipeline reuse:** Re-run template retrieval, kernel execution, and state extraction on other Lean repositories. Tasks involving long proofs, cross-library lemmas, or different proof assistants require new template banks, search limits, and verification environments; original paths cannot be reused directly.
