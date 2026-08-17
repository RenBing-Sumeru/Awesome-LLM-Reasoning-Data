The training lineage is organized as S1 → S2 → S3 → RL-AVG.

- **S1, whole-proof supervision.** DeepSeek-Prover-V2-7B and DeepSeek-Prover-V2-671B run large-scale inference on curated Lean statements. Lean-verified complete proofs with reasoning traces form the initial SFT data. Qwen3-8B and Qwen3-32B are fine-tuned on S1.
- **S2, self-correction supervision.** SFT-S1 and DeepSeek-Prover-V2-671B annotate examples containing a statement, an SFT-model output, and its associated compiler error. These correction records are merged into S1 and used for another SFT stage.
- **S3, scaffolded statements.** The averaged SFT-S2 model helps generate additional statements. Formal scaffolding extracts unsolved Lean goals with their preconditions from failed proof attempts and also considers their negations. Informal scaffolding asks Qwen3-32B to create easier subproblems or harder variants, then runs autoformalization and correctness/difficulty filtering.
- **RL-AVG, verifier-backed optimization.** A 50/50 multi-task mixture trains whole-proof generation and first-round correction. Lean supplies reward calls; model averaging is applied after SFT and again after RL to recover output diversity.

This is a frontier recipe rather than a complete data release. The official project provides model weights, inference and self-correction code, a Lean compiler wrapper, a pinned mathlib submodule, and MathOlympiadBench. It does not expose the full S1/S2/S3 tables, all rollouts, rejected attempts, or per-item lineage.

