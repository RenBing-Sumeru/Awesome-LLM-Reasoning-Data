Length-Controlled AlpacaEval 是 2024 年 arXiv 论文，并标注为 COLM 2024。它要解决的问题很具体：LLM 自动评测器常常偏爱更长的回答，因此 leaderboard 的胜率可能奖励“写得更长”，而不是更好的指令遵循质量。

这张卡收的是一个自动偏好评测的去偏面：一条 AlpacaEval 指令、候选模型回答、基线/参考回答、LLM auto-annotator 的成对偏好、输出长度差，以及 raw win rate 和 length-controlled win rate。边界是 judge/reward meta-evaluation 与 benchmark audit；它不是新的指令数据集，也不是人工评测流程，更不是训练配方。它对 atlas 的价值在于把反馈契约拆开：先由自动 judge 给偏好，再用长度控制估计“如果两边回答等长，偏好会怎样”。
