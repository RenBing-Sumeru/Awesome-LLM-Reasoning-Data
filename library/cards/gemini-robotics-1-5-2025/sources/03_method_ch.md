训练 mixture 包括来自 ALOHA、双臂 Franka 和 Apollo humanoid 数千任务的机器人相机图像、文本指令、robot sensor 记录与连续 action 记录，并加入公开互联网 text、image、video 数据。每张图像配有原始 caption，以及由 Gemini 和 FlexCap 生成的 synthetic caption。各平台 episode 数、小时数、动作维度、sensor schema、采样权重和来源清单均未披露。

Motion Transfer 跨机器人具身与数据来源联合训练，使只存在于一种具身记录中的技能能够迁移到另一种具身。报告比较 single-embodiment/no-MT、multi-embodiment/no-MT 和 full-MT，并在目标机器人没有相应训练数据、只有另一机器人收集过数据的任务上做评测。架构、alignment object、loss、optimizer、batching、curriculum 与负迁移保护没有说明。

启用 thinking 时，Gemini Robotics 1.5 根据指令和感知生成自然语言 trace，在动作前把它追加到 context，然后输出连续数值动作。报告展示了规划、隐式子任务完成感知和恢复行为，但没有说明训练期 thinking label 的 teacher、annotator、生成 prompt、覆盖规则或接受过滤器。

ER 1.5 输出计划、坐标、工具指令、进度估计与 binary success/failure judgment。实时 success detection 以图像和任务指令为输入，在模拟推理延迟下以 5 Hz 运行；offline 版本允许无限推理时间。长时程评测按任务 rubric 累加 progress point，并把失败标为 planning、success-detection 或 action failure。这些都是评测与审计契约，不是报告声称的 RL reward。

安全 auto-red-teaming 把普通训练或评测任务改造成恶意指令、损坏场景或 rollout 期间的环境扰动。AutoRater 判断正确性与安全性，并可返回 reasoning trace。报告称生成训练数据有助于缓解漏洞，因此支持 safety-training 用途；但语料数量、judge 校准、接受率和学习目标均未知。
