最强的策略结果来自论文在 Llama-3-8B-Instruct 与 UltraFeedback 设置下的表 1 对照。基础模型在 AlpacaEval-2 上的长度控制胜率为 23.1%，在 Arena-Hard 上的胜率为 20.6%；Mutual-Taught Iter1 分别报告 38.4% 和 33.9%，Iter2 为 54.1% 和 38.4%。表中最强的 iterative DPO 基线经过三次迭代后，AlpacaEval-2 长度控制胜率为 47.2%，Arena-Hard 为 34.7%。Mutual-Taught 只把三分之二提示划分用于策略更新，而迭代基线使用全部三份并运行三次。AlpacaEval-2 由 GPT-4-Preview-1106 同时充当基线与 judge；Arena-Hard 以 GPT-4-0314 为基线、GPT-4-Preview-1106 为 judge。（论文 §5.1–5.2、表 1；附录 A）

奖励模型证据并非各维度一致改善。RewardBench 上，FsfairX-Llama3-RM-v0.1 平均分为 84.7，Mutual-Taught Iter1/Iter2 为 85.8/87.0，表中 GPT-4o-2024-08-06 为 86.7。Reasoning 从 86.4 升至 95.8 和 95.7，但 Chat 从 99.4 变为 98.3/98.2，Chat-Hard 从 65.1 变为 63.9/66.3，Safety 从 87.8 变为 85.1/87.8。分布内评测中，两次迭代后的策略在随机抽取的 2000 条 UltraFeedback test 提示上生成响应，再由 GPT-4-Preview-1106 对 RM 的成对选择做判断；图 3 报告更新 RM 的相对结果逐步改善，但这仍是模型评审，不是人类伪标签审计。（论文 §5.2、图 3、表 2）

数据类型消融直接支持混合数据构造主张。论文比较仅用 self-training 数据、仅用 policy-comparison 数据以及两者混合训练 RM。仅使用 self-training 时，相对混合设置，后续策略在 AlpacaEval 与 Arena-Hard 上分别下降 6.3 和 3.5 个点；仅用 policy-comparison 也不如混合设置，论文报告其策略影响较小，但 RM 有所下降。附录 F 对比不同筛选方法：最终采用的 Low-Quality Data Filtering 在 AlpacaEval-2 上更好，而 High-Quality Data Selection 与 Direct Self-Training 在 RewardBench 上略好。这说明存在任务相关权衡，不能据此认定某个筛选规则会生成普遍正确的 pair。（论文 §5.3、图 4；附录 F、图 7）

另外两组结果界定了泛化边界。当迭代 RM 用于指导 Mistral-7B-Instruct-v0.2 在 UltraFeedback 上进行一次 DPO 时，AlpacaEval-2 长度控制胜率从基础 RM 的 42.0 提升到 Iter1 RM 的 45.5 和 Iter2 RM 的 46.8。但附加 Open LLM Leaderboard 表中，Mutual-Taught 在 GSM8K 上低于基础模型（70.67 对 75.21），在 MMLU 上也更低（64.13 对 65.71），同时 HellaSwag 从 78.48 升到 81.37，TruthfulQA 从 51.64 升到 55.21，平均值只从 67.76 变为 67.85。这些结果不足以证明广泛的推理能力提升。（论文表 3；附录 G、表 4）

扩展迭代实验提供了重要负结果。把原来的 4 万条策略提示分成四份后，AlpacaEval-2 长度控制胜率依次为 34.7、41.0、44.9，随后降到 40.3。第 4 次迭代中，选中 checkpoint 的模型选择胜率为 57.7%，低于 `tau=60%`，因此 early stopping 返回第 3 次迭代策略。这表明稳定规则对一次实际退化作出了反应，但不能证明 RM 验证标准总能识别真实偏好退化。（附录 H、表 5）

以上数值均为作者报告，本 Card 未独立复现。它们支持的是特定模型、提示来源、judge 与预算下的策略/RM 协同训练配方，而不是对生成偏好 pair 的人类正确率、保留/丢弃 pair 精度、RM 校准、污染或发布质量的测量。artifact 核查还显示复现边界：论文确实印有 GitHub 地址，但其当前唯一分支只是 Alignment Handbook 快照，没有 Mutual-Taught 专用实现、配置、数据、checkpoint、tag 或 release。
