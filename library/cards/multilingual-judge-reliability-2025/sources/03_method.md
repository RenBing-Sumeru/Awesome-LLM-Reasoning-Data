1. Use five parallel datasets: XQuAD, MGSM, WMT23, WikiLingua and XDailyDialog; language is the intended varying factor.
2. Prompt GPT-3.5, GPT-4o, Gemini-2.0, Llama-3.3, Qwen-2.5 and Aya-Expanse for pointwise Yes/No and 1--5-grade verdicts.
3. Treat each language output as a rater and compute Fleiss' Kappa; accuracy/mean grade is a separate quality check.
4. Analyse resource level and model factors, then majority-vote Aya, Qwen and Llama as an ensemble.

Fix dataset versions, English prompt template, target-language marker, model snapshots and decoding settings; public code/data are unknown.
