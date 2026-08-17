流程先诊断有毒记录和无依据片段，再依据图像改写答案，并公开修正对话用于重新训练。 与相邻做法相比，把视觉幻觉视为可在训练记录层面定位并修复的问题，而不只在解码阶段缓解。 主要对象是 HalluciDoctor corrected visual instructions，反馈边界由论文规定的正确性、落地性或格式检查构成，因此属于指令与示范数据，而不是仅有模型架构的论文。

Google Scholar 引用数：194（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=HalluciDoctor%3A+Mitigating+Hallucinatory+Toxicity+in+Visual+Instruction+Data&author=Qifan+Yu&hl=en）

开放数据集：是
数据集名称：论文公开的 HalluciDoctor 修正版视觉指令数据集
官方地址：https://drive.google.com/file/d/1M0dZwF6nPuZMLeAH44VhFj0RCS4KxL5D/view?usp=sharing
规模：约 5 万条带诊断和改写的视觉指令记录
记录形式：图像、原始指令回答、幻觉诊断以及修正回答
文件与存储格式：JSON 对话与来源图像引用
领域与语言：视觉指令数据审计、物体和关系幻觉修正；精确切分见官方数据卡
构造与筛选：流程先诊断有毒记录和无依据片段，再依据图像改写答案，并公开修正对话用于重新训练。；记录按论文说明的正确性、落地性或格式信号筛选
许可与访问限制：遵循官方仓库发布条款，修正记录仍受 LLaVA 与源图像条件约束
预期用途：在训练前审计并修复视觉指令混合中的无依据回答
