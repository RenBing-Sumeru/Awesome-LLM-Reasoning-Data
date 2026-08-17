1. **单一设计源：** 342 模块来自 BaseJump STL，硬件风格和层级模式有限；泛化到工业 SoC 需新数据。

2. **参考断言依赖：** LLM-in-the-loop 参考 SVA 可能遗漏真实规格，formal tool 只能验证给定属性；需领域工程师审阅 faithfulness。

3. **工具与参数敏感：** formal core、超时和 proof 结果依赖工具版本与约束；复现必须锁定 solver、参数和硬件资源。
