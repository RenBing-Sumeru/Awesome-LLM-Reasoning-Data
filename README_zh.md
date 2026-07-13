# 🌟 Awesome LLM Reasoning Data

> 系统学习大模型后训练推理数据的精选仓库：数据是什么、如何构造、如何验证、如何进入训练、如何审计。

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Paper](https://img.shields.io/badge/arXiv-2606.02113-b31b1b)](https://arxiv.org/abs/2606.02113)
[![Site](https://img.shields.io/badge/site-in%20progress-6b7280)](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/)
[![Ask](https://img.shields.io/badge/Ask-launch%20pending-7c3aed)](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/)
[![Entries](https://img.shields.io/badge/entries-280-2563eb)](data/papers.yaml)
[![Verified](https://img.shields.io/badge/verified-165-0f766e)](reports/link_coverage.md)
[![Cards](https://img.shields.io/badge/cards-87-7c3aed)](cards/README.md)
[![L5](https://img.shields.io/badge/L5%20audit--ready-53-ea580c)](reports/five_task_quality_audit.md)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

<p align="center">
  <img src="assets/cover_zh.svg" width="92%" alt="大模型后训练推理数据精选">
</p>

**本仓库是一份领域地图，而不只是论文清单**：学习指南讲清概念，分类页按子方向组织论文，论文卡片概括数据对象与风险，检索网站索引全部结构化元数据。所有内容围绕一个核心问题展开：

> 模型经过后训练后推理能力变强，背后究竟是哪条数据记录、哪种反馈信号、哪个验证器、奖励、环境或评审在起作用？

📄 配套论文：[A Primer in Post-Training Reasoning Data](https://arxiv.org/abs/2606.02113) · 🔎 检索网站：制作中 · 🤖 问答助手：[问答助手（即将上线）](https://renbing-sumeru.github.io/Awesome-LLM-Reasoning-Data/ask/)

## 🚀 如何使用本仓库

一条有用的推理数据样本，通常不是 `提问 -> 答案`，而是：

`任务/上下文 -> 推理轨迹/动作 -> 答案/产物 -> 验证器/奖励/评审/环境 -> 元数据`

按你的目标选择路径：

- 🧭 **初学者**——沿[学习路径](#-学习路径)从第一阶段读起，第一篇是[00 · 从这里开始](docs/00_start_here.md)。
- 🏗️ **要构造数据集**——按[05 · 构造手册](docs/05_construction_cookbook.md)走一遍，再对照[发布卡片](cards/releases/)与[配方卡片](cards/recipes/)。
- 🧪 **要审计验证器或结论**——从[06 · 验证器与奖励](docs/06_verifiers_and_rewards.md)和[09 · 审计与失效模式](docs/09_audit_and_failure_modes.md)入手。
- 🔎 **要查某篇论文**——直接进下方[分类目录](#-分类目录)，或检索 [data/papers.yaml](data/papers.yaml) 与[导出文件](exports/)。
- 🤝 **想参与贡献**——从[待补清单](reports/needs_search.md)挑一条，读[贡献指南](CONTRIBUTING.md)。

## 🔥 最新动态

| 日期 | 更新 |
|---|---|
| 2026-06-15 | 已验证条目达 **165 条**，关联卡片 **87 张**，其中 **53 张**达到可审计级别。 |
| 2026-06-15 | 完成两轮制品核验：固定 **41 个代码**、**27 个数据**、**20 个 Hugging Face**、**25 个项目主页**官方链接。 |
| 2026-06-15 | 检索网站、论文目录、导出文件与质检报告全部由结构化元数据自动生成，所有数字可复现。 |

> 元数据从严处理：未经本地核验的链接一律留在[待补清单](reports/needs_search.md)，不会被提前收录。

<details>
<summary>📊 数据规模</summary>

| 指标 | 数量 |
|---|---:|
| 总条目 | 280 |
| 已验证官方主链接 | 165 |
| 含论文、arXiv、会议或 DOI 链接 | 165 |
| 关联卡片 | 87 |
| 卡片文件 | 89 |
| 可审计条目（L5） | 53 |
| 待补链接或元数据 | 115 |
| 官方代码链接 | 41 |
| 官方数据链接 | 27 |
| Hugging Face 链接 | 20 |
| 项目主页链接 | 25 |

</details>

## 📚 分类目录

每个方向都有独立页面，包含方向说明、优先阅读表、完整论文列表与审计清单。

### 🧭 一、基础与入门 `00`

*先建立共同语言，再进入信息密度更高的一手论文。*

<blockquote>

<details>
<summary><code>00</code> <b><a href="papers/00_background_foundations/00_foundations_and_primers.md">🧭 基础入门与综述</a></b> · 84 篇</summary>

- [🧭 后训练综述](papers/00_background_foundations/00_foundations_and_primers.md#post-training-surveys)
- [🧠 推理大模型综述](papers/00_background_foundations/00_foundations_and_primers.md#reasoning-llm-surveys)
- [📦 数据文档与数据说明书](papers/00_background_foundations/00_foundations_and_primers.md#data-documentation-datasheets)
- [🧪 RLHF 与奖励模型综述](papers/00_background_foundations/00_foundations_and_primers.md#rlhf-reward-model-surveys)
- [🌐 智能体与工具使用综述](papers/00_background_foundations/00_foundations_and_primers.md#agent-data-tool-use-surveys)
- [🧯 数据污染与评测综述](papers/00_background_foundations/00_foundations_and_primers.md#contamination-evaluation-surveys)

</details>

</blockquote>

### 🧬 二、核心数据类型 `01–07`

*逐类比较真实的数据记录：示范、偏好、可验证结果、过程标注、采样轨迹、智能体轨迹与评分标准。*

<blockquote>

<details>
<summary><code>01</code> <b><a href="papers/01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md">🧱 指令、示范与思维链数据</a></b> · 58 篇</summary>

- [🧱 指令微调数据](papers/01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md#instruction-tuning-sft-data)
- [🧑‍🏫 人工示范数据](papers/01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md#human-demonstrations)
- [🤖 合成指令数据](papers/01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md#synthetic-instruction-data)
- [🧠 思维链与解题理由数据](papers/01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md#chain-of-thought-rationale-data)
- [🔁 自我训练（STaR 系）](papers/01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md#self-training-star)
- [✂️ 长短思维链蒸馏](papers/01_core_reasoning_data_types/01_instruction_demonstration_rationale_data.md#long-short-cot-distillation)

</details>

<details>
<summary><code>02</code> <b><a href="papers/01_core_reasoning_data_types/02_preference_reward_feedback_data.md">🤝 偏好与奖励反馈数据</a></b> · 73 篇</summary>

- [🤝 人类偏好数据（RLHF）](papers/01_core_reasoning_data_types/02_preference_reward_feedback_data.md#human-preference-data-rlhf)
- [⚖️ 偏好优化（DPO 系）](papers/01_core_reasoning_data_types/02_preference_reward_feedback_data.md#dpo-preference-optimization)
- [🎚️ 标量奖励与结果奖励数据](papers/01_core_reasoning_data_types/02_preference_reward_feedback_data.md#scalar-reward-orm-data)
- [🤖 AI 反馈与合成偏好（RLAIF）](papers/01_core_reasoning_data_types/02_preference_reward_feedback_data.md#rlaif-synthetic-feedback)
- [🧪 奖励模型基准](papers/01_core_reasoning_data_types/02_preference_reward_feedback_data.md#reward-model-benchmarks)
- [🧾 基于评分标准的奖励](papers/01_core_reasoning_data_types/02_preference_reward_feedback_data.md#rubric-conditioned-rewards)

</details>

<details>
<summary><code>03</code> <b><a href="papers/01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md">🧮 可程序验证的结果数据</a></b> · 94 篇</summary>

- [📐 数学答案可验证数据](papers/01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md#math-answer-verifiable-data)
- [🧮 数学 RLVR 数据集](papers/01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md#math-rlvr-datasets)
- [💻 代码执行与单元测试数据](papers/01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md#code-execution-unit-test-data)
- [🧾 形式化证明与定理证明（Lean）](papers/01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md#formal-proof-lean-theorem-proving)
- [🧪 验证器稳健性与答案抽取](papers/01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md#verifier-robustness-and-answer-extraction)
- [🧰 程序化评测基准](papers/01_core_reasoning_data_types/03_programmatically_verifiable_outcome_data.md#programmatic-benchmarks)

</details>

<details>
<summary><code>04</code> <b><a href="papers/01_core_reasoning_data_types/04_process_trace_supervision_data.md">🪜 过程与步骤监督数据</a></b> · 25 篇</summary>

- [🪜 人工步骤级标注](papers/01_core_reasoning_data_types/04_process_trace_supervision_data.md#human-step-level-labels)
- [🧪 过程奖励模型（PRM）](papers/01_core_reasoning_data_types/04_process_trace_supervision_data.md#process-reward-models)
- [🔁 采样价值监督](papers/01_core_reasoning_data_types/04_process_trace_supervision_data.md#rollout-value-supervision)
- [🛠️ 自动过程监督](papers/01_core_reasoning_data_types/04_process_trace_supervision_data.md#automatic-process-supervision)
- [❌ 首个错误定位](papers/01_core_reasoning_data_types/04_process_trace_supervision_data.md#first-error-localization)
- [📊 过程奖励模型评测](papers/01_core_reasoning_data_types/04_process_trace_supervision_data.md#prm-benchmarks-and-evaluation)

</details>

<details>
<summary><code>05</code> <b><a href="papers/01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md">🔁 采样、搜索与推理时轨迹数据</a></b> · 39 篇</summary>

- [🎲 多次采样与 best-of-N](papers/01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md#multiple-rollouts-best-of-n)
- [🌳 搜索树与蒙特卡洛树搜索](papers/01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md#search-trees-mcts)
- [🔎 拒绝采样轨迹](papers/01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md#rejection-sampling-traces)
- [🧠 自洽性与重复采样](papers/01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md#self-consistency-repeated-sampling)
- [⏱️ 推理时计算记录](papers/01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md#test-time-compute-logs)
- [✂️ 长变短与搜索蒸馏](papers/01_core_reasoning_data_types/05_rollout_search_test_time_trace_data.md#long2short-distill-from-search)

</details>

<details>
<summary><code>06</code> <b><a href="papers/01_core_reasoning_data_types/06_environment_agent_trajectory_data.md">🌐 环境与智能体轨迹数据</a></b> · 95 篇</summary>

- [🛠️ 工具使用数据](papers/01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#tool-use-data)
- [🌍 网页浏览智能体](papers/01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#web-browser-agents)
- [📱 移动应用智能体](papers/01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#app-mobile-agents)
- [🖥️ 操作系统与桌面智能体](papers/01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#os-desktop-agents)
- [🧑‍💻 软件工程与代码仓库智能体](papers/01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#swe-repository-agents)
- [🔁 可回放轨迹数据](papers/01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#replayable-trajectory-data)
- [🧰 智能体基准与终止判定](papers/01_core_reasoning_data_types/06_environment_agent_trajectory_data.md#agent-benchmarks-and-terminal-predicates)

</details>

<details>
<summary><code>07</code> <b><a href="papers/01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md">⚖️ 评审、评分标准与领域专家数据</a></b> · 83 篇</summary>

- [⚖️ 大模型评审数据](papers/01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#llm-as-judge-data)
- [🧑‍⚖️ 人类与专家评审](papers/01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#human-expert-judgment)
- [🩺 医疗推理与健康评分标准](papers/01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#medical-reasoning-health-rubrics)
- [🛡️ 安全推理数据](papers/01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#safety-reasoning-data)
- [🧾 事实性与依据核查](papers/01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#factuality-grounding)
- [⚖️ 法律推理](papers/01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#legal-reasoning)
- [🏦 金融推理](papers/01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#financial-reasoning)
- [🧪 评分标准奖励模型](papers/01_core_reasoning_data_types/07_judgment_rubric_domain_expert_data.md#rubric-reward-models)

</details>

</blockquote>

### 🛠️ 三、数据生命周期 `08–13`

*沿构造、训练、规模化、评测、前沿披露与失效审计的完整链条阅读。*

<blockquote>

<details>
<summary><code>08</code> <b><a href="papers/02_data_lifecycle/08_data_construction_open_release_recipes.md">🏗️ 数据构造与开源发布</a></b> · 108 篇</summary>

- [🧱 题目与提示来源](papers/02_data_lifecycle/08_data_construction_open_release_recipes.md#prompt-sourcing)
- [✍️ 教师模型轨迹生成](papers/02_data_lifecycle/08_data_construction_open_release_recipes.md#teacher-trace-generation)
- [🔎 拒绝采样与搜索生成数据](papers/02_data_lifecycle/08_data_construction_open_release_recipes.md#rejection-sampling-search-generated-data)
- [🔁 自博弈与自我提升](papers/02_data_lifecycle/08_data_construction_open_release_recipes.md#self-play-self-improvement)
- [🧪 数据过滤与验证器更新](papers/02_data_lifecycle/08_data_construction_open_release_recipes.md#filtering-and-verifier-refresh)
- [🏗️ 开源推理数据发布](papers/02_data_lifecycle/08_data_construction_open_release_recipes.md#open-reasoning-data-releases)
- [🧬 数据谱系与发布元数据](papers/02_data_lifecycle/08_data_construction_open_release_recipes.md#data-lineage-and-release-metadata)

</details>

<details>
<summary><code>09</code> <b><a href="papers/02_data_lifecycle/09_training_usage_optimization_objectives.md">🎯 训练用途与优化目标</a></b> · 97 篇</summary>

- [🧱 监督微调（SFT）](papers/02_data_lifecycle/09_training_usage_optimization_objectives.md#sft-instruction-tuning)
- [📚 蒸馏](papers/02_data_lifecycle/09_training_usage_optimization_objectives.md#distillation)
- [⚖️ 偏好优化](papers/02_data_lifecycle/09_training_usage_optimization_objectives.md#preference-optimization)
- [🎚️ 奖励建模（ORM）](papers/02_data_lifecycle/09_training_usage_optimization_objectives.md#reward-modeling-orm)
- [🪜 过程监督（PRM）](papers/02_data_lifecycle/09_training_usage_optimization_objectives.md#prm-process-supervision)
- [🏋️ 可验证奖励强化学习（RLVR）](papers/02_data_lifecycle/09_training_usage_optimization_objectives.md#rlvr-verifier-rl)
- [🌐 智能体训练](papers/02_data_lifecycle/09_training_usage_optimization_objectives.md#agent-training)
- [🧪 评测、重排与审计](papers/02_data_lifecycle/09_training_usage_optimization_objectives.md#evaluation-reranking-audit)

</details>

<details>
<summary><code>10</code> <b><a href="papers/02_data_lifecycle/10_scaling_rlvr_test_time_compute.md">📈 规模化、RLVR 与推理时计算</a></b> · 90 篇</summary>

- [📈 数据规模化](papers/02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#data-scaling)
- [🔁 数据复用与去重](papers/02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#data-reuse-and-uniqueness)
- [⏱️ 推理时计算](papers/02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#test-time-compute)
- [🎲 pass@k 与采样预算](papers/02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#pass-k-sampling-budget)
- [🧪 验证器规模化](papers/02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#verifier-scaling)
- [🏋️ RLVR 优化规模化](papers/02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#rlvr-optimization-scaling)
- [🔍 规模化收益归因](papers/02_data_lifecycle/10_scaling_rlvr_test_time_compute.md#scaling-attribution)

</details>

<details>
<summary><code>11</code> <b><a href="papers/02_data_lifecycle/11_benchmarks_evaluation_surfaces.md">🧰 基准与评测</a></b> · 109 篇</summary>

- [📐 数学基准](papers/02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#math-benchmarks)
- [💻 代码基准](papers/02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#code-benchmarks)
- [🧾 证明基准](papers/02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#proof-benchmarks)
- [🌐 智能体基准](papers/02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#agent-benchmarks)
- [⚖️ 评分标准与领域基准](papers/02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#rubric-domain-benchmarks)
- [🧪 奖励模型基准](papers/02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#reward-model-benchmarks)
- [🧯 动态与抗污染基准](papers/02_data_lifecycle/11_benchmarks_evaluation_surfaces.md#live-contamination-resistant-benchmarks)

</details>

<details>
<summary><code>12</code> <b><a href="papers/02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md">🚀 前沿模型报告与数据披露</a></b> · 40 篇</summary>

- [🚀 DeepSeek-R1 系列](papers/02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md#deepseek-r1-family)
- [🌙 Kimi 推理报告](papers/02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md#kimi-reasoning-reports)
- [🐉 Qwen 推理、数学与代码报告](papers/02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md#qwen-reasoning-math-code-reports)
- [🧠 Magistral、Phi、Nemotron 类报告](papers/02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md#magistral-phi-nemotron-style-reports)
- [🧪 RLVR 配方报告](papers/02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md#rlvr-recipe-reports)
- [🧬 披露了什么、隐藏了什么](papers/02_data_lifecycle/12_frontier_reports_data_disclosure_ledger.md#what-is-disclosed-vs-hidden)

</details>

<details>
<summary><code>13</code> <b><a href="papers/02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md">🧯 审计、污染与失效模式</a></b> · 68 篇</summary>

- [🧯 基准污染](papers/02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#benchmark-contamination)
- [🔍 搜索阶段污染](papers/02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#search-time-contamination)
- [🧬 隐藏谱系与教师泄漏](papers/02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#hidden-lineage-teacher-leakage)
- [🎮 奖励投机](papers/02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#reward-hacking)
- [🧪 验证器欺骗](papers/02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#verifier-gaming)
- [⚖️ 大模型评审攻击](papers/02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#llm-as-judge-attacks)
- [🧨 虚假奖励](papers/02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#spurious-rewards)
- [📉 可复现性失效](papers/02_data_lifecycle/13_audit_failure_contamination_verifier_attacks.md#reproducibility-failures)

</details>

</blockquote>

## 🧭 学习路径

四个阶段循序渐进。每个阶段先读学习指南搭好框架，各阶段的必读论文正在整理，会陆续补充进来。

**🌱 第一阶段 · 建立心智模型**——这个领域在研究什么，数据按什么逻辑分类

- 🧭 [00 · 从这里开始](docs/00_start_here.md)——领域速览与阅读路线
- 🧠 [01 · 什么是后训练推理数据](docs/01_what_is_post_training_reasoning_data.md)——带验证器的样本这一核心模型
- 🗺️ [02 · 以验证器为锚的分类](docs/02_verifier_anchored_taxonomy.md)——按反馈契约而非领域给论文归类
- 📜 本阶段必读论文：整理中

**🔬 第二阶段 · 认识数据对象**——一条合格的样本长什么样，质量如何衡量

- 📦 [03 · 推理数据对象](docs/03_reasoning_data_objects.md)——每类数据对象需要记录哪些字段
- 🎯 [04 · 数据质量](docs/04_data_quality.md)——准确率之外的质量维度
- 📜 本阶段必读论文：整理中

**⚙️ 第三阶段 · 构造、验证与训练**——数据如何生产、由什么打分、如何进入训练并规模化

- 🏗️ [05 · 构造手册](docs/05_construction_cookbook.md)——题目来源、教师轨迹、过滤与发布元数据
- ⚖️ [06 · 验证器与奖励](docs/06_verifiers_and_rewards.md)——如何审计校验器、评审、评分标准与奖励
- 🌐 [07 · 智能体轨迹数据](docs/07_agent_trajectory_data.md)——工具、网页、系统与软件工程任务的字段要求
- 📈 [08 · 规模化与推理时计算](docs/08_scaling_and_test_time_compute.md)——区分数据、验证器、优化器与预算的贡献
- 📜 本阶段必读论文：整理中

**🛡️ 第四阶段 · 审计与实战**——如何识别泄漏与投机，如何把方法落到工程里

- 🧯 [09 · 审计与失效模式](docs/09_audit_and_failure_modes.md)——泄漏、污染、验证器欺骗与评审攻击
- 🛠️ [10 · 工程实践路线](docs/10_industry_onboarding_path.md)——工程师进入该领域的实用路径
- 📜 本阶段必读论文：整理中

## 🔎 检索网站（制作中）

检索网站正在制作中。上线后将支持关键词检索，并可按年份、会议、来源角色、验证契约、监督粒度、训练用途、整理等级、状态与制品可用性筛选。上线前可先使用上方[分类目录](#-分类目录)与[导出文件](exports/)。

<details>
<summary>🧩 仓库结构</summary>

| 路径 | 用途 |
|---|---|
| [docs/](docs/) | 系统学习材料：核心概念、分类方法、构造手册、验证器、智能体轨迹、规模化与失效模式。 |
| [papers/](papers/README.md) | 论文导航：每个方向一页，含优先阅读表、完整列表与审计清单。 |
| [cards/](cards/README.md) | 论文卡片：概括数据对象、验证器、构造配方、风险与官方链接。 |
| [data/papers.yaml](data/papers.yaml) | 结构化数据源：元数据、角色、契约、摘要、链接与整理等级。 |
| [docs/index.html](docs/index.html) | 检索网站（制作中）：由结构化数据自动生成。 |
| [reports/](reports/) | 质检与覆盖率报告：链接覆盖、待补清单、发布说明与质量审查。 |
| [exports/](exports/) | CSV、JSON 与 BibTeX 导出，方便复用本仓库数据。 |
| [scripts/](scripts/) | 可复现的生成与校验脚本。 |
| [ROADMAP.md](ROADMAP.md) | 公开路线图与贡献优先级。 |

</details>

## 🤝 参与贡献

请不要只提交论文标题。一次有价值的贡献应包含官方链接、来源角色、验证契约、监督粒度、训练用途和一句话摘要，有条件时再补卡片与审计字段。入口见[贡献指南](CONTRIBUTING.md)；待补条目见[待补清单](reports/needs_search.md)与[路线图](ROADMAP.md)。

<details>
<summary>🧱 整理等级</summary>

| 等级 | 含义 |
|---|---|
| `L0_seeded` | 只有题目或书目线索。 |
| `L1_link_verified` | 已核实论文、arXiv、会议或 DOI 官方链接。 |
| `L2_artifact_verified` | 代码、数据、项目或模型等制品链接也已核实。 |
| `L3_summary_ready` | 已有一句话摘要与价值说明。 |
| `L4_carded` | 已有本地卡片，解释数据对象、验证器、用途与审计要点。 |
| `L5_audit_ready` | 卡片包含具体风险、缺失字段与审计问题。 |

</details>

## 📜 引用

如果本仓库对你的研究、数据构造、验证器设计或读书会有帮助，请引用配套论文并链接本仓库，格式见 [CITATION.cff](CITATION.cff)。

## 📄 许可

MIT，见 [LICENSE](LICENSE)。
