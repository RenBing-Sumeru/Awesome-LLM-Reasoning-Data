表 1 在 Math500、Minerva Math、Olympiad Bench、AIME24 和 AMC23 上评估 Average@8。对 Qwen2.5-Math-1.5B，GVM-GRPO 的五项平均为 40.42，GRPO 为 38.11；GVM-RAFT++ 为 39.64，RAFT++ 为 36.42。对 Qwen2.5-Math-7B，最终差异很小：GVM-GRPO 与 GRPO 分别为 49.86 和 49.07，GVM-RAFT++ 与 RAFT++ 分别为 49.13 和 49.06。这些是作者报告的采样准确率；1.5B 模型评估温度为 1.0，7B 模型为 0.7。

图 2 在 Qwen2.5-Math-1.5B 上报告：`N'=8,N=8n` 约加快 2 倍收敛，`N'=32,N=32n` 约加快 4 倍，并分别带来约 1.25 与 5 个百分点的最终增益。论文明确按图中的 update step 计算加速。附录 C 说明一次典型 `N'=8,N=8n` GVM 迭代在 4×H100 上耗时 90 分钟，但没有对均匀基线、pilot 生成、verifier 调用和梯度统计计算进行匹配的 wall-clock 核算。

附录还给出重要负面证据。图 9 显示，增大 pilot/总采样设置时收敛趋势近似；图 7–8 显示 Qwen2.5-Math-7B 的大 `n` pass@n 会随训练恶化，作者指出该现象在 vanilla RAFT++/GRPO 中已存在，并非由 GVM 分配引起。作者还报告，更大的 `N'` 可能把预算移向更难提示，并降低观测训练 reward。

这些证据支持逐提示分配在所测数学运行中作为优化干预，但不能证明 rationale 的过程正确性、数据的内在质量、语义 decontamination 或更低总成本。公开产物没有论文运行 ledger，无法独立重建这些曲线背后的精确提示、回答、checker 输出、梯度统计、分配和 checkpoint。
