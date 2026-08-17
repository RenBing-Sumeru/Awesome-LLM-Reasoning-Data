Rubicon 采用 rubric-first 循环。报告中的反馈对象包括 instruction–rubric 对、模型响应、critic 分数和用于优化的奖励。一个 rubric 被形式化为若干维度：每维含评价准则描述、映射到数值的有序评分档位，以及权重；框架据此产生多维分数，并讨论将其聚合为标量奖励。论文报告拥有超过 1 万个 rubric，但未发布完整 rubric 库或其记录模式。

