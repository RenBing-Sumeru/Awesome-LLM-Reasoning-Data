1. Assemble evaluation records. The authors use MT-Bench and DevBench tasks, candidate-model answers, and 15 LLM judges; pairwise experiments use two candidates and list-wise experiments permute three candidates.

2. Repeat and permute judgments. Each judge sees original and swapped candidate orders, with repeated calls. The output is a choice label; no verifier accepts or rejects an answer, because the object under audit is the judge's behavior.

3. Compute audit metrics. Repetition stability measures whether repeated calls agree; position consistency checks whether the same candidate wins after reordering; preference fairness classifies consistent, primacy, and recency preferences.

4. Analyze correlates and agreement. Bidirectional stepwise regression with AIC tests judge family, candidate quality gap, lengths, and task variables. The study reports post-hoc analyses, API-based runs costing about USD 3,000, and does not disclose all proprietary model internals.
