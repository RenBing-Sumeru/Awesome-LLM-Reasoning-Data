该工作把继承数据与新生成子集统一为消息序列，并根据小规模消融和人工复核调整来源权重。 相比不研究配比而直接使用现有小型指令集，它把“带角色和内容的消息序列及来源标签”变成可复用目标，并以“按子集过滤、来源配比、基准去污染和人工混合复核”作为反馈边界，因此中心贡献属于 Track 01 数据，而不是只发布模型、验证器或基准。

Google Scholar 引用数：308（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=SmolLM2%3A+When+Smol+Goes+Big+-+Data-Centric+Training+of+a+Small+Language+Model&author=Loubna+Ben+Allal&hl=en）

开源数据集：是
数据集名称：SmolTalk
官方地址：https://huggingface.co/datasets/HuggingFaceTB/smoltalk
规模：约 110 万条指令与回答对话
记录形式：带角色和内容的消息序列及来源标签
文件与存储格式：多配置 Parquet 结构化记录
领域与语言：以英语为主的对话、数学、代码、改写和约束遵循
构造与筛选：原始标注与合成教师共同提供助手回答；按子集过滤、来源配比、基准去污染和人工混合复核
许可与访问限制：相关条款记为 `new subsets are Apache-2.0; inherited subsets retain their upstream licenses`；复用前必须逐项核对并保留来源约束
预期用途：SmolLM2 的指令监督微调
