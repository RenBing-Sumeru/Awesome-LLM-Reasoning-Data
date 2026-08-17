GSM8K provides 8,792 grade-school math word problems and uses final numeric answer checking while studying verifier models. The primary sources are arXiv 2110.14168 and the openai/grade-school-math repository.

The concrete problem is how to evaluate and improve multi-step grade-school math reasoning with final-answer feedback and verifier-based selection. The decision boundary is math word-problem benchmark and verifier study, not a formal proof dataset or general calculator environment.

The data object or evaluation surface is 8,792 word problems with natural-language solutions and final numeric answers, split into 7,473 train and 1,319 test examples. This is useful for the atlas because it makes the feedback contract explicit: final-answer exact match after answer extraction; verifier models are trained and evaluated as selection signals.
