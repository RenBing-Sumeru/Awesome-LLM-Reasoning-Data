TP-as-a-Judge 将定理证明器结果变成数据分配契约。题目先被转换为 CoMAT 风格的符号表示，再由 GPT-4o 形式化为 Lean，反向翻译为自然语言，并由第二次 GPT-4o 调用检查对齐。只有通过对齐检查的题目才进入后续流程。随后逐步形式化两个生成解答；Lean 返回 Verified、False 或 Error，Error 的诊断信息会进入迭代修复循环。

两个回答的最终结果共同决定用途：Verified/Verified 提供 SFT 样本，Verified/False 提供 DPO 偏好对，False/False 被丢弃，未解决的 Error 被排除。这样，验证器既是过滤器，也是形式化修复的反馈源。但它本身不能证明形式陈述忠实表达了原始自然语言任务。
