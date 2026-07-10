<!-- entry_id: mammoth2-scaling-instructions-from-the-web-2024 -->
<!-- card_type: releases -->
# MAmmoTH2: Scaling Instructions from the Web

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=mammoth2-scaling-instructions-from-the-web-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=mammoth2-scaling-instructions-from-the-web-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=mammoth2-scaling-instructions-from-the-web-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: instruction_demonstration_rationale_data, data_construction_open_release_recipes, programmatically_verifiable_outcome_data, training_usage_optimization_objectives, scaling_rlvr_test_time_compute
> Links: [Paper](https://arxiv.org/abs/2405.03548) · [Code](https://github.com/TIGER-AI-Lab/MAmmoTH2) · [Data](https://huggingface.co/datasets/TIGER-Lab/WebInstructFull) · [Project](https://tiger-ai-lab.github.io/MAmmoTH2/) · [HF](https://huggingface.co/TIGER-Lab/MAmmoTH2-8x7B) · [DOI](https://doi.org/10.48550/arXiv.2405.03548)

## TL;DR

MAmmoTH2 builds WebInstruct by recalling web documents, extracting Q-A pairs, refining them, and training reasoning models.

It is a major web-scale instruction-data reference with provenance, license, benchmark-filtering, and teacher-refinement risks.

## 1. What is this work?

- Year / venue: 2024 · NeurIPS.
- Atlas role: data_release, construction_recipe, scaling_study, model_report.
- Track decision: Track 01 · Instruction tuning / SFT data.
- Domains: math, science, web_instruction, instruction_tuning.
- Current status: verified primary source; artifact verification is not over-claimed.

## 2. What data object does it expose?

- Prompt/source: Common Crawl documents recalled from educational and instructional web domains.
- Trace/action author: Extracted web answers refined by open-source LLMs.
- Answer/artifact format: Instruction-response or Q-A pair with optional explanation or refined answer.
- Process fields: question, answer, source, original_question, original_answer, index.
- Environment or substrate: Offline WebInstruct dataset and MAmmoTH2 SFT pipeline.
- Terminal predicate: Accepted instruction-response examples support reported training/evaluation performance.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: mixed, programmatic.
- Recorded verifier/reward/environment: Web recall/extraction/refinement filters plus benchmark answer checks; no per-example proof verifier.
- Supervision granularity: answer_level.

## 4. How is the data constructed?

- Base model: varies by experiment or primary work.
- Teacher: Web corpora plus Mixtral/Qwen-style refinement.
- Generator: Common Crawl recall, Q-A extraction, and LLM refinement pipeline.
- Filtering rule: Filter benchmark-containing pages and refine low-explanation answers.
- Sampling protocol: Top recalled web documents and educational domains; exact knobs need audit.
- Inference budget: unknown or task-dependent unless stated in the official source.
- Optimizer/scaffold: Supervised fine-tuning on WebInstruct and mixtures.

## 5. How can it enter post-training?

Recorded training/evaluation use: sft, evaluation.

Use this card to decide whether the work is a direct training-data source, a construction recipe, a feedback contract, or an audit lens. Do not treat benchmark gains as proof that the underlying data object is reusable without checking source mixture, split, license, and verifier details.

## 6. What should readers audit?

- Audit dominant websites and Common Crawl snapshots.
- Check benchmark-containing page filtering.
- Compare WebInstructSub and WebInstructFull licenses.

## 7. What is missing or risky?

- Full web provenance, recall thresholds, and rejection logs are not fully visible.
- NeurIPS proceedings URL was not pinned.

## 8. Why it matters for post-training reasoning data

It is a major web-scale instruction-data reference with provenance, license, benchmark-filtering, and teacher-refinement risks.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[Paper](https://arxiv.org/abs/2405.03548) · [Code](https://github.com/TIGER-AI-Lab/MAmmoTH2) · [Data](https://huggingface.co/datasets/TIGER-Lab/WebInstructFull) · [Project](https://tiger-ai-lab.github.io/MAmmoTH2/) · [HF](https://huggingface.co/TIGER-Lab/MAmmoTH2-8x7B) · [DOI](https://doi.org/10.48550/arXiv.2405.03548)

- Data ID: `mammoth2-scaling-instructions-from-the-web-2024`
- Citation status: verified
- Confidence: high for the primary source; artifact completeness remains partial unless listed above.
