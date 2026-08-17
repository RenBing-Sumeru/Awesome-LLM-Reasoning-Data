1. **Environment pretraining:** Use filtered Docker tasks to teach agents repository exploration, editing, and testing loops, splitting by repository to prevent project-level leakage into evaluation.

2. **Trajectory SFT/RL:** Convert approximately 13K trajectories into observation–action–feedback records, use terminal tests and intermediate regressions as rewards, and retain failure types for unsuccessful trajectories.

3. **Internal environment factory:** Reuse the multi-agent Docker and evaluation-script synthesis pipeline for enterprise issues. With limited budgets, prioritize repositories with mature CI; tasks with private dependencies, unclear licences, or unstable tests should not enter a public release.
