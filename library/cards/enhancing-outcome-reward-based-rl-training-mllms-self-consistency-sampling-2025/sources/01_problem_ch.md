面向 multimodal large language models 的 outcome-reward RL 可以低成本核验多项选择题答案，但选项正确并不能证明视觉感知或推理轨迹正确。若轨迹误读图像后碰巧猜中选项，它得到的终局准确率奖励与忠实解答相同。Dense process supervision 可以区分二者，但需要 process verifier 或额外标注。

Self-Consistency Sampling（SCS）将其处理为在线 rollout 构造与反馈问题。对每个图像—问题 prompt，关键数据对象包括初始 reasoning trajectory、截断前缀、随机图像扰动、重采样 continuation 与选项答案、不同答案集合、accuracy reward、format reward、consistency reward，以及使用这些信号的 policy update。其决策边界是 multimodal multiple-choice RLVR，而非通用证明验证：答案一致只是稳定性代理，不能直接验证每个推理步骤。

论文描述了由 M3CoT、Geometry3K、ScienceQA 过滤得到的训练混合。官方 Hugging Face release 提供 prompt-answer JSONL 和图像归档，代码仓库实现训练与评测；但这些 artifact 未证明初始轨迹、截断点、扰动 seed、全部 continuation 和逐 rollout 奖励已完整发布，因此不能把 SCS 表述为可完全重放的 trace corpus。
