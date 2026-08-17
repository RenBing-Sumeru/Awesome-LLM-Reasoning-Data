普通代码生成依靠有限测试判断正确性，模型可通过过拟合样例、硬编码或规格歧义获得高分。已有形式验证代码集有时直接提供泄露实现逻辑的 specification，或使用 LLM 生成标注和容易出现空洞证明的目标，使“证明通过”并不代表模型从自然语言正确推导规格并实现程序。缺少高质量 benchmark 阻碍端到端 verified code generation 的比较。

CLEVER 手工整理 161 个 Lean 问题，每题分两阶段：先根据函数签名、docstring 和测试信息生成与隐藏 ground-truth 等价的形式规格，再生成能够被证明满足该规格的 Lean 实现。最终输出由 Lean type checker 后验验证，而不是由测试通过或 LLM judge 判定。
