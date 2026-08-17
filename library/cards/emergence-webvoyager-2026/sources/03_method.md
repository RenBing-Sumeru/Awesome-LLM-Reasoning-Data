Inputs include task instructions plus the current observation from WebVoyager-style tasks with transparency and consistency checks for web-agent evaluation. The pipeline exposes an agent action space, records intermediate observations or states, and returns final outputs for scoring. Outputs are task-level success, model traces, and artifact files when released.

The verifier/reward/judge contract is task success checks plus consistency and transparency audit criteria. Training or evaluation use is recorded as evaluation, audit; trajectory-bearing releases can be used for supervised or diagnostic study only after license, split, and leakage checks.

Artifacts to verify: paper, code repository, and task directory are linked. Reproducibility notes should pin code version, benchmark split, site snapshot or live-web date, prompt/scaffold, browser backend, evaluator revision, and dependency environment.
