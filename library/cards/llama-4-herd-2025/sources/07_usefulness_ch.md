在“前沿报告与数据披露账本”轨道中，本 Card 支持按分支审计。策展者可以分别记录预训练来源与总量、mid-training、Maverick 的困难样本 SFT—online RL—DPO 流水线、Behemoth-to-Maverick 教师目标、Behemoth 自身的后训练 curriculum、安全数据、已发布权重和仅用于评测的证据。

对于后训练推理数据研究，已披露的难度过滤具有设计参考价值：由裁判标注并删除简单样本，以及持续选择中等至困难提示，说明数据选择具体进入优化流程的位置。但缺少提示、裁判、阈值、奖励和 rollout 设置时，它们并不是可复用配方。codistillation 描述同样只能确认教师关系和目标生成路径，不能证明存在开放的 trace 数据集。

因此，本 Card 可用来把 Llama 4 与公开训练记录、verifier、偏好或奖励代码的报告进行比较。它不能用于把 Llama 4 语料标为开放数据、把 online RL 标为可复现 RLVR、把 Behemoth 方法归给 Scout/Maverick，或把 benchmark 性能当作数据质量证据。
