1. **Evaluate long-horizon agents:** On the 731 public tasks, fix the scaffold, model version, maximum turns, and cost. Report Pass@1, environment failures, tokens or time, and results stratified by file count and patch size.

2. **Analyze failure trajectories:** Label logs as requirement misunderstanding, localization error, implementation error, insufficient testing, or budget exhaustion, and compare tools and planning methods rather than only final scores.

3. **Contamination control:** Compare public SWE-bench with Pro public and held-out performance to estimate effects of memorization and task length. Pro is not training data; repeated tuning on the public test invalidates contamination claims, and full reproduction cannot be claimed without private access.
