论文与固定的 `paper` 分支支持按下列步骤重建流程。

1. **初始化 curriculum。** 从人工指定的 identity-function triplet 开始。在任何模型更新之前，用预训练 base policy 生成有效 seeds。7B 设置中，`B × S = 64 × 4 = 256` 条记录进入每个初始 buffer；已检查的两个 7B seed JSONL 文件都包含 256 行。
2. **采样 proposer context。** deduction 或 abduction 均匀选择 `K = 6` 个历史 `(program, input, output)` reference；induction 从 deduction/abduction buffer 采样一个 program。人工编写的角色 prompt 与任务格式包裹这些 context。
3. **提出任务。** 当前 policy 输出 R1 风格的 reasoning 与 answer section。deduction/abduction proposal 指定 Python program 与 input，再由 executor 导出 output。induction 针对 buffer 中的 program 提出十个 input 和一条自然语言 message，再由 executor 导出十个 output。
4. **验证并写入 buffer。** 解析任务特定 block，以十秒 timeout 执行 program，要求存在返回值，拒绝配置中禁用的模块/关键词，并执行两次检查 output 是否一致。induction 要求十个 input 全部成功执行。所有有效任务无论难度都进入 buffer；当前 proposal 优先填充 solver batch，不足部分由历史记录回填。
5. **估计 proposer learnability。** 每个 proposed task 运行八次当前 policy 的 solver 尝试，并用成功率估计难度。Equation 4 在成功率为零时给出 learnability `0`，否则为 `1 - success_rate`；实现把非正 terminal role score 映射为 `-0.5`。
6. **构造 solver instance。** deduction 暴露 program 与 input，要求 output。abduction 暴露 program 与目标 output，接受任意执行后能达到目标的 input。induction 暴露五组 I/O 与 message，再用另外五组 hidden example 检查生成程序。
7. **赋予 terminal reward。** 正确且格式合规的 output 获得 role reward；格式正确但错误为 `-0.5`，格式失败为 `-1`。reward tensor 只附着在 response 最后 token，没有步骤正确标签。
8. **优化六个 role group。** Task-Relative REINFORCE++ 使用六个 task-role baseline 与 clipped PPO objective。论文设置采用 AdamW、learning rate `1e-6`、gradient clip `1.0`、一个 PPO epoch、entropy coefficient `0.001`，且没有 KL loss 或 KL reward。

主要 7B 设置为 batch `64 × 6`、500 steps、prompt length 6144、response length 8096、rollout temperature `1.0`、top-p `1.0`、一次 training rollout、八个 accuracy-estimation sample 和六个 reference（论文 §4.1；Appendix Table 4）。每个实验据报告在 A800 cluster 上运行约 3–5 天；`paper` 分支 README 为 3B/7–8B/14B 分别注明 2/4/8 张 80GB GPU。

复现时必须固定 `paper` 分支，因为 `master` 已发生漂移，仓库也没有 tag 或 release。还必须隔离 executor：公开实现在线程进程中使用原始 Python `exec`/`eval`、denylist 与 timeout，README 明确警告其不适用于生产。精确的论文运行 buffer、随机 seed、完整 rollout/reward stream、checkpoint hash 与 run-to-log 映射都没有发布。
