1. **Build retrieval tasks.** Collect questions, answers, and a fixed corpus index.
2. **Generate agent trajectories.** Record query reformulation, retrieval, evidence selection, answering, and tool outputs.
3. **Create same-state actions.** Sample alternative retrieval, evidence, or answer actions and execute them.
4. **Generate two feedback types.** Create step preferences from relevance and downstream success while preserving outcome rewards.
5. **Clean and release.** Remove retrieval failures, leakage, and unreplayable trajectories.

The construction must pin source-data versions, trajectory generators, prompts, labelers or execution tools, filtering thresholds, and splits. Final records should retain queries, retrieval actions, evidence, process preferences, and outcome rewards and provenance. Undisclosed budgets, randomness, or audit rates should remain unknown.
