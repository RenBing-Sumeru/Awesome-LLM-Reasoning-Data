终稿与固定仓库状态支持下面这条流程重建。

1. **收集 prompt/参考答案对。** original 池来自截至 2023 年的 AIME、MATH、Numina-Math 和 Tulu3 MATH；extended 文件主要由 OpenR1-Math-220k 清洗得到。论文还提到 AoPS 和程序化合成的一般推理任务。公开记录不保留源 ID 或 mixture 比例。
2. **按规则验证能力筛选。** 排除 proof-oriented 以及其他检查器难以可靠评分的任务。使用基于 LLM 的难度过滤，去除通过率为零或过高的样本。过滤模型、prompt、阈值、候选数和逐条决定均未披露。
3. **不经过 SFT 初始化。** 主要 ORZ policy 与 critic 使用 0.5B、1.5B、7B 和 32B 的 Qwen2.5 Base。policy 与 critic 分离，critic 的 value head 随机初始化。“Zero”指 RL 阶段前不做 SFT/蒸馏。
4. **在线采样行为。** 每次生成迭代采样 128 个唯一 prompt，每个生成 64 条响应，即在 packing 或过滤前共有 8,192 条轨迹。temperature 和 top-p 都为 1.0。公开配置允许 2,048 个 prompt token、8,000 个生成 token 和 8,192 个模型 token。
5. **分配终局奖励。** 解析具名 `answer` section；代码还要求 `\boxed{...}`。归一化候选与参考，再检查数学等价。正确为 1，否则为 0；没有中间奖励或独立 format reward。
6. **估值并优化。** 独立 critic 预测 token value。PPO 使用 \(\gamma=1\)、\(\lambda=1\) 的 GAE，clipping \(\epsilon=0.2\)，batch-level advantage normalization，一次严格 on-policy 的 policy 更新，以及 12 个 critic minibatch 更新。policy/critic 的 AdamW 学习率分别为 \(10^{-6}\)/\(5\times10^{-6}\)，betas 为 [0.9, 0.95]，weight decay 为零，warm-up 为 50 个 optimizer step；KL 与 entropy 的有效贡献均为零。
7. **挖掘 hard prompt。** 在 ORZ-32B 前 1,100 步中，保留 64 次尝试里正确数少于四次的 prompt，形成含 13,451 行的公开 hard 文件。论文随后描述 100 个 annealing step，并把学习率衰减到 \(3\times10^{-7}\)。
8. **发布选定表面。** 公开代码、Dockerfile、配置、三个 prompt 文件、评测文件、policy 权重和 critic 权重；不公开精确论文运行的 rollout、错误响应、64-way mining 尝试、reward、value、advantage、GRPO 失败轨迹、不可变日志或 checkpoint-to-data 清单。

复现仍不完整。所有公开 PPO 配置都指向 original 57k，而论文描述约 129k mixture 和 hard-data annealing；mixed-domain 数据/配置也缺失。README 所称 32B 使用 16 个 node，与配置中的每组 32 个 training node 冲突；仓库既没有 tag，也没有 GitHub Release。
