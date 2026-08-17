源数据阶段抓取 PlanetMath 数学页面，移除与数学概念无关的页面，并要求 GPT-4o 从页面中抽取概念、简要解释以及一至三个大类。冷启动构造时随机抽取五条记录。提示要求生成一个目标统一、非证明式、可用数值、符号、表达式或方程回答的题目；同时至少使用两种难度策略：多步推理、跨主题整合、逆向逻辑、干扰条件、抽象建模、多种解法、高级变换、极端条件或非标准表示。

论文报告：Qwen3-8B 先以 LoRA rank 16 在 8 张 H100 上做五个 epoch 的 SFT；随后以 MathSmith-SFT 为 reference 做 GRPO。奖励阶段对复杂度和一致性均使用 K=5 个 Qwen3-30B-A3B 样本，结构与推理内部权重均为 0.7/0.3；策略与教师推理合计使用 20 张 H100，最终选择第 100 步 checkpoint。下游 baseline 通过 LLaMA-Factory 以学习率 1e-5 训练五个 epoch。

当前仓库有复用价值，但不是论文原始运行的精确 manifest。其 GRPO 示例脚本把 rollout group 设为 6，奖励代码默认教师样本数为 3、最大生成长度为 32,768、温度为 0.3，而 SFT YAML 使用八个 epoch；这些设置与论文的 K=5、20 GPU、五 epoch 叙述不同。因此，发布物证明了存在可执行 scaffold，但论文运行配置仍有部分未知。

题目数据集公开 sampled_concept、rationale 和 problem；解答数据集公开 problem、answer、可选的 answer_dict/highest_freq 与 sampled_concept。所检查页面只有一个 train split，且没有稳定的跨发布 ID。
