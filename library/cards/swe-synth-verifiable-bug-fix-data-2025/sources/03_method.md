1. **Select repositories and targets:** Build environments for stable commits from seven Python projects and use coverage tracing to locate functions or classes executed by tests.

2. **Synthesize faulty implementations:** Remove a target body and ask Qwen2.5-Coder-32B to reimplement it from context. Reinsert the output, discard syntax or compilation failures and versions that still pass all tests, and retain bugs that fail at least one test.

3. **Run a repair agent:** Give MoatlessTool the repository, failing tests, and truncated logs. Qwen2.5-Coder-32B performs multi-round localization and editing with deterministic and stochastic attempts.

4. **Verify and store:** Apply candidate patches and run associated tests. Only trajectories passing all relevant tests enter the successful set, while failed processes can also be retained. Reproduction requires fixed commits, test selection, log truncation, sampling rounds, and containers.
