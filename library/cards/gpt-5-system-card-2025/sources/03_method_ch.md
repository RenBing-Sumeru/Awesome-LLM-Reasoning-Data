在模型数据层，OpenAI 报告了由三类来源组成的多样化专有混合，以及面向质量、风险、个人信息和有害或敏感内容的过滤管线。报告没有披露预处理规则、阈值、去重、混合权重、版本、产量、训练/评测成员关系或条目级溯源。它称推理变体通过强化学习来改进思考、尝试不同策略、识别错误并遵循 model policies，但没有发布 trajectories、feedback、rewards 或 optimizer。

在系统层，router 根据 conversation type、complexity、tool needs 和显式 user intent，在 gpt-5-main 与 gpt-5-thinking 路径之间选择。router 持续使用 model switches、response-preference rates 和 measured correctness 训练；达到使用限额后，mini variants 接管剩余查询。报告没有定义 routing record schema、正确性如何测量、冲突信号如何组合、更新频率、探索策略、阈值或失败日志。

在安全训练层，safe-completions 用 output-centric objective 取代脆弱的基于 prompt intent 的 comply/refuse 边界：在安全政策约束下最大化 helpfulness。system card 报告了生产对比和受控实验，但独立的官方 safe-completions 论文只是方法背景，不是 GPT-5 训练记录发布。报告还描述了针对 sycophancy 以及不可完成任务中 graceful failure 的定向后训练；具体 datasets、labels、graders、reward models 和阶段权重仍为 unknown。

在推理阶段，gpt-5-thinking-pro 使用并行测试时计算，但并行尝试数量、选择或聚合规则、调度和预算均未披露。在部署阶段，生物风险控制叠加 model training、覆盖生产流量的 system-level protections、account enforcement、API identifiers 和 access programs；这一整套防御不是单个训练 verifier。
