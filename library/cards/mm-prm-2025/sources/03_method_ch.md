这一构造流程可分为四个可审计阶段。

1. **MM-Policy 构建。** 附录列出 16 个公开数据源，合计 5,135,768 个样本。Qwen2.5-72B-Instruct 将原解重组为显式步骤和最终答案，随后对 InternVL2.5-8B 进行微调，并冻结视觉编码器。实验部分称实际使用约 400 万个清洗样本，训练 1 个 epoch，batch size 128，学习率 4e-5；但没有逐项解释附录总数与实际使用量之间的差额。
2. **种子与树生成。** MM-K12 提供 10,000 个多模态 K-12 数学问题，论文称其由 5,000 个填空题和 5,000 个选择题组成，另有 500 题独立测试集。对每个种子，MM-Policy 采样结构化后续。论文设置温度 1.0、top-k 50、top-p 0.9、c_puct 0.125，每次 Monte Carlo 估计生成 16 条 rollout，最多展开 200 次搜索，每题总 rollout 不超过 1,000。文本形式的 Qwen2.5-72B-Instruct 提示判定终局答案等价性；二分搜索展开失败分支，而图像仍保留在 rollout 模型的上下文中。
3. **树到记录的采样与 PRM 训练。** 公开的序列化代码定义了 `partial_solution`、`mc_value`、`visit_count`、裁判正确/错误 rollout 及子节点等树字段；论文运行生成的树本身并未发布。遍历脚本移除 MC 为 0 或 1 的根，在 MC 为 0 时结束负路径，丢弃不超过 10 个词的路径，按 process 字符串去重，再将保留的正叶子下采样到不超过负路径数。格式化训练样本包含图像、Question/Process 对话与步骤标签列表。论文报告 PRM 从 MM-Policy 初始化，训练 1 个 epoch，batch size 512，学习率 4e-6。
4. **Best-of-N 评估。** 每个策略为每题生成 16 条候选轨迹。MM-PRM 在每个 prm 标记 token 处输出一个分数，再由 Min、Average、Max、SumLogPr、SumLogOdds 或 MeanOdds 压缩为路径分。选中路径的最终答案在 MM-K12、OlympiadBench、MathVista、MathVerse 和 MathVision 上评估。

公开配方不是不可变的论文运行清单。`run_data_pipeline.sh` 与论文一样使用 200 次搜索/1,000 次 rollout 上限，但策略模型路径仍是 `/path/to/model`；如果直接调用 `run_data_pipeline.py`，默认值则只有 20 次搜索和 200 次 rollout。公开 PRM 训练脚本使用 3 个 epoch 和 2e-6 学习率，与论文的 1 个 epoch 和 4e-6 不同。
