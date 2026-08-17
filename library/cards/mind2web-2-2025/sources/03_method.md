Inputs include the task specification, environment or substrate state, context fields released with the benchmark, and the model or human action/answer surface.

1. Construct realistic deep-search tasks and separate public development from private test use.
2. Write tree-structured rubrics that separate answer content from source attribution.
3. Run agentic-search systems or human baselines under fixed task settings.
4. Score outputs with rubric-specialized judge agents and inspect error patterns.

Outputs are tasks, rubric trees, answers, source-attribution judgments, correctness judgments, and system-level metrics. The verifier, reward, judge, or environment is: Agent-as-a-Judge applies task-specific rubric trees to score answer correctness and source attribution; reported metrics include Partial Completion, Success Rate, and Pass@3. Reproduction requires pinning artifact release, split, evaluator or judge version, environment state, prompt/scaffold, action budget, and redistribution terms.
