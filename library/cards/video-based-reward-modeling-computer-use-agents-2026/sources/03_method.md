1. **Record executions.** Run agents in fixed desktop or web environments and save tasks, videos, actions, and outcomes.
2. **Synchronize video and actions.** Align frames with clicks, keystrokes, and UI responses and remove desynchronized samples.
3. **Create step negatives.** Extract real failure segments and perturb successful trajectories with wrong actions or early stops.
4. **Generate rewards.** Use environment outcomes for overall rewards and state transitions for step-negative verification.
5. **Create 53K data.** Remove missing frames, environment failures, privacy leaks, and duplicates.

The construction must pin source-data versions, trajectory generators, prompts, labelers or execution tools, filtering thresholds, and splits. Final records should retain tasks, screen recordings, action timestamps, outcome rewards, and step-level negative examples and provenance. Undisclosed budgets, randomness, or audit rates should remain unknown.
