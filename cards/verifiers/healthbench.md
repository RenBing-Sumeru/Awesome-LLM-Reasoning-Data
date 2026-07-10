<!-- entry_id: healthbench-2025 -->
<!-- card_type: verifiers -->
# HealthBench

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=healthbench-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=healthbench-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=healthbench-2025&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🤝 Preference & Reward Feedback (Track 02) · ⚖️ Judgment / Rubric / Domain Expert (Track 07) · 🎯 Training Usage & Objectives (Track 09) · 🧰 Benchmarks & Evaluation (Track 11) · 🧯 Audit & Failure Modes (Track 13) -->
> Subfield: 🧾 Rubric-conditioned rewards

> Curation level: L5_audit_ready

> Links: [📄 Paper](https://arxiv.org/abs/2505.08775)

## TL;DR

HealthBench evaluates healthcare conversations with physician-written, conversation-specific rubrics across safety, accuracy, communication, and domain contexts.

It is a high-stakes example of judgment-required reasoning data where rubric design matters more than exact-match scoring.

## 1. What is this work?

- Year / venue: 2025 · arXiv.
- Atlas role: benchmark, verifier_reward.
- Domains: health, safety, medical.
- Current status: verified.
- Why it belongs: Core rubric-based domain benchmark for medical/health reasoning, safety, and LLM-as-judge or expert-judged evaluation design.

## 2. What data object does it expose?

- Prompt/source: multi-turn health conversations with users or healthcare professionals.
- Trace/action author: model responses evaluated against physician-written criteria.
- Answer/artifact format: conversation response plus rubric criterion outcomes.
- Process fields: dialogue context, response, rubric criteria, score.
- Environment or substrate: open-ended healthcare QA/dialogue setting.
- Terminal predicate: rubric satisfaction across medically relevant criteria.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: expert rubric judgment.
- Recorded verifier/reward/environment: physician-created rubrics and benchmark variants.
- Supervision granularity: rubric_item and conversation_level.

## 4. How is the data constructed?

- Base model: evaluated models vary.
- Teacher: physician rubric authors and benchmark designers.
- Generator: model responses to health conversations.
- Filtering rule: conversation and rubric quality control.
- Sampling protocol: scenarios span emergencies, clinical data transformation, global health, and communication behavior.
- Inference budget: model response generation; judging depends on rubric application.
- Optimizer/scaffold: benchmark for evaluating health-oriented model behavior.

## 5. How can it enter post-training?

Recorded training/evaluation use: evaluation, reward_modeling, safety_alignment.

Use it as a rubric-data reference; do not reduce it to a single correctness label without preserving criteria and medical context.

## 6. What should readers audit?

- Are rubrics written by qualified experts?
- Can criteria be applied consistently?
- Are high-risk medical errors separated from style issues?
- Are model judges calibrated against experts?
- Are hard and consensus subsets tracked separately?

## 7. What is missing or risky?

- Rubric coverage may miss rare but severe harms.
- Medical correctness can depend on context not captured in the prompt.
- Automated judges need careful calibration in high-stakes settings.

## 8. Why it matters for post-training reasoning data

It is a high-stakes example of judgment-required reasoning data where rubric design matters more than exact-match scoring.

The reusable lesson is to identify the feedback-bearing record: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2505.08775)

- Data ID: `healthbench-2025`
- Citation status: verified
- Confidence: high
