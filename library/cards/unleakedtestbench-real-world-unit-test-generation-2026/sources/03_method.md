1. **Extract real functions:** Collect functions, dependencies, and original tests from public Python repositories, removing cases that cannot execute in isolation or lack stable oracles.

2. **Control difficulty and leakage:** Select functions with higher cyclomatic complexity and construct ULT using temporal, duplicate-content, and test-visibility controls; build PLT as a leaked-test counterpart.

3. **Run generated tests:** Place model-produced pytest code in isolated environments and record syntax, import, execution, and assertion outcomes.

4. **Score multiple dimensions:** Compute accuracy, statement and branch coverage, and mutation score. Reproduction must fix repository commits, dependency locks, timeouts, mutation tools, and model knowledge cutoffs.
