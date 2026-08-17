1. **建立专家种子：** 专家手工将 91 道题写成 Rust/Verus 规格、实现和证明，规定允许的语言特性与无作弊约束。

2. **agent 扩展：** coding agent 从 LeetCode/Codeforces 题生成规格、Rust 代码和证明；不支持的特性或无法在时间预算内完成的任务删除。

3. **双重验证：** 实现先通过原在线 judge，再由 Verus 编译和证明；专家检查是否使用 `assume`、不安全逃逸或将答案写死。

4. **测试规格充分性：** 由 verified generator 产生正测试并测行覆盖率，mutation 生成负测试；Post2Exe 执行后置条件，发现约 60 个不完整规格后修订。至少两名专家复核，复现需固定 Verus/Rust、judge 数据和时间上限。
