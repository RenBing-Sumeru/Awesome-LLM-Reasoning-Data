Anthropic 描述了一个遵循 robots.txt 且避开受密码、登录和 CAPTCHA 保护页面的通用爬虫。它报告了包括去重和分类在内的清洗与过滤。数据工作平台的 workers 协助 preference selection、安全评估和对抗测试。系统卡称进行了大量采用 RLHF 和来自 AI feedback 的强化学习的后训练和微调，并采用新的 harmlessness pipeline，其中包括 specification 更新、改造后的 data pipelines、重新调整的 algorithms 和内部领域专家迭代。来源记录、worker instructions、反馈模式、奖励函数、目标、校准、filters、algorithms、optimizers、schedules、rollouts 和 checkpoints 均为 unknown。

产品可以在 extended-thinking 模式中输出 thought processes，且较小模型可以总结很长的 thoughts。这一推理行为不披露训练-trace 语料、trace authorship、保留规则或溯源。对于 reward hacking，系统卡描述了更新后的问题集和 scaffolding、从可见 tests fuzz 出来的 hidden tests、鲁棒环境和奖励结构，以及监控。一些测试使用从训练分布中手选或扩展的 coding problems，并配有 held-out fuzzed-test variant。这些是评测和监控方法，而不是发布的任务数据或训练奖励契约；prompts、任务成员关系、hidden tests、fuzzing 实现、classifiers、分数和现实世界 rate estimates 均不可得。

white-box 审计比较不同 snapshots 之间的模型差异，并调查 evaluation awareness。它使用 synthetic honeypots、agentic-misalignment subsets、手写的 opinion 或 sycophancy 问题、作为对照的随机预训练文档和作为对照的 LLM-generated chat questions。一个在后训练 snapshot 中间层上训练的 sparse autoencoder 与早期和最终 snapshots 比较；activation steering 在评测实验中抑制选定的 evaluation-awareness vectors。SAE、vectors、prompts、labels、选择过程、阈值、snapshots、代码和完整结果均未发布。

