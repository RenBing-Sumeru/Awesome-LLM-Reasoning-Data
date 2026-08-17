- 建议先读第 2.2–2.3 节，核对宽泛 pretraining 来源、三个 mid-training context 阶段和 issue–PR 语料。再把第 3.1–3.5 节当作五种不同后训练契约来读：三类 SFT、四域 Reasoning RL、异步 Agentic RL、General RL、跨阶段蒸馏。不要把它们压缩成一个“后训练数据集”。

- 第 4.1–4.2 节对 agent-data 研究最关键。应追踪 message-list 标准化、TITO token 捕获、环境 observation、模型 token loss mask、trajectory reward 以及陈旧/失败过滤之间的边界，并区分哪些只是架构描述，哪些真的有开放工件。

- 评测表必须与第 6 节和附录 B 一起读。每个数字旁边都应记录 harness：SWE-bench 的 OpenHands；Terminal-Bench 的 Terminus-2 或 Claude Code；BrowseComp 的工具/上下文策略；MCP-Atlas 的 Gemini 3 Pro judging；CC-Bench-V2 的内部测试与 Agent-as-a-Judge。

- 阅读时维护三本台账：训练环境、评测 scaffold、部署工具。报告最大的贡献是 pipeline 可见性；最大的缺口是没有记录级数据、完整 reward、overlap audit 与 lineage。
