先前基线有两类：一类是自然语言竞赛数学评测，只能较容易检查最终答案，无法机械验证证明过程；另一类是已有 formal theorem-proving benchmark，但题型、难度或证明助手覆盖更窄。PutnamBench 的新意是把高难度本科竞赛数学系统性编码到多个证明助手里，并把通过条件绑定到 proof assistant acceptance。

方向信号在于它把 theorem statement、candidate proof、checker result、语言 substrate、污染策略分开了，适合作为推理数据质量审计样本。不是新的部分也要写清：Lean/Isabelle/Coq、Putnam 题和 kernel/compiler checking 本身都不是新机制。复用前要检查 arXiv 与项目页数量差异、具体语言子集、各语言 license、是否需要 MAA 授权的 informal statement，以及公开 formal proof 是否会污染未来评测。
