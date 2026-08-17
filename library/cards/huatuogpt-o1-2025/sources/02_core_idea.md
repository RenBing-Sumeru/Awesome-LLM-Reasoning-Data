HuatuoGPT-o1 filters medical exams into 40K verifiable problems, distills complex traces for half, and uses the remaining half for answer-reward RL. Relative to SFT on original exam questions or simple CoT followed by conventional RL, it makes medical problem, complex reasoning trace, final response, language, and source split the reusable target and uses known multiple-choice answers, contamination filtering, failed-attempt limits, and rule rewards as the feedback contract, so Track 01 is the correct category.

Google Scholar citations: 62（checked 2026-07-27；https://scholar.google.com/scholar_lookup?title=Towards+Medical+Complex+Reasoning+with+LLMs+through+Medical+Verifiable+Problems&author=Junying+Chen&hl=en）

Open dataset: yes
Dataset name: medical-o1-reasoning-SFT
Official URL: https://huggingface.co/datasets/FreedomIntelligence/medical-o1-reasoning-SFT
Scale: 40K verifiable medical problems, with 20K complex-CoT SFT examples and 20K RL problems
Record form: medical problem, complex reasoning trace, final response, language, and source split
File / storage format: Parquet records in English and Chinese configs
Domains / languages: English and Chinese medical examination reasoning
Construction and filtering: GPT-4o searches and writes complex reasoning for the SFT half; known multiple-choice answers, contamination filtering, failed-attempt limits, and rule rewards
License / access constraints: Apache-2.0
Intended use: medical CoT SFT followed by verifiable RL
