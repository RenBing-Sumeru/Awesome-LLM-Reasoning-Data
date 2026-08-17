The one-sentence contribution is a structured LLM evaluator that turns task criteria into judge prompts and score fields.

The core mechanism is task-specific rubrics, CoT prompting, score extraction, and correlation analysis against human ratings. The object being scored is a NLG task input, candidate output, evaluation criterion, CoT form-filling judge response, score-token distribution, and scalar GPT-4 score, and the feedback contract is scalar LLM-judge scores validated by correlation with human ratings.

The closest comparisons are BLEU/ROUGE-style metrics, learned NLG metrics, and simpler prompt-only LLM judges. Its direction label is evaluation-surface and feedback-contract curation rather than generic dataset summarization.
