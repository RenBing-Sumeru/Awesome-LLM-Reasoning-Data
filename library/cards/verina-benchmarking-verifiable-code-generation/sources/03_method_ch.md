1. **整理编程题：** 作者选择具有清晰函数行为的任务，人工编写自然语言说明和 Lean 签名。

2. **建立四类 artifact：** 为每题实现参考代码、形式规格、机器可检查证明和覆盖正常/边界输入的测试。

3. **独立任务评测：** 分别让模型生成代码、规格或证明；代码由测试与 Lean 类型检查，规格检查 soundness/completeness，证明由内核编译。

4. **组合上下文实验：** 给 CodeGen 提供参考或生成规格，给 SpecGen 提供代码，再评估上游 artifact 质量如何传播。

5. **统一统计：** 以每题单次或多次采样的 code correctness、spec success 和 proof success 汇总。
