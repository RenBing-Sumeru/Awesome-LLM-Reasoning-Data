1. **Multimodal SFT/RLVR:** Train from image, question, and reference answer with normalized-answer rewards, and separately report missing-visual, OCR, and computation errors.

2. **Visual-coverage studies:** Bucket by image type and knowledge point and compare text-only, shuffled-image, and full inputs to verify that gains do not come from prompt shortcuts.

3. **Dataset auditing:** Reuse deduplication and answer-parsing procedures for new visual-math corpora. Add symbolic verifiers or human rubrics for proofs and open-ended tasks.
