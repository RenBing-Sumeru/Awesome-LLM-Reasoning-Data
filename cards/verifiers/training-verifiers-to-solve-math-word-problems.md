<!-- entry_id: training-verifiers-to-solve-math-word-problems-2021 -->
<!-- card_type: verifiers -->
# Training verifiers to solve math word problems

> Curation level: L5_audit_ready
> Category: process_supervision_prm
> Links: [📄 Paper](https://arxiv.org/abs/2110.14168) · [🐙 Code](https://github.com/openai/grade-school-math) · [🤗 Hugging Face](https://huggingface.co/datasets/openai/gsm8k)

## TL;DR

Introduces GSM8K and trains verifier models to rank model-generated math solutions by likely correctness.

It anchors answer-level math reasoning data as a pair of problem, solution, and verifier-selection signal, anticipating RLVR and reward-model workflows.

## 1. What is this work?

- Year / venue: 2021 · arXiv.
- Atlas role: benchmark, verifier_reward, data_release.
- Domains: math.
- Current status: verified.
- Why it belongs: Core math-verifier reference linking natural-language solutions, final-answer checks, and learned verifier reranking.

## 2. What data object does it expose?

- Prompt/source: human-written grade-school math word problems.
- Trace/action author: human solution writers and model-generated candidate solutions.
- Answer/artifact format: natural-language solution ending in a numeric answer.
- Process fields: question, solution trace, final answer, candidate solution set.
- Environment or substrate: offline math benchmark and verifier reranking setup.
- Terminal predicate: final numeric answer correctness and learned verifier score.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic final-answer check plus learned verifier.
- Recorded verifier/reward/environment: verifier model ranks sampled solutions using correctness labels.
- Supervision granularity: answer_level and scalar_reward.

## 4. How is the data constructed?

- Base model: language model sampled on math problems.
- Teacher: human-written benchmark solutions and correctness labels.
- Generator: model-generated solution candidates.
- Filtering rule: answer correctness and verifier ranking.
- Sampling protocol: multiple candidate solutions per problem.
- Inference budget: repeated sampling enables verifier selection.
- Optimizer/scaffold: supervised verifier training and reranking.

## 5. How can it enter post-training?

Recorded training/evaluation use: evaluation, reward_modeling.

Use it to separate data quality from selection quality: stronger generation helps only if answer extraction and verifier ranking are reliable.

## 6. What should readers audit?

- Is answer extraction deterministic?
- Are verifier false positives and false negatives reported?
- Does the verifier learn reasoning quality or surface cues?
- Are training/test splits and benchmark reuse risks clear?
- Are generated incorrect solutions preserved for analysis?

## 7. What is missing or risky?

- Numeric answer extraction can fail on formatting.
- Repeated sampling can hide weak reasoning behind selection.
- A learned verifier can overfit benchmark styles.

## 8. Why it matters for post-training reasoning data

It anchors answer-level math reasoning data as a pair of problem, solution, and verifier-selection signal, anticipating RLVR and reward-model workflows.

The reusable lesson is to identify the feedback-bearing record: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2110.14168) · [🐙 Code](https://github.com/openai/grade-school-math) · [🤗 Hugging Face](https://huggingface.co/datasets/openai/gsm8k)

- Data ID: `training-verifiers-to-solve-math-word-problems-2021`
- Citation status: verified
- Confidence: high
