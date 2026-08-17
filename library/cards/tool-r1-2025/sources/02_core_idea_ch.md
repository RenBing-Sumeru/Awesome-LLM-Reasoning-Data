Tool-R1 把难度感知的逐题轨迹队列、response-masked GRPO 和回答加代码的混合奖励组合起来，使近期在线工具使用 episode 能够复用，同时不让策略学习模仿工具返回的 observation。模型生成的 Thought 和 Python Code token 参与 policy loss；环境返回的 Observation token 被 mask。（论文 §3.1–3.3）

反馈契约附着在完整 episode 上。Qwen2.5-3B-Instruct 根据准确性、完整性、相关性和精确性，对问题、参考答案与预测答案进行比较，把 Correct/Partially Correct/Wrong 映射为 `1/0.5/0`。程序化的 `R_parse=N_parsed/N_total` 和环境侧的 `R_exec=N_executed/N_parsed` 提供辅助信号；总奖励为 `R_answer + 0.3 R_parse + 0.3 R_exec`。

该契约可以观察 learned judge 所理解的最终答案一致性、代码块能否解析，以及已解析代码是否无 runtime error 地执行。它不能证明逐步推理正确、可执行代码相关或安全、可运行 action 对答案具有因果作用，也不能证明 judge 已校准。因此这里是完整 episode 的标量监督，而不是 process label。

它代表的方向是面向可执行代码组合工具和可复用在线 episode 的样本高效 agent RL。论文最接近的定量比较是 MAT Agent：论文报告 MAT Agent 使用 20k 条问答加轨迹记录，而 Tool-R1 从 1.3k 对问答及动态 rollout 队列训练。由于 base model 和系统细节不同，这并不是只改变数据的受控比较。
