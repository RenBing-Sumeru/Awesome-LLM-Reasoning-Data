1. Inputs: a Python function signature, docstring prompt, and optional sampled completions from a code model.
2. Generation: the model emits code that should complete the function body or module fragment.
3. Execution: the harness imports or executes the generated solution in a constrained process and runs task-specific unit tests.
4. Output: each sample receives a pass/fail result; model-level results are summarized with pass@k.
5. Audit fields: task ID, prompt text, sample count, sampling temperature, timeout, dependency environment, evaluator commit, and whether tests are public, hidden, or modified.

The benchmark is evaluation-only unless a downstream project separately uses the prompts, solutions, or tests for training. Reproducibility requires pinning the official repository revision and execution-sandbox policy.
