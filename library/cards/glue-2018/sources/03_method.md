Inputs are the task materials and metadata needed to form one record: nine English sentence or sentence-pair tasks, task labels, train/dev/test splits, metrics, leaderboard submissions, and a 1,100-example diagnostic set.

Pipeline: Package task inputs and labels; define train/dev/test splits; evaluate predictions with task-specific scorers; aggregate leaderboard scores; use diagnostic examples for linguistic analysis.

Outputs are scored benchmark records or evaluation summaries under this contract: task-specific metrics such as accuracy, F1, Matthews correlation, Pearson/Spearman, and macro aggregation. Reuse must pin source version, split, scorer or judge version, prompt/scaffold policy, runtime environment where relevant, and artifact license.
