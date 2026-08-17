Prior-work baseline: HumanEval/MBPP-style function completion, issue-text QA, and code generation without repository state.

What changes: The reusable object is an executable issue-to-patch task with repository state and tests. The quality signal is not a high leaderboard score alone; it is the combination of a defined object, an explicit feedback contract, and artifacts that can be pinned. Before reuse, inspect license, split, evaluator stability, contamination risk, and whether examples are evaluation-only or trainable data.
