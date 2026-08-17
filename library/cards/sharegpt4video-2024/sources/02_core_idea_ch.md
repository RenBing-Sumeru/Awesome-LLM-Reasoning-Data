该工作收集 4 万条详细描述，训练 ShareCaptioner-Video，并把时序事件描述用于视频理解和生成监督。 与相邻做法相比，把长时序描述设为连接视频理解、指令微调与生成训练的中间数据引擎。 主要对象是 ShareGPT4Video，反馈边界由论文规定的正确性、落地性或格式检查构成，因此属于指令与示范数据，而不是仅有模型架构的论文。

Google Scholar 引用数：472（查询于 2026-07-27；https://scholar.google.com/scholar?q=%22ShareGPT4Video%3A+Improving+Video+Understanding+and+Generation+with+Better+Captions%22+%22Lin+Chen%22&hl=en）

开放数据集：是
数据集名称：ShareGPT4Video
官方地址：https://huggingface.co/datasets/ShareGPT4Video/ShareGPT4Video
规模：4 万条公开高质量长视频描述，并提供可扩展描述器
记录形式：视频编号或帧、时序事件线以及详细长描述或派生指令回答
文件与存储格式：JSON 元数据与可下载的视频和描述文件
领域与语言：视频描述、时序理解、视频问答和文本生成视频监督；精确切分见官方数据卡
构造与筛选：该工作收集 4 万条详细描述，训练 ShareCaptioner-Video，并把时序事件描述用于视频理解和生成监督。；记录按论文说明的正确性、落地性或格式信号筛选
许可与访问限制：遵循官方数据卡条款，原视频版权和许可继续有效
预期用途：从公开视频构造时序推理指令记录
