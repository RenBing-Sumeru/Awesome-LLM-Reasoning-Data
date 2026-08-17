该工作按参数关系构建函数图，模拟用户、助手和工具交互，再逐轮过滤并保留自纠正轨迹。 相比只在轨迹末端检查的工具数据，它把“多轮会话与工具定义”变成可复用目标，并以“细粒度逐轮检查与整轨迹质量过滤”作为反馈边界，因此中心贡献属于 Track 01 数据，而不是只发布模型、验证器或基准。

Google Scholar 引用数：2（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=ToolMind+Technical+Report%3A+A+Large-Scale%2C+Reasoning-Enhanced+Tool-Use+Dataset&author=Chen+Yang&hl=en）

开源数据集：是
数据集名称：ToolMind
官方地址：https://huggingface.co/datasets/Nanbeige/ToolMind
规模：16 万条合成工具记录和 20 万条增强开放记录
记录形式：多轮会话与工具定义
文件与存储格式：Parquet 结构化记录
领域与语言：英语功能调用和多轮工具使用
构造与筛选：多代理模拟器生成用户、助手与工具轮次；细粒度逐轮检查与整轨迹质量过滤
许可与访问限制：相关条款记为 `Apache-2.0`；复用前必须逐项核对并保留来源约束
预期用途：工具使用监督微调
