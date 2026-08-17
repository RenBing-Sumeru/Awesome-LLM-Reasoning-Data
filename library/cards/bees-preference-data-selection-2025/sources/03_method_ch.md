BeeS 先在 2,000 个随机种子样本对上对小模型进行 DPO 训练，以获得低成本、分布内的隐式间隔。它从该模型和 Skywork-Reward-Llama-3.1-8B-v0.2 计算优选回答相对拒选回答的间隔，将间隔校准为概率，用贝叶斯规则聚合，再选择置信度最高的样本对供目标模型进行 DPO。

论文将该规则应用于 TLDR、Helpful and Harmless、UltraFeedback 以及在策略 UltraFeedback 变体。离线研究选择 2,000 或 6,000 个样本对；迭代 DPO 的三轮中，每轮从 20,000 个提示开始并保留 5,000 条记录。所得子集还用 IPO、KTO 和 SLiC 进行测试。
