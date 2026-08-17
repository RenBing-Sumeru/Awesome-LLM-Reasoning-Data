CDG 的关键监督不是普通 self-correction，而是同时施加两个相反目标：批评真实有效时要接受，批评针对正确答案而伪造时要拒绝。这样，纠错能力与抗误导能力都成为游戏结果，并都可以转成训练样本。

它不等同于 process reward model，因为没有逐步给推理打分；也不同于由外部 judge 裁决的 debate，因为角色路由依赖标准答案正确性，最终仍看修订后的答案。与常规 rejection sampling 相比，它不仅训练消费反馈的 Prover，也训练产生反馈的两个 Critic。Helpful Critic 与 Misleading Critic 使用相近 prompt，减少最明显的风格线索，但具体内容仍可能泄露角色。

若保留所有分支，这种 episode 对审计很有价值：可以检查 critique 是否被采纳、采纳后是否纠错，以及对抗 critique 是否把正确答案带偏。若发布物只剩最终 SFT 对话，而没有初始正确性、角色、多次 revision、拒绝原因、轮次和 verifier 来源，这种价值就会显著丢失。
