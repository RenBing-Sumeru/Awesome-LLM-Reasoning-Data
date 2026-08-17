1. **Cross-domain theorem-proving evaluation:** Report Pass@k separately for algebra, calculus, number theory, and other domains under fixed Lean, Mathlib, sampling budgets, and permitted tactics rather than only an overall average.

2. **Reuse the formalization pipeline:** Apply LLM formalization, compilation, multi-model semantic review, negation-based disproof, and expert confirmation to new natural-language problems, retaining candidate histories and rejection reasons instead of publishing only final `.lean` files.

3. **Training and hard-case analysis:** Audited statements can support prover training or RL, but uncorrected risky instances should be isolated. Success criteria should combine proof success with sampled fidelity audits. The pipeline cannot guarantee scale in domains poorly supported by Mathlib.
