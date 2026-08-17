Inputs include the task specification, environment or substrate state, context fields released with the benchmark, and the model or human action/answer surface.

1. Initialize the ServiceNow instance and task seed.
2. Expose browser observations and actions through BrowserGym.
3. Let an agent execute the workplace workflow.
4. Validate the final business state with task predicates or database checks.

Outputs are 33 task types, WorkArena-L1 instance sets including 19,912 unique instances in the GitHub README, browser traces, validation outputs, and model/human comparisons. The verifier, reward, judge, or environment is: BrowserGym tasks call task-specific validate functions that return reward, stop, message, and info based on ServiceNow state and predicates. Reproduction requires pinning artifact release, split, evaluator or judge version, environment state, prompt/scaffold, action budget, and redistribution terms.
