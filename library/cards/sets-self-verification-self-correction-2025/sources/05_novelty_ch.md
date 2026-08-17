Repeated sampling 能探索多个独立 solution，却不能改进单条分支；SELF-REFINE 能修订一条分支，但会在 self-verification 成功时停止，无法自由消耗更大预算。SETS 将二者视为同一设计空间的端点：m 控制并行多样性，n 控制顺序修复。它让同一模型通过 prompt interface 完成生成、验证与修正，而不额外引入经过训练的任务专用 verifier 或 revision model。

对本图谱而言，方向信号是显式 episode structure 与预算分解。SETS 轨迹可区分初始多样性、反馈、revision depth、early stopping 及最终跨分支聚合，从而审计增益究竟来自更多样本、更强 self-verification 还是有效 correction。各个 operation 均为既有方法；无需训练的组合和 compute-frontier 研究才是本文贡献。最终 benchmark 准确率不是中间 self-feedback 忠实性的证据。
