Inputs include the task specification, environment or substrate state, context fields released with the benchmark, and the model or human action/answer surface.

1. Initialize the website and task configuration.
2. Provide text plus visual/page observations to the agent.
3. Execute browser actions through the allowed interface.
4. Score the final page state or answer with task-specific checks.

Outputs are 910 new visual tasks, browser traces, observations, configuration files, and model-level success results. The verifier, reward, judge, or environment is: Execution-based tests and visually grounded task metrics check whether the final page state or answer satisfies the task. Reproduction requires pinning artifact release, split, evaluator or judge version, environment state, prompt/scaffold, action budget, and redistribution terms.
