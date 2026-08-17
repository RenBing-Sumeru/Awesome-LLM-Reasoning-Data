在 QwQ-32B 的 64 候选 Comp-Math-24-25 候选池上，Table 3 报告 Majority@64 为 68.4%，Qwen2.5-Math-RM-72B 为 66.8%，逐点 QwQ GenRM 为 69.1%，QwQ GenSelect@1 为 72.1%；当 GenSelect 重复八次并对其所选答案做多数投票时为 73.4%，Pass@64 为 85.2%。这些是在同一报告候选池上的 selector accuracy，不能证明任何已发布数据集完整或高质量。与 Pass@64 的差距也说明，即使池中存在正确候选，选择器仍有明显错误。

Table 4 在保持 64 个候选的同时，把淘汰赛分支数设为 \(N \in \{2,4,8,16\}\)。GenSelect@1 的范围为 72.1%–72.6%，GenSelect@8 为 73.0%–73.4%。作者据此认为方法在测试的赛制间较稳定，这支持在 context 允许时减少串行轮次，但并不能证明对顺序不敏感：最终系统仍在随机候选排列下重复 32 次，而且论文未发布逐排列方差或 bracket-level decision log。

Table 2 的等 generation-call 消融依赖模型与预算。对 DeepSeek-R1-0528，\(2N\) 次生成加 majority voting 与 \(N\) 次生成加 \(N\) 次 GenSelect generation 在 \(N=4\) 时分别为 82.8% 与 82.4%，在 \(N=8\) 时为 84.4% 与 85.9%，在 \(N=16\) 时为 84.4% 与 87.1%。对 QwQ-32B，对应结果分别为 66.4% 与 69.5%、66.8% 与 69.5%、68.0% 与 71.9%。论文明确指出 selector 方案 latency 更差，因为 verification 只能在 generation 完成后开始；文中没有 token-normalized 或 wall-clock 对比。

在最终的 32 次重复、\(N=8\)、64 候选赛制中，Table 5 报告 DeepSeek-R1-0528 在全部 256 道题上的 pass@1 为 71.2%、maj@64 为 84.0%、Self-GenSelect@32 为 87.1%。QwQ-32B 对应为 60.0%、68.4% 和 73.0%。论文所述增益主要来自 HMMT 子集，而该子集的正确性由 LLM judge 判定。所有结果均为作者报告，本 Card 未进行独立复现。
