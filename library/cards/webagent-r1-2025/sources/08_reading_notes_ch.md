
- 将公开的 9,460 条 program-solver BC 轨迹与在 647 个 RL 任务上采样、但未发布的 current-policy 轨迹严格分开。
- 把 reward 理解为终局任务 checker——string match、URL match 或 program execution——而不是中间推理质量标签。
- 将行为克隆视为 RL 数据契约的一部分：在论文 ablation 中，WebAgent-R1-Zero 很少获得正奖励，且没有改善。
- 把交互次数记录为 test-time budget；论文的扩展分析依赖更长的多轮 episode，而不是更长的单轮 response。
- 复用前应索取 M-GRPO group size、rollout 数量、seed、任务调度、环境 snapshot、在线轨迹、checkpoint 与去污染证据。
