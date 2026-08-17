LESS 用轻量预热模型提取源样本和目标样本的梯度表示，按目标影响排序，并公开分数与任务专属子集。 与相邻做法相比，按训练梯度对明确目标任务的影响来排序指令记录。 主要对象是 LESS selected instruction data，反馈边界由论文规定的正确性、落地性或格式检查构成，因此属于指令与示范数据，而不是仅有模型架构的论文。

Google Scholar 引用数：630（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=LESS%3A+Selecting+Influential+Data+for+Targeted+Instruction+Tuning&author=Mengzhou+Xia&hl=en）

开放数据集：是
数据集名称：LESS selected instruction data
官方地址：https://huggingface.co/datasets/princeton-nlp/less_data
规模：公开指令池、梯度特征、影响分数和任务专属子集
记录形式：指令回答、梯度或影响分数、目标任务以及入选划分
文件与存储格式：JSON 记录与序列化梯度或分数文件
领域与语言：面向具体下游任务的指令数据选择；精确切分见官方数据卡
构造与筛选：LESS 用轻量预热模型提取源样本和目标样本的梯度表示，按目标影响排序，并公开分数与任务专属子集。；记录按论文说明的正确性、落地性或格式信号筛选
许可与访问限制：遵循官方仓库许可及底层指令数据集许可
预期用途：从大型指令池构建小规模任务专属微调子集
