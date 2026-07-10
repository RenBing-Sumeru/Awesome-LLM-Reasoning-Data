Inputs: Arithmetic and commonsense reasoning benchmarks used with chain-of-thought prompting..

Pipeline: samples diverse chain-of-thought paths and selects the most consistent final answer.

Outputs: Prompt, sampled reasoning paths, extracted answers, vote distribution, and selected final answer..

Verifier / reward / judge / environment: Answer agreement and final-answer checking act as an implicit verifier.

Training/evaluation use: test_time_compute, evaluation.

Artifacts to verify: paper https://arxiv.org/abs/2203.11171; DOI https://doi.org/10.48550/arXiv.2203.11171; code not pinned; Hugging Face not pinned.

Reproducibility notes: check split, sample count, verifier calibration, inference budget, and whether repeated rollouts are counted separately from unique prompts.
