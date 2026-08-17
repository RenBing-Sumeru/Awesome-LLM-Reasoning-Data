Tool Zero 的核心机制是 GG-GRPO：从 Qwen2.5 Base 直接运行 GRPO，并用一个按训练进度调度的程序化奖励，把早期的参考 token 部分重叠逐步切换为严格的 reference-AST 等价。因此，“Pure RL”表示没有 SFT 初始化，不表示无标签学习，因为 ToolACE/xLAM 的参考调用仍嵌入奖励契约。（论文 §4.2–4.3，公式 2–9）

反馈一次性附着在生成的整段 completion 上。最终标量为 `R_final = R_format + R_tool`。格式分量检查必需的 think/answer 起止分隔符是否按顺序出现。早期 `r_general` 根据输出与参考答案的分隔符 token 重叠给出 `[-0.5, 0.5]` 范围内的部分分；后期 `r_strict` 仅在生成 AST 与 reference AST 相等时取 `1`。论文报告用 `kappa=0.1`、midpoint `25` 的 sigmoid 混合两者；多工具协作加 `0.3`，每个无效参数值扣 `0.3`。

该 verifier 能观察输出格式合规性、表面 token 重叠、相对于单一参考的 AST 等价、多工具使用和无效参考参数值。它不能观察另一种调用或工具规划是否语义等价、调用在 live environment 中是否成功、最终世界状态是否满足用户目标，也不能判断哪一步推理正确。因此监督粒度是 `full_episode` 加 `scalar_reward`，不是逐步 process supervision。

相对于 vanilla GRPO 和 SFT baseline，论文改变的是训练期间的奖励严格度，并将其与 base-model direct RL 组合。Tool-name masking 和基于参考调用的打分沿用了既有函数调用实践；ToolACE/xLAM、Qwen2.5、GRPO、AST matching 与 MindSpeed-RL 都不是本文提出的。最接近的数据/模型对照是 ToolACE 与 ToolRL，但论文主张的价值是调度后的反馈契约，而不是新语料。
