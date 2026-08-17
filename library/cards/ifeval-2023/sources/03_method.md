1. Inputs: the official prompt file, each prompt's instruction id list and keyword arguments, and a model response file with `prompt` and `response` fields.
2. Pipeline: the evaluator matches each instruction id to a checker, applies the checker to the response, records per-instruction pass/fail, and computes prompt-level success.
3. Outputs: strict and loose evaluation JSON plus aggregate metrics for prompt-level and instruction-level accuracy.
4. Feedback contract: rule-based Python checkers decide success; there is no learned reward model, no human preference judge, and no environment rollout.
5. Reproducibility notes: pin the google-research commit, input prompt file, instruction registry, normalization mode, response formatting, dependencies, and whether scores are strict or loose. Public data can be contaminated in later model training, so benchmark date matters.
