论文披露了构造数量、verifier 行为、执行限制、语言塑形、异步 rollout 路径以及 Medium 到 Small 的血缘，也给出受控比较：Magistral Medium 的 AIME 2024 pass@1 从 Mistral Medium 3 的 26.8 提升到 73.6，LiveCodeBench v5 从 29.1 提升到 59.4；在 24B 实验中，SFT 加 RL 的方案在多数已报告数学与代码评测上高于仅 SFT 或仅 RL。这些结果支持“所述训练流程改变了模型行为”，但不能证明隐藏记录完整、获授权、无污染或本身高质量。

发布证据的范围比训练披露更窄。Mistral AI 发布了 Magistral Small 2506 权重，官方模型卡说明它是 24B 模型、权重采用 Apache-2.0 许可，并把 Mistral Small 3.1 24B Instruct 标为基础模型。官方发布页则把 Magistral Medium 描述为企业版本。论文、发布页和模型卡都没有提供 RL/SFT 数据集、Medium 权重、入选轨迹、verifier 测试、奖励日志或逐条血缘。
