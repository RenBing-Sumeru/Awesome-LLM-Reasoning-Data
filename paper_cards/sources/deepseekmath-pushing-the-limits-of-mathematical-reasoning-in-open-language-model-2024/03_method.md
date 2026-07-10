Inputs: Math-related web corpus, instruction data, MATH/GSM8K-style problems, and RL prompts..

Pipeline: continues pretraining on math data, performs instruction tuning, applies GRPO, and evaluates both single-sample and 64-sample self-consistency.

Outputs: Math prompt, generated solution, final answer, reward signal, and optional self-consistency samples..

Verifier / reward / judge / environment: GRPO reward setup and final-answer/math evaluation, with self-consistency as TTC evaluation.

Training/evaluation use: sft, rlvr, evaluation, test_time_compute.

Artifacts to verify: paper https://arxiv.org/abs/2402.03300; DOI https://doi.org/10.48550/arXiv.2402.03300; code not pinned; Hugging Face https://huggingface.co/deepseek-ai/deepseek-math-7b-base.

Reproducibility notes: check split, sample count, verifier calibration, inference budget, and whether repeated rollouts are counted separately from unique prompts.
