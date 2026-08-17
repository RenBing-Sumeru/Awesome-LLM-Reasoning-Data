正确性只相对于编码后的领域 policy、用户模拟器、数据库 schema 和 reward function 成立。最终状态通过不自动证明对话质量、安全性或跨领域鲁棒性；最终状态失败也可能掩盖部分正确的信息收集或工具使用。

原始任务集现在对版本非常敏感，因为仓库指向了后继修复任务。分数会随 simulator 行为、prompt/scaffold、工具实现、依赖版本、动作预算和随机种子漂移。公开任务有污染风险，evaluation-only terminal reward 不能在没有额外 license、暴露范围和 reward-hacking 审计时直接当训练奖励。
