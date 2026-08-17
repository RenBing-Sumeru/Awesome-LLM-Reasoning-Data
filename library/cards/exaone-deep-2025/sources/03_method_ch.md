基础谱系较为明确：每个 EXAONE Deep 规模都从相应的指令微调 EXAONE 3.5 Instruct 模型开始。SFT 与 DPO 记录使用同一种模板，包含 thought-tag 推理区段和最终答案。SFT 语料由 1.6M 条实例构成，约含 12B token。报告的长度分布图将其分为 Math、Code、Science 与 Others，并说明 Code 记录平均更长，但没有给出各组数量或具名来源。

除 SFT 外，报告还称在 20K 条偏好实例上使用 SimPER 进行 DPO，并在 10K 条实例上以自研 GRPO 变体开展 Online RL；具体阶段顺序或分支方式没有说明。已核查的官方材料没有说明偏好来自人工、模型、规则还是结果信号，也没有说明 chosen/rejected 响应如何采样，或 SFT 与 DPO 轨迹是否共享生成器。Online RL 更未披露奖励函数、裁判或验证器、任务环境、rollout 数、生成设置、校准、聚合与终止谓词。

论文确实给出基准推理设置：最多生成 32K token、temperature 0.6、top_p 0.95，以及按基准设定的重复采样次数。但这些是评测设置，不能填入 `generator`、`rollout_count` 或 `temperature`，冒充训练数据构造参数。训练优化设置、保留规则、课程、阶段切分、检查点选择和数据谱系也均未披露。

