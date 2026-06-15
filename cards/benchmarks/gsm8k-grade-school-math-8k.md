<!-- entry_id: gsm8k-grade-school-math-2021 -->
<!-- card_type: benchmarks -->
# 🃏 GSM8K: Grade School Math 8K

> Curation level: L5_audit_ready
> Category: programmatic_math_code_proof, benchmarks_evaluation
> Links: [📄 Paper](https://arxiv.org/abs/2110.14168) · [🐙 Code](https://github.com/openai/grade-school-math) · [🤗 HF](https://huggingface.co/datasets/openai/gsm8k)

## TL;DR

Canonical grade-school math benchmark with natural-language solutions and final numeric answers.

GSM8K is the dataset anchor for early verifier-based math reasoning and remains a common sanity check for post-training reasoning data.

This card is written for readers who need to decide whether the work is a foundation, a reusable data source, a verifier surface, a benchmark, or an audit reference before opening the paper.

## 1. What is this work?

- Year / venue: 2021 · arXiv / OpenAI dataset.
- Atlas role: benchmark, data_release.
- Domains: math.
- Current status: verified.

This work belongs in the atlas because: Canonical math word-problem benchmark used to study answer verification, verifier reranking, and math reasoning evaluation..

## 2. What data object does it expose?

- Prompt/source: human-written grade-school math word problems.
- Trace/action author: human solution writers.
- Answer/artifact format: natural-language solution with final numeric answer.
- Process fields: question, solution, final answer.
- Environment or substrate: offline math benchmark.
- Terminal predicate: final answer matches expected numeric target.

If a field is `unknown`, treat it as a metadata gap rather than an absence claim.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic.
- Recorded verifier/reward/environment: answer extraction and arithmetic correctness checks.
- Supervision granularity: answer_level.

Readers should identify whether correctness comes from exact answers, unit tests, proof checkers, environment terminal predicates, human labels, rubric judgments, learned reward models, or LLM judges.

## 4. How is the data constructed?

- Base model: unknown.
- Teacher: unknown.
- Generator: human problem writers.
- Filtering rule: curated math word problem collection.
- Sampling protocol: unknown.
- Inference budget: unknown.
- Optimizer/scaffold: verifier reranking studied in companion paper.

The important construction question is whether another team could recreate the accepted examples, rejected examples, and feedback signal from the public record.

## 5. How can it enter post-training?

Recorded training/evaluation use: evaluation, sft, reward_modeling.

Depending on the exposed fields, this work may support SFT, distillation, preference learning, reward modeling, process supervision, RLVR, agent training, evaluation, or audit. Do not reuse it for a training objective broader than its released data object supports.

## 6. What should readers audit?

- Is the official paper or venue link pinned and stable?
- Is the verifier deterministic, replayable, or tied to a moving service?
- Are failures, rejected samples, ambiguous labels, or near-misses preserved?
- Is contamination or train/eval overlap checked?
- Are the base model, teacher, generator, and filtering rules disclosed?
- Is the source mixture, split policy, license, and lineage clear?
- Is inference budget or scaffold behavior disclosed when it affects the result?

## 7. What is missing or risky?

- Source mixture: grade-school math word problems.
- Split: train/test split in official release.
- Decontamination: unknown.
- License: MIT in official repository.
- Lineage: OpenAI grade-school-math release.
- Known failure modes: answer extraction errors, contamination through benchmark reuse.

Unknown fields should become follow-up issues before the entry is used as strong evidence.

## 8. Why it matters for post-training reasoning data

GSM8K is the dataset anchor for early verifier-based math reasoning and remains a common sanity check for post-training reasoning data.

The broader lesson is to look past the paper title and ask what feedback-bearing record the work contributes: a prompt-answer pair, trace, label, preference, reward, verifier, trajectory, benchmark item, or audit failure.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2110.14168) · [🐙 Code](https://github.com/openai/grade-school-math) · [🤗 HF](https://huggingface.co/datasets/openai/gsm8k)

- Data ID: `gsm8k-grade-school-math-2021`
- Citation status: verified
- Confidence: high
