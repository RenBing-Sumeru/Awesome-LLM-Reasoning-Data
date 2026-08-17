Open reasoning supervision is concentrated in math and code, so students see too few difficult questions from ordinary scientific and social domains.

NATURALREASONING scales domain-diverse question generation, attaches reference answers and named teacher responses, and exposes those records for distillation or self-training. The decision boundary is whether a serialized record survives question-quality judgments, reference-answer checks, reward-model scoring, and self-reward filtering; the direct output is NATURALREASONING, consumed by reasoning SFT, knowledge distillation, and filtered self-training rather than an evaluation-only benchmark.

L4 facts: primary source arXiv:2502.13124; venue/date arXiv preprint (2025); open data NATURALREASONING at https://huggingface.co/datasets/facebook/natural_reasoning; scale 2.8 million questions with reference answers and teacher responses; full paper, official README, terms, schema, and one actual record checked on 2026-07-27.
