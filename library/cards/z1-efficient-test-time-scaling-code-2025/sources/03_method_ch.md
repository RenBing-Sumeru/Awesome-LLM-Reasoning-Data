**输入与生成。** 问题来自 Code Evol-Instruct；论文称其提示通过深度和广度演化获得。QwQ-32B-Preview 为每行生成一条公开的 `response` 轨迹。确切上游 revision、逐行来源标识、提示复杂度标签、teacher 解码温度、随机种子、候选数量和原始生成日志均为 unknown。

**长度处理与过滤。** Teacher 轨迹上限为 8,192 token。论文报告移除了约 3% 含重复推理的样本，并称保留数据中少于 1% 被截断。它没有发布重复检测器、阈值、实现、被丢弃行清单或截断标志。该操作不能被改写为正确性过滤，也不能视为经过核验的去重流程。

**发布输出。** 官方 Hugging Face revision 在仅含 train 的单个 Parquet shard 中公开 107,173 行，字段为 `id: string`、`question: string`、`response: string` 和 `token_num_qwen: int64`。没有 source、difficulty、short/long、truncation、final-answer、verifier、reward 或 correctness 字段。仓库预处理把 `question` 作为用户消息并屏蔽其 loss，用完整 `response` 加结束标记进行监督；论文有意不使用成对的 `think` 分隔符切分轨迹。

**SFT 与运行时 scaffold。** Qwen2.5-Coder-7B-Instruct 微调 2 个 epoch，学习率为 1e-5，warmup 100 步，采用 cosine decay、bfloat16、全局 batch 128、FSDP，共 836 步并使用 8 张 A100-80G。随后，STW 限制初始推理生成：自然结束时正常返回，因长度结束时则追加固定的直接回答提示并继续生成。主评测使用约 4,096 thinking token 的最大预算，但不同实验的精确上限有所变化，实际平均长度低于上限。

**复现边界。** 训练、评测、STW 和按长度排序的消融选择代码已经公开。复现仍需固定已核验的 GitHub commit 与数据 revision，重建缺失的 teacher 生成和重复过滤阶段，并补做去污染与权利检查。数据集没有披露正确性 terminal predicate。
