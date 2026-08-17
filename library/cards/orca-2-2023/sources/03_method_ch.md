1. **划分任务并检查失败。** 输入 FLAN/Orca 任务族和早期 Orca 行为，判断小模型在什么任务上需要直接回答、逐步推理、回忆、抽取或其它策略，产出按 student 容量选择的任务—策略映射。
2. **编写 teacher prompt。** 为每个任务组设计详细 system instruction，诱导 GPT-4 产生指定行为；必要时可多次调用或使用专用 prompt，产出“任务—策略提示—teacher 回答”三元组。
3. **擦除策略。** student 训练前，把详细生成 prompt 替换成通用 system message，只保留用户任务与 GPT-4 回答轨迹；因此 student 不能仅靠显式的“使用策略 X”标签作答。
4. **渐进式训练。** 从 LLaMA-2-7B 或 13B 开始，先在 FLAN-v2 上训练一轮，再用 Orca 1 的 5M 条 GPT-3.5 teacher 记录训练三轮，最后用约 1M 条 Orca 1 GPT-4 记录和 817K 条 Orca 2 记录训练四轮，得到 Orca-2-7B 与 13B checkpoint。
5. **评测学到的策略选择。** 在 15 个 benchmark、约 100 个任务和超过 36K 个 prompt 上做 zero-shot 评测，按任务使用 exact match、专用指标或必要的开放式 judge。结果检验模型行为；由于训练记录未发布，不能独立验证隐藏的数据选择决策。
