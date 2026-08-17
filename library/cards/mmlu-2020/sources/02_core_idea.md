The contribution is a large multitask multiple-choice test for measuring language-model knowledge and problem solving across 57 academic and professional subjects. The mechanism is deliberately simple: collect exam-style questions, keep a four-option answer-key format, and compare model-selected options to the official key.

The evaluation surface is answer-level, not trajectory-level. The feedback contract is a deterministic answer-key score, so MMLU can compare models at scale but cannot explain why an answer was selected or whether the question text itself is semantically clean.

Closest comparisons are earlier single-domain QA and reading benchmarks, plus BIG-bench-style broad task collections. MMLU's direction label is broad static reasoning benchmark: it broadened subject coverage while preserving a cheap programmatic scorer.
