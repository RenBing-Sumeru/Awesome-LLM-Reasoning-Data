One-sentence contribution: DeepSeekMath is the compact open-model card linking math data scale, GRPO, RLVR, and self-consistency budget.

Core mechanism: continues pretraining on math data, performs instruction tuning, applies GRPO, and evaluates both single-sample and 64-sample self-consistency.

Data object / evaluation surface: Math prompt, generated solution, final answer, reward signal, and optional self-consistency samples.

Feedback contract: GRPO reward setup and final-answer/math evaluation, with self-consistency as TTC evaluation.

Direction label: deepseekmath, grpo, math-rlvr, data-scaling.

Closest comparisons: lets-verify-step-by-step-2023, self-consistency-chain-of-thought-2023
