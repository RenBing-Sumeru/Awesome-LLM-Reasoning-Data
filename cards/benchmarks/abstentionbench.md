<!-- entry_id: abstentionbench-2025 -->
<!-- card_type: benchmarks -->
# AbstentionBench

> Curation level: L5_audit_ready
> Category: judgment_required_rubrics_safety_domain, audit_failure_contamination_verifier_attacks, benchmarks_evaluation
> Links: [📄 Paper](https://arxiv.org/abs/2506.09038) · [🏛️ Venue](https://proceedings.neurips.cc/paper_files/paper/2025/hash/fb122bfc3f0127a94ded048b5b03496f-Abstract-Datasets_and_Benchmarks_Track.html) · [🐙 Code](https://github.com/facebookresearch/AbstentionBench) · [🗂️ Data](https://huggingface.co/datasets/facebook/AbstentionBench)

## TL;DR

AbstentionBench evaluates whether LLMs know when not to answer across unknown, underspecified, false-premise, subjective, and stale-information questions.

It is a direct audit surface for reasoning models: stronger reasoning can still fail if the model confidently answers unanswerable questions instead of abstaining.

## 1. What is this work?

- Year / venue: 2025 · arXiv.
- Atlas role: benchmark, audit_failure.
- Domains: abstention, factuality, uncertainty.
- Current status: verified.
- Why it belongs: Benchmark and failure-mode entry for epistemic boundaries, uncertainty handling, and refusal/abstention evaluation.

## 2. What data object does it expose?

- Prompt/source: benchmark questions drawn from 20 datasets plus new underspecified reasoning challenges.
- Trace/action author: evaluated models produce answers or abstentions.
- Answer/artifact format: model response, abstention decision, and correctness/abstention judgment.
- Process fields: scenario type, source dataset, answerability label, judge/validation metadata.
- Environment or substrate: offline benchmark with model-evaluation harness.
- Terminal predicate: answer correctly when answerable and abstain when the prompt is unanswerable or underspecified.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: mixed correctness and abstention judgment.
- Recorded verifier/reward/environment: human-validated judges and benchmark labels for abstention scenarios.
- Supervision granularity: answer-level response plus abstention decision.

## 4. How is the data constructed?

- Base model: evaluated frontier/open models vary.
- Teacher: dataset labels and human-validated abstention judgments.
- Generator: benchmark authors assemble unanswerable and answerable prompts.
- Filtering rule: scenario definitions for unknown answer, underspecification, false premise, subjectivity, and outdated information.
- Sampling protocol: 20-dataset benchmark mixture should be cited with version.
- Inference budget: prompt and system-instruction choices affect abstention behavior.
- Optimizer/scaffold: evaluation harness for answer/abstain decisions.

## 5. How can it enter post-training?

Recorded training/evaluation use: evaluation, safety_alignment.

Use it as an evaluation and safety-alignment target; do not collapse abstention into ordinary refusal without preserving answerability labels.

## 6. What should readers audit?

- Are abstention and correctness judged separately?
- Which scenario types dominate model failures?
- Does reasoning fine-tuning improve accuracy but reduce abstention?
- Are instruction prompts allowed, and are they reported?
- Are human-validated judges calibrated for both abstention and answer correctness?

## 7. What is missing or risky?

- A model can game abstention by refusing too often.
- Benchmark labels around subjectivity and underspecification can be ambiguous.
- Prompt tuning may improve benchmark score without improving epistemic reasoning.

## 8. Why it matters for post-training reasoning data

It is a direct audit surface for reasoning models: stronger reasoning can still fail if the model confidently answers unanswerable questions instead of abstaining.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2506.09038) · [🏛️ Venue](https://proceedings.neurips.cc/paper_files/paper/2025/hash/fb122bfc3f0127a94ded048b5b03496f-Abstract-Datasets_and_Benchmarks_Track.html) · [🐙 Code](https://github.com/facebookresearch/AbstentionBench) · [🗂️ Data](https://huggingface.co/datasets/facebook/AbstentionBench)

- Data ID: `abstentionbench-2025`
- Citation status: verified
- Confidence: high
