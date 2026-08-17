本卡片的权威记录是 2026 年 6 月 14 日修订的 arXiv:2606.13608v2，accepted venue 为 **arXiv preprint**。AgentBeats 文档还链接了一篇题为 *Position: Agent Evaluation Should Be Agentified for Openness, Standardization, and Reproducibility* 的 ICML poster。由于该标题与本卡片论文不同，且没有核验到官方身份映射，本卡片不把 ICML 写成该 arXiv 记录的 venue。

传统 agent assessment 往往封装在 benchmark 专用代码中：任务获取、环境启动、工具暴露、subject-agent 交互、停止、评分与结果格式相互耦合。这样既难连接独立开发的 agent 与 judge，也难比较不同 score 的含义。AgentBeats 用 Agentified Agent Assessment (AAA) 处理这一接口问题：benchmark 被封装为 judge agent，被测系统是 subject agent，delegator 通过 endpoint 与 configuration 绑定双方，并分别用 A2A 传递任务消息、用 MCP 暴露工具。

本工作对应的数据对象是一条 assessment episode，而不是孤立的 prompt 或 answer。它的协议外层包含 assessment request、参与方 role/endpoint、configuration、judge 下发的 task、可选 A2A/MCP event、tool 或 environment observation、subject response 与 output artifact、final environment state、judge metric、score，以及内部 schema 随 assessment 变化的 JSON result report。judge 可以使用固定或自适应任务，也可以通过程序化 test、environment predicate、语义 prompt/LLM judgment 或混合方式评分。

尽管论文没有发布集中式 trajectory dataset，这种 episode 与 feedback 边界仍使其属于 environment_agent_trajectory_data。现有证据足以深入描述 protocol、角色、部署模式、field study、coding case、feedback contract 与审计风险；但 accepted curation_level 仍保持 L3_summary_ready：与 arXiv v2 绑定的实现 commit、image、configuration、逐条 trace/result、replay manifest、权利、去污染与 retention policy 仍为 unknown。
