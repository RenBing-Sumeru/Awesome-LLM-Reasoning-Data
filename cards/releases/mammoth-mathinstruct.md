<!-- entry_id: mammoth-building-math-generalist-models-through-hybrid-instruction-tuning-2023 -->
<!-- card_type: releases -->
# MAmmoTH: Building Math Generalist Models through Hybrid Instruction Tuning

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=mammoth-building-math-generalist-models-through-hybrid-instruction-tuning-2023&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=mammoth-building-math-generalist-models-through-hybrid-instruction-tuning-2023&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=mammoth-building-math-generalist-models-through-hybrid-instruction-tuning-2023&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: instruction_demonstration_rationale_data, programmatically_verifiable_outcome_data, data_construction_open_release_recipes
> Links: [Paper](https://arxiv.org/abs/2309.05653) · [Code](https://github.com/TIGER-AI-Lab/MAmmoTH) · [Data](https://huggingface.co/datasets/TIGER-Lab/MathInstruct) · [Project](https://tiger-ai-lab.github.io/MAmmoTH/) · [HF](https://huggingface.co/TIGER-Lab/MAmmoTH-7B) · [DOI](https://doi.org/10.48550/arXiv.2309.05653)

## TL;DR

MAmmoTH releases MathInstruct, a hybrid CoT/PoT math instruction mixture for supervised math reasoning.

It exposes how rationale type, annotation source, tool/program substrate, and subset license all affect reuse of math reasoning data.

## 1. What is this work?

- Year / venue: 2023 · arXiv.
- Atlas role: data_release, construction_recipe, model_report.
- Track decision: Track 01 · Instruction tuning / SFT data.
- Domains: math, instruction_tuning, chain_of_thought, program_of_thought.
- Current status: verified primary source; artifact verification is not over-claimed.

## 2. What data object does it expose?

- Prompt/source: MathInstruct compiled from 13 math datasets.
- Trace/action author: Human, Llama, GPT-4, and newly curated rationales depending on subset.
- Answer/artifact format: Math instruction with CoT or PoT rationale and final answer.
- Process fields: dataset_name, rationale_type, annotation_source, problem_field, solution_trace, final_answer.
- Environment or substrate: Offline math instruction tuning plus PoT/Python-style evaluation.
- Terminal predicate: Final answer correctness or executable program fallback during evaluation.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic, mixed.
- Recorded verifier/reward/environment: Math answer scoring and PoT executability where applicable; not a universal step verifier.
- Supervision granularity: answer_level, step_level.

## 4. How is the data constructed?

- Base model: varies by experiment or primary work.
- Teacher: MathInstruct source datasets and mixed rationale authors.
- Generator: Curated hybrid CoT/PoT data pipeline.
- Filtering rule: Subset-specific validation; some generated subsets require extra audit.
- Sampling protocol: Curated mixture over 13 datasets.
- Inference budget: unknown or task-dependent unless stated in the official source.
- Optimizer/scaffold: Supervised instruction tuning.

## 5. How can it enter post-training?

Recorded training/evaluation use: sft, evaluation.

Use this card to decide whether the work is a direct training-data source, a construction recipe, a feedback contract, or an audit lens. Do not treat benchmark gains as proof that the underlying data object is reusable without checking source mixture, split, license, and verifier details.

## 6. What should readers audit?

- Audit which subsets are human, model-generated, validated, or unvalidated.
- Check per-subset licenses and train/evaluation overlap.
- Separate CoT, PoT, model-size, decoding, and benchmark-familiarity effects.

## 7. What is missing or risky?

- Exact decontamination and validation rules vary by source subset.
- Some generated rationales remain weaker than step-verified process data.

## 8. Why it matters for post-training reasoning data

It exposes how rationale type, annotation source, tool/program substrate, and subset license all affect reuse of math reasoning data.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[Paper](https://arxiv.org/abs/2309.05653) · [Code](https://github.com/TIGER-AI-Lab/MAmmoTH) · [Data](https://huggingface.co/datasets/TIGER-Lab/MathInstruct) · [Project](https://tiger-ai-lab.github.io/MAmmoTH/) · [HF](https://huggingface.co/TIGER-Lab/MAmmoTH-7B) · [DOI](https://doi.org/10.48550/arXiv.2309.05653)

- Data ID: `mammoth-building-math-generalist-models-through-hybrid-instruction-tuning-2023`
- Citation status: verified
- Confidence: high for the primary source; artifact completeness remains partial unless listed above.
