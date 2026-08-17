**主张。** 主动搜集证据的 agent 评测比一次性 LLM judge 更接近论文的人工共识标签。**受控设置。** 表3将同一批 MetaGPT、GPT-Pilot 与 OpenHands workspace 对照三位专家共识，比较 Agent-as-a-Judge 和 LLM-as-a-Judge，分别报告黑盒和灰盒条件。

**结果。** 对 OpenHands，Agent-as-a-Judge 的黑盒和灰盒 alignment 为90.44%和92.07%，LLM-as-a-Judge 为60.38%和70.76%。消融中 ask、graph、read、locate 达90.44%；在该 OpenHands 黑盒设置加入 retrieve 为90.16%。

**边界。** 这些数字只衡量其与作者招募的少量专家在55个 DevAI 任务上的共识，不证明对任意 agent 环境的正确性，也不证明所有模块都能因果泛化。
