对于一条优选—劣选回答对，AAO 从模型取得词元嵌入，并计算每个词元与另一回答词元之间的最大归一化相似度。一个多层感知机从输出 logits 预测有序阈值 a 与 b。相似度高于 a 时得到 (1-S)^2 的含混权重，低于 b 时得到 1+S 的关键词元权重，中间区域权重为一；可微近似使阈值能够学习。这些权重被施加到偏好优化的输出 logits 上。

作者在 Llama-3.1-8B 与 Mistral-7B 的基础版和指令版上，以批大小 16、学习率 5e-7 的 AdamW 训练一个轮次。开放域实验让基础模型先经 UltraChat-200k 准备，再使用 UltraFeedback；安全实验让模型先经 Alpaca 准备，再使用 Anthropic-HH。比较对象包括 DPO、IPO、KTO、SimPO、TDPO、RTO、TIS-DPO 以及随机加权的 DPO 对照。
