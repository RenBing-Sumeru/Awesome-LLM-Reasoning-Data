LongAlign 发布 1 万条长上下文指令记录，并配合按长度分组与损失加权，减少填充浪费和序列长度偏差。 与相邻做法相比，把上下文长度分布和批次分组变成可审计的指令数据属性。 主要对象是 LongAlign-10k，反馈边界由论文规定的正确性、落地性或格式检查构成，因此属于指令与示范数据，而不是仅有模型架构的论文。

Google Scholar 引用数：162（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=LongAlign%3A+A+Recipe+for+Long+Context+Alignment+of+Large+Language+Models&author=Yushi+Bai&hl=en）

开放数据集：是
数据集名称：LongAlign-10k
官方地址：https://huggingface.co/datasets/THUDM/LongAlign-10k
规模：1 万条长上下文指令记录
记录形式：长上下文、指令、助手回答以及长度或分组元数据
文件与存储格式：带长文档和长度信息的 JSON 对话记录
领域与语言：长文档问答、信息检索和长上下文指令跟随；精确切分见官方数据卡
构造与筛选：LongAlign 发布 1 万条长上下文指令记录，并配合按长度分组与损失加权，减少填充浪费和序列长度偏差。；记录按论文说明的正确性、落地性或格式信号筛选
许可与访问限制：遵循官方数据卡和仓库条款，嵌入文档来源需继续追踪
预期用途：让已扩展上下文窗口的基础模型学会处理长文档指令
