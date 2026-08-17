1. Inputs: a task JSONL record containing long `context`, `input`, reference `answer`, and optional `options`, plus a model and prompt template.
2. Pipeline: load the task file, build a long-context prompt, run the model under a fixed inference setting, parse or keep the generated answer, and call the task-specific evaluator.
3. Outputs: model generations, per-task scores, and aggregate comparison tables across 12 tasks.
4. Feedback contract: accuracy, ROUGE F1, or rougeLsum depending on task; there is no environment state transition and no training-time reward in the benchmark itself.
5. Reproducibility notes: pin dataset release, Hugging Face snapshot, repository commit, tokenizer used for length accounting, prompt template, API/model version, max output budget, truncation policy, and evaluator library versions.
