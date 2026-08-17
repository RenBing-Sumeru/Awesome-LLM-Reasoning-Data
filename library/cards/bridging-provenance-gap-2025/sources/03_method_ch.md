候选选择按模态分别设计，并不是一次统一 crawl。

1. 文本范围聚焦用于 instruction tuning 与 preference alignment 的公开后训练数据。团队把早期 44 个 collection、1,858 个数据集的审计扩展到 108 个 collection，来源包括近期 survey 和工具、每月热门 Hugging Face 数据集、开放模型关联的 SFT/DPO 发布、SEACrowd、Masader、AI4Bharat、Aya 等多语言目录，以及专家复核。论文一方面讨论截至 2024 年 4 月引入的近期数据，另一方面又描述了 2024 年 4–7 月的月度热度复核，因此不能把 cutoff 简化成一个无歧义日期。
2. 语音仅保留以 ASR 为主要任务的数据集。候选来自 survey 仓库、Hugging Face ASR/TTS tag、OpenSLR 与针对低资源语言的补充。若版本是累积式的，审计采用初始发布时间和较新可得元数据；法律或语义上不同的版本可以分开。无 transcript 的小时数被排除，使用模型生成 transcript 的弱监督小时数仍保留。
3. 视频从 Hugging Face 视频任务 tag、Papers with Code 类别、survey 仓库、相关 workshop、发表/引用条件和 100 次下载阈值开始，再由外部专家复核。同一视频来源若服务于不同任务并被重新标注，可能计为不同数据集。

标注沿公开证据链进行。domain expert 检查论文、网站、GitHub/Hugging Face/Papers with Code 页面和来源政策，有时要穿过多层派生关系才能到达原始来源。论文指出，重打包经常丢失 license 与 sourcing 信息，因此需要对这些文档进行“full trace”。文本中的 creator organization 指与 ML 数据集发布相关的 affiliation，不是拥有或创作上游内容的组织。

发布的 JSON 按模态具有不同结构。文本记录可含标识、dataset/collection URL、语言、任务、文本来源、生成模型、格式、人工标注、父数据集、创建者、许可证及其 URL、license notes/verifier、filter ID、BibTeX、平台元数据和文本统计。语音还包含小时、speaker、ISO 语言/语系、主题、来源/流程描述、创建者类型、年份与地域；视频还包含视频小时、可用/下架状态、国家、来源平台和任务类别。字段是否存在因记录而异，并不存在一套对所有记录都完整填充的统一 schema。

限制 taxonomy 有两个轴。数据集许可证意图为 Commercial、NC/Acad 或 Unspecified；每个上游来源为 Model Closed、Source Closed、Unspecified 或 Unrestricted，聚合时采用最严格的来源标签。对于 collection-level 文本分析，collection 继承 constituent 中最严格的状态。这个保守规则已公开，但字段完成阈值、标注者分配、分歧裁决和 inter-annotator agreement 仍为 unknown。

官方仓库包含 JSON summary、constants、图表、downloader/preparer/filter 代码和贡献说明。它的归一化格式可以表示多轮对话与 response ranking，但这是下载部分上游数据时的功能，并不会把审计元数据本身变成训练样本。可复现复用应固定 repository revision，并保留每个人工判断对应的证据 URL 与时间。
