报告把自适应推理数据路径与异构奖励系统结合起来。对于推理 SFT，Hunyuan-Base 先尝试生成短回答；若答案正确就直接保留，若首次回答错误，则由 Hunyuan-T1 继续推理，直到得到正确答案。失败尝试与正确回答会拼接起来，用于训练自适应长短推理 teacher，其输出再供 Hunyuan-TurboS 的第一阶段 SFT 使用。这属于 teacher 生成的监督，但报告没有把它命名为独立的最终模型蒸馏阶段，也没有披露仅属于蒸馏的数据规模。

随后，模型进入 deliberation 数据飞轮。Hunyuan-TurboS、Hunyuan Large、Hunyuan Turbo 和 Hunyuan T1 回答相同的精选提示；基于 Hunyuan-TurboS 的 judge 从准确性、有用性、无害性、连贯性、简洁性和指令遵循等维度评价成对输出，再由共识机制与人类专家形成弱点画像，据此增加专家标注的 SFT 批次。judge 版本、评分权重、提示集合、迭代次数与新增数据总量均为 unknown。

强化学习由覆盖 16 个子主题、超过 30 个评分服务的 General Reward System 支持。该系统组合参考答案条件下的 GRM、GRM-CoT、Answer Consistency Model、可调用工具的 critic、支持 36 种编程语言的沙箱、领域规则、分类器和分数融合。Stage I GRPO 聚焦推理，Stage II 扩展到通用指令遵循。这些是具体的报告级契约，但并非已发布的奖励 checkpoint、逐样本奖励向量或可重放 rollout。
