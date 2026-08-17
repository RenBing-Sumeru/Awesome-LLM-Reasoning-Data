1. **Source programmatically:** Select merged pull requests explicitly linked to issues from active GitHub repositories, filtering by maintenance activity, testing framework, modification size, licences, and related criteria.

2. **Synthesize environments:** Restore base commits, parse CI and dependencies, and generate reproducible environment configurations. Tasks with unstable builds or tests are rejected.

3. **Extract test oracles:** Compare test results before and after patches and derive fail-to-pass/pass-to-pass sets from test changes. Only instances that fail at base, pass with gold, and introduce no regressions enter quality assurance.

4. **Audit and generate trajectories:** Check issue–patch consistency, test constraints, and difficulty. Strong-model failures are converted into executable trajectories through progressive hints. Public records retain task metadata, although the full pool and some training assets are not entirely released.
