1. Inputs: CTF task descriptions, starter files, challenge environments, optional subtask definitions, and an agent scaffold.
2. Episode loop: the agent receives the task, issues shell or scaffold-specific actions, observes command outputs, and iterates until timeout, budget exhaustion, or flag submission.
3. Subtask evaluation: intermediate checks mark progress on steps that may be easier than a full solve.
4. Outputs: final flag success/failure, subtask completion, action transcript, command outputs, and model/scaffold metadata.
5. Feedback contract: terminal commands and challenge services provide observations; the final predicate is flag correctness under the Cybench evaluator.
6. Reproducibility notes: pin Docker/container images, task version, scaffold, model version, search access policy, budget, timeout, flag leakage fixes, and leaderboard date.
