这篇论文的新意不只是“又用了一个 verifier”。更有意思的是，它把 verifier 的 false negative 看成一个可以修正的训练信号问题，而不是默认规则 verifier 的拒绝就是最终结论。

相比只依赖精确答案检查的流程，TinyV 增加了一个学习型修正层，会影响哪些 rollout 被当成正奖励样本。
