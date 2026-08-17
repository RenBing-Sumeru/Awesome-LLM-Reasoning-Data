Agent-FLAN 不再让模型模仿一种僵硬轨迹格式，而是训练按能力配比的自然对话与明确的“不调用工具”样本，从而避免格式损失占主导，并同时学习如何行动和何时行动。最接近的比较对象是 AgentTuning；反馈边界结合上游任务正确性与构造的负例条件，决定分类的是公开训练混合，而不是 Agent-H。

Google Scholar 引用数：150（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Agent-FLAN%3A+Designing+Data+and+Methods+of+Effective+Agent+Tuning+for+Large+Language+Models&author=Zehui+Chen&hl=en）

开放数据集：是
数据集名称：Agent-FLAN
官方地址：https://huggingface.co/datasets/internlm/Agent-FLAN
规模：论文统计 24,703 条记录；七个公开文件覆盖 AgentInstruct 与 ToolBench 的多种转换，其中 ToolBench 为 22,867 条
记录形式：每条含编号和对话轮次，轮次保存角色、内容与损失标记；内容中序列化状态、思考、动作、工具参数或观察、最终答案和负例响应
文件与存储格式：七个 JSONL 文件，官方仓库清单合计约 219 MB
领域与语言：主要为英语；覆盖网页购物、家务文本环境、网页导航、知识图谱、操作系统、数据库和接口调用
构造与筛选：把 ReAct 或 JSON 改写成对话，拆分四类能力并重加权，保留合格上游轨迹，再增加两类工具使用负例
许可与访问限制：官方数据集与代码仓库均为 Apache-2.0；继承的上游数据条款仍然适用
预期用途：通用代理和工具使用模型的监督微调
