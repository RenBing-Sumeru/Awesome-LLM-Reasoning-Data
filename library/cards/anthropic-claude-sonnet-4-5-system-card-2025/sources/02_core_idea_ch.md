系统卡在类别层面列出专有来源混合：截至 2025 年 7 月的公共互联网信息、非公开第三方数据、数据标注服务和付费承包商数据、选择加入的 Claude 用户数据，以及 Anthropic 内部生成数据。它报告了包括去重和分类在内的清洗与过滤，以及大量采用 RLHF 和来自 AI feedback 的强化学习的后训练和微调。没有公开来源清单、记录数量、权利映射、后训练示例、preference records、奖励模型或优化器制品。

该条目对 Track 12 的核心贡献，是在两种独立评测实践之间划出审计边界。reward-hacking 材料涉及更新后的 coding 压力测试、隐藏的 fuzzed tests、环境、奖励结构和监控；它不是 RLHF/RLAIF 奖励契约，也不是现实世界 hacking-rate 估计。white-box 材料涉及发布前的 model-diff、activation-steering 和 evaluation-awareness 实验；它不是模型内部的发布，也不是存在可访问后训练数据集的证据。报告本身警告，evaluation awareness 会使行为评测产生偏差，并系统性低估部署风险。

