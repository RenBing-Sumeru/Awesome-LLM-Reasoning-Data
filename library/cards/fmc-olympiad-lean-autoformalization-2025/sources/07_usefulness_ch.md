1. **autoformalization 训练：** 用自然语言题和多个 Lean 陈述做 SFT，按编译状态和质量分筛选，并在未见竞赛上测 statement compile rate 与人工忠实度。

2. **prover benchmark：** 对每个可编译 statement 生成证明，由 Lean 内核判定成功；需要按同一自然语言题分组，避免多候选跨 split 泄漏。

3. **流程迁移：** 对其他 Lean 领域复用“多采样—编译反馈—质量审计”。若目标语言缺少稳定编译器错误或题目包含图形等未形式化信息，流程需增加专用解析与人工检查。
