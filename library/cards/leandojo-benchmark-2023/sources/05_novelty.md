The prior baseline is static datasets of formal proofs or theorem statements where the model cannot easily query an environment. LeanDojo changes the object from offline text pairs to an interactive Lean substrate with proof states, premise retrieval, and executable feedback.

The direction signal is environment-backed reasoning data: the benchmark exposes both generation targets and a verifier loop. The quality signal is the public tool, public benchmark artifact, documented NeurIPS paper, and ability to re-run Lean on generated tactics.

What is not new: Lean, tactic execution, proof corpora, and retrieval-augmented generation are existing components. Before reuse, inspect repository versions, proof-state extraction fidelity, split leakage through premises, timeout policy, license of traced Lean repositories, and whether the benchmark uses Lean 3 or newer LeanDojo v2 infrastructure.
