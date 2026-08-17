1. **细粒度 prover 训练：** 使用 lemma statement—proof 对进行 SFT，并按来源问题划分训练和测试，避免同一完整证明的相邻步骤泄漏。

2. **错误诊断：** 将失败按 proof length、领域、是否需要 lemma retrieval、自然语言正确但 Lean 错误等类别统计，定位模型是数学计划不足还是形式化实现不足。

3. **课程学习：** 从短 lemma 逐步扩展到同一问题的长依赖链，再评测能否组合成完整证明。成功标准应同时报告 lemma accuracy 和 full-theorem success；若只需要大规模普通 Lean 训练数据，1,329 条规模不足以单独承担预训练。
