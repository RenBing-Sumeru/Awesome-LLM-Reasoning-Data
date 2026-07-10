<!-- entry_id: rewarding-progress-scaling-automated-process-verifiers-for-llm-reasoning-2024 -->
<!-- card_type: verifiers -->
# Rewarding Progress: Scaling Automated Process Verifiers for LLM Reasoning

<!-- ask_atlas:start -->
> Ask about this paper: [Explain this card](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewarding-progress-scaling-automated-process-verifiers-for-llm-reasoning-2024&mode=explain) - [Generate audit checklist](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewarding-progress-scaling-automated-process-verifiers-for-llm-reasoning-2024&mode=audit) - [Compare with related work](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/?entry=rewarding-progress-scaling-automated-process-verifiers-for-llm-reasoning-2024&mode=compare)
<!-- ask_atlas:end -->

> Curation level: L5_audit_ready
> Category: preference_reward_feedback_data, programmatically_verifiable_outcome_data, process_trace_supervision_data, rollout_search_test_time_trace_data, training_usage_optimization_objectives, scaling_rlvr_test_time_compute
> Links: [arXiv](https://arxiv.org/abs/2410.08146) - [OpenReview](https://openreview.net/forum?id=A6Y7AqlzLW)

## TL;DR

Rewarding Progress proposes Process Advantage Verifiers that score whether a reasoning step increases future correctness probability.

The reward target is policy-dependent progress. It should be audited as a process reward, not as a universal step-correctness label.

## 1. What is this work?

The paper trains automated process verifiers from reasoning traces and final correctness outcomes, then uses them for search and RL.

For this atlas, it is a verifier card for process rewards and step-level feedback.

## 2. What data object does it expose?

The relevant record can include:

- problem,
- partial trace,
- step,
- future success estimate,
- process advantage score,
- final outcome.

The traces are produced by prover policies, so the data object carries policy lineage.

## 3. What is the verifier / reward / judge / environment?

The verifier is a Process Advantage Verifier trained to predict progress toward a correct answer.

The terminal predicate is whether a reasoning step increases estimated future correctness under the prover policy.

## 4. How is the data constructed?

Reported construction details include:

- collect traces from prover policies,
- estimate future success after partial traces,
- train process verifiers on advantage-like progress targets,
- use verifier-guided search or online RL,
- report search/RL budgets when reproducing.

Unknown locally: official code/data artifact links.

## 5. How can it enter post-training?

Recorded use:

- process_supervision,
- reward_modeling,
- rlvr,
- test_time_compute.

Use it when a process reward is needed. Keep the prover policy and reward target definition attached.

## 6. What should readers audit?

- Progress estimates can be policy-specific.
- Verifier-guided search can exploit reward artifacts.
- Step rewards can encourage short-term progress that hurts final correctness.
- The verifier may memorize problem-level success patterns.
- Code/data artifacts remain null unless official releases are pinned.

## 7. What is missing or risky?

- Which tasks generated the traces.
- Which prover policy defines the progress target.
- Whether verifier-training traces are separated from evaluation tasks.
- Search and online RL budgets.
- License and artifact availability.

## 8. Why it matters for post-training reasoning data

It gives process supervision a concrete reward target beyond dense labels: progress under a prover policy.

## 9. Links and citation

- Institution: Google DeepMind; Google Research; Tel Aviv University; Princeton University.
- Official links: arXiv, DOI, and OpenReview.
- arXiv: https://arxiv.org/abs/2410.08146
- DOI: https://doi.org/10.48550/arXiv.2410.08146
- OpenReview: https://openreview.net/forum?id=A6Y7AqlzLW
- Code: null
- Data: null
- Project: null
- Hugging Face: null
- Data ID: `rewarding-progress-scaling-automated-process-verifiers-for-llm-reasoning-2024`
- Citation status: verified
- Confidence: high