该流程用多种合成算法扩展到 500 万对，并把单元测试、执行结果和模型评审写在解答旁。 相比没有逐条测试或质量元数据的代码指令集，它把“编号、输入、输出、领域、生成算法、模型判断、单元测试和执行状态”变成可复用目标，并以“单元测试执行、执行状态、模型质量评审和种子筛选”作为反馈边界，因此中心贡献属于 Track 01 数据，而不是只发布模型、验证器或基准。

Google Scholar 引用数：54（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=OpenCodeInstruct%3A+A+Large-scale+Instruction+Tuning+Dataset+for+Code+LLMs&author=Wasi+Uddin+Ahmad&hl=en）

开源数据集：是
数据集名称：OpenCodeInstruct
官方地址：https://huggingface.co/datasets/nvidia/OpenCodeInstruct
规模：500 万对代码指令与回答
记录形式：编号、输入、输出、领域、生成算法、模型判断、单元测试和执行状态
文件与存储格式：Parquet 结构化记录
领域与语言：英语代码生成、调试、算法与编程问答
构造与筛选：大型语言模型生成指令、解答、测试与质量判断；单元测试执行、执行状态、模型质量评审和种子筛选
许可与访问限制：相关条款记为 `CC-BY-4.0`；复用前必须逐项核对并保留来源约束
预期用途：Llama 与 Qwen 系列的代码监督微调
