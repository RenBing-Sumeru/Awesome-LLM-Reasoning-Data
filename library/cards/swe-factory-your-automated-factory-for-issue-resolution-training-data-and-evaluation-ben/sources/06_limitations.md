1. **Exit codes are not semantic oracles:** A command may return zero because no tests were discovered, tests were skipped, or the wrong entry point ran. The reported 100% grading accuracy applies to the authors’ sampled setting; test counts and case-level outcomes must be retained.

2. **Agent and model dependence:** Success rates and costs vary with models, prompts, memory pools, and iteration limits. Reported prices are not fixed production costs, and stage-specific failure distributions should be reported.

3. **Public-set scope:** The 2,809-task Gym is mainly Python, so the four-language construction experiment does not imply equal multilingual coverage. Per-repository licences, image drift, and train–evaluation overlap also require audits.
