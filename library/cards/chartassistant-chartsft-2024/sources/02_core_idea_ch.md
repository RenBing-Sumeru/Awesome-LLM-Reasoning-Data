该方法先用图表到表格任务对齐视觉和语言，再用覆盖提取、问答、摘要和数值推理的 ChartSFT 做多任务微调。 与相邻做法相比，用表格重建作为进入统一多任务图表指令混合的显式桥梁。 主要对象是 ChartSFT，反馈边界由论文规定的正确性、落地性或格式检查构成，因此属于指令与示范数据，而不是仅有模型架构的论文。

Google Scholar 引用数：164（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=ChartAssistant%3A+A+Universal+Chart+Multimodal+Language+Model+via+Chart-to-Table+Pre-training+and+Multitask+Instruction+Tuning&author=Fanqing+Meng&hl=en）

开放数据集：是
数据集名称：ChartSFT
官方地址：https://huggingface.co/datasets/FanqingM/ChartAssistant
规模：公开的大规模多任务图表语料，具体文件计数以官方清单为准
记录形式：图表图像、任务指令以及表格重建、问答、提取或推理目标
文件与存储格式：JSON 对话、图表图像和表格或问答目标
领域与语言：柱状图、饼图、雷达图、气泡图等图表的提取、问答、摘要和数值推理；精确切分见官方数据卡
构造与筛选：该方法先用图表到表格任务对齐视觉和语言，再用覆盖提取、问答、摘要和数值推理的 ChartSFT 做多任务微调。；记录按论文说明的正确性、落地性或格式信号筛选
许可与访问限制：遵循官方数据卡条款，各组成图表来源仍适用原许可
预期用途：构建同时支持图表提取、问答和推理的统一助手
