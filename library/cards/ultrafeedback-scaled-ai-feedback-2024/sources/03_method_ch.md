指令池结合了 TruthfulQA、FalseQA、Evol-Instruct、UltraChat、ShareGPT 以及从 FLAN 中分层抽取的样本。作者收集了 17 个模型的回答，随后在提示中提供评价准则和参考答案，让 GPT-4 先写出评析，再给出分数与排序。

作者利用已标注的集合训练了 Llama 2 13B 奖励模型 UltraRM，也训练了评析模型。论文接着在最佳候选选择和 PPO 实验中使用该奖励模型，从而把构造出的反馈记录连接到具体的策略训练使用方。
