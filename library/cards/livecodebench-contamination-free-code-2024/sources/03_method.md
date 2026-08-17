1. Inputs: newly released contest or platform problems, statements, reference tests or judge data, buggy submissions or partial code where scenario requires them, and model outputs.
2. Pipeline: scrape or collect tasks after a cutoff, normalize metadata, derive scenarios, format prompts, run candidate model answers, and evaluate them under the official harness.
3. Outputs: scenario-specific item records, generated code or answers, pass/fail or accuracy scores, and leaderboard aggregates.
4. Feedback contract: code generation and repair are accepted by execution against tests; execution and output-prediction scenarios are accepted by exact or normalized output matching.
5. Reproducibility notes: pin problem source, release date, benchmark version, hidden/public tests, language/runtime, timeout, pass@k setting, prompt format, dependency image, and evaluator commit.
