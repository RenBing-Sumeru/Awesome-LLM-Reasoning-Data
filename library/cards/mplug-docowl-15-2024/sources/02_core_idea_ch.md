流程先用 DocStruct4M 学习解析与定位，再用 DocReason25K 解释和下游混合做文档指令微调。 与相邻做法相比，把统一文档结构监督与带推理说明的下游对话连接为两阶段数据配方。 主要对象是 DocReason25K and DocStruct4M，反馈边界由论文规定的正确性、落地性或格式检查构成，因此属于指令与示范数据，而不是仅有模型架构的论文。

Google Scholar 引用数：288（查询于 2026-07-27；https://scholar.google.com/scholar?q=%22mPLUG-DocOwl+1.5%3A+Unified+Structure+Learning+for+OCR-free+Document+Understanding%22+%22Anwen+Hu%22&hl=en）

开放数据集：是
数据集名称：DocReason25K and DocStruct4M
官方地址：https://huggingface.co/datasets/mPLUG/DocReason25K
规模：约 400 万条文档结构样本、2.5 万条解释型问答和 57 万条下游混合记录
记录形式：文档图像、结构或问答指令，以及简短答案或详细解释
文件与存储格式：JSONL 清单与文档图像文件
领域与语言：文档解析、文字定位、表格和网页问答、解释生成；精确切分见官方数据卡
构造与筛选：流程先用 DocStruct4M 学习解析与定位，再用 DocReason25K 解释和下游混合做文档指令微调。；记录按论文说明的正确性、落地性或格式信号筛选
许可与访问限制：以官方仓库和数据卡条款为准，十个上游文档数据集保留各自许可
预期用途：训练无需外部文字识别器即可回答并解释文档问题的助手
