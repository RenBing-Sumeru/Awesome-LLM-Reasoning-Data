既有基线是固定 best-of-`n` 数据获取：RAFT 类方法为每个提示生成相同数量的候选，再保留正确或高 reward 回答；difficulty-aware rejection 配方可依据观测 pass 行为分配预算。这些方法不一定以最小化在线梯度估计器方差为目标，也不会随 policy 变化持续更新逐提示调度。

GVM 改变了数据获取接口。它把提示视为 Monte Carlo 估计器中的 strata，把接受概率与被接受样本的梯度幅度结合，并在固定总预算下选择 `n_i`。同一调度先用于具有 EM 动机的 RAFT++ pipeline，再经验性迁移到 GRPO，从而把 sampler 与下游 optimizer 分离。

对 reasoning-data 研究而言，方向信号很具体：rollout 预算属于数据构造的一部分，并在每次迭代产生 lineage。质量不再由单个静态分数表示；数据获取依赖当前 checkpoint、verifier 行为、pilot 规模、梯度实现和分配刷新频率。

多项组件是继承而非新贡献：Numina-Math 提示与 oracle 答案、chain-of-thought 生成、Math-Verify、拒绝采样、RAFT++、GRPO、重要性加权和 clipping。该工作没有发布新数据集，也没有证明被接受轨迹忠实。复用时应在生成次数与计算量匹配下比较均匀分配、仅 pass-rate、仅 gradient 和组合分配，并记录每项数据获取决策。
