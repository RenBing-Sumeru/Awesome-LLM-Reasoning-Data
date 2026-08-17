阅读时先看构造流程，再看结果表。关键区分是 verified 与 unverified、单/多文档 grounding、单/多步计算，以及上下文长度与文档位置。

Python 答案一致不是语义正确证明。比较模型时必须固定 haystack 长度、位置策略、数值匹配规则和任务子集。
