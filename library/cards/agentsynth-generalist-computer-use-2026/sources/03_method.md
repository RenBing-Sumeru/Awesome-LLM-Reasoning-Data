1. **Step 1.** Generate simple, verifiable subtasks conditioned on a persona, desktop state, and available applications.
2. **Step 2.** Execute each subtask and preserve screen observations, actions, state changes, and outcomes.
3. **Step 3.** Use an independent summarizer to compose only executed subtask sequences into coherent long-horizon instructions.
4. **Step 4.** Validate each subtask and the composed goal, removing duplicates, state conflicts, and environment failures.
5. **Step 5.** Control difficulty through the number of composed subtasks, producing more than 6,000 tasks and trajectories.
