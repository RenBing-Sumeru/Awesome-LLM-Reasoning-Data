该工作扩展跨学科问题，附上参考答案与教师长回答，再用质量判断和奖励信号筛选。 相比只覆盖数学和代码的蒸馏语料，它把“问题、参考答案，以及带生成模型标识的回答列表”变成可复用目标，并以“问题质量判断、参考答案检查、奖励模型评分与自奖励筛选”作为反馈边界，因此中心贡献属于 Track 01 数据，而不是只发布模型、验证器或基准。

Google Scholar 引用数：66（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=NATURALREASONING%3A+Reasoning+in+the+Wild+with+2.8M+Challenging+Questions&author=Weizhe+Yuan&hl=en）

开源数据集：是
数据集名称：NATURALREASONING
官方地址：https://huggingface.co/datasets/facebook/natural_reasoning
规模：280 万个问题，并附参考答案和教师回答
记录形式：问题、参考答案，以及带生成模型标识的回答列表
文件与存储格式：Parquet 结构化记录
领域与语言：英语科学、工程、经济、社会科学及其他自然领域推理
构造与筛选：Llama-3.3-70B-Instruct 等具名教师模型生成长回答；问题质量判断、参考答案检查、奖励模型评分与自奖励筛选
许可与访问限制：相关条款记为 `CC-BY-NC-4.0`；复用前必须逐项核对并保留来源约束
预期用途：推理监督微调、知识蒸馏和过滤式自训练
