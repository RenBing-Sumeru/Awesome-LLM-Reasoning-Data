1. **Unleaked is not absolute:** Temporal and search controls cannot prove that every model has never seen the code; leakage must be re-audited for each model’s training cutoff.

2. **Python function-level scope:** ULT excludes repository state, services, concurrency, and other languages, so it does not represent full software testing.

3. **Tool-dependent metrics:** High coverage does not imply correct assertions, and mutation scores depend on mutant types. Original-test pass rates, false positives, and equivalent-mutant handling should also be reported.
