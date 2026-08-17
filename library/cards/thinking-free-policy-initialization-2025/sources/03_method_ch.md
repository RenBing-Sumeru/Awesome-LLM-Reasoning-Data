训练在 VeRL 与 DAPO 上使用 DS-1.5B、Qwen3-4B、DS-7B 和 Polaris-53K prompt。共同设置为 batch size 256、learning rate 1e-6、无 warm-up、无 KL 或 entropy loss、temperature 1、top-p 1、top-k -1，以及每题八条 rollout。Direct RLVR 对 1.5B/7B 模型使用 16K 最大输出长度，对 Qwen3-4B 使用 32K。TFPI 则让 DS-1.5B/DS-7B 按 2K→4K→8K 分阶段训练，让 Qwen3-4B 按 4K→8K→16K 训练；论文逐阶段报告 step 与 H20-hour 预算。

采集时，原始 query x 被变换为 x'=ThinkingFree(x)。policy 在 x' 条件下采样八个 y；与原问题相同的 rule-based outcome reward 为每条响应打标签，DAPO 再计算 group-relative advantage 与 clipped token-level update。后续 TFPI+RL 条件恢复普通 thinking template 和更长响应上限。评测区分数学（AIME24/25、BeyondAIME）、多任务推理（GPQA-Diamond）、代码（LiveCodeBench）与指令遵循（IFEval），并记录不同的采样次数和 decoding 参数。

官方仓库包含训练/评测脚本、Polaris-53K 下载脚本、TFPI-EVA，以及中间阶段和 direct-RL checkpoint。复现仍需固定 commit 与数据 revision；仓库没有证明所有在线 rollout 文本、被拒样本、reward 结果、dynamic-sampling 决策或 WandB 日志均已发布。
