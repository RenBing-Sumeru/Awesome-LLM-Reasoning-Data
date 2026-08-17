ST-BoN 需要访问 hidden states，因此不能直接用于封闭 API 模型。理论分析依赖局部 Lipschitz 连续性和有界距离增量，并给出最终潜在一致性的概率界，而非正确性保证。潜在空间中的一致也可能共同收敛到错误答案，或延续 base model 的偏差。

作者还把 window-length adaptivity 列为未解决问题：较长输出可能需要更大的 tau，而主实验固定使用 tau=c。实验集中于六个数据集和少量模型系列。精确 prompt、版本、seed、去污染、完整输入 provenance、被拒候选及分数 trace 并未全部确认为公开发布。仓库的 final-output record 不足以重放每次选择决策；benchmark 增益也不能证明过程记录质量或安全性。
