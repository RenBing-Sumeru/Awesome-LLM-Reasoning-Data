<!-- entry_id: gpqa-2023 -->
<!-- card_type: benchmarks -->
# GPQA

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=gpqa-2023&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=gpqa-2023&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=gpqa-2023&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: judgment_rubric_domain_expert_data, benchmarks_evaluation_surfaces, audit_failure_contamination_verifier_attacks
> Links: [📄 Paper](https://arxiv.org/abs/2311.12022) · [🏛️ OpenReview](https://openreview.net/forum?id=Ti67584b98) · [🐙 Code](https://github.com/idavidrein/gpqa)

## TL;DR

GPQA is a graduate-level science Q&A benchmark designed so skilled non-experts with web access still struggle.

It is a scalable-oversight benchmark: the data object tests whether models can answer expert questions that are difficult for ordinary validators to check.

## 1. What is this work?

- Year / venue: 2023 · arXiv.
- Atlas role: benchmark.
- Domains: science, expert-evaluation, scalable-oversight.
- Current status: verified.
- Why it belongs: Judgment-required science benchmark entry for expert-level Q&A and oversight evaluation.

## 2. What data object does it expose?

- Prompt/source: expert-written multiple-choice questions in biology, physics, and chemistry.
- Trace/action author: models choose answers and may provide rationales; experts provide questions and labels.
- Answer/artifact format: multiple-choice answer with optional rationale and expert label.
- Process fields:
- domain, question, answer options, expert label, validation metadata, canary/string metadata.
- Environment or substrate: offline expert Q&A benchmark.
- Terminal predicate: model selects the expert-correct answer.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: judgment_required.
- Recorded verifier/reward/environment: expert-authored answer key and validation protocol.
- Supervision granularity: answer_level.

## 4. How is the data constructed?

- Base model: evaluated frontier and open models vary across studies.
- Teacher: domain experts write and validate questions.
- Generator: benchmark authors curate difficult science questions.
- Filtering rule: questions are selected to be hard for non-experts even with web access.
- Sampling protocol: report domain subset, answer-choice ordering, and prompting mode.
- Inference budget: reasoning budget and tool access can materially change scores.
- Optimizer/scaffold: multiple-choice evaluation harness.

## 5. How can it enter post-training?

Recorded training/evaluation use: evaluation, audit.

Use it for expert-level reasoning evaluation and scalable-oversight stress tests.

## 6. What should readers audit?

- Which domains and difficulty levels dominate?
- Are public examples separated from evaluation items?
- Could benchmark questions appear in training or evaluation discussions?
- Are canary strings and dataset versions preserved?
- Are licenses, data versions, and evaluation prompts pinned before reuse?

## 7. What is missing or risky?

- Multiple-choice guessing can inflate scores.
- Non-expert validators may not catch subtle mistakes.
- Tool access changes what the benchmark measures.

## 8. Why it matters for post-training reasoning data

It is a scalable-oversight benchmark: the data object tests whether models can answer expert questions that are difficult for ordinary validators to check.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2311.12022) · [🏛️ OpenReview](https://openreview.net/forum?id=Ti67584b98) · [🐙 Code](https://github.com/idavidrein/gpqa)

- Data ID: `gpqa-2023`
- Citation status: verified
- Confidence: high
