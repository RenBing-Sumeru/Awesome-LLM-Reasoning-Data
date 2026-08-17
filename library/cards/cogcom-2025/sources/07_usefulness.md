# Usefulness

- **Multimodal data builder:** reuse the plan-execute-search-serialize recipe to turn image QA into demonstrations with explicit boxes, text, derived images, and calculations. Success requires gains over answer-only data under matched examples, tokens, backbone, and training settings.
- **Trace auditor:** stratify released records by source, operation, object size, and automatic versus expert authorship; replay operations where possible and report step accuracy, golden-answer coincidence, fallback, and unexecutable-call rates.
- **Do not use when:** source-image rights cannot be reconciled, the task lacks stable answer normalization, or visual operations cannot be independently replayed; then neither redistribution nor the claimed evidence chain can be defended.
