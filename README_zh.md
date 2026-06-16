# 🌟 Awesome LLM Reasoning Data

> 一个系统学习“大模型后训练推理数据”的开源仓库：从概念、论文、数据构造、验证器、奖励信号、Agent 轨迹、RLVR、benchmark 到审计风险。

[论文：A Primer in Post-Training Reasoning Data](https://arxiv.org/abs/2606.02113)

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
| 想进入后训练方向的研究者 | 先用 papers/ 找子方向，再看 L5 cards，最后打开原论文。 |
| 数据集构造者 | 按 construction stack 检查 prompt、trace、verifier、filter、metadata 是否齐全。 |
| RLVR / verifier 工程师 | 看 verifier audit、process supervision、programmatic benchmark 和 scaling 页面。 |
| Agent 研究者 | 看 agent trajectory 章节和 SWE-bench/ReAct/Toolformer/environment cards。 |
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
| 🧭 快速理解领域 | [docs/00_start_here.md](docs/00_start_here.md) |
| 📚 找论文地图 | [papers/README.md](papers/README.md) |
| 🧮 看数学/代码/证明数据 | [papers/02_programmatic_math_code_proof.md](papers/02_programmatic_math_code_proof.md) |
| 🪜 看过程监督/PRM | [papers/03_process_supervision_prm.md](papers/03_process_supervision_prm.md) |
| 🌐 看 Agent 环境数据 | [papers/04_environmental_agents_tools_web_swe.md](papers/04_environmental_agents_tools_web_swe.md) |
| 🔎 看可搜索网页 | [docs/index.html](docs/index.html) |
| 🗂️ 看卡片库 | [cards/README.md](cards/README.md) |
| 📊 看链接覆盖率 | [reports/link_coverage.md](reports/link_coverage.md) |
| 🤝 贡献论文或卡片 | [CONTRIBUTING.md](CONTRIBUTING.md) |

## 🛣️ 学习路线

这个仓库应该像一门小型公开课，而不是一个静态目录。你不需要一开始读完所有论文，可以按下面路线逐层进入。

| 阶段 | 学什么 | 主要入口 | 学完应该能做到什么 |
|---:|---|---|---|
| 1 | 基础概念和 mental model | [docs/00](docs/00_start_here.md)、[docs/01](docs/01_what_is_post_training_reasoning_data.md) | 能解释 answer data、trace data、reward data、verifier data、trajectory data 的区别。 |
| 2 | 反馈契约 | [docs/02](docs/02_verifier_anchored_taxonomy.md)、[docs/06](docs/06_verifiers_and_rewards.md) | 能判断一篇工作使用 programmatic、environmental、judgment-required 还是 mixed verification。 |
| 3 | 核心论文 | [Starter Pack](#-starter-pack20-篇必读)、[papers/README.md](papers/README.md)、[cards/README.md](cards/README.md) | 能定位 math/code/process/agent/RLVR/audit 的代表性工作。 |
| 4 | 数据构造 | [docs/05](docs/05_construction_cookbook.md)、[cards/releases/](cards/releases/)、[cards/recipes/](cards/recipes/) | 能描述 prompt sourcing、teacher generation、filtering、verifier pinning、release metadata。 |
| 5 | 专题深入 | [math/code/proof](papers/02_programmatic_math_code_proof.md)、[agents](papers/04_environmental_agents_tools_web_swe.md)、[rubrics](papers/05_judgment_required_rubrics_safety_domain.md)、[scaling](papers/08_scaling_test_time_compute_rlvr.md) | 能沿一个子领域继续读论文、看卡片、查官方链接。 |
| 6 | 审计与贡献 | [docs/09](docs/09_audit_and_failure_modes.md)、[reports/link_coverage.md](reports/link_coverage.md)、[CONTRIBUTING.md](CONTRIBUTING.md) | 能判断什么已经验证、什么还缺失，并且可以给仓库补高质量条目。 |

## 🔥 最新状态

| 指标 | 数量 |
|---|---:|
| 总条目 | 271 |
| 已验证官方主链接 | 148 |
| 有 paper/arXiv/venue/DOI 链接 | 148 |
| entry-linked 卡片 | 87 |
| L5 audit-ready | 53 |
| 仍需搜索 | 123 |
| 官方 code 链接 | 35 |
| 官方 data 链接 | 24 |
| Hugging Face 链接 | 18 |
| project 链接 | 20 |

## 🧭 Starter Pack：20 篇必读

把这 20 篇当作学习路线，而不是简单引用列表。每篇都对应一个你需要掌握的问题。

| # | Paper / report | Lens | Start with this question | Card |
|---:|---|---|---|---|
| 1 | [Datasheets for datasets](https://arxiv.org/abs/1803.09010) | 📋 release docs | What must be disclosed before anyone reuses a dataset? | [Card](cards/releases/datasheets-for-datasets.md) |
| 2 | [Data statements for natural language processing](https://aclanthology.org/Q18-1041/) | 🧬 provenance | Which population, language, and annotation assumptions travel with the data? | [Card](cards/releases/data-statements-for-natural-language-processing.md) |
| 3 | [Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155) | 🧑‍🏫 RLHF pipeline | How do demonstrations, preferences, rewards, and policy optimization separate? | [Card](cards/recipes/training-language-models-to-follow-instructions-with-human-feedback.md) |
| 4 | [Chain-of-thought prompting elicits reasoning in large language models](https://arxiv.org/abs/2201.11903) | 🧠 traces | When does a rationale become a reusable training object? | [Card](cards/releases/chain-of-thought-prompting-elicits-reasoning-in-large-language-models.md) |
| 5 | [Training verifiers to solve math word problems](https://arxiv.org/abs/2110.14168) | 🧪 verifier | What exactly scores a generated solution? | [Card](cards/verifiers/training-verifiers-to-solve-math-word-problems.md) |
| 6 | [STaR: Bootstrapping reasoning with reasoning](https://arxiv.org/abs/2203.14465) | 🔁 self-improvement | Which generated traces survive answer-based filtering? | [Card](cards/recipes/star-bootstrapping-reasoning-with-reasoning.md) |
| 7 | [Self-Instruct: Aligning language models with self-generated instructions](https://arxiv.org/abs/2212.10560) | 🏗️ synthetic data | How do generated instructions get filtered before training? | [Card](cards/recipes/self-instruct-aligning-language-models-with-self-generated-instructions.md) |
| 8 | [Direct preference optimization: Your language model is secretly a reward model](https://arxiv.org/abs/2305.18290) | ⚖️ preference data | What changes when preference pairs directly train the policy? | [Card](cards/releases/direct-preference-optimization-your-language-model-is-secretly-a-reward-model.md) |
| 9 | [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) | 🪜 process supervision | What does step-level feedback buy over outcome-only labels? | [Card](cards/verifiers/prm800k.md) |
| 10 | [GSM8K: Grade School Math 8K](https://arxiv.org/abs/2110.14168) | 🧮 answer checks | Why is a small verifiable math set still a useful sanity check? | [Card](cards/benchmarks/gsm8k-grade-school-math-8k.md) |
| 11 | [Measuring mathematical problem solving with the MATH dataset](https://arxiv.org/abs/2103.03874) | 🧮 hard math | How do harder problems change trace and verifier requirements? | [Card](cards/benchmarks/measuring-mathematical-problem-solving-with-the-math-dataset.md) |
| 12 | [HumanEval: Hand-Written Evaluation Set](https://arxiv.org/abs/2107.03374) | 💻 unit tests | What makes executable tests a feedback contract? | [Card](cards/benchmarks/humaneval-hand-written-evaluation-set.md) |
| 13 | [SWE-bench: Can language models resolve real-world GitHub issues?](https://arxiv.org/abs/2310.06770) | 🌐 agent environment | What fields make repository repair a replayable episode? | [Card](cards/agents/swe-bench-can-language-models-resolve-real-world-github-issues.md) |
| 14 | [RewardBench: Evaluating Reward Models for Language Modeling](https://arxiv.org/abs/2403.13787) | 🏅 reward eval | When does a reward model fail outside generic chat helpfulness? | [Card](cards/verifiers/rewardbench.md) |
| 15 | [HealthBench](https://arxiv.org/abs/2505.08775) | ⚕️ rubrics | How do high-stakes rubrics become auditable? | [Card](cards/verifiers/healthbench.md) |
| 16 | [LiveBench: A challenging, contamination-free benchmark for large language models](https://arxiv.org/abs/2406.19314) | 🧯 contamination | How can benchmarks stay fresh against memorization? | [Card](cards/failures/livebench-a-challenging-contamination-free-benchmark-for-large-language-models.md) |
| 17 | [OpenThoughts: Data recipes for reasoning models](https://arxiv.org/abs/2506.04178) | 🏗️ open recipe | Which prompt, trace, filtering, and ablation fields are disclosed? | [Card](cards/releases/openthoughts.md) |
| 18 | [DeepSeek-R1](https://arxiv.org/abs/2501.12948) | 🚀 RLVR report | What can and cannot be inferred from a public frontier report? | [Card](cards/recipes/deepseek_r1.md) |
| 19 | [s1: Simple Test-Time Scaling](https://arxiv.org/abs/2501.19393) | ⏱️ test-time compute | When is inference budget part of the data story? | [Card](cards/releases/s1.md) |
| 20 | [A Sober Look at Progress in Language Model Reasoning: Pitfalls and Paths to Reproducibility](https://arxiv.org/abs/2504.07086) | 🔍 reproducibility | Which reported gains survive decoding and evaluation audits? | [Card](cards/releases/a-sober-look-at-progress-in-language-model-reasoning-pitfalls-and-paths-to-reproducibility.md) |

## 🧮 核心地图

<p align="center">
  <img src="assets/paper_map.svg" width="92%" alt="Core paper map for reasoning data">
</p>

| 方向 | 代表入口 | 重点看什么 |
|---|---|---|
| 🧮 数学/代码/证明 | [Programmatic Math, Code, and Proof](papers/02_programmatic_math_code_proof.md) | answer checker、unit tests、proof checker、去污染 |
| 🪜 过程监督 | [Process Supervision and PRM](papers/03_process_supervision_prm.md) | step labels、PRM、first-error、rollout value |
| 🏗️ 构造 recipe | [Construction Recipes](papers/06_construction_recipes_open_reasoning_data.md) | prompt source、teacher trace、filtering、ablation |
| 🌐 Agent 环境 | [Agents, Tools, Web, SWE](papers/04_environmental_agents_tools_web_swe.md) | state/action/observation、terminal predicate、replay |
| ⚖️ Rubric/Judge | [Judgment-Required Data](papers/05_judgment_required_rubrics_safety_domain.md) | rubric provenance、judge prompt、校准与攻击 |
| 📈 Scaling/RLVR | [Scaling and Test-Time Compute](papers/08_scaling_test_time_compute_rlvr.md) | 数据复用、pass@k、inference budget、reward contract |
| 🧯 Failure/Audit | [Audit and Failure Modes](papers/09_audit_failure_contamination_verifier_attacks.md) | leakage、contamination、verifier gaming、judge attack |

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
| [papers/](papers/README.md) | 论文导航地图：按子领域组织 read-first、full list、audit checklist、related cards。 |
| [cards/](cards/README.md) | 学习卡片：解释论文/数据/验证器/recipe/benchmark/failure 的核心观点、数据对象、风险和链接。 |
| [data/papers.yaml](data/papers.yaml) | 结构化数据源：记录 metadata、role、contract、summary、link、curation level。 |
| [docs/index.html](docs/index.html) | 可搜索网页 atlas：可以按 year、role、contract、training use、curation level 等过滤。 |
| [reports/](reports/) | QA 和覆盖率报告：link coverage、needs search、release notes、质量审查、link check。 |
| [exports/](exports/) | CSV、JSON、BibTeX，方便复用这个 atlas。 |

## 🧪 实际怎么用？

| 你的问题 | 推荐路径 |
|---|---|
| “我是新手，先读什么？” | [docs/00](docs/00_start_here.md) -> [Starter Pack](#-starter-pack20-篇必读) -> [cards/README.md](cards/README.md) |
| “我想构造一个 reasoning dataset。” | [docs/05](docs/05_construction_cookbook.md) -> [release cards](cards/releases/) -> [recipe cards](cards/recipes/) |
| “我想判断一个 benchmark 能不能复用。” | 打开对应 benchmark card，看 verifier、split、contamination、official links。 |
| “我想理解 RLVR。” | 看 [programmatic data](papers/02_programmatic_math_code_proof.md)、verifier cards、scaling/RLVR 页面。 |
| “我想研究 Agent 数据。” | 看 [agent papers](papers/04_environmental_agents_tools_web_swe.md)，重点检查 action schema、terminal predicate、replay metadata。 |
| “我想给仓库贡献。” | 从 [needs_search](reports/needs_search.md) 找条目，验证官方链接，再补 metadata 和 card。 |

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

本地或 GitHub Pages 可直接打开 [docs/index.html](docs/index.html)。它支持按 year、venue、source role、verification contract、granularity、training use、curation level、status、artifact availability 过滤。

## 📖 引用

如果这个 atlas 对你的相关工作、数据构造、验证器设计或 reading group 有帮助，请引用配套论文并链接本仓库。引用信息见 [CITATION.cff](CITATION.cff)。
