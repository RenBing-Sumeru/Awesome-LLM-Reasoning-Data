OpenCodeInstruct scales multiple generation algorithms to five million pairs and stores unit tests, execution status, and model judgments beside each solution. Relative to code instruction sets without per-record tests or quality metadata, it changes the reusable target to id, input, output, domain, generation algorithm, LLM judgment, unit tests, and execution status and makes unit-test execution, execution-status fields, LLM quality judgments, and seed curation the feedback boundary, so the central contribution is Track 01 data rather than a model-only, verifier-only, or benchmark-only artifact.

Google Scholar citations: 54（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=OpenCodeInstruct%3A+A+Large-scale+Instruction+Tuning+Dataset+for+Code+LLMs&author=Wasi+Uddin+Ahmad&hl=en）

Open dataset: yes
Dataset name: OpenCodeInstruct
Official URL: https://huggingface.co/datasets/nvidia/OpenCodeInstruct
Scale: 5 million code instruction-response pairs
Record form: id, input, output, domain, generation algorithm, LLM judgment, unit tests, and execution status
File / storage format: Parquet records
Domains / languages: English code generation, debugging, algorithms, and programming questions
Construction and filtering: large language models generate instructions, solutions, tests, and quality judgments; unit-test execution, execution-status fields, LLM quality judgments, and seed curation
License / access constraints: CC-BY-4.0
Intended use: code SFT for Llama and Qwen families
