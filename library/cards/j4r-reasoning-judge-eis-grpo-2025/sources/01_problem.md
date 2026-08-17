An LLM judge may reverse its decision when the same two reasoning responses merely swap A/B positions, showing contamination from first-position, last-position, or output-format preferences. Standard pairwise training treats the two orders as independent examples and does not enforce stable judgments from equivalent initial states.

J4R builds ReasoningJudgeBench with order-swapped pairs and applies equivalent-initial-state group-relative optimization to train a position-robust reasoning judge.
