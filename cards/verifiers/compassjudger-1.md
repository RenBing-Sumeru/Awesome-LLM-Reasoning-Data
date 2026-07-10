<!-- entry_id: compassjudger-1-all-in-one-judge-model-helps-model-evaluation-and-evolution-2024 -->
<!-- card_type: verifiers -->
# CompassJudger-1: All-in-one Judge Model Helps Model Evaluation and Evolution
<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=compassjudger-1-all-in-one-judge-model-helps-model-evaluation-and-evolution-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=compassjudger-1-all-in-one-judge-model-helps-model-evaluation-and-evolution-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=compassjudger-1-all-in-one-judge-model-helps-model-evaluation-and-evolution-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, benchmarks_evaluation_surfaces, judgment_rubric_domain_expert_data
> Links: [arXiv](https://arxiv.org/abs/2410.16256) - [Code](https://github.com/open-compass/CompassJudger) - [Model](https://huggingface.co/opencompass/CompassJudger-1-7B-Instruct)

## TL;DR

CompassJudger-1 releases open judge models for scoring, pairwise comparison, formatted evaluation, critique, and general instruction following.

It is a judge-model release and evaluation resource. It should not be treated as a clean standalone preference dataset.

## 1. What is this work?

The paper trains all-in-one judge models on public judge data, public reward data, self-collected subjective evaluation data, self-collected reward data, and generated critique data.

## 2. What data object does it expose?

The relevant record can include:

- prompt,
- response,
- response_a,
- response_b,
- rubric or instruction,
- score,
- choice,
- critique,
- category.

## 3. What is the verifier / reward / judge / environment?

The verifier is the CompassJudger model. It can act as a scorer, pairwise comparer, critique generator, or reward model.

The feedback is model-generated judgment. It depends on training data, prompt templates, and task format.

## 4. How is the data constructed?

The reported recipe includes:

- mix public judge data and public reward data,
- add self-collected subjective evaluation and reward data,
- re-evaluate outdated judge data with Qwen2.5-72B,
- generate critique processes,
- balance categories and limit excessive reward-only data,
- train Qwen2.5-based judge models with XTuner.

Unknown locally: full release status for self-collected training data, prompt templates, decontamination, and exact train split.

## 5. How can it enter post-training?

Recorded use:

- evaluation,
- reward_modeling.

Use it as a judge model or verifier component after auditing task fit. Do not treat judge-model benchmark scores as proof that the model is reliable as an RL reward.

## 6. What should readers audit?

- Subjective evaluation scores can encode hidden rubric preferences.
- Self-collected/internal data provenance is only partially auditable from public artifacts.
- Prompt templates may strongly affect judgments.
- Reward-only data can change judge behavior.

## 7. What is missing or risky?

- Full training-data release status.
- Self-collected data provenance.
- Prompt templates and output formats.
- HF model license and repository license.
- Decontamination against target evaluation tasks.
- Whether the judge is calibrated for the target domain.

## 8. Why it matters for post-training reasoning data

Judge models often become reward/verifier components. CompassJudger-1 is useful because it exposes how a judge model combines score, preference, critique, and evaluation-format supervision.

## 9. Links and citation

- Institution: Shanghai AI Laboratory; OpenCompass.
- Official links: arXiv, GitHub, Hugging Face model, and JudgerBench release.
- arXiv: https://arxiv.org/abs/2410.16256
- DOI: https://doi.org/10.48550/arXiv.2410.16256
- Code: https://github.com/open-compass/CompassJudger
- Data: https://github.com/open-compass/CompassJudger/releases/tag/v1.0.0
- Model: https://huggingface.co/opencompass/CompassJudger-1-7B-Instruct
- Data ID: `compassjudger-1-all-in-one-judge-model-helps-model-evaluation-and-evolution-2024`
- Citation status: verified
- Confidence: high
