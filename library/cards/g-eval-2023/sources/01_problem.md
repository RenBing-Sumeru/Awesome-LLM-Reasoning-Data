G-Eval uses GPT-4 chain-of-thought form filling as an auditable scalar judge for NLG outputs. The primary sources are ACL Anthology EMNLP 2023 main paper, arXiv 2303.16634, and the nlpyang/geval repository.

The concrete problem is whether open-ended NLG outputs can be scored by a rubric-conditioned GPT-4 judge that aligns better with human ratings than reference-only automatic metrics. The decision boundary is judge and evaluation-surface curation, not a new NLG dataset, executable verifier, or reward-model training release.

The data object or evaluation surface is a NLG task input, candidate output, evaluation criterion, CoT form-filling judge response, score-token distribution, and scalar GPT-4 score. This is useful for the atlas because it makes the feedback contract explicit: scalar LLM-judge scores validated by correlation with human ratings.
