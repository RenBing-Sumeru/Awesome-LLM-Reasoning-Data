<!-- entry_id: truthfulqa-2022 -->
<!-- card_type: benchmarks -->
# TruthfulQA

> Curation level: L5_audit_ready
> Category: judgment_required_rubrics_safety_domain, audit_failure_contamination_verifier_attacks, benchmarks_evaluation
> Links: [📄 Paper](https://arxiv.org/abs/2109.07958) · [🏛️ ACL](https://aclanthology.org/2022.acl-long.229/) · [🐙 Code](https://github.com/sylinrl/TruthfulQA)

## TL;DR

TruthfulQA is a benchmark for measuring whether models imitate common human falsehoods instead of giving truthful answers.

It is a canonical truthfulness audit surface for reasoning models because stronger generation can still amplify persuasive false answers learned from web text.

## 1. What is this work?

- Year / venue: 2022 · ACL.
- Atlas role: benchmark, audit_failure.
- Domains: truthfulness, factuality, safety.
- Current status: verified.
- Why it belongs: Benchmark and audit entry for answer truthfulness, misconception resistance, and safety-alignment evaluation.

## 2. What data object does it expose?

- Prompt/source: 817 human-written questions spanning misconception-prone categories such as health, law, finance, politics, and fiction.
- Trace/action author: Evaluated models answer zero-shot or under benchmark prompts; human references define truthful and false answer sets.
- Answer/artifact format: free-form generation or multiple-choice answer with truthfulness and informativeness labels.
- Process fields:
- question category, reference true answers, reference false answers, model answer, truthfulness score, informativeness score.
- Environment or substrate: offline benchmark with human-written items and evaluator scripts.
- Terminal predicate: answer is truthful and informative rather than a plausible misconception.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: judgment_required, mixed.
- Recorded verifier/reward/environment: human references plus automated/human scoring protocols for truthfulness and informativeness.
- Supervision granularity: answer_level.

## 4. How is the data constructed?

- Base model: evaluated GPT, GPT-Neo/J, GPT-2, and T5-style baselines in the original study.
- Teacher: human-authored reference answer sets.
- Generator: benchmark authors construct questions designed to trigger imitative falsehoods.
- Filtering rule: questions target common misconceptions where web-trained models may imitate false beliefs.
- Sampling protocol: report exact evaluation mode because generation and multiple-choice settings measure different behaviors.
- Inference budget: prompt wording and sampling affect whether a model hedges, refuses, or fabricates.
- Optimizer/scaffold: evaluation harness distributed with the benchmark repository.

## 5. How can it enter post-training?

Recorded training/evaluation use: evaluation, safety_alignment, audit.

Use it as a truthfulness and misconception-resistance evaluation target; keep it separate from ordinary helpfulness or refusal benchmarks.

## 6. What should readers audit?

- Which categories dominate model failures?
- Are generated answers judged for both truthfulness and informativeness?
- Could benchmark questions or reference answers have entered training corpora?
- Are refusal, uncertainty, and factuality measured separately?
- Are licenses, data versions, and evaluation prompts pinned before reuse?

## 7. What is missing or risky?

- A model can be uninformative but truthful.
- A model can sound confident while reproducing a human misconception.
- Multiple-choice and generation modes can lead to different conclusions.

## 8. Why it matters for post-training reasoning data

It is a canonical truthfulness audit surface for reasoning models because stronger generation can still amplify persuasive false answers learned from web text.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2109.07958) · [🏛️ ACL](https://aclanthology.org/2022.acl-long.229/) · [🐙 Code](https://github.com/sylinrl/TruthfulQA)

- Data ID: `truthfulqa-2022`
- Citation status: verified
- Confidence: high
