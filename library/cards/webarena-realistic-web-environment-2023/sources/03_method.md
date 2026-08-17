Inputs include the task specification, environment or substrate state, context fields released with the benchmark, and the model or human action/answer surface.

1. Restore the website service and seeded state.
2. Give the agent a natural-language goal plus browser access.
3. Record browser actions and observations.
4. Run the final validation program on the resulting site state.

Outputs are task success, browser trajectories, final site state, validation output, and model/human comparisons. The verifier, reward, judge, or environment is: Functional correctness validators and annotated programs grade whether the final website state satisfies the task. Reproduction requires pinning artifact release, split, evaluator or judge version, environment state, prompt/scaffold, action budget, and redistribution terms.
