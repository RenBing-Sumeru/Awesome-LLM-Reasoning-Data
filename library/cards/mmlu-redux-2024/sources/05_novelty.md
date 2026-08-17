The prior baseline was treating MMLU's released answer key as the fixed ground truth and debating only model performance. MMLU-Redux changes the object of scrutiny: it audits the benchmark rows and releases a corrected/re-annotated subset.

The direction signal is that benchmark maintenance needs defect records, not only harder questions. The quality signal is a public row-level artifact with error labels and a reported estimate of how many original MMLU questions are defective.

What is not new: manual annotation, answer-key scoring, and benchmark cleaning already existed. Before reuse, inspect annotator instructions, agreement or adjudication policy, category definitions, sample representativeness, license, and whether downstream evaluation drops bad rows or uses corrected labels.
