# Usefulness

- **Multimodal data builder:** reuse the Group A/B/C triage, category prompts, and Yes/No visual-consistency gate to expand terse internal VQA records; output a source-linked SFT mixture and report acceptance rates by category.
- **SFT researcher:** train against the released 10M single-image and 2M one-vision manifests, then compare original-only, rewrite-only, and mixed schedules under a fixed model and budget.
- **Do not use when:** upstream media rights cannot be resolved, provenance cannot be retained, or a same-model rewrite/filter loop is unacceptable without independent audit.
