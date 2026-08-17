该数据集汇集 140 万条 R1 回答，并把数学、代码和其他任务分别送入答案检查、执行测试或奖励模型评审。 相比DeepSeek-R1-Distill 使用的非公开 80 万条蒸馏集，它把“包含用户问题和蒸馏长推理回答的聊天消息”变成可复用目标，并以“数学参考答案匹配、代码执行测试与其他领域奖励模型评审”作为反馈边界，因此中心贡献属于 Track 01 数据，而不是只发布模型、验证器或基准。

Google Scholar 引用数：53（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=1.4+Million+Open-Source+Distilled+Reasoning+Dataset+to+Empower+Large+Language+Model+Training&author=Han+Zhao&hl=en）

开放数据集：是
数据集名称：AM-DeepSeek-R1-Distilled-1.4M
官方地址：https://huggingface.co/datasets/a-m-team/AM-DeepSeek-R1-Distilled-1.4M
规模：140 万条中英双语推理轨迹
记录形式：包含用户问题和蒸馏长推理回答的聊天消息
文件与存储格式：Parquet 结构化记录
领域与语言：中英双语数学、代码、科学和通用推理
构造与筛选：主要由 DeepSeek-R1 生成长推理回答；数学参考答案匹配、代码执行测试与其他领域奖励模型评审
许可与访问限制：相关条款记为 `CC-BY-NC-4.0`；复用前必须逐项核对并保留来源约束
预期用途：推理监督微调和知识蒸馏
