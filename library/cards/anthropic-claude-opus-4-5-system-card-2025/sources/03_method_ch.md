Anthropic 称其通用网络爬虫遵循 robots.txt，并避开受密码、登录和 CAPTCHA 保护的页面。系统卡列举了数据清洗、过滤、去重和分类，但没有公开相应实现、阈值、保留率、语料快照或逐来源审计。数据工作平台的 workers 协助进行 preference selection、安全评估和对抗测试。worker 身份、地区、报酬、指令、一致性、任务数量以及 worker 记录与训练阶段的关联均为 unknown。

已披露的后训练方法是 RLHF 和来自 AI feedback 的强化学习。较早的监督学习使用一些先前模型的 reasoning text，而 RL 不按 reasoning-text 内容进行奖惩。报告没有给出 preference-record 模式、AI-feedback 模型身份、奖励方程、目标组成、奖励权重、校准、verifier、优化器、调度、rollout 策略或 checkpoint 选择。它还称，自 Claude Sonnet 4 和 Opus 4 起，Anthropic 在显著一部分 coding environments 中使用 inoculation prompting，其中包括最易受 reward hacking 影响的环境。prompts、环境、子集比例、奖励契约和训练影响均为 unknown。

在一项 monitorability 分析中，Anthropic 在原始或由 Sonnet 3.5 改写的 reasoning workspaces 上重新训练基础模型，使用来自 RL 训练的 11,000 个带 reasoning workspaces 且无工具使用的数学 transcripts。另一项 reasoning workspace 评测对每个问题在温度 1 下使用 16 个 samples。这些是内部分析设置，并不是已发布训练数据集、通用后训练采样策略或已部署推理配置。

