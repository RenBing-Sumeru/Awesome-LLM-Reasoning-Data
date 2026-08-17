读这篇时要把它当作指标去偏论文，而不是原始 AlpacaEval 数据集论文。三个 claim 必须分开：raw AlpacaEval win rate、length-controlled win rate、以及与 Chatbot Arena 或人类偏好的外部相关性。

建议阅读顺序是：先看长度偏置为什么会造成失败，再看反事实 GLM 调整，再看 leaderboard/相关性证据，最后看自动 judge 的局限。下游不能把“LC win rate 提高”简化成“模型回答正确”；它只表示在报告设置下，这个自动评测器的分数更少被输出长度主导。
