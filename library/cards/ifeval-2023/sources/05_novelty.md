Prior instruction-following evaluation relied heavily on human ratings, pairwise preference, or LLM-as-judge scoring. IFEval changes the unit of evidence to a prompt with declared, executable instruction constraints and checker arguments.

The novelty is not that it invents rule-based testing in general; the new contribution is packaging a focused instruction-following benchmark where the scorer is transparent enough for per-row audit. The direction signal is useful for benchmark design: choose tasks whose success predicate can be inspected before using them as feedback.

Before reuse, inspect the exact instruction list, any loose-normalization choices, prompt leakage risk, model response formatting, license terms, and whether the downstream claim requires semantic judgment that IFEval does not provide.
