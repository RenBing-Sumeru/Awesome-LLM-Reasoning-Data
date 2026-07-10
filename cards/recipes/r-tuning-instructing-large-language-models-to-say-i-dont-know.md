<!-- entry_id: r-tuning-2024 -->
<!-- card_type: recipes -->
# R-Tuning: Instructing Large Language Models to Say 'I Don't Know'

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=r-tuning-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=r-tuning-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=r-tuning-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: instruction_demonstration_rationale_data, judgment_rubric_domain_expert_data, audit_failure_contamination_verifier_attacks, training_usage_optimization_objectives
> Links: [Paper](https://arxiv.org/abs/2311.09677) · [Venue](https://aclanthology.org/2024.naacl-long.394/) · [Code](https://github.com/shizhediao/R-Tuning) · [Data](https://drive.google.com/drive/folders/17v7IbnAPXX1NQpqjlDMhhxFK0cuNYSd6?usp=sharing) · [DOI](https://doi.org/10.18653/v1/2024.naacl-long.394)

## TL;DR

R-Tuning turns abstention into instruction data by teaching models to answer known questions and refuse unknown ones.

It broadens Track 01 beyond producing answers: the target behavior can be calibrated refusal with its own labels and audit context.

## 1. What is this work?

- Year / venue: 2024 · NAACL.
- Atlas role: construction_recipe, data_release.
- Track decision: Track 01 · Instruction tuning / SFT data.
- Domains: refusal, hallucination, instruction_tuning, calibration.
- Current status: verified primary source; artifact verification is not over-claimed.

## 2. What data object does it expose?

- Prompt/source: Knowledge-intensive QA and factual relation data used to separate known from unknown questions.
- Trace/action author: Data-construction scripts create answer or refusal targets.
- Answer/artifact format: Question with either an answerable response or explicit refusal.
- Process fields: question, known_or_unknown_status, answer_or_refusal_target, dataset_name, evaluation_domain.
- Environment or substrate: Offline refusal-aware instruction tuning and evaluation.
- Terminal predicate: Correct answer for known questions and appropriate refusal for unknown questions.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: judgment_required, mixed.
- Recorded verifier/reward/environment: Known/unknown classification relative to a parametric-knowledge proxy.
- Supervision granularity: answer_level.

## 4. How is the data constructed?

- Base model: varies by experiment or primary work.
- Teacher: Knowledge-intersection construction procedure.
- Generator: R-Tuning data-construction scripts.
- Filtering rule: Identify disparity between parametric knowledge and instruction data.
- Sampling protocol: Unknown.
- Inference budget: unknown or task-dependent unless stated in the official source.
- Optimizer/scaffold: LMFlow fine-tuning pipeline.

## 5. How can it enter post-training?

Recorded training/evaluation use: sft, safety_alignment, evaluation.

Use this card to decide whether the work is a direct training-data source, a construction recipe, a feedback contract, or an audit lens. Do not treat benchmark gains as proof that the underlying data object is reusable without checking source mixture, split, license, and verifier details.

## 6. What should readers audit?

- Audit how known vs unknown is determined for each base model.
- Check over-refusal on answerable questions.
- Pin data version and license for the Google Drive release.

## 7. What is missing or risky?

- Exact data license, schemas, and cross-model transfer behavior require review.
- Stable HF artifacts were not verified.

## 8. Why it matters for post-training reasoning data

It broadens Track 01 beyond producing answers: the target behavior can be calibrated refusal with its own labels and audit context.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[Paper](https://arxiv.org/abs/2311.09677) · [Venue](https://aclanthology.org/2024.naacl-long.394/) · [Code](https://github.com/shizhediao/R-Tuning) · [Data](https://drive.google.com/drive/folders/17v7IbnAPXX1NQpqjlDMhhxFK0cuNYSd6?usp=sharing) · [DOI](https://doi.org/10.18653/v1/2024.naacl-long.394)

- Data ID: `r-tuning-2024`
- Citation status: verified
- Confidence: high for the primary source; artifact completeness remains partial unless listed above.
