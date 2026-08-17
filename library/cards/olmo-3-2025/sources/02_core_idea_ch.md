Olmo 3 是包含 Base、Think、Instruct 和 RL-Zero 变体的 7B/32B 模型家族。其核心发布主张不只是开放权重：AI2 展示了相互连接的模型流，其中包括阶段数据、训练代码、检查点、manifest 和依赖项。

数据对象覆盖三个基础训练阶段和多个后训练阶段。Dolma 3 提供 5.93T-token 的预训练混合数据、100B-token 的 midtraining 混合数据，以及 50B/100B 的长上下文扩展。Dolci 提供 Think 与 Instruct 的 SFT、DPO 和 RL 数据；RL-Zero 则提供了一个从已披露基础模型数据出发研究 RLVR 的设置。

反馈合同是混合型的：既有监督 trace、偏好/拒绝对、可编程的数学/代码/指令校验、真实或模拟的工具轨迹，也有用于部分聊天任务的 LLM judge 分数。因此，广泛公开工件并不意味着每一种信号都具有可编程验证性质。
