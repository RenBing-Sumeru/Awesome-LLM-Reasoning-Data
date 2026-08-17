WebSeer 用同一个“答案—反馈—反思”循环连接两个阶段。在 SFT 冷启动阶段，reasoner 生成工具增强路径，独立 verifier 使用相同工具，同时返回二元判断和证据路径。系统最多可在未披露的预算 (K) 内重复查询 verifier，并用已知答案检查判断是否一致；只有最终得到正确答案且判断一致的 episode 才会保留。达到预算仍未成功或无法验证的样本会被丢弃。

Self-Reflective Reinforcement Learning（SRRL）随后允许一次 rollout 内多次提交答案。每次提交得到任务特定的标量反馈，论文以 F1 为例，并把该分数以文本形式写回对话；分数低于阈值时，策略可以继续推理。SFT 监督智能体自身的推理与动作，同时屏蔽 observation token；RL 则通过答案得分、输出长度惩罚以及随提交次数指数衰减的正确性奖励，对完整 episode 提供反馈。正是这种重复提交的 rollout 对象，使该工作归入 `rollout_search_test_time_trace_data`。
