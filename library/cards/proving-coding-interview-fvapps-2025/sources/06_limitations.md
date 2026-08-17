1. **Weak or incorrect specifications:** Automatically generalizing tests can create partial, tautological, or misaligned theorems; the authors note that theorem desirability still needs judgment. Prefer the curated subset and audit specifications with humans or counterexamples.

2. **`sorry` and compilability:** Source files compile with `sorry`, which does not mean a model completed the proof. Evaluation must disable or scan `sorry`, `admit`, and unsafe axioms and confirm that target theorems are closed.

3. **Translation distribution:** Converting Python and I/O problems to Lean data structures may remove performance constraints and original runtime semantics. All 4,715 tasks derive from public APPS, creating contamination risk. Reuse should pin Lean 4.12.0, deduplicate source problems, and report program and proof success separately.
