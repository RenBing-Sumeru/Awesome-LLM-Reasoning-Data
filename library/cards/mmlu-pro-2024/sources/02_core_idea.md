The one-sentence contribution is a harder, cleaner, ten-option successor to MMLU with 12,032 questions across 14 domains. The core mechanism is to start from MMLU-like sources, remove or filter weak items, increase distractor count, and evaluate models under a standardized prompt/scoring setup.

The evaluation surface remains answer-level multiple choice. The feedback contract is deterministic option matching against the released answer key; the benchmark does not judge reasoning traces or open-ended explanations.

Closest comparisons are original MMLU, C-Eval, CMMLU, and other broad static reasoning benchmarks. The direction label is robustness-oriented benchmark refresh: it tries to preserve the convenience of MMLU while reducing saturation and answer-choice shortcuts.
