报告流程可以在模块层面重建，但官方方法实现目前不可用。

1. **输入与划分。** 策略从 Llama-3-8B-Instruct 初始化，RM 从 FsfairX-Llama3-RM-v0.1 初始化；提示来自约 6 万条 UltraFeedback。论文把提示分成两个策略更新部分和一个 RM 更新部分，即三分之二用于策略更新、三分之一保留给 RM 更新。此外，还从 UltraFeedback 随机抽取固定 2000 条 `D_MS` 用于 checkpoint 选择。精确记录 ID 和集合间是否不相交均未知。（论文 §5.1；附录 B–C）

2. **E-step 候选生成与 pair 构造。** 对每条策略更新提示，当前策略以温度 0.8、top-p 0.95 采样 `M=5` 个响应，当前 RM 对全部响应打分。为控制长度，先保留高于该提示平均奖励的响应，再选其中最短者作为 `chosen`，最低分响应作为 `rejected`。随后以迭代开始时的策略为参照，进行一个 epoch 的 DPO：beta 0.01、batch size 128、最大序列长度 2048、学习率 `7e-7`、cosine schedule、warmup ratio 0.1。（论文公式 4；附录 B）

3. **策略 checkpoint 选择。** 每 50 step 保存一次 checkpoint。在 `D_MS` 的每条提示上，分别由候选 checkpoint 与该迭代开始时的策略生成一个响应，再由当前 RM 选择高分响应，汇总为胜率。保留胜率最高的 checkpoint；若最高值低于 `tau=60%`，则终止并保留上一策略。论文的四迭代扩展在第 4 次迭代实际触发了这一分支。（论文公式 6–7；附录 B、H）

4. **M-step 策略比较记录。** 对每条 RM 更新提示，由选中策略生成 `y_t`，上一策略生成 `y_{t-1}`，先暂定 `y_t` 优于 `y_{t-1}`。计算 `delta_r = r_{t-1}(y_t) - r_{t-1}(y_{t-1})`，并把上一策略响应在 RM 更新数据上的分数标准差设为 `epsilon_t`。最终采用的 Low-Quality Data Filtering 会在更新响应明显更差时丢弃 pair，即 `delta_r <= -epsilon_t`；其余全部保留，其中包括 `-epsilon_t` 到 0 之间的轻微负差值。（论文公式 5、8；附录 F）

5. **RM 更新与下一轮。** 用混合数据训练 Bradley–Terry RM：一部分是先前由 RM 排序得到的 self-training 偏好，另一部分是筛选后的更新策略对上一策略比较。为减轻相同提示反复训练导致的过拟合，每次 RM 迭代都从基础 RM 重新开始，而不是沿用上一 RM checkpoint。设置为一个 epoch、batch size 512、最大序列长度 2048、学习率 `2e-6`、cosine schedule 与 0.1 warmup。更新后的 RM 再为下一份策略更新数据标注。主要设置执行两次迭代，使用 8 张 NVIDIA A100。（论文 §5.1、§5.3；附录 B）

最终训练对象包括 DPO pair、checkpoint 比较结果、筛选后的策略比较 pair、RM 分数、阈值、策略/RM 身份与迭代链路。忠实实现必须对这些对象全部做版本记录，包括被丢弃的 pair；还需固定 UltraFeedback 修订版、tokenizer 与 chat template、生成引擎、FsfairX checkpoint、响应分数约定、随机种子、`D_MS` 成员和评测 harness 版本。论文链接的仓库没有这些记录级 manifest 或 Mutual-Taught 配置：当前唯一分支包含 Alignment Handbook 内容，也没有方法专用 tag 或 release。

监督粒度是 pairwise preference 加 scalar reward，不是 step-level process supervision；训练用途限于 preference learning 与 reward modeling。AlpacaEval-2、Arena-Hard、RewardBench 及附加 leaderboard 任务只是评测面，不是报告训练中的程序化奖励。
