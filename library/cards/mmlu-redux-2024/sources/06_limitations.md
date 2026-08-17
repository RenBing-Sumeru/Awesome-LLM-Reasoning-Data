Correctness is limited to the paper's annotation protocol and the sampled subset. Human adjudication can reduce answer-key noise but can still disagree on ambiguous, domain-specific, or outdated questions.

The artifact is public, so corrected labels can also become contaminated in later model training. Score-impact estimates depend on which models, prompts, and answer-normalization rules are recomputed against the corrected set.

MMLU-Redux should not be read as a replacement for all MMLU-style evaluation. It is an audit layer and corrected subset; users still need to decide how to handle untouched MMLU rows and whether to evaluate on original, corrected, or filtered records.
