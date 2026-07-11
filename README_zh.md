# 🌟 Awesome LLM Reasoning Data

> 一个系统学习“大模型后训练推理数据”的开源仓库：从概念、论文、数据构造、验证器、奖励信号、Agent 轨迹、RLVR、benchmark 到审计风险。

[论文：A Primer in Post-Training Reasoning Data](https://arxiv.org/abs/2606.02113)

[🌐 网页版 Atlas](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/) · [📚 论文分类地图](papers/README.md)

<p align="center">
  <img src="assets/overview.svg" width="92%" alt="Awesome LLM Reasoning Data overview">
</p>

## 这个项目是什么？

这个仓库不是只为了收集论文标题，也不是为了复刻论文综述的写法。它的目标是成为一个**学习型仓库**：让想了解大模型后训练推理数据的人，可以沿着这里的学习路线，从基本概念一路学到数据构造、verifier/reward、RLVR、Agent 轨迹、frontier model report 和 failure audit。

它重点回答一个问题：

> 一个模型经过后训练之后推理能力变强，背后到底是什么数据记录、反馈信号、验证器、奖励、环境或裁判在起作用？

所以这里关注的不是单纯的 `paper list`，而是每篇工作公开了什么数据对象、反馈契约、构造流程、训练用途、官方链接和审计风险。

核心记录通常不是：

`prompt -> answer`

而更像：

`任务/上下文 -> 推理轨迹/动作 -> 答案/产物 -> 验证器/奖励/裁判/环境 -> 元数据`

## 🔥 最新状态

| 指标 | 数量 |
|---|---:|
| 总条目 | 28 |
| 已验证官方主链接 | 28 |
| 有 paper/arXiv/venue/DOI 链接 | 28 |
| 完整双语 paper-card source | 28 |
| L5 audit-ready | 1 |
| 仍需搜索 | 0 |
| 官方 code 链接 | 16 |
| 官方 data 链接 | 8 |
| Hugging Face 链接 | 6 |
| project 链接 | 8 |

## 🧭 按研究领域浏览

其他 Awesome 往往只告诉读者“有哪些论文”。这个仓库还需要告诉读者：每类后训练推理数据解决什么问题、论文公开了什么 data object、verifier/reward/recipe 是什么、以及应该如何审计。

### 🧭 Background / Foundations（入门与基础）

先建立共同词汇和领域地图，再进入细分论文。

| 研究轨道 | 二级方向 | 适合用来做什么 | 条目数 | 入口 |
|---|---|---|---:|---|
| 🧭 Foundations & Primers | 🧭 Post-training surveys<br>🧠 Reasoning LLM surveys<br>📦 Data documentation / datasheets<br>🧪 RLHF / reward-model surveys<br>🌐 Agent data / tool-use surveys<br>🧯 Contamination / evaluation surveys | 先建立领域地图，再进入一手论文 | 0 | [进入](papers/00_background_foundations/00_foundations_and_primers.md) |

### 🧬 Core Reasoning Data Types（核心数据类型）

按真实数据对象理解论文：demonstration、preference、verifiable outcome、process label、rollout trace、agent episode、rubric。

| 研究轨道 | 二级方向 | 适合用来做什么 | 条目数 | 入口 |
|---|---|---|---:|---|
| 🧱 Instruction / Demo / Rationale | 🧱 Instruction tuning / SFT data<br>🧑‍🏫 Human demonstrations<br>🤖 Synthetic instruction data<br>🧠 Chain-of-thought / rationale data<br>🔁 Self-training / STaR<br>✂️ Long/short CoT distillation | 理解 instruction、demonstration、rationale 和 teacher trace 如何成为训练数据 | 0 | [进入](papers/01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md) |
| 🤝 Preference & Reward Feedback | 🤝 Human preference data / RLHF<br>⚖️ DPO / preference optimization<br>🎚️ Scalar reward / ORM data<br>🤖 RLAIF / synthetic feedback<br>🧪 Reward-model benchmarks<br>🧾 Rubric-conditioned rewards | 比较 preference、reward、DPO、RLAIF、rubric reward 和 judge feedback | 0 | [进入](papers/01_core_reasoning_data_types/02_preference_reward_feedback_data.md) |
| 🧮 Programmatic Verification | 📐 Math answer-verifiable data<br>🧮 Math RLVR datasets<br>💻 Code execution / unit-test data<br>🧾 Formal proof / Lean / theorem proving<br>🧪 Verifier robustness and answer extraction<br>🧰 Programmatic benchmarks | 学习 math/code/proof 中可程序验证的 outcome 数据 | 7 | [进入](papers/01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md) |
| 🪜 Process / Trace Supervision | 🪜 Human step-level labels<br>🧪 Process reward models<br>🔁 Rollout-value supervision<br>🛠️ Automatic process supervision<br>❌ First-error localization<br>📊 PRM benchmarks and evaluation | 定位 step-level label、PRM、rollout value 和 first-error 监督 | 4 | [进入](papers/01_core_reasoning_data_types/04_process_trace_supervision_data.md) |
| 🔁 Rollout / Search / TTC Trace | 🎲 Multiple rollouts / best-of-N<br>🌳 Search trees / MCTS<br>🔎 Rejection sampling traces<br>🧠 Self-consistency / repeated sampling<br>⏱️ Test-time compute logs<br>✂️ Long2short / distill-from-search | 阅读 rollout、search、best-of-N、pass@k 和 test-time trace 数据 | 8 | [进入](papers/01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md) |
| 🌐 Environment & Agent Trajectories | 🛠️ Tool-use data<br>🌍 Web/browser agents<br>📱 App/mobile agents<br>🖥️ OS/desktop agents<br>🧑‍💻 SWE/repository agents<br>🔁 Replayable trajectory data<br>🧰 Agent benchmarks and terminal predicates | 研究工具、网页、OS、App 和代码仓库级 agent 轨迹数据 | 3 | [进入](papers/01_core_reasoning_data_types/06_environment_agent_trajectory_data.md) |
| ⚖️ Judgment / Rubric / Domain Expert | ⚖️ LLM-as-judge data<br>🧑‍⚖️ Human/expert judgment<br>🩺 Medical reasoning / health rubrics<br>🛡️ Safety reasoning data<br>🧾 Factuality / grounding<br>⚖️ Legal reasoning<br>🏦 Financial reasoning<br>🧪 Rubric reward models | 理解 rubric、LLM judge、高风险领域和专家评估数据 | 0 | [进入](papers/01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md) |

### 🛠️ Data Lifecycle（构造、训练、评测与审计）

沿着构造、训练、scaling、benchmark、frontier report 和 failure audit 的生命周期阅读。

| 研究轨道 | 二级方向 | 适合用来做什么 | 条目数 | 入口 |
|---|---|---|---:|---|
| 🏗️ Construction & Open Releases | 🧱 Prompt sourcing<br>✍️ Teacher trace generation<br>🔎 Rejection sampling / search-generated data<br>🔁 Self-play / self-improvement<br>🧪 Filtering and verifier refresh<br>🏗️ Open reasoning data releases<br>🧬 Data lineage and release metadata | 学习推理数据如何构造、过滤、发布和复现 | 5 | [进入](papers/02_data_lifecycle/08_data_construction_open_release_recipes.md) |
| 🎯 Training Usage & Objectives | 🧱 SFT / instruction tuning<br>📚 Distillation<br>⚖️ Preference optimization<br>🎚️ Reward modeling / ORM<br>🪜 PRM / process supervision<br>🏋️ RLVR / verifier RL<br>🌐 Agent training<br>🧪 Evaluation / reranking / audit | 判断数据如何进入 SFT、DPO、RM、PRM、RLVR、agent training、evaluation 或 audit | 2 | [进入](papers/02_data_lifecycle/09_training_usage_optimization_objectives.md) |
| 📈 Scaling / RLVR / TTC | 📈 Data scaling<br>🔁 Data reuse and uniqueness<br>⏱️ Test-time compute<br>🎲 pass@k / sampling budget<br>🧪 Verifier scaling<br>🏋️ RLVR optimization scaling<br>🔍 Scaling attribution | 拆解 RLVR、数据规模和 test-time compute 的贡献 | 13 | [进入](papers/02_data_lifecycle/10_scaling_rlvr_test_time_compute.md) |
| 🧰 Benchmarks & Evaluation | 📐 Math benchmarks<br>💻 Code benchmarks<br>🧾 Proof benchmarks<br>🌐 Agent benchmarks<br>⚖️ Rubric/domain benchmarks<br>🧪 Reward-model benchmarks<br>🧯 Live / contamination-resistant benchmarks | 选择评测面、benchmark 和可复用反馈契约 | 0 | [进入](papers/02_data_lifecycle/11_benchmarks_evaluation_surfaces.md) |
| 🚀 Frontier Disclosure Ledger | 🚀 DeepSeek-R1 family<br>🌙 Kimi reasoning reports<br>🐉 Qwen reasoning/math/code reports<br>🧠 Magistral / Phi / Nemotron style reports<br>🧪 RLVR recipe reports<br>🧬 What is disclosed vs hidden | 把前沿模型报告当作部分公开的数据配方来阅读 | 0 | [进入](papers/02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md) |
| 🧯 Audit & Failure Modes | 🧯 Benchmark contamination<br>🔍 Search-time contamination<br>🧬 Hidden lineage / teacher leakage<br>🎮 Reward hacking<br>🧪 Verifier gaming<br>⚖️ LLM-as-judge attacks<br>🧨 Spurious rewards<br>📉 Reproducibility failures | 审计污染、泄漏、verifier gaming、reward hacking 和 judge attack | 0 | [进入](papers/02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md) |

## 📚 详细论文分类目录

下面只展示已经有官方主链接的代表论文；如果某个子方向还没有 verified 条目，它会明确标成 needs search，而不是伪造链接。每行的 `data` 和 `feedback` 帮你判断这篇论文是不是你要读的那类后训练推理数据。

### 🧭 Background / Foundations（入门与基础）

#### 🧭 Foundations & Primers

> beginners building the field map before primary papers · [完整页面](papers/00_background_foundations/00_foundations_and_primers.md)

| 子方向 | 这个方向看什么 | 代表论文直达 | 审计风险 |
|---|---|---|---|
| [🧭 Post-training surveys](papers/00_background_foundations/00_foundations_and_primers.md#post-training-surveys) | field-level maps of post-training, reasoning models, and data-centric LLM practice | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | survey taxonomy hides concrete data objects |
| [🧠 Reasoning LLM surveys](papers/00_background_foundations/00_foundations_and_primers.md#reasoning-llm-surveys) | reasoning-model lineages, claims, and recurring evaluation patterns | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | model-centric framing obscures data and verifier details |
| [📦 Data documentation / datasheets](papers/00_background_foundations/00_foundations_and_primers.md#data-documentation-datasheets) | datasheets, data statements, lineage, license, and release metadata | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | reusable data lacks provenance or consent context |
| [🧪 RLHF / reward-model surveys](papers/00_background_foundations/00_foundations_and_primers.md#rlhf-reward-model-surveys) | background linking preference data, reward models, and reasoning rewards | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | generic alignment lessons are over-applied to verifiable reasoning |
| [🌐 Agent data / tool-use surveys](papers/00_background_foundations/00_foundations_and_primers.md#agent-data-tool-use-surveys) | orientation for tools, web tasks, OS tasks, and repository agents | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | agent traces are treated as transcripts rather than replayable episodes |
| [🧯 Contamination / evaluation surveys](papers/00_background_foundations/00_foundations_and_primers.md#contamination-evaluation-surveys) | reproducibility, contamination, model collapse, and benchmark refresh | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | benchmark deltas are accepted without overlap checks |

### 🧬 Core Reasoning Data Types（核心数据类型）

#### 🧱 Instruction / Demo / Rationale

> demonstration, SFT, CoT, rationale, and teacher-trace data · [完整页面](papers/01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md)

| 子方向 | 这个方向看什么 | 代表论文直达 | 审计风险 |
|---|---|---|---|
| [🧱 Instruction tuning / SFT data](papers/01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md#instruction-tuning-sft-data) | instruction-response examples, demonstrations, and target behavior records | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | prompt sources and mixture weights are hidden |
| [🧑‍🏫 Human demonstrations](papers/01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md#human-demonstrations) | human-written solutions, explanations, rationales, and expert demonstrations | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | human trace policy and expertise are unclear |
| [🤖 Synthetic instruction data](papers/01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md#synthetic-instruction-data) | self-instruct, teacher-generated tasks, and synthetic instruction mixtures | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | synthetic prompts collapse diversity or inherit teacher artifacts |
| [🧠 Chain-of-thought / rationale data](papers/01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md#chain-of-thought-rationale-data) | rationales, CoT traces, self-consistency, and reasoning-style supervision | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | trace style is mistaken for faithful reasoning |
| [🔁 Self-training / STaR](papers/01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md#self-training-star) | bootstrapped traces, self-training, critique loops, and filtered self-improvement | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | feedback loop repeats hidden errors or shortcuts |
| [✂️ Long/short CoT distillation](papers/01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md#long-short-cot-distillation) | teacher long traces, distilled short traces, and reasoning compression | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | distillation loses uncertainty and failed attempts |

#### 🤝 Preference & Reward Feedback

> RLHF, DPO, reward modeling, rubric rewards, and AI feedback · [完整页面](papers/01_core_reasoning_data_types/02_preference_reward_feedback_data.md)

| 子方向 | 这个方向看什么 | 代表论文直达 | 审计风险 |
|---|---|---|---|
| [🤝 Human preference data / RLHF](papers/01_core_reasoning_data_types/02_preference_reward_feedback_data.md#human-preference-data-rlhf) | human comparison data, helpful/harmless feedback, and RLHF reward targets | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | annotator assumptions and disagreement are hidden |
| [⚖️ DPO / preference optimization](papers/01_core_reasoning_data_types/02_preference_reward_feedback_data.md#dpo-preference-optimization) | pairwise data used directly for preference optimization | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | preference pairs are reused outside collection context |
| [🎚️ Scalar reward / ORM data](papers/01_core_reasoning_data_types/02_preference_reward_feedback_data.md#scalar-reward-orm-data) | outcome reward labels, scalar scores, and trained reward-model targets | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | scalar reward hides why an answer is better |
| [🤖 RLAIF / synthetic feedback](papers/01_core_reasoning_data_types/02_preference_reward_feedback_data.md#rlaif-synthetic-feedback) | model-generated preferences, critiques, and constitutional feedback | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | synthetic judge behavior is treated as human preference |
| [🧪 Reward-model benchmarks](papers/01_core_reasoning_data_types/02_preference_reward_feedback_data.md#reward-model-benchmarks) | rewardbench-style evaluation data and reward-model stress tests | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | benchmark preference does not predict downstream training value |
| [🧾 Rubric-conditioned rewards](papers/01_core_reasoning_data_types/02_preference_reward_feedback_data.md#rubric-conditioned-rewards) | rubric scores, critique-plus-score records, and domain-specific reward signals | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | rubric wording becomes an exploitable reward channel |

#### 🧮 Programmatic Verification

> math, code, proof, and answer-verifiable reasoning data · [完整页面](papers/01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md)

| 子方向 | 这个方向看什么 | 代表论文直达 | 审计风险 |
|---|---|---|---|
| [📐 Math answer-verifiable data](papers/01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md#math-answer-verifiable-data) | math problems, final answers, solution traces, and answer checkers | [Measuring Mathematical Problem Solving With the MATH Dataset](https://arxiv.org/abs/2103.03874) (2021, NeurIPS 2021 Datasets and Benchmarks) · [Paper Card Source](paper_cards/library/cards/math-dataset-2021/sources)<br><sub>data: Problem statement, LaTeX solution, and boxed final answer.; process: subject, difficu…; feedback: Extracted final-answer matching with task-specific normalization.</sub> | answer extraction and normalization inflate scores |
| [🧮 Math RLVR datasets](papers/01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md#math-rlvr-datasets) | math records used for rejection sampling, SFT, PRMs, and RLVR | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | data reuse and contamination are not reported |
| [💻 Code execution / unit-test data](papers/01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md#code-execution-unit-test-data) | code problems, unit tests, generated tests, execution logs, and repair tasks | [Measuring Coding Challenge Competence With APPS](https://arxiv.org/abs/2105.09938) (2021, NeurIPS 2021 Datasets and Benchmarks) · [Paper Card Source](paper_cards/library/cards/apps-2021/sources)<br><sub>data: Natural-language specification, starter code where applicable, input/output examples,…; feedback: Functional correctness under test execution.</sub> | flaky or leaked tests become the reward |
| [🧾 Formal proof / Lean / theorem proving](papers/01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md#formal-proof-lean-theorem-proving) | Lean, proof scripts, tactic environments, theorem statements, and proof checkers | [LeanDojo: Theorem Proving with Retrieval-Augmented Language Models](https://arxiv.org/abs/2306.15626) (2023, NeurIPS 2023 Datasets and Benchmarks) · [Paper Card Source](paper_cards/library/cards/leandojo-2023/sources)<br><sub>data: Theorem, local proof state, accessible premises, candidate tactic, next proof state,…; feedback: Lean proof-environment response and terminal kernel acceptance.</sub><br>[MiniF2F: a cross-system benchmark for formal Olympiad-level mathematics](https://arxiv.org/abs/2109.00110) (2022, ICLR 2022) · [Paper Card Source](paper_cards/library/cards/minif2f-2022/sources)<br><sub>data: Formal theorem statement, target proof-assistant language, candidate proof script, an…; feedback: Native proof-assistant kernel/checker acceptance.</sub> | proof succeeds only under an undocumented environment |
| [🧪 Verifier robustness and answer extraction](papers/01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md#verifier-robustness-and-answer-extraction) | false positives, false negatives, checker brittleness, and adversarial formats | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | model learns verifier quirks instead of task skill |
| [🧰 Programmatic benchmarks](papers/01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md#programmatic-benchmarks) | evaluation sets whose scoring can become a post-training signal | [BeyondBench: Contamination-Resistant Evaluation of Reasoning in Language Models](https://arxiv.org/abs/2509.24210) (2026, ICLR 2026) · [Paper Card Source](paper_cards/library/cards/beyondbench-2026/sources)<br><sub>data: Generated problem instance, model answer, and deterministic solution check.; process:…; feedback: Mathematical/programmatic verifier with large combinatorial instance spaces.</sub><br>[FeatureBench: Benchmarking Agentic Coding for Complex Feature Development](https://arxiv.org/abs/2602.10975) (2026, ICLR 2026) · [Paper Card Source](paper_cards/library/cards/featurebench-2026/sources)<br><sub>data: Repository task, code context, generated changes, executable environment, and test re…; feedback: Execution-based evaluation protocol using unit tests and repository behavio…</sub><br>[GeoGramBench: Benchmarking the Geometric Program Reasoning in Modern LLMs](https://arxiv.org/abs/2505.17653) (2026, ICLR 2026) · [Paper Card Source](paper_cards/library/cards/geogrambench-2026/sources)<br><sub>data: Procedural drawing code, geometry question, model answer, and benchmark score.; proce…; feedback: Benchmark answer checking over curated geometric reasoning problems.</sub> | benchmark scoring is reused as reward without audit |

#### 🪜 Process / Trace Supervision

> step-level labels, PRMs, rollout values, and first-error signals · [完整页面](papers/01_core_reasoning_data_types/04_process_trace_supervision_data.md)

| 子方向 | 这个方向看什么 | 代表论文直达 | 审计风险 |
|---|---|---|---|
| [🪜 Human step-level labels](papers/01_core_reasoning_data_types/04_process_trace_supervision_data.md#human-step-level-labels) | human-labeled intermediate steps and first-error annotations | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | step boundaries and label policy are ambiguous |
| [🧪 Process reward models](papers/01_core_reasoning_data_types/04_process_trace_supervision_data.md#process-reward-models) | PRMs, process verifiers, calibration, and reward-model training | [ReST-MCTS*](https://arxiv.org/abs/2406.03816) (2024, NeurIPS) · [Paper Card Source](paper_cards/library/cards/rest-mcts-2024/sources)<br><sub>data: searched reasoning trajectory with intermediate node states, final answer, verifier o…; feedback: process reward model guided by final-answer oracle feedback and MCTS-derive…</sub> | process reward rises while final correctness does not |
| [🔁 Rollout-value supervision](papers/01_core_reasoning_data_types/04_process_trace_supervision_data.md#rollout-value-supervision) | rollout values, search-derived labels, and automated progress signals | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | rollout policy leaks solver strength into labels |
| [🛠️ Automatic process supervision](papers/01_core_reasoning_data_types/04_process_trace_supervision_data.md#automatic-process-supervision) | programmatic or model-generated process labels without dense human annotation | [PRIME: Process reinforcement through implicit rewards](https://arxiv.org/abs/2502.01456) (2025, arXiv) · [Paper Card Source](paper_cards/library/cards/prime-process-reinforcement-through-implicit-rewards-2025/sources)<br><sub>data: policy rollout with final outcome label, implicit process reward estimates, and polic…; feedback: implicit process rewards derived from outcome labels and updated on policy…</sub><br>[AutoPSV: Automated Process-Supervised Verifier](https://arxiv.org/abs/2405.16802) (2024, NeurIPS) · [Paper Card Source](paper_cards/library/cards/autopsv-automated-process-supervised-verifier-2024/sources)<br><sub>data: reasoning trace with step-level confidence-change annotations.; process: problem, can…; feedback: answer-trained verifier converted into automated process annotations.</sub> | automatic labels silently inherit verifier bias |
| [❌ First-error localization](papers/01_core_reasoning_data_types/04_process_trace_supervision_data.md#first-error-localization) | where a solution first becomes invalid and how that signal is used | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | localized errors are not causally linked to correction |
| [📊 PRM benchmarks and evaluation](papers/01_core_reasoning_data_types/04_process_trace_supervision_data.md#prm-benchmarks-and-evaluation) | ProcessBench, PRMBench, Qwen PRM, and evaluation surfaces for process rewards | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | PRM benchmark success does not transfer to training use |

#### 🔁 Rollout / Search / TTC Trace

> search-generated candidates, best-of-N, pass@k, and test-time compute traces · [完整页面](papers/01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md)

| 子方向 | 这个方向看什么 | 代表论文直达 | 审计风险 |
|---|---|---|---|
| [🎲 Multiple rollouts / best-of-N](papers/01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md#multiple-rollouts-best-of-n) | sets of sampled attempts and selected accepted answers | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | only accepted traces are visible |
| [🌳 Search trees / MCTS](papers/01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md#search-trees-mcts) | tree search, MCTS, verifier-guided search, and path selection | [ReST-MCTS*](https://arxiv.org/abs/2406.03816) (2024, NeurIPS) · [Paper Card Source](paper_cards/library/cards/rest-mcts-2024/sources)<br><sub>data: searched reasoning trajectory with intermediate node states, final answer, verifier o…; feedback: process reward model guided by final-answer oracle feedback and MCTS-derive…</sub><br>[Language Agent Tree Search Unifies Reasoning Acting and Planning in Language Models](https://arxiv.org/abs/2310.04406) (2023, arXiv) · [Paper Card Source](paper_cards/library/cards/language-agent-tree-search-unifies-reasoning-acting-and-planning-in-language-models-2023/sources)<br><sub>data: A search tree of observations, actions, self-reflections, value estimates, environmen…; feedback: External environment feedback together with LM-powered value functions and…</sub><br>[Reasoning with Language Model is Planning with World Model](https://arxiv.org/abs/2305.14992) (2023, EMNLP) · [Paper Card Source](paper_cards/library/cards/reasoning-with-language-model-is-planning-with-world-model-2023/sources)<br><sub>data: An MCTS reasoning tree containing states, candidate actions, predicted transitions, r…; feedback: Task-specific rewards and model-predicted state transitions guide MCTS sele…</sub><br>[ReARTeR: Retrieval-Augmented Reasoning with Trustworthy Process Rewarding](https://arxiv.org/abs/2501.07861) (2025, arXiv) · [Paper Card Source](paper_cards/library/cards/rearter-retrieval-augmented-reasoning-with-trustworthy-process-rewarding-2025/sources)<br><sub>data: step-level preference data with retrieval context, process reward score, process expl…; feedback: Process Reward Model plus Process Explanation Model, with MCTS-guided searc…</sub> | tree policy or value model is hidden |
| [🔎 Rejection sampling traces](papers/01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md#rejection-sampling-traces) | accepted and rejected candidates produced during filtering | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | rejected examples are not released |
| [🧠 Self-consistency / repeated sampling](papers/01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md#self-consistency-repeated-sampling) | vote-based or agreement-based reasoning from repeated samples | [Large Language Monkeys: Scaling Inference Compute with Repeated Sampling](https://arxiv.org/abs/2407.21787) (2024, arXiv preprint arXiv:2407.21787) · [Paper Card Source](paper_cards/library/cards/large-language-monkeys-scaling-inference-compute-with-repeated-sampling-2024/sources)<br><sub>data: candidate solution set for each problem, with final answers, code submissions, Lean p…; feedback: automatic unit tests or Lean checker where available; oracle answer checks,…</sub> | sampling budget is not comparable |
| [⏱️ Test-time compute logs](papers/01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md#test-time-compute-logs) | thinking budgets, inference-time scaling, and runtime search traces | [Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters](https://arxiv.org/abs/2408.03314) (2024, arXiv) · [Paper Card Source](paper_cards/library/cards/scaling-llm-test-time-compute-optimally-2024/sources)<br><sub>data: Prompt, generated candidate traces, verifier scores, selected answer, and compute bud…; feedback: Dense process-based verifier reward models plus answer-level evaluation.</sub> | training and inference budget effects are conflated |
| [✂️ Long2short / distill-from-search](papers/01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md#long2short-distill-from-search) | using long search traces to train shorter or cheaper behavior | [Efficient Long CoT Reasoning in Small Language Models](https://arxiv.org/abs/2505.18440) (2025, arXiv) · [Paper Card Source](paper_cards/library/cards/efficient-long-cot-reasoning-in-small-language-models-2025/sources)<br><sub>data: Pruned long reasoning trace, final answer, validity outcome, and selected student-tra…; feedback: Programmatic or answer-based correctness checks validate traces selected fo…</sub> | teacher search artifacts become hidden data lineage |

#### 🌐 Environment & Agent Trajectories

> tool, web, OS, app, SWE, and replayable environment data · [完整页面](papers/01_core_reasoning_data_types/06_environment_agent_trajectory_data.md)

| 子方向 | 这个方向看什么 | 代表论文直达 | 审计风险 |
|---|---|---|---|
| [🛠️ Tool-use data](papers/01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#tool-use-data) | tool calls, function signatures, API banks, and tool-use traces | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | tool schemas change or hide execution failures |
| [🌍 Web/browser agents](papers/01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#web-browser-agents) | web tasks, browser state, navigation traces, and page observations | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | web state is not replayable after collection |
| [📱 App/mobile agents](papers/01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#app-mobile-agents) | mobile apps, app-world tasks, UI actions, and user simulators | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | UI state and app versions are not pinned |
| [🖥️ OS/desktop agents](papers/01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#os-desktop-agents) | desktop/OS tasks, filesystem state, shell actions, and multi-app workflows | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | hidden environment state makes episodes non-reproducible |
| [🧑‍💻 SWE/repository agents](papers/01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#swe-repository-agents) | GitHub issues, code patches, tests, commits, and repository repair episodes | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | repository commit, tests, and scaffold are not pinned |
| [🔁 Replayable trajectory data](papers/01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#replayable-trajectory-data) | state-action-observation schemas, terminal predicates, and failure traces | [Re-ReST: Reflection-Reinforced Self-Training for Language Agents](https://arxiv.org/abs/2406.01495) (2024, arXiv) · [Paper Card Source](paper_cards/library/cards/re-rest-reflection-reinforced-self-training-for-language-agents-2024/sources)<br><sub>data: Initial agent output, external feedback, reflection, refined output, and selected sel…; feedback: External feedback such as code unit-test results, plus reflector-generated…</sub> | success transcript cannot be replayed or audited |
| [🧰 Agent benchmarks and terminal predicates](papers/01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#agent-benchmarks-and-terminal-predicates) | agent evaluation suites, task resets, terminal predicates, and success/failure labels | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | score is reported without a replayable predicate |

#### ⚖️ Judgment / Rubric / Domain Expert

> LLM judges, expert rubrics, factuality, safety, medical, legal, and finance reasoning · [完整页面](papers/01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md)

| 子方向 | 这个方向看什么 | 代表论文直达 | 审计风险 |
|---|---|---|---|
| [⚖️ LLM-as-judge data](papers/01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#llm-as-judge-data) | model judges, preference judgments, judge prompts, and evaluator models | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | judge is sensitive to style, position, or prompt attacks |
| [🧑‍⚖️ Human/expert judgment](papers/01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#human-expert-judgment) | human labels, expert adjudication, disagreement handling, and rubric design | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | expertise and adjudication policy are not disclosed |
| [🩺 Medical reasoning / health rubrics](papers/01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#medical-reasoning-health-rubrics) | health, biomedical, scientific, and evidence-grounded reasoning tasks | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | rubrics are not calibrated for high-stakes error |
| [🛡️ Safety reasoning data](papers/01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#safety-reasoning-data) | safety reasoning, refusals, jailbreaks, harmfulness, and guardrail data | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | safe-looking refusals replace correct domain reasoning |
| [🧾 Factuality / grounding](papers/01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#factuality-grounding) | claims, citations, retrieval grounding, fact checking, and evidence quality | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | citation style masks unsupported claims |
| [⚖️ Legal reasoning](papers/01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#legal-reasoning) | legal QA, statutes, case reasoning, contracts, and expert legal rubrics | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | splits leak templates or jurisdiction assumptions |
| [🏦 Financial reasoning](papers/01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#financial-reasoning) | financial QA, tabular/text numerical reasoning, filings, and analyst-style judgments | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | splits leak templates or memorized company facts |
| [🧪 Rubric reward models](papers/01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#rubric-reward-models) | rubrics as trainable rewards and domain-conditioned reward models | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | rubric scores are optimized without semantic robustness |

### 🛠️ Data Lifecycle（构造、训练、评测与审计）

#### 🏗️ Construction & Open Releases

> building, filtering, releasing, and reproducing reasoning datasets · [完整页面](papers/02_data_lifecycle/08_data_construction_open_release_recipes.md)

| 子方向 | 这个方向看什么 | 代表论文直达 | 审计风险 |
|---|---|---|---|
| [🧱 Prompt sourcing](papers/02_data_lifecycle/08_data_construction_open_release_recipes.md#prompt-sourcing) | question pools, seed sources, licenses, difficulty, and base-model pass rates | [Re-ReST: Reflection-Reinforced Self-Training for Language Agents](https://arxiv.org/abs/2406.01495) (2024, arXiv) · [Paper Card Source](paper_cards/library/cards/re-rest-reflection-reinforced-self-training-for-language-agents-2024/sources)<br><sub>data: Initial agent output, external feedback, reflection, refined output, and selected sel…; feedback: External feedback such as code unit-test results, plus reflector-generated…</sub> | prompt sources are mixed without attribution |
| [✍️ Teacher trace generation](papers/02_data_lifecycle/08_data_construction_open_release_recipes.md#teacher-trace-generation) | teacher models, trace policies, sampling settings, and distillation targets | [Efficient Long CoT Reasoning in Small Language Models](https://arxiv.org/abs/2505.18440) (2025, arXiv) · [Paper Card Source](paper_cards/library/cards/efficient-long-cot-reasoning-in-small-language-models-2025/sources)<br><sub>data: Pruned long reasoning trace, final answer, validity outcome, and selected student-tra…; feedback: Programmatic or answer-based correctness checks validate traces selected fo…</sub> | teacher identity or sampling protocol is hidden |
| [🔎 Rejection sampling / search-generated data](papers/02_data_lifecycle/08_data_construction_open_release_recipes.md#rejection-sampling-search-generated-data) | candidate generation, search budget, filtering, and accepted/rejected examples | [Scaling Relationship on Learning Mathematical Reasoning with Large Language Models](https://arxiv.org/abs/2308.01825) (2023, arXiv) · [Paper Card Source](paper_cards/library/cards/scaling-relationship-on-learning-mathematical-reasoning-with-large-language-models-2023/sources)<br><sub>data: A generated reasoning path paired with final answer correctness and selection for the…; feedback: Final-answer correctness check retains correct reasoning paths.</sub> | only accepted traces are released |
| [🔁 Self-play / self-improvement](papers/02_data_lifecycle/08_data_construction_open_release_recipes.md#self-play-self-improvement) | self-improvement, co-evolution, generator-verifier cycles, and curricula | [AutoPSV: Automated Process-Supervised Verifier](https://arxiv.org/abs/2405.16802) (2024, NeurIPS) · [Paper Card Source](paper_cards/library/cards/autopsv-automated-process-supervised-verifier-2024/sources)<br><sub>data: reasoning trace with step-level confidence-change annotations.; process: problem, can…; feedback: answer-trained verifier converted into automated process annotations.</sub> | feedback loop amplifies hidden shortcuts |
| [🧪 Filtering and verifier refresh](papers/02_data_lifecycle/08_data_construction_open_release_recipes.md#filtering-and-verifier-refresh) | answer filters, judge filters, decontamination, and verifier updates | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | filter thresholds become hidden objectives |
| [🏗️ Open reasoning data releases](papers/02_data_lifecycle/08_data_construction_open_release_recipes.md#open-reasoning-data-releases) | open datasets, code, HF releases, recipes, ablations, and reproducibility | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | dataset is open but recipe details are not |
| [🧬 Data lineage and release metadata](papers/02_data_lifecycle/08_data_construction_open_release_recipes.md#data-lineage-and-release-metadata) | datasheets, splits, lineage, licensing, versioning, and known failures | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | reuse loses the release context |

#### 🎯 Training Usage & Objectives

> how data enters SFT, DPO, RM, PRM, RLVR, agents, evaluation, and audit · [完整页面](papers/02_data_lifecycle/09_training_usage_optimization_objectives.md)

| 子方向 | 这个方向看什么 | 代表论文直达 | 审计风险 |
|---|---|---|---|
| [🧱 SFT / instruction tuning](papers/02_data_lifecycle/09_training_usage_optimization_objectives.md#sft-instruction-tuning) | data used as supervised target behavior | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | target text hides verifier and source assumptions |
| [📚 Distillation](papers/02_data_lifecycle/09_training_usage_optimization_objectives.md#distillation) | teacher outputs, traces, or policies distilled into a student | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | teacher lineage is hidden |
| [⚖️ Preference optimization](papers/02_data_lifecycle/09_training_usage_optimization_objectives.md#preference-optimization) | pairwise feedback for DPO/IPO/KTO-style objectives | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | pair context does not match downstream use |
| [🎚️ Reward modeling / ORM](papers/02_data_lifecycle/09_training_usage_optimization_objectives.md#reward-modeling-orm) | scalar or pairwise data used to train outcome rewards | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | reward can be overoptimized |
| [🪜 PRM / process supervision](papers/02_data_lifecycle/09_training_usage_optimization_objectives.md#prm-process-supervision) | step-level or trace-level signals used to train process rewards | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | PRM rewards trace style |
| [🏋️ RLVR / verifier RL](papers/02_data_lifecycle/09_training_usage_optimization_objectives.md#rlvr-verifier-rl) | programmatic or verifier rewards used in RL | [PRIME: Process reinforcement through implicit rewards](https://arxiv.org/abs/2502.01456) (2025, arXiv) · [Paper Card Source](paper_cards/library/cards/prime-process-reinforcement-through-implicit-rewards-2025/sources)<br><sub>data: policy rollout with final outcome label, implicit process reward estimates, and polic…; feedback: implicit process rewards derived from outcome labels and updated on policy…</sub> | verifier false positives become policy incentives |
| [🌐 Agent training](papers/02_data_lifecycle/09_training_usage_optimization_objectives.md#agent-training) | environment episodes, tool traces, or terminal rewards for agent policies | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | environment cannot be replayed |
| [🧪 Evaluation / reranking / audit](papers/02_data_lifecycle/09_training_usage_optimization_objectives.md#evaluation-reranking-audit) | data used for scoring, selection, reporting, or failure analysis | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | evaluation data becomes training data |

#### 📈 Scaling / RLVR / TTC

> data scale, RLVR, verifier scaling, pass@k, and inference budget claims · [完整页面](papers/02_data_lifecycle/10_scaling_rlvr_test_time_compute.md)

| 子方向 | 这个方向看什么 | 代表论文直达 | 审计风险 |
|---|---|---|---|
| [📈 Data scaling](papers/02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#data-scaling) | number, diversity, difficulty, and uniqueness of examples | [Beyond Human Data: Scaling Self-Training for Problem-Solving with Language Models](https://arxiv.org/abs/2312.06585) (2024, TMLR 2024) · [Paper Card Source](paper_cards/library/cards/rest-em-self-training-2024/sources)<br><sub>data: Prompt, generated sample, binary feedback result, filtered training example, and iter…; feedback: Binary correctness feedback from answer checks or execution-style evaluator…</sub><br>[DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models](https://arxiv.org/abs/2402.03300) (2024, arXiv) · [Paper Card Source](paper_cards/library/cards/deepseekmath-2024/sources)<br><sub>data: Math prompt, generated solution, final answer, reward signal, and optional self-consi…; feedback: GRPO reward setup and final-answer/math evaluation, with self-consistency a…</sub> | unique examples and repeated rollouts are conflated |
| [🔁 Data reuse and uniqueness](papers/02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#data-reuse-and-uniqueness) | reuse counts, deduplication, repeated prompts, and train/test overlap | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | same source examples are counted as fresh data |
| [⏱️ Test-time compute](papers/02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#test-time-compute) | sampling, search, self-critique, thinking budgets, and inference-time scaling | [Large Language Monkeys: Scaling Inference Compute with Repeated Sampling](https://arxiv.org/abs/2407.21787) (2024, arXiv preprint arXiv:2407.21787) · [Paper Card Source](paper_cards/library/cards/large-language-monkeys-scaling-inference-compute-with-repeated-sampling-2024/sources)<br><sub>data: candidate solution set for each problem, with final answers, code submissions, Lean p…; feedback: automatic unit tests or Lean checker where available; oracle answer checks,…</sub><br>[Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters](https://arxiv.org/abs/2408.03314) (2024, arXiv) · [Paper Card Source](paper_cards/library/cards/scaling-llm-test-time-compute-optimally-2024/sources)<br><sub>data: Prompt, generated candidate traces, verifier scores, selected answer, and compute bud…; feedback: Dense process-based verifier reward models plus answer-level evaluation.</sub><br>[CodeRL: Mastering Code Generation through Pretrained Models and Deep Reinforcement Learning](https://arxiv.org/abs/2207.01780) (2022, NeurIPS 2022) · [Paper Card Source](paper_cards/library/cards/coderl-code-generation-rl-2022/sources)<br><sub>data: Problem, generated program, unit-test feedback, critic score, and final selected code…; feedback: Unit tests and a critic trained to predict functional correctness.</sub><br>[Credit-Budgeted ICPC-Style Coding: When Agents Must Pay for Every Decision](https://arxiv.org/abs/2604.10182) (2026, ICLR 2026) · [Paper Card Source](paper_cards/library/cards/credit-budgeted-icpc-style-coding-2026/sources)<br><sub>data: Coding problem, generated solution, local-test decisions, token/time/test spending, a…; feedback: Programmatic coding judge plus explicit credit economy over tokens, tests,…</sub> | different inference budgets are compared |
| [🎲 pass@k / sampling budget](papers/02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#pass-k-sampling-budget) | pass@k, repeated sampling, best-of-N, and budget-aware evaluation | [Self-Consistency Improves Chain of Thought Reasoning in Language Models](https://arxiv.org/abs/2203.11171) (2023, ICLR 2023) · [Paper Card Source](paper_cards/library/cards/self-consistency-chain-of-thought-2023/sources)<br><sub>data: Prompt, sampled reasoning paths, extracted answers, vote distribution, and selected f…; feedback: Answer agreement and final-answer checking act as an implicit verifier.</sub> | reported gains hide selection or budget changes |
| [🧪 Verifier scaling](papers/02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#verifier-scaling) | how verifier strength, refresh, and coverage scale with training | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | verifier becomes stale or easy to exploit |
| [🏋️ RLVR optimization scaling](papers/02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#rlvr-optimization-scaling) | policy optimization, reward contracts, curriculum, and rollout policy | [Agnostics: Learning to Code in Any Programming Language via Reinforcement with a Universal Learning Environment](https://arxiv.org/abs/2508.04865) (2026, ICLR 2026) · [Paper Card Source](paper_cards/library/cards/agnostics-universal-learning-environment-2026/sources)<br><sub>data: Programming solution plus externally observable I/O behavior.; process: target langua…; feedback: Programmatic execution verifier that judges behavior rather than language-s…</sub><br>[TinyV: Reducing False Negatives in Verification Improves RL for LLM Reasoning](https://arxiv.org/abs/2505.14625) (2025, arXiv) · [Paper Card Source](paper_cards/library/cards/tinyv-2025/sources)<br><sub>data: candidate answer with recovered reward decision; process: original verifier verdict,…; feedback: small LLM verifier augmenting rules</sub> | optimizer/scaffold gains are mistaken for data gains |
| [🔍 Scaling attribution](papers/02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#scaling-attribution) | separating data, verifier, optimizer, model, and inference-budget effects | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | ablation tables do not isolate the source of improvement |

#### 🧰 Benchmarks & Evaluation

> evaluation surfaces and reusable feedback contracts · [完整页面](papers/02_data_lifecycle/11_benchmarks_evaluation_surfaces.md)

| 子方向 | 这个方向看什么 | 代表论文直达 | 审计风险 |
|---|---|---|---|
| [📐 Math benchmarks](papers/02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#math-benchmarks) | math problem sets, answer extraction, verifier compatibility, and difficulty | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | short-answer normalization hides reasoning errors |
| [💻 Code benchmarks](papers/02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#code-benchmarks) | coding tasks, generated tests, hidden tests, repair tasks, and live coding | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | unit tests are brittle, leaked, or too narrow |
| [🧾 Proof benchmarks](papers/02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#proof-benchmarks) | formal proof datasets, proof assistants, theorem statements, and checking | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | proof checker version and imports are not pinned |
| [🌐 Agent benchmarks](papers/02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#agent-benchmarks) | web, tool, OS, app, and SWE environments with terminal predicates | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | benchmark episodes cannot be replayed |
| [⚖️ Rubric/domain benchmarks](papers/02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#rubric-domain-benchmarks) | medical, safety, legal, finance, science, factuality, and expert rubrics | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | rubric or judge expertise is insufficiently disclosed |
| [🧪 Reward-model benchmarks](papers/02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#reward-model-benchmarks) | reward model, LLM-judge, PRM, and rubric evaluation suites | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | benchmark reward preference does not reflect training value |
| [🧯 Live / contamination-resistant benchmarks](papers/02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#live-contamination-resistant-benchmarks) | live, refreshed, hidden, or contamination-aware evaluation | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | static benchmark becomes a training target |

#### 🚀 Frontier Disclosure Ledger

> reading frontier reports as partial data-recipe disclosures · [完整页面](papers/02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md)

| 子方向 | 这个方向看什么 | 代表论文直达 | 审计风险 |
|---|---|---|---|
| [🚀 DeepSeek-R1 family](papers/02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md#deepseek-r1-family) | RLVR, distillation, reasoning traces, and public recipe disclosure | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | report describes outcomes but not enough data partitions |
| [🌙 Kimi reasoning reports](papers/02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md#kimi-reasoning-reports) | long-context reasoning, RL compute, and frontier inference budgets | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | test-time compute is mixed with training-data effects |
| [🐉 Qwen reasoning/math/code reports](papers/02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md#qwen-reasoning-math-code-reports) | math, code, PRM, and open-weight reasoning model families | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | release cards do not separate SFT, RLVR, and evaluation data |
| [🧠 Magistral / Phi / Nemotron style reports](papers/02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md#magistral-phi-nemotron-style-reports) | open-weight reasoning reports with partial data and reward disclosures | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | model-card claims cannot be mapped to concrete data objects |
| [🧪 RLVR recipe reports](papers/02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md#rlvr-recipe-reports) | reports that expose reward contracts, rollout policies, or RL scaffolds | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | RL gains are attributed without verifier coverage |
| [🧬 What is disclosed vs hidden](papers/02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md#what-is-disclosed-vs-hidden) | data sources, filters, lineage, safety mixtures, and undisclosed partitions | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | opaque mixtures are reused as open recipes |

#### 🧯 Audit & Failure Modes

> leakage, contamination, verifier gaming, judge attacks, and reproducibility failures · [完整页面](papers/02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md)

| 子方向 | 这个方向看什么 | 代表论文直达 | 审计风险 |
|---|---|---|---|
| [🧯 Benchmark contamination](papers/02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#benchmark-contamination) | train/test overlap, stale evaluations, and benchmark refresh | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | memorized items are reported as reasoning progress |
| [🔍 Search-time contamination](papers/02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#search-time-contamination) | contamination introduced by search, tools, retrieval, or inference scaffolds | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | test-time tool access leaks answer traces |
| [🧬 Hidden lineage / teacher leakage](papers/02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#hidden-lineage-teacher-leakage) | teacher-model traces, synthetic data inheritance, and hidden trait transfer | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | student behavior inherits undisclosed teacher artifacts |
| [🎮 Reward hacking](papers/02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#reward-hacking) | ways reward models, tests, or judges can be optimized as shortcuts | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | reward rises while real quality falls |
| [🧪 Verifier gaming](papers/02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#verifier-gaming) | models exploiting checkers, answer formats, or judge blind spots | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | verifier-passing examples are semantically wrong |
| [⚖️ LLM-as-judge attacks](papers/02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#llm-as-judge-attacks) | one-token attacks, position bias, verbosity bias, and prompt attacks | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | judge score changes for non-semantic reasons |
| [🧨 Spurious rewards](papers/02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#spurious-rewards) | shortcut rewards, memorization-triggered rewards, and wrong-behavior correlations | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | reward improves while model learns a shortcut |
| [📉 Reproducibility failures](papers/02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#reproducibility-failures) | decoding, evaluation, scaffold, and data reporting failures | Needs verified primary-source additions; see [needs_search](reports/needs_search.md). | reported gains disappear under controlled reruns |

## 🧩 四种浏览视角

后训练推理数据具有多轴属性，但论文库当前将每篇论文固定为一个主 review 标签：03 programmatically verifiable outcome data 或 10 scaling/RLVR/test-time compute。其他 benchmark、SFT trace、PRM、verifier 和 contamination 信息通过四个浏览视角呈现：

| View | Question | Examples | Use it when... |
|---|---|---|---|
| 🔍 By feedback contract | Who decides correctness? | programmatic, environmental, judgment-required, mixed | you need to understand the verifier/reward/judge/environment behind a paper. |
| 📦 By data object | What is serialized? | answer, trace, step label, preference pair, reward, trajectory, rubric | you need to compare what the dataset actually stores. |
| 🛠️ By training use | How does it enter post-training? | SFT, distillation, PRM, RM, RLHF, RLVR, agent training, evaluation | you need to map papers to an engineering pipeline. |
| 🧪 By task domain | Where does it operate? | math, code, proof, tools, SWE, web, medical, safety, legal, finance | you need a domain-specific literature route. |

## 🔎 按研究问题进入

| Research question | Best entry |
|---|---|
| What counts as post-training reasoning data? | [docs/01](docs/01_what_is_post_training_reasoning_data.md) + [Foundations](papers/00_background_foundations/00_foundations_and_primers.md) |
| How do we verify reasoning data? | [Programmatic](papers/01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md) + [Process supervision](papers/01_core_reasoning_data_types/04_process_trace_supervision_data.md) + [Verifiers](docs/06_verifiers_and_rewards.md) |
| How are open reasoning datasets constructed? | [Construction recipes](papers/02_data_lifecycle/08_data_construction_open_release_recipes.md) + [Card library](paper_cards/library/cards/) |
| What data does RLVR actually need? | [Programmatic verification](papers/01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md) + [Scaling/RLVR](papers/02_data_lifecycle/10_scaling_rlvr_test_time_compute.md) |
| How should agent trajectories be serialized? | [Agent data](papers/01_core_reasoning_data_types/06_environment_agent_trajectory_data.md) + [docs/07](docs/07_agent_trajectory_data.md) |
| How do frontier reports disclose or hide data recipes? | [Frontier reports](papers/02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md) |
| How do contamination and verifier gaming affect claims? | [Audit/failure modes](papers/02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md) |
| Which benchmarks are still useful for reasoning data? | [Benchmarks and evaluation](papers/02_data_lifecycle/11_benchmarks_evaluation_surfaces.md) |

## 🎯 你可以在这里学到什么

| 学习目标 | 这个仓库提供什么 |
|---|---|
| 🧠 建立整体认知 | 解释 post-training reasoning data 为什么不只是 prompt-answer，而是 trace、action、feedback、metadata 的组合。 |
| 🧮 理解可验证推理数据 | 学习 math answer checker、code unit tests、proof checker、可执行环境如何产生训练和评测信号。 |
| 🪜 理解过程监督 | 比较 outcome reward、step label、PRM、rollout value、first-error localization。 |
| 🏗️ 理解数据构造 recipe | 跟踪 prompt sourcing、teacher generation、search、filtering、dedup、decontamination、release metadata。 |
| 🌐 理解 Agent 轨迹数据 | 看 tool use、browser、app world、OS task、repository-level SWE episode 需要存储哪些字段。 |
| ⚖️ 理解裁判和 rubric | 学习 rubric evaluation、open evaluator model、reward model、人类偏好数据和 judge attack。 |
| 📈 理解 RLVR 和 scaling | 区分 data scale、verifier quality、optimizer scaffold、inference budget。 |
| 🧯 学会审计失败 | 识别 leakage、contamination、verifier gaming、reward hacking、hidden lineage、benchmark fragility。 |

## 👥 适合谁阅读？

| 读者 | 推荐路径 |
|---|---|
| 刚入门的同学 | 先看 60 秒版本，再看 Starter Pack 和 docs 前两章。 |
| 想进入后训练方向的研究者 | 先用 papers/ 找子方向，再看已复核的 paper-card source，最后打开原论文。 |
| 数据集构造者 | 按 construction stack 检查 prompt、trace、verifier、filter、metadata 是否齐全。 |
| RLVR / verifier 工程师 | 看 verifier audit、process supervision、programmatic benchmark 和 scaling 页面。 |
| Agent 研究者 | 看 agent trajectory 章节和 SWE-bench/ReAct/Toolformer/environment 条目。 |
| 读书会组织者 | 直接把 Starter Pack 和 category pages 当作分周 syllabus。 |

## 🚀 60 秒版本

一个有用的后训练推理数据样本，通常不只是：

`prompt -> answer`

而更像：

`任务/上下文 -> 推理轨迹/动作 -> 答案/产物 -> 验证器/奖励/裁判/环境 -> 元数据`

这个仓库希望帮读者快速回答：

- 🧪 答案到底由什么验证：单元测试、证明器、奖励模型、LLM 裁判、rubric，还是环境？
- 🪜 反馈是挂在最终答案、每一步、rollout、状态动作转移，还是完整 episode 上？
- 🧬 released data 来自哪个 teacher/base model/prompt source/filter/split/license？
- 📈 性能提升来自更多数据、更好 verifier、更多 inference budget，还是报告口径？
- 🧯 verifier 会在哪里失败、泄漏、过拟合、被 reward hack？

## 📌 快速入口

| 我想要... | 入口 |
|---|---|
| 📚 按研究领域找论文 | [papers/README.md](papers/README.md) |
| 🧭 看完整 Research Track Navigator | [按研究领域浏览](#-按研究领域浏览) |
| 📚 看细分方向代表论文 | [详细论文分类目录](#-详细论文分类目录) |
| 🧭 快速理解领域 | [docs/00_start_here.md](docs/00_start_here.md) |
| 📚 找论文地图 | [papers/README.md](papers/README.md) |
| 🧮 看数学/代码/证明数据 | [papers/01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md](papers/01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md) |
| 🪜 看过程监督/PRM | [papers/01_core_reasoning_data_types/04_process_trace_supervision_data.md](papers/01_core_reasoning_data_types/04_process_trace_supervision_data.md) |
| 🌐 看 Agent 环境数据 | [papers/01_core_reasoning_data_types/06_environment_agent_trajectory_data.md](papers/01_core_reasoning_data_types/06_environment_agent_trajectory_data.md) |
| 🔎 看可搜索网页 | [在线网页](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/) |
| 🗂️ 看双语卡片源 | [paper_cards/README.md](paper_cards/README.md) |
| 📊 看链接覆盖率 | [reports/link_coverage.md](reports/link_coverage.md) |
| 🤝 贡献论文或卡片 | [CONTRIBUTING.md](CONTRIBUTING.md) |

## 🛣️ 学习路线

这个仓库应该像一门小型公开课，而不是一个静态目录。你不需要一开始读完所有论文，可以按下面路线逐层进入。

| 阶段 | 学什么 | 主要入口 | 学完应该能做到什么 |
|---:|---|---|---|
| 1 | 基础概念和 mental model | [docs/00](docs/00_start_here.md)、[docs/01](docs/01_what_is_post_training_reasoning_data.md) | 能解释 answer data、trace data、reward data、verifier data、trajectory data 的区别。 |
| 2 | 反馈契约 | [docs/02](docs/02_verifier_anchored_taxonomy.md)、[docs/06](docs/06_verifiers_and_rewards.md) | 能判断一篇工作使用 programmatic、environmental、judgment-required 还是 mixed verification。 |
| 3 | 核心论文 | [Starter Pack](#-starter-pack20-篇必读)、[papers/README.md](papers/README.md)、[paper_cards/README.md](paper_cards/README.md) | 能定位 math/code/process/agent/RLVR/audit 的代表性工作。 |
| 4 | 数据构造 | [docs/05](docs/05_construction_cookbook.md)、[Card 库](paper_cards/library/cards/) | 能描述 prompt sourcing、teacher generation、filtering、verifier pinning、release metadata。 |
| 5 | 专题深入 | [math/code/proof](papers/01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md)、[agents](papers/01_core_reasoning_data_types/06_environment_agent_trajectory_data.md)、[rubrics](papers/01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md)、[scaling](papers/02_data_lifecycle/10_scaling_rlvr_test_time_compute.md) | 能沿一个子领域继续读论文、看双语卡片源、查官方链接。 |
| 6 | 审计与贡献 | [docs/09](docs/09_audit_and_failure_modes.md)、[reports/link_coverage.md](reports/link_coverage.md)、[CONTRIBUTING.md](CONTRIBUTING.md) | 能判断什么已经验证、什么还缺失，并且可以给仓库补高质量条目。 |

## 🧭 Starter Pack：20 篇必读

把这 20 篇当作学习路线，而不是简单引用列表。每篇都对应一个你需要掌握的问题。

| # | Paper / report | Lens | Start with this question | Paper Card Source |
|---:|---|---|---|---|

## 🧮 核心地图

<p align="center">
  <img src="assets/paper_map.svg" width="92%" alt="Core paper map for reasoning data">
</p>

| 方向 | 代表入口 | 重点看什么 |
|---|---|---|
| 🧮 数学/代码/证明 | [Programmatically Verifiable Outcome Data](papers/01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md) | answer checker、unit tests、proof checker、去污染 |
| 🪜 过程监督 | [Process and Trace Supervision Data](papers/01_core_reasoning_data_types/04_process_trace_supervision_data.md) | step labels、PRM、first-error、rollout value |
| 🏗️ 构造 recipe | [Data Construction and Open Release Recipes](papers/02_data_lifecycle/08_data_construction_open_release_recipes.md) | prompt source、teacher trace、filtering、ablation |
| 🌐 Agent 环境 | [Environment and Agent Trajectory Data](papers/01_core_reasoning_data_types/06_environment_agent_trajectory_data.md) | state/action/observation、terminal predicate、replay |
| ⚖️ Rubric/Judge | [Judgment, Rubric, and Domain-Expert Data](papers/01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md) | rubric provenance、judge prompt、校准与攻击 |
| 📈 Scaling/RLVR | [Scaling, RLVR, and Test-Time Compute](papers/02_data_lifecycle/10_scaling_rlvr_test_time_compute.md) | 数据复用、pass@k、inference budget、reward contract |
| 🧯 Failure/Audit | [Audit and Failure Modes](papers/02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md) | leakage、contamination、verifier gaming、judge attack |

## 🧰 构造和审计框架

<p align="center">
  <img src="assets/construction_stack.svg" width="90%" alt="Reasoning dataset construction stack">
</p>

| 层 | 需要记录什么 |
|---|---|
| 📥 Prompt sourcing | source mix、license、split、difficulty、base-model pass rate |
| ✍️ Trace writing | human/teacher/search/self-play trace、采样参数、rollout 数 |
| 🔍 Search substrate | beam/search/MCTS/self-critique/scaffold 细节 |
| 🧪 Verifier layer | checker、judge、environment、rubric、reward model 版本 |
| 🧹 Filtering | pass/fail bands、rejection reasons、ambiguous cases |
| 🏋️ Optimizer/scaffold | SFT、distillation、RLVR、PRM、agent training 的进入方式 |
| 🧬 Release metadata | attribution、lineage、splits、license、known failure modes |

## 🧩 仓库结构

| 路径 | 用途 |
|---|---|
| [docs/](docs/) | 系统学习材料：概念、taxonomy、construction cookbook、verifier、agent trajectory、scaling、failure modes。 |
| [papers/](papers/README.md) | 论文导航地图：按子领域组织 read-first、full list、audit checklist、related paper-card sources。 |
| [paper_cards/](paper_cards/README.md) | 双语 paper-card 源文件和本地 review 工作流。 |
| [paper_cards/library/cards/](paper_cards/library/cards/) | 结构化唯一来源：每个 Card 独立维护元数据、局部 review 记录和双语正文。 |
| [docs/index.html](docs/index.html) | 可搜索网页 atlas：可以按 year、role、contract、training use、curation level 等过滤。 |
| [reports/](reports/) | QA 和覆盖率报告：link coverage、needs search、release notes、质量审查、link check。 |
| [exports/](exports/) | CSV、JSON、BibTeX，方便复用这个 atlas。 |
| [ROADMAP.md](ROADMAP.md) | 高引用路线和后续贡献优先级。 |

## 🧪 实际怎么用？

| 你的问题 | 推荐路径 |
|---|---|
| “我是新手，先读什么？” | [docs/00](docs/00_start_here.md) -> [Starter Pack](#-starter-pack20-篇必读) -> [paper_cards/README.md](paper_cards/README.md) |
| “我想构造一个 reasoning dataset。” | [docs/05](docs/05_construction_cookbook.md) -> 相关双语 paper-card source。 |
| “我想判断一个 benchmark 能不能复用。” | 打开对应 paper-card source，看 verifier、split、contamination、official links。 |
| “我想理解 RLVR。” | 看 [programmatic data](papers/01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md)、verifier/reward 相关条目、scaling/RLVR 页面。 |
| “我想研究 Agent 数据。” | 看 [agent papers](papers/01_core_reasoning_data_types/06_environment_agent_trajectory_data.md), 重点检查 action schema、terminal predicate、replay metadata。 |
| “我想给仓库贡献。” | 从 [needs_search](reports/needs_search.md) 找条目，验证官方链接，再补 metadata 和双语 paper-card source。 |

## 🌱 高引用路线

这个仓库想要变得更容易被收藏、引用和复用，关键不是继续堆最长列表，而是提升**深度、可信度和可复用性**。完整路线见 [ROADMAP.md](ROADMAP.md)。

| 优先级 | 下一步最值得做什么 | 为什么有助于高引用 |
|---:|---|---|
| P0 | 保持公开仓库干净：不能出现私有规划文件、prompt/spec 文件、本地系统文件。 | 读者看到的是维护良好的研究资源，而不是构建工作区。 |
| P1 | 把高影响力 `L1_link_verified` 条目提升到 `L4_carded` 或 `L5_audit_ready`。 | 深度卡片让仓库不只是 paper list。 |
| P1 | 给已 verified 的核心论文补官方 code/data/Hugging Face/project 链接。 | 数据构造者可以直接复用官方资源。 |
| P1 | 优先补薄弱子方向，再加长尾条目。 | 科研读者更容易把它当作平衡的领域地图。 |
| P2 | 继续润色中文版和论文引用元数据。 | 更适合读书会、课程、综述和中文社区传播。 |

## 🧱 Curation Levels

| Level | Meaning |
|---|---|
| `L0_seeded` | Only a title or bibliography seed is known. |
| `L1_link_verified` | Official paper, arXiv, venue, or DOI link is pinned. |
| `L2_artifact_verified` | Code, data, project, or model artifact links are also checked. |
| `L3_summary_ready` | One-line summary and why-it-matters rationale are present. |
| `L4_carded` | A local card explains data object, verifier, use, and audit fields. |
| `L5_audit_ready` | The card includes concrete risks, missing fields, and audit questions. |

## 🔎 可搜索网页

可以直接打开 [在线网页](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/)，也可以本地打开 [docs/index.html](docs/index.html)。它支持按 year、venue、source role、verification contract、granularity、training use、curation level、status、artifact availability 过滤。

## 📖 引用

如果这个 atlas 对你的相关工作、数据构造、验证器设计或 reading group 有帮助，请引用配套论文并链接本仓库。引用信息见 [CITATION.cff](CITATION.cff)。
