报告公开了两类不同对象。部署对象是一个可包含多模态内容、并可为 Web Grounding 等功能而增强的 prompt；系统经过输入和输出过滤后返回 completion。模型支持一百万 token 上下文，并提供 low、medium、high 三档 extended thinking；逐步推理显示为 `[REDACTED]`，但 `reasoningContent` block 可表明推理已启用。

训练披露则粗粒度得多：经策划的许可/专有、开源和公开数据，经 SFT 与 RLHF 调整权重，以及经过调节的隐私、粗俗内容和安全过滤器。报告未披露记录模式、偏好对象、奖励模型、校准、rollout 分配或优化器。因此，运行时推理接口不能被误当作已发布推理轨迹。
