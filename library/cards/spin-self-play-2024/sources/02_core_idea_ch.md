SPIN 每轮让当前策略生成回答，与人类回答组成带迭代编号的训练记录，再更新同一模型去超过上一轮行为。 与相邻做法相比，把上一轮模型回答变成带版本的训练记录，并作为下一轮显式比较侧。 主要对象是 SPIN iteration datasets，反馈边界由论文规定的正确性、落地性或格式检查构成，因此属于指令与示范数据，而不是仅有模型架构的论文。

Google Scholar 引用数：700（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Self-Play+Fine-Tuning+Converts+Weak+Language+Models+to+Strong+Language+Models&author=Zixiang+Chen&hl=en）

开放数据集：是
数据集名称：SPIN iteration datasets
官方地址：https://huggingface.co/collections/UCLA-AGI/datasets-spin-65c3624e98d4b589bbc76f3a
规模：约 5 万条基础对话，以及第 0 至第 3 轮生成回答数据
记录形式：提示、人类回答、当前策略回答和自博弈轮次
文件与存储格式：Hugging Face 数据集集合中的 JSON 对话记录
领域与语言：通用对话、自举式指令微调和迭代自博弈；精确切分见官方数据卡
构造与筛选：SPIN 每轮让当前策略生成回答，与人类回答组成带迭代编号的训练记录，再更新同一模型去超过上一轮行为。；记录按论文说明的正确性、落地性或格式信号筛选
许可与访问限制：遵循官方仓库和数据卡条款，基础对话数据条款继续适用
预期用途：在只有固定人类对话集时自举提升指令模型
