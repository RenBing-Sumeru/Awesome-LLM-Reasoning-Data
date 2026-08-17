官方 arXiv 记录将该工作固定为 *Kimi K2.5: Visual Agentic Intelligence*、arXiv:2602.02276，提交于 2026 年 2 月；官方 Kimi 模型页称产品于 2026-01-27 发布。报告和官方仓库识别出约 15T 混合视觉/文本持续预训练、zero-vision SFT、联合文本—视觉 RL、Agent Swarm 和已发布的后训练 checkpoint。

报告明确描述了用于可验证任务的规则型 outcome reward、budget-control reward、用于通用任务的 GRM、视觉 F1/IoU/edit-distance/counting reward，以及用于合成视觉谜题的 Kimi K2 verifier。它还描述了 PARL 的可训练 orchestrator、冻结 subagent、subtask completion 信号和防止无意义并行的 reward 设计。

官方 Hugging Face 页面和仓库发布了 checkpoint 及采用 modified-mit 条款的相关仓库。未找到后训练数据、教师输出、Unified Agentic RL Environment artifact、sandbox、container、rollout 日志、GRM rubric 或 reward 校准的官方发布。这支持部分披露状态。
