输入包括每条指令上的候选模型回答、参考模型回答、选定的 AlpacaEval auto-annotator 配置，以及计算输出长度所需的元数据。流程可以按五步理解：

1. 对每条 instruction，把候选回答和参考回答配成一对。
2. 随机化回答顺序，调用 AlpacaEval 自动评测器得到偏好或偏好概率。
3. 对偏好取平均，得到 raw win rate。
4. 拟合一个包含候选/参考回答长度差和比较特征的广义线性偏好模型。
5. 将长度差设为 0，预测反事实偏好，再平均成 length-controlled win rate。

输出不是新的单样本正确性标签，而是 leaderboard 指标和评测器诊断信号。复用时必须固定 AlpacaEval 版本、参考模型、annotator 配置、模型输出、cache 状态、API 模型版本、prompt 模板和 leaderboard 日期，因为这些都会改变实际的偏好面。
