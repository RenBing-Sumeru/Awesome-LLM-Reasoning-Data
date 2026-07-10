<!-- entry_id: orpo-monolithic-preference-optimization-without-reference-model-2024 -->
<!-- card_type: recipes -->
# ORPO: Monolithic Preference Optimization without Reference Model

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=orpo-monolithic-preference-optimization-without-reference-model-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=orpo-monolithic-preference-optimization-without-reference-model-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=orpo-monolithic-preference-optimization-without-reference-model-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, training_usage_optimization_objectives
> Links: [ACL Anthology](https://aclanthology.org/2024.emnlp-main.626/) - [arXiv](https://arxiv.org/abs/2403.07691) - [Code](https://github.com/xfactlab/orpo) - [Model](https://huggingface.co/kaist-ai/mistral-orpo-beta)

## TL;DR

ORPO folds supervised learning and pairwise preference optimization into a single reference-free objective using an odds-ratio penalty.

It is a training recipe for consuming preference pairs, not a standalone preference-data release.

## 1. What is this work?

ORPO is a reference-free preference optimization method. It trains on instruction data with chosen/rejected responses and combines an SFT-style likelihood term with an odds-ratio preference penalty.

## 2. What data object does it expose?

The required data object is:

- instruction,
- chosen response,
- rejected response,
- odds-ratio penalty context.

The pair needs to preserve source and label policy. Without that, ORPO results cannot be attributed cleanly to data quality or objective design.

## 3. What is the verifier / reward / judge / environment?

The feedback signal is pairwise preference consumed by the ORPO objective. It is not a separate learned reward model and does not require a reference model.

Reference-free optimization does not remove the need to audit the preference labels.

## 4. How is the data constructed?

The paper reports:

- OPT models from 125M to 1.3B for controlled comparisons,
- Phi-2 2.7B, Llama-2 7B, and Mistral 7B for larger instruction-following experiments,
- Anthropic HH-RLHF and Binarized UltraFeedback in controlled settings,
- UltraFeedback and cleaned UltraFeedback for headline ORPO runs,
- a single-stage monolithic objective.

Unknown in the local metadata: exact split revisions, decontamination, license, rollout count, temperature, and inference budget.

## 5. How can it enter post-training?

Recorded use:

- preference learning.

Use ORPO to compare how the same chosen/rejected pair format can enter a single-stage objective. Do not treat benchmark improvements as proof that the preference source is clean or broadly reusable.

## 6. What should readers audit?

- SFT signal and preference signal are entangled.
- Gains can come from data, objective, base model, or filtering.
- Odds-ratio penalties may amplify length or format artifacts.
- Cleaned UltraFeedback and original UltraFeedback should not be conflated.
- Reference-free training can still overfit label quirks.

## 7. What is missing or risky?

- Exact preference dataset and cleaned version.
- Whether the pair format matches the downstream task.
- Base model and tokenizer.
- Whether SFT and preference examples are separable.
- License and provenance of HH-RLHF and UltraFeedback variants.
- Whether evaluation prompts entered filtering or model selection.

## 8. Why it matters for post-training reasoning data

ORPO is a compact example of how a preference pair can be consumed directly by an optimizer. The reusable lesson is to keep the pair provenance visible when comparing objective changes.

## 9. Links and citation

- Institution: KAIST.
- ACL Anthology: https://aclanthology.org/2024.emnlp-main.626/
- arXiv: https://arxiv.org/abs/2403.07691
- Code: https://github.com/xfactlab/orpo
- Model: https://huggingface.co/kaist-ai/mistral-orpo-beta
- DOI: https://doi.org/10.18653/v1/2024.emnlp-main.626
- Data ID: `orpo-monolithic-preference-optimization-without-reference-model-2024`
- Citation status: verified
- Confidence: high
