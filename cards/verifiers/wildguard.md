<!-- entry_id: wildguard-2024 -->
<!-- card_type: verifiers -->
# WildGuard: Open One-Stop Moderation Tools for Safety Risks, Jailbreaks, and Refusals of LLMs

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=wildguard-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=wildguard-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=wildguard-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, judgment_rubric_domain_expert_data, benchmarks_evaluation_surfaces, training_usage_optimization_objectives
> Links: [arXiv](https://arxiv.org/abs/2406.18495) - [Code](https://github.com/allenai/wildguard) - [Data](https://huggingface.co/datasets/allenai/wildguardmix) - [Model](https://huggingface.co/allenai/wildguard)

## TL;DR

WildGuard releases a safety moderation dataset and model for prompt harmfulness, response harmfulness, jailbreaks, and refusal detection.

The feedback object is a safety label, not a universal preference label. Reuse should preserve policy assumptions, refusal labels, and split provenance.

## 1. What is this work?

WildGuard builds WildGuardMix, WildGuardTrain, WildGuardTest, and a safety guard model for moderation tasks.

For this atlas, it is a verifier card because it turns harmfulness and refusal judgments into reusable training/evaluation labels.

## 2. What data object does it expose?

The relevant record can include:

- prompt,
- adversarial flag,
- response,
- prompt harm label,
- response harm label,
- response refusal label,
- subcategory,
- annotator agreement fields.

Sources include synthetic safety data, in-the-wild interactions, and existing safety datasets.

## 3. What is the verifier / reward / judge / environment?

The verifier is mixed. Training labels use GPT-4 filtering and auditing, while WildGuardTest uses three independent human annotators with majority vote and manual audit.

The terminal predicate is whether a prompt or response is harmful, safe, refused, or compliant under the moderation taxonomy.

## 4. How is the data constructed?

Reported construction details include:

- generate synthetic harmful and benign prompts,
- transform prompts with WildTeaming-style adversarial attacks,
- collect refusal and compliance responses,
- label prompt harmfulness, response harmfulness, and refusal behavior,
- train a Mistral-7B-v0.3 multi-task guard model.

Unknown locally: sampling temperature and inference budget.

## 5. How can it enter post-training?

Recorded use:

- safety_alignment,
- evaluation,
- reward_modeling.

Use it for safety moderation, guardrail training, or reward-model auditing. Do not use moderation accuracy as evidence that a deployed assistant is safe or helpful.

## 6. What should readers audit?

- Safety labels depend on policy choices and cultural context.
- Refusal detection can reward over-refusal if helpfulness is not tracked.
- Jailbreak distributions age as attacks change.
- GPT-4-derived training labels can encode GPT-4 policy assumptions.
- HF dataset/model revisions should be pinned before reuse.

## 7. What is missing or risky?

- Exact Hugging Face dataset and model revisions.
- Code license and dataset/model licenses.
- Which split is used: WildGuardTrain, WildGuardTest, or WildGuardMix.
- Whether refusal labels are separated from harmfulness labels.
- Whether local policy taxonomy matches WildGuard labels.
- Over-refusal behavior after training.

## 8. Why it matters for post-training reasoning data

WildGuard makes safety moderation a structured reward/verifier surface: prompt, response, harm labels, refusal labels, and agreement metadata.

## 9. Links and citation

- Institution: Allen Institute for AI; University of Washington; Seoul National University.
- Official links: arXiv, DOI, GitHub, Hugging Face dataset, and Hugging Face model.
- arXiv: https://arxiv.org/abs/2406.18495
- DOI: https://doi.org/10.48550/arXiv.2406.18495
- Code: https://github.com/allenai/wildguard
- Data: https://huggingface.co/datasets/allenai/wildguardmix
- Model: https://huggingface.co/allenai/wildguard
- Project: null
- Data ID: `wildguard-2024`
- Citation status: verified
- Confidence: high