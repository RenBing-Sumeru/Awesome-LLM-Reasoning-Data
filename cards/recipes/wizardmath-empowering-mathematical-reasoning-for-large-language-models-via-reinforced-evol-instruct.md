<!-- entry_id: wizardmath-empowering-mathematical-reasoning-for-large-language-models-via-reinf-2023 -->
<!-- card_type: recipes -->
# WizardMath: Empowering Mathematical Reasoning via Reinforced Evol-Instruct

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=wizardmath-empowering-mathematical-reasoning-for-large-language-models-via-reinf-2023&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=wizardmath-empowering-mathematical-reasoning-for-large-language-models-via-reinf-2023&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=wizardmath-empowering-mathematical-reasoning-for-large-language-models-via-reinf-2023&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: instruction_demonstration_rationale_data, programmatically_verifiable_outcome_data, data_construction_open_release_recipes, training_usage_optimization_objectives
> Links: [Paper](https://arxiv.org/abs/2308.09583) · [Code](https://github.com/nlpxucan/WizardLM) · [Project](https://wizardlm.github.io/) · [HF](https://huggingface.co/WizardLMTeam/WizardMath-7B-V1.1) · [DOI](https://doi.org/10.48550/arXiv.2308.09583)

## TL;DR

WizardMath adapts Evol-Instruct to math reasoning, but the full training data is not publicly released.

It is useful as a recipe card precisely because it separates an influential construction method from a fully auditable data release.

## 1. What is this work?

- Year / venue: 2023 · arXiv.
- Atlas role: construction_recipe, model_report.
- Track decision: Track 01 · Synthetic instruction data.
- Domains: math, synthetic_data, evol_instruct.
- Current status: verified primary source; artifact verification is not over-claimed.

## 2. What data object does it expose?

- Prompt/source: Math instruction prompts evolved from math-related seed data; full training dataset unavailable.
- Trace/action author: WizardLM/Evol-Instruct style generator and reinforced feedback pipeline.
- Answer/artifact format: Math instruction, chain-of-thought style response, and final answer.
- Process fields: evolved_instruction, response, final_answer, process_feedback_or_filter_signal.
- Environment or substrate: Offline math instruction evolution and model fine-tuning.
- Terminal predicate: Final answer correctness on GSM8K/MATH-style evaluations.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic, mixed.
- Recorded verifier/reward/environment: Math benchmark answer checks plus reinforced Evol-Instruct feedback; exact internal verifier is not fully visible.
- Supervision granularity: answer_level, step_level.

## 4. How is the data constructed?

- Base model: varies by experiment or primary work.
- Teacher: WizardLM/Evol-Instruct lineage and generator models.
- Generator: Reinforced Evol-Instruct math pipeline.
- Filtering rule: Reported contamination checks; unreleased dataset prevents full audit.
- Sampling protocol: Unknown.
- Inference budget: unknown or task-dependent unless stated in the official source.
- Optimizer/scaffold: Supervised fine-tuning / reinforced Evol-Instruct feedback pipeline.

## 5. How can it enter post-training?

Recorded training/evaluation use: sft, distillation, evaluation.

Use this card to decide whether the work is a direct training-data source, a construction recipe, a feedback contract, or an audit lens. Do not treat benchmark gains as proof that the underlying data object is reusable without checking source mixture, split, license, and verifier details.

## 6. What should readers audit?

- Audit seed prompts, feedback signal, and retained/rejected instruction policy.
- Treat benchmark gains as model evidence, not data-quality proof.
- Check model and data license terms before reuse.

## 7. What is missing or risky?

- Training data, source mixture, per-example feedback, and filtering logs are not public.
- Exact RLEIF feedback contract remains partially hidden.

## 8. Why it matters for post-training reasoning data

It is useful as a recipe card precisely because it separates an influential construction method from a fully auditable data release.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[Paper](https://arxiv.org/abs/2308.09583) · [Code](https://github.com/nlpxucan/WizardLM) · [Project](https://wizardlm.github.io/) · [HF](https://huggingface.co/WizardLMTeam/WizardMath-7B-V1.1) · [DOI](https://doi.org/10.48550/arXiv.2308.09583)

- Data ID: `wizardmath-empowering-mathematical-reasoning-for-large-language-models-via-reinf-2023`
- Citation status: verified
- Confidence: high for the primary source; artifact completeness remains partial unless listed above.
