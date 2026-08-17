1. **人工策划任务：** 选择可在 Lean 中表达的程序问题，编写函数签名、docstring、示例测试和不泄露实现的自然语言需求。

2. **建立隐藏规格：** 专家给出 ground-truth formal specification，并检查它排除常量答案、矛盾前提和其他 vacuous solution。

3. **评测规格生成：** 模型输出 Lean specification；系统要求生成或检查其与隐藏规格之间的同构/等价 theorem，Lean 通过才进入下一阶段。

4. **评测程序生成：** 模型生成 Lean implementation、correctness proof 和必要 lemma；只有全部类型检查通过才算端到端成功。
