语言模型流水线首先对每个 SFT 模型训练一个 epoch。随后,SFT 策略以温度 1.0 采样 278,496 对回复。在主要的 gold-model 设定中,Skywork-Reward-Llama-3.1-8B-v0.2 为两个回复评分,并总是把分数更高者标为胜者;标签不是按 Bradley-Terry 概率随机采样的。这些固定三元组用于训练初始 Bradley-Terry 奖励模型。

提示来源包括 Huang 等人的 summarization-from-feedback 复现流程所整理的 TL;DR 数据,以及源自 Alpaca-Farm 的修改版 Alpaca-Instructions。Alpaca 处理中会删除超过 512 个 token 的查询和超过 106 个 token 的输出,并在训练 SFT 和生成比较对之前,把原本用于 SFT、奖励建模和 PPO 的训练划分合并。评估使用过滤后的验证集,而不是 AlpacaEval。

完成一段策略训练后,实现会分别用当前策略和原始 SFT 策略计算每条固定胜者、败者回复的概率。两个回复的联合序列概率比定义校正项。所有语言模型实验在重训奖励模型时都采用 `eta=0.001`、`alpha=0.9` 的扁平化相对权重。因此,原始记录与标签始终不变,变化的是各记录在不同阶段对损失的贡献。

刷新后的奖励模型用于下一段 PPO。KL 参照从原始 SFT 策略改为上一阶段策略,因为刷新后的奖励模型预期在该分布附近更准确。奖励模型切换时,PPO 的价值网络参数与 AdamW 优化器状态都会重置。PPO rollout 温度为 0.7,评估生成温度为 0.01。

主要 OCRM 运行每生成 100,000 个策略训练样本刷新一次,并报告两阶段或三阶段结果;论文还给出单随机种子的五阶段 Pythia-1B TL;DR 扩展。主要基座模型是 Pythia-1B-deduped 和 Qwen2.5-1.5B,Pythia 6.9B 实验改用 GRPO。这些阶段、KL、重置和 rollout 选择属于公开配方,而不是偏好数据中新增的字段。
