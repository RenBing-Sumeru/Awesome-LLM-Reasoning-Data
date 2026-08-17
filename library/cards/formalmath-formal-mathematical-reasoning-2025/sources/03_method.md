1. **Collect and stratify problems:** High-school Olympiad and undergraduate mathematics questions are assembled with their informal text, domains, and difficulty metadata. Problems lacking sufficient information or expressibility in the chosen Mathlib environment are removed.

2. **Autoformalize statements:** Specialized or prompted LLMs translate each problem into a Lean 4 theorem statement, and compilation with `by sorry` checks syntax, typing, and imports.

3. **Apply semantic and disproof filters:** Multiple LLMs independently compare the informal and formal statements. Negated or counterexample goals are then constructed and submitted to off-the-shelf provers. Refutable, obviously trivial, or disputed candidates are rejected or revised.

4. **Expert review and evaluation:** Human reviewers confirm the retained statements, freeze the 5,560-task benchmark, and evaluate provers under fixed Lean/Mathlib versions, sampling budgets, and verifiers. Reuse must record dataset versions because later independent audits have identified specification risks.
