LeanDojo asks how to evaluate and train language-model theorem provers in an interactive Lean environment with access to premises, proof states, and tactic feedback. The primary sources are the NeurIPS 2023 paper, arXiv:2306.15626, the official LeanDojo project page, GitHub repository, and Zenodo dataset release.

The evaluation surface is a Lean theorem-proving benchmark: a task gives a formal theorem context, optional retrieved premises, and a place for the model to propose tactics or a proof. The feedback contract is programmatic: Lean accepts, rejects, times out, or returns proof-state/error feedback.

The atlas boundary is executable formal-proof evaluation and infrastructure. It is not natural-language math QA, not a subjective proof-quality judge, and not a guarantee that the formal statement faithfully encodes an informal theorem.
