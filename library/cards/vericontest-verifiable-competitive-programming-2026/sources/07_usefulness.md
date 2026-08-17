1. **Stage-wise vericoding evaluation:** Separately evaluate natural language to specification, natural language to code, specification to proof, and end-to-end generation under fixed Verus versions, time limits, and retry counts.

2. **RLVR:** Build hierarchical rewards from online judges, Verus proofs, and negative tests: compile, pass functional tests, prove, and finally survive specification counterexamples. Rewarding only Verus success invites exploitation of weak specifications.

3. **Specification training:** Train specification generators or critics from positive cases, mutation negatives, and Post2Exe outcomes. For languages other than Rust/Verus, tasks with external state, or unavailable judges, the benchmark provides a method reference rather than a directly reusable verifier.
