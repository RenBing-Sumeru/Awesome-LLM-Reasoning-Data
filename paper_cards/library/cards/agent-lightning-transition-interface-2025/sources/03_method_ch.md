智能体执行被表述为 MDP。Lightning Client 运行智能体并向 Lightning Server 发出结构化 span；服务器保存任务、资源、轨迹和训练状态。工具返回状态等可观测信号可由自动中间奖励转为中间反馈。

LightningRL 将轨迹拆为 transition、分配层级信用，并通过已有单轮 RL 机制更新策略。开源仓库提供接口、训练器、示例和任务数据上传路径；它是代码 artifact，而非发布的独立研究数据集，因此本卡将数据记录为由环境产生的 transition。
