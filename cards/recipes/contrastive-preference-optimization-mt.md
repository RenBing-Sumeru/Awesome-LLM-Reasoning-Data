<!-- entry_id: contrastive-preference-optimization-pushing-the-boundaries-of-llm-performance-in-machine-t-2024 -->
<!-- card_type: recipes -->
# Contrastive Preference Optimization: Pushing the Boundaries of LLM Performance in Machine Translation
<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=contrastive-preference-optimization-pushing-the-boundaries-of-llm-performance-in-machine-t-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=contrastive-preference-optimization-pushing-the-boundaries-of-llm-performance-in-machine-t-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=contrastive-preference-optimization-pushing-the-boundaries-of-llm-performance-in-machine-t-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, training_usage_optimization_objectives
> Links: [arXiv](https://arxiv.org/abs/2401.08417) - [Code](https://github.com/fe1ixxu/ALMA)

## TL;DR

CPO builds machine-translation preference pairs from translation triplets using automatic MT quality signals and limited human preference checks.

Its value for the atlas is the domain-specific preference construction recipe, not a general dialogue-alignment dataset.

## 1. What is this work?

Contrastive Preference Optimization is a machine-translation alignment recipe. It trains ALMA-style models to prefer better translations and avoid adequate but imperfect alternatives.

## 2. What data object does it expose?

The relevant record is:

- source sentence,
- preferred translation,
- dis-preferred translation,
- translation direction,
- quality score.

The local metadata records FLORES-200 development and test data, ALMA-13B-LoRA outputs, GPT-4 outputs, gold references, and 1K internal human-labeled preference records.

## 3. What is the verifier / reward / judge / environment?

The verifier signal comes from KIWI-XXL and XCOMET reference-free MT evaluation models, with a small internal human-labeled preference check for enzh and ende.

This is a machine-translation quality signal. It should not be generalized to open-ended assistant preference without domain audit.

## 4. How is the data constructed?

The reported recipe includes:

- form translation triplets from ALMA-13B-LoRA, GPT-4, and gold references,
- score triplet candidates with MT quality estimators,
- choose the highest-scoring item as preferred,
- choose the lowest-scoring item as dis-preferred,
- discard the middle item,
- train ALMA-R with the CPO objective.

Recorded setup includes 10 English-centric directions over German, Czech, Icelandic, Chinese, and Russian. Unknown in the local metadata: temperature, inference budget, split, license, decontamination, and a standalone official dataset URL.

## 5. How can it enter post-training?

Recorded use:

- preference learning.

Use CPO as an example of task-specific preference construction. Do not use WMT results as evidence that the preference labels are intrinsically clean.

## 6. What should readers audit?

- MT evaluator biases can become training targets.
- Reference translations are useful but not automatically perfect.
- The recipe is domain-specific and may not transfer to dialogue or reasoning.
- Internal human-labeled preference records are not fully auditable from local metadata.
- Dataset split and license are unknown locally.

## 7. What is missing or risky?

- Exact FLORES-200 revision and translation directions.
- Whether the constructed preference dataset is released separately.
- KIWI-XXL and XCOMET versions.
- Triplet generation details for ALMA, GPT-4, and references.
- License of source and derived translation data.
- Whether target WMT evaluations overlap with construction choices.

## 8. Why it matters for post-training reasoning data

CPO broadens the preference-feedback track beyond chat and math. It shows how a domain verifier can define pairwise training data, while also making the verifier's domain assumptions central to audit.

## 9. Links and citation

- Institution: Johns Hopkins University; Microsoft.
- arXiv: https://arxiv.org/abs/2401.08417
- Code: https://github.com/fe1ixxu/ALMA
- DOI: https://doi.org/10.48550/arXiv.2401.08417
- Data: null
- Data ID: `contrastive-preference-optimization-pushing-the-boundaries-of-llm-performance-in-machine-t-2024`
- Citation status: verified
- Confidence: medium
