1. **Mine repair PRs:** Select real hardware bugs from six projects and parse patches, issues, and relevant tests.

2. **Construct reproducers:** Use existing tests, minimal testbenches, or full-system software paths so the buggy revision fails reliably.

3. **Validate reference fixes:** Apply ground-truth patches and run native build, simulation, and regression flows in containers, confirming fail-to-pass behavior.

4. **Evaluate agents:** Provide issues and repositories while hiding fixes, apply candidate patches, and execute tests. Reproduction must fix images, EDA licences, random seeds, timeouts, and submodules.
