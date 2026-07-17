在使用 2,000 个选中样例时，BeeS 在报告的 TLDR、Helpful and Harmless 与 UltraFeedback 比较中均为最佳或次佳，而若干单间隔和低间隔策略至少在一个任务上低于随机选择。在 AlpacaEval 2.0 上，报告的 6,000 对 BeeS 子集在四个 Llama-3-8B 基础或指令设置中都优于完整 UltraFeedback 训练。

对于迭代 DPO，每轮从 20,000 个提示中保留 5,000 条记录，Llama-3-8B-Instruct 最终报告的长度控制胜率为 48.49、原始胜率为 54.99；未过滤 DPO 行分别为 44.51 和 53.12。论文还报告，在一个在线设置中，3,000 对 BeeS 子集可匹配完整集合性能。
