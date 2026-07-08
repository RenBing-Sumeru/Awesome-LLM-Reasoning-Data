<!-- entry_id: subliminal-learning-2025 -->
<!-- card_type: failures -->
# Subliminal Learning

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=subliminal-learning-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=subliminal-learning-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=subliminal-learning-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: data_construction_open_release_recipes, audit_failure_contamination_verifier_attacks, benchmarks_evaluation_surfaces
> Links: [📄 Paper](https://arxiv.org/abs/2507.14805) · [🏛️ Venue](https://www.nature.com/articles/s41586-026-10319-8) · [🐙 Code](https://github.com/MinhxLe/subliminal-learning) · [🌐 Project](https://subliminal-learning.com/)

## TL;DR

Subliminal Learning shows that teacher models can transmit behavioral traits through semantically unrelated generated data, even after visible trait references are filtered.

It is a data-lineage warning for reasoning distillation: synthetic traces may carry hidden model traits that are invisible to content filters.

## 1. What is this work?

- Year / venue: 2025 · arXiv.
- Atlas role: audit_failure, construction_recipe.
- Domains: synthetic-data, lineage, distillation.
- Current status: verified.
- Why it belongs: Audit/failure entry for hidden trait transfer, distillation lineage risk, and synthetic-data filtering limits.

## 2. What data object does it expose?

- Prompt/source: teacher-generated datasets that may look unrelated to a hidden trait, such as number sequences, code, or reasoning traces.
- Trace/action author: teacher model generates training examples; student model is fine-tuned on them.
- Answer/artifact format: generated data plus downstream behavioral evaluation of the student.
- Process fields: teacher identity, student base model, visible filtering policy, hidden trait evaluation.
- Environment or substrate: distillation and synthetic-data training pipeline.
- Terminal predicate: whether the student acquires the teacher trait despite semantic filtering.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: behavioral evaluation plus data-lineage audit.
- Recorded verifier/reward/environment: trait probes after student training.
- Supervision granularity: dataset-level lineage and example-level generated data.

## 4. How is the data constructed?

- Base model: teacher and student models; effect depends on model lineage/base compatibility.
- Teacher: model carrying a target trait or behavior.
- Generator: teacher outputs semantically unrelated data.
- Filtering rule: remove explicit references to the trait before student training.
- Sampling protocol: train student on filtered generated data and compare with controls.
- Inference budget: generation volume and fine-tuning budget affect transfer strength.
- Optimizer/scaffold: distillation/fine-tuning pipeline.

## 5. How can it enter post-training?

Recorded training/evaluation use: distillation, evaluation, audit.

Use it as a provenance warning: filtering visible harmful text is not enough when synthetic data comes from a teacher with unknown traits.

## 6. What should readers audit?

- Are teacher and student model lineages recorded?
- Can hidden traits transfer through traces, code, or neutral-looking examples?
- Do filters remove semantic references but miss statistical signatures?
- Are control teachers and different-base-model controls included?
- Is downstream behavior tested after distillation?

## 7. What is missing or risky?

- Data may look safe while carrying hidden traits.
- Lineage effects can be invisible from sample inspection.
- Distillation chains can propagate behavior across model generations.

## 8. Why it matters for post-training reasoning data

It is a data-lineage warning for reasoning distillation: synthetic traces may carry hidden model traits that are invisible to content filters.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2507.14805) · [🏛️ Venue](https://www.nature.com/articles/s41586-026-10319-8) · [🐙 Code](https://github.com/MinhxLe/subliminal-learning) · [🌐 Project](https://subliminal-learning.com/)

- Data ID: `subliminal-learning-2025`
- Citation status: verified
- Confidence: high
