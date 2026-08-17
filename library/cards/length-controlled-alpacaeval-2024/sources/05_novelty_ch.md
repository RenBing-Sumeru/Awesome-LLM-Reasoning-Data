已有基线并不空白：AlpacaEval、AlpacaFarm、Aviary、MT-Bench 和 Chatbot Arena 已经把成对偏好或 judge-based evaluation 变成指令模型比较的常用方式。这篇的新意在于报告契约变化：分数不再只是“judge 多常偏好这个模型”，还要回答“控制输出长度后，judge 还会多常偏好它”。

这个方向信号有价值，因为很多 benchmark 修正需要新人工数据或隐藏任务，而这里把 evaluator bias 当作已有公开 harness 中可测量的混杂因素来处理。质量信号是 leaderboard 相关性提升和 length gameability 降低。不是新的部分包括 LLM-as-judge、成对偏好和 AlpacaEval 本身。复用前要检查 judge、baseline、prompt、cache 和数据版本是否与报告设置一致。
