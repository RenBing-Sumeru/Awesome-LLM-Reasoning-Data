General-Reasoner crawls broad questions, normalizes answer types, and uses a context-aware generative verifier to retain questions with scoreable answers. Relative to math-centric RL with exact-match verification, it changes the reusable target to id, question, answer, answer type, category, and difficulty and makes generative answer verification with chain-of-thought and context plus category and difficulty filters the feedback boundary, so the central contribution is Track 01 data rather than a model-only, verifier-only, or benchmark-only artifact.

Google Scholar citations: 121（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=General-Reasoner%3A+Advancing+LLM+Reasoning+Across+All+Domains&author=Xueguang+Ma&hl=en）

Open dataset: yes
Dataset name: WebInstruct-verified
Official URL: https://huggingface.co/datasets/TIGER-Lab/WebInstruct-verified
Scale: 228,736 training and 1,000 test question-answer records
Record form: id, question, answer, answer type, category, and difficulty
File / storage format: Parquet records
Domains / languages: English physics, chemistry, finance, electronics, mathematics, and broad web knowledge
Construction and filtering: curation models normalize questions and answers while a generative verifier reasons over equivalence; generative answer verification with chain-of-thought and context plus category and difficulty filters
License / access constraints: Apache-2.0
Intended use: multi-domain reasoning RL
