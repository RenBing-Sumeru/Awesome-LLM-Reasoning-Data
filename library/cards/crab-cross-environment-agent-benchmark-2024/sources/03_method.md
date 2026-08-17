1. Inputs: natural-language task, environment definitions, available Python actions, observations from Ubuntu/Android or other configured environments, and an agent communication setup.
2. Pipeline: define actions with decorators, bind them into environments, run the agent through unified environment interfaces, collect actions and observations, and evaluate graph nodes.
3. Outputs: episode trace, completion ratio, graph-evaluator node outcomes, and benchmark-level metrics.
4. Feedback: task-specific graph evaluators and environment checks provide success signals; model self-reports are not the verifier.
5. Reproducibility: pin CRAB repo version, `crab-benchmark-v0` task set, evaluator graph, Python/runtime dependencies, device or VM setup, communication setting, model, scaffold, API date, and time budget.
