# Usefulness

- **Retrieval-aware data builder:** reuse the record contract to serialize a prompt, retrieved passage, generated segment, and explicit retrieval/relevance/support/utility decisions. Success requires better factual-task accuracy than the same source outputs without reflection tokens at a matched training budget.
- **Critique-data auditor:** stratify the public JSONL by source dataset and token pattern, relabel whether retrieval was needed and whether each passage supports the adjacent segment, and output false-positive and fallback-passage rates.
- **Do not use when:** component licenses cannot be reconciled, the target domain has no reliable way to judge passage support, or the retriever corpus is materially newer than the evaluation snapshot; then attribution and correctness checks are not defensible.
