1. **Open SWE-agent SFT:** Train 7B–32B models on successful trajectories from the contamination-controlled subset, hold out repositories, and report Pass@1 under a fixed OpenHands or SWE-agent scaffold.

2. **Hybrid verification:** Sample multiple patches, run independent tests and an execution-free scorer, and select through calibrated rank fusion. Report Best@N, execution counts, and verifier false positives.

3. **Environment synthesis:** Reuse SYNGEN on repositories with commit histories and containerizable tests. Refactoring-only commits, behavior changes invisible to tests, or external-service dependencies cannot guarantee valid back-translated issues and should be reviewed or excluded.
