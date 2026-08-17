第 4 节列出八个公开资源：AquaRAT（98K）、Ape210K（210K）、MetaMathQA（395K）、MathInstruct（262K）、TAL-SCQ5K（5K）、OpenR1-Math（220K）、Bespoke-Stratos-17k（17K）与 OpenThoughts-114K（114K），另有若干内部种子数据集。来源已有推理标注时直接使用；否则只保留问题，由 DeepSeek-R1（671B）采样约 8 个 CoT 响应。报告合计约 160 万个样本、1,000 万条 rollout。数学验证工具检查可验证答案；由于它可能把复杂的正确解判错，GPT-4o-mini 会复核最初标为错误的 rollout。记录还带有领域、难度和重复模式标签。精确混合权重、样本级来源、提示、各步保留量与许可证均为 unknown。

中训练使用完整构造集，并通过拒绝采样保留正确响应；设置为 16K packing 序列、batch size 128、learning rate 1e-5、5 个 epoch 和 0.1 warmup。SFT 选择数量未披露、难度高于大学水平的紧凑子集，使用 20K non-packing 序列，并沿用报告中的相同 batch、学习率、epoch 与 warmup 设置。DPO 使用高中及以上难度问题的正确/错误配对，序列长度 16K、learning rate 5e-7、训练 1 个 epoch；偏好对数量与筛选产率未报告。

RL 部分讨论 GRPO，并报告三类稳定性问题：同组正奖励响应长度约在 12K 至 20K token 之间波动、组内奖励一致时梯度消失，以及训练探索温度与评测温度不匹配。其配方会对多个候选提示反复采样，只保留响应长度相对一致的提示；对困难提示过采样，保留全部正样本并随机抽取等量负样本；过滤组准确率高于示例阈值 50% 的过易提示；并在前半程把温度从 1.0 线性降到 0.6。RL 使用 learning rate 5e-7 和 25K 序列。最终 RL 算法代码、rollout 组大小、提示池、verifier 实现与其余优化设置均未发布。

