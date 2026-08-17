PRIME 的核心贡献是把“只用响应级正确性标签训练、但在推理时产生 token 级奖励”的隐式 PRM 转化为在线强化学习组件，使策略模型、奖励模型和参考模型可由同一个 SFT 或基础模型初始化，并随策略 rollout 持续更新。

作者同时开放 EurusPRM-Stage1-Data：88,455 条指令各含 8 个模型响应，共约 707,640 条响应级记录；每条包含完整 instruction-response 对话、chosen/rejected 二元标签、来源数据集和生成模型，采用 Parquet 格式，覆盖数学与代码推理，可用于隐式 PRM 或结果奖励模型训练。
