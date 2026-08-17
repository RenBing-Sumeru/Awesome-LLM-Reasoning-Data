1. **Coverage boundary:** Controlled perturbations may be more local than real RAG failures and underrepresent missing retrieval, conflicting evidence, and long-context truncation.

2. **Feedback risk:** Human source labels and automatic perturbations may use different quality standards, so aggregate scores across eight slices require care.

3. **Reproduction and use:** Public pairs can contaminate judge training; deployment evaluation should retain private documents and new perturbations.
