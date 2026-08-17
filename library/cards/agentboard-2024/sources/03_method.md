1. Inputs: a task from one of the nine environments, an initial observation, the available action interface, the chosen LLM agent scaffold, and metric definitions for final success and progress.
2. Pipeline: run the agent in the environment; parse each response into an action; execute the action; record observation, action, and environment feedback; stop at task completion, failure, max turns, or timeout; compute final and process metrics.
3. Outputs: trajectories, terminal success/failure, progress-rate or analogous process scores, and environment/model aggregate tables.
4. Verifier and judge: environment implementations decide state transitions and terminal success; progress metrics encode task-specific partial completion rather than relying only on a free-form LLM judge.

For reproducibility, the exact repository commit, 1,012-task snapshot, environment dependencies, action parsers, prompts, model versions, max turns, tool/API credentials, and failure handling rules must be recorded. A progress score is only comparable if the same decomposition of task progress is used.
