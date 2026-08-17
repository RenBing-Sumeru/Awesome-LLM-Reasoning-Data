1. **One-sentence position:** LeanNavigator converts proof-search states into new theorem–proof data, deriving 4.7M kernel-verifiable samples from Mathlib4.

2. **Method takeaway:** The essential chain is template retrieval, Lean execution, state-graph expansion, and shortest-path extraction from completed nodes; the Lean kernel decides validity.

3. **Data takeaway:** The public corpus contains about one billion tokens and is released on Zenodo under CC BY 4.0; records support full-proof or state–action training.

4. **Evidence anchor:** The generator explores about 2,035 states per theorem; the trained model solves 104/493 MiniF2F and 39/117 MIL problems, both above ReProver.

5. **Reuse decision:** It is well suited to Lean data expansion. The main risks are source-neighbor leakage and short-proof bias, so lineage-aware deduplication and fixed versions are mandatory.
