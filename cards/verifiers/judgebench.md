<!-- entry_id: judgebench-a-benchmark-for-evaluating-llm-based-judges-2024 -->
<!-- card_type: verifiers -->
# JudgeBench: A Benchmark for Evaluating LLM-based Judges
<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=judgebench-a-benchmark-for-evaluating-llm-based-judges-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=judgebench-a-benchmark-for-evaluating-llm-based-judges-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=judgebench-a-benchmark-for-evaluating-llm-based-judges-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L4_carded
> Category: preference_reward_feedback_data, benchmarks_evaluation_surfaces, judgment_rubric_domain_expert_data
> Links: [arXiv](https://arxiv.org/abs/2410.12784) - [Code](https://github.com/ScalerLab/JudgeBench) - [Data](https://huggingface.co/datasets/ScalerLab/JudgeBench)

## TL;DR

JudgeBench evaluates LLM judges and reward models on 620 difficult response pairs with objective correctness labels.

It is a judge-reliability benchmark. Good JudgeBench performance should not be treated as proof that a judge can label open-ended human preferences safely.

## 1. What is this work?

The paper converts hard knowledge, reasoning, math, and coding tasks into response-pair examples for evaluating LLM-based judges.

## 2. What data object does it expose?

The relevant record is:

- pair_id,
- original_id,
- source,
- question,
- response_model,
- response_A,
- response_B,
- objective label.

## 3. What is the verifier / reward / judge / environment?

The verifier is an objective correctness label over a response pair. Judges pass when they select the objectively correct response.

The benchmark also audits order sensitivity by running pairs with different response orderings.

## 4. How is the data constructed?

The reported recipe includes:

- choose difficult source tasks,
- generate paired responses with GPT-4o and Claude-3.5-Sonnet,
- assign labels from objective source correctness,
- run prompted judges, fine-tuned judges, multi-agent judges, and reward models,
- compare results across response orderings.

Unknown locally: temperature, source-dataset licenses, decontamination, and repository license.

## 5. How can it enter post-training?

Recorded use:

- evaluation.

Use it to audit judge reliability under objective correctness. Do not use it as human preference training data unless the objective-label contract fits the downstream task.

## 6. What should readers audit?

- Objective labels depend on source dataset correctness.
- Pair construction can introduce artifacts.
- Order sensitivity and prompt sensitivity must be measured separately.
- JudgeBench performance is not evidence of open-ended preference-label quality.

## 7. What is missing or risky?

- HF dataset revision and split.
- Source-dataset licenses.
- Whether local judges saw the source tasks during training.
- Order-sensitivity handling in the evaluation harness.
- Difference between objective correctness and subjective preference.

## 8. Why it matters for post-training reasoning data

It separates judge correctness from preference appeal, which is essential when LLM judges are reused as reward/verifier components.

## 9. Links and citation

- Institution: UC Berkeley; UC San Diego; University of Chicago.
- Official links: arXiv, GitHub, Hugging Face dataset, and leaderboard.
- arXiv: https://arxiv.org/abs/2410.12784
- DOI: https://doi.org/10.48550/arXiv.2410.12784
- Code: https://github.com/ScalerLab/JudgeBench
- Data: https://huggingface.co/datasets/ScalerLab/JudgeBench
- Data ID: `judgebench-a-benchmark-for-evaluating-llm-based-judges-2024`
- Citation status: verified
- Confidence: high
