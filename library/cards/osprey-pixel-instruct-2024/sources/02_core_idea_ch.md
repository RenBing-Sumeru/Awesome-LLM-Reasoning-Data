Osprey 把选定分割掩码编码为视觉提示，并围绕该精确区域构造识别、描述、推理和交互对话。 与相邻做法相比，把任意形状掩码设为指令回答记录的一等字段，而不再只用矩形框。 主要对象是 Osprey-724K，反馈边界由论文规定的正确性、落地性或格式检查构成，因此属于指令与示范数据，而不是仅有模型架构的论文。

Google Scholar 引用数：226（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Osprey%3A+Pixel+Understanding+with+Visual+Instruction+Tuning&author=Yuqian+Yuan&hl=en）

开放数据集：是
数据集名称：Osprey-724K
官方地址：https://huggingface.co/datasets/AntGroup-MI/Osprey-724K
规模：72.4 万条像素级定位视觉对话
记录形式：图像、掩码或区域、指代指令以及定位回答
文件与存储格式：JSON 对话、图像与分割掩码
领域与语言：物体、部件、背景区域、指代和像素级视觉推理；精确切分见官方数据卡
构造与筛选：Osprey 把选定分割掩码编码为视觉提示，并围绕该精确区域构造识别、描述、推理和交互对话。；记录按论文说明的正确性、落地性或格式信号筛选
许可与访问限制：以官方数据卡和仓库条款为准，上游分割数据集继续适用原许可
预期用途：训练能够围绕精确分割物体或部件进行解释的助手
