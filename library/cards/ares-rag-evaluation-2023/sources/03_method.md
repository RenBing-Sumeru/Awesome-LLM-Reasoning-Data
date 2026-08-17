1. Inputs: an in-domain passage set, at least a small set of few-shot query-answer examples, RAG-system query-document-answer outputs, and about 150 or more human-labeled validation examples for the target criteria.
2. Synthetic generation: FLAN-T5 XXL generates questions and answers from passages; retrieval and negative sampling create positive and negative triples.
3. Judge training: separate binary classifiers are fine-tuned for context relevance, answer faithfulness, and answer relevance.
4. Evaluation: the judges label unlabeled triples from each RAG system, and PPI combines these predictions with validation labels to estimate system-level scores and confidence intervals.
5. Outputs: criterion scores, confidence intervals, and rankings of RAG configurations. Reproducibility depends on the passage corpus, few-shot prompts, synthetic generator, judge checkpoint, RAGAS/versioned baselines, validation labels, and PPI alpha.
