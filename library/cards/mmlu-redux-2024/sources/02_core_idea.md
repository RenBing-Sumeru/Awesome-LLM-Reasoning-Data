The one-sentence contribution is a manually re-annotated MMLU subset that turns suspected benchmark noise into inspectable defect records. The core mechanism is to sample MMLU test items, re-annotate them, classify error types, and release corrected or audited records as MMLU-Redux.

The evaluation surface is not just model accuracy; it is the quality of benchmark instances. The decisive feedback contract is human review under the paper's annotation protocol, plus the original answer-key scorer when evaluating model-score impact.

Closest comparisons are MMLU, MMLU-Pro, and benchmark-cleaning studies. The direction label is benchmark-quality audit: it treats the benchmark row, not the model output, as the main object under verification.
