[Nature 论文](https://www.nature.com/articles/s41586-025-09833-y)直接记录了 Lean 的 state/action/reward 契约、模型与树搜索、300K pair 的 SFT 集、约八千万陈述的 main-RL 课程、replay 混合、TTRL 变体课程和独立证明验证。其 data availability 说明链接了修正后的 miniF2F、formal-imo 基准及固定版本的 PutnamBench；补充材料提供算法伪代码和超参数。合成课程和 RL proof replay 被描述为系统生成，但未发布。

在 IMO 2024 上，AlphaProof 在专家形式化后通过多日 TTRL 解出五道非几何题中的三道；AlphaGeometry 2 解出几何题，使组合系统获得 28/42。这支持该方法在大量计算下的有效性，但不能证明每个 auto-formalization 都忠实于非形式来源，也不能证明隐藏 replay buffer 可复用、有代表性或无污染。
