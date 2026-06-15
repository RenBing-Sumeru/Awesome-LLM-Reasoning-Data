<!-- entry_id: measuring-coding-challenge-competence-with-apps-2021 -->
<!-- card_type: benchmarks -->
# Measuring coding challenge competence with APPS

> Curation level: L5_audit_ready
> Category: programmatic_math_code_proof, benchmarks_evaluation
> Links: [📄 Paper](https://arxiv.org/abs/2105.09938) · [🏛️ OpenReview](https://openreview.net/forum?id=sD93GOzH3i5) · [🐙 Code](https://github.com/hendrycks/apps)

## TL;DR

APPS evaluates code-generation competence with 10,000 programming problems checked by executable test cases.

It is a pre-HumanEval large-scale code benchmark where the feedback-bearing object is a problem statement, generated program, and unit-test outcome.

## 1. What is this work?

- Year / venue: 2021 · NeurIPS.
- Atlas role: benchmark, data_release.
- Domains: code, programming, unit-tests.
- Current status: verified.
- Why it belongs: Programmatic benchmark entry for coding-challenge data, unit-test verification, and pass-rate evaluation.

## 2. What data object does it expose?

- Prompt/source: coding-challenge problem statements with natural-language specifications and hidden tests.
- Trace/action author: models generate Python programs; human/community sources provide problem statements and tests.
- Answer/artifact format: Python code submission evaluated against test cases.
- Process fields:
- difficulty, prompt, starter code where available, generated solution, public/hidden test outcomes.
- Environment or substrate: offline programming benchmark with executable Python tests.
- Terminal predicate: generated code satisfies the problem specification under tests.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic.
- Recorded verifier/reward/environment: unit-test pass/fail signal.
- Supervision granularity: answer_level.

## 4. How is the data constructed?

- Base model: evaluated code and language-model baselines.
- Teacher: benchmark tests and reference solutions provide supervision surface.
- Generator: models produce candidate programs from problem text.
- Filtering rule: problem difficulty and test availability define evaluation splits.
- Sampling protocol: pass@k and sampling settings matter because many candidates can be generated per problem.
- Inference budget: candidate count and execution budget should be reported.
- Optimizer/scaffold: program execution harness and dataset loader.

## 5. How can it enter post-training?

Recorded training/evaluation use: evaluation, sft, test_time_compute.

Use it for code-evaluation, code-SFT filtering, and test-time sampling studies where executable feedback is central.

## 6. What should readers audit?

- Which contest sources and difficulty bands dominate?
- Are train/test splits respected for code pretraining and fine-tuning?
- Could problem statements or solutions be present in public code corpora?
- Are public tests, hidden tests, and generated tests distinguished?
- Are licenses, data versions, and evaluation prompts pinned before reuse?

## 7. What is missing or risky?

- Programs can overfit weak tests.
- Syntax validity is not the same as functional correctness.
- Contamination can inflate code benchmark scores.

## 8. Why it matters for post-training reasoning data

It is a pre-HumanEval large-scale code benchmark where the feedback-bearing object is a problem statement, generated program, and unit-test outcome.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2105.09938) · [🏛️ OpenReview](https://openreview.net/forum?id=sD93GOzH3i5) · [🐙 Code](https://github.com/hendrycks/apps)

- Data ID: `measuring-coding-challenge-competence-with-apps-2021`
- Citation status: verified
- Confidence: high
