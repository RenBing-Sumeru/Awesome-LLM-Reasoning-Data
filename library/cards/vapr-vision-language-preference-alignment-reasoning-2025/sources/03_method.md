1. **Build the source pool:** Filter LLaVA-665K to remove text-only, MCQ, bounding-box, OCR, and other unsuitable records, and balance Yes/No answers.

2. **Generate or reorganize feedback:** Categorize retained samples into ten perception, attribute, spatial, counting, comparison, captioning, and related task types.

3. **Verify and filter:** Provide GPT-4o with the instruction, ground-truth response, and task type, editing only key semantic spans; use penalty lists for categories prone to repeated perturbations.

4. **Train and evaluate:** Human-audit a stratified sample, form 30K chosen/rejected pairs, and apply DPO to LLaVA, Qwen2-VL, and Qwen2.5-VL families.
