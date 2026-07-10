Inputs: Programming problem statements and example unit tests from APPS and MBPP-style tasks..

Pipeline: trains an actor with a learned critic and uses test feedback for critical sampling at inference.

Outputs: Problem, generated program, unit-test feedback, critic score, and final selected code..

Verifier / reward / judge / environment: Unit tests and a critic trained to predict functional correctness.

Training/evaluation use: rlvr, reward_modeling, test_time_compute, evaluation.

Artifacts to verify: paper https://arxiv.org/abs/2207.01780; DOI https://doi.org/10.48550/arXiv.2207.01780; code not pinned; Hugging Face not pinned.

Reproducibility notes: check split, sample count, verifier calibration, inference budget, and whether repeated rollouts are counted separately from unique prompts.
