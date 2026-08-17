本卡片的稳定书目记录始于 2025 年 6 月 9 日提交的 arXiv:2506.07982v1，正式论文随后收入 ICML 2026、PMLR 306。因此 entry id 与元数据年份保留首次公开年份 2025，venue 则记录后续正式发表信息。官方 Sierra 项目页、arXiv、OpenReview 与官方仓库构成主要来源。卡片中的记录级发布结论固定到 2025 年 6 月 12 日的 `v0.1.0` tag，因为持续更新的仓库当前已展示 tau3-bench，并修改了任务、evaluator、运行模式与 split。

论文针对一种客服智能体 benchmark 的局限：模拟用户只负责描述问题，只有客服 agent 能控制环境；但真实服务过程经常要求双方行动，例如 agent 在 CRM 中修改账户的同时，用户检查手机设置或执行设备侧操作。tau2-bench 将这种交互建模为 Dec-POMDP 风格的双控制 episode。agent 与模拟用户交换自然语言消息，调用彼此不同的 typed tool，观察工具输出并共同改变 shared state；每个 turn 只允许一方行动。

可复用对象不只是一段对话。每条 task record 包含 id、description、结构化 user scenario 与 persona、已知和未知信息、ticket、初始化数据与 action、可选 message history、reference action、environment assertion、communication 与 natural-language check，以及 reward basis。发布的 episode 把该任务规范与有序 assistant/user/tool message、tool-call 参数与 observation、state transition、时间戳、usage/cost、termination reason、各 verifier component 结果、最终 scalar reward、trial 和 seed 绑定起来。该结构使论文属于 `environment_agent_trajectory_data`：环境同时参与轨迹生成与成功判定。

最强的新构造证据来自 telecom。覆盖 service、mobile-data 与 MMS 问题的 15 个 atomic subtask group 被组合为 2,285 个完整任务，论文从中抽取 114 个用于评测。airline 与 retail 是继承的 benchmark domain，不能据此声称所有领域都采用了相同的双控制构造。现有证据可按 L4 深度描述数据对象、构造 pipeline、simulator/environment、反馈契约、发布的成功/失败轨迹及版本风险；已接受的 `curation_level` 仍保持 `L3_summary_ready`。继承任务 lineage、去污染、数据/轨迹权利、外部 API 复现性、annotator 细节与 verifier 校准仍未解决。
