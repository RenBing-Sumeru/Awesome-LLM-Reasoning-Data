The arXiv abstract reports a 5,700-question re-annotated subset and estimates that 6.49% of MMLU questions contain errors. It also reports that correcting the benchmark changes model evaluations, which is the central evidence that row-level benchmark defects can affect aggregate leaderboard claims.

The artifact evidence is the official Hugging Face MMLU-Redux 2.0 dataset. Row-level decisive evidence is the annotator decision attached to a specific MMLU item, such as a corrected answer, ambiguous question, or defective item label.

Evidence boundary: the 6.49% estimate depends on the sampling frame, annotation protocol, taxonomy, and the MMLU version under audit. It should not be generalized to all static benchmarks or all future MMLU-derived packages without a separate row-level audit.
