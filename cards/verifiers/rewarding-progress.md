<!-- entry_id: rewarding-progress-scaling-automated-process-verifiers-for-llm-reasoning-2024 -->
<!-- card_type: verifiers -->
# Rewarding progress: Scaling automated process verifiers for LLM reasoning

<!-- ask_atlas:start -->
> 🤖 **Ask about this paper:** [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewarding-progress-scaling-automated-process-verifiers-for-llm-reasoning-2024&mode=explain) · [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewarding-progress-scaling-automated-process-verifiers-for-llm-reasoning-2024&mode=audit) · [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewarding-progress-scaling-automated-process-verifiers-for-llm-reasoning-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: process_trace_supervision_data, scaling_rlvr_test_time_compute, data_construction_open_release_recipes
> Links: [📄 Paper](https://arxiv.org/abs/2410.08146) · [🏛️ OpenReview](https://openreview.net/forum?id=A6Y7AqlzLW)

## TL;DR

Rewarding Progress proposes Process Advantage Verifiers that score whether a reasoning step increases future correctness probability.

It gives process supervision a concrete target beyond dense labels: measure progress under a prover policy and use that signal for search or RL.

## 1. What is this work?

- Year / venue: 2024 · ICLR.
- Atlas role: verifier_reward, process_supervision, scaling_study.
- Domains: process-reward-models, rlvr, math.
- Current status: verified.
- Why it belongs: Process-verifier entry for automated step-level rewards, process advantage modeling, and RL/search scaling.

## 2. What data object does it expose?

- Prompt/source: multi-step reasoning traces with intermediate steps and final correctness outcomes.
- Trace/action author: prover policies generate reasoning steps; verifiers estimate progress after each step.
- Answer/artifact format: step-level process advantage score plus final answer/correctness signal.
- Process fields:
- problem, partial trace before step, step, future success estimate, verifier score, final outcome.
- Environment or substrate: reasoning search and online RL setup using process rewards.
- Terminal predicate: search or RL with process rewards improves correctness and compute efficiency.

## 3. What is the verifier / reward / judge / environment?

- Verification contract: programmatic, mixed.
- Recorded verifier/reward/environment: Process Advantage Verifier trained to predict progress toward correct answer.
- Supervision granularity: step_level, process_reward, scalar_reward.

## 4. How is the data constructed?

- Base model: base and prover policies for reasoning tasks.
- Teacher: automated success estimates from prover policies and final correctness signals.
- Generator: policies produce traces used to train process verifiers.
- Filtering rule: process reward targets advantage-like progress, not just local plausibility.
- Sampling protocol: pin prover policy, base policy, trace collection, and reward target definition.
- Inference budget: test-time search budget and online RL sample budget must be reported.
- Optimizer/scaffold: process-verifier-guided search and RL.

## 5. How can it enter post-training?

Recorded training/evaluation use: process_supervision, reward_modeling, rlvr, test_time_compute.

Use it as a process-reward design reference when comparing PRM, ORM, test-time search, and online RL recipes.

## 6. What should readers audit?

- Which tasks and prover policies generate training traces?
- Are verifier-training traces separated from search/RL evaluation tasks?
- Can the verifier memorize problem-level success patterns?
- Which prover policy defines the progress target?
- Are licenses, data versions, model checkpoints, and evaluation prompts pinned before reuse?

## 7. What is missing or risky?

- Progress estimates can be policy-specific.
- Verifier-guided search can exploit reward artifacts.
- Step rewards can encourage short-term progress that hurts final correctness.

## 8. Why it matters for post-training reasoning data

It gives process supervision a concrete target beyond dense labels: measure progress under a prover policy and use that signal for search or RL.

The reusable lesson is to keep the feedback-bearing record attached to the claim: prompt, trace, label, preference, reward, verifier, environment state, benchmark item, or audit evidence.

## 9. Links and citation

[📄 Paper](https://arxiv.org/abs/2410.08146) · [🏛️ OpenReview](https://openreview.net/forum?id=A6Y7AqlzLW)

- Data ID: `rewarding-progress-scaling-automated-process-verifiers-for-llm-reasoning-2024`
- Citation status: verified
- Confidence: high
