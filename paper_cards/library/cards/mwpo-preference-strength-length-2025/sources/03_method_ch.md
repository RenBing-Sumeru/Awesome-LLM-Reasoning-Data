对于每条指令和偏好回答对，该方法从策略相对参考模型的对数概率比计算优选与劣选回答的隐式奖励。它们差距的 sigmoid 值形成奖励权重。它再从劣选与优选回答词元数的缩放差值计算第二个 sigmoid；当优选回答更长时，该权重会降低。混合系数以几何方式结合两种信号，所得数值缩放 DPO 损失，而权重本身不参与反向传播。

论文训练了 Mistral-7B-Base、Qwen2.5-1.5B-Base、Llama-3.2-3B-Base 与 Llama-3-8B-Instruct 的全参数。基础模型先用 UltraChat-200k 做指令微调，再在 UltraFeedback-binarized 上优化；指令模型使用由 PairRM 标注的 Princeton Llama3 UltraFeedback 回答对。它在 AlpacaEval 2 和五个下游基准上比较 DPO、RRHF、IPO、KTO、CPO、R-DPO、SimPO 与 WPO。
