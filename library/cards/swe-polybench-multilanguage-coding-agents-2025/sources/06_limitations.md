1. **Distribution imbalance:** JavaScript contributes 1,017 tasks while Python has only 199, and repositories and task types are also uneven. Aggregate scores are dominated by large groups, so macro, per-language, and per-repository results should all be reported.

2. **Structural-metric assumption:** The gold patch is not the only correct implementation. An agent may edit different files or nodes and still pass tests, yet receive poor localization precision or recall. Structural metrics are diagnostic and cannot replace execution outcomes.

3. **Tests and environments:** The benchmark lacks long-tail tasks, tests do not measure maintainability, security, or style, and containerization can constrain major structural changes. Reuse should add human quality review, full suites, and fixed repository and parser versions.
