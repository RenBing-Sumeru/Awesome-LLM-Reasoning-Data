VisualWebInstruct 把以图像引导的教育网页搜索转化为可复用的多模态“问题—完整解答”示范，并通过答案一致性与来源解答对齐筛选 SFT 目标。其最接近的比较对象是 LLaVA-CoT 与 MAmmoTH-VL 数据；以验证器或 RL 为中心的工作只属于相邻方向，因为核心产物是公开的静态示范，而不是奖励信号。

Google Scholar 引用数：34（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=VisualWebInstruct%3A+Scaling+up+Multimodal+Instruction+Data+through+Web+Search&author=Yiming+Jia&hl=en）

开源数据：有。
数据集名称：VisualWebInstruct。
官方地址：https://huggingface.co/datasets/TIGER-Lab/VisualWebInstruct。
规模：906,160 条问答，包含 257,201 个不同问题，其中 347,313 条关联图像，共涉及 163,743 张不同图像。
记录形式：完整问题、可选的相关图像引用，以及保留数学记号和分步解释的完整解答；发布内容在可用时还包含来源与过滤沿袭信息。
文件/存储格式：一个由 Hugging Face 托管的 Parquet 分片和 `images.zip`；仓库还以 JSONL 与 Parquet 两种格式提供混合对话记录和问答记录。
领域/语言：以英文教育问答为主，其中数学占 62.5%、物理占 14.5%、金融占 7.25%、化学占 4.8%、工程占 4.35%，其他学科占 6.6%。
构造与过滤：先从科学种子图像检索教育网页并抽取问答，再由 GPT-4o 生成多个完整解答，最后通过有效性、图像相关性、多数一致性以及与可获得网页解答的对齐检查筛选发布记录。
许可/访问约束：公开数据访问受 Hugging Face 平台条款约束，代码仓库采用 MIT 许可，但尚未确认数据集专用内容许可；平台访问不授予底层网页或图像的再分发权，仍需逐条审核记录。
预期用途：多模态与文本推理 SFT。
