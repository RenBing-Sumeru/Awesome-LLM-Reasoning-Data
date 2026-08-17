读这篇时要把它当作评测基础设施论文，而不是某个模型“理解语言”的证明。最容易混淆的边界是：排行榜聚合进展和逐实例任务正确性不是同一件事。

阅读顺序建议：先看 Table 1，确定任务对象和指标；再看 Section 3 的任务选择标准；接着看 Section 4 的提交和数据使用规则；最后用 Table 3 与 Appendix C 核对基线和人类估计。

下游必须分开三类标签：主任务分数、broad-coverage diagnostic 结果、Winogender bias diagnostic 结果。它们回答的问题不同，除非官方评测定义要求，否则不应合并。
