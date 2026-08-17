1. **Cross-language non-comparability:** Dafny, Verus, and Lean subsets come from different sources, specification lengths, and difficulty distributions, so success rates mix language, data, and automation effects. Results should be stratified by source, ideally with functionally aligned tasks.

2. **Non-compiling samples:** The repository intentionally retains failed translations in `issues`. Mixing them with tasks conflates specification repair with vericoding. Users must inspect status fields and recompile.

3. **Specification hacking and contamination:** A verifier proves only the provided specification, and weak preconditions or postconditions may allow meaningless implementations. Many sources are public and may be in pretraining data. Reuse requires counterexample or human specification audits, source-level deduplication, and fixed Dafny, Verus, Lean, and Mathlib versions.
