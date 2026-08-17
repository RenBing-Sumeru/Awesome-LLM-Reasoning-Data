1. **选择可验证 prompt。** 输入 7,500 道 MATH 训练题或 2,342 道 APPS Introductory 训练题；MATH 使用最终答案匹配，APPS 使用可执行测试。没有可靠二元检查的任务不进入流程。
2. **生成候选，即 E-step。** 从当前 PaLM 2 policy 出发，MATH 每题采样 32 个解答，APPS 每题采样 64 个程序，temperature 为 0.7、top-k 为 40，产出待验证的问题—解答候选。
3. **过滤并平衡。** 只保留最终答案正确的 MATH 解答，或通过全部测试的 APPS 程序；每题最多保留十条正确样本，避免简单题占据数据。接受的记录构成本轮 SFT 数据。
4. **改进 policy，即 M-step。** 以 prompt 和 few-shot context 为输入，对接受的解答 target 做 next-token prediction 微调，产出更新后的 policy，并让它成为下一轮生成器。
5. **按验证结果重复并停止。** 重复生成、验证和微调，同时监控留出 pass@1 与迁移任务；验证增益饱和或回退时停止。APPS 在第二轮已出现测试表现回退，尽管训练表现继续上升。
