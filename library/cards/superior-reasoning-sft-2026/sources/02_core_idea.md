Distribution-aligned sequence distillation selects and stages 435K teacher traces to reduce this mismatch before training a 4B reasoning student. Relative to standard token-level long-CoT distillation on larger corpora, it makes uuid, input problem, reasoning output, domain, and generation metadata the reusable target and uses sequence-level distribution alignment, answer checks, staged temperature sampling, and deduplication as the feedback contract, so Track 01 is the correct category.

Open dataset: yes
Dataset name: Superior-Reasoning-SFT-gpt-oss-120b
Official URL: https://huggingface.co/datasets/Alibaba-Apsara/Superior-Reasoning-SFT-gpt-oss-120b
Scale: 435K released long-CoT samples in low- and high-temperature stages
Record form: uuid, input problem, reasoning output, domain, and generation metadata
File / storage format: Parquet records
Domains / languages: English and Chinese mathematics, code, science, and general reasoning
Construction and filtering: gpt-oss-120b generates temperature-stratified long reasoning sequences; sequence-level distribution alignment, answer checks, staged temperature sampling, and deduplication
License / access constraints: CC-BY-4.0
Intended use: 4B long-CoT SFT distillation
