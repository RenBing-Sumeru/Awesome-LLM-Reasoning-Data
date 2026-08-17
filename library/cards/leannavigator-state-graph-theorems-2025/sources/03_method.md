1. **Establish search roots:** Start from existing Mathlib4 theorems and proof states, using LeanDojo to expose goals, local hypotheses, and an executable Lean environment.

2. **Generate candidate tactics:** Normalize variable names in tactic templates, encode states and templates with a 350M GPT-Neo model, retrieve nearby templates with FAISS, instantiate variables, and propose at most 200 actions per state.

3. **Expand the state graph:** Submit candidates to Lean in breadth-first order. Keep only edges whose tactics execute successfully and produce new states; record paths when `ProofFinished` is reached.

4. **Extract theorem–proof pairs:** Stop after 30 minutes or 200K state transitions, retain states within eight steps of completion, and choose the shortest proof. The Mathlib4 run produces 4.7M pairs. Reproduction must fix Lean, Mathlib, LeanDojo, and search budgets.
