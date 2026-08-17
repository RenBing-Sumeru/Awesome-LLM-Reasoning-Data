1. Inputs: scenario definitions, split/version metadata, prompt templates, model endpoints or checkpoints, decoding settings, and metric definitions.
2. Execution: generate standardized requests for each scenario, call each model through a model adapter, and store completions with run metadata.
3. Scoring: apply metric modules for task performance and cross-cutting concerns such as calibration, robustness, fairness, bias, toxicity, and efficiency.
4. Reporting: aggregate by scenario, metric, model, and scenario groups while retaining per-run provenance.
5. Outputs: model result tables, released code/configs, and an evolving public HELM interface.

The feedback contract is metric-specific scoring code, not a single judge. Reproducibility requires pinning HELM release, scenario list, model list, prompt templates, decoding parameters, metric implementation, API/model version, and leaderboard date.
