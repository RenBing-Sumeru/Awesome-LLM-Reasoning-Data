Kvasir-VQA-x1 turns one to three atomic findings about the same endoscopy image into a coherent clinical question and naturalized answer while retaining complexity and source-QA provenance. Relative to the atomic Kvasir-VQA baseline, it makes an image, complexity, merged question, answer, original QA list, question classes, and image id the reusable target and uses trivial-item removal, structural checks, expert validation, and controlled visual perturbations as the quality contract, so its central contribution is multimodal instruction data rather than a benchmark-only score table.

Google Scholar citations: 18（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=Kvasir-VQA-x1%3A+A+Multimodal+Dataset+for+Medical+Reasoning+and+Robust+MedVQA+in+Gastrointestinal+Endoscopy&author=Sushant+Gautam&hl=en）

Open dataset: yes
Dataset name: Kvasir-VQA-x1
Official URL: https://huggingface.co/datasets/SimulaMet/Kvasir-VQA-x1
Scale: 159,549 QA pairs over 6,500 GI endoscopy images; 143,594 train and 15,955 test
Record form: image, complexity level, merged clinical question, naturalized answer, original atomic QA list, question classes, and image id
File / storage format: Parquet records with referenced JPG images; augmentation scripts generate transformed images and JSONL training manifests
Domains / languages: English gastrointestinal endoscopy and medical visual question answering
Construction and filtering: group atomic QAs by image, remove trivial items, sample one to three facts, use Qwen3-30B-A3B for merging and naturalization, enforce structured output, reject ambiguous compositions, and validate with clinical experts
License / access constraints: CC BY-NC 4.0; public and ungated, but commercial reuse is restricted
Intended use: medical VLM supervised fine-tuning, complexity-stratified evaluation, curriculum learning, and visual-perturbation robustness analysis
