论文计算先验权重 exp(u 减 gamma 乘 q)，其中 u 是多次 dropout 前向传播中的预测方差，q 是归一化的标签分歧。它在统一评分尺度后，使用带有 12 属性回归头的 Mistral NeMo 12B 奖励模型，处理 HelpSteer2、OpenAssistant2、Magpie-Qwen-2.5、OffsetBias 和 WildGuard。

在下层，加权记录训练奖励模型。在上层，验证损失调整其权重，而 L2 项使权重保持在不确定性—分歧先验附近；一阶超梯度避免了二阶 Hessian。得到的奖励模型会为 UltraFeedback 的 DPO 集合标注，以便在一轮监督微调后训练 Mistral-7B 策略。
