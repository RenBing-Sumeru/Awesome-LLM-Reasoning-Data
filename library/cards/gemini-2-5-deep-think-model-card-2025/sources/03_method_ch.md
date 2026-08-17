已披露 pipeline 只能按阶段重建：

1. **输入。** 宽泛的公开 web documents、code、images、audio 和 video 用于预训练。后训练加入经筛选的多模态 instruction-response pairs、人类偏好数据、tool-use data、更多多步推理/问题求解/定理证明材料，以及精选的高质量数学解答。
2. **处理与生成。** 报告提到去重、安全过滤和质量过滤，但没有识别 source manifest、generator 或 teacher、合成比例、规则、阈值、所在阶段或产出率。
3. **训练。** Deep Think 是增强的 Gemini 2.5 家族 sparse-MoE 模型，使用 Google TPU、JAX 和 ML Pathways 训练。Novel RL 鼓励更长的推理路径；RL 算法、optimizer、schedule、rollout generation、更新规则、compute 与 checkpoint lineage 均未知。
4. **反馈。** Model Card 提到人类和 critic 反馈，却没有定义 Deep Think 推理 reward 或 terminal predicate。家族级 RL*F 使用 Data Reward Model 和 rubric-prompted Critic，但它是否以及如何用于专属推理 RL 仍未知。
5. **推理搜索。** Parallel thinking 探索多个假设，并可能 critique、修订或组合它们。分支数、temperature、候选分布、critique schedule、aggregation、stopping rule 与隐藏 compute 均未披露。1M context 和 192K 文本输出是接口上限，不是分支或 rollout budget。
6. **输出与用途。** 对外输出是最终文本 response；Gemini app 中可选用 code execution 或 Google Search。已披露用途包括 SFT、偏好/奖励学习、安全对齐、extended-reasoning RL、推理时并行思考、能力评测与前沿风险审计。产品工具不能证明训练环境。

Card 描述了 held-out assurance prompts 和家族级 decontamination 方法，但没有 Deep Think 专属 train/dev/test 成员、重叠结果，也没有针对新增定理与数学语料的单独审计。复现必须固定模型/checkpoint 身份、thinking prompt、serving configuration、分支与采样设置、工具、reward 版本、评测预算、grader 版本和 task snapshot；训练数据、trace、权重、代码、奖励与评测记录均未发布。
