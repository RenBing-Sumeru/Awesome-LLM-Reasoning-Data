Anthropic 报告了 RLHF、来自 AI feedback 的强化学习、宽泛专有来源类别、包括去重和分类的清洗/过滤，以及协助 preference selection、安全评估和对抗测试的 workers。adaptive thinking 提供 low、medium、high 和 max effort 设置。这些陈述没有公开记录、奖励方程、AI-feedback models、目标、校准、filters、rollout policy、数值 thinking budgets、优化器、调度或 checkpoints。

4.6 卡片称，先前 Claude 的 reasoning transcripts（主要是 Opus 4.5）用于监督初始化。它描述了一个发布前评估：使用来自 RL 训练的 11,000 个无工具数学 transcripts，比对原始和改写的 reasoning workspaces，每题在温度 1 下使用 16 个 samples。它还报告了少于 0.01% 的 reasoning workspace reward-signal 错误，该错误偏向训练后期并涉及 simulated-user long-form misuse reports。这些是内部实验或有界错误披露，不是发布的数据或完整后训练协议。

卡片描述 coding 和 GUI over-eagerness 评测、computer-use containers、snapshot sampling、transcript review 和可解释性方法。训练环境、任务接口、container 定义、scenario records、hidden tests、graders、vectors、SAE 制品、原始 traces 和可复现 logs 均为 unknown。

