在匹配训练算力的条件下，表 1 报告三个 TFPI 阶段把 DS-1.5B 的六项 benchmark 总平均从 22.0 提高到 29.2，把 Qwen3-4B 从 60.3 提高到 63.8，把 DS-7B 从 42.2 提高到 47.8；对应 direct-RL 条件分别达到 25.3、60.2 和 43.0。论文还报告 ThinkingFree 变换在 meta-experiment 中使输出 token 减少 70% 以上，并使后续标准 long-CoT RL 的 rollout 更短。论文强调的 4B 模型仅经过 TFPI，在不到 4K H20 hours 下于 AIME24 达到 89.0%，于所研究的 LiveCodeBench 子集达到 65.5%。

这些是指定评测协议下的模型训练与效率结果。它们不能证明短 rollout 是忠实解释、二元 reward 没有错误，或采集轨迹构成高质量数据集。官方仓库与 checkpoint collection 提升了复现条件，但仍未提供完整的 item-level trace 与 reward 审计链。
