NeurIPS 2024 官方论文研究拒绝调优数学数据中的一种构造缺陷：若给每个 prompt 分配相同数量的原始响应，简单题会留下许多通过验证的回答，而难题覆盖不足。论文对 MetaMathQA-MATH 的分析显示，51.1% 的 MATH Level-5 训练题没有获得任何新增响应；但只要对部分测试题投入足够多的 DeepSeekMath-7B-RL 试验，最终通常仍能采样到正确答案（论文 §2，Figure 2）。

DART-Math 研究在 supervised instruction tuning 之前，如何把固定推理预算分配给原始 MATH 与修正版 GSM8K 训练题。最终训练记录是一组 `query` 与自然语言 `response`；更丰富的已接受响应池还保留来源与响应 ID、参考答案与抽取答案、正确性、生成器和解码元数据，query-info 表则保留采样计数与通过率。反馈只判断终局答案是否一致，并不判断每个推理步骤。

它属于 Data Construction and Open Release Recipes，因为核心干预是改变哪些已验证轨迹能留下来的预算分配与过滤流水线。它不生成新题，不提供步骤标签，不使用交互环境或代码执行推理，也不采用 RLVR 目标。本 Card 以论文、附录、仓库和官方 Hugging Face artifact 为依据，覆盖配方、发布 schema、受控 VRT 对比、代码边界与未解决审计项，因此达到 L4。
