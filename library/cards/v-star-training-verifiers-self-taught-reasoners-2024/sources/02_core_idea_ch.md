V-STaR 维护两个 buffer。`D_GEN` 保存原始监督解和所有被标为正确的自生成解，用于训练下一轮 generator。`D_VER` 保存原始解以及所有带标签的生成，无论正确或错误。完成迭代采集后，同一道题的解被展开为全部正确—错误组合，形成用于 DPO verifier 的 synthetic preference pairs。

该 verifier 是 language model，而不是 scalar classification head。DPO 相对于一个 SFT reference policy 提高正确解对错误解的 likelihood。推理时，完整候选在给定问题下的 likelihood 就是 ranking score；系统从采样集合中选择得分最高的候选。因此原生对象分别是 terminal binary label、同题 pairwise preference 和学习得到的 sequence-likelihood score。

主循环不让学习得到的 verifier 决定哪些样本正确。GSM8K final answer 与 MBPP test execution 提供构造标签，verifier 则在 buffer 累积完成后训练。可选的 verifier-in-the-loop 实验属于单独变体，且没有带来显著的 MBPP 增益。这种分离减少了数据采集阶段的直接 feedback-loop gaming，但不能消除 terminal-label error 或测试时的 score gaming。
