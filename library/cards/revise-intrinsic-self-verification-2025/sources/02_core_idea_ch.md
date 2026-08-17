ReVISE 引入 `eos` 与 `refine` 控制动作，并采用两阶段 SFT+DPO curriculum。Stage 1 构建验证偏好：结果正确路径之后选择 `eos`、拒绝 `refine`；结果错误路径则相反。它把最终正确性转换为“停止或继续”的监督，而不是逐推理步骤监督。

Stage 2 从 Stage-1 模型初始化并构建纠错偏好。错误路径之后，chosen continuation 是 `refine` 加 gold reasoning target，非纠错 continuation 被拒绝。两个阶段除 DPO 外都包含 chosen-sequence SFT，因此该配方属于离线偏好学习，不是在线 RL。

推理时，模型给 `eos` 的概率被视为内在置信度，可用于加权多个采样候选。这是与训练结果标签相关的学习型选择器，不能独立验证中间推理，也不能认证底层 preference data。
