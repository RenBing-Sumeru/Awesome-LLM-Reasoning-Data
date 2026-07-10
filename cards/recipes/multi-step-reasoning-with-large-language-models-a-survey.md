<!-- entry_id: reasoning-with-large-language-models-a-survey-2024 -->
<!-- card_type: recipes -->
# Multi-Step Reasoning with Large Language Models, a Survey

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reasoning-with-large-language-models-a-survey-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reasoning-with-large-language-models-a-survey-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=reasoning-with-large-language-models-a-survey-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: foundations_and_primers, benchmarks_evaluation_surfaces, audit_failure_contamination_verifier_attacks
> Links: [Paper](https://arxiv.org/abs/2407.11511) · [DOI](https://doi.org/10.48550/arXiv.2407.11511)

## TL;DR

This survey maps multi-step reasoning with LLMs across generation, evaluation, and control methods.

It helps readers route model-centric reasoning claims into concrete questions about traces, verifiers, tools, rewards, and evaluation surfaces.

## 1. What is this work?

- Year / venue: 2024 · arXiv.
- Atlas role: survey_background.
- Track decision: Track 00 · Reasoning LLM surveys.
- Domains: reasoning, multi_step_reasoning, survey, chain_of_thought, tool_use.
- Current status: verified primary source; artifact verification is not over-claimed.

## 2. What data object does it expose?

- Prompt/source: Multi-step reasoning literature across math, logic, games, robotics, code execution, RL, optimization loops, and self-reflection.
- Trace/action author: Survey authors organize generation, evaluation, and control methods.
- Answer/artifact format: Taxonomy and literature map for multi-step reasoning methods.
- Process fields: reasoning_method, generation_strategy, evaluation_method, control_mechanism, task_family.
- Environment or substrate: LLM multi-step reasoning tasks and methods.
- Terminal predicate: Whether a method generates, evaluates, controls, or optimizes multi-step reasoning.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: mixed.
- Recorded verifier/reward/environment: Mixed evaluation and control signals summarized by the survey; no single verifier.
- Supervision granularity: unknown.

## 4. How is the data constructed?

- Base model: varies by experiment or primary work.
- Teacher: Reasoning-LLM literature.
- Generator: Survey taxonomy.
- Filtering rule: Multi-step reasoning survey scope.
- Sampling protocol: Literature review.
- Inference budget: unknown or task-dependent unless stated in the official source.
- Optimizer/scaffold: Taxonomy of generation, evaluation, control, RL, optimization loops, and self-reflection.

## 5. How can it enter post-training?

Recorded training/evaluation use: audit, evaluation.

Use this card to decide whether the work is a direct training-data source, a construction recipe, a feedback contract, or an audit lens. Do not treat benchmark gains as proof that the underlying data object is reusable without checking source mixture, split, license, and verifier details.

## 6. What should readers audit?

- Do not treat model-centric taxonomy as trainable data quality proof.
- Check trace authorship, verifier contract, tool environment, budget, and contamination controls in each primary paper.
- Separate reasoning ability, trace style, external tools, and benchmark performance.

## 7. What is missing or risky?

- No official code/data/project/HF links were verified.
- Dataset-level construction details remain in the surveyed primary works.

## 8. Why it matters for post-training reasoning data

It helps readers route model-centric reasoning claims into concrete questions about traces, verifiers, tools, rewards, and evaluation surfaces.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[Paper](https://arxiv.org/abs/2407.11511) · [DOI](https://doi.org/10.48550/arXiv.2407.11511)

- Data ID: `reasoning-with-large-language-models-a-survey-2024`
- Citation status: verified
- Confidence: high for the primary source; artifact completeness remains partial unless listed above.
