AM-Distilled unifies 1.4 million R1 responses and routes math, code, and other tasks through answer checks, execution, or reward-model review. Relative to the non-public 800K distillation set used by DeepSeek-R1-Distill, it changes the reusable target to chat messages containing a user problem and a distilled long reasoning response and makes reference-answer matching for math, executable tests for code, and reward-model review for other domains the feedback boundary, so the central contribution is Track 01 data rather than a model-only, verifier-only, or benchmark-only artifact.

Google Scholar citations: 53（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=1.4+Million+Open-Source+Distilled+Reasoning+Dataset+to+Empower+Large+Language+Model+Training&author=Han+Zhao&hl=en）

Open dataset: yes
Dataset name: AM-DeepSeek-R1-Distilled-1.4M
Official URL: https://huggingface.co/datasets/a-m-team/AM-DeepSeek-R1-Distilled-1.4M
Scale: 1.4 million bilingual reasoning traces
Record form: chat messages containing a user problem and a distilled long reasoning response
File / storage format: Parquet records
Domains / languages: Chinese and English mathematics, code, science, and general reasoning
Construction and filtering: primarily DeepSeek-R1 writes long reasoning responses; reference-answer matching for math, executable tests for code, and reward-model review for other domains
License / access constraints: CC-BY-NC-4.0
Intended use: reasoning SFT and distillation
