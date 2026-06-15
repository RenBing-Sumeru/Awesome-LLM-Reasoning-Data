<!-- entry_id: humaneval-code-generation-benchmark-2021 -->
<!-- card_type: benchmarks -->
# 🃏 HumanEval: Hand-Written Evaluation Set

> Curation level: L5_audit_ready
> Category: programmatic_math_code_proof, benchmarks_evaluation
> Links: [📄 Paper](https://arxiv.org/abs/2107.03374) · [🐙 Code](https://github.com/openai/human-eval)

## TL;DR

Hand-written Python code-generation benchmark with unit-test-based correctness checks.

HumanEval made executable unit tests a standard verifier for code reasoning, pass@k evaluation, and later code-data recipes.

This card is written for readers who need to decide whether the work is a foundation, a reusable data source, a verifier surface, a benchmark, or an audit reference before opening the paper.

## 1. What is this work?

- Year / venue: 2021 · arXiv / OpenAI dataset.
- Atlas role: benchmark, data_release.
- Domains: code.
- Current status: verified.

This work belongs in the atlas because: Canonical programmatic code benchmark where executable tests define the feedback contract for code reasoning..

## 2. What data object does it expose?

- Prompt/source: hand-written Python function prompts.
- Trace/action author: benchmark authors.
- Answer/artifact format: Python function completion.
- Process fields: prompt, canonical solution, unit tests.
- Environment or substrate: Python execution harness.
- Terminal predicate: generated code passes tests.

If a field is `unknown`, treat it as a metadata gap rather than an absence claim.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic.
- Recorded verifier/reward/environment: unit tests.
- Supervision granularity: answer_level.

Readers should identify whether correctness comes from exact answers, unit tests, proof checkers, environment terminal predicates, human labels, rubric judgments, learned reward models, or LLM judges.

## 4. How is the data constructed?

- Base model: Codex evaluated in paper.
- Teacher: unknown.
- Generator: benchmark authors.
- Filtering rule: hand-written benchmark curation.
- Sampling protocol: pass@k evaluation.
- Inference budget: pass@k samples in evaluation.
- Optimizer/scaffold: code generation evaluation harness.

The important construction question is whether another team could recreate the accepted examples, rejected examples, and feedback signal from the public record.

## 5. How can it enter post-training?

Recorded training/evaluation use: evaluation.

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

- Source mixture: hand-written Python tasks.
- Split: evaluation set.
- Decontamination: unknown.
- License: MIT in official repository.
- Lineage: OpenAI HumanEval release.
- Known failure modes: public benchmark contamination, unit-test coverage gaps.

Unknown fields should become follow-up issues before the entry is used as strong evidence.

## 8. Why it matters for post-training reasoning data

HumanEval made executable unit tests a standard verifier for code reasoning, pass@k evaluation, and later code-data recipes.

The broader lesson is to look past the paper title and ask what feedback-bearing record the work contributes: a prompt-answer pair, trace, label, preference, reward, verifier, trajectory, benchmark item, or audit failure.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2107.03374) · [🐙 Code](https://github.com/openai/human-eval)

- Data ID: `humaneval-code-generation-benchmark-2021`
- Citation status: verified
- Confidence: high
