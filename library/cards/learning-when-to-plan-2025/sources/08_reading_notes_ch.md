
- SFT 数据对象是 1,024 条由 Llama-3.3-70B-Instruct 生成的 Crafter trajectory，均匀采样 16 个 plan prompt，并从 2 到 12 均匀采样 planning interval。
- Timestep 由输出格式标记：可选 plan 标签文本块 token 后跟一个 action，或不重新规划而只输出一个 action。
- Plan-aware SFT 与 action-only 对照使用相同底层 action；PPO 再用 Crafter task reward 训练可选 plan/action policy。
- PPO 每 batch 含 192 个长度为 16、temperature 1.0 的 rollout；总 rollout 数、seed、terminal predicate 和 raw release 仍为 unknown。
- 在所研究环境中，中间 fixed planning frequency 优于两个极端，但这是 policy evidence，不是 trace-data quality 证明。
