AgentTuning 把 GPT 编写的多环境 ReAct 轨迹记录下来，用任务奖励筛选，再与通用对话混合，使学生模型在学习代理动作时不放弃通用语言能力。相较于单任务代理调优，真正改变的是由六类任务组成的示范混合；环境负责判断任务是否完成，而决定分类的是公开对话记录，不是在线环境本身。

Google Scholar 引用数：373（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=AgentTuning%3A+Enabling+Generalized+Agent+Abilities+for+LLMs&author=Aohan+Zeng&hl=en）

开放数据集：是
数据集名称：AgentInstruct
官方地址：https://huggingface.co/datasets/zai-org/AgentInstruct
规模：从 35,341 条候选指令中保留 1,866 条轨迹；当前六分片数据卡标注解压后为 8,042,511 字节
记录形式：每条含编号与对话数组，对话保存说话方、损失掩码和值；值中序列化指令、思考、动作、观察、纠错和终止答案
文件与存储格式：六个 Parquet 文件，分别对应操作系统、数据库、ALFWorld、WebShop、知识图谱和 Mind2Web
领域与语言：英语；覆盖操作系统、数据库、家务文本环境、购物、知识图谱和网页导航
构造与筛选：GPT-4 或 GPT-3.5 按 ReAct 与环境交互；多数任务只保留满奖励轨迹，Mind2Web 的门槛为奖励不低于三分之二
许可与访问限制：数据公开且无需门禁，受 Hugging Face 条款约束；数据集未单独声明许可，上游任务条款仍然适用
预期用途：监督微调，以及代理指令与通用指令的混合训练
