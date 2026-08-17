终稿中可重建的配方如下：

1. **选择源问题。** 一阶逻辑 entailment 使用 symbolic FLDx2，并删除 proof 含 `assump` 的样本，包括反证法模式；定理证明从 GSM8K、MetaMathQA 中源自 GSM8K 的案例和 Big-Math 选择 GSM8K 级文字题。
2. **生成形式产物。** 为 Llama 3.1 8B 与 Qwen 2.5 7B 提供六个示例，生成兼容 Z3 的 FLDx2 轨迹；用 Qwen 2.5 7B 配合 few-shot prompt，把数学文字题转换成 Isabelle statement，并生成逐步 Isabelle proof。
3. **过滤语法。** 拒绝 Z3 格式无效的输出。对 Isabelle，把所有 proof step 替换为 `sorry`，只保留能通过 Isabelle 语法与类型检查的 statement 和 proof 结构。
4. **分配步骤标签。** Z3 wrapper 把每条逻辑推理转换成独立查询。Isabelle wrapper 对每个目标步骤运行一次，只恢复该目标步骤，其他 proof step 继续使用 `sorry`。正确性以 Boolean 形式与 `solution_steps` 对齐记录。
5. **平衡与打包。** 论文终稿混合包含 10K 个 Llama logic 步骤、10K 个 Qwen logic 步骤和 20K 个 Qwen theorem-proving 步骤。发布的 LastStepBalanced 集只有一个 40K train split，并把最后目标标签平衡为 50%；`mask_history: true` 使训练损失只作用于最后标签。
6. **训练 PRM。** 使用 LLaMA-Factory 对 Llama 3.1 8B 或 Qwen 2.5 7B 做全参数微调，采用 AdamW、1 个 epoch、batch size 32、sequence cutoff 2048、linear warmup 与 decay、warmup ratio 0.5，以及 DeepSpeed ZeRO-3。学习率从 1e-6、2e-6、5e-6 和 1e-5 中选择，选择依据是 Orca-Math 与两个 BBH 任务。
7. **评测。** 每题以温度 0.5 生成七个解答，用每个解答的最小步骤分数做排序，在 12 个 benchmark 组成部分上报告 Best-of-7；同时在 ProcessBench 上，以第一个人工标注错误之前的步骤计算判错 AUROC。

提交 `6fc639c46e7c2e9a0786c10238ac8bbc2c6f287f` 的仓库公开了构造阶段、Z3/Isabelle wrapper、最终数据平衡、配置和评测代码。以下生产细节仍为 `unknown`：构造 FOVER-40K 的生成温度、重试与拒绝次数、接收率、完整 seed 与 job manifest、发布运行中的 prover timeout/失败处理策略，以及总构造成本。
