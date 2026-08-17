1. **Fix repository environments.** Pin commits, dependencies, and tests for each SWE-Bench issue.
2. **Collect agent trajectories.** Record search, read, edit, patch, and test actions from multiple agents.
3. **Create step evidence.** Store test changes, static checks, patch applicability, and downstream progress.
4. **Generate labels.** Use executable signals when possible and judges for weakly verifiable actions; remove environment failures.
5. **Create the collection.** Store issue–state–action–evidence–reward records for PRM and RL use.

The construction must pin source-data versions, trajectory generators, prompts, labelers or execution tools, filtering thresholds, and splits. Final records should retain issue、repository state, tool actions, patches, test evidence, and step rewards and provenance. Undisclosed budgets, randomness, or audit rates should remain unknown.
