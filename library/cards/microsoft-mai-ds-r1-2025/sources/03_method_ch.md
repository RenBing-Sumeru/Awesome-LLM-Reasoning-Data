对于约 350K 个被阻断主题组件，Microsoft 报告了 keyword 收集与过滤、keyword 到问题的扩展、多语翻译，以及 bootstrap 的答案和相应 CoT。它点名 DeepSeek R1 和未指明的内部模型用于 bootstrap。keyword 过滤标准、问题扩展、语言分配、prompt、教师版本、回答选择、编辑、去重、人工审核和产出均为 unknown。

110K 组件被描述为来自 Tulu3 SFT 的 Safety and Non-Compliance 示例：CoCoNot、WildJailbreak 和 WildGuardMix。Microsoft 没有发布所选记录 ID、变换、安全标签字段或完整记录 schema。官方数据摘要称使用了公开可用数据和合成 AI 生成数据，但未提供完整 manifest 或来源权重。

Microsoft 称该模型经过后训练/微调，但没有披露目标函数、loss、optimizer、schedule、batch size、RL 阶段、偏好构造、verifier、reward 聚合、rollout 协议或 checkpoint 选择规则。响应性与伤害缓解的评估指标在本 Card 中不被视为训练反馈合约。

