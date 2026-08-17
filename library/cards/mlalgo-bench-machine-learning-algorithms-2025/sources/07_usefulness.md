1. **Evaluate ML coding agents:** Test algorithm implementation and practical solutions separately, reporting completion rate, relative performance, timeout rate, and resource cost rather than executability alone.

2. **Construct SFT data:** Organize specifications, reference code, execution results, and performance diagnostics into training records. Negative examples should distinguish syntax errors, leakage, inadequate performance, and timeouts.

3. **Train with execution feedback:** Agents can revise code from runtime errors and metrics, but training and evaluation must fix the maximum number of iterations and GPU time. The benchmark is unnecessarily expensive for ordinary function generation but provides a realistic verifier for research and AutoML agents.
