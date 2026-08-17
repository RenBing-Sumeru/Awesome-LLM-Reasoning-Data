- Independent candidate-success events are a simplifying assumption; correlated errors are common in sampled reasoning traces.
- Exact direction optimality assumes meaningful groups and equal PRM scores within each direction. DORA's soft embeddings only approximate this condition.
- Semantic similarity may merge logically different solutions or separate paraphrases of the same flawed strategy.
- PRM and embedding errors interact: a mis-scored but unique branch can attract budget, while a correct redundant-looking branch can be suppressed.
- Integer rounding and any residual-budget correction are implementation details that must be checked against the released code.
- Evaluation is math-only with three 1B-3B policy models and one math PRM; broader domains and larger reasoning models are untested.
- Weighted majority voting introduces an additional PRM-dependent decision layer.
- The repository lacks raw traces, matrices, allocations, votes, seeds, hardware manifests, decontamination evidence, and a tagged immutable release. Benchmark gains do not validate individual rollout quality.

