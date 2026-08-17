MMC 从 arXiv 与其它来源挖掘图表，构造问答和图文对齐记录，并用统一格式训练提取、比较与数值推理能力。 与相邻做法相比，把科学图表挖掘与大规模统一图表问答和对齐混合结合起来。 主要对象是 MMC，反馈边界由论文规定的正确性、落地性或格式检查构成，因此属于指令与示范数据，而不是仅有模型架构的论文。

Google Scholar 引用数：223（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=MMC%3A+Advancing+Multimodal+Chart+Understanding+with+Large-scale+Instruction+Tuning&author=Fuxiao+Liu&hl=en）

开放数据集：是
数据集名称：MMC
官方地址：https://huggingface.co/datasets/xywang1/MMC
规模：30 万条 arXiv 图表问答、109887 条非 arXiv 问答以及 25 万条对齐记录
记录形式：图表图像、问题或对齐指令以及答案
文件与存储格式：JSONL 元数据和 TAR 图像压缩包
领域与语言：科学图表与日常图表的提取、比较和数值问答；精确切分见官方数据卡
构造与筛选：MMC 从 arXiv 与其它来源挖掘图表，构造问答和图文对齐记录，并用统一格式训练提取、比较与数值推理能力。；记录按论文说明的正确性、落地性或格式信号筛选
许可与访问限制：官方仓库未为所有图像授予统一许可，需遵守组成来源条款
预期用途：训练覆盖科学与日常可视化的通用图表助手
