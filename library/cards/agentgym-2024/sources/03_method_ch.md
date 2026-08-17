输入包括环境服务、任务指令、可用动作、observation、LLM-agent policy，以及发布或收集的轨迹。AgentGym 统一交互接口，使 agent 能通过共同 controller 跨 14 个环境运行，而不是为每类任务写一套脚本。

流程：

1. 初始化环境/任务，暴露 observation 和有效或可用 action surface。
2. agent 以 ReAct-style 格式输出 thought/action 步骤。
3. 环境执行 step，返回反馈，并持续到成功、失败或达到最大轮数。
4. 保存 trajectory，字段包括 task id、environment id、observation、action、feedback、reward 或 success label，以及 metadata。
5. 同一平台支撑 AgentEval benchmark、AgentTraj/AgentTraj-L 监督轨迹，以及 AgentEvol 式训练或自我改进。

输出包括 benchmark 分数、轨迹数据集、训练 checkpoint 和环境级诊断 trace。复现时必须固定 ACL 版本、项目/仓库 commit、环境服务版本、任务 split、最大轮数策略、轨迹来源混合、模型 checkpoint、采样预算和过滤规则。
