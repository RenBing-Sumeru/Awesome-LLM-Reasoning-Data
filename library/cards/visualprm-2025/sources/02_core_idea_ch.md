对图像 I、问题 q 和被切分为步骤的解答，VisualPRM400K 为每个前缀分配 Monte Carlo expected accuracy。从前缀 s_1:i 出发，InternVL2.5 系列模型采样 16 条 continuation；若其中 k 条的终局答案被按来源选择的 checker 接受，则 mc_i = k/16。公开的 value-based 目标在 mc_i > 0 时为 `+`，mc_i = 0 时为 `-`。这是“任一成功”规则：只要一条 continuation 通过，就把当前前缀标为正例。

概念记录包含图像、问题、有序步骤和各步 mc_i。训练时，它被渲染为多轮 conversation：第一轮 user 内容包含图像、问题和第一步，后续每轮 user 再加入一个步骤，对应 assistant 输出离散质量 token。VisualPRM 在预测当前标签时，会利用已有的完整视觉/问题上下文和此前步骤。

推理时，单步分数由离散输出 token 的生成概率加权得到。论文主要使用正/负输出的 value-based 模型，也研究基于 mc_i 变化构造 superior/equal/inferior 目标的 advantage 变体。除非消融另有设置，否则完整回答分数取各步骤分数均值，并据此排列 Best-of-N 候选。

这个 scorer 并不等同于数据构造 verifier。终局答案 checker 产生 Monte Carlo 目标，VisualPRM 学习这些过程标签，Best-of-N 再使用学得分数做选择。因此，即使模型之后在 benchmark 上表现较好，continuation generator 与答案 checker 的错误或偏差仍可能进入学得奖励。
