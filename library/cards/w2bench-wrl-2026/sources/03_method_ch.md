1. **收集并变换 prompt。** 将写作指令过滤为 5 类任务，再表达内容、风格、格式和长度需求。

2. **构造 WEval 排序。** 对含 n 个需求的 prompt，生成一个完整指令回答，以及 n-1 个逐步删需求后的回答。删除越多需求即形成越低的 golden partial order；以相关性、instruction-level 和 prompt-level 指标评估 reward model。

3. **训练 reward。** 将完整 prompt 的回答设为 chosen，删需求回答设为 rejected。用 Bradley--Terry loss 优化 Qwen2.5-7B-Instruct，使其对遵从需求的输出给出更高奖励。

4. **训练和测试策略。** 过滤 WildChat-1M 得到 13,221 条写作指令，采样策略 rollout，用训练后的模型给奖励并以 GRPO 更新。须固定 teacher、dropout seed、需求提取、prompt 集、reward checkpoint 和 rollout budget；部分生成设置未知。
