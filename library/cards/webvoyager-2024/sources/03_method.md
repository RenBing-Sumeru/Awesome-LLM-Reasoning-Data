Inputs include the task specification, environment or substrate state, context fields released with the benchmark, and the model or human action/answer surface.

1. Compile web tasks across popular websites.
2. Let the agent observe screenshots and interact with the browser.
3. Collect final answers and action traces.
4. Use GPT-4V evaluation and human checks to judge task success.

Outputs are 643 task queries across 15 websites, additional GAIA-derived browsing tasks, action traces, final answers, automatic judgments, and model success rates. The verifier, reward, judge, or environment is: A GPT-4V-based automatic evaluator judges success from the task, responses, and recent screenshots, with optional human inspection and reported human-agreement calibration. Reproduction requires pinning artifact release, split, evaluator or judge version, environment state, prompt/scaffold, action budget, and redistribution terms.
