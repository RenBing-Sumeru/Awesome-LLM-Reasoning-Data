该工作抓取广泛问题，规范答案类型，再用能结合上下文推理的生成式验证器保留可评分问答。 相比使用精确匹配验证的数学专用强化学习，它把“编号、问题、答案、答案类型、类别和难度”变成可复用目标，并以“结合上下文与推理的生成式答案验证、类别和难度过滤”作为反馈边界，因此中心贡献属于 Track 01 数据，而不是只发布模型、验证器或基准。

Google Scholar 引用数：121（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=General-Reasoner%3A+Advancing+LLM+Reasoning+Across+All+Domains&author=Xueguang+Ma&hl=en）

开放数据集：是
数据集名称：WebInstruct-verified
官方地址：https://huggingface.co/datasets/TIGER-Lab/WebInstruct-verified
规模：228736 条训练问答和 1000 条测试问答
记录形式：编号、问题、答案、答案类型、类别和难度
文件与存储格式：Parquet 结构化记录
领域与语言：英语物理、化学、金融、电子、数学与网页知识
构造与筛选：整理模型规范问题和答案，生成式验证器判断语义等价；结合上下文与推理的生成式答案验证、类别和难度过滤
许可与访问限制：相关条款记为 `Apache-2.0`；复用前必须逐项核对并保留来源约束
预期用途：跨领域推理强化学习
