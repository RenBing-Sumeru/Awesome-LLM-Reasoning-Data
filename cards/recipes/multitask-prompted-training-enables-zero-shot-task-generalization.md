<!-- entry_id: multitask-prompted-training-enables-zero-shot-task-generalization-2021 -->
<!-- card_type: recipes -->
# Multitask Prompted Training Enables Zero-Shot Task Generalization

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=multitask-prompted-training-enables-zero-shot-task-generalization-2021&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=multitask-prompted-training-enables-zero-shot-task-generalization-2021&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=multitask-prompted-training-enables-zero-shot-task-generalization-2021&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: instruction_demonstration_rationale_data, foundations_and_primers, data_construction_open_release_recipes
> Links: [Paper](https://arxiv.org/abs/2110.08207) · [Venue](https://openreview.net/forum?id=9Vrb9D0WI4) · [Code](https://github.com/bigscience-workshop/t-zero) · [Data](https://huggingface.co/datasets/bigscience/P3) · [Project](https://github.com/bigscience-workshop/promptsource) · [HF](https://huggingface.co/bigscience/T0pp) · [DOI](https://doi.org/10.48550/arXiv.2110.08207)

## TL;DR

T0 makes prompt templates and prompted dataset mixtures concrete artifacts for zero-shot instruction tuning.

It is a Track 01 reference for prompt-source infrastructure: the data object includes dataset source, prompt template, target output, and held-out task policy.

## 1. What is this work?

- Year / venue: 2021 · ICLR.
- Atlas role: construction_recipe, data_release.
- Track decision: Track 00 + Track 01 · Instruction tuning / SFT data.
- Domains: instruction_following, prompt_templates, zero_shot_generalization.
- Current status: verified primary source; artifact verification is not over-claimed.

## 2. What data object does it expose?

- Prompt/source: Supervised datasets converted into prompted forms through PromptSource/P3.
- Trace/action author: Community prompt templates and original dataset labels; no rationale trace.
- Answer/artifact format: Prompted input plus target output.
- Process fields: dataset, subset, prompt_id, prompt_template, input, target, held_out_task.
- Environment or substrate: Offline multitask prompted fine-tuning.
- Terminal predicate: Held-out task performance under task metrics.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: mixed.
- Recorded verifier/reward/environment: Source-dataset labels and task-specific metrics.
- Supervision granularity: answer_level.

## 4. How is the data constructed?

- Base model: varies by experiment or primary work.
- Teacher: Existing supervised datasets and human-readable prompt templates.
- Generator: PromptSource prompt functions.
- Filtering rule: Task/prompt selection and held-out task design.
- Sampling protocol: Multitask mixture over prompted datasets.
- Inference budget: unknown or task-dependent unless stated in the official source.
- Optimizer/scaffold: Supervised multitask prompted fine-tuning.

## 5. How can it enter post-training?

Recorded training/evaluation use: sft, evaluation.

Use this card to decide whether the work is a direct training-data source, a construction recipe, a feedback contract, or an audit lens. Do not treat benchmark gains as proof that the underlying data object is reusable without checking source mixture, split, license, and verifier details.

## 6. What should readers audit?

- Audit prompt authorship, source licenses, and train/held-out task boundaries.
- Check whether prompts leak task identity or label shortcuts.
- Treat prompt quality separately from reasoning-data quality.

## 7. What is missing or risky?

- Exact per-source license and overlap checks remain paper/artifact-specific.
- No single verifier or rationale field is released.

## 8. Why it matters for post-training reasoning data

It is a Track 01 reference for prompt-source infrastructure: the data object includes dataset source, prompt template, target output, and held-out task policy.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[Paper](https://arxiv.org/abs/2110.08207) · [Venue](https://openreview.net/forum?id=9Vrb9D0WI4) · [Code](https://github.com/bigscience-workshop/t-zero) · [Data](https://huggingface.co/datasets/bigscience/P3) · [Project](https://github.com/bigscience-workshop/promptsource) · [HF](https://huggingface.co/bigscience/T0pp) · [DOI](https://doi.org/10.48550/arXiv.2110.08207)

- Data ID: `multitask-prompted-training-enables-zero-shot-task-generalization-2021`
- Citation status: verified
- Confidence: high for the primary source; artifact completeness remains partial unless listed above.
