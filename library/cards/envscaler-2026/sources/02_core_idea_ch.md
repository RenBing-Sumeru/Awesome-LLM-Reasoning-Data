EnvScaler 的核心变化是在扩展交互数据之前先扩展可执行环境。SkelBuilder 从筛选后的任务池归纳候选 world，生成 state schema、constraint rule、operation、class code 与 documentation，并保留能通过反复 LLM-agent 检查的候选环境。ScenGenerator 再加入 initial state、task、checklist text，以及只在 RL 发布中出现的 Boolean Python check function。这样便把“agent 可以做什么”与“如何判断最终成功”分离开来。

一条公开 environment row 包含 env_id、summary/introduction、state-space definition、constraint rule、operation/tool schema、environment class name、executable code/definition 与 function detail。对 191 个保留环境，论文 Table 2 报告平均每个环境有 4.58 条 constraint rule、21.38 个 state category 和 18.58 个 tool。SFT 与 RL scenario 都含 environment/task ID、class name、JSON-serialized initial configuration 和 task text；只有 RL scenario 公开包含 checklist_with_func。

公开 SFT trajectory record 是 conversation 或 non-conversation transcript，包含 task_info、序列化 tool definition、system/user/assistant/tool message 与 tool call、适用时的 simulated-user message，以及 step count。这确实是已发布 trajectory data，但不能与论文的 online RL rollout 混为一谈：官方 collection 没有 RL rollout dataset、reward-trace archive、完整 final-state log 或成功/失败 rollout corpus。

feedback contract 是 mixed。RL runtime 中，每个生成的 check function 对最终 environment state 判断一个 Boolean condition，reward 是通过 check 的比例，因此形成 [0,1] scalar。但 environment 与 check 本身由 LLM agent 生成和筛选，raw pass/warning/fail vote、rejected check 以及独立 false-positive/false-negative audit 都缺失。所以，使用时可程序执行并不意味着端到端契约是纯 programmatic。

termination 也不同于 success。non-conversation episode 在模型输出 Task Completed 或达到 action limit 时结束；conversation episode 在 simulated user 输出 ###STOP### 或达到 action limit 时结束。只有带 verifier 的 RL scenario 会计算 terminal-state checklist reward。SFT environment 有意返回 zero reward 且省略 check function，因此干净的 completion marker 不能证明某条公开 SFT trajectory 已正确完成任务。

accepted metadata 指出的 Atlas 近邻包括 Feedback-Driven Tool-Use Improvements via Automated Build Environments、EnvFactory 与 ScaleEnv。EnvScaler 已核验的方向信号是清晰的四对象发布，以及 SFT transcript construction 与 verifier-bearing RL scenario 之间的分工。本 Card 不在 evidence ledger 之外推断比较优势。
