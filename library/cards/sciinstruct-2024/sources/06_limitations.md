# Limitations

- **Author-stated boundary:** final-answer consistency cannot detect every invalid intermediate step, and OCR can damage questions or source solutions; audit worked steps rather than trusting the outcome label.
- **Curator audit risk:** GPT-4 generates, critiques, and judges many traces, while the learned classifier is trained on outputs from related models; stratify errors by source, teacher, language, and reflection stage.
- **Curator audit risk:** records expose subject but not per-instance source or stage provenance; establish source/license keys, semantic deduplication, and train-test overlap evidence before redistribution or benchmark use.
