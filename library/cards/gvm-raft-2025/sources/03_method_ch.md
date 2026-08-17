**输入。** 每轮抽取 1,024 条 Numina-Math 提示/oracle 答案对，并使用当前 policy checkpoint。主要实验采用 Qwen2.5-Math-1.5B 与 Qwen2.5-Math-7B；表 1 还包含 Llama-3.2-1B-Instruct 和 Llama-3.2-3B-Instruct。精确 Numina 修订与论文运行的 item manifest 未知（附录 C）。

**Pilot 生成与测量。** Policy 为每个提示采样 `N'` 个回答。官方 stage-1 代码使用温度 1.0，并保存 `problem`、`answer` 和全部 `outputs`。Math-Verify 对最终答案评分；接受比例估计 `p_i`，被接受 pilot 的 log-likelihood 梯度范数估计 `G_i`。发布的分配代码在 `p_i` 或 `G_i` 为零时把原始权重置零，这是运行 ledger 必须保留的操作边界。

**分配与追加生成。** Algorithm 2 把方差驱动的权重归一化到固定总预算 `N`，附录 C 再描述整数调整以保证总和精确。主要设置包括 `N'=8,N=8n` 和 `N'=32,N=32n`；附录 C 还报告 `N'=8,N=4n` 与 `N'=16,N=16n`。官方 stage-2 代码同样以温度 1.0 采样，并通过配置限制逐提示追加数量。对 GVM-GRPO，`n_i` 被转换为重复提示副本，每个副本生成四个 rollout。

**训练消费者。** GVM-RAFT++ 把动态采样且被接受的回答放入 replay buffer，执行多次带 clipping 的重要性加权更新，并大约每十个 M-step 刷新 posterior/分配；由于收集批次略少于 10,240 条，附录 C 报告每轮实际完成九个 update step。GVM-GRPO 在标准 group-relative 更新前应用该分配，同时使用正、负最终 reward。

**公共设置。** 论文报告 prompt length 1,024、response length 3,072、context 4,096、mini-batch 256、无 warmup 的恒定学习率 `1e-6`、KL 系数 `0.001`、`alpha=0.001`、`beta=2`，并使用 verl 实现。一次典型 `N'=8,N=8n` GVM 迭代在 4×H100 上耗时 90 分钟；整体实验使用 A6000 与 H100（附录 C、表 2）。

**输出与复现边界。** 可靠运行应保存来源/item ID、policy checkpoint 与 chat template、seed、全部 pilot/追加回答、抽取答案、Math-Verify 版本与输出、`p_i`、梯度层与归约、`G_i`、整数 `n_i`、接受/拒绝状态、replay/group 成员、optimizer step、token 数和计算量。仓库公开了脚本与本地中间记录 schema，但代码中出现多个 Numina 路径，也没有不可变 manifest 把发布默认值与每张表或图的运行逐一绑定。
