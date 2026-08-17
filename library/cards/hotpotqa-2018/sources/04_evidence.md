The paper and official site describe about 113K Wikipedia-based QA examples and report baseline gaps in both answer prediction and supporting-fact identification. The decisive row-level evidence is not a free-form rationale: it is the match between predicted answer and gold answer plus match between predicted and gold supporting facts under the official script.

Aggregate leaderboard scores are bounded by the chosen setting, retrieval corpus, evaluator version, and prompt/scaffold policy. A high answer F1 without supporting-fact F1 does not prove evidence-grounded multi-hop behavior.
