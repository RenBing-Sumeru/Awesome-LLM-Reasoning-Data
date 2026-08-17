1. **TDD-agent SFT:** Train models on partial repositories, stage tests, and gold modifications for incremental development, splitting by complete repository to avoid leakage between neighboring stages.

2. **Process rewards:** Run relevant tests at every step and use newly passed tests, regressions, and final full-suite results as layered rewards, recording edit–execute–repair trajectories.

3. **Reuse data generation:** Apply dynamic tracing and RDG ordering to internal repositories to obtain stage tasks automatically. Projects dominated by end-to-end, GUI, or human acceptance tests require integration environments and additional verifiers because unit-test-driven construction is insufficient.
