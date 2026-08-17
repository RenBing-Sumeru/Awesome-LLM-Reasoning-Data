Inputs include the task specification, environment or substrate state, context fields released with the benchmark, and the model or human action/answer surface.

1. Record multi-turn expert demonstrations on real websites.
2. Store screenshots, HTML/page context, action history, and target actions.
3. Select or rank relevant page elements for model input.
4. Train or evaluate next-action and navigation behavior under seen/unseen splits.

Outputs are 100K interactions, about 2300 expert demonstrations, more than 150 websites, action labels, and model comparisons. The verifier, reward, judge, or environment is: Offline action/navigation matching evaluates whether the model predicts the expert next action or trajectory step under the benchmark split. Reproduction requires pinning artifact release, split, evaluator or judge version, environment state, prompt/scaffold, action budget, and redistribution terms.
