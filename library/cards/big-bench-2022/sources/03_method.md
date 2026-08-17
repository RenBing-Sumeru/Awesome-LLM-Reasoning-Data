1. Inputs: a task definition from the repository, examples, prompts, targets or choices, task metadata, and the model interface.
2. Pipeline: load the task, construct prompts according to the harness, collect model predictions or probabilities, apply the task scorer, and aggregate task and suite metrics.
3. Outputs: per-example model outputs, task scores, normalized/aggregate statistics, and scaling analyses across model families.
4. Verifier: the task's official scoring function or answer key decides success; no universal judge covers all tasks.
5. Reproducibility boundary: pin repository commit, task subset, prompt template, few-shot policy, model/API version, decoding settings, scorer implementation, and contamination screen.
