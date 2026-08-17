阅读时先看数据构造和评分流程，再看榜单。关键边界是 benchmark 难度不等于 verifier 覆盖范围：题很难并不意味着所有答案都能自动验收，证明类答案尤其要单独看。

full benchmark、text-only、数学、物理、英文、中文、开放式题和证明题的结论要分开。aggregate accuracy 是模型比较数；单条样本证据是特定评分策略下的 evaluator 判定，或证明/文本题的人工判断。
