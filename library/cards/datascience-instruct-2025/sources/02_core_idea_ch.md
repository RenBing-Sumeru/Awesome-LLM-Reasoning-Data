该流程合成包含规划、代码执行、观察和最终报告的多轮轨迹，并整理为 50 万条指令记录。 相比在通用指令模型外编排工作流的方法，本文把记录编号、多轮消息、输入输出词元统计和执行评估作为可复用目标，并以沙箱执行、产物检查和任务级评估信息作为反馈契约，因此应归入 Track 01。

Google Scholar 引用数：34（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=DeepAnalyze%3A+Agentic+Large+Language+Models+for+Autonomous+Data+Science&author=Shaolei+Zhang&hl=en）

开放数据集：是
数据集名称：DataScience-Instruct-500K
官方地址：https://huggingface.co/datasets/RUC-DataLab/DataScience-Instruct-500K
规模：50 万条使用工具的数据科学指令轨迹
记录形式：记录编号、多轮消息、输入输出词元统计和执行评估
文件与存储格式：官方数据页所列结构化记录及其引用资产
领域与语言：英文数据分析、数据库操作、可视化与报告撰写
构造与筛选：代理合成流程生成计划、代码、工具调用、观察和报告；沙箱执行、产物检查和任务级评估信息
许可与访问限制：`MIT`；仍需遵守上游来源条款
预期用途：面向自主数据分析代理的监督微调
