1. Inputs: task definitions, legal texts, prompts, labels or targets, task metadata, and train/evaluation splits.
2. Pipeline: collect tasks from contributors or prior datasets, normalize them into repository task folders, define prompts and metrics, expose data through GitHub and Hugging Face, and evaluate models task by task.
3. Outputs: model predictions, per-task scores, and aggregate summaries over selected task sets.
4. Feedback: each task has its own scoring rule, such as classification accuracy, entailment correctness, extraction match, or generation evaluation; there is no single LegalBench-wide verifier.
5. Reproducibility: pin GitHub commit, Hugging Face revision, selected task list, task licenses, train/evaluation split, prompt format, evaluator implementation, decoding settings, and any few-shot examples.

LegalBench is evaluation-only in this Card. If tasks are repurposed as instruction-tuning examples, the downstream dataset should record contamination relative to LegalBench evaluation and preserve original task licenses.
