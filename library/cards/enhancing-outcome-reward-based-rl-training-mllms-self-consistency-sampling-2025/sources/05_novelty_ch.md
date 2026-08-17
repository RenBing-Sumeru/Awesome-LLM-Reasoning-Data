普通 outcome-reward RL 只给一个终局正确性信号，无法区分忠实解答与碰巧猜中。Process reward model 把反馈移入轨迹内部，但需要学习式 verifier 与过程标签。SCS 位于两者之间：它从局部 multimodal trajectory 构造反事实 continuation，并把截断与视觉扰动下的答案多样性用作在线标量奖励。

各个组成部分并非首次提出：self-consistency、图像增强、rejection/resampling、选项正确性、RLOO、GRPO 和 REINFORCE++ 都早于本文。具体变化是把扰动后缀 rollout 的稳定性转化为 multimodal multiple-choice reasoning 的训练时反馈契约，同时保留终局 outcome reward。

对本 track 而言，方向信号是 online RL data 可能由一组相关轨迹构成，而不是单条 response。受控消融与小规模 faithfulness audit 提供一定质量信号，但 benchmark 增益不能验证已发布 prompt corpus。复用时应分别核验 prompt provenance、扰动策略、截断位置、continuation 多样性、奖励分量与 optimizer 配置。
