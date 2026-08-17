GVM-RAFT 把逐提示 rollout 数量变成自适应数据获取决策：先用 pilot 估计答案接受率与被接受回答的梯度幅度，再在固定总预算内分配样本，以降低训练梯度估计器的方差。

对每个提示，当前策略先生成 `N'` 个回答。Math-Verify 给出二值结果，据此估计接受概率 `p_i`；被接受回答的梯度用于估计 `G_i`。Algorithm 2 按 `G_i / sqrt(p_i + alpha / p_i^(beta-1))` 的比例分配 `n_i`，再归一化到总预算 `N`，并调整整数数量以保持预算。附录 C 报告 `alpha=0.001`、`beta=2`。

反馈契约分为三层。Math-Verify 只能观察抽取的最终答案与 oracle，不能判断中间推理是否有效；`p_i` 汇总当前策略的成功行为；`G_i` 汇总被接受 pilot 在当前 checkpoint 下的梯度幅度。RAFT++ 使用重要性加权与 clipping 在被接受回答上训练，GRPO 则根据最终 reward 构造 group-relative advantage。GVM 不观察 rationale 的语义忠实性或提示的内在质量，只利用这些经验信号调度后续数据获取。

与普通 RAFT++ 或 GRPO 相比，关键差别是在总生成预算匹配时进行非均匀提示分配；与 DART-Math 等 difficulty-aware rejection sampling 相比，GVM 同时使用 pass 行为与梯度项，并随 policy 变化在线重算调度。因此，它代表的是位于提示来源与优化之间、可审计的 sampling-policy 层，而不是新 verifier 或可迁移的质量标签。
