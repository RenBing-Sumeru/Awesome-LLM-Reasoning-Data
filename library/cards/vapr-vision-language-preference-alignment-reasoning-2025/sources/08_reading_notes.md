1. **One-sentence position:** VaPR starts from high-quality SFT ground-truth responses and asks a text LLM to modify only task-relevant spans, injecting targeted visual or reasoning errors while preserving length and style to create hard-negative preference pairs.

2. **Method takeaway:** Categorize retained samples into ten perception, attribute, spatial, counting, comparison, captioning, and related task types. Provide GPT-4o with the instruction, ground-truth response, and task type, editing only key semantic spans; use penalty lists for categories prone to repeated perturbations.

3. **Data takeaway:** The official VaPR-30K release has about 29.9K records under Apache-2.0, derived from a filtered LLaVA-665K subset.

4. **Evidence anchor:** A stratified human audit of 500 items finds 97% compliance with the hard-negative criteria and 86% annotator agreement.

5. **Reuse decision:** Use it directly for visual-reasoning DPO, especially spatial, counting, attribute, and binary-bias correction. The main risk is that chosen responses inherit errors or hallucinations from the source sft set and are not automatically corrected.
