核心贡献是一套面向噪声文档集合的长上下文数学推理自动 benchmark。机制是收集近期真实文档，用 LLM 生成问题和 Python 解法，通过独立解法一致性过滤，再把相关文档插入长 haystack。

单条样本包含主题元数据、相关文档、无关文档、问题、由 Python 解法得到的答案，以及文档位置和输入长度设置。反馈契约是模型最终数值答案与已接受解法答案一致，通常是精确或规范化匹配。

最接近的参照是 Needle-in-a-Haystack、RULER、BABILong、LongBench、InfiniteBench、DocFinQA 和 DOCMATH-EVAL。MathHay 的方向标签是长上下文检索加计算评测。
