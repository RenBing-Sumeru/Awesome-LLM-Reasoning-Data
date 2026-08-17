核心贡献是一个中文法律 benchmark，用法律记忆、理解、应用三个层级评估 LLM，而不是给出单一法律 QA 分数。机制是整理代表性法律任务、标准化 prompt，并通过 OpenCompass 评测流水线运行模型。

单条数据对象包含法律文本或问题上下文、期望答案和任务元数据。反馈契约是官方 evaluator 的 answer-level scoring，通常是 exact match 或任务特定的分类/抽取指标，再汇总到 task 和 level。

最近对比对象包括 LegalBench、MMLU 式法律子集和中文法律 QA 数据集。LawBench 的区别在中文法律材料和分层认知 taxonomy。方向标签是 jurisdiction-specific legal reasoning 的 domain-expert evaluation surface。
