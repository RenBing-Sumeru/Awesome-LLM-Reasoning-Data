官方 [arXiv 论文](https://arxiv.org/abs/2504.21233)与 [HTML 正文](https://arxiv.org/html/2504.21233)支撑以下事实：四个训练阶段、具名来源表、每个缺轨迹问题约 8 个生成 rollout、约 1,000 万 rollout/160 万样本总量、数学工具验证、GPT-4o-mini 复核、偏好构造、RL 稳定化措施及训练设置。论文的分阶段表报告 AIME 2024 / MATH-500 / GPQA Diamond：Phi-4-Mini 为 10.0 / 71.8 / 36.9；中训练后为 30.0 / 82.9 / 42.6；SFT 后为 43.3 / 89.3 / 48.3；DPO 后为 50.0 / 93.6 / 49.0；RL 后为 57.5 / 94.6 / 52.0。这些是作者在所述评测协议下报告的模型行为测量，不是数据或 verifier 高质量的独立证据。

官方 [Hugging Face 仓库](https://huggingface.co/microsoft/Phi-4-mini-reasoning)以 MIT 许可证发布 38 亿参数模型权重，并提供模型卡、推理文件和报告 PDF。模型卡报告 128K 上下文、128 张 H100-80G、2 天训练、1,500 亿训练 token，以及约 300 亿 token 的保留数学内容；这些数字并未全部与论文各阶段计数对齐。后续官方 [Data Summary](https://huggingface.co/microsoft/Phi-4-mini-reasoning/blob/main/data_summary_card.md)确认使用公开数据和合成数据、采集时间为 2025 年 2 月，并执行过清洗。

仍有一处值得审计的口径差异：论文称直接复用来源中已有的推理标注，只在缺少轨迹时由 DeepSeek-R1 生成答案；模型卡与 Data Summary 则把训练数据描述为全部由 DeepSeek-R1 生成的合成数学内容。没有公开样本清单可以化解这一差异。官方仓库也不包含 1,000 万条 rollout、筛选后的 SFT 子集、偏好对、RL 数据池、训练代码、verifier 代码或去污染报告。

