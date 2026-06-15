<!-- entry_id: swe-bench-can-language-models-resolve-real-world-github-issues-2023 -->
<!-- card_type: agents -->
# 🃏 SWE-bench: Can language models resolve real-world GitHub issues?

> Curation level: L5_audit_ready
> Category: environmental_agents_tools_web_swe, benchmarks_evaluation
> Links: [📄 Paper](https://arxiv.org/abs/2310.06770) · [🏛️ OpenReview](https://openreview.net/forum?id=VTF8yNQM66) · [🐙 Code](https://github.com/swe-bench/SWE-bench) · [🌐 Project](https://www.swebench.com/original.html)

## TL;DR

Introduces repository-level software-engineering tasks validated by issue resolution and tests.

SWE-bench turns real GitHub issue fixing into an environmental reasoning-data object with codebase state, patch actions, and test-backed outcomes.

This card is written for readers who need to decide whether the work is a foundation, a reusable data source, a verifier surface, a benchmark, or an audit reference before opening the paper.

## 1. What is this work?

- Year / venue: 2023 · ICLR.
- Atlas role: benchmark, agent_environment.
- Domains: software_engineering, code.
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

- Verification contract: environmental, programmatic.
- Recorded verifier/reward/environment: unknown.
- Supervision granularity: full_episode, state_action_level.

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

Recorded training/evaluation use: evaluation, agent_training.

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

SWE-bench turns real GitHub issue fixing into an environmental reasoning-data object with codebase state, patch actions, and test-backed outcomes.

The broader lesson is to look past the paper title and ask what feedback-bearing record the work contributes: a prompt-answer pair, trace, label, preference, reward, verifier, trajectory, benchmark item, or audit failure.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2310.06770) · [🏛️ OpenReview](https://openreview.net/forum?id=VTF8yNQM66) · [🐙 Code](https://github.com/swe-bench/SWE-bench) · [🌐 Project](https://www.swebench.com/original.html)

- Data ID: `swe-bench-can-language-models-resolve-real-world-github-issues-2023`
- Citation status: verified
- Confidence: high
