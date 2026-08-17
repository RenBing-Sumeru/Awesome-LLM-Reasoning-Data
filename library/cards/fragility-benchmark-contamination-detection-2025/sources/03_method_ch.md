1. 制作成员数据。作者以 10K 条 OpenThoughts3 为干净 SFT 数据，使用 QwQ-32B 蒸馏基准成员的 CoT（64 次 rollout、temperature 0.6、top-p 0.95），并将成员重复 3 次；基座模型为 Qwen2.5-7B-Instruct 和 Llama-3.1-8B-Instruct。

2. 运行两条管线。阶段 I 在污染 SFT 后，以 4,096 条干净 DeepMath-103K 样本混合做 1 个 epoch 的 GRPO；阶段 II 对成熟推理模型做大量成员 CoT SFT。正确性提供 RL 奖励，PPO 的重要性采样与 clipping 被认为是隐藏机制。

3. 审计检测。每个基准的一半为成员、另一半为非成员；检测器为“问题—回答—模型”组合打分并报 AUROC，阶段 II 对 8 次 rollout 平均。复现须固定公开 arena 和基准划分；许可与随机种子仍需核验。
