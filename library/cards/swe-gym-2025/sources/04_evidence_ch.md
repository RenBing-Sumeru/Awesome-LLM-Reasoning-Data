PMLR 官方记录确认 2,438 个任务与 ICML 2025 发表。用 491 条成功轨迹微调 OpenHands 32B agent 后，SWE-Bench Lite 与 Verified resolution 分别达到 15.3% 和 20.6%，相对报告 baseline 绝对提升 12.3 与 13.6 个百分点。这说明报告的环境和 SFT 设置具有实用性，不能证明每个任务正确或许可完整。

Verifier-guided inference 在 SWE-Bench Verified 报告 32.0%，Lite 报告 26.0%。候选数量增加时，在受测范围内结果近似 log-linear 提升，但 Best@k 仍低于 Pass@k，说明 learned verifier 并不总能选中已经存在的成功 patch。

论文还给出负面证据。把 868 个报告的 on-policy success 与 491 个 off-policy success 混合，会使 OpenHands Lite performance 从 15.3% 降至 8.7%。Moatless 32B 在一次迭代后饱和。这说明 success-filtered self-improvement 可能放大任务选择与分布偏差。

单元测试是可执行反馈，不是语义证明。不完整、不稳定或可被利用的测试可能接受错误 patch 或拒绝正确 patch。公开版本没有量化测试或 learned verifier 的 false positive、false negative、nondeterminism 与 reward hacking。
