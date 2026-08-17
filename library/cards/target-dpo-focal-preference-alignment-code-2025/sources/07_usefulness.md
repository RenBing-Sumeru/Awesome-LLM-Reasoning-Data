1. **Evaluation:** Train code DPO or reward models on CodeFlow so the model learns local repair rather than only whole-program ranking.

2. **Training:** Reuse iterative debugging to generate custom chosen/rejected pairs while retaining test logs, diffs, and stopping reasons for audit.

3. **Transfer or deployment:** Compare whole-code and focal DPO under controlled ablations; success should combine hidden-test pass rate with reductions in error categories.
