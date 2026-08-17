1. **Text-to-SQL SFT：** 使用 89,544 条全量或 67,570 条 SELECT-only 子集微调，并按数据库留出评测执行准确率。

2. **RLVR 奖励：** 将 SQL 执行、结果等价和结构约束组合成 reward；执行异常与空结果应单独标记。

3. **检索增强：** 训练 masked alignment retriever，为闭源模型选择结构相近示例；禁止从目标 benchmark 泄漏 SQL skeleton。
