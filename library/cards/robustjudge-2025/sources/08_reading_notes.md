1. Position: the paper audits whether LLM judges keep their verdicts under adversarial manipulation, rather than improving clean judging quality.

2. Lever: a common protocol applies 15 attacks, then seven defenses, and records verdict change plus clean-utility cost across models and templates.

3. Artifact: the official RobustJudge repository releases the framework and data; reproduce with its exact templates and versioned APIs.

4. Evidence anchor: prompt-template variation changes robustness by up to 40%, and Alibaba PAI testing found new vulnerabilities.

5. Reuse decision: use it for pre-deployment judge red teaming; first add task-specific attacks and rerun both clean and attacked controls.
