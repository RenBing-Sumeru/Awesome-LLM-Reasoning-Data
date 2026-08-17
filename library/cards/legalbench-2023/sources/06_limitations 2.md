The strongest limitation is that LegalBench: A Collaboratively Built Benchmark for Measuring Legal Reasoning in Large Language Models is only reusable when its scoring surface, split policy, version, and artifact access conditions are pinned. A headline benchmark score can hide prompt/scaffold choices, dependency drift, judge or extractor behavior, and public-data contamination.

Split/version boundary: Exact split, hidden/public policy, live-refresh policy, or subset version should be pinned from current official artifacts before score reuse.

License/access boundary: License and redistribution terms require artifact-level review unless explicitly recorded in official sources.

Contamination boundary: Public benchmark records can leak into future training data; live, hidden, or post-cutoff claims require versioned evidence.

Known failure modes to preserve during Review: public release, hidden/public split, judge/evaluator implementation, prompt/scaffold settings, and license can affect reuse.; Scores can change with prompt format, scaffold, evaluator version, hidden/public split, or dependency environment.; Evaluation-only evidence should not be reused as training reward without a separate feedback-contract audit.
