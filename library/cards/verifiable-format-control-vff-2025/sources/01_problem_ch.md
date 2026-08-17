模型经常在内容正确时违反长度、结构、关键词、分隔符或嵌套格式要求，而传统 instruction-following 数据依赖人工或 LLM judge，成本高且判断不稳定。已有格式评测又常只有少量固定模板，难以形成大规模训练信号。

论文提出 Verifiable Format Following（VFF），把格式要求写成可实例化约束，并为每类约束配套确定性 Python 验证函数，从而自动生成不同难度的指令、标注响应并构造 SFT/DPO 数据。
