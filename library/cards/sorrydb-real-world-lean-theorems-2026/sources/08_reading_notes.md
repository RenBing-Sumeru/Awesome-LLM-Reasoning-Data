1. **One-sentence position:** SorryDB turns open `sorry` statements from real Lean projects into a continuously updated task stream verified by compilation in original environments.
2. **Method takeaway:** Crawl Reservoir repositories, build fixed commits, locate obligations through a Lean REPL, generate proofs, and recompile the original project.
3. **Data takeaway:** It covers 78 projects; `SorryDB_2601` contains 2,601 obligations, with 1,000 used for the paper evaluation.
4. **Evidence anchor:** The strongest agent reaches 30.3% Pass@1, while the union of all methods solves only 35.7%, and specialized and general systems are complementary.
5. **Reuse decision:** It is suitable for real-project theorem proving; environment drift is the largest risk, so snapshots, commits, and tool budgets must be fixed.
