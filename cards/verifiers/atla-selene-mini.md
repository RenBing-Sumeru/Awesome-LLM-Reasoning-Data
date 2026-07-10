<!-- entry_id: atla-selene-mini-a-general-purpose-evaluation-model-2025 -->
<!-- card_type: verifiers -->
# Atla Selene Mini: A General Purpose Evaluation Model
<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=atla-selene-mini-a-general-purpose-evaluation-model-2025&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=atla-selene-mini-a-general-purpose-evaluation-model-2025&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=atla-selene-mini-a-general-purpose-evaluation-model-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, benchmarks_evaluation_surfaces, judgment_rubric_domain_expert_data, training_usage_optimization_objectives
> Links: [arXiv](https://arxiv.org/abs/2501.17195) - [Code](https://github.com/atla-ai/selene-mini) - [Model](https://huggingface.co/AtlaAI/Selene-1-Mini-Llama-3.1-8B)

## TL;DR

Atla Selene Mini is an 8B evaluator model for absolute scoring, classification, pairwise preference, and critique generation.

It is a verifier/model-release entry. The standalone training data artifact is null, so reuse should audit training mixture and prompt format carefully.

## 1. What is this work?

The paper reports a small general-purpose language-model-as-a-judge built on Llama-3.1-8B-Instruct.

## 2. What data object does it expose?

The relevant record can include:

- instruction,
- response,
- candidate responses,
- criterion or rubric,
- score,
- class label,
- pairwise choice,
- critique.

## 3. What is the verifier / reward / judge / environment?

The verifier is the Selene Mini evaluator model. It can return scores, classification labels, pairwise preferences, structured judgments, or critiques.

The feedback is model-generated and rubric-conditioned, not a direct human label for each downstream item.

## 4. How is the data constructed?

The reported recipe includes:

- use Llama-3.1-8B-Instruct as base,
- combine public evaluation datasets with synthetic critiques,
- filter high-variance datasets with ArmoRM thresholds chosen through ablations,
- train with a DPO variant plus negative log-likelihood over chosen responses,
- evaluate across absolute scoring, classification, and pairwise preference benchmarks.

Unknown locally: full training-data mixture, split, decontamination, and generation temperature.

## 5. How can it enter post-training?

Recorded use:

- evaluation,
- reward_modeling.

Use it as a small judge or reward-model component candidate. Do not treat RewardBench or Judge Arena performance as proof of training-data quality.

## 6. What should readers audit?

- Small evaluator models can have limited coverage outside reported tasks.
- Synthetic critiques may encode generator artifacts.
- Rubric wording and prompt format can shift behavior.
- The training data artifact is not pinned as a standalone official dataset.

## 7. What is missing or risky?

- HF model license and exact checkpoint.
- Prompt templates from the official repository.
- Full training-data mixture and dataset licenses.
- Decontamination against target evaluations.
- Calibration on the target rubric/domain.

## 8. Why it matters for post-training reasoning data

It gives the track another open evaluator that can become a reward/verifier component, while making small-judge calibration a concrete audit issue.

## 9. Links and citation

- Institution: Atla.
- Official links: arXiv, GitHub, and Hugging Face model; standalone data artifact is null.
- arXiv: https://arxiv.org/abs/2501.17195
- DOI: https://doi.org/10.48550/arXiv.2501.17195
- Code: https://github.com/atla-ai/selene-mini
- Data: null
- Model: https://huggingface.co/AtlaAI/Selene-1-Mini-Llama-3.1-8B
- Data ID: `atla-selene-mini-a-general-purpose-evaluation-model-2025`
- Citation status: verified
- Confidence: medium
