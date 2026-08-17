报告把多模态推理视为分阶段的数据与反馈系统。共享的视觉编码器/adapter/decoder 架构先在广泛多模态混合数据上训练；经过清洗的长 CoT SFT 阶段教授显式思考与答案格式；多领域 RL 随后把适用于可检查任务的 Reinforcement Learning with Verifiable Rewards（RLVR）与适用于开放或语义任务的 RLHF 式模型奖励结合。

RLCS（Reinforcement Learning with Curriculum Sampling）是核心选择机制。RL 开始前，系统把多个已有 VLM 或早期检查点的 pass@k 结果与专家人工标签合并，分配难度层级。训练中，rollout 的 pass@k 和子类表现继续更新难度估计。采样比例每个训练 iteration 都会重加权：减少当前过易或过难样本，提高同时存在正确与错误尝试的中等难度区域。

第二层选择机制是基于 ratio EMA 的动态采样扩展。去掉 KL 和 entropy loss 后，全对或全错的 rollout 组对 GRPO 不产生有效梯度。系统根据最近的无效样本率估计下一批 oversampling 比例，再从扩展 rollout 中保留正确/错误更均衡的子集。报告解释了机制，但没有披露准确系数、rollout 数量、选中样本或逐 iteration 课程历史。

反馈契约明确是异构的。规则组件抽取由特殊 token 标记的最终答案并做精确匹配；数学使用 SymPy 和容差；OCR 使用编辑距离；grounding 使用 IoU；GUI 任务混合动作预测、IoU、功能和语义检查；图表、文档、VQA、空间任务与视频可能回退到 LLM 判断。格式与风格奖励检查盒标记、语言混杂、重复、流畅度和指令遵循。这些主要是最终输出或标量信号，不是经验证的逐步推理标签。

