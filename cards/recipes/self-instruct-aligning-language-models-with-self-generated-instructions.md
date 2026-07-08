<!-- entry_id: self-instruct-aligning-language-models-with-self-generated-instructions-2023 -->
<!-- card_type: recipes -->
# Self-Instruct: Aligning language models with self-generated instructions

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=self-instruct-aligning-language-models-with-self-generated-instructions-2023&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=self-instruct-aligning-language-models-with-self-generated-instructions-2023&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=self-instruct-aligning-language-models-with-self-generated-instructions-2023&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: data_construction_open_release_recipes, instruction_demonstration_rationale_data
> Links: [📄 Paper](https://arxiv.org/abs/2212.10560)

## TL;DR

Self-Instruct bootstraps instruction-following data by having a model generate instructions, inputs, and outputs, then filtering low-quality or duplicate examples.

It is the canonical self-generated instruction-data recipe that later reasoning datasets adapt for prompt sourcing and synthetic expansion.

## 1. What is this work?

- Year / venue: 2023 · ACL.
- Atlas role: construction_recipe, data_release.
- Domains: instruction_following.
- Current status: verified.
- Why it belongs: Core synthetic-data construction recipe for instruction generation, filtering, and SFT without large human-written task collections.

## 2. What data object does it expose?

- Prompt/source: small seed set of human-written tasks.
- Trace/action author: model generates new instructions, optional inputs, and responses.
- Answer/artifact format: instruction-input-output triples.
- Process fields: generated task, generated response, filtering metadata.
- Environment or substrate: offline instruction tuning corpus.
- Terminal predicate: heuristic and model-assisted quality filtering.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: mixed heuristic and human/model quality checks.
- Recorded verifier/reward/environment: duplicate removal, invalid-output filtering, and task-quality screening.
- Supervision granularity: example_level.

## 4. How is the data constructed?

- Base model: instruction-capable language model used for generation.
- Teacher: seed tasks and generator model.
- Generator: model-generated instructions and responses.
- Filtering rule: remove duplicates, invalid formats, classification-style leakage, and low-quality examples.
- Sampling protocol: iterative prompting from seed pool.
- Inference budget: generation budget controls corpus size and diversity.
- Optimizer/scaffold: supervised fine-tuning on accepted triples.

## 5. How can it enter post-training?

Recorded training/evaluation use: sft.

Use it to audit synthetic reasoning corpora: prompt diversity and filtering rules matter as much as the raw example count.

## 6. What should readers audit?

- What seed tasks drive the generation distribution?
- Are generated tasks deduplicated against benchmarks?
- Are safety and domain failures filtered?
- Are invalid or rejected generations logged?
- Does the generator model leak benchmark style into the corpus?

## 7. What is missing or risky?

- Synthetic corpora inherit generator blind spots.
- Heuristic filtering can favor easy or stylistically uniform examples.
- Without decontamination, generated tasks can echo benchmark items.

## 8. Why it matters for post-training reasoning data

It is the canonical self-generated instruction-data recipe that later reasoning datasets adapt for prompt sourcing and synthetic expansion.

The reusable lesson is to identify the feedback-bearing record: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2212.10560)

- Data ID: `self-instruct-aligning-language-models-with-self-generated-instructions-2023`
- Citation status: verified
- Confidence: high
