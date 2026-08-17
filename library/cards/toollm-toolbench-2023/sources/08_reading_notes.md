Separate ToolBench as data, ToolLLaMA as trained model, and ToolEval as judge; evidence for one component does not automatically validate the others.

Read the official paper first, then inspect the repository or dataset release. Keep data construction, model training, evaluation harness, judge/verifier, and leaderboard numbers separate. If a license, split, snapshot, or judge version is not pinned, treat comparisons as provisional.
