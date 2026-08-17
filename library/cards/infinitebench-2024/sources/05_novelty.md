The prior baseline is long-context evaluation at shorter lengths, especially LongBench-scale inputs and needle-style retrieval probes. InfiniteBench changes the stress surface by combining 100K+ contexts with diverse task families and bilingual realistic/synthetic data.

The direction signal is that long-context benchmarks need both length and metric transparency: a task should disclose the context source, answer format, output budget, and scorer. The quality signal is the public repository, dataset release, and task table with per-task metric definitions.

What is not new: exact-match retrieval, ROUGE-based QA/summarization scoring, and code/math answer checking are established components. Before reuse, inspect dataset licenses, source lineage for books/scripts/code, split policy, generated synthetic task construction, and whether the target claim requires semantic evaluation.
