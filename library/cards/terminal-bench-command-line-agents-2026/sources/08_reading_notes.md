Read the paper first for the benchmark motivation, task-count claim, frontier-agent results, and error analysis. Then read the repository README and docs for the operational reality: installation, task format, dataset registry, CLI invocation, and leaderboard submission rules.

The most important detail to retain is that a Terminal-Bench score is a property of a full run configuration, not only of a model. Model name without harness version, dataset version, runtime, timeout, and adapter is not enough for comparison.

Unknowns to keep visible are task license details, exact public/private split policy, how future task additions map to paper-reported Terminal-Bench 2.0, and whether released traces include enough information for replay without leaking held-out tests.
