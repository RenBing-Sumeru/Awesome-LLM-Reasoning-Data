先验基线是把 MMLU 发布答案键当固定 ground truth，只讨论模型表现。MMLU-Redux 改变了被审计对象：它审计 benchmark 行本身，并发布修正/复标子集。

方向信号是 benchmark maintenance 需要缺陷记录，而不只是更难题目。质量信号是公开的 row-level artifact、错误标签，以及对原始 MMLU 缺陷比例的估计。

不新的部分包括人工标注、答案键评分和 benchmark cleaning。复用前要检查标注说明、一致性或裁决策略、类别定义、样本代表性、许可，以及下游评测是剔除坏题还是使用修正标签。
