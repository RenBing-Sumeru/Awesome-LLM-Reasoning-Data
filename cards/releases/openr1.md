<!-- entry_id: openr1-math-220k-2025 -->
<!-- card_type: releases -->
# OpenR1-Math-220k

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=openr1-math-220k-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=openr1-math-220k-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=openr1-math-220k-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: instruction_demonstration_rationale_data, programmatically_verifiable_outcome_data, data_construction_open_release_recipes, training_usage_optimization_objectives, scaling_rlvr_test_time_compute, frontier_reports_data_disclosure_ledger
> Links: [Code](https://github.com/huggingface/open-r1) · [Data](https://huggingface.co/datasets/open-r1/OpenR1-Math-220k)

## TL;DR

OpenR1-Math-220k releases a large math reasoning corpus distilled from DeepSeek-R1 over NuminaMath 1.5 problems.

It matters for Track 01 because each record serializes a math problem, final answer, and multiple teacher reasoning traces before those traces are reused for SFT, distillation, rejection sampling, or preference-style filtering.

## 1. What is this work?

- Year / venue: 2025 · Hugging Face dataset and Open-R1 GitHub release.
- Atlas role: data_release, construction_recipe.
- Domains: math, reasoning traces, open reproduction.
- Current status: verified primary artifacts; L4 carded.
- Why it belongs: it is an open reasoning-trace release for studying teacher trace generation, answer verification, split choice, and SFT/RLVR-style reuse in the Open-R1 reproduction stack.

## 2. What data object does it expose?

- Prompt/source: math problems from NuminaMath 1.5, exposed through the OpenR1-Math-220k Hugging Face dataset.
- Trace/action author: DeepSeek-R1 generates the reasoning traces through the Open-R1 data-generation workflow.
- Answer/artifact format: problem, solution, answer, problem type, question type, source, UUID, completion flags, multiple generated reasoning traces, correctness fields, finish reasons, correctness count, and chat messages.
- Process fields: source problem, final answer, generated traces, `correctness_math_verify`, `correctness_llama`, `correctness_count`, source label, and default/extended subset membership.
- Environment or substrate: offline Hugging Face dataset plus the Open-R1 codebase for generation, SFT, GRPO, and evaluation.
- Terminal predicate: each released problem has at least one reasoning trace judged correct by Math Verify or a Llama-3.3-70B-Instruct judge.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic, mixed.
- Recorded verifier/reward/environment: Math Verify checks most samples; a Llama-3.3-70B-Instruct judge covers the subset where answer verification is not enough.
- Supervision granularity: answer_level trace records; the release exposes multiple candidate traces per problem rather than only one accepted answer.
- Reuse risk: Math Verify can fail on answer extraction or normalization, while LLM-judge labels can be inconsistent or style-sensitive.

## 4. How is the data constructed?

- Base model: not a downstream base-model training report; Open-R1 uses the dataset in SFT and reproduction recipes.
- Teacher: DeepSeek-R1.
- Generator: Open-R1 generation code with SGLang.
- Filtering rule: generate two traces per problem, sometimes four, then keep traces/problems according to Math Verify and Llama-judge correctness signals.
- Sampling protocol: the dataset card says the pipeline follows DeepSeek-R1 model-card recommended generation parameters and prepends the instruction to reason step by step and put the final answer in `\boxed{}`.
- Inference budget: the release uses a 16k token limit per generation; the dataset card reports 25 solutions per hour per H100 and 300k problem solutions per day on 512 H100s.
- Optimizer/scaffold: Open-R1 provides scripts for SFT and GRPO over reasoning datasets, so the data object can serve supervised distillation and verifier-oriented RL experiments.

## 5. How can it enter post-training?

Recorded training/evaluation use: sft, distillation, rlvr.

The default subset is the safer SFT starting point because the dataset card reports that it performs best after SFT. The extended subset adds sources such as `cn_k12`, which increases coverage but reportedly lowered SFT performance, so reuse should pin the subset and source mix.

## 6. What should readers audit?

- Which subset is used: `default`, `extended`, or `all`.
- Whether downstream experiments preserve the original source labels and split/subset choice.
- Math Verify false positives and false negatives, especially around boxed-answer extraction and symbolic equivalence.
- The Llama-judge portion, since model judgment can reward plausible trace style rather than correctness.
- Whether benchmark questions overlap with NuminaMath sources, olympiad sources, AOPS-style data, or later evaluation sets.
- Whether rejected traces are visible enough for preference optimization, DPO, or failure analysis.

## 7. What is missing or risky?

- The release is strong enough for an L4 card, but it is not an L5 audit record because contamination checks and full source-lineage analysis are still downstream work.
- Teacher traces can import DeepSeek-R1 style artifacts and hidden training lineage.
- The extended subset can change downstream behavior; treating the headline 220k count as one homogeneous corpus is misleading.
- Verifier agreement is not proof that each reasoning trace is faithful or pedagogically useful.

## 8. Why it matters for post-training reasoning data

OpenR1-Math-220k is a compact example of a modern reasoning-data record: prompt, teacher trace, final answer, verifier result, source metadata, and split choice all matter. It shows why Track 01 cards need more than a dataset link: the reader must know who wrote the trace, what checked it, and which accepted/rejected signals survive release.

## 9. Links and citation

[Code](https://github.com/huggingface/open-r1) · [Data](https://huggingface.co/datasets/open-r1/OpenR1-Math-220k)

- Data ID: `openr1-math-220k-2025`
- Citation status: verified
- Confidence: high
