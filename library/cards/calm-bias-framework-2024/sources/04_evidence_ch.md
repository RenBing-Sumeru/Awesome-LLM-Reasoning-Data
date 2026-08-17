论文的证据是对多个常用 LLM judges 做跨模型偏差测量。核心发现是：强 judge 可以总体表现不错，但在特定任务或扰动类别上仍有显著偏差，所以高 aggregate judge quality 不保证评分可靠且无偏。

行级证据是一对扰动前后样例，以及 judge 在两个条件下的输出。决定性审计问题是：在任务相关质量保持不变时，修改的 cue 是否改变了 judge 决策。证据边界是 semantic fidelity：如果扰动改变了答案质量、难度或上下文，bias score 就不干净。模型版本漂移和闭源 API 更新也限制复现。
