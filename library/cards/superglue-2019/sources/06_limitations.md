Correctness is only correctness under the task labels and official metrics. A high SuperGLUE score does not prove robust language understanding outside the selected English NLU surfaces, and diagnostic scores do not exhaustively cover bias, reasoning, grounding, or adversarial behavior.

The benchmark is vulnerable to public-data contamination after release. Train/dev data and task descriptions are public, many underlying datasets are public, and later models may have seen examples or close paraphrases. Claims about post-release models need date-stamped release, training-data, and evaluation-policy evidence.

Reuse also depends on task-specific upstream terms. SuperGLUE aggregates several datasets with different origins and restrictions; the paper describes data-use and submission-frequency policies, but a new user still needs to check the current site, scorer, download files, and each task's license before redistribution, training use, or leaderboard comparison.
