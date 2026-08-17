多模态模型在复杂视觉推理中会产生幻觉或走错推理路径，只有最终正确/错误标量无法告诉模型哪里需要修改；直接让同一模型自我批评又常偏爱自身答案，缺少高质量、能区分批评优劣的训练反馈。

Critic-V 将 Reasoner 与 Critic 解耦：Reasoner 生成多模态推理，Critic 给出自然语言修改意见；Critic 用按规则奖励排序的 critique preference data 做 DPO，之后反馈迭代更新 Reasoner 的文本策略。
