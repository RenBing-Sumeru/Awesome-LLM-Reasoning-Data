prior-work baseline 是一次性数学 distillation corpus：source problem 与 teacher CoT 配对，拒绝 final answer 错误的 candidate，再把保留文本用于 SFT。OpenMathReasoning 把这一模式扩展为三个相连的数据对象，并公开组合 recipe。

第一，CoT generation 以大 candidate budget 混合 DeepSeek-R1 与 QwQ-32B，并用难度估计为困难题分配更多 rollout。第二，TIR 不是期望通过 prompt long-reasoning model 自发产生，而是迭代 bootstrap：小规模、严格过滤的 code-using seed 先训练 generator，再由它产生更大集合供下一模型使用。第三，GenSelect 把同时含正确与错误 solution 的 group 转为 generative test-time selection trace，而不只依赖 majority voting。

论文还呈现一个有用的工程区分：selection rule 更严格不等于 training value 更高。stage-0 TIR 同时使用答案、code-use、code-block-count、novelty 和 significance filter；后续阶段移除 novelty/significance，因为它降低下游性能。GenSelect summary cleanup 缩短文本，却损失约 1–2 个百分点。这些结果说明，看起来更严格或更干净的 filter 不会自动成为更好的训练 objective。

该工作并非分别首创 CoT distillation、Python tool use、LLM answer judging、SFT 或 candidate selection。具体贡献是集成规模与迭代构造 pipeline。verification 仍为 answer-level，majority-induced target 不是 proof label，九字段发布也没有保留结构化 execution event 或 step label。

对推理数据研究而言，最重要的 release-level 新意有一部分来自更正：官方数据卡把 306K 个有 solution 题目与论文早期 540K processing count 分开，并另列 193,170 条 problem-only row。该更正使版本化 release accounting 成为 recipe 的一等组成，而不是把 headline scale 当成不可变事实。
