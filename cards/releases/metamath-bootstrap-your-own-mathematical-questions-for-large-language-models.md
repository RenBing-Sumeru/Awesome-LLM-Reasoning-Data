<!-- entry_id: metamath-bootstrap-your-own-mathematical-questions-for-large-language-models-2023 -->
<!-- card_type: releases -->
# MetaMath: Bootstrap Your Own Mathematical Questions for Large Language Models

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=metamath-bootstrap-your-own-mathematical-questions-for-large-language-models-2023&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=metamath-bootstrap-your-own-mathematical-questions-for-large-language-models-2023&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=metamath-bootstrap-your-own-mathematical-questions-for-large-language-models-2023&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: instruction_demonstration_rationale_data, programmatically_verifiable_outcome_data, data_construction_open_release_recipes, training_usage_optimization_objectives
> Links: [Paper](https://arxiv.org/abs/2309.12284) · [Code](https://github.com/meta-math/MetaMath) · [Data](https://huggingface.co/datasets/meta-math/MetaMathQA) · [Project](https://meta-math.github.io/) · [HF](https://huggingface.co/meta-math/MetaMath-7B-V1.0) · [DOI](https://doi.org/10.48550/arXiv.2309.12284)

## TL;DR

MetaMath bootstraps math instruction data by rewriting GSM8K and MATH training questions into MetaMathQA.

It is a math SFT scaling reference whose reuse depends on source split, teacher lineage, near-duplicate, and answer-level verifier audits.

## 1. What is this work?

- Year / venue: 2023 · arXiv.
- Atlas role: data_release, construction_recipe, model_report.
- Track decision: Track 01 · Synthetic instruction data.
- Domains: math, synthetic_data, instruction_tuning.
- Current status: verified primary source; artifact verification is not over-claimed.

## 2. What data object does it expose?

- Prompt/source: GSM8K and MATH training-set questions augmented through question rewriting.
- Trace/action author: Teacher-generation pipeline writes math responses for augmented questions.
- Answer/artifact format: Mathematical question, original question, worked response, final answer, and augmentation type.
- Process fields: query, original_question, response, augmentation_type.
- Environment or substrate: Offline math instruction-tuning corpus.
- Terminal predicate: Final answer correctness on math benchmarks.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic, mixed.
- Recorded verifier/reward/environment: Gold training-set answers and math benchmark checks; no step verifier disclosed.
- Supervision granularity: answer_level.

## 4. How is the data constructed?

- Base model: varies by experiment or primary work.
- Teacher: Math training sets plus teacher augmentation.
- Generator: Question rewriting, answer augmentation, and self-verification style pipeline.
- Filtering rule: Train-set derivation and answer consistency checks; exact rejected logs unknown.
- Sampling protocol: Multiple rewritten views from seed math problems.
- Inference budget: unknown or task-dependent unless stated in the official source.
- Optimizer/scaffold: Supervised fine-tuning on MetaMathQA.

## 5. How can it enter post-training?

Recorded training/evaluation use: sft, distillation, evaluation.

Use this card to decide whether the work is a direct training-data source, a construction recipe, a feedback contract, or an audit lens. Do not treat benchmark gains as proof that the underlying data object is reusable without checking source mixture, split, license, and verifier details.

## 6. What should readers audit?

- Check augmented questions are derived from training splits.
- Audit near-duplicates after rewriting.
- Do not equate final-answer correctness with trace faithfulness.

## 7. What is missing or risky?

- Exact teacher prompts, sampling parameters, and rejection logs remain incomplete.
- Official venue page was not pinned.

## 8. Why it matters for post-training reasoning data

It is a math SFT scaling reference whose reuse depends on source split, teacher lineage, near-duplicate, and answer-level verifier audits.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[Paper](https://arxiv.org/abs/2309.12284) · [Code](https://github.com/meta-math/MetaMath) · [Data](https://huggingface.co/datasets/meta-math/MetaMathQA) · [Project](https://meta-math.github.io/) · [HF](https://huggingface.co/meta-math/MetaMath-7B-V1.0) · [DOI](https://doi.org/10.48550/arXiv.2309.12284)

- Data ID: `metamath-bootstrap-your-own-mathematical-questions-for-large-language-models-2023`
- Citation status: verified
- Confidence: high for the primary source; artifact completeness remains partial unless listed above.
