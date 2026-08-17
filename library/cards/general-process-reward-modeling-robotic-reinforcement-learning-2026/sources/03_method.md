1. **Collect robot trajectories.** Cover multiple robots, views, and precision tasks with successful, failed, and partial executions.
2. **Split transitions.** Represent trajectories as observation–action–next-state records with goals and stages.
3. **Compute progress.** Use distance, pose, contact, and substage completion, with visual or human judging when needed.
4. **Create negative transitions.** Use real regressions and controlled action, time, or goal perturbations.
5. **Clean and separate evaluation.** Remove sensor failures and conflicts and keep the benchmark separate.

The construction must pin source-data versions, trajectory generators, prompts, labelers or execution tools, filtering thresholds, and splits. Final records should retain task goals, state transitions, actions, progress scores, and negative transitions and provenance. Undisclosed budgets, randomness, or audit rates should remain unknown.
