1. **Identify saturated prompts:** Run the current policy multiple times and select source problems with near-one pass rates, low standalone learning value, and reliable verifiers.

2. **Compose prompts:** Sample multiple subproblems within one domain or across mathematics, logic, and related domains, then create a unified instruction and explicit multi-part output format.

3. **Compose verifiers:** Preserve each subproblem’s reference answer and checker, parse the model output, and judge components individually; reward is issued only when all or the specified aggregate conditions hold.

4. **Apply curriculum RL:** Begin with fewer subproblems, increase composition depth and cross-domain complexity as the policy improves, and update sampling according to success rates.
