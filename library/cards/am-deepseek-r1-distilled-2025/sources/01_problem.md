Large reasoning teachers are useful for distillation, but public students lack a bilingual, cross-domain corpus whose verification rule changes with the task type.

AM-Distilled unifies 1.4 million R1 responses and routes math, code, and other tasks through answer checks, execution, or reward-model review. The decision boundary is whether a serialized record survives reference-answer matching for math, executable tests for code, and reward-model review for other domains; the direct output is AM-DeepSeek-R1-Distilled-1.4M, consumed by reasoning SFT and distillation rather than an evaluation-only benchmark.

L4 facts: primary source arXiv:2503.19633; venue/date arXiv preprint (2025); open data AM-DeepSeek-R1-Distilled-1.4M at https://huggingface.co/datasets/a-m-team/AM-DeepSeek-R1-Distilled-1.4M; scale 1.4 million bilingual reasoning traces; full paper, official README, terms, schema, and one actual record checked on 2026-07-27.
