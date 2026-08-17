对 `environment_agent_trajectory_data`，MobileWorld 是很好的 environment-contract 示例：应一起封装 task ID/goal、初始 AVD 与 backend snapshot、screenshot stream、解析后的 GUI/user/MCP action、外部 response、模型/scaffold metadata、budget、终局 score/reason 和全部 artifact version。当前 logger/viewer 提供实用起始 schema，公开失败则可用于恢复、记忆和 verifier-error 分析。

对 benchmark builder，四种 verifier mode 适合做交叉检查：为同一 subset 实现两个独立 predicate，变异 backend/local state，测试 alternate valid answer，并记录 side-effect field。Mattermost session 过期事件应转化为 authentication freshness 与 snapshot validity 的 regression test。

对 agent 研究，45 个 interaction task 可评测 ambiguity detection 与 query efficiency，40 个 MCP task 可暴露 tool name/argument 准确率、输出压缩、context management 和 GUI/tool handoff。应在相同 terminal predicate 下比较 GUI-only、tool-only 与 hybrid policy，并记录 failed tool call 和 redundant question，而不只报告 SR。

对训练研究，公开 bundle 可用于失败 taxonomy 或离线分析，但直接 behavior cloning/RL 复用仍受组件许可证、编码修复、外部 response provenance 和新 held-out evaluation split 阻塞。论文本身只提供评测证据，没有验证训练目标。

复用等级：固定版本后可安全作为 evaluation 与 audit reference；若完整固定 container/snapshot，也适合环境与 replay 工程。公开 trajectory 是阅读/审计材料和有条件研究数据，不是可无限制、无污染地训练的 corpus。
