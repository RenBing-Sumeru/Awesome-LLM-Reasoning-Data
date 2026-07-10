<!-- entry_id: prometheus-2-an-open-source-language-model-specialized-in-evaluating-other-langu-2024 -->
<!-- card_type: verifiers -->
# Prometheus 2: An open source language model specialized in evaluating other language models

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=prometheus-2-an-open-source-language-model-specialized-in-evaluating-other-langu-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=prometheus-2-an-open-source-language-model-specialized-in-evaluating-other-langu-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=prometheus-2-an-open-source-language-model-specialized-in-evaluating-other-langu-2024&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🧭 Foundations & Primers (Track 00) · 🤝 Preference & Reward Feedback (Track 02) · ⚖️ Judgment / Rubric / Domain Expert (Track 07) · 🏗️ Construction & Open Releases (Track 08) · 🎯 Training Usage & Objectives (Track 09) · 🧰 Benchmarks & Evaluation (Track 11) · 🚀 Frontier Disclosure Ledger (Track 12) · 🧯 Audit & Failure Modes (Track 13) -->

> Curation level: L5_audit_ready

> Links: [📄 Paper](https://arxiv.org/abs/2405.01535) · [🏛️ ACL](https://aclanthology.org/2024.emnlp-main.248/) · [🔗 DOI](https://doi.org/10.18653/v1/2024.emnlp-main.248) · [🐙 Code](https://github.com/prometheus-eval/prometheus-eval) · [🗂️ Data](https://aclanthology.org/2024.emnlp-main.248.data.zip) · [🤗 HF](https://huggingface.co/prometheus-eval/prometheus-7b-v2.0)

## TL;DR

Prometheus 2 is an open evaluator model for both direct assessment and pairwise ranking under user-defined criteria.

It gives the atlas a concrete open-source judge model whose training/evaluation data can be audited instead of treating proprietary judges as black boxes.

## 1. What is this work?

- Year / venue: 2024 · EMNLP.
- Atlas role: verifier_reward, model_report, data_release.
- Domains: llm-as-judge, rubrics, evaluation-models.
- Current status: verified.
- Why it belongs: Verifier/reward entry for rubric-conditioned evaluator models and LLM-as-a-judge replacement workflows.

## 2. What data object does it expose?

- Prompt/source: direct-assessment and pairwise-ranking evaluation prompts with user-defined criteria.
- Trace/action author: candidate models produce responses; Prometheus 2 assigns scores or rankings.
- Answer/artifact format: rubric-conditioned scalar score, critique, or pairwise preference output.
- Process fields:
- instruction, candidate response, evaluation criterion, assessment format, score/ranking, reference judgment.
- Environment or substrate: open evaluator model, GitHub code, ACL software/data artifacts, and HF weights.
- Terminal predicate: judge decision correlates with human preference or criterion-specific assessment.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: judgment_required.
- Recorded verifier/reward/environment: Prometheus 2 judge output aligned against human/proprietary-judge benchmarks.
- Supervision granularity: answer_level, pairwise_preference, scalar_reward.

## 4. How is the data constructed?

- Base model: Prometheus evaluator model family.
- Teacher: human judgments and strong evaluator references across direct and pairwise tasks.
- Generator: training pipeline merges evaluator capabilities across formats.
- Filtering rule: rubric criteria and benchmark sources define evaluation records.
- Sampling protocol: pin assessment format, rubric, model checkpoint, and benchmark source.
- Inference budget: judge calls scale with number of responses and criteria.
- Optimizer/scaffold: open evaluator training/inference package.

## 5. How can it enter post-training?

Recorded training/evaluation use: reward_modeling, preference_learning, evaluation, audit.

Use it as an open judge/reward-model candidate when criterion-conditioned evaluation matters.

## 6. What should readers audit?

- Which direct-assessment and pairwise datasets train the judge?
- Are judge-training examples separated from judge-evaluation benchmarks?
- Can candidate model outputs leak into judge training?
- Which Prometheus 2 checkpoint and prompt template produced each score?
- Are licenses, data versions, model checkpoints, and evaluation prompts pinned before reuse?

## 7. What is missing or risky?

- Open judges can inherit rubric bias.
- Agreement with another judge is not the same as correctness.
- Pairwise and scalar formats can disagree.

## 8. Why it matters for post-training reasoning data

It gives the atlas a concrete open-source judge model whose training/evaluation data can be audited instead of treating proprietary judges as black boxes.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2405.01535) · [🏛️ ACL](https://aclanthology.org/2024.emnlp-main.248/) · [🔗 DOI](https://doi.org/10.18653/v1/2024.emnlp-main.248) · [🐙 Code](https://github.com/prometheus-eval/prometheus-eval) · [🗂️ Data](https://aclanthology.org/2024.emnlp-main.248.data.zip) · [🤗 HF](https://huggingface.co/prometheus-eval/prometheus-7b-v2.0)

- Data ID: `prometheus-2-an-open-source-language-model-specialized-in-evaluating-other-langu-2024`
- Citation status: verified
- Confidence: high
