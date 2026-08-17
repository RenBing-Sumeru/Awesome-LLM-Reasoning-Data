该数据集把困难路由场景序列化为初始状态与评估动作，为兼顾结果、效率和用户偏好的训练提供底板。 相比缺少成本感知评估的通用工具提示训练，它把“任务编号、描述、用户场景、初始状态和评估条件”变成可复用目标，并以“环境评估条件以及结果、效率和用户偏好奖励”作为反馈边界，因此中心贡献属于 Track 01 数据，而不是只发布模型、验证器或基准。

Google Scholar 引用数：29（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=ToolOrchestra%3A+Elevating+Intelligence+via+Efficient+Model+and+Tool+Orchestration&author=Hongjin+Su&hl=en）

开源数据集：是
数据集名称：ToolScale
官方地址：https://huggingface.co/datasets/nvidia/ToolScale
规模：4063 个合成工具编排任务
记录形式：任务编号、描述、用户场景、初始状态和评估条件
文件与存储格式：Parquet 结构化记录
领域与语言：英语模型路由、网络搜索、代码执行和多工具编排
构造与筛选：任务生成流程编写场景、初始状态与可执行评估条件；环境评估条件以及结果、效率和用户偏好奖励
许可与访问限制：相关条款记为 `NVIDIA dataset license`；复用前必须逐项核对并保留来源约束
预期用途：强化学习与任务条件化工具编排训练
