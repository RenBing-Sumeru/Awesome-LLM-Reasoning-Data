ShareGPT4V first collects 100K detailed GPT-4V descriptions, trains Share-Captioner on them, and then generates a 1.2M dense-caption expansion used before visual instruction tuning. The closest comparison is LLaVA and caption mixtures built from short COCO-style text; unlike that neighbor, the primary object here is ShareGPT4V and the feedback boundary is caption consistency checks and downstream multimodal benchmark scores, which makes this an instruction/demonstration data paper rather than a model-architecture-only entry.

Google Scholar citations: 1270（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=ShareGPT4V%3A+Improving+Large+Multi-Modal+Models+with+Better+Captions&author=Lin+Chen&hl=en）

Open dataset: yes
Dataset name: ShareGPT4V
Official URL: https://huggingface.co/datasets/Lin-Chen/ShareGPT4V
Scale: 100,000 GPT-4V captions for SFT and a 1.2M-caption pretraining expansion
Record form: image id, dense factual caption or visual question, and assistant target
File / storage format: JSON/Parquet metadata with image references and dense captions
Domains / languages: dense-caption supervision for visual instruction tuning; see the official data card for exact language and domain splits
Construction and filtering: 100K images captioned by GPT-4V, followed by a captioner that expands supervision to 1.2M images; GPT-4V for seed captions and Share-Captioner for scale-up; selection uses caption consistency checks and downstream multimodal benchmark scores
License / access constraints: official dataset-card terms; source images retain their original licenses
Intended use: multimodal pretraining followed by instruction SFT
