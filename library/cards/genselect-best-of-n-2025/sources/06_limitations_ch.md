selector 看到的是摘要，而不是原始长推理轨迹。摘要可能省略局部代数错误、回溯后的无效修正，或足以改变比较结论的不确定性。论文关于“没有显著收益”的预实验表述没有附带可发布的消融语料，也没有提供足够细节来审计 summarizer 保留了什么信息。QwQ 摘要由 Qwen2.5-32B-Instruct 重新生成，使 lineage 中又加入一个模型的压缩行为。

Self-GenSelect 使用同一个推理模型生成候选并充当 selector。因此，共享的模型先验、答案格式习惯或相关数学错误可能同时穿过两个阶段。生成式 `Judgment: IDX` 也是脆弱接口：格式错误、越界索引，或 rationale 与最后一行不一致时，都需要明确的解析与失败处理策略，而论文没有详细报告这些规则。

淘汰赛输出可能依赖候选顺序、分组和早期淘汰。对随机排列重复 32 次并对所选答案做 majority voting 可以降低观测方差，但不能保证不变性，而且会成倍增加 selector compute。论文的预算比较对齐的是 generation call 数量，而不是实际 token、加速器时间、能耗或端到端 latency。由于 selection 串行地位于 generation 之后，按调用次数核算可能掩盖显著部署成本。

实验只覆盖 256 道近期竞赛数学题。HMMT 结果依赖 LLM judge，而其输出和错误分析没有发布；judge false positive 与 false negative 因而可能影响主要增益。论文没有披露针对 2024–2025 题目的 decontamination，也没有说明 generator pretraining overlap。精确候选池、完整轨迹、selector output、correctness manifest、prompt/version hash、seed 与 permutation log 均不可用，因此目标对象无法端到端复现，也不能直接用于训练复用。

相关 OpenMathReasoning release 改善了 artifact 可得性，但存在不同限制。公开行包含摘要而非原始候选轨迹；构建过程只保留 selector 选中正确候选的样本，因此缺少失败决策轨迹；`Judgment: IDX` 与候选组以文本方式打包，而不是规范化字段；公开行也没有逐候选标签。数据集明确标为 CC BY 4.0，代码为 Apache-2.0，但所核查的 release material 没有说明 AoPS 源帖的逐行权利。
