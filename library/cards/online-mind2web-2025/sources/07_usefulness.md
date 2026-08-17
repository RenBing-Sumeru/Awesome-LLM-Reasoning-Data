**Directly supported uses**

- Evaluate web agents on maintained live-site tasks with human or WebJudge episode outcomes.
- Study action sequences, screenshot evidence selection, task executability, and judge disagreement when the corresponding submitted episode is retained.
- Train or analyze screenshot-relevance reward/verifier components in the specific WebJudge-7B setting based on Qwen2.5-VL-7B.

**Uses that require additional artifacts**

- Policy imitation or offline RL needs a licensed, complete corpus of successful and failed trajectories, including observations, factual actions, terminal labels, retries, and provenance. That corpus was not verified for all paper agents.
- Reproducible longitudinal evaluation needs pinned task revisions, browser/environment manifests, account and locale fixtures, website captures, and fixed evaluator versions.
- Benchmark training or leaderboard tuning needs a hidden or refreshed holdout and contamination controls; the public 300-task suite alone cannot provide those guarantees.

The metadata therefore keeps `training_use` at evaluation and reward modeling. Reward modeling refers specifically to the released WebJudge-7B screenshot-relevance component and its documented synthetic supervision, not to an inferred license or suitability for training a general browser policy.
