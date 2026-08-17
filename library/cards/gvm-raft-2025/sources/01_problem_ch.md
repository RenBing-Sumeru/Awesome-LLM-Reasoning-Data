权威来源包括 NeurIPS 2025 官方论文集、含附录的 40 页论文 PDF、arXiv:2505.02391，以及官方 `RLHFlow/GVM` 仓库。论文研究在线数学推理后训练：每条训练项提供提示 `x` 与 oracle 最终答案 `z`，chain-of-thought `y` 是潜变量，正确性可由程序判定（论文 §2）。

均匀的 RAFT 类数据获取会为每个提示生成相同数量的候选，却没有考虑当前策略解出该提示的频率，也没有考虑被接受回答对随机梯度的贡献。在固定总生成预算下，均匀采样可能把过多预算用于贡献较低的提示，并使 EM/RAFT 梯度估计产生不必要的方差（论文 §1、§3）。

这里的数据对象不是可下载的静态数据集，而是迭代级获取记录：提示与 oracle 答案、policy checkpoint、pilot rationale 与抽取答案、Math-Verify 结果、接受率估计 `p_i`、被接受回答的梯度统计 `G_i`、分配数量 `n_i`、追加 rationale 与结果，以及进入 RAFT++ 或 GRPO 的选中回答或 reward group。GVM 属于 Data Construction and Open Release Recipes，因为它在总预算匹配时改变了哪些在线推理记录被生成和接纳。它不解决 rationale 的过程级证明、开放式 judge 或提示创建。

本卡已能从证据层面支持审阅：方法、设置、主要与负面结果、机构和代码路径均可追溯。但直接复用训练数据仍被阻塞，因为精确 Numina-Math 修订、item split、论文运行对应的 commit/configuration、decontamination，以及公开 rollout/分配 ledger 均不可用。
