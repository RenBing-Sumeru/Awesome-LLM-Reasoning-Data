<!-- entry_id: finetuned-language-models-are-zero-shot-learners-2021 -->
<!-- card_type: recipes -->
# Finetuned Language Models Are Zero-Shot Learners

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=finetuned-language-models-are-zero-shot-learners-2021&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=finetuned-language-models-are-zero-shot-learners-2021&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=finetuned-language-models-are-zero-shot-learners-2021&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: instruction_demonstration_rationale_data, foundations_and_primers, data_construction_open_release_recipes
> Links: [Paper](https://arxiv.org/abs/2109.01652) · [Code](https://github.com/google-research/FLAN) · [DOI](https://doi.org/10.48550/arXiv.2109.01652)

## TL;DR

FLAN converts supervised NLP tasks into natural-language instruction examples for zero-shot generalization.

It is a foundation for reasoning SFT because later instruction and teacher-trace datasets inherit its mixture, template, and held-out-task audit questions.

## 1. What is this work?

- Year / venue: 2021 · ICLR.
- Atlas role: construction_recipe, survey_background.
- Track decision: Track 00 + Track 01 · Instruction tuning / SFT data.
- Domains: instruction_following, nlp_tasks, zero_shot_generalization.
- Current status: verified primary source; artifact verification is not over-claimed.

## 2. What data object does it expose?

- Prompt/source: Over 60 supervised NLP datasets verbalized with natural-language instruction templates.
- Trace/action author: Human/template-authored task instructions; no reasoning trace release.
- Answer/artifact format: Task-specific labels or text targets.
- Process fields: dataset, instruction_template, input, target, held_out_task_group.
- Environment or substrate: Offline instruction-tuning and held-out task evaluation.
- Terminal predicate: Task-specific correctness metric.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: mixed.
- Recorded verifier/reward/environment: Source-dataset labels and task metrics; no reusable reward model or verifier artifact.
- Supervision granularity: answer_level.

## 4. How is the data constructed?

- Base model: varies by experiment or primary work.
- Teacher: Existing supervised NLP datasets plus instruction templates.
- Generator: Template-based instruction verbalization.
- Filtering rule: Task and template selection; exact reusable mixture metadata remains partial.
- Sampling protocol: Multitask mixture with held-out task groups.
- Inference budget: unknown or task-dependent unless stated in the official source.
- Optimizer/scaffold: Supervised fine-tuning.

## 5. How can it enter post-training?

Recorded training/evaluation use: sft, evaluation.

Use this card to decide whether the work is a direct training-data source, a construction recipe, a feedback contract, or an audit lens. Do not treat benchmark gains as proof that the underlying data object is reusable without checking source mixture, split, license, and verifier details.

## 6. What should readers audit?

- Audit task mixture, template authorship, and held-out task boundaries.
- Check source dataset licenses and train/eval overlap.
- Do not treat answer-only task accuracy as evidence of reasoning-trace quality.

## 7. What is missing or risky?

- Full reusable mixture metadata and per-source decontamination remain incomplete.
- No step-by-step rationale or verifier trace is exposed.

## 8. Why it matters for post-training reasoning data

It is a foundation for reasoning SFT because later instruction and teacher-trace datasets inherit its mixture, template, and held-out-task audit questions.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[Paper](https://arxiv.org/abs/2109.01652) · [Code](https://github.com/google-research/FLAN) · [DOI](https://doi.org/10.48550/arXiv.2109.01652)

- Data ID: `finetuned-language-models-are-zero-shot-learners-2021`
- Citation status: verified
- Confidence: high for the primary source; artifact completeness remains partial unless listed above.
