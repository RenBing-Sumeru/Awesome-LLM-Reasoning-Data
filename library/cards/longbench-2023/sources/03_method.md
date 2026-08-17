1. Inputs: long English and Chinese documents or code contexts, task prompts, questions, answer keys, class labels, and dataset metadata.
2. Pipeline: normalize source datasets into a common JSON-style schema, format task inputs for long-context models, run models under a fixed context budget, and score outputs with the task's metric.
3. Outputs: per-dataset scores, task-family averages, and optional efficient-evaluation subsets such as LongBench-E.
4. Feedback contract: the official metric decides success for each task; no single verifier covers all tasks.
5. Reproducibility notes: pin dataset version, split, language, context truncation policy, prompt template, model context window, decoding budget, metric implementation, and whether the full set or LongBench-E subset is used.
