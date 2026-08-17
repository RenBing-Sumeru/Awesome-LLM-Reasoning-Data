R1-Reward将奖励建模重写为可验证规则RL任务，提出StableReinforce，并汇总200K多模态偏好数据；官方R1-Reward-RL主要记录RL训练rollout，而非新的原始人工偏好集。

模型先从偏好数据学习判断格式，再通过规则奖励训练生成推理与偏好结论；StableReinforce修改损失、优势估计和奖励设计以稳定更新。
