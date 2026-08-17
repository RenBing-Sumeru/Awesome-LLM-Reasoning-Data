Ferret 用混合区域编码器配合 GRIT 对话，在同一记录中表示点、框和自由区域，并同时训练指代与定位。 与相邻做法相比，在同一对话契约中统一点、边界框和自由形状区域三种粒度。 主要对象是 GRIT，反馈边界由论文规定的正确性、落地性或格式检查构成，因此属于指令与示范数据，而不是仅有模型架构的论文。

Google Scholar 引用数：609（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Ferret%3A+Refer+and+Ground+Anything+Anywhere+at+Any+Granularity&author=Haoxuan+You&hl=en）

开放数据集：是
数据集名称：GRIT
官方地址：https://github.com/apple/ml-ferret#grit-dataset
规模：约 110 万条多粒度定位对话
记录形式：图像、点或框或自由形状区域、指代表达、指令与定位回答
文件与存储格式：JSON 标注、图像引用和区域信息
领域与语言：多粒度指代、区域描述、视觉定位和对话；精确切分见官方数据卡
构造与筛选：Ferret 用混合区域编码器配合 GRIT 对话，在同一记录中表示点、框和自由区域，并同时训练指代与定位。；记录按论文说明的正确性、落地性或格式信号筛选
许可与访问限制：GRIT 采用 CC BY-NC 4.0，模型和源图像的附加条件仍然适用
预期用途：构建允许用户圈选任意区域并提问的视觉界面
