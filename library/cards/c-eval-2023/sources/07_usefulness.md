Use C-Eval as a static Chinese exam benchmark and as a schema reference for answer-key evaluation. Preserve question id, subject, level, split, prompt template, options, official answer, model raw output, normalized option, correctness, and evaluation date.

For atlas work, C-Eval is useful as a multilingual benchmark surface with a simple verifier. It is also a contamination checklist item: any Chinese-capable model evaluation should report whether C-Eval records were seen during pretraining, instruction tuning, benchmark tuning, or eval-set selection.
