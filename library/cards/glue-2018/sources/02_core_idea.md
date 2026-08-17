The one-sentence contribution is a shared benchmark and leaderboard that made cross-task transfer a standard NLU evaluation target.

The core mechanism is collect existing NLU datasets, normalize submission format, define per-task metrics, aggregate scores, and add diagnostic analysis. The object being scored is nine English sentence or sentence-pair tasks, task labels, train/dev/test splits, metrics, leaderboard submissions, and a 1,100-example diagnostic set, and the feedback contract is task-specific metrics such as accuracy, F1, Matthews correlation, Pearson/Spearman, and macro aggregation.

The closest comparisons are single-task NLU datasets and later SuperGLUE-style harder suites. Its direction label is evaluation-surface and feedback-contract curation rather than generic dataset summarization.
