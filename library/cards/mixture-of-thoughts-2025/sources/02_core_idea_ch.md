该工作筛选难度与多样性合适的题目，并把多个领域的教师推理统一为带来源标签的对话混合。 相比未经筛选的长链蒸馏，它把“消息序列、词元数量和来源”变成可复用目标，并以“可教学性、复杂度与多样性筛选，来源检查及下游训练评估”作为反馈边界，因此中心贡献属于 Track 01 数据，而不是只发布模型、验证器或基准。

Google Scholar 引用数：141（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Phi-4-reasoning+Technical+Report&author=Marah+Abdin&hl=en）

开源数据集：是
数据集名称：Mixture-of-Thoughts
官方地址：https://huggingface.co/datasets/open-r1/Mixture-of-Thoughts
规模：349317 条数学、代码和科学推理轨迹
记录形式：消息序列、词元数量和来源
文件与存储格式：Parquet 结构化记录
领域与语言：英语数学、代码、科学、规划与算法推理
构造与筛选：o3-mini 等推理教师生成详细示范；可教学性、复杂度与多样性筛选，来源检查及下游训练评估
许可与访问限制：相关条款记为 `no aggregate license is declared; every upstream source term must be preserved`；复用前必须逐项核对并保留来源约束
预期用途：Phi-4-reasoning 的监督微调
