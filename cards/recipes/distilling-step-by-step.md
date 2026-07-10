<!-- entry_id: distilling-step-by-step-outperforming-larger-language-models-with-less-training--2023 -->
<!-- card_type: recipes -->
# Distilling Step-by-Step

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=distilling-step-by-step-outperforming-larger-language-models-with-less-training--2023&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=distilling-step-by-step-outperforming-larger-language-models-with-less-training--2023&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=distilling-step-by-step-outperforming-larger-language-models-with-less-training--2023&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: instruction_demonstration_rationale_data, data_construction_open_release_recipes, training_usage_optimization_objectives
> Links: [Paper](https://arxiv.org/abs/2305.02301) · [Code](https://github.com/google-research/distilling-step-by-step) · [Data](https://github.com/google-research/distilling-step-by-step/blob/main/datasets.zip) · [DOI](https://doi.org/10.48550/arXiv.2305.02301)

## TL;DR

Distilling Step-by-Step trains smaller models with answer labels plus teacher-generated rationales.

It is a compact rationale-distillation recipe showing how teacher traces become training targets while preserving faithfulness and lineage risks.

## 1. What is this work?

- Year / venue: 2023 · ACL.
- Atlas role: construction_recipe.
- Track decision: Track 01 · Chain-of-thought / rationale data.
- Domains: rationale_distillation, chain_of_thought, small_model_training.
- Current status: verified primary source; artifact verification is not over-claimed.

## 2. What data object does it expose?

- Prompt/source: Benchmark training examples from NLP and reasoning-style tasks.
- Trace/action author: Large teacher model-generated rationales.
- Answer/artifact format: Task label or answer plus generated rationale text.
- Process fields: input, label_type, llm_rationale, dataset, model_type, loss_weight.
- Environment or substrate: Offline T5 fine-tuning and benchmark evaluation.
- Terminal predicate: Benchmark label or answer correctness.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: mixed.
- Recorded verifier/reward/environment: Gold or teacher labels check final answers; rationales are not independently step-verified.
- Supervision granularity: answer_level, step_level.

## 4. How is the data constructed?

- Base model: varies by experiment or primary work.
- Teacher: Large teacher model used for rationales and optional labels.
- Generator: LLM rationale generation.
- Filtering rule: Unknown beyond dataset and rationale-generation settings.
- Sampling protocol: Fixed datasets and rationale/label settings in the released code.
- Inference budget: unknown or task-dependent unless stated in the official source.
- Optimizer/scaffold: Multitask loss combining label prediction and rationale generation.

## 5. How can it enter post-training?

Recorded training/evaluation use: distillation, sft, evaluation.

Use this card to decide whether the work is a direct training-data source, a construction recipe, a feedback contract, or an audit lens. Do not treat benchmark gains as proof that the underlying data object is reusable without checking source mixture, split, license, and verifier details.

## 6. What should readers audit?

- Audit teacher identity, prompt, rationale-generation settings, and dataset splits.
- Separate final-answer correctness from rationale faithfulness.
- Check generated-rationale and source-dataset licensing before reuse.

## 7. What is missing or risky?

- Low-quality or failed rationales are not a first-class release object.
- Exact teacher prompt and sampling details need full artifact review.

## 8. Why it matters for post-training reasoning data

It is a compact rationale-distillation recipe showing how teacher traces become training targets while preserving faithfulness and lineage risks.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[Paper](https://arxiv.org/abs/2305.02301) · [Code](https://github.com/google-research/distilling-step-by-step) · [Data](https://github.com/google-research/distilling-step-by-step/blob/main/datasets.zip) · [DOI](https://doi.org/10.48550/arXiv.2305.02301)

- Data ID: `distilling-step-by-step-outperforming-larger-language-models-with-less-training--2023`
- Citation status: verified
- Confidence: high for the primary source; artifact completeness remains partial unless listed above.
