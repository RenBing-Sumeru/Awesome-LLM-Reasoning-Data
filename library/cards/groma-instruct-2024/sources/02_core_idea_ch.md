Groma 把选定区域表示为局部视觉 token，再围绕这些 token 生成多轮识别、描述和定位对话，用统一记录训练模型。 与相邻做法相比，把可在多轮自然对话中反复引用的局部视觉 token 设为显式记录字段。 主要对象是 Groma Instruct，反馈边界由论文规定的正确性、落地性或格式检查构成，因此属于指令与示范数据，而不是仅有模型架构的论文。

Google Scholar 引用数：176（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Groma%3A+Localized+Visual+Tokenization+for+Grounding+Multimodal+Large+Language+Models&author=Chuofan+Ma&hl=en）

开放数据集：是
数据集名称：Groma Instruct
官方地址：https://huggingface.co/datasets/FoundationVision/groma_instruct
规模：约 3 万条 GPT-4V 生成的定位多轮对话
记录形式：图像、区域 token 或边界框、定位用户对话以及助手回答
文件与存储格式：含图像引用、区域 token 和边界框的 JSON 记录
领域与语言：区域识别、指代、描述和视觉定位对话；精确切分见官方数据卡
构造与筛选：Groma 把选定区域表示为局部视觉 token，再围绕这些 token 生成多轮识别、描述和定位对话，用统一记录训练模型。；记录按论文说明的正确性、落地性或格式信号筛选
许可与访问限制：遵循官方仓库和数据卡条款，源图像许可继续适用
预期用途：训练能够讨论用户指定图像区域的多模态助手
