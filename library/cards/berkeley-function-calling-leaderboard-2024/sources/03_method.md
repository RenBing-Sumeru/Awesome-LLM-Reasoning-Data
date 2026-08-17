1. Inputs: a prompt, one or more function definitions, category metadata, optional prior turns, and a model response in a tool-call format.
2. Pipeline: normalize the response, parse the predicted function name/arguments, compare against expected structure or execute/check the call according to the category, and aggregate accuracy on the official leaderboard.
3. Outputs: parsed tool calls, pass/fail or category score, per-category accuracy, and overall leaderboard scores.
4. Verifier: official BFCL evaluators decide success through AST matching, executable checks, relevance checks, or scenario-specific predicates.
5. Reproducibility boundary: pin BFCL version, dataset release, evaluator commit, model adapter, provider API date, function-call format, multi-turn state, hidden/public split policy, and leaderboard snapshot date.
