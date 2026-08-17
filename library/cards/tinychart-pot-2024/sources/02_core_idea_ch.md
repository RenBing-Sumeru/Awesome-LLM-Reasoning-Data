TinyChart 将视觉 token 合并与 ChartQA-PoT 可执行程序监督结合，让 3B 模型在较低视觉预算下学习显式数值推理。 与相邻做法相比，把可执行图表程序与最终答案一起发布为紧凑模型的指令目标。 主要对象是 TinyChartData，反馈边界由论文规定的正确性、落地性或格式检查构成，因此属于指令与示范数据，而不是仅有模型架构的论文。

Google Scholar 引用数：92（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=TinyChart%3A+Efficient+Chart+Understanding+with+Visual+Token+Merging+and+Program-of-Thoughts+Learning&author=Liang+Zhang&hl=en）

开放数据集：是
数据集名称：TinyChartData
官方地址：https://huggingface.co/datasets/mPLUG/TinyChartData
规模：公开 ChartQA-PoT，并包含图表对齐、指令微调和评测划分
记录形式：图表图像、问题、Python 思维程序以及最终答案
文件与存储格式：JSONL 清单与图表图像压缩包
领域与语言：图表提取、问答和可执行数值推理；精确切分见官方数据卡
构造与筛选：TinyChart 将视觉 token 合并与 ChartQA-PoT 可执行程序监督结合，让 3B 模型在较低视觉预算下学习显式数值推理。；记录按论文说明的正确性、落地性或格式信号筛选
许可与访问限制：遵循官方仓库和数据卡条款，上游图表来源仍适用原许可
预期用途：训练能够展示并执行数值步骤的小型图表模型
