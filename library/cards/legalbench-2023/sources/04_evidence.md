The official Hugging Face card states that LegalBench has 162 tasks from 40 contributors, all in English, with task types including binary classification, multi-class classification, extraction, generation, and entailment. The GitHub repository supplies granular task descriptions and licensing pointers.

The decisive row-level evidence is task-specific: a prediction must match the label, class, extracted value, generated target, or entailment answer according to that task's metric. Aggregate LegalBench scores are only summaries over a selected task set and should not be read without the task mixture.

The evidence boundary is open legal-task benchmarking. LegalBench provides a broad benchmark surface, but the correctness of each row depends on the original source data, any transformation done by contributors, and the evaluator for that specific task.
