1. **Task design:** An eight-category Chinese question taxonomy is created, including long-tail knowledge, mathematics, coding, and logic, from which 1,000 open-ended queries are selected.

2. **Criterion writing:** Reasonable solutions are analyzed for each question. Required conclusions are decomposed into primary and secondary scoring points, with factual, reasoning, or formatting deductions.

3. **Response collection:** Models of different capability levels generate candidate answers, producing a broad quality distribution.

4. **Human annotation:** Reviewers apply the question-specific rubric item by item, yielding supervised records with scoring evidence.

5. **Evaluator training:** Queries, responses, rubrics, and human scores train an evaluator, which is compared with fixed-rubric and direct-scoring methods.

**Reproducibility information:** The official data and code are public, although the full human cost and consistency controls for rubric writing should be reassessed when adapting the pipeline.
