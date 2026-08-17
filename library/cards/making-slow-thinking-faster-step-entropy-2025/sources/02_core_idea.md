The method assigns each newline-delimited reasoning step a length-normalized token-entropy score from the generating model. It ranks steps from low to high entropy, replaces the lowest-scoring steps with the literal `[SKIP]` marker, and treats the remaining compressed CoT plus final answer as the supervised target.

The resulting selector is a redundancy heuristic, not a ground-truth step-correctness verifier. After supervised fine-tuning (SFT), the paper applies Group Relative Policy Optimization (GRPO) with final-answer correctness and compression-related rewards, making the feedback contract mixed: model-derived step selection at construction time and outcome/compression rewards during RL.

