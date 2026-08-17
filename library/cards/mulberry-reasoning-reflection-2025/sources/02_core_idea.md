# Core idea

Mulberry replaces single-policy rationale generation with a four-model search collective that proposes complete continuations, jointly scores intermediate nodes, and serializes both a successful path and selected negative-to-positive transitions for SFT. The primary object is a trainable multimodal rationale target, the collective node score plus final-answer correctness is the feedback contract, and MCTS is the construction substrate rather than the released record's category.

Google Scholar citations: 201（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=Mulberry%3A+Empowering+MLLM+with+o1-like+Reasoning+and+Reflection+via+Collective+Monte+Carlo+Tree+Search&author=Huanjin+Yao&hl=en）

Open dataset: yes  
Dataset name: Mulberry-SFT / Mulberry-260K  
Official URL: https://huggingface.co/datasets/HuanjinYao/Mulberry-SFT  
Scale: 260K multimodal instruction records; 15K source questions are sampled for reflection-path training  
Record form: `images` plus role/content `messages`; assistant targets contain an image description, rationales, numbered reasoning steps, and a final answer  
File / storage format: `mulberry_sft.json` plus `mulberry_images.tar`, with ShareGPT field mapping documented by the release  
Domains / languages: English mathematics, charts/documents, science, medical images, natural-world VQA, and general visual understanding  
Construction and filtering: GPT-4o, Qwen2-VL-7B, Llama-3.2-11B-Vision-Instruct, and Qwen2-VL-72B expand and score a reasoning tree; low-score branches are pruned and correct paths are retained  
License / access constraints: public Apache-2.0 release; underlying image/question datasets retain source-specific terms  
Intended use: multimodal SFT, rationale/reflection distillation, tree-search analysis, and data-quality audit
