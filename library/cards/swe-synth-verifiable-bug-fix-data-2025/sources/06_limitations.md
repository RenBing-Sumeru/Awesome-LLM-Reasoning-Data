1. **Narrow repository scope:** The paper uses only seven Python projects, limiting code styles, test frameworks, and dependencies. Function rewrites differ from cross-module configuration, concurrency, or requirement defects. Evaluation should hold out repositories and align synthetic defects with real issue types.

2. **Successful-trajectory bias:** Only bugs the agent can solve enter positive SFT, favoring easy-to-localize tasks with clear tests. Difficult signals disappear if failures are ignored. Solve rates by defect type and trajectory budgets per task should be reported.

3. **Test adequacy:** Passing associated tests may overfit a local suite; without full P2P or hidden tests, regressive patches can remain. Reuse should rerun the full suite and distinguish the paper’s 9,459/3,018 statistics from the actual row count of a public snapshot.
