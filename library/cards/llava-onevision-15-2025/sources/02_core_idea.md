LLaVA-OneVision-1.5 releases a 22M instruction mixture and an efficient full training stack, separating the instruction stage from its 85M mid-training corpus and 67K RL set. Relative to closed or partially disclosed frontier multimodal training recipes, it makes record id, image reference, ordered user/assistant conversations, and data-source label the reusable target and uses source-specific checks, mixture balancing, decontamination, and benchmark ablations as the feedback contract, so Track 01 is the correct category.

Open dataset: yes
Dataset name: LLaVA-OneVision-1.5-Instruct-Data
Official URL: https://huggingface.co/datasets/mvp-lab/LLaVA-OneVision-1.5-Instruct-Data
Scale: 22M curated multimodal instruction samples
Record form: record id, image reference, ordered user/assistant conversations, and data-source label
File / storage format: multi-config Parquet/JSON conversations plus referenced images
Domains / languages: multilingual image, document, chart, OCR, grounding, STEM, and visual reasoning tasks
Construction and filtering: source annotations and model-generated conversations are normalized into one dialogue contract; source-specific checks, mixture balancing, decontamination, and benchmark ablations
License / access constraints: Apache-2.0 for the release; upstream media terms still apply
Intended use: full-model multimodal SFT before optional RL
