This is an evaluator-reliability audit: it treats pairwise verdicts as a preference graph rather than as independent contests against one baseline. Non-transitive cycles explain baseline-sensitive AlpacaEval rankings; round-robin evidence plus Bradley--Terry aggregation produces a more stable external ranking. No official dataset release is identified; the linked software implements the evaluation procedure.

The core shift is to retain all comparisons before estimating relative strength. Bradley--Terry converts wins into latent scores, while Swim selectively approximates information from exhaustive play. The feedback contract remains the LLM judge's preference; the safeguard is to expose its inconsistency instead of assuming it away. The official software is a reproducibility artifact, not a separately released benchmark dataset.

It is an audit layer above an existing judge, not a replacement for one.
