TraceElephant 处理长时程多智能体系统中的失败分析缺口：二元任务失败只能说明 episode 结局错误，不能说明哪个功能 agent 应负责，也不能定位失败从哪一步开始已无法挽回。权威来源是 ACL 2026 Long Paper 及其官方 arXiv、GitHub 和 Hugging Face artifact。本文的边界是失败归因评测与审计，不是智能体训练、reward model 训练或强化学习训练。

该基准从 380 次清洗后执行中保留 220 条失败运行，覆盖三个系统和三个公开 benchmark：Captain-Agent 与 Magentic-One 运行 GAIA 和 AssistantBench，SWE-Agent 运行 SWE-Bench Verified。每个发布任务目录由 `trace_metadata.json` 和 `step_records.json` 配对组成。metadata 记录任务、指令、系统、配置和架构；有序 step records 保留每个 agent 的输入上下文与输出，并在工具交互可观察时记录工具名称、参数、输出和状态。基准另外标注负责 agent，以及从此之后所有可行续接均被判断会失败的最早步骤。

本文归入 `environment_agent_trajectory_data`，因为核心对象是由答案参考、测试、工具和可变环境共同决定结局的 state/action/observation episode。它不研究成功轨迹学习，也没有证明专家归因可直接充当确定性的 process reward。本卡已用经核验的数据数量、字段、构造过程、反馈契约、发布版本和审计风险达到 L4 内容深度，但保留已接受的 `L3_summary_ready` curation level，等待人工 Review。
