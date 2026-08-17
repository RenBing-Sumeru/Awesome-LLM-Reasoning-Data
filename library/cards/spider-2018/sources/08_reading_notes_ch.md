阅读时要把 exact-set match 和 execution accuracy 分开。它们相关，但认证的是不同对象：SQL component 结构匹配，以及当前数据库上的结果相等。

看模型分数前先看 split policy。Spider 的核心贡献是 cross-schema generalization；任何泄漏数据库 schema 或样本的评测都会改变 benchmark 含义。
