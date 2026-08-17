该方法把搜索引擎作为强化学习环境的一部分。模型生成内容以 <think>、<search> 和 <answer> 区段组织，检索段落插入 <information> 区段。PPO 或 GRPO 只优化模型生成 token，检索 token 被 loss mask 排除。反馈是依据最终答案正确性的规则型终局奖励，不是对每个推理或检索步骤的过程质量标注。
