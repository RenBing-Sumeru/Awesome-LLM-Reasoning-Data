<!-- entry_id: aegis2-2025 -->
<!-- card_type: verifiers -->
# Aegis2.0

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=aegis2-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=aegis2-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=aegis2-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: judgment_required_rubrics_safety_domain, benchmarks_evaluation, construction_recipes_open_reasoning_data
> Links: [📄 Paper](https://arxiv.org/abs/2501.09004) · [🏛️ ACL](https://aclanthology.org/2025.naacl-long.306/) · [🗂️ Data](https://huggingface.co/datasets/nvidia/Aegis-AI-Content-Safety-Dataset-2.0)

## TL;DR

Aegis2.0 releases a human-annotated AI-safety dataset and risk taxonomy for training and evaluating LLM guardrails.

It is useful for reasoning-data readers because safety alignment often depends on rubric-like hazard labels, response-pair judgments, and guard-model training data rather than exact-answer verification.

## 1. What is this work?

- Year / venue: 2025 · arXiv.
- Atlas role: data_release, benchmark, verifier_reward.
- Domains: safety, guardrails, alignment.
- Current status: verified.
- Why it belongs: Safety data-release and benchmark entry for risk taxonomy design, guardrail labels, and commercially usable safety-alignment data.

## 2. What data object does it expose?

- Prompt/source: human-LLM interaction samples spanning safety-relevant prompts and responses.
- Trace/action author: humans and a multi-LLM jury contribute labels or judgments over interaction safety.
- Answer/artifact format: prompt or prompt-response sample with hazard taxonomy labels and safety annotations.
- Process fields: hazard category, fine-grained risk label, response-safety decision, split metadata when using the dataset release.
- Environment or substrate: offline guardrail training/evaluation dataset.
- Terminal predicate: whether the interaction is categorized under the safety taxonomy and judged safe/unsafe for the intended guardrail policy.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: judgment-required safety taxonomy plus model/human adjudication.
- Recorded verifier/reward/environment: risk labels and guard-model evaluation signal.
- Supervision granularity: example-level label and scalar/decision signal for guardrail training.

## 4. How is the data constructed?

- Base model: guard models trained/evaluated downstream; source model mix should be checked in the release.
- Teacher: human annotators and multi-LLM jury system.
- Generator: safety prompts and human-LLM interactions collected or generated for taxonomy coverage.
- Filtering rule: taxonomy-guided curation over top-level and fine-grained hazard categories.
- Sampling protocol: stratified train/validation/test release should be preserved when benchmarking.
- Inference budget: jury or guard-model scoring budget should be reported when reproducing.
- Optimizer/scaffold: parameter-efficient guard-model training and evaluation.

## 5. How can it enter post-training?

Recorded training/evaluation use: safety_alignment, evaluation, reward_modeling.

Use it for safety guardrail SFT/evaluation or reward-model auditing, but keep the taxonomy and label policy attached to every derived training mixture.

## 6. What should readers audit?

- Are the 12 top-level and fine-grained hazard categories preserved?
- Are human labels separated from multi-LLM jury labels?
- Is commercial-use licensing and split policy clear?
- Do guard models generalize to new risk categories or merely memorize taxonomy wording?
- Are refusal, overblocking, and topic-following tradeoffs measured?

## 7. What is missing or risky?

- Taxonomy labels can hide disagreement between annotators or judge models.
- Safety datasets can overfit visible hazard categories and miss emerging harms.
- Guardrail training may trade helpfulness for over-refusal if topic-following data is not tracked.

## 8. Why it matters for post-training reasoning data

It is useful for reasoning-data readers because safety alignment often depends on rubric-like hazard labels, response-pair judgments, and guard-model training data rather than exact-answer verification.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2501.09004) · [🏛️ ACL](https://aclanthology.org/2025.naacl-long.306/) · [🗂️ Data](https://huggingface.co/datasets/nvidia/Aegis-AI-Content-Safety-Dataset-2.0)

- Data ID: `aegis2-2025`
- Citation status: verified
- Confidence: high
