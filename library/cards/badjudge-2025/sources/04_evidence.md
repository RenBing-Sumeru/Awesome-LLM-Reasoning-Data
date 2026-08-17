Claim — small, realistic poisoning can make an LLM judge favor an adversary while preserving apparently normal behavior.

Setup — Mistral-7B-Instruct-v0.2 was fine-tuned as a 1–5 judge on Feedback-Collection; a Llama-3-8B candidate emitted triggers. The study compares minimal, partial, and full evaluator access and reports attack success rate (ASR), score, and clean accuracy.

Result — under full access with a rare-word trigger, the adversary’s score rose from 1.51 to 4.9/5 and ASR from 0 to 93.8%; model merging reduced that ASR to 0 while clean accuracy changed from 45.0 to 53.8. At 10% poisoning, a toxicity judge misclassified toxic prompts as non-toxic 89% of the time and a RAG reranker put a poisoned document first 97% of the time.

Boundary — the estimates rely on simulated access, selected models, triggers, and datasets; they show a concrete risk, not prevalence in deployed services.

The clean metric is agreement with GPT-4o-mini rather than human labels, which is a further limitation on interpreting normality.
