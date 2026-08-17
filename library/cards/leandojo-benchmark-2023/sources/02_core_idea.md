The contribution is both infrastructure and a benchmark: LeanDojo extracts data from Lean repositories, lets models interact with Lean as an environment, and releases a benchmark for retrieval-augmented theorem proving. The paired model contribution, ReProver, shows how retrieval over premises can guide tactic generation.

The data object is not just a theorem string. It can include the theorem statement, local context, proof state, available premises, retrieved candidates, generated tactics, and Lean execution result. The feedback contract is Lean's checker and tactic engine, not a human rubric.

Closest comparisons are static proof corpora, miniF2F-style theorem benchmarks, and natural-language math datasets. LeanDojo differs by exposing interactive proof-state transitions and premise retrieval. The direction label is executable verifier-backed formal reasoning data.
