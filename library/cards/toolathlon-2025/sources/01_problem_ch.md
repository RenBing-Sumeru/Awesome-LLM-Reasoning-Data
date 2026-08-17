论文于 2025 年首次发布到 arXiv，2026-02-26 更新为 arXiv v2，并发表于 ICLR 2026。这个双重时间边界很重要：`toolathlon-2025` 保留论文首发年份，venue 字段则记录正式会议。该工作研究如何评测需要大量相互依赖的工具调用、跨应用状态修改以及从噪声观测中恢复的语言智能体，而不是只测试一次 API 调用或静态答案（论文第 1–2 节；ICLR 与 OpenReview 官方记录）。

该 benchmark 包含 108 个简洁且刻意保持模糊的长程任务，覆盖 32 个 MCP server/application 表面、604 个 MCP 工具，以及由 7 个本地 toolkit 提供的 16 个额外工具。每个任务平均暴露 69.9 个工具，范围为 28–128；108 个任务中有 72 个带脚本化状态初始化和/或 initial workspace。环境混合远程服务与本地容器化应用，包括 Poste.io、Canvas、Kubernetes 和 WooCommerce（论文表 2，第 6 页；第 2.2–2.4 节）。

分析单元不只是 prompt 或最终答案。一个 benchmark instance 将模糊用户指令与 `task_config.json`、选定工具面、可选 preprocess 或 initial-workspace 资产、任务专属 ground truth 和 evaluation script 绑定。智能体运行后产生有序的 user/assistant/tool 历史，其中包含工具调用、环境响应、执行状态、时间、token 与成本统计，随后另存 evaluator 记录。因此，数据对象是环境 episode，而正确性标签附着在终态，不附着在每个 state-action 转移上。

这一差别使其属于 `environment_agent_trajectory_data`：发布的 episode 保留了与可变外部 substrate 的交互。它也属于 `benchmarks_evaluation_surfaces`，因为每个任务都定义了可执行的终态评分面。该工作没有提供后训练 recipe、step-level process reward 语料，也没有证据表明轨迹获得训练复用许可；后续 gated Toolathlon-Verified 发布还明确禁止模型训练用途。

本卡依据完整论文与附录，以及官方 venue、project、code 和 dataset artifact，已具备用于双语 L4 筛选的内容深度。canonical metadata 仍保持已接受的 `L3_summary_ready`，因为原始 gated archive、详细 decontamination 文件、通用许可证、evaluator 错误率及跨 artifact 的不可变回放 manifest 仍不可获得或为 unknown。
