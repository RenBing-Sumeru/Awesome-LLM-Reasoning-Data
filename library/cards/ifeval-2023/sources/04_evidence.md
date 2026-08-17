The paper reports 25 types of verifiable instructions and around 500 prompts, and the official repository publishes data plus evaluator code. The decisive row-level evidence is not an aggregate leaderboard number; it is the checker result for each declared instruction on a concrete response.

The paper also reports example evaluations on two widely available LLMs, showing that the benchmark can expose instruction-following failures without human review. Those numbers are bounded by the released prompt set, the exact checker implementation, and the prompt/response wrapper used for the model run.

Audit boundary: a pass means the response satisfied the implemented predicates. It does not certify factual correctness, usefulness, safety, semantic equivalence, or compliance with instructions that were not encoded as verifiable constraints.
