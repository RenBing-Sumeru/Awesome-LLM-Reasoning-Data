Read the dataset sections before the model-results table. The central distinction is PQA-L versus PQA-U versus PQA-A; mixing them hides the difference between expert labels, no labels, and heuristic labels.

Keep three claims separate: exact label match, biomedical explanation quality, and clinical usefulness. PubMedQA directly measures only the first one. Any claim about the other two needs extra evidence.

For downstream comparison, report the subset, split, prompt/input format, whether the conclusion is excluded, and the scorer. A higher aggregate score is not a row-level proof of biomedical correctness.
