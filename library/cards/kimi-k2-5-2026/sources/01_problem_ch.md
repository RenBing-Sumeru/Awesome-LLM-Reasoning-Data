多模态智能体报告可能披露架构、评测预算、工具和强化学习目标，却不公开决定该管线能否复现或审计的训练记录、教师版本、环境配置、reward rubric 和 rollout 日志。当文本、图像、视频、代码、工具使用与多智能体协同共用一个后训练系统时，这些缺失 artifact 尤其重要。

Kimi K2.5 对其多模态 SFT/RL 和 Agent Swarm 框架给出了异常详细的描述，但没有发布 SFT/RL 数据集、教师输出、Unified Agentic RL Environment、sandbox、任务 manifest、GRM rubric、reward 校准或轨迹日志。本卡片记录已披露的数据与反馈接口，而不将开放 checkpoint 视为可复用的后训练发布。
