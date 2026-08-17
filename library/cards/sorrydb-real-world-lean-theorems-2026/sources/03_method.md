1. **Continuously crawl projects:** Public Lean 4 repositories listed by Reservoir are cloned at specified branches and commits, and `lake build` is used to test reproducibility.

2. **Locate proof obligations:** A Lean REPL scans `Prop`-valued declarations containing `sorry`, recording files, coordinates, namespaces, imports, Lean versions, and repository metadata. Projects that cannot be built reliably are excluded from evaluable data.

3. **Freeze evaluation snapshots:** Timestamped snapshots are created from the nightly database, and a 1,000-task split is selected across projects and task properties so leaderboard results remain comparable as the live database changes.

4. **Generate and verify proofs:** General LLMs, specialized provers, or agents submit Lean code replacing the `sorry`. An independent verifier recompiles it at the original commit with original dependencies, counting success only when the goal closes. Reproduction requires fixed snapshots, attempt budgets, and agent tool permissions.
