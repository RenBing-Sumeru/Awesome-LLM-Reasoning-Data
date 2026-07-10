Inputs: Planning and reasoning tasks such as Game of 24, creative writing, and Mini Crosswords..

Pipeline: generates thought candidates, scores states, and searches over the tree before producing an answer.

Outputs: Problem, intermediate thought states, branch scores, search actions, and final solution..

Verifier / reward / judge / environment: Self-evaluation, task-specific checks, and final outcome scoring.

Training/evaluation use: test_time_compute, evaluation, audit.

Artifacts to verify: paper https://arxiv.org/abs/2305.10601; DOI https://doi.org/10.48550/arXiv.2305.10601; code https://github.com/princeton-nlp/tree-of-thought-llm; Hugging Face not pinned.

Reproducibility notes: check split, sample count, verifier calibration, inference budget, and whether repeated rollouts are counted separately from unique prompts.
