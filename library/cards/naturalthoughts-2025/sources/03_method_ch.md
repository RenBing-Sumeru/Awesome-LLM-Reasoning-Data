1. **从广泛题目开始。** 输入 NaturalReasoning 中覆盖数学与通用 STEM 的 280 万个 prompt，保留采样所需的来源和任务信息，产出所有选择策略共用的题池。
2. **生成 teacher target。** 让 DeepSeek-R1 输出完整推理回答与最终答案，并删除被最大长度截断的回答，形成序列化的“问题—轨迹—答案”示范。由于没有统一的逐步 verifier，teacher 错误仍可能保留。
3. **计算选择信号。** 分别采用随机采样、推理策略标签、回答长度，以及把模型分歧当作难度代理的方式描述记录，产出排序或分层候选。这些信号表示选择策略，不等于轨迹质量真值。
4. **构建匹配子集。** 按各策略选择 1K、10K、100K 和 500K 条记录。做混合蒸馏时，再根据随机比例或问题难度，把部分长 System-2 轨迹替换成只含最终答案的 System-1 target。
5. **训练并评测 student。** 用匹配配方微调 Llama-3.1-8B-Instruct 和 Qwen2.5-7B-Instruct，在 MATH500、GPQA-Diamond、MMLU-Pro 与 SuperGPQA 上测量 pass@1；混合模型还比较 No-Think、Adaptive-Think 和 Think 三种模式。结论只覆盖所测 teacher、student、领域和预算。
