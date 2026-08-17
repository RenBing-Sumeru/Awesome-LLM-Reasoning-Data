1. **Derivation boundary:** New theorems come from neighborhoods of existing Mathlib4 proofs rather than independent mathematical invention, so the corpus may amplify the source library’s domains, naming, and tactic distribution. Train–test splits should separate source files and theorem families to prevent near-neighbor leakage.

2. **Search truncation:** Limits of 30 minutes, 200K transitions, and eight proof steps favor short, easily reachable states and systematically omit long proofs or goals requiring new lemmas. Coverage should be reported across search budgets.

3. **Attribution confounding:** The downstream system changes data, retrieval, and prover components together, so all gains cannot be assigned to the 4.7M scale. Equal-data ablations with fixed models and search budgets are needed, along with version checks for the Zenodo snapshot and code.
