Gemini Robotics 1.5 研究的是：一个 vision-language-action 系统能否跨差异很大的机器人具身学习可复用物理技能，并在动作前用自然语言进行推理。这个挑战同时涉及异构 observation 与 action space、长程规划、在线 success detection、工具调用、失败恢复和物理世界分布偏移下的安全。

报告提出两个从 Gemini 专门化得到的模型。Gemini Robotics-ER 1.5 负责规划、embodied reasoning、进度估计、成功检测与外部工具调用；Gemini Robotics 1.5 把开放词汇的自然语言子任务指令和机器人相机 observation 转成连续动作，并可在动作前输出自然语言 thinking。二者可以组合成长时程物理智能体。

对数据图谱而言，核心问题是多具身机器人 sensor/action 记录、互联网多模态数据、thinking trace、caption、progress/success label 与对抗样本如何构造并连接。报告让这些数据对象可见，却基本没有开放其 schema、数量、mixture、provenance 和权利状态。
