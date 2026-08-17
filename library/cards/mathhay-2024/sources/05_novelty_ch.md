已有长上下文 benchmark 多测检索、摘要或一般推理，已有数学 benchmark 多是短 prompt 自包含题。MathHay 改变的是数据对象：把数学推理问题嵌入真实、冗长、含噪的文档 haystack。

方向信号是同时评测检索和算术推理，并施加上下文长度与文档位置压力。质量信号来自清晰任务分类、Python 解法一致性过滤、verified 子集和可控 haystack 构造。

不新的是 LLM 生成题、Python 执行求答案和 Needle-in-a-Haystack 式位置控制这些组件。复用前要查生成 prompt、按日期收集的文档 lineage、答案规范化、verified/unverified split、是否有公开 artifact，以及许可证。
