# Method: How does it work?

- Benchmark size: 164 道手写 Python 函数补全题。
- Inputs: task prompts, metadata, and any context, schema, passage, table, code stub, database, or answer choices required by the benchmark.
- Pipeline: curate examples, define splits, attach reference answers or labels, and publish an evaluator or scoring policy.
- Outputs: benchmark instances, official metrics, and reproducibility metadata.
- Verifier / reward / judge / environment: program execution against unit tests with pass@k aggregation.
- Training/evaluation use: primarily evaluation and audit; any training reuse requires a contamination and license audit.
- Artifacts to verify: paper/arXiv, official code or project page, data release, scorer, license, and leaderboard policy.
- Reproducibility notes: pin split, prompt template, decoding budget, answer extractor, scorer version, and release date.
