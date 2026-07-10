Inputs: MATH problems with human step-level feedback labels..

Pipeline: collects human step-level labels, trains a PRM, and compares process supervision with outcome supervision.

Outputs: Problem, reasoning steps, step labels, process reward model score, and final answer..

Verifier / reward / judge / environment: Process reward model trained from human step-level labels.

Training/evaluation use: process_supervision, reward_modeling, test_time_compute, evaluation.

Artifacts to verify: paper https://arxiv.org/abs/2305.20050; DOI https://doi.org/10.48550/arXiv.2305.20050; code not pinned; Hugging Face not pinned.

Reproducibility notes: check split, sample count, verifier calibration, inference budget, and whether repeated rollouts are counted separately from unique prompts.
