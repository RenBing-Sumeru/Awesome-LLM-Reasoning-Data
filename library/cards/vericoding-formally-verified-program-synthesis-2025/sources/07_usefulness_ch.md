1. **跨 verifier 评测：** 用统一模型、prompt、采样数和 timeout 分别运行 Dafny、Verus、Lean，报告编译、验证与语言/来源分层成功率，而非只给总平均。

2. **RLVR 数据：** 将文件组装和 native verifier 输出作为 reward；可以分语法、类型、verification 和资源超限四级，但必须扫描 `assume false`、`sorry` 或弱规格利用。

3. **spec repair/迁移：** 使用 `issues` 训练修复翻译后不可编译规格，使用 source ID 研究跨语言迁移。若要声称语言本身差异，应另外构造功能一致的平行任务，不能直接比较现有 3,029/2,334/7,141 子集。
