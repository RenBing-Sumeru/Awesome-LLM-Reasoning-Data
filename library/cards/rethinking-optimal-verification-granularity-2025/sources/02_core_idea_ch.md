Variable Granularity Search（VG-Search）引入粒度参数 g：proposer 每生成 g 个推理步骤，verifier 才对各个部分或完整候选评分。给定 beam width B1 与 branch factor B2，每个循环对 B1 × B2 个候选评分，保留 B1 个，再扩展并重复。g = 1 接近 verifier 引导的 beam search；很大的 g 则接近 Best-of-N。

论文进一步提出两种用验证集调节的策略。CM-g 选择仍能把准确率保持在 g = 1 容差范围内的最大 g，以降低计算；AM-g 在预算约束下选择验证准确率最高的 g。所选 g 可以随模型、任务难度组和生成数量改变，但在单个问题轨迹内保持固定，并不是逐步自适应验证。
