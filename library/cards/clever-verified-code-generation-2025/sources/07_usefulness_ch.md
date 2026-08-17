1. **端到端 vericoding 评测：** 分别测规格等价率、实现证明率和完整成功率，固定 Lean 版本与 proof budget。

2. **分阶段训练：** 先在 NL→spec 上 SFT，再用 spec equivalence 和 correctness theorem 作为 verifier 做 RL；不能把隐藏 ground truth 暴露给策略输入。

3. **数据扩展：** 复用人工规格审计、vacuity 检查和双证明合同构建新任务。若目标性质不能在 Lean 中精确表达，或只需要普通运行正确性，应选择测试型 benchmark 而非强行形式化。
