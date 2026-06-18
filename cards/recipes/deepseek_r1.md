<!-- entry_id: deepseek-r1-2025 -->
<!-- card_type: recipes -->
# DeepSeek-R1

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=deepseek-r1-2025&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=deepseek-r1-2025&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=deepseek-r1-2025&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: surveys_and_primers, construction_recipes_open_reasoning_data, frontier_model_reports, scaling_test_time_compute_rlvr
> Links: [📄 Paper](https://arxiv.org/abs/2501.12948)

## TL;DR

DeepSeek-R1 reports a reasoning-model post-training recipe centered on reinforcement learning with verifiable rewards, cold-start data, and distillation.

It is a frontier reference for public RLVR discussion, showing how verifiable tasks, reward design, and distillation shape reasoning behavior.

## 1. What is this work?

- Year / venue: 2025 · arXiv.
- Atlas role: model_report, construction_recipe.
- Domains: math, code, reasoning.
- Current status: verified.
- Why it belongs: Core frontier reasoning-model report for RLVR, cold-start reasoning data, distillation, and open-weight reasoning-model analysis.

## 2. What data object does it expose?

- Prompt/source: verifiable reasoning tasks and cold-start examples described in the report.
- Trace/action author: base and RL-trained models generate long reasoning traces.
- Answer/artifact format: reasoning trace plus final answer; distilled examples for smaller models.
- Process fields: prompt, reasoning trajectory, answer, reward outcome, distillation target.
- Environment or substrate: offline RL and distillation pipeline over verifiable tasks.
- Terminal predicate: task-specific verifiable reward or final-answer correctness.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: verifiable reward, mainly programmatic answer checking for suitable tasks.
- Recorded verifier/reward/environment: RL reward signals and distillation pipeline disclosed at report level.
- Supervision granularity: answer_level reward with trace-level behavior emerging from training.

## 4. How is the data constructed?

- Base model: DeepSeek-V3-style base model family.
- Teacher: cold-start data and RL-trained reasoning model for distillation.
- Generator: RL policy rollouts and distillation outputs.
- Filtering rule: reward correctness and safety/readability constraints described at high level.
- Sampling protocol: report-level rather than fully released raw corpus protocol.
- Inference budget: long reasoning rollouts are central to behavior.
- Optimizer/scaffold: RL with verifiable rewards plus SFT/distillation stages.

## 5. How can it enter post-training?

Recorded training/evaluation use: distillation, rlvr.

Use it as a model-report anchor; do not treat it as a fully reproducible dataset release unless raw prompts, filters, and reward code are pinned.

## 6. What should readers audit?

- Which verifiable tasks enter RL?
- Are reward functions public and deterministic?
- How are cold-start examples selected?
- What data enters distillation?
- Can improvements be separated from inference budget?

## 7. What is missing or risky?

- Many data details remain report-level.
- Verifiable rewards can bias toward tasks with cheap answer checks.
- Distillation may hide the original reward and sampling distribution.

## 8. Why it matters for post-training reasoning data

It is a frontier reference for public RLVR discussion, showing how verifiable tasks, reward design, and distillation shape reasoning behavior.

The reusable lesson is to identify the feedback-bearing record: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2501.12948)

- Data ID: `deepseek-r1-2025`
- Citation status: verified
- Confidence: high
