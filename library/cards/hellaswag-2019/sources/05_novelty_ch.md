已有基线是 SWAG 和其他 answer-level 常识多选数据集。HellaSwag 改的是规模、来源混合和 adversarial filtering 强度，使当时的预训练模型不能继续利用同一批 artifact。

方向信号不是多选 accuracy 这个评分器本身，而是用模型/判别器难度来筛选更难负例的数据构造闭环。不是新的部分包括 final-answer accuracy、静态公开 split 和人工验证。复用前要检查 split count、label 可用性、来源 license、过期 leaderboard claim，以及样本是否已经进入模型预训练数据。
