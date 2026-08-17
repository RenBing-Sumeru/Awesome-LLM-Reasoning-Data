官方主来源是 arXiv/ICML 2024 论文《GPT-4V(ision) is a Generalist Web Agent, if Grounded》（arXiv:2401.01614），辅以 SeeAct 官方项目页、GitHub 仓库和 Hugging Face 上的 Multimodal-Mind2Web 数据集核验 artifact。论文要回答的问题是：当前多模态大模型是否已经能成为通用网页智能体；如果高层计划能力已经较强，真正限制在线执行的是否是把计划 grounded 到网页元素和动作上的能力。

这里相关的数据对象是 web-agent 环境与轨迹记录，而不是普通多模态问答，也不是单纯的模型训练配方。一个评测实例包含用户任务、网页状态、截图和/或 HTML 证据、候选元素或动作目标、agent 决策，以及离线或在线成功信号。论文的价值在于把“看网页并行动”的问题拆成可分别审计的 planner、grounder、live-browser runner 和 success predicate。
