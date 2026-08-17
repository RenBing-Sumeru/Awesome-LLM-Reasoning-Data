Prior work to compare against includes BLEU/ROUGE-style metrics, learned NLG metrics, and simpler prompt-only LLM judges.

The new object is the evaluation contract itself: rubric text, judge model, CoT field, and scalar score become auditable metadata.

What is not new: Human-rated NLG evaluation and rubric scoring are not new; reuse must inspect judge model version, prompt leakage, score normalization, and target-task mismatch.
