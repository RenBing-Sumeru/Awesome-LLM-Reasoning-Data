1. **Repair-trajectory SFT:** Train coding agents from repository states, test logs, search and edit actions, and final patches. Split by repository and separately evaluate localization, patch application, and full-suite success.

2. **Process-reward research:** Turn test changes or error logs after tool calls into step-level feedback and compare success-only training with mixtures including failed trajectories. Independent tests must remain the terminal oracle.

3. **Pipeline transfer:** Reuse coverage localization, function rewriting, failure confirmation, agent repair, and execution acceptance on Python projects with stable tests. Repositories without tests, defects requiring external services, or requirement-level changes cannot provide reliable verification through this pipeline.
