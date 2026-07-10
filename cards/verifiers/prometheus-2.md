<!-- entry_id: prometheus-2-an-open-source-language-model-specialized-in-evaluating-other-langu-2024 -->
<!-- card_type: verifiers -->
# Prometheus 2: An open source language model specialized in evaluating other language models

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=prometheus-2-an-open-source-language-model-specialized-in-evaluating-other-langu-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=prometheus-2-an-open-source-language-model-specialized-in-evaluating-other-langu-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=prometheus-2-an-open-source-language-model-specialized-in-evaluating-other-langu-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: preference_reward_feedback_data, judgment_rubric_domain_expert_data, benchmarks_evaluation_surfaces
> Links: [arXiv](https://arxiv.org/abs/2405.01535) - [ACL](https://aclanthology.org/2024.emnlp-main.248/) - [Code](https://github.com/prometheus-eval/prometheus-eval) - [Data](https://aclanthology.org/2024.emnlp-main.248.data.zip) - [HF](https://huggingface.co/prometheus-eval/prometheus-7b-v2.0)

## TL;DR

Prometheus 2 is an open evaluator model for both direct assessment and pairwise ranking under user-defined criteria.

It is an open judge/reward-model candidate. Agreement with another judge or benchmark should not be treated as correctness without auditing the rubric, prompt template, and data provenance.

## 1. What is this work?

The paper releases an evaluator model and associated artifacts for rubric-conditioned direct assessment and pairwise ranking.

## 2. What data object does it expose?

The relevant record can include:

- instruction,
- candidate response,
- evaluation criterion,
- assessment format,
- score or ranking,
- critique,
- reference judgment.

## 3. What is the verifier / reward / judge / environment?

The verifier is Prometheus 2 judge output. It can provide rubric-conditioned scalar scores, critiques, or pairwise preference outputs.

The supervision contract is judgment_required; the judge should be tied to its checkpoint, prompt template, rubric, and benchmark source.

## 4. How is the data constructed?

The reported recipe includes:

- train/evaluate across direct assessment and pairwise ranking formats,
- condition judgments on user-defined criteria,
- release code, ACL data artifact, and HF weights,
- compare open evaluator behavior against human or proprietary-judge references.

Unknown locally: whether every judge-training example is separated from every downstream benchmark used by a new project.

## 5. How can it enter post-training?

Recorded use:

- reward_modeling,
- preference_learning,
- evaluation,
- audit.

Use it as an open evaluator candidate when rubric-conditioned judgments matter. Do not treat it as a neutral oracle.

## 6. What should readers audit?

- Open judges can inherit rubric bias.
- Agreement with another judge is not the same as correctness.
- Pairwise and scalar formats can disagree.
- Prompt templates and checkpoints must be pinned.

## 7. What is missing or risky?

- Exact Prometheus 2 checkpoint.
- Prompt template and rubric text.
- ACL data artifact license and contents.
- Overlap with target evaluation prompts.
- Whether pairwise and scalar formats agree on the intended domain.

## 8. Why it matters for post-training reasoning data

It gives the atlas a concrete open-source judge model whose training and evaluation artifacts can be inspected instead of relying only on proprietary judges.

## 9. Links and citation

- Institution: KAIST AI; Allen Institute for AI; Carnegie Mellon University; University of Washington.
- Official links: arXiv, ACL, DOI, GitHub, ACL data, and Hugging Face model.
- arXiv: https://arxiv.org/abs/2405.01535
- ACL: https://aclanthology.org/2024.emnlp-main.248/
- DOI: https://doi.org/10.18653/v1/2024.emnlp-main.248
- Code: https://github.com/prometheus-eval/prometheus-eval
- Data: https://aclanthology.org/2024.emnlp-main.248.data.zip
- HF: https://huggingface.co/prometheus-eval/prometheus-7b-v2.0
- Data ID: `prometheus-2-an-open-source-language-model-specialized-in-evaluating-other-langu-2024`
- Citation status: verified
- Confidence: high
