The official paper reports that the LeanDojo Benchmark contains 98,734 theorems and that ReProver improves theorem proving by retrieving premises before tactic generation. The project page and repository provide the implementation, while Zenodo provides the released benchmark artifact.

The decisive row-level evidence is mechanical: a generated tactic/proof is executed in Lean and either advances the proof state, solves the theorem, fails, or times out. Aggregate pass rates are meaningful only under the exact theorem split, search budget, timeout, retrieval corpus, and Lean version.

The evidence boundary is formal acceptance in Lean. Lean acceptance certifies the encoded formal theorem under the imported libraries, but it does not certify the informal mathematical problem statement, the usefulness of the proof, or absence of benchmark leakage unless the split and premise policy are audited.
