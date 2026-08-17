1. **One-sentence position:** ContextualJudgeBench constructs about 2,000 difficult context-grounded response pairs across RAG and summarization and eight evaluation slices, using existing human annotations and controlled model perturbations to create verifiable conditional labels for faithfulness, completeness, and related criteria.

2. **Method takeaway:** Apply controlled omissions, contradictions, and unsupported additions to construct a worse candidate on the target contextual criterion. Form eight task/criterion slices, filter ambiguous pairs, and retain context, candidates, labels, and generation provenance.

3. **Data takeaway:** The official dataset contains about 2K records, each with a source context, request or query, two candidate responses, an evaluation criterion, and a chosen label, plus RAG/summarization source and perturbation metadata.

4. **Evidence anchor:** Across 18 evaluated models, even o1 achieves only about 55% consistent accuracy, indicating that the contextual hard pairs are not saturated.

5. **Reuse decision:** Evaluate RAG and summarization judges for faithfulness, completeness, and actual use of context. The main risk is that controlled perturbations may be more local than real rag failures and underrepresent missing retrieval, conflicting evidence, and long-context truncation.
