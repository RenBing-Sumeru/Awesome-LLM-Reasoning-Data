# Awesome LLM Reasoning Data

> 一个面向学习和实践的 LLM 后训练推理数据地图：覆盖数据对象、验证器、奖励信号、构建配方和审计字段。

这个仓库不是普通论文列表，而是一个结构化的后训练推理数据学习库。它按照 data object、verification contract、reward signal、construction recipe、scaling claim 和 audit field 来组织公开研究与系统报告，帮助读者理解 reasoning model 的提升到底来自哪里。

## 如何阅读

- 新手：从 `docs/00_start_here.md` 到 `docs/04_data_quality.md`。
- 构建者：阅读 `docs/05_construction_cookbook.md`、`docs/06_verifiers_and_rewards.md` 和 `cards/`。
- Agent 方向：阅读 `docs/07_agent_trajectory_data.md`。
- Scaling / frontier report 方向：阅读 `docs/08_scaling_and_test_time_compute.md` 和 `docs/09_audit_and_failure_modes.md`。

## 核心思想

这个仓库的核心单位是 verifier-bearing sample：一个任务和模型行为，必须连接到某种反馈接口，例如答案检查器、单元测试、证明检查器、过程标签、奖励模型、人类 rubric、LLM judge 或环境成功条件。

## 注意

当前 citation metadata 使用匿名评审安全占位符。公开作者信息、LICENSE 类型和 GitHub Pages 设置需要 owner 最后确认。
