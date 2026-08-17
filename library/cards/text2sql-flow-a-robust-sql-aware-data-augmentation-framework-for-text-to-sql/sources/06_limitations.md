1. **Execution equivalence:** A runnable query is not necessarily faithful to the question, and inequivalent SQL can coincidentally return the same result. Human audits or database perturbations are needed.

2. **Synthetic-language bias:** Model-generated questions and CoT may be templated or unnatural. Gains on real user queries require independent evidence.

3. **Database leakage:** Shared schemas or query skeletons across splits inflate generalization. Split and deduplicate by database and structural template.
