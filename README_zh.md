# 🌟 Awesome LLM Reasoning Data

> 一个面向学习和实践的 LLM 后训练推理数据地图：覆盖数据对象、验证器、奖励信号、构建配方和审计字段。

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![本地站点](https://img.shields.io/badge/site-local%20atlas-0f766e)](docs/index.html)
[![条目数](https://img.shields.io/badge/entries-269-7c3aed)](data/papers.yaml)
[![欢迎 PR](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

<p align="center">
  <img src="assets/overview.svg" width="92%" alt="Awesome LLM Reasoning Data overview">
</p>

这个仓库不是普通论文列表，而是一个 **learning-first atlas**：帮助读者理解 reasoning model 后训练中真正进入训练、奖励、筛选、评测和审计的数据对象。

核心观点：

`prompt -> answer` 通常不够。

一个有用的后训练推理样本更像：

`task/context -> trace/actions -> answer/artifact -> verifier/reward/judge/environment -> attribution metadata`

也就是说，我们关心的不只是「题目和答案」，还关心：谁生成了 trace，什么东西验证了答案，反馈贴在了哪一个粒度，数据如何筛选，是否泄漏，能否复现，能否被其他团队审计。

---

## 🚀 60 秒版本

后训练推理数据是预训练之后用于教授、强化或审计推理行为的数据。
它可以进入 SFT、distillation、preference learning、reward modeling、process supervision、RLVR、agent training、evaluation 或 audit。

这个仓库帮你回答：

- 🧪 这个样本由什么验证：单元测试、答案检查器、证明器、PRM、reward model、LLM judge、rubric，还是环境成功条件？
- 🪜 反馈贴在哪里：最终答案、每一步、rollout set、state-action transition，还是完整 episode？
- 🧬 数据来自哪里：人工、teacher model、search、自博弈、环境交互，还是混合来源？
- 📈 报告里的提升到底来自更多数据、更好 verifier、更大推理预算，还是筛选策略？
- 🧯 可能有什么风险：泄漏、污染、reward hacking、judge attack、license 不清、lineage 不明？

---

## 📌 导航

| 章节 | 你会学到什么 | 链接 |
|---|---|---|
| 🧭 Start Here | 从零理解仓库地图和阅读路径 | [docs/00](docs/00_start_here.md) |
| 🧠 核心模型 | verifier-bearing sample 是什么 | [60 秒版本](#-60-秒版本) |
| 🔥 最新更新 | 当前 redesign 和数据快照 | [跳转](#-最新更新) |
| 🧭 Starter Pack | 优先阅读的 20 篇论文/报告 | [跳转](#-starter-pack20-篇优先阅读) |
| 🧮 Paper Map | 核心论文簇和审计问题 | [跳转](#-core-paper-map) |
| 🗺️ Taxonomy | programmatic/environmental/judgment-required | [跳转](#-taxonomy) |
| 🧰 构建数据 | reasoning dataset construction stack | [docs/05](docs/05_construction_cookbook.md) |
| 🧪 审计 verifier | 奖励、检查器、rubric、judge 的审计方法 | [docs/06](docs/06_verifiers_and_rewards.md) |
| 🌐 Agent 数据 | tool/web/OS/SWE episode 的字段 | [docs/07](docs/07_agent_trajectory_data.md) |
| 📈 Scaling | RLVR、pass@k、test-time compute | [docs/08](docs/08_scaling_and_test_time_compute.md) |
| 🧯 Failure | 泄漏、污染、judge attack、reward hacking | [docs/09](docs/09_audit_and_failure_modes.md) |
| 🎓 产业路径 | 6 周 onboarding plan | [docs/10](docs/10_industry_onboarding_path.md) |
| 📚 完整数据 | 结构化条目和本地站点 | [data](data/papers.yaml) · [site](docs/index.html) |

---

## 🔥 最新更新

| 日期 | 更新 | 意义 |
|---|---|---|
| 2026-06-01 | README 和视觉入口按 v2 spec 进行 Phase A redesign。 | 让仓库首页从短索引变成可学习的 atlas。 |
| 2026-06-01 | 新增 [`reports/reference_repo_redesign_study.md`](reports/reference_repo_redesign_study.md)。 | 记录参考 Awesome list / course repo 的风格取舍。 |
| 2026-06-01 | 当前快照：**269 entries**, **0 verified**, **114 partial**, **155 needs metadata/search**, **42 filled cards**。 | 在可用和谨慎之间保持平衡。 |

---

## 🧭 Starter Pack：20 篇优先阅读

| # | 论文 / 报告 | 视角 |
|---:|---|---|
| 1 | 🪜 [Let's Verify Step by Step](https://arxiv.org/abs/2305.20050) | process supervision |
| 2 | 🪜 [Math-Shepherd](https://arxiv.org/abs/2312.08935) | process reward |
| 3 | 🏗️ [OpenThoughts](https://arxiv.org/abs/2506.04178) | open recipe |
| 4 | 📦 [OpenMathReasoning](https://arxiv.org/abs/2504.16891) | math traces |
| 5 | 📦 [DeepMath-103K](https://arxiv.org/abs/2504.11456) | verifiable math |
| 6 | 📦 [Big-Math-RL-Verified](https://arxiv.org/abs/2502.17387) | RLVR math |
| 7 | 🏗️ [LIMO](https://arxiv.org/abs/2502.03387) | small curated data |
| 8 | 🏗️ [DAPO](https://arxiv.org/abs/2503.14476) | RL recipe |
| 9 | 🚀 [DeepSeek-R1](https://arxiv.org/abs/2501.12948) | frontier RLVR |
| 10 | 🚀 [Kimi K1.5](https://arxiv.org/abs/2501.12599) | long-context RL |
| 11 | 🚀 [Qwen3](https://arxiv.org/abs/2505.09388) | model report |
| 12 | 🚀 [Magistral](https://arxiv.org/abs/2506.10910) | reward stack |
| 13 | 🚀 [Llama-Nemotron](https://arxiv.org/abs/2505.00949) | mixed post-training |
| 14 | ⏱️ [s1](https://arxiv.org/abs/2501.19393) | test-time scaling |
| 15 | 📈 [The Art of Scaling RL Compute](https://arxiv.org/abs/2510.13786) | scaling attribution |
| 16 | 🌐 [SWE-Gym](https://arxiv.org/abs/2412.21139) | agent environments |
| 17 | ⚖️ [HealthBench](https://arxiv.org/abs/2505.08775) | rubric data |
| 18 | 🧯 [Leaky Thoughts](https://arxiv.org/abs/2506.15674) | trace privacy |
| 19 | 🧯 [One Token to Fool LLM-as-a-Judge](https://arxiv.org/abs/2507.08794) | judge attack |
| 20 | 🧯 [Spurious Rewards](https://arxiv.org/abs/2506.10947) | reward hacking |

---

## 🧮 Core Paper Map

<p align="center">
  <img src="assets/paper_map.svg" width="92%" alt="Core paper map for reasoning data">
</p>

| 类别 | 代表条目 | 审计重点 |
|---|---|---|
| 🧮 Programmatic | OpenMathReasoning, DeepMath-103K, Big-Math, OpenCodeReasoning-II | answer checker、unit test、proof checker、pass-rate band |
| 🪜 Process Supervision | Let's Verify Step by Step, Math-Shepherd, Qwen2.5-Math-PRM | step label、rollout value、PRM calibration |
| 🏗️ Construction Recipe | OpenThoughts, DAPO, LIMO, s1 | prompt source、teacher trace、filtering、optimizer/scaffold |
| 🚀 Frontier Report | DeepSeek-R1, Kimi K1.5, Qwen3, Magistral | data partition、reward contract、RLVR setup、distillation path |
| 🌐 Agent Data | SWE-Gym, WebArena, OSWorld, OpenHands | state/action/observation、terminal predicate、replayability |
| ⚖️ Judgment Required | HealthBench, RewardBench, Safety Through Reasoning, OnlineRubrics | rubric provenance、judge prompt、domain expertise |
| 📈 Scaling | RL compute scaling, s1, RL post-training scaling | unique data、reuse、pass@k、inference budget |
| 🧯 Audit / Failure | Leaky Thoughts, One Token, Spurious Rewards, Search-Time Contamination | leakage、contamination、judge attack、hidden trait transfer |

---

## 🗺️ Taxonomy

<p align="center">
  <img src="assets/taxonomy.svg" width="86%" alt="Verifier-anchored taxonomy">
</p>

这个仓库优先按 **verification contract** 组织，而不是只按领域组织：

- 🧮 **Programmatic**：数学答案检查、代码执行、单元测试、证明检查器。
- 🌐 **Environmental**：tool/web/app/OS/SWE 环境，依靠状态、动作和终止条件验证。
- ⚖️ **Judgment-required**：医学、安全、事实性、rubric、LLM-as-judge、人类专家判断。
- 📈 **Scaling / TTC**：RLVR、数据复用、pass@k、test-time compute、搜索拓扑。
- 🧯 **Audit / Failure**：泄漏、污染、verifier gaming、reward hacking、judge attack。

---

## 🧰 构建和审计速查

构建 reasoning dataset 时，请至少记录：

- 📥 prompt 来源、license、split、难度、base model pass rate；
- ✍️ trace 来源：人工、teacher、search、自博弈、环境交互；
- 🧪 verifier/reward/judge/environment 的版本、输入、输出和失败模式；
- 🧹 filtering 规则、拒绝原因、ambiguous set；
- 🧬 teacher/base model/scaffold/optimizer/预算/lineage；
- 🧯 contamination、leakage、reward hacking、license risk。

更完整的说明见：

- [`docs/05_construction_cookbook.md`](docs/05_construction_cookbook.md)
- [`docs/06_verifiers_and_rewards.md`](docs/06_verifiers_and_rewards.md)
- [`docs/07_agent_trajectory_data.md`](docs/07_agent_trajectory_data.md)
- [`docs/09_audit_and_failure_modes.md`](docs/09_audit_and_failure_modes.md)

---

## 📚 完整 Atlas

| 文件 | 用途 |
|---|---|
| [`data/papers.yaml`](data/papers.yaml) | 主结构化条目，当前 269 entries。 |
| [`docs/assets/entries.json`](docs/assets/entries.json) | 本地站点搜索/过滤数据。 |
| [`docs/index.html`](docs/index.html) | 本地静态 atlas 页面。 |
| [`reports/counts.md`](reports/counts.md) | 按 status、role、contract、year 的统计。 |
| [`reports/needs_search.md`](reports/needs_search.md) | 仍需验证的链接和元数据。 |

---

## 🤝 贡献

请不要只提交一个链接。一个有用的贡献至少包括：

- title / year / venue / official paper link；
- source role：data release、verifier/reward、recipe、model report、benchmark、scaling、audit/failure；
- verification contract：programmatic、environmental、judgment-required、mixed、unknown；
- training use：SFT、distillation、reward modeling、process supervision、RLVR、agent training、evaluation、audit；
- 为什么这个条目属于 reasoning-data atlas；
- 不确定字段请写 `unknown` 或 `needs_verification`。

详见 [`CONTRIBUTING.md`](CONTRIBUTING.md)。

---

## 📖 引用

当前 citation metadata 使用匿名评审安全占位符。
请查看 [`CITATION.cff`](CITATION.cff) 和 [`docs/anonymity_note.md`](docs/anonymity_note.md)。

---

## 🧾 状态说明

- 这是 living atlas，不是 definitive ranking。
- 许多 seed entries 来自本地 BibTeX / notes，因此保留 `needs_metadata`。
- 缺失链接不代表项目不存在，只代表还没有通过 primary source 验证。
