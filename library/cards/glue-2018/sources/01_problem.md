GLUE is an ICLR 2019 multi-task NLU benchmark with nine English sentence and sentence-pair tasks plus a diagnostic set. The primary sources are arXiv 1804.07461, the ICLR 2019 status line, gluebenchmark.com, and GLUE-baselines.

The concrete problem is how to compare general NLU models across diverse tasks rather than optimizing only one dataset. The decision boundary is benchmark infrastructure and analysis platform, not a reasoning-specific training corpus.

The data object or evaluation surface is nine English sentence or sentence-pair tasks, task labels, train/dev/test splits, metrics, leaderboard submissions, and a 1,100-example diagnostic set. This is useful for the atlas because it makes the feedback contract explicit: task-specific metrics such as accuracy, F1, Matthews correlation, Pearson/Spearman, and macro aggregation.
