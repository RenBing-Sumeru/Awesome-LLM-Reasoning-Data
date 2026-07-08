<!-- entry_id: openthoughts3-2025 -->
<!-- card_type: releases -->
# OpenThoughts: Data recipes for reasoning models

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=openthoughts3-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=openthoughts3-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=openthoughts3-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: data_construction_open_release_recipes, frontier_reports_data_disclosure_ledger
> Links: [📄 Paper](https://arxiv.org/abs/2506.04178) · [🐙 Code](https://github.com/open-thoughts/open-thoughts) · [🤗 Hugging Face](https://huggingface.co/datasets/open-thoughts/OpenThoughts3-1.2M)

## TL;DR

OpenThoughts studies open data recipes for reasoning models through large public reasoning datasets and many controlled pipeline experiments.

It is one of the most useful open references for how question sourcing, filtering, teacher traces, and answer generation choices change downstream reasoning performance.

## 1. What is this work?

- Year / venue: 2025 · arXiv.
- Atlas role: data_release, construction_recipe.
- Domains: math, code, science.
- Current status: verified.
- Why it belongs: Core open reasoning-data recipe for moving from proprietary reasoning corpora toward reproducible public data pipelines.

## 2. What data object does it expose?

- Prompt/source: public math, code, science, and reasoning question sources.
- Trace/action author: teacher/generator models produce reasoning traces and answers.
- Answer/artifact format: question, generated reasoning trace, final answer, filtering metadata.
- Process fields: source, generation recipe, acceptance filter, ablation setting.
- Environment or substrate: offline open reasoning-data pipeline.
- Terminal predicate: verifier/filter acceptance and downstream benchmark performance.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: mixed programmatic and model/filter-based checks.
- Recorded verifier/reward/environment: controlled data-generation and filtering experiments.
- Supervision granularity: trace_level and answer_level.

## 4. How is the data constructed?

- Base model: open reasoning models trained from the released data.
- Teacher: generator/teacher models used to produce traces.
- Generator: data pipeline samples answers and reasoning traces.
- Filtering rule: recipe-specific quality and correctness filters.
- Sampling protocol: controlled ablations over pipeline steps.
- Inference budget: generation budget is part of the data recipe.
- Optimizer/scaffold: SFT and recipe evaluation against reasoning benchmarks.

## 5. How can it enter post-training?

Recorded training/evaluation use: sft, distillation.

Use it as a reproducible recipe map, not just a dataset count; the ablations are the valuable part for future corpus construction.

## 6. What should readers audit?

- Which question sources dominate gains?
- Which filters reject useful hard examples?
- Are teacher models and prompts disclosed?
- Are ablation settings reproducible?
- Are released traces licensed and decontaminated?

## 7. What is missing or risky?

- Open teacher traces can still import hidden benchmark artifacts.
- Recipe changes may not transfer across model families.
- Large public corpora can be reused without preserving provenance.

## 8. Why it matters for post-training reasoning data

It is one of the most useful open references for how question sourcing, filtering, teacher traces, and answer generation choices change downstream reasoning performance.

The reusable lesson is to identify the feedback-bearing record: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2506.04178) · [🐙 Code](https://github.com/open-thoughts/open-thoughts) · [🤗 Hugging Face](https://huggingface.co/datasets/open-thoughts/OpenThoughts3-1.2M)

- Data ID: `openthoughts3-2025`
- Citation status: verified
- Confidence: high
