# 08 Reading Notes

Read the abstract and task construction sections first: the benchmark is about false beliefs that appear in human text, not about generic ignorance. Then read the scoring sections carefully because generation, MC1, MC2, truthfulness, and informativeness answer different questions.

The important conceptual move is that scaling can improve many NLP metrics while reducing truthfulness on prompts whose likely web-text continuation is false. That makes the benchmark a warning about imitation objectives and a useful audit surface for models trained on public text.

When comparing modern systems, assume contamination is possible unless the report provides concrete evidence. A useful score report should include source version, prompt, answer mode, scorer, judge model or human protocol, and whether the model had access to public benchmark examples.
