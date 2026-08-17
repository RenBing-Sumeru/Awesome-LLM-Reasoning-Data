NATURALREASONING scales domain-diverse question generation, attaches reference answers and named teacher responses, and exposes those records for distillation or self-training. Relative to math- and code-only distillation corpora, it changes the reusable target to question, reference_answer, and a list of response and response_model pairs and makes question-quality judgments, reference-answer checks, reward-model scoring, and self-reward filtering the feedback boundary, so the central contribution is Track 01 data rather than a model-only, verifier-only, or benchmark-only artifact.

Google Scholar citations: 66（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=NATURALREASONING%3A+Reasoning+in+the+Wild+with+2.8M+Challenging+Questions&author=Weizhe+Yuan&hl=en）

Open dataset: yes
Dataset name: NATURALREASONING
Official URL: https://huggingface.co/datasets/facebook/natural_reasoning
Scale: 2.8 million questions with reference answers and teacher responses
Record form: question, reference_answer, and a list of response and response_model pairs
File / storage format: Parquet records
Domains / languages: English STEM, economics, social science, and other natural-domain reasoning
Construction and filtering: Llama-3.3-70B-Instruct and other named teacher models write long responses; question-quality judgments, reference-answer checks, reward-model scoring, and self-reward filtering
License / access constraints: CC-BY-NC-4.0
Intended use: reasoning SFT, knowledge distillation, and filtered self-training
