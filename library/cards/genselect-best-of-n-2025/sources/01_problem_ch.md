GenSelect 处理一个具体的 Best-of-N 瓶颈：模型独立采样出许多数学解答后，如何让推理模型选出一个答案，同时避免逐个孤立打分或穷举两两比较的开销？该工作以 poster 形式发表于 ICML 2025 的 2nd AI for Math Workshop，arXiv 记录提交于 2025 年 7 月 23 日。它属于 Rollout, Search, and Test-Time Trace Data，因为核心对象是带有明确推理预算的一组采样尝试，以及 selector trace、淘汰赛决策与最终结果，而不是单个答案。

目标实验中的一条记录从 Comp-Math-24-25 题目开始，包含 QwQ-32B 或 DeepSeek-R1-0528 采样的 64 个解答、从解答中抽取的最终答案、推理过程的摘要表示、一个或多个以零基候选索引结尾的 GenSelect 比较轨迹、淘汰赛轮次元数据，以及答案正确性或 HMMT LLM-judge 结果。论文评估的是 prompt-only 选择；它没有训练 selector，也没有建立 RL 或 SFT recipe。论文、附录、prompt、模型、预算和实验结果足以支持 L4 Card，但精确的 Comp-Math 候选池、selector generation、chosen-index manifest、judge output、候选排列与 seed 均未发布。

另一个官方相关 artifact 必须单独界定。OpenMathReasoning 发布了 565,620 条为训练构建的 `genselect` 记录，题目主要来自 AoPS。公开行把带索引的候选摘要打包在 `problem` 中，把 selector reasoning 与 `Judgment: IDX` 打包在 `generated_solution` 中。这些是同一 NVIDIA 研究脉络中可归因于 GenSelect 的数据，但不是目标论文中 QwQ/DeepSeek 在 Comp-Math-24-25 上的评测轨迹。
