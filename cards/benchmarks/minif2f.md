<!-- entry_id: minif2f-a-cross-system-benchmark-for-formal-olympiad-level-mathematics-2021 -->
<!-- card_type: benchmarks -->
# miniF2F: A cross-system benchmark for formal olympiad-level mathematics

> Curation level: L5_audit_ready
> Category: programmatic_math_code_proof, benchmarks_evaluation
> Links: [📄 Paper](https://arxiv.org/abs/2109.00110) · [🏛️ OpenReview](https://openreview.net/forum?id=9ZPegFuFTFv) · [🐙 Code](https://github.com/openai/miniF2F)

## TL;DR

miniF2F is a cross-system formal mathematics benchmark for comparing theorem provers across Lean, Metamath, Isabelle, and HOL Light targets.

It is a compact formal-proof evaluation surface where the verifier is not a text judge but a proof assistant accepting or rejecting a proof.

## 1. What is this work?

- Year / venue: 2021 · ICLR.
- Atlas role: benchmark, data_release.
- Domains: formal-math, theorem-proving, proof-assistants.
- Current status: verified.
- Why it belongs: Formal-math benchmark entry for programmatic verification and proof-assistant-grounded reasoning evaluation.

## 2. What data object does it expose?

- Prompt/source: formalized Olympiad and classroom mathematics statements across proof-assistant languages.
- Trace/action author: theorem provers generate tactics or proof terms for formal statements.
- Answer/artifact format: formal proof accepted by a target proof assistant.
- Process fields:
- formal system, theorem statement, split, generated proof/tactics, verifier result.
- Environment or substrate: Lean, Metamath, Isabelle, and HOL Light style theorem proving environments.
- Terminal predicate: formal proof verifies in the target system.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic, environmental.
- Recorded verifier/reward/environment: proof assistant kernel/checker acceptance.
- Supervision granularity: answer_level, step_level.

## 4. How is the data constructed?

- Base model: evaluated theorem proving systems and later LLM-based provers.
- Teacher: formalized benchmark statements and proof assistant checkers.
- Generator: human translators and theorem prover agents produce proof attempts.
- Filtering rule: items are selected to enable cross-system comparison.
- Sampling protocol: report target system and theorem split because comparability depends on formalization coverage.
- Inference budget: search depth, tactic budget, and retry count directly affect success rate.
- Optimizer/scaffold: proof-assistant execution environment.

## 5. How can it enter post-training?

Recorded training/evaluation use: evaluation, agent_training, sft.

Use it as a formal-verification benchmark for theorem-proving agents and proof-data recipes.

## 6. What should readers audit?

- Which source competitions and course materials are represented?
- Are theorem statements shared across systems but proof searches system-specific?
- Have formal statements or proofs entered prover training data?
- Which fork or translated version of the benchmark is used?
- Are licenses, data versions, and evaluation prompts pinned before reuse?

## 7. What is missing or risky?

- A theorem can be easier in one formal system than another.
- Search budget can dominate model differences.
- Forks can drift from the original benchmark.

## 8. Why it matters for post-training reasoning data

It is a compact formal-proof evaluation surface where the verifier is not a text judge but a proof assistant accepting or rejecting a proof.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2109.00110) · [🏛️ OpenReview](https://openreview.net/forum?id=9ZPegFuFTFv) · [🐙 Code](https://github.com/openai/miniF2F)

- Data ID: `minif2f-a-cross-system-benchmark-for-formal-olympiad-level-mathematics-2021`
- Citation status: verified
- Confidence: high
