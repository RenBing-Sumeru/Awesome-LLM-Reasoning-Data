可重建流程如下：

1. **参考解答与策略初始化。** 使用 GSM8K 和 MATH 训练题。Qwen2.5-72B-Instruct 重写参考推理；再微调 DeepSeek-Math-7B-Base 或 Qwen2.5-7B-Base 使其生成推理，采样多条路径，并按最终答案把路径标为正确或错误。
2. **教师批评合成。** 向教师提供问题、策略推理与参考解答，生成批评/纠正目标。随后把错误推理与批评重新作为上下文，采样八条纠正；至少六条正确时才保留。论文报告得到 60K 样本，按正确路径 `D+` 和错误路径 `D-` 划分后用于 Pair-SFT。
3. **Pair-SFT。** 在 `D+` 上训练完整推理-批评-纠正序列；在 `D-` 上给定错误推理，训练批评与纠正。混合权重为 1，batch 256，AdamW，余弦日程，warmup 0.03，训练五轮；DeepSeek/Qwen 学习率分别为 `5e-5`/`1e-5`。
4. **RL 提示选择。** 从清洗后的 Numina-CoT 开始，先移除没有标准数值答案的证明题。每条提示由初始策略和教师各采样八次；移除策略 8/8 全部答对的提示，以及教师 0/8 全部失败的提示。剩余数量未报告。
5. **On-policy episode 收集。** 当前策略生成推理、四条批评，并为每条批评生成八条纠正，即每个推理 episode 有 32 条纠正 rollout。temperature 0.6、top-p 0.9、最大输出 2,048 tokens；分别赋予推理正确性奖励、Monte Carlo 批评奖励与幻觉调整、纠正正确性奖励与 bonus。
6. **PPO 与刷新。** 用 PPO 最大化各阶段奖励之和，并相对冻结的 Pair-SFT 策略施加 0.05 的 KL 惩罚；更新后再从新策略采样下一轮 buffer。PPO 使用 batch 1,024，policy/value 学习率 `2e-6`/`5e-6`，GAE lambda 0.95、gamma 1，最多 1,500 步。（附录表 9-10。）

实验运行在 Linux、8 张 NVIDIA A100、PyTorch 2.4.0、verl、FSDP、FlashAttention-2 与 vLLM 上；一次完整 RL 训练约耗 960 GPU-hours。忠实构建还需固定来源版本、实际执行提示、答案抽取/等价判断代码、全部失败样本、随机种子、policy/value 检查点、`h(c)` 语义和 buffer 轮次清单；官方仓库均未提供。
