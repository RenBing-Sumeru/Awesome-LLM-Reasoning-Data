MedSSR controls question synthesis with rare-disease knowledge, lets the policy produce pseudo-labels, and combines self-supervised with human-anchored reinforcement learning. Relative to proprietary-teacher CoT distillation followed by standard RL, it makes medical prompt, retrieved rare-disease knowledge, model-generated reasoning, answer, and reward metadata the reusable target and uses medical answer rewards, pseudo-label confidence, human-annotated real data, and two-stage RL as the feedback contract, so Track 01 is the correct category.

Google Scholar citations: 0（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=Eliciting+Medical+Reasoning+with+Knowledge-enhanced+Data+Synthesis%3A+A+Semi-Supervised+Reinforcement+Learning+Approach&author=Haolin+Li%2C+Shuyang+Jiang%2C+Ruipeng+Zhang%2C+Jiangchao+Yao%2C+Ya+Zhang%2C+Yanfeng+Wang&hl=en）

Open dataset: yes
Dataset name: MedSSR-Synthetic-43K
Official URL: https://huggingface.co/datasets/tdlhl/MedSSR-Synthetic-43K
Scale: 43K synthetic medical reasoning records
Record form: medical prompt, retrieved rare-disease knowledge, model-generated reasoning, answer, and reward metadata
File / storage format: Parquet records
Domains / languages: English and Chinese medical QA with emphasis on rare diseases
Construction and filtering: the policy model generates pseudo-label reasoning instead of relying only on a proprietary teacher; medical answer rewards, pseudo-label confidence, human-annotated real data, and two-stage RL
License / access constraints: Apache-2.0
Intended use: medical reasoning SFT and semi-supervised RL
