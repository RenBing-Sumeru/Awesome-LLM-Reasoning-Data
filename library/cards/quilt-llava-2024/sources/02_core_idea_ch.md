流程把视频讲解与病理帧对齐，将局部叙述改写为 10.7 万条指令回答记录，再用这些带证据的对话微调视觉语言模型。 与相邻做法相比，把公开视频中的专家时序讲解挖掘为与具体病理区域对齐的视觉示范。 主要对象是 QUILT-LLaVA-Instruct-107K，反馈边界由论文规定的正确性、落地性或格式检查构成，因此属于指令与示范数据，而不是仅有模型架构的论文。

Google Scholar 引用数：137（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Quilt-LLaVA%3A+Visual+Instruction+Tuning+by+Extracting+Localized+Narratives+from+Open-Source+Histopathology+Videos&author=Mehmet+Saygin+Seyfioglu&hl=en）

开放数据集：是
数据集名称：QUILT-LLaVA-Instruct-107K
官方地址：https://huggingface.co/datasets/wisdomik/QUILT-LLaVA-Instruct-107K
规模：10.7 万条组织病理学视觉指令记录
记录形式：病理图像裁剪、局部讲解或问题，以及诊断或解释型回答
文件与存储格式：Parquet 记录、图像引用与公开图像文件
领域与语言：组织病理图像、形态描述、诊断问答和解释；精确切分见官方数据卡
构造与筛选：流程把视频讲解与病理帧对齐，将局部叙述改写为 10.7 万条指令回答记录，再用这些带证据的对话微调视觉语言模型。；记录按论文说明的正确性、落地性或格式信号筛选
许可与访问限制：遵循官方数据卡研究条款，开放视频与图像来源的原始许可继续适用
预期用途：训练能够解释可见形态证据的病理图像助手
