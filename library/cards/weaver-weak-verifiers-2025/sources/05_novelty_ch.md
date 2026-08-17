既有重复采样系统通常按答案频率、单个 reward model、单个 LM judge 或无权平均来选择。加权有监督集成和经典 weak supervision 早已存在，但前者需要标签，后者假定弱信号源的行为能够通过一致性统计表示和识别。

Weaver 的具体贡献是把该 weak-supervision 机制适配到异构 verifier 输出：稳健分数归一化、二值转换、类别比例感知的边际过滤、由两两投票矩估计非对称 TPR/TNR，以及后验回答选择。由此，verifier 数量与多样性成为明确的测试时扩展轴，而不是把 verification 当成单个固定 scorer。

第二项贡献是把昂贵标签构造与部署在操作上分离。集成后验成为 396M cross-encoder 的 soft supervision，使高成本多 verifier 决策规则能够由一个紧凑模型近似。

同样需要说明哪些并非新意。Weaver 没有提出重复采样、reward model、LM judge、process reward model、Naive Bayes、weak supervision 或 knowledge distillation；它不提供程序化正确性保证，不能消除“候选中必须有正确答案”的条件，也没有证明 verifier 越多一定越好，论文反而观察到边际收益递减和相关偏差。复用研究应与多数投票、最强单 verifier、预算匹配的无权集成、有监督上界和固定总计算量基线比较。
