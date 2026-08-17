Many open math corpora contain easy, duplicated, contaminated, or unverifiable problems, obscuring whether training gains come from reasoning quality or leakage.

DeepMath-103K retains difficult decontaminated questions, stores a verified final answer, and supplies three independent R1 reasoning traces for each problem. The decision boundary is whether a serialized record survives answer verification, difficulty scoring, topic labeling, deduplication, and benchmark decontamination; the direct output is DeepMath-103K, consumed by mathematical reasoning SFT and RL prompt preparation rather than an evaluation-only benchmark.

L4 facts: primary source arXiv:2504.11456; venue/date arXiv preprint (2025); open data DeepMath-103K at https://huggingface.co/datasets/zwhe99/DeepMath-103K; scale 103,000 math questions with three DeepSeek-R1 solutions per record; full paper, official README, terms, schema, and one actual record checked on 2026-07-27.
