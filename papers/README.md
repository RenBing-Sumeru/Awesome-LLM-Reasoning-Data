# 📚 Paper Atlas

> A review-style Awesome map for post-training reasoning data papers, verifiers, data releases, construction recipes, frontier reports, and audit work.

Use this folder when you want the repo to behave like a living survey. Each category page explains what the track studies, why it matters for post-training reasoning data, which subfields exist, what papers to read first, what each paper's data object/verifier/recipe looks like, and how to audit the claims.

## Awesome-Style Contents

- 🧭 Background & Foundations
  - [🧭 Foundations & Primers](00_background_foundations/00_foundations_and_primers.md)
    - [🧭 Post-training surveys](00_background_foundations/00_foundations_and_primers.md#post-training-surveys)
    - [🧠 Reasoning LLM surveys](00_background_foundations/00_foundations_and_primers.md#reasoning-llm-surveys)
    - [📦 Data documentation / datasheets](00_background_foundations/00_foundations_and_primers.md#data-documentation-datasheets)
    - [🧪 RLHF / reward-model surveys](00_background_foundations/00_foundations_and_primers.md#rlhf-reward-model-surveys)
    - [🌐 Agent data / tool-use surveys](00_background_foundations/00_foundations_and_primers.md#agent-data-tool-use-surveys)
    - [🧯 Contamination / evaluation surveys](00_background_foundations/00_foundations_and_primers.md#contamination-evaluation-surveys)
- 🧬 Core Reasoning Data Types
  - [🧱 Instruction / Demo / Rationale](01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md)
    - [🧱 Instruction tuning / SFT data](01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md#instruction-tuning-sft-data)
    - [🧑‍🏫 Human demonstrations](01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md#human-demonstrations)
    - [🤖 Synthetic instruction data](01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md#synthetic-instruction-data)
    - [🧠 Chain-of-thought / rationale data](01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md#chain-of-thought-rationale-data)
    - [🔁 Self-training / STaR](01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md#self-training-star)
    - [✂️ Long/short CoT distillation](01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md#long-short-cot-distillation)
  - [🤝 Preference & Reward Feedback](01_core_reasoning_data_types/02_preference_reward_feedback_data.md)
    - [🤝 Human preference data / RLHF](01_core_reasoning_data_types/02_preference_reward_feedback_data.md#human-preference-data-rlhf)
    - [⚖️ DPO / preference optimization](01_core_reasoning_data_types/02_preference_reward_feedback_data.md#dpo-preference-optimization)
    - [🎚️ Scalar reward / ORM data](01_core_reasoning_data_types/02_preference_reward_feedback_data.md#scalar-reward-orm-data)
    - [🤖 RLAIF / synthetic feedback](01_core_reasoning_data_types/02_preference_reward_feedback_data.md#rlaif-synthetic-feedback)
    - [🧪 Reward-model benchmarks](01_core_reasoning_data_types/02_preference_reward_feedback_data.md#reward-model-benchmarks)
    - [🧾 Rubric-conditioned rewards](01_core_reasoning_data_types/02_preference_reward_feedback_data.md#rubric-conditioned-rewards)
  - [🧮 Programmatic Verification](01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md)
    - [📐 Math answer-verifiable data](01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md#math-answer-verifiable-data)
    - [🧮 Math RLVR datasets](01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md#math-rlvr-datasets)
    - [💻 Code execution / unit-test data](01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md#code-execution-unit-test-data)
    - [🧾 Formal proof / Lean / theorem proving](01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md#formal-proof-lean-theorem-proving)
    - [🧪 Verifier robustness and answer extraction](01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md#verifier-robustness-and-answer-extraction)
    - [🧰 Programmatic benchmarks](01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md#programmatic-benchmarks)
  - [🪜 Process / Trace Supervision](01_core_reasoning_data_types/04_process_trace_supervision_data.md)
    - [🪜 Human step-level labels](01_core_reasoning_data_types/04_process_trace_supervision_data.md#human-step-level-labels)
    - [🧪 Process reward models](01_core_reasoning_data_types/04_process_trace_supervision_data.md#process-reward-models)
    - [🔁 Rollout-value supervision](01_core_reasoning_data_types/04_process_trace_supervision_data.md#rollout-value-supervision)
    - [🛠️ Automatic process supervision](01_core_reasoning_data_types/04_process_trace_supervision_data.md#automatic-process-supervision)
    - [❌ First-error localization](01_core_reasoning_data_types/04_process_trace_supervision_data.md#first-error-localization)
    - [📊 PRM benchmarks and evaluation](01_core_reasoning_data_types/04_process_trace_supervision_data.md#prm-benchmarks-and-evaluation)
  - [🔁 Rollout / Search / TTC Trace](01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md)
    - [🎲 Multiple rollouts / best-of-N](01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md#multiple-rollouts-best-of-n)
    - [🌳 Search trees / MCTS](01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md#search-trees-mcts)
    - [🔎 Rejection sampling traces](01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md#rejection-sampling-traces)
    - [🧠 Self-consistency / repeated sampling](01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md#self-consistency-repeated-sampling)
    - [⏱️ Test-time compute logs](01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md#test-time-compute-logs)
    - [✂️ Long2short / distill-from-search](01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md#long2short-distill-from-search)
  - [🌐 Environment & Agent Trajectories](01_core_reasoning_data_types/06_environment_agent_trajectory_data.md)
    - [🛠️ Tool-use data](01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#tool-use-data)
    - [🌍 Web/browser agents](01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#web-browser-agents)
    - [📱 App/mobile agents](01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#app-mobile-agents)
    - [🖥️ OS/desktop agents](01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#os-desktop-agents)
    - [🧑‍💻 SWE/repository agents](01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#swe-repository-agents)
    - [🔁 Replayable trajectory data](01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#replayable-trajectory-data)
    - [🧰 Agent benchmarks and terminal predicates](01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#agent-benchmarks-and-terminal-predicates)
  - [⚖️ Judgment / Rubric / Domain Expert](01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md)
    - [⚖️ LLM-as-judge data](01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#llm-as-judge-data)
    - [🧑‍⚖️ Human/expert judgment](01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#human-expert-judgment)
    - [🩺 Medical reasoning / health rubrics](01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#medical-reasoning-health-rubrics)
    - [🛡️ Safety reasoning data](01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#safety-reasoning-data)
    - [🧾 Factuality / grounding](01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#factuality-grounding)
    - [⚖️ Legal reasoning](01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#legal-reasoning)
    - [🏦 Financial reasoning](01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#financial-reasoning)
    - [🧪 Rubric reward models](01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#rubric-reward-models)
- 🛠️ Data Lifecycle
  - [🏗️ Construction & Open Releases](02_data_lifecycle/08_data_construction_open_release_recipes.md)
    - [🧱 Prompt sourcing](02_data_lifecycle/08_data_construction_open_release_recipes.md#prompt-sourcing)
    - [✍️ Teacher trace generation](02_data_lifecycle/08_data_construction_open_release_recipes.md#teacher-trace-generation)
    - [🔎 Rejection sampling / search-generated data](02_data_lifecycle/08_data_construction_open_release_recipes.md#rejection-sampling-search-generated-data)
    - [🔁 Self-play / self-improvement](02_data_lifecycle/08_data_construction_open_release_recipes.md#self-play-self-improvement)
    - [🧪 Filtering and verifier refresh](02_data_lifecycle/08_data_construction_open_release_recipes.md#filtering-and-verifier-refresh)
    - [🏗️ Open reasoning data releases](02_data_lifecycle/08_data_construction_open_release_recipes.md#open-reasoning-data-releases)
    - [🧬 Data lineage and release metadata](02_data_lifecycle/08_data_construction_open_release_recipes.md#data-lineage-and-release-metadata)
  - [🎯 Training Usage & Objectives](02_data_lifecycle/09_training_usage_optimization_objectives.md)
    - [🧱 SFT / instruction tuning](02_data_lifecycle/09_training_usage_optimization_objectives.md#sft-instruction-tuning)
    - [📚 Distillation](02_data_lifecycle/09_training_usage_optimization_objectives.md#distillation)
    - [⚖️ Preference optimization](02_data_lifecycle/09_training_usage_optimization_objectives.md#preference-optimization)
    - [🎚️ Reward modeling / ORM](02_data_lifecycle/09_training_usage_optimization_objectives.md#reward-modeling-orm)
    - [🪜 PRM / process supervision](02_data_lifecycle/09_training_usage_optimization_objectives.md#prm-process-supervision)
    - [🏋️ RLVR / verifier RL](02_data_lifecycle/09_training_usage_optimization_objectives.md#rlvr-verifier-rl)
    - [🌐 Agent training](02_data_lifecycle/09_training_usage_optimization_objectives.md#agent-training)
    - [🧪 Evaluation / reranking / audit](02_data_lifecycle/09_training_usage_optimization_objectives.md#evaluation-reranking-audit)
  - [📈 Scaling / RLVR / TTC](02_data_lifecycle/10_scaling_rlvr_test_time_compute.md)
    - [📈 Data scaling](02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#data-scaling)
    - [🔁 Data reuse and uniqueness](02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#data-reuse-and-uniqueness)
    - [⏱️ Test-time compute](02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#test-time-compute)
    - [🎲 pass@k / sampling budget](02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#pass-k-sampling-budget)
    - [🧪 Verifier scaling](02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#verifier-scaling)
    - [🏋️ RLVR optimization scaling](02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#rlvr-optimization-scaling)
    - [🔍 Scaling attribution](02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#scaling-attribution)
  - [🧰 Benchmarks & Evaluation](02_data_lifecycle/11_benchmarks_evaluation_surfaces.md)
    - [📐 Math benchmarks](02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#math-benchmarks)
    - [💻 Code benchmarks](02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#code-benchmarks)
    - [🧾 Proof benchmarks](02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#proof-benchmarks)
    - [🌐 Agent benchmarks](02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#agent-benchmarks)
    - [⚖️ Rubric/domain benchmarks](02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#rubric-domain-benchmarks)
    - [🧪 Reward-model benchmarks](02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#reward-model-benchmarks)
    - [🧯 Live / contamination-resistant benchmarks](02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#live-contamination-resistant-benchmarks)
  - [🚀 Frontier Disclosure Ledger](02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md)
    - [🚀 DeepSeek-R1 family](02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md#deepseek-r1-family)
    - [🌙 Kimi reasoning reports](02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md#kimi-reasoning-reports)
    - [🐉 Qwen reasoning/math/code reports](02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md#qwen-reasoning-math-code-reports)
    - [🧠 Magistral / Phi / Nemotron style reports](02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md#magistral-phi-nemotron-style-reports)
    - [🧪 RLVR recipe reports](02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md#rlvr-recipe-reports)
    - [🧬 What is disclosed vs hidden](02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md#what-is-disclosed-vs-hidden)
  - [🧯 Audit & Failure Modes](02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md)
    - [🧯 Benchmark contamination](02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#benchmark-contamination)
    - [🔍 Search-time contamination](02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#search-time-contamination)
    - [🧬 Hidden lineage / teacher leakage](02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#hidden-lineage-teacher-leakage)
    - [🎮 Reward hacking](02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#reward-hacking)
    - [🧪 Verifier gaming](02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#verifier-gaming)
    - [⚖️ LLM-as-judge attacks](02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#llm-as-judge-attacks)
    - [🧨 Spurious rewards](02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#spurious-rewards)
    - [📉 Reproducibility failures](02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#reproducibility-failures)
- 🧩 Browse by Data Object
  - prompt-answer, trace-answer, step label, rollout value, preference pair, reward record, agent trajectory, rubric record
- 🛠️ Browse by Training Use
  - SFT, distillation, reward modeling, process supervision, RLVR, agent training, evaluation, audit
- 🧪 Browse by Feedback Contract
  - programmatic, environmental, judgment-required, mixed, unknown

## Research Track Navigator

### 🧭 Background & Foundations

Start here for post-training vocabulary, classic alignment-data lineages, reasoning-model surveys, and data-documentation habits.

| Track | Subfields | Best for | Entries | Jump |
|---|---|---|---:|---|
| 🧭 Foundations & Primers | [🧭 Post-training surveys](00_background_foundations/00_foundations_and_primers.md#post-training-surveys)<br>[🧠 Reasoning LLM surveys](00_background_foundations/00_foundations_and_primers.md#reasoning-llm-surveys)<br>[📦 Data documentation / datasheets](00_background_foundations/00_foundations_and_primers.md#data-documentation-datasheets)<br>[🧪 RLHF / reward-model surveys](00_background_foundations/00_foundations_and_primers.md#rlhf-reward-model-surveys)<br>[🌐 Agent data / tool-use surveys](00_background_foundations/00_foundations_and_primers.md#agent-data-tool-use-surveys)<br>[🧯 Contamination / evaluation surveys](00_background_foundations/00_foundations_and_primers.md#contamination-evaluation-surveys) | beginners building the field map before primary papers | 0 | [00_background_foundations/00_foundations_and_primers.md](00_background_foundations/00_foundations_and_primers.md) |

### 🧬 Core Reasoning Data Types

Use this section to compare instruction traces, preferences, verifiable outcomes, process labels, rollout/search traces, agent episodes, and rubric records.

| Track | Subfields | Best for | Entries | Jump |
|---|---|---|---:|---|
| 🧱 Instruction / Demo / Rationale | [🧱 Instruction tuning / SFT data](01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md#instruction-tuning-sft-data)<br>[🧑‍🏫 Human demonstrations](01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md#human-demonstrations)<br>[🤖 Synthetic instruction data](01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md#synthetic-instruction-data)<br>[🧠 Chain-of-thought / rationale data](01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md#chain-of-thought-rationale-data)<br>[🔁 Self-training / STaR](01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md#self-training-star)<br>[✂️ Long/short CoT distillation](01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md#long-short-cot-distillation) | demonstration, SFT, CoT, rationale, and teacher-trace data | 0 | [01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md](01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md) |
| 🤝 Preference & Reward Feedback | [🤝 Human preference data / RLHF](01_core_reasoning_data_types/02_preference_reward_feedback_data.md#human-preference-data-rlhf)<br>[⚖️ DPO / preference optimization](01_core_reasoning_data_types/02_preference_reward_feedback_data.md#dpo-preference-optimization)<br>[🎚️ Scalar reward / ORM data](01_core_reasoning_data_types/02_preference_reward_feedback_data.md#scalar-reward-orm-data)<br>[🤖 RLAIF / synthetic feedback](01_core_reasoning_data_types/02_preference_reward_feedback_data.md#rlaif-synthetic-feedback)<br>[🧪 Reward-model benchmarks](01_core_reasoning_data_types/02_preference_reward_feedback_data.md#reward-model-benchmarks)<br>[🧾 Rubric-conditioned rewards](01_core_reasoning_data_types/02_preference_reward_feedback_data.md#rubric-conditioned-rewards) | RLHF, DPO, reward modeling, rubric rewards, and AI feedback | 0 | [01_core_reasoning_data_types/02_preference_reward_feedback_data.md](01_core_reasoning_data_types/02_preference_reward_feedback_data.md) |
| 🧮 Programmatic Verification | [📐 Math answer-verifiable data](01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md#math-answer-verifiable-data)<br>[🧮 Math RLVR datasets](01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md#math-rlvr-datasets)<br>[💻 Code execution / unit-test data](01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md#code-execution-unit-test-data)<br>[🧾 Formal proof / Lean / theorem proving](01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md#formal-proof-lean-theorem-proving)<br>[🧪 Verifier robustness and answer extraction](01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md#verifier-robustness-and-answer-extraction)<br>[🧰 Programmatic benchmarks](01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md#programmatic-benchmarks) | math, code, proof, and answer-verifiable reasoning data | 7 | [01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md](01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md) |
| 🪜 Process / Trace Supervision | [🪜 Human step-level labels](01_core_reasoning_data_types/04_process_trace_supervision_data.md#human-step-level-labels)<br>[🧪 Process reward models](01_core_reasoning_data_types/04_process_trace_supervision_data.md#process-reward-models)<br>[🔁 Rollout-value supervision](01_core_reasoning_data_types/04_process_trace_supervision_data.md#rollout-value-supervision)<br>[🛠️ Automatic process supervision](01_core_reasoning_data_types/04_process_trace_supervision_data.md#automatic-process-supervision)<br>[❌ First-error localization](01_core_reasoning_data_types/04_process_trace_supervision_data.md#first-error-localization)<br>[📊 PRM benchmarks and evaluation](01_core_reasoning_data_types/04_process_trace_supervision_data.md#prm-benchmarks-and-evaluation) | step-level labels, PRMs, rollout values, and first-error signals | 0 | [01_core_reasoning_data_types/04_process_trace_supervision_data.md](01_core_reasoning_data_types/04_process_trace_supervision_data.md) |
| 🔁 Rollout / Search / TTC Trace | [🎲 Multiple rollouts / best-of-N](01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md#multiple-rollouts-best-of-n)<br>[🌳 Search trees / MCTS](01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md#search-trees-mcts)<br>[🔎 Rejection sampling traces](01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md#rejection-sampling-traces)<br>[🧠 Self-consistency / repeated sampling](01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md#self-consistency-repeated-sampling)<br>[⏱️ Test-time compute logs](01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md#test-time-compute-logs)<br>[✂️ Long2short / distill-from-search](01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md#long2short-distill-from-search) | search-generated candidates, best-of-N, pass@k, and test-time compute traces | 0 | [01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md](01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md) |
| 🌐 Environment & Agent Trajectories | [🛠️ Tool-use data](01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#tool-use-data)<br>[🌍 Web/browser agents](01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#web-browser-agents)<br>[📱 App/mobile agents](01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#app-mobile-agents)<br>[🖥️ OS/desktop agents](01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#os-desktop-agents)<br>[🧑‍💻 SWE/repository agents](01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#swe-repository-agents)<br>[🔁 Replayable trajectory data](01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#replayable-trajectory-data)<br>[🧰 Agent benchmarks and terminal predicates](01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#agent-benchmarks-and-terminal-predicates) | tool, web, OS, app, SWE, and replayable environment data | 0 | [01_core_reasoning_data_types/06_environment_agent_trajectory_data.md](01_core_reasoning_data_types/06_environment_agent_trajectory_data.md) |
| ⚖️ Judgment / Rubric / Domain Expert | [⚖️ LLM-as-judge data](01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#llm-as-judge-data)<br>[🧑‍⚖️ Human/expert judgment](01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#human-expert-judgment)<br>[🩺 Medical reasoning / health rubrics](01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#medical-reasoning-health-rubrics)<br>[🛡️ Safety reasoning data](01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#safety-reasoning-data)<br>[🧾 Factuality / grounding](01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#factuality-grounding)<br>[⚖️ Legal reasoning](01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#legal-reasoning)<br>[🏦 Financial reasoning](01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#financial-reasoning)<br>[🧪 Rubric reward models](01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#rubric-reward-models) | LLM judges, expert rubrics, factuality, safety, medical, legal, and finance reasoning | 0 | [01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md](01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md) |

### 🛠️ Data Lifecycle

Follow the lifecycle from construction recipes through training objectives, scaling claims, benchmarks, frontier disclosures, and failure audits.

| Track | Subfields | Best for | Entries | Jump |
|---|---|---|---:|---|
| 🏗️ Construction & Open Releases | [🧱 Prompt sourcing](02_data_lifecycle/08_data_construction_open_release_recipes.md#prompt-sourcing)<br>[✍️ Teacher trace generation](02_data_lifecycle/08_data_construction_open_release_recipes.md#teacher-trace-generation)<br>[🔎 Rejection sampling / search-generated data](02_data_lifecycle/08_data_construction_open_release_recipes.md#rejection-sampling-search-generated-data)<br>[🔁 Self-play / self-improvement](02_data_lifecycle/08_data_construction_open_release_recipes.md#self-play-self-improvement)<br>[🧪 Filtering and verifier refresh](02_data_lifecycle/08_data_construction_open_release_recipes.md#filtering-and-verifier-refresh)<br>[🏗️ Open reasoning data releases](02_data_lifecycle/08_data_construction_open_release_recipes.md#open-reasoning-data-releases)<br>[🧬 Data lineage and release metadata](02_data_lifecycle/08_data_construction_open_release_recipes.md#data-lineage-and-release-metadata) | building, filtering, releasing, and reproducing reasoning datasets | 0 | [02_data_lifecycle/08_data_construction_open_release_recipes.md](02_data_lifecycle/08_data_construction_open_release_recipes.md) |
| 🎯 Training Usage & Objectives | [🧱 SFT / instruction tuning](02_data_lifecycle/09_training_usage_optimization_objectives.md#sft-instruction-tuning)<br>[📚 Distillation](02_data_lifecycle/09_training_usage_optimization_objectives.md#distillation)<br>[⚖️ Preference optimization](02_data_lifecycle/09_training_usage_optimization_objectives.md#preference-optimization)<br>[🎚️ Reward modeling / ORM](02_data_lifecycle/09_training_usage_optimization_objectives.md#reward-modeling-orm)<br>[🪜 PRM / process supervision](02_data_lifecycle/09_training_usage_optimization_objectives.md#prm-process-supervision)<br>[🏋️ RLVR / verifier RL](02_data_lifecycle/09_training_usage_optimization_objectives.md#rlvr-verifier-rl)<br>[🌐 Agent training](02_data_lifecycle/09_training_usage_optimization_objectives.md#agent-training)<br>[🧪 Evaluation / reranking / audit](02_data_lifecycle/09_training_usage_optimization_objectives.md#evaluation-reranking-audit) | how data enters SFT, DPO, RM, PRM, RLVR, agents, evaluation, and audit | 0 | [02_data_lifecycle/09_training_usage_optimization_objectives.md](02_data_lifecycle/09_training_usage_optimization_objectives.md) |
| 📈 Scaling / RLVR / TTC | [📈 Data scaling](02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#data-scaling)<br>[🔁 Data reuse and uniqueness](02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#data-reuse-and-uniqueness)<br>[⏱️ Test-time compute](02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#test-time-compute)<br>[🎲 pass@k / sampling budget](02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#pass-k-sampling-budget)<br>[🧪 Verifier scaling](02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#verifier-scaling)<br>[🏋️ RLVR optimization scaling](02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#rlvr-optimization-scaling)<br>[🔍 Scaling attribution](02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#scaling-attribution) | data scale, RLVR, verifier scaling, pass@k, and inference budget claims | 10 | [02_data_lifecycle/10_scaling_rlvr_test_time_compute.md](02_data_lifecycle/10_scaling_rlvr_test_time_compute.md) |
| 🧰 Benchmarks & Evaluation | [📐 Math benchmarks](02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#math-benchmarks)<br>[💻 Code benchmarks](02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#code-benchmarks)<br>[🧾 Proof benchmarks](02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#proof-benchmarks)<br>[🌐 Agent benchmarks](02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#agent-benchmarks)<br>[⚖️ Rubric/domain benchmarks](02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#rubric-domain-benchmarks)<br>[🧪 Reward-model benchmarks](02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#reward-model-benchmarks)<br>[🧯 Live / contamination-resistant benchmarks](02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#live-contamination-resistant-benchmarks) | evaluation surfaces and reusable feedback contracts | 0 | [02_data_lifecycle/11_benchmarks_evaluation_surfaces.md](02_data_lifecycle/11_benchmarks_evaluation_surfaces.md) |
| 🚀 Frontier Disclosure Ledger | [🚀 DeepSeek-R1 family](02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md#deepseek-r1-family)<br>[🌙 Kimi reasoning reports](02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md#kimi-reasoning-reports)<br>[🐉 Qwen reasoning/math/code reports](02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md#qwen-reasoning-math-code-reports)<br>[🧠 Magistral / Phi / Nemotron style reports](02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md#magistral-phi-nemotron-style-reports)<br>[🧪 RLVR recipe reports](02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md#rlvr-recipe-reports)<br>[🧬 What is disclosed vs hidden](02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md#what-is-disclosed-vs-hidden) | reading frontier reports as partial data-recipe disclosures | 0 | [02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md](02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md) |
| 🧯 Audit & Failure Modes | [🧯 Benchmark contamination](02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#benchmark-contamination)<br>[🔍 Search-time contamination](02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#search-time-contamination)<br>[🧬 Hidden lineage / teacher leakage](02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#hidden-lineage-teacher-leakage)<br>[🎮 Reward hacking](02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#reward-hacking)<br>[🧪 Verifier gaming](02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#verifier-gaming)<br>[⚖️ LLM-as-judge attacks](02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#llm-as-judge-attacks)<br>[🧨 Spurious rewards](02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#spurious-rewards)<br>[📉 Reproducibility failures](02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#reproducibility-failures) | leakage, contamination, verifier gaming, judge attacks, and reproducibility failures | 0 | [02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md](02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md) |

## Crosswalk Matrix

The same paper can sit on multiple axes. Use this matrix to translate a domain into the data object, feedback signal, training use, and audit risk that matter for post-training reasoning.

| Domain | Common feedback | Common data object | Common training use | Main risks |
|---|---|---|---|---|
| Math | answer checker / symbolic verifier | answer + trace / rollout | SFT, PRM, RLVR, evaluation | answer extraction, contamination, data reuse |
| Code | unit tests / execution | code + tests + logs | SFT, RLVR, evaluation | flaky tests, hidden tests, generated-test leakage |
| Formal proof | proof checker | theorem + proof script + imports | SFT, RL/search, evaluation | environment/version mismatch |
| Agents | terminal predicate / environment | state-action-observation episode | agent training, evaluation, RL | non-replayable scaffold, hidden state |
| Medical / safety | rubric / expert judge | question + rationale + rubric record | RM, RLAIF, evaluation, audit | judge bias, high-stakes errors |
| Frontier reports | partial reward/verifier disclosure | data mixture + recipe clues | distillation, RLVR, safety tuning | undisclosed data partitions |
| Audit work | attack / contamination probe | failure case + evaluator evidence | evaluation, release audit | benchmark leakage, verifier gaming |

## Starter Pack: 20 Must-Read Papers

| # | Work | Link | Paper Card Source |
|---:|---|---|---|

## Legend

- 📄 paper link, 🏛️ venue link, 🐙 code, 🤗 data/model, 🌐 project, 🃏 card.
- ✅ verified entries have an official primary paper/arXiv/venue/DOI link.
- ⚠️ needs_search entries remain visible but are not promoted as verified.
- Curation levels run from `L0_seeded` to `L5_audit_ready`.

## Searchable Site

- [Open the searchable atlas](../docs/index.html)
- [Link coverage report](../reports/link_coverage.md)

## Reports

- [Needs-search report](../reports/needs_search.md)
