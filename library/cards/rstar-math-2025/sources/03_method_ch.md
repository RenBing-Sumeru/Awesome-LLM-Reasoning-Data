现有证据支持按下列步骤重建流程，同时也显示出复现前必须固定的若干设置。

1. **收集并扩增题目。** 汇集 747K 道带答案文字题，主要来自 MetaMath 和 NuminaMath 的竞赛级部分。以 7.5K 道 MATH-train 题和 3.6K 道 AMC-AIME 训练题为种子，让 GPT-4 为每道合成题生成十个解答；至少三个解答一致时才保留题目。精确来源计数、题目 ID、标准化和去重规则未发布。
2. **第 1 轮 bootstrap。** 以 DeepSeek-Coder-V2-Instruct (236B) 为 policy。在每个节点提出 code-augmented 自然语言步骤，拼接累积 Python 程序并执行，只保留运行时有效的子节点。第 1 轮使用八次 rollout、每步五个候选。
3. **赋予 terminal 与步骤 value。** 提取 terminal answer 并与 ground truth 比较，把 +1 或 -1 反向传播至访问过的节点。运行错误、达到深度上限或没有有效子节点都可能以负 reward 终止。代码执行与答案等价是两个不同检查。
4. **生成 SFT 记录。** 按平均/最小 Q 对正确轨迹排序，每个 prompt 最多保留两个，并剔除 response 中含 `error` 的样本。轨迹正确率低于 50% 的合成题被移除。
5. **刷新 policy。** 每轮从初始 Qwen2.5-Math-7B base 开始微调两轮，sequence length 4096、batch 128、AdamW、learning rate 7e-6；所得 SLM 成为下一轮生成器。
6. **生成并训练 PPM 数据。** 对同时出现正确与错误结果的题目，取两个高 Q 且后续到达正确 terminal 的候选，以及两个低 Q 且后续到达错误 terminal 的候选。官方仓库还要求 pair 的 Q-margin 至少为 0.5、编辑距离至少为 20。PPM 使用 scalar tanh head 和 Bradley-Terry pairwise ranking；论文报告训练一轮、batch 512、learning rate 7e-6。
7. **运行第 2–4 轮。** 第 2 轮用 SLM-r1 执行 terminal-guided MCTS，通常为 16 次 rollout、每步八个候选。第 3–4 轮先由上一轮 PPM 初始化节点 value，再加入 terminal update。第 4 轮采用 16 个候选及两棵不同 seed 的树；困难未解题额外进行 64 次、必要时 128 次 rollout。
8. **打包并使用输出。** 正确轨迹用于 policy SFT，偏好对用于 PPM 训练，PPM 则指导后续轮次与 test-time MCTS。公开发布把这些输出扁平化为 SFT 与 PPM 表，没有发布其搜索树 substrate。

论文默认还报告最大深度 16、UCT constant 2。生成阶段的 bootstrap 约使用十个节点、每节点 8×80GB H100，耗时两周；后续普通轮次约使用十五个节点、每节点 4×40GB A100，各耗时三天，扩展后的最终轮约一周（Appendix A.2；Table 7）。逐题 seed 与实际预算、temperature、依赖/container、训练后 checkpoints 和原始搜索树均缺失，因此无法按论文精确重放。已检查配置使用 `n_generate_sample: 12` 和 `iterations: 48`，与论文的候选/rollout 设置不同；README 中 reward-model 训练两轮的示例也与论文报告的 PPM 一轮训练不一致。
