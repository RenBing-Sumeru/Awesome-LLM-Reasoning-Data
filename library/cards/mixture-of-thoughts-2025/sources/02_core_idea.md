Mixture-of-Thoughts selects teachable prompts and packages teacher reasoning from several domains into a source-labeled conversation mixture. Relative to unfiltered long-chain distillation, it changes the reusable target to messages, token count, and source and makes prompt teachability, complexity and diversity selection, source-level checks, and downstream training evaluation the feedback boundary, so the central contribution is Track 01 data rather than a model-only, verifier-only, or benchmark-only artifact.

Google Scholar citations: 141（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=Phi-4-reasoning+Technical+Report&author=Marah+Abdin&hl=en）

Open dataset: yes
Dataset name: Mixture-of-Thoughts
Official URL: https://huggingface.co/datasets/open-r1/Mixture-of-Thoughts
Scale: 349,317 reasoning traces across mathematics, code, and science
Record form: messages, token count, and source
File / storage format: Parquet records
Domains / languages: English mathematics, coding, science, planning, and algorithmic reasoning
Construction and filtering: o3-mini and related reasoning teachers generate detailed demonstrations; prompt teachability, complexity and diversity selection, source-level checks, and downstream training evaluation
License / access constraints: no aggregate license is declared; every upstream source term must be preserved
Intended use: Phi-4-reasoning SFT
