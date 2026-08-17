R1-Onevision 把视觉与语言推理的接口变成显式训练对象：先形式化图像，让强文本推理模型写出解答，再通过能重新查看图像的角色扮演过程把解答落回视觉证据，并在 SFT 前过滤序列化轨迹。与 LLaVA-CoT 等固定四阶段模板相比，它把目标从刚性推理格式改为可回看图像的落地轨迹；最终答案与格式规则则属于独立的 RL 反馈契约。初始分类选择 instruction、demonstration 与 rationale 数据，是因为发布的完整轨迹直接作为 SFT 目标消费，而不只是充当奖励。

Google Scholar 引用数：371（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=R1-Onevision%3A+Advancing+Generalized+Multimodal+Reasoning+through+Cross-Modal+Formalization&author=Yi+Yang&hl=en）

开源数据：有。数据集名称：R1-Onevision。官方地址：https://huggingface.co/datasets/Fancy-MLLM/R1-onevision。规模：超过 155K 条样本。记录形式：图像、问题、形式化视觉描述、对话式推理回复和最终答案；公开 Hugging Face 发布页提供表格化图文记录。文件与存储格式：可通过 Hugging Face 托管的 Parquet/Arrow 形式访问。领域与语言：以英文为主的科学、数学、一般场景以及文档、图表和屏幕推理任务。构造与过滤：GPT-4o 负责描述和过滤，DeepSeek-R1 基于形式化视图推理，角色扮演过程把轨迹重新连接到图像。许可与访问约束：公开访问受 Hugging Face 平台条款约束，但未确认数据集专用内容许可，平台访问本身也不授予再分发权。预期用途：多模态推理 SFT 与蒸馏。
