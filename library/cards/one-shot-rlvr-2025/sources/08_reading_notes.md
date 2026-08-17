- Read the data object literally: one selected prompt/answer is batch-duplicated; it is not one rollout or one gradient update.
- Separate the reported binary outcome reward from the format-reward baseline and audit the answer-matching implementation before reuse.
- Compare the selected example with DSR-sub and MATH baselines instead of treating the headline result as a data-scaling law.
- Inspect model-specific stability, especially the reported degradation for DeepSeek-R1-Distill-Qwen-1.5B.
- Treat upstream rights, source provenance, and semantic train-test overlap as unresolved audit questions.

