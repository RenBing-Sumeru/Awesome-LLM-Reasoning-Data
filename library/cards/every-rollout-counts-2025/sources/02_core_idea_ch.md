DORA 将候选质量与语义 uniqueness 结合。Qwen2.5-Math-PRM-7B 为每条活跃部分轨迹评分，使用 T_b=0.1 的 softmax 转成质量权重。BGE-M3 对轨迹编码，余弦相似度形成矩阵，再用 T_s=0.01 的逐行 softmax 得到 soft affinity matrix。对角项 P_ii 被解释为候选 i 的 uniqueness，近似其潜在方向大小的倒数。质量乘以 uniqueness 后重新归一化，再乘总预算 N 得到分配量。

理论分析用以归一化 PRM 分数为中心的 Beta 先验表示未知候选成功概率，说明最优分配如何随置信度变化，以及候选数量为何使 solution-level allocation 有偏。Theorem 1 只有在候选能按方向分组、且同一方向内 PRM 分数相同的条件下才恢复方向级最优分配。DORA 的 embedding 与 PRM 是这些潜变量的实践代理，并不证明推断出的方向或分数正确。

