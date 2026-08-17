Code-benchmark scores can reflect memorization of pre-training examples rather than generalization, but existing leakage detectors need hidden training corpora, temporal assumptions, or externally calibrated thresholds. That makes sample-level auditing impractical for proprietary Code LLMs.

SrDetection turns each benchmark program into its own reference set: it creates semantics-preserving variants and asks whether the original is unusually predictable. It is an audit method and controlled testbed for code-data leakage, not a new code-generation training recipe.

Its intended decision is item-level: flag a program only when its behavior differs from matched rewrites, so a maintainer can investigate a specific benchmark item rather than infer leakage from aggregate performance.
