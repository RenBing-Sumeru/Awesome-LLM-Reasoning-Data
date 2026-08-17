- Exact answer matching rejects semantically equivalent open-ended responses; the paper itself identifies this brittleness.
- Short-answer and template filters improve verifiability partly by narrowing what counts as an acceptable answer, which can change task semantics and reward verbosity rather than reasoning.
- Synthetic QA answers use DeepSeek-R1 majority vote without an independent oracle, so consensus errors can enter the ground truth.
- The hard-data filter equates Qwen2.5-7B failure with difficulty; ambiguity, niche knowledge, or mislabeled items may also be selected.
- The released 287,376 rows cover only synthetic QA/Math, not the full 588,645-prompt pool or six blend manifests. Released prompts contain no completed reasoning traces.
- Training is fixed to 650 steps without extensive hyperparameter tuning; data and optimizer effects are not fully disentangled.
- Synthetic-QA decontamination is reported for GPQA/MMLU/MMLU-PRO, but thresholds and an item-level removal ledger are absent; other overlap remains unknown.
- CC BY 4.0 metadata coexists with Qwen-license conditions and incomplete record-level Common Crawl/book/upstream provenance.
- Fairness, bias, and value alignment are not evaluated.

