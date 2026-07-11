# 🧬 Core Reasoning Data Types

> Best for researchers comparing what kinds of reasoning data exist.

Use this section to compare instruction traces, preferences, verifiable outcomes, process labels, rollout/search traces, agent episodes, and rubric records.

## Tracks

| Track | Main question | Entries | Jump |
|---|---|---:|---|
| 🧱 Instruction / Demo / Rationale | demonstration, SFT, CoT, rationale, and teacher-trace data | 0 | [01_instruction_demonstration_rationale_data.md](01_instruction_demonstration_rationale_data.md) |
| 🤝 Preference & Reward Feedback | RLHF, DPO, reward modeling, rubric rewards, and AI feedback | 0 | [02_preference_reward_feedback_data.md](02_preference_reward_feedback_data.md) |
| 🧮 Programmatic Verification | math, code, proof, and answer-verifiable reasoning data | 17 | [03_programmatically_verifiable_outcome_data.md](03_programmatically_verifiable_outcome_data.md) |
| 🪜 Process / Trace Supervision | step-level labels, PRMs, rollout values, and first-error signals | 0 | [04_process_trace_supervision_data.md](04_process_trace_supervision_data.md) |
| 🔁 Rollout / Search / TTC Trace | search-generated candidates, best-of-N, pass@k, and test-time compute traces | 0 | [05_rollout_search_test_time_trace_data.md](05_rollout_search_test_time_trace_data.md) |
| 🌐 Environment & Agent Trajectories | tool, web, OS, app, SWE, and replayable environment data | 1 | [06_environment_agent_trajectory_data.md](06_environment_agent_trajectory_data.md) |
| ⚖️ Judgment / Rubric / Domain Expert | LLM judges, expert rubrics, factuality, safety, medical, legal, and finance reasoning | 0 | [07_judgment_rubric_domain_expert_data.md](07_judgment_rubric_domain_expert_data.md) |

## Data-Type Crosswalk

| Data type | Typical data object | Feedback contract | Common use |
|---|---|---|---|
| Instruction / Demonstration / Rationale | instruction, response, rationale, trace | human / teacher / model | SFT, distillation |
| Preference & Reward Feedback | chosen/rejected pair, scalar reward, rubric score | human / AI / reward model | RLHF, DPO, RM, RLAIF |
| Programmatically Verifiable Outcome | final answer, code, proof artifact | checker / unit test / proof verifier | RLVR, filtering, evaluation |
| Process / Trace Supervision | step label, process reward, first-error mark | PRM / process verifier | PRM, reranking, step-wise RL |
| Rollout / Search / TTC Trace | rollout set, search tree, selected path | verifier / selector / value model | best-of-N, distillation, TTC |
| Environment & Agent Trajectory | state-action-observation episode | terminal predicate / environment | agent training, evaluation |
| Judgment / Rubric / Domain Expert | rubric record, critique, expert score | expert / LLM judge / domain rubric | RM, safety, domain evaluation |

## Back to Paper Atlas

- [Paper atlas README](../README.md)
- [Repository README](../../README.md)
