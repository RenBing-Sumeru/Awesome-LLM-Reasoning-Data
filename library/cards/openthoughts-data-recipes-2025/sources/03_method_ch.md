现有证据支持下列流程，同时需要把已披露设置与 final-run unknown 明确分开。

1. **输入与来源选择。** 最终数学 prompt 来自 OpenMath-2-Math；代码 prompt 来自 StackExchange CodeGolf 和 OpenCodeReasoning；科学 prompt 来自 StackExchange Physics 与 organic-chemistry PDF。论文先通过匹配的 student-training 实验比较来源和混合策略（论文第 4.1-4.2 节）。
2. **Prompt-quality 筛选。** 代码问题使用 GPT-4o-mini difficulty label 筛选；数学和科学使用 GPT-4.1-mini response length 作为难度 proxy。发布 recipe 报告先过滤到 18 万个数学、6 万个代码和 6 万个科学 prompt，再做后续下采样；不可变 selection manifest 未发布（第 4.3 节；附录 R.2）。
3. **去重与评测去污染。** 数学和科学问题做精确去重，代码不去重。当 training prompt 与 evaluation prompt 的 normalized Indel similarity 至少为 75%，**或**两者共享 Qwen-tokenizer 13-gram 时，该 prompt 被拒绝。检测器在 3,092 个构造污染样本和 3,000 个干净样本上测试过，但匹配/删除账本未发布（第 4.4 节；附录 F）。
4. **下采样与 teacher generation。** 已选池被随机缩减到约 7.5 万个问题；图 4 显示约 5.3 万数学、1.6 万代码和 0.6 万科学问题。每个问题生成 16 个 QwQ-32B response。所有成功生成的答案都被保留；最终 recipe 没有 correctness verifier、unit-test gate、model-judge acceptance threshold 或 scalar reward（第 4.4-4.6 节；附录 R.3）。
5. **发布对象。** 最终得到单一 train split 中的 120 万条 Parquet 记录，每条暴露 `difficulty`、`source`、`domain` 和 `conversations`。推理与最终答案合并在同一个 assistant message 中，没有 step label 或 environment observation。
6. **训练。** 对 Qwen2.5-7B-Instruct 做 full fine-tuning，使用 LLaMA-Factory、DeepSpeed ZeRO-3、packing、Qwen2.5 template、16,384 cutoff length、512 global batch、8e-5 learning rate、5 个 epoch、cosine schedule、0.1 warmup ratio 和 BF16（附录 D，表 9）。这是 answer-level SFT/teacher distillation，不是 RL。
7. **评测。** 研究反复训练 student，并在八个主要 benchmark 上比较平均行为；AIME 2025、HMMT 02/25、HLE MCQ 和 LiveCodeBench 06/24-01/25 保留到最终 held-out evaluation。官方链接的评测 harness 是 Evalchemy 仓库。

论文报告：annotation 使用 16 台单 GH200 节点，耗费 22,000 H100 GPU-hours；一次 OpenThinker3-7B 训练在 512 张 A100 上耗费 25,000 A100 GPU-hours；一次评测耗费 32 GPU-hours（附录 O）。这些是作者报告的资源数字，不是完整可重放的 job manifest。

复现时必须固定 HF dataset revision `61bcf9d4eb38b30295efc2021227a63cc5bb34c8` 和已检查的 GitHub SHA `e86cf2dbbe69ae178aec302be33a3454a7183457`，再单独补齐 final-run 的准确解码设置、seed、逐来源 selection manifest、接收/失败数量、去污染判定、依赖/container hash 与 checkpoint mapping。代表性官方 C1 配置显示 `max_tokens: 32000` 且 temperature 接近 1，但没有证据证明它们就是不可变的最终 120 万运行 manifest，因此不能直接替代。

Security 也是复现边界的一部分：在所检查 SHA 中，三个官方 QwQ annotation YAML 含 literal API credential。本卡刻意不复现其值。任何复现都应先删除并轮换该 credential，改用基于环境变量的 secret injection，并运行 secret scan。
