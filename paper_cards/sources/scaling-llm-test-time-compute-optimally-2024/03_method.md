Inputs: Reasoning prompts grouped by difficulty for test-time compute allocation experiments..

Pipeline: compares best-of-N, verifier-guided search, and adaptive prompt-level compute allocation under budgeted evaluation.

Outputs: Prompt, generated candidate traces, verifier scores, selected answer, and compute budget..

Verifier / reward / judge / environment: Dense process-based verifier reward models plus answer-level evaluation.

Training/evaluation use: test_time_compute, evaluation, reward_modeling.

Artifacts to verify: paper https://arxiv.org/abs/2408.03314; DOI https://doi.org/10.48550/arXiv.2408.03314; code not pinned; Hugging Face not pinned.

Reproducibility notes: check split, sample count, verifier calibration, inference budget, and whether repeated rollouts are counted separately from unique prompts.
