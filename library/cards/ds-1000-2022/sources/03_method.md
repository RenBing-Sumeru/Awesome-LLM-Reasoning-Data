1. Inputs: a natural-language/code-context prompt, target library metadata, reference solution embedded in `code_context`, generated model code, and the official Python environment.
2. Pipeline: load the 1,000-problem list from Hugging Face or `data/ds1000.jsonl.gz`; prompt a model to assign the requested result variable; call `test_execution(solution)` to replace example inputs with generated cases and compare against reference outputs; then call `test_string(solution)` when a surface constraint exists.
3. Outputs: per-problem pass/fail, library-level means, overall accuracy, and optional prediction logs.
4. Verifier: the official test functions in `code_context`; accepted outputs are those passing both execution and string checks.
5. Reproducibility notes: pin the simplified 2024 format versus the original paper format, Python/library versions from `environment.yml`, independent-process execution for stateful TensorFlow and Matplotlib tasks, prompt format, and model decoding budget.
