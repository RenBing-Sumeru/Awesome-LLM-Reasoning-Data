论文把 Data Provenance Initiative 从早期监督文本审计扩展为跨模态目录。Table 1 报告 3,916 个公开数据集：108 个 collection 中的 3,717 个文本数据集、95 个语音数据集和 104 个视频数据集。它们合计覆盖 798 个来源、659 个创建机构、67 个国家、608 种语言、443 项任务、55 种许可证、2.1T 文本 token，以及约 1.9M 小时语音和视频。§2.1 同时又写成 3,713 个文本数据集，因此两个文本总数是论文内部尚未解释的差异。

可复用对象是 collection、dataset 或可分离变体级的结构化元数据。人类专家追踪论文、仓库、数据卡、marketplace、派生链、许可证和来源条款，再编码标识、来源、创建者、语言、地域、任务、模型生成、人工标注、派生、许可证证据与各模态特有属性。仓库还发布 taxonomy、分析图、下载/筛选/归一化代码和 Attribution Card。

反馈对象是人工审计判断。数据集许可证分为 Commercial、NC/Acad 和 Unspecified；来源限制分为 Model Closed、Source Closed、Unspecified 和 Unrestricted。聚合时采用最严格的来源状态，文本 collection 的 collection-level 分析还继承最严格的 constituent 状态。这些标签可用于筛选和比较，但不是法律裁决，也不是样本级 correctness reward。

该目录不会把每条训练记录连接到原始 URL、个人、同意决定、转换或许可证，也不会直接提供全部被审计数据的内容。仓库脚本可以下载并归一化部分上游数据集，官方 Hugging Face 组织也托管若干派生文本 artifact，但两者都不能被误认为完整的多模态论文快照。
