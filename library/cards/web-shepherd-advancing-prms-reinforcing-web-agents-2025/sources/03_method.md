1. **Run web agents.** Collect successful, failed, and interrupted trajectories in fixed environments.
2. **Split state–action steps.** Represent each step as observation, history, and action, with alternatives from the same state.
3. **Create checklists.** Evaluate progress, consistency, executability, and safety.
4. **Construct preferences.** Combine environment results, checklists, and strong judgments; remove unreplayable records.
5. **Separate train and evaluation.** Use the WebPRM collection for training and reserve WebRewardBench for evaluation.

The construction must pin source-data versions, trajectory generators, prompts, labelers or execution tools, filtering thresholds, and splits. Final records should retain page observations, same-state actions, checklists, process preferences, and terminal outcomes and provenance. Undisclosed budgets, randomness, or audit rates should remain unknown.
