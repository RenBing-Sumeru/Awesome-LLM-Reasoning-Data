1. **Formalize problems:** Encode variables, hypotheses, queried values, and conclusions as Lean propositions containing existentials or metavariables.

2. **Run FPS:** A model applies tactics step by step, and Lean checks every state transition. Success requires filling all holes and proving all goals.

3. **Run D-FPS:** Construct the answer in a forward phase, then prove soundness in a backward phase, with completeness checked when required.

4. **Build and score benchmarks:** Refactor MATH500, MiniF2F, and PutnamBench into solving tasks, using Lean and RPE to compare answers. Reproduction must fix Lean, Mathlib, proof-search budgets, and answer normalization.
