RewardBench 的总准确率只能说明 RM 是否选对 chosen，无法判断模型究竟编码了正确性、帮助性、安全性还是长度等表面特征；两个总分相近的模型可能拥有完全不同的偏好表示，难以预测其在 PPO 中的真实价值。

论文提出多维 probing 框架和 MRMBench，把偏好能力拆为 harmlessness、helpfulness、correctness、coherence、complexity 与 verbosity 六维，并用容易的二元 probe 与更难的三元判断诊断 reward representation。
