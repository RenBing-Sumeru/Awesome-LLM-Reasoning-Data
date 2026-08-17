1. **Response collection:** Responses from multiple models and human authors are gathered for long-form question-answering tasks, preserving variation in quality and coverage.
2. **Initial decomposition:** A standard fact decomposer converts each answer into candidate atomic claims.
3. **Fact refinement:** Missing subjects, coreference, conditions, and cross-sentence relations are detected, and the minimum necessary context is restored.
4. **Missing-fact discovery:** The original answer is revisited to identify important claims omitted by the initial decomposition and add them to the fact set.
5. **Reference-fact construction:** Facts expected for each question are compiled from strong-model and human answers to form FactRBench, after which precision and recall are computed separately.
