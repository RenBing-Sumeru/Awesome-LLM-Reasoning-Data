ST-BoN 的核心贡献是一个早期选择器：它不依赖完整答案投票或外部奖励模型，而使用模型自身潜在轨迹之间的一致性。系统并行解码多个样本，直到步骤 c，即任意两个 token 前缀都不再完全相同的首个时刻。对每个前缀，CoE 汇总句级 hidden representation 在各层之间的变化；候选间 CoE 特征差的平方构成距离，平均距离最小者成为当前估计。

由于只在 c 做一次估计容易受噪声影响，系统继续解码 tau 个步骤形成 buffer window，逐步重算最优候选，并以窗口内获胜次数最多的轨迹作为最终选择；其余路径可被截断，选中路径继续生成。反馈契约因此是内部的算法式 trajectory-value 信号：较小的潜在距离和较多的窗口胜次用于选择，但都不是正确性证明。

论文最接近的基线是使用多数/语义一致性的 Full-BoN，以及使用 process reward model 或 preference reward model 的 Full-BoN。ST-BoN 保留并行采样与选择，但将选择提前到完整生成之前，并去掉学习式奖励模型。它属于 Rollout, Search, and Test-Time Trace Data，因为 selector state、采样预算、被停止候选和计算记录与最终答案同样重要。
