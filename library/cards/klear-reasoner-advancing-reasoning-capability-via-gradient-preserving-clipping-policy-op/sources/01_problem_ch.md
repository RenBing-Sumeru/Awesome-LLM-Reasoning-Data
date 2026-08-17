标准 PPO/GRPO 在策略比率越过 clipping 区间后会把对应 token 梯度截为零，长推理中的错误或低奖励轨迹因此被大量丢弃；数据侧若只保留当前模型能解出的题，也会形成易题偏置。结果是 RLVR 虽稳定，却不能充分利用困难 prompt 和负样本。

Klear-Reasoner 构造难度更高、不过度按当前准确率筛选的 MathSub 数据，以长 CoT SFT 冷启动，再用 Gradient-Preserving Clipping Policy Optimization 让被裁剪 token 仍保留温和梯度。
