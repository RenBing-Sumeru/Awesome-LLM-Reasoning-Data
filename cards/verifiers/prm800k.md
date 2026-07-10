<!-- entry_id: prm800k-2023 -->
<!-- card_type: verifiers -->
# Let's Verify Step by Step

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=prm800k-2023&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=prm800k-2023&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=prm800k-2023&mode=compare)
<!-- ask_atlas:end -->

<!-- track: 🤝 Preference & Reward Feedback (Track 02) · 🧮 Programmatic Verification (Track 03) · 🪜 Process / Trace Supervision (Track 04) · 🌐 Environment & Agent Trajectories (Track 06) · ⚖️ Judgment / Rubric / Domain Expert (Track 07) · 🏗️ Construction & Open Releases (Track 08) · 🎯 Training Usage & Objectives (Track 09) · 🧰 Benchmarks & Evaluation (Track 11) -->

> Curation level: L5_audit_ready

> Links: [📄 Paper](https://arxiv.org/abs/2305.20050)

## TL;DR

Provides step-level human labels for mathematical reasoning traces and trains process reward models to identify correct intermediate reasoning.

It is the process-supervision anchor for moving from answer-level math rewards to step-level feedback in reasoning-model training and evaluation.

## 1. What is this work?

- Year / venue: 2023 · arXiv.
- Atlas role: process_supervision, verifier_reward, data_release.
- Domains: math.
- Current status: verified.
- Why it belongs: Landmark process-supervision dataset and PRM reference for step labels, local error detection, and reward-model training.

## 2. What data object does it expose?

- Prompt/source: math reasoning problems.
- Trace/action author: model-generated solution traces annotated by humans.
- Answer/artifact format: step-by-step solution with per-step correctness labels.
- Process fields: step text, label, solution trace, final answer context.
- Environment or substrate: offline math reasoning traces.
- Terminal predicate: step correctness and final-answer correctness.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: human step-level judgment plus final-answer checks.
- Recorded verifier/reward/environment: process reward model trained from step labels.
- Supervision granularity: step_level and process_reward.

## 4. How is the data constructed?

- Base model: language model generating candidate solutions.
- Teacher: human annotators labeling reasoning steps.
- Generator: model rollouts on math problems.
- Filtering rule: annotation and quality-control protocol for steps.
- Sampling protocol: collect traces, segment steps, label local correctness.
- Inference budget: rollout generation budget affects trace diversity.
- Optimizer/scaffold: PRM training and best-of-N style selection.

## 5. How can it enter post-training?

Recorded training/evaluation use: process_supervision, reward_modeling, evaluation.

Use it when you need process-level supervision; do not collapse it into ordinary answer-level math SFT.

## 6. What should readers audit?

- How are steps segmented?
- What counts as a locally correct step?
- Are annotator disagreements measured?
- Does the PRM improve final answers or only local-looking scores?
- Are wrong-but-plausible steps preserved?

## 7. What is missing or risky?

- Step labels can be ambiguous.
- A PRM can reward local plausibility without global correctness.
- Annotation policy and license details matter for reuse.

## 8. Why it matters for post-training reasoning data

It is the process-supervision anchor for moving from answer-level math rewards to step-level feedback in reasoning-model training and evaluation.

The reusable lesson is to identify the feedback-bearing record: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2305.20050)

- Data ID: `prm800k-2023`
- Citation status: verified
- Confidence: high
