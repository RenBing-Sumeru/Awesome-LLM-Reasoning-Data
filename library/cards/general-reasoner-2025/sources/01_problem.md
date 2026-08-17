Rule-based answer checkers work for math but reject equivalent free-form answers in science and professional domains, blocking broad RL data collection.

General-Reasoner crawls broad questions, normalizes answer types, and uses a context-aware generative verifier to retain questions with scoreable answers. The decision boundary is whether a serialized record survives generative answer verification with chain-of-thought and context plus category and difficulty filters; the direct output is WebInstruct-verified, consumed by multi-domain reasoning RL rather than an evaluation-only benchmark.

L4 facts: primary source arXiv:2505.14652; venue/date arXiv preprint (2025); open data WebInstruct-verified at https://huggingface.co/datasets/TIGER-Lab/WebInstruct-verified; scale 228,736 training and 1,000 test question-answer records; full paper, official README, terms, schema, and one actual record checked on 2026-07-27.
