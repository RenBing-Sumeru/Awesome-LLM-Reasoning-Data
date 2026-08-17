该方法用 GPT-4V 写 10 万条种子描述，训练 Share-Captioner，再生成 120 万条密集描述并在视觉指令微调前使用。 与相邻做法相比，把描述质量设为视觉指令微调前可独立扩展的数据阶段，并用种子描述训练专门的描述器。 主要对象是 ShareGPT4V，反馈边界由论文规定的正确性、落地性或格式检查构成，因此属于指令与示范数据，而不是仅有模型架构的论文。

Google Scholar 引用数：1270（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=ShareGPT4V%3A+Improving+Large+Multi-Modal+Models+with+Better+Captions&author=Lin+Chen&hl=en）

开放数据集：是
数据集名称：ShareGPT4V
官方地址：https://huggingface.co/datasets/Lin-Chen/ShareGPT4V
规模：10 万条 GPT-4V 高质量描述，以及扩展到 120 万张图像的预训练描述
记录形式：图像编号、密集事实描述或视觉问题，以及助手目标
文件与存储格式：JSON 或 Parquet 元数据与图像引用
领域与语言：通用图像描述、视觉问答和多模态对话；精确切分见官方数据卡
构造与筛选：该方法用 GPT-4V 写 10 万条种子描述，训练 Share-Captioner，再生成 120 万条密集描述并在视觉指令微调前使用。；记录按论文说明的正确性、落地性或格式信号筛选
许可与访问限制：以官方数据卡条款为准，原始图像仍受各自许可约束
预期用途：在视觉问答微调前构造带细节的图像落地监督
