选择器用已对齐的 DPO 策略及其 SFT 参考模型为两个回答打分，计算优选减去拒选的隐式奖励差，将所有样本对按升序排列，并保留指定百分位。所得子集可训练独立的下游模型，不要求选择器与目标模型共享架构。

论文使用 LLaMA3-iterative-DPO-final 和 LLaMA3-SFT 为四个来源打分，再训练 Gemma-2-2B-it 奖励模型或以 DPO 训练 Tulu3-Llama3.1-8B-SFT。主要比较保留 SHP、Skywork、UltraFeedback 或 RLHFlow 记录的 10%。
