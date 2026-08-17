Inputs include the task specification, environment or substrate state, context fields released with the benchmark, and the model or human action/answer surface.

1. Instantiate a compositional workplace task from atomic components.
2. Initialize the ServiceNow state and browser environment.
3. Run a human, model, or generated policy through browser actions.
4. Validate terminal state and retain trace provenance when available.

Outputs are 682 tasks, generated observation/action traces, task success records, and model/human comparison data. The verifier, reward, judge, or environment is: ServiceNow/BrowserGym validators decide success from the composed task state; generated traces are artifacts for training or analysis, not the final verifier by themselves. Reproduction requires pinning artifact release, split, evaluator or judge version, environment state, prompt/scaffold, action budget, and redistribution terms.
