# 📚 Paper Atlas

> A review-style Awesome map for post-training reasoning data papers, verifiers, data releases, construction recipes, frontier reports, and audit work.

Use this folder when you want the repo to behave like a living survey. Each category page explains what the track studies, why it matters for post-training reasoning data, which subfields exist, what papers to read first, what each paper's data object/verifier/recipe looks like, and how to audit the claims.

## Awesome-Style Contents

- 📚 Main Research Tracks
  - [🧭 Surveys & Primers](00_surveys_and_primers.md)
    - [🧭 Post-training surveys](00_surveys_and_primers.md#post-training-surveys)
    - [🧠 Reasoning LLM surveys](00_surveys_and_primers.md#reasoning-llm-surveys)
    - [📦 Data documentation / datasheets](00_surveys_and_primers.md#data-documentation-datasheets)
    - [🧪 RLHF / reward-model surveys](00_surveys_and_primers.md#rlhf-reward-model-surveys)
    - [🌐 Agent data / tool-use surveys](00_surveys_and_primers.md#agent-data-tool-use-surveys)
    - [🧯 Contamination / evaluation surveys](00_surveys_and_primers.md#contamination-evaluation-surveys)
  - [🧱 Foundations](01_foundations_instruction_preference_alignment.md)
    - [🧱 Instruction tuning / SFT data](01_foundations_instruction_preference_alignment.md#instruction-tuning-sft-data)
    - [🤝 Human preference data / RLHF](01_foundations_instruction_preference_alignment.md#human-preference-data-rlhf)
    - [⚖️ DPO / preference optimization](01_foundations_instruction_preference_alignment.md#dpo-preference-optimization)
    - [🧠 Chain-of-thought / rationale data](01_foundations_instruction_preference_alignment.md#chain-of-thought-rationale-data)
    - [🔁 Self-training / STaR / Self-Instruct](01_foundations_instruction_preference_alignment.md#self-training-star-self-instruct)
    - [🤖 RLAIF / synthetic feedback](01_foundations_instruction_preference_alignment.md#rlaif-synthetic-feedback)
  - [🧮 Programmatic Verification](02_programmatic_math_code_proof.md)
    - [📐 Math answer-verifiable data](02_programmatic_math_code_proof.md#math-answer-verifiable-data)
    - [🧮 Math RLVR datasets](02_programmatic_math_code_proof.md#math-rlvr-datasets)
    - [💻 Code execution / unit-test data](02_programmatic_math_code_proof.md#code-execution-unit-test-data)
    - [🧾 Formal proof / Lean / theorem proving](02_programmatic_math_code_proof.md#formal-proof-lean-theorem-proving)
    - [🧪 Verifier robustness and answer extraction](02_programmatic_math_code_proof.md#verifier-robustness-and-answer-extraction)
    - [🧰 Programmatic benchmarks](02_programmatic_math_code_proof.md#programmatic-benchmarks)
  - [🪜 Process Supervision & PRMs](03_process_supervision_prm.md)
    - [🪜 Human step-level labels](03_process_supervision_prm.md#human-step-level-labels)
    - [🧪 Process reward models](03_process_supervision_prm.md#process-reward-models)
    - [🔁 Rollout-value supervision](03_process_supervision_prm.md#rollout-value-supervision)
    - [🛠️ Automatic process supervision](03_process_supervision_prm.md#automatic-process-supervision)
    - [❌ First-error localization](03_process_supervision_prm.md#first-error-localization)
    - [📊 PRM benchmarks and evaluation](03_process_supervision_prm.md#prm-benchmarks-and-evaluation)
  - [🌐 Agent & Environment Data](04_environmental_agents_tools_web_swe.md)
    - [🛠️ Tool-use data](04_environmental_agents_tools_web_swe.md#tool-use-data)
    - [🌍 Web/browser agents](04_environmental_agents_tools_web_swe.md#web-browser-agents)
    - [📱 App/mobile agents](04_environmental_agents_tools_web_swe.md#app-mobile-agents)
    - [🖥️ OS/desktop agents](04_environmental_agents_tools_web_swe.md#os-desktop-agents)
    - [🧑‍💻 SWE/repository agents](04_environmental_agents_tools_web_swe.md#swe-repository-agents)
    - [🔁 Replayable trajectory data](04_environmental_agents_tools_web_swe.md#replayable-trajectory-data)
    - [🧰 Agent benchmarks and terminal predicates](04_environmental_agents_tools_web_swe.md#agent-benchmarks-and-terminal-predicates)
  - [⚖️ Judgment-Required Data](05_judgment_required_rubrics_safety_domain.md)
    - [⚖️ LLM-as-judge data](05_judgment_required_rubrics_safety_domain.md#llm-as-judge-data)
    - [🧑‍⚖️ Human/expert judgment](05_judgment_required_rubrics_safety_domain.md#human-expert-judgment)
    - [🩺 Medical reasoning / health rubrics](05_judgment_required_rubrics_safety_domain.md#medical-reasoning-health-rubrics)
    - [🛡️ Safety reasoning data](05_judgment_required_rubrics_safety_domain.md#safety-reasoning-data)
    - [🧾 Factuality / grounding](05_judgment_required_rubrics_safety_domain.md#factuality-grounding)
    - [⚖️ Legal reasoning](05_judgment_required_rubrics_safety_domain.md#legal-reasoning)
    - [🏦 Financial reasoning](05_judgment_required_rubrics_safety_domain.md#financial-reasoning)
    - [🧪 Rubric reward models](05_judgment_required_rubrics_safety_domain.md#rubric-reward-models)
  - [🏗️ Construction Recipes](06_construction_recipes_open_reasoning_data.md)
    - [🧱 Prompt sourcing](06_construction_recipes_open_reasoning_data.md#prompt-sourcing)
    - [✍️ Teacher trace generation](06_construction_recipes_open_reasoning_data.md#teacher-trace-generation)
    - [🔎 Rejection sampling / search-generated data](06_construction_recipes_open_reasoning_data.md#rejection-sampling-search-generated-data)
    - [🔁 Self-play / self-improvement](06_construction_recipes_open_reasoning_data.md#self-play-self-improvement)
    - [🧪 Filtering and verifier refresh](06_construction_recipes_open_reasoning_data.md#filtering-and-verifier-refresh)
    - [🏗️ Open reasoning data releases](06_construction_recipes_open_reasoning_data.md#open-reasoning-data-releases)
    - [🧬 Data lineage and release metadata](06_construction_recipes_open_reasoning_data.md#data-lineage-and-release-metadata)
  - [🚀 Frontier Reports](07_frontier_model_reports.md)
    - [🚀 DeepSeek-R1 family](07_frontier_model_reports.md#deepseek-r1-family)
    - [🌙 Kimi reasoning reports](07_frontier_model_reports.md#kimi-reasoning-reports)
    - [🐉 Qwen reasoning/math/code reports](07_frontier_model_reports.md#qwen-reasoning-math-code-reports)
    - [🧠 Magistral / Phi / Nemotron style reports](07_frontier_model_reports.md#magistral-phi-nemotron-style-reports)
    - [🧪 RLVR recipe reports](07_frontier_model_reports.md#rlvr-recipe-reports)
    - [🧬 What is disclosed vs hidden](07_frontier_model_reports.md#what-is-disclosed-vs-hidden)
  - [📈 Scaling & Test-Time Compute](08_scaling_test_time_compute_rlvr.md)
    - [📈 Data scaling](08_scaling_test_time_compute_rlvr.md#data-scaling)
    - [🔁 Data reuse and uniqueness](08_scaling_test_time_compute_rlvr.md#data-reuse-and-uniqueness)
    - [⏱️ Test-time compute](08_scaling_test_time_compute_rlvr.md#test-time-compute)
    - [🎲 pass@k / sampling budget](08_scaling_test_time_compute_rlvr.md#pass-k-sampling-budget)
    - [🧪 Verifier scaling](08_scaling_test_time_compute_rlvr.md#verifier-scaling)
    - [🏋️ RLVR optimization scaling](08_scaling_test_time_compute_rlvr.md#rlvr-optimization-scaling)
    - [🔍 Scaling attribution](08_scaling_test_time_compute_rlvr.md#scaling-attribution)
  - [🧯 Audit & Failure Modes](09_audit_failure_contamination_verifier_attacks.md)
    - [🧯 Benchmark contamination](09_audit_failure_contamination_verifier_attacks.md#benchmark-contamination)
    - [🔍 Search-time contamination](09_audit_failure_contamination_verifier_attacks.md#search-time-contamination)
    - [🧬 Hidden lineage / teacher leakage](09_audit_failure_contamination_verifier_attacks.md#hidden-lineage-teacher-leakage)
    - [🎮 Reward hacking](09_audit_failure_contamination_verifier_attacks.md#reward-hacking)
    - [🧪 Verifier gaming](09_audit_failure_contamination_verifier_attacks.md#verifier-gaming)
    - [⚖️ LLM-as-judge attacks](09_audit_failure_contamination_verifier_attacks.md#llm-as-judge-attacks)
    - [🧨 Spurious rewards](09_audit_failure_contamination_verifier_attacks.md#spurious-rewards)
    - [📉 Reproducibility failures](09_audit_failure_contamination_verifier_attacks.md#reproducibility-failures)
  - [🧰 Benchmarks & Evaluation](10_benchmarks_evaluation.md)
    - [📐 Math benchmarks](10_benchmarks_evaluation.md#math-benchmarks)
    - [💻 Code benchmarks](10_benchmarks_evaluation.md#code-benchmarks)
    - [🧾 Proof benchmarks](10_benchmarks_evaluation.md#proof-benchmarks)
    - [🌐 Agent benchmarks](10_benchmarks_evaluation.md#agent-benchmarks)
    - [⚖️ Rubric/domain benchmarks](10_benchmarks_evaluation.md#rubric-domain-benchmarks)
    - [🧪 Reward-model benchmarks](10_benchmarks_evaluation.md#reward-model-benchmarks)
    - [🧯 Live / contamination-resistant benchmarks](10_benchmarks_evaluation.md#live-contamination-resistant-benchmarks)
- 🧩 Browse by Data Object
  - prompt-answer, trace-answer, step label, rollout value, preference pair, reward record, agent trajectory, rubric record
- 🛠️ Browse by Training Use
  - SFT, distillation, reward modeling, process supervision, RLVR, agent training, evaluation, audit
- 🧪 Browse by Feedback Contract
  - programmatic, environmental, judgment-required, mixed, unknown

## Research Track Navigator

| Track | Subfields | Best for | Entries | Jump |
|---|---|---|---:|---|
| 🧭 Surveys & Primers | [🧭 Post-training surveys](00_surveys_and_primers.md#post-training-surveys)<br>[🧠 Reasoning LLM surveys](00_surveys_and_primers.md#reasoning-llm-surveys)<br>[📦 Data documentation / datasheets](00_surveys_and_primers.md#data-documentation-datasheets)<br>[🧪 RLHF / reward-model surveys](00_surveys_and_primers.md#rlhf-reward-model-surveys)<br>[🌐 Agent data / tool-use surveys](00_surveys_and_primers.md#agent-data-tool-use-surveys)<br>[🧯 Contamination / evaluation surveys](00_surveys_and_primers.md#contamination-evaluation-surveys) | building the field map before reading primary papers | 41 | [00_surveys_and_primers.md](00_surveys_and_primers.md) |
| 🧱 Foundations | [🧱 Instruction tuning / SFT data](01_foundations_instruction_preference_alignment.md#instruction-tuning-sft-data)<br>[🤝 Human preference data / RLHF](01_foundations_instruction_preference_alignment.md#human-preference-data-rlhf)<br>[⚖️ DPO / preference optimization](01_foundations_instruction_preference_alignment.md#dpo-preference-optimization)<br>[🧠 Chain-of-thought / rationale data](01_foundations_instruction_preference_alignment.md#chain-of-thought-rationale-data)<br>[🔁 Self-training / STaR / Self-Instruct](01_foundations_instruction_preference_alignment.md#self-training-star-self-instruct)<br>[🤖 RLAIF / synthetic feedback](01_foundations_instruction_preference_alignment.md#rlaif-synthetic-feedback) | understanding where reasoning-data objects came from | 59 | [01_foundations_instruction_preference_alignment.md](01_foundations_instruction_preference_alignment.md) |
| 🧮 Programmatic Verification | [📐 Math answer-verifiable data](02_programmatic_math_code_proof.md#math-answer-verifiable-data)<br>[🧮 Math RLVR datasets](02_programmatic_math_code_proof.md#math-rlvr-datasets)<br>[💻 Code execution / unit-test data](02_programmatic_math_code_proof.md#code-execution-unit-test-data)<br>[🧾 Formal proof / Lean / theorem proving](02_programmatic_math_code_proof.md#formal-proof-lean-theorem-proving)<br>[🧪 Verifier robustness and answer extraction](02_programmatic_math_code_proof.md#verifier-robustness-and-answer-extraction)<br>[🧰 Programmatic benchmarks](02_programmatic_math_code_proof.md#programmatic-benchmarks) | RLVR, answer-verifiable data, and executable reasoning tasks | 52 | [02_programmatic_math_code_proof.md](02_programmatic_math_code_proof.md) |
| 🪜 Process Supervision & PRMs | [🪜 Human step-level labels](03_process_supervision_prm.md#human-step-level-labels)<br>[🧪 Process reward models](03_process_supervision_prm.md#process-reward-models)<br>[🔁 Rollout-value supervision](03_process_supervision_prm.md#rollout-value-supervision)<br>[🛠️ Automatic process supervision](03_process_supervision_prm.md#automatic-process-supervision)<br>[❌ First-error localization](03_process_supervision_prm.md#first-error-localization)<br>[📊 PRM benchmarks and evaluation](03_process_supervision_prm.md#prm-benchmarks-and-evaluation) | step-level rewards, PRM research, and verifier-model design | 23 | [03_process_supervision_prm.md](03_process_supervision_prm.md) |
| 🌐 Agent & Environment Data | [🛠️ Tool-use data](04_environmental_agents_tools_web_swe.md#tool-use-data)<br>[🌍 Web/browser agents](04_environmental_agents_tools_web_swe.md#web-browser-agents)<br>[📱 App/mobile agents](04_environmental_agents_tools_web_swe.md#app-mobile-agents)<br>[🖥️ OS/desktop agents](04_environmental_agents_tools_web_swe.md#os-desktop-agents)<br>[🧑‍💻 SWE/repository agents](04_environmental_agents_tools_web_swe.md#swe-repository-agents)<br>[🔁 Replayable trajectory data](04_environmental_agents_tools_web_swe.md#replayable-trajectory-data)<br>[🧰 Agent benchmarks and terminal predicates](04_environmental_agents_tools_web_swe.md#agent-benchmarks-and-terminal-predicates) | tool, web, OS, app, and repository-level trajectory data | 49 | [04_environmental_agents_tools_web_swe.md](04_environmental_agents_tools_web_swe.md) |
| ⚖️ Judgment-Required Data | [⚖️ LLM-as-judge data](05_judgment_required_rubrics_safety_domain.md#llm-as-judge-data)<br>[🧑‍⚖️ Human/expert judgment](05_judgment_required_rubrics_safety_domain.md#human-expert-judgment)<br>[🩺 Medical reasoning / health rubrics](05_judgment_required_rubrics_safety_domain.md#medical-reasoning-health-rubrics)<br>[🛡️ Safety reasoning data](05_judgment_required_rubrics_safety_domain.md#safety-reasoning-data)<br>[🧾 Factuality / grounding](05_judgment_required_rubrics_safety_domain.md#factuality-grounding)<br>[⚖️ Legal reasoning](05_judgment_required_rubrics_safety_domain.md#legal-reasoning)<br>[🏦 Financial reasoning](05_judgment_required_rubrics_safety_domain.md#financial-reasoning)<br>[🧪 Rubric reward models](05_judgment_required_rubrics_safety_domain.md#rubric-reward-models) | rubrics, LLM judges, high-stakes domains, and expert evaluation | 54 | [05_judgment_required_rubrics_safety_domain.md](05_judgment_required_rubrics_safety_domain.md) |
| 🏗️ Construction Recipes | [🧱 Prompt sourcing](06_construction_recipes_open_reasoning_data.md#prompt-sourcing)<br>[✍️ Teacher trace generation](06_construction_recipes_open_reasoning_data.md#teacher-trace-generation)<br>[🔎 Rejection sampling / search-generated data](06_construction_recipes_open_reasoning_data.md#rejection-sampling-search-generated-data)<br>[🔁 Self-play / self-improvement](06_construction_recipes_open_reasoning_data.md#self-play-self-improvement)<br>[🧪 Filtering and verifier refresh](06_construction_recipes_open_reasoning_data.md#filtering-and-verifier-refresh)<br>[🏗️ Open reasoning data releases](06_construction_recipes_open_reasoning_data.md#open-reasoning-data-releases)<br>[🧬 Data lineage and release metadata](06_construction_recipes_open_reasoning_data.md#data-lineage-and-release-metadata) | building, filtering, releasing, and reproducing reasoning datasets | 84 | [06_construction_recipes_open_reasoning_data.md](06_construction_recipes_open_reasoning_data.md) |
| 🚀 Frontier Reports | [🚀 DeepSeek-R1 family](07_frontier_model_reports.md#deepseek-r1-family)<br>[🌙 Kimi reasoning reports](07_frontier_model_reports.md#kimi-reasoning-reports)<br>[🐉 Qwen reasoning/math/code reports](07_frontier_model_reports.md#qwen-reasoning-math-code-reports)<br>[🧠 Magistral / Phi / Nemotron style reports](07_frontier_model_reports.md#magistral-phi-nemotron-style-reports)<br>[🧪 RLVR recipe reports](07_frontier_model_reports.md#rlvr-recipe-reports)<br>[🧬 What is disclosed vs hidden](07_frontier_model_reports.md#what-is-disclosed-vs-hidden) | reading model reports as partial data disclosures | 34 | [07_frontier_model_reports.md](07_frontier_model_reports.md) |
| 📈 Scaling & Test-Time Compute | [📈 Data scaling](08_scaling_test_time_compute_rlvr.md#data-scaling)<br>[🔁 Data reuse and uniqueness](08_scaling_test_time_compute_rlvr.md#data-reuse-and-uniqueness)<br>[⏱️ Test-time compute](08_scaling_test_time_compute_rlvr.md#test-time-compute)<br>[🎲 pass@k / sampling budget](08_scaling_test_time_compute_rlvr.md#pass-k-sampling-budget)<br>[🧪 Verifier scaling](08_scaling_test_time_compute_rlvr.md#verifier-scaling)<br>[🏋️ RLVR optimization scaling](08_scaling_test_time_compute_rlvr.md#rlvr-optimization-scaling)<br>[🔍 Scaling attribution](08_scaling_test_time_compute_rlvr.md#scaling-attribution) | interpreting RLVR, data scaling, and inference-budget claims | 62 | [08_scaling_test_time_compute_rlvr.md](08_scaling_test_time_compute_rlvr.md) |
| 🧯 Audit & Failure Modes | [🧯 Benchmark contamination](09_audit_failure_contamination_verifier_attacks.md#benchmark-contamination)<br>[🔍 Search-time contamination](09_audit_failure_contamination_verifier_attacks.md#search-time-contamination)<br>[🧬 Hidden lineage / teacher leakage](09_audit_failure_contamination_verifier_attacks.md#hidden-lineage-teacher-leakage)<br>[🎮 Reward hacking](09_audit_failure_contamination_verifier_attacks.md#reward-hacking)<br>[🧪 Verifier gaming](09_audit_failure_contamination_verifier_attacks.md#verifier-gaming)<br>[⚖️ LLM-as-judge attacks](09_audit_failure_contamination_verifier_attacks.md#llm-as-judge-attacks)<br>[🧨 Spurious rewards](09_audit_failure_contamination_verifier_attacks.md#spurious-rewards)<br>[📉 Reproducibility failures](09_audit_failure_contamination_verifier_attacks.md#reproducibility-failures) | auditing leakage, contamination, verifier gaming, and judge attacks | 54 | [09_audit_failure_contamination_verifier_attacks.md](09_audit_failure_contamination_verifier_attacks.md) |
| 🧰 Benchmarks & Evaluation | [📐 Math benchmarks](10_benchmarks_evaluation.md#math-benchmarks)<br>[💻 Code benchmarks](10_benchmarks_evaluation.md#code-benchmarks)<br>[🧾 Proof benchmarks](10_benchmarks_evaluation.md#proof-benchmarks)<br>[🌐 Agent benchmarks](10_benchmarks_evaluation.md#agent-benchmarks)<br>[⚖️ Rubric/domain benchmarks](10_benchmarks_evaluation.md#rubric-domain-benchmarks)<br>[🧪 Reward-model benchmarks](10_benchmarks_evaluation.md#reward-model-benchmarks)<br>[🧯 Live / contamination-resistant benchmarks](10_benchmarks_evaluation.md#live-contamination-resistant-benchmarks) | choosing evaluation surfaces and reusable feedback contracts | 88 | [10_benchmarks_evaluation.md](10_benchmarks_evaluation.md) |

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

| # | Work | Link | Card |
|---:|---|---|---|
| 1 | Datasheets for datasets | [Paper](https://arxiv.org/abs/1803.09010) | [Card](../cards/releases/datasheets-for-datasets.md) |
| 2 | Data statements for natural language processing | [Paper](https://aclanthology.org/Q18-1041/) | [Card](../cards/releases/data-statements-for-natural-language-processing.md) |
| 3 | Training language models to follow instructions with human feedback | [Paper](https://arxiv.org/abs/2203.02155) | [Card](../cards/recipes/training-language-models-to-follow-instructions-with-human-feedback.md) |
| 4 | Chain-of-thought prompting elicits reasoning in large language models | [Paper](https://arxiv.org/abs/2201.11903) | [Card](../cards/releases/chain-of-thought-prompting-elicits-reasoning-in-large-language-models.md) |
| 5 | Training verifiers to solve math word problems | [Paper](https://arxiv.org/abs/2110.14168) | [Card](../cards/verifiers/training-verifiers-to-solve-math-word-problems.md) |
| 6 | STaR: Bootstrapping reasoning with reasoning | [Paper](https://arxiv.org/abs/2203.14465) | [Card](../cards/recipes/star-bootstrapping-reasoning-with-reasoning.md) |
| 7 | Self-Instruct: Aligning language models with self-generated instructions | [Paper](https://arxiv.org/abs/2212.10560) | [Card](../cards/recipes/self-instruct-aligning-language-models-with-self-generated-instructions.md) |
| 8 | Direct preference optimization: Your language model is secretly a reward model | [Paper](https://arxiv.org/abs/2305.18290) | [Card](../cards/releases/direct-preference-optimization-your-language-model-is-secretly-a-reward-model.md) |
| 9 | Let's Verify Step by Step | [Paper](https://arxiv.org/abs/2305.20050) | [Card](../cards/verifiers/prm800k.md) |
| 10 | GSM8K: Grade School Math 8K | [Paper](https://arxiv.org/abs/2110.14168) | [Card](../cards/benchmarks/gsm8k-grade-school-math-8k.md) |
| 11 | Measuring mathematical problem solving with the MATH dataset | [Paper](https://arxiv.org/abs/2103.03874) | [Card](../cards/benchmarks/measuring-mathematical-problem-solving-with-the-math-dataset.md) |
| 12 | HumanEval: Hand-Written Evaluation Set | [Paper](https://arxiv.org/abs/2107.03374) | [Card](../cards/benchmarks/humaneval-hand-written-evaluation-set.md) |
| 13 | SWE-bench: Can language models resolve real-world GitHub issues? | [Paper](https://arxiv.org/abs/2310.06770) | [Card](../cards/agents/swe-bench-can-language-models-resolve-real-world-github-issues.md) |
| 14 | RewardBench: Evaluating Reward Models for Language Modeling | [Paper](https://arxiv.org/abs/2403.13787) | [Card](../cards/verifiers/rewardbench.md) |
| 15 | HealthBench | [Paper](https://arxiv.org/abs/2505.08775) | [Card](../cards/verifiers/healthbench.md) |
| 16 | LiveBench: A challenging, contamination-free benchmark for large language models | [Paper](https://arxiv.org/abs/2406.19314) | [Card](../cards/failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md) |
| 17 | OpenThoughts: Data recipes for reasoning models | [Paper](https://arxiv.org/abs/2506.04178) | [Card](../cards/releases/openthoughts.md) |
| 18 | DeepSeek-R1 | [Paper](https://arxiv.org/abs/2501.12948) | [Card](../cards/recipes/deepseek_r1.md) |
| 19 | s1: Simple Test-Time Scaling | [Paper](https://arxiv.org/abs/2501.19393) | [Card](../cards/releases/s1.md) |
| 20 | A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility | [Paper](https://arxiv.org/abs/2504.07086) | [Card](../cards/releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md) |

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
