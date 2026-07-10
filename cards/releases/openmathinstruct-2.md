<!-- entry_id: openmathinstruct-2-accelerating-ai-for-math-with-massive-open-source-instruction-2024 -->
<!-- card_type: releases -->
# OpenMathInstruct-2: Accelerating AI for math with massive open-source instruction data

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=openmathinstruct-2-accelerating-ai-for-math-with-massive-open-source-instruction-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=openmathinstruct-2-accelerating-ai-for-math-with-massive-open-source-instruction-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=openmathinstruct-2-accelerating-ai-for-math-with-massive-open-source-instruction-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: programmatically_verifiable_outcome_data, data_construction_open_release_recipes, scaling_rlvr_test_time_compute
> Links: [📄 Paper](https://arxiv.org/abs/2410.01560) · [🏛️ OpenReview](https://openreview.net/forum?id=mTCbq2QssD) · [🐙 Code](https://github.com/NVIDIA-NeMo/Skills) · [🗂️ Data](https://huggingface.co/datasets/nvidia/OpenMathInstruct-2) · [🌐 Project](https://nvidia-nemo.github.io/Skills/releases/openmathinstruct2/)

## TL;DR

OpenMathInstruct-2 releases 14M math instruction-tuning problem-solution pairs generated with an open synthesis pipeline.

It is a major open math-data release for studying teacher strength, solution format, question diversity, and SFT scaling in reasoning models.

## 1. What is this work?

- Year / venue: 2024 · ICLR.
- Atlas role: data_release, construction_recipe, scaling_study.
- Domains: math, synthetic-data, instruction-tuning.
- Current status: verified.
- Why it belongs: Open math instruction-data release for synthetic solution generation, SFT, and dataset-construction ablations.

## 2. What data object does it expose?

- Prompt/source: GSM8K/MATH training problems plus augmented math questions produced by the data-generation pipeline.
- Trace/action author: Llama3.1-405B-Instruct and pipeline components generate solutions for original and augmented questions.
- Answer/artifact format: problem-solution pair with natural-language mathematical reasoning and final answer.
- Process fields:
- source problem, augmented problem, generated solution, teacher model, filtering metadata, dataset split.
- Environment or substrate: NVIDIA NeMo-Skills generation, training, and evaluation pipeline.
- Terminal predicate: fine-tuned model improves math benchmark performance under pinned evaluation settings.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic, mixed.
- Recorded verifier/reward/environment: answer checks and benchmark evaluation over math tasks.
- Supervision granularity: answer_level, step_level.

## 4. How is the data constructed?

- Base model: Llama-3.1-8B-Base is fine-tuned in reported experiments.
- Teacher: Llama3.1-405B-Instruct generates large-scale math solutions.
- Generator: NeMo-Skills pipeline performs problem/solution augmentation and model training.
- Filtering rule: paper studies solution verbosity, teacher quality, filtering tolerance, and question diversity.
- Sampling protocol: pin dataset version, augmentation mode, teacher model, and benchmark split.
- Inference budget: generation cost is dominated by teacher calls over hundreds of thousands of unique questions.
- Optimizer/scaffold: SFT over OpenMathInstruct-2 with evaluation through NeMo-Skills.

## 5. How can it enter post-training?

Recorded training/evaluation use: sft, distillation, evaluation.

Use it for math SFT and data-scaling studies after pinning the exact HF dataset and NeMo-Skills pipeline version.

## 6. What should readers audit?

- How many examples come from original GSM8K/MATH versus augmented questions?
- Are original benchmark training/test boundaries preserved?
- Can augmented questions drift toward evaluation examples?
- Which teacher and pipeline version produced each shard?
- Are licenses, data versions, model checkpoints, and evaluation prompts pinned before reuse?

## 7. What is missing or risky?

- Synthetic solutions can encode teacher shortcuts.
- Large scale can hide duplicated or near-duplicated questions.
- Verbose traces may hurt rather than help SFT.

## 8. Why it matters for post-training reasoning data

It is a major open math-data release for studying teacher strength, solution format, question diversity, and SFT scaling in reasoning models.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2410.01560) · [🏛️ OpenReview](https://openreview.net/forum?id=mTCbq2QssD) · [🐙 Code](https://github.com/NVIDIA-NeMo/Skills) · [🗂️ Data](https://huggingface.co/datasets/nvidia/OpenMathInstruct-2) · [🌐 Project](https://nvidia-nemo.github.io/Skills/releases/openmathinstruct2/)

- Data ID: `openmathinstruct-2-accelerating-ai-for-math-with-massive-open-source-instruction-2024`
- Citation status: verified
- Confidence: high
