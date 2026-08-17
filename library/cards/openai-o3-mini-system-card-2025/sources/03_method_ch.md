System Card 第 2 节说明，o3-mini 在公开可得数据与内部自定义数据的混合上进行预训练。报告提到质量与风险过滤、减少个人信息的处理，以及使用 Moderation API 和安全分类器防止有害或敏感内容进入数据；还说明 o 系列推理模型经由大规模强化学习训练，并且可在回答前产生较长的 chain of thought。

报告描述了 deliberative alignment，并说明更新拒绝策略格式和生成新安全数据是这项缓解工作的一部分。它区分了 near-final checkpoint 与发布 checkpoint，并称后者有小幅增量后训练改进。但是，基础模型架构、安全数据的来源与数量、轨迹生成、采样、rollout、RL 目标、奖励或 verifier、优化器、训练日程和保留的记录模式均为 unknown。

报告为评测而非已记录的训练描述了公开及内部构造的测试、自动评分的拒绝指标、外部 red teaming、人类或专家比较和 Preparedness 评测。官方发布页还提供 low、medium、high 三档 reasoning effort。某些评测环境包含浏览、代码执行、提示、定制训练和 scaffolding；这些评测设置并不披露后训练环境。

