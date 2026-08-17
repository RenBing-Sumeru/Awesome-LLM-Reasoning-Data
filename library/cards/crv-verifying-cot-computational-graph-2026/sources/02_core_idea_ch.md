CRV 的核心对象不是回答文本分数，而是步骤前后模型计算形成的 attribution graph。官方 `facebook/crv` 数据约 807 MB，覆盖算术、布尔表达式和 GSM8K，包含 Llama-3.1-8B-Instruct 的原始分步 CoT、终局值、步骤标签及重建图所需上下文；标注仅保留 LLM judge 与程序验证一致的步骤。

数据同时保留终局标签与步骤索引，便于在同一实例上比较文本判别和图结构判别。
