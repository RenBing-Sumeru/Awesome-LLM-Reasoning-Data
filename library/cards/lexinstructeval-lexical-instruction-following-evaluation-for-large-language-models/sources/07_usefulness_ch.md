1. **确定性指令奖励：** 把三元组与验证器用于 RL 或拒绝采样，奖励精确遵循；同时记录 rule-level 失败，避免只保留总分。

2. **verifier 审计：** 修改分词、Markdown 清理和 loose transformation，比较人工一致率，定位规则奖励的假阴性与假阳性。

3. **多语言扩展：** 复用语法和冲突过滤生成新语言数据，但需本地化 sentence/word/character parser 并重新人工质检。
