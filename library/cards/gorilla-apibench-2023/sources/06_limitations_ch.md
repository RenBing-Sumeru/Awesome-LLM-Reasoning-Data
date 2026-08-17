AST matching 可能漏掉语义运行失败，也可能奖励语法看似合理的调用。实时 API、包和文档会在发布后漂移。

结论不能超出已披露的来源、split、scorer、judge、runtime 或 artifact policy。公开 release 也可能成为后续模型训练污染。

如果把 benchmark 信号复用到训练、过滤或 reward 设计中，反馈契约需要独立于 headline score 再审一遍。
