官方系统卡在类别层面描述了一个专有训练混合：截至 2025 年 5 月的公共互联网信息、非公开第三方数据、数据标注服务和付费承包商数据、选择加入的 Claude 用户数据，以及 Anthropic 内部生成数据。它报告了包括去重和分类在内的清洗与过滤。这些是披露级的来源主张；没有公开来源清单、混合权重、记录数量、版本、权利映射或条目级谱系。

对于后训练，Anthropic 报告了大量 RLHF 和来自 AI feedback 的强化学习。它明确给出一个重要的 reasoning-text 边界：RL 训练没有基于模型 reasoning-text 内容的奖励或惩罚。另一方面，一些较早的监督学习数据包含先前模型产生的 reasoning text。这一组合揭示了监督 trace 使用与 RL 奖励处理之间的真实区别，但没有识别 teachers、prompts、traces、preferences、奖励模型、verifiers 或 objectives。

