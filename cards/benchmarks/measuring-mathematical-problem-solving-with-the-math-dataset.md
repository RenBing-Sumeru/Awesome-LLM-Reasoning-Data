<!-- entry_id: measuring-mathematical-problem-solving-with-the-math-dataset-2021 -->
<!-- card_type: benchmarks -->
# 🃏 Measuring mathematical problem solving with the MATH dataset

> Curation level: L5_audit_ready
> Category: programmatic_math_code_proof, benchmarks_evaluation
> Links: [📄 Paper](https://arxiv.org/abs/2103.03874) · [🐙 Code](https://github.com/hendrycks/math)

## TL;DR

Introduces the MATH benchmark with competition-style problems and step-by-step solutions.

MATH became a core answer-verifiable reasoning surface for evaluating and training math reasoning behavior.

This card is written for readers who need to decide whether the work is a foundation, a reusable data source, a verifier surface, a benchmark, or an audit reference before opening the paper.

## 1. What is this work?

- Year / venue: 2021 · NeurIPS Datasets and Benchmarks.
- Atlas role: benchmark, data_release.
- Domains: math.
- Current status: verified.

This work belongs in the atlas because: Seeded from local BibTeX for later atlas classification; needs curator review..

## 2. What data object does it expose?

- Prompt/source: unknown.
- Trace/action author: unknown.
- Answer/artifact format: unknown.
- Process fields: unknown.
- Environment or substrate: unknown.
- Terminal predicate: unknown.

If a field is `unknown`, treat it as a metadata gap rather than an absence claim.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic.
- Recorded verifier/reward/environment: unknown.
- Supervision granularity: answer_level.

Readers should identify whether correctness comes from exact answers, unit tests, proof checkers, environment terminal predicates, human labels, rubric judgments, learned reward models, or LLM judges.

## 4. How is the data constructed?

- Base model: unknown.
- Teacher: unknown.
- Generator: unknown.
- Filtering rule: unknown.
- Sampling protocol: unknown.
- Inference budget: unknown.
- Optimizer/scaffold: unknown.

The important construction question is whether another team could recreate the accepted examples, rejected examples, and feedback signal from the public record.

## 5. How can it enter post-training?

Recorded training/evaluation use: evaluation, sft.

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

- Source mixture: unknown.
- Split: unknown.
- Decontamination: unknown.
- License: unknown.
- Lineage: unknown.
- Known failure modes: unknown.

Unknown fields should become follow-up issues before the entry is used as strong evidence.

## 8. Why it matters for post-training reasoning data

MATH became a core answer-verifiable reasoning surface for evaluating and training math reasoning behavior.

The broader lesson is to look past the paper title and ask what feedback-bearing record the work contributes: a prompt-answer pair, trace, label, preference, reward, verifier, trajectory, benchmark item, or audit failure.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2103.03874) · [🐙 Code](https://github.com/hendrycks/math)

- Data ID: `measuring-mathematical-problem-solving-with-the-math-dataset-2021`
- Citation status: verified
- Confidence: high
