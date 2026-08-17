阅读时记住三条边界。第一，formal proof 证明的是编码后的 theorem，不自动证明自然语言题意完全忠实。第二，leaderboard aggregate success 不是样本级证据；样本级证据必须落到 accepted proof 和 checker environment。第三，PutnamBench 可以是很强的 evaluation surface，但不等于可以无审计地当训练语料。

阅读顺序建议：先看 arXiv 页面确认引用和 NeurIPS Datasets and Benchmarks 状态，再看项目页/仓库确认当前数量、语言覆盖、license 和维护政策。arXiv v2 数量与 live 项目/仓库数量要分开记录。下游使用时，Lean、Isabelle、Coq、answer-given、answer-finding 结果都必须显式打标签，不能混成一个分数。
