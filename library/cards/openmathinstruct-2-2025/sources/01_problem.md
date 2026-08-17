The official ICLR proceedings record identifies this as an **ICLR 2025** conference paper; arXiv:2410.01560 first appeared in 2024. This Card uses the confirmed conference publication year, 2025, and grounds the release analysis in the 33-page paper and appendices, the pinned Hugging Face dataset card and size manifest, the NVIDIA model collection, and the official NVIDIA-NeMo/Skills construction, training, evaluation, and majority-aggregation artifacts.

The concrete problem is how to scale open mathematical reasoning SFT data while separating several variables that are often bundled together: solution format, teacher capacity, answer filtering, question diversity, number of demonstrations, and student scale. OpenMathInstruct-2 studies these choices and then builds a public GSM8K/MATH-derived release with Llama-3.1-405B-Instruct as the teacher.

One released row contains exactly four strings:

| Field | Meaning |
|---|---|
| `problem` | Original or augmented math question |
| `generated_solution` | Teacher-written worked solution used as the SFT target |
| `expected_answer` | Source ground truth for original questions, or the most frequent extracted answer among 32 teacher solutions for augmented questions |
| `problem_source` | `gsm8k`, `math`, `augmented_gsm8k`, or `augmented_math` |

The exact public `train` split contains **13,972,791 rows**. This is a row/pair count, not an exact count of distinct questions. Appendix A.3, Table 5 reports rounded component totals of 607.3K unique questions and 13.97M question-solution pairs; the exact integer unique-question count is not disclosed. The `train_1M`, `train_2M`, and `train_5M` configurations are overlapping fair-downsampled subsets of `train`, not another eight million independent rows or validation/test splits.

This belongs in **Data Construction & Open Release Recipes** because it exposes two augmentation branches, answer aggregation, format/length filtering, decontamination, subset construction, and SFT recipes. It is not a process-supervision, preference, RLVR, or interactive-agent release: the public object has no step labels, preference pairs, reward, action state, or environment trajectory, and SFT is the only directly evidenced training use.

The Card reaches L4 through complete bilingual analysis and verified official artifacts. That level does not erase the release boundary: rows omit seed IDs and revisions, teacher revisions, candidate sets, vote margins, rejection reasons, contamination judgments, and per-row license/attribution. The current Skills repository also reconstructs the recipe from a 2026 revision rather than a confirmed immutable historical manifest of the 2024 data build.
