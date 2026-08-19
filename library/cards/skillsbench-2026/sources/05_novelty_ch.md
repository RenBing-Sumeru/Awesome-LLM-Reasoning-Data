既有基线是同领域更早的 evaluation，常见限制是题源较旧、scoring 更简单、hidden-set policy 较弱，或 evaluator metadata 不够明确。

这里变化的是命名评测面和反馈契约：混合的 checker 或 judge 评分。它的方向信号只有在 provenance、split、evaluator version 和 scoring budget 被固定后才可靠。并不新的部分是“用 benchmark 评测模型输出”这个一般思想。复用前要检查 artifact 可得性、license、answer normalization、judge/rubric prompt、污染风险，以及 aggregate metric 是否掩盖逐实例失败。
