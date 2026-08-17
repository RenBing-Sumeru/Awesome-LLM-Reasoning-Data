Inputs include task instructions plus the current observation from offline real-website action traces with HTML snapshots across many sites. The pipeline exposes an agent action space, records intermediate observations or states, and returns final outputs for scoring. Outputs are task-level success, model traces, and artifact files when released.

The verifier/reward/judge contract is offline action matching and element-selection evaluation over recorded page states. Training or evaluation use is recorded as evaluation, audit, agent_training; trajectory-bearing releases can be used for supervised or diagnostic study only after license, split, and leakage checks.

Artifacts to verify: paper, NeurIPS page, project page, code repository, and Hugging Face dataset are linked. Reproducibility notes should pin code version, benchmark split, site snapshot or live-web date, prompt/scaffold, browser backend, evaluator revision, and dependency environment.
