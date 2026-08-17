IFEval 是 Google Research 在 2023-11-14 提交的 arXiv 预印本，目标是把“是否遵循指令”从人工偏好评审或 LLM-as-judge 中拆出一块可复验的规则评测面。

一个样本由 prompt、一个或多个可验证 instruction 约束及其 checker 参数组成，约束覆盖长度、关键词、语言、大小写、格式等。当前卡片记录的公开版本是 541 条 prompt、25 类 instruction；论文摘要写作 around 500 prompts 和 25 类，因此复用分数时必须固定仓库版本。

收录边界很窄：它评估规则可检查的指令遵循，不评估回答真实性、帮助性或复杂任务完成，也不是训练数据配方。它对 atlas 的价值在于每条结论都能回到程序 checker，而不是只留下主观打分。
