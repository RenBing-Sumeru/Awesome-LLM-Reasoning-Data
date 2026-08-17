官方发布页将该 System Card 标为 2025 年 1 月 31 日发布，并署名 OpenAI。PDF 的 Model Data and Training 部分支持关于公开或内部预训练数据类别、过滤以及高层强化学习和 chain-of-thought 的表述。

关于安全评测，PDF 为拒绝测试定义了 `not_unsafe` 和 `not_overrefuse` 自动评分指标；它描述了外部 red team 评分，以及 Gray Swan 的 jailbreak 成功条件：同时触发 Moderation API 并通过判断内容是否含有完整、可操作有害步骤的分类器。在 Preparedness 评测中，报告说明能力诱发可使用定制模型训练、scaffolding 和提示，并明确警示所报告结果只是下界，可能因不同提示、微调、更长 rollout、交互或 scaffolding 而改变。

这些内容是关于测试和缓解措施的直接披露，并不能证明任何已命名的自动评分器、审核标准、人类评分或 Preparedness 任务被用作强化学习训练奖励。

