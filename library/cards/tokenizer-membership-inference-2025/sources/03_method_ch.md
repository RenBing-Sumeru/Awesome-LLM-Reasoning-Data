1. **定义博弈。** 选定目标 BPE tokenizer、候选语料、辅助语料、词表大小，以及“是否进入 tokenizer 训练”的成员标签。
2. **构造 shadow 证据。** 在候选组合上训练 shadow tokenizer；Merge Similarity 比较 merge 顺序，Vocabulary Overlap 提取与成员 shadow 共享的目标特异 token。
3. **降低成本。** Frequency Estimation 只训练一个 shadow tokenizer，以 token 排名/频率拟合幂律信号，判断候选语料是否是至少一个目标 token 出现的必要条件。
4. **打分与判定。** Naive Bayes、Compression Rate 为补充基线；各方法输出分数，经阈值后给出成员或非成员。
5. **评测与缓解。** 报告 ROC/AUC、TPR@1% FPR、时间、词表和数据规模，并测试 min-count 或受 DP 启发的随机 merge 防御；固定语料版本、实现、随机种子和辅助数据协议。

候选语料与辅助语料应严格分离，并记录阈值选择过程；否则评测标签泄漏或调参会虚高表观攻击效果。
