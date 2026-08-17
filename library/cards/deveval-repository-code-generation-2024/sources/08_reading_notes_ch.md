要分开三类标签：功能 Pass@k、依赖 Recall@k、失败案例分析。模型可能找对依赖但测试失败，也可能通过测试却没有完整依赖解释。

阅读顺序建议先看论文的构造和分数，再看 GitHub README 的字段和运行约束。比较 DevEval 分数时必须写清上下文条件和具体 data/source-code artifact。
