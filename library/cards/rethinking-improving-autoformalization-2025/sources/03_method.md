1. **Build equivalence labels:** Collect 200 diverse Lean statement pairs and obtain expert semantic-equivalence judgments as a metric test set.

2. **Run BEq:** Expand definitions in both directions and invoke restricted proof automation; equivalence is accepted when the bidirectional condition holds.

3. **Construct Con-NF:** Extract 961 theorems and 1,348 dependency objects from frontier formal-mathematics projects and align them with natural-language statements.

4. **Retrieve dependencies and generate:** Parse library dependencies, construct query–dependency pairs in topological order, retrieve context, generate Lean, and evaluate with BEq@k. Reproduction must fix Lean/Mathlib, automation policies, and retrieval-library versions.
