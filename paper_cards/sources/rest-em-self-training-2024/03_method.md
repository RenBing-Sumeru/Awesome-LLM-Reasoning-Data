Inputs: MATH and APPS-style problem-solving prompts with scalar feedback..

Pipeline: generates samples, filters them with binary feedback, fine-tunes on accepted samples, and repeats.

Outputs: Prompt, generated sample, binary feedback result, filtered training example, and iteration number..

Verifier / reward / judge / environment: Binary correctness feedback from answer checks or execution-style evaluators.

Training/evaluation use: sft, rlvr, evaluation.

Artifacts to verify: paper https://arxiv.org/abs/2312.06585; DOI https://doi.org/10.48550/arXiv.2312.06585; code not pinned; Hugging Face not pinned.

Reproducibility notes: check split, sample count, verifier calibration, inference budget, and whether repeated rollouts are counted separately from unique prompts.
