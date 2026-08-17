1. **Define task states.** Represent each task with an initial state, goal, and executable actions.
2. **Generate structured plans.** Use teachers or search to propose subgoals, branches, and backtracking.
3. **Execute the world model.** Predict or simulate transitions and compare them with the environment or rules.
4. **Label process outcomes.** Mark valid transitions positive and invalid, dead-end, or mispredicted transitions negative.
5. **Create SWAP_v2.** Remove incomplete or duplicate plans and preserve full planning traces.

The construction must pin source-data versions, trajectory generators, prompts, labelers or execution tools, filtering thresholds, and splits. Final records should retain initial states, subgoal structures, actions, state transitions, and verification results and provenance. Undisclosed budgets, randomness, or audit rates should remain unknown.
