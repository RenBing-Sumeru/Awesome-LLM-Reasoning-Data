1. **Select repositories and pull requests:** Choose active, CI-enabled, buildable projects with clear issue–PR links and collect merged pull requests, base commits, fix diffs, and added tests.

2. **Build containers:** Install language toolchains and dependencies from CI files, documentation, and build scripts. Pin commits and verify that original tests run in Docker.

3. **Perform three-state verification:** Execute the base, test-patch-only, and gold-fix-plus-test-patch configurations. Retain at least one `ANY→FAILED→PASSED` F2P test and reject regressions with `ANY→PASSED→FAILED` or ambiguous states.

4. **Expert review and release:** Sixty-eight annotators inspect issues, patches, tests, and environments, with cross-review yielding 1,632 tasks. A further 4,723 RL instances are released through the same pipeline. Reproduction requires fixed images, toolchains, test commands, and annotation versions.
