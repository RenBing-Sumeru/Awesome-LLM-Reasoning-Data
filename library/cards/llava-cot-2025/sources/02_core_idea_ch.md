# 核心思想

LLaVA-CoT 把单一 VQA 答案改造成有序、带标签的示范：摘要规划任务，图像描述定位相关视觉证据，推理阶段推导答案，结论与来源标签一致。GPT-4o 编写轨迹，精确标签解析与语义答案 judge 提供筛选信号，Llama-3.2-11B-Vision-Instruct 是 SFT 消费者；它属于 instruction/demonstration/rationale 数据，而不是奖励模型或 benchmark 贡献。

Google Scholar 引用数：577（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=LLaVA-CoT%3A+Let+Vision+Language+Models+Reason+Step-by-Step&author=Guowei+Xu&hl=en）

开放数据集：是  
**数据集名称：**LLaVA-CoT-100k  
**官方地址：**https://huggingface.co/datasets/Xkev/LLaVA-CoT-100k  
**规模：**来自十个 VQA 来源的 9.9 万条图像问答记录  
**记录形式：**图像引用、问题、原始答案，以及带 SUMMARY、CAPTION、REASONING、CONCLUSION 标签的文本  
**文件/存储格式：**Hugging Face 上的 JSON  
**领域/语言：**英文通用 VQA、图表、文档、几何、科学、社会情境与合成视觉推理  
**构造与筛选：**GPT-4o 编写全部阶段；解析器检查标签，GPT-4o judge 排除拒答或结论与标准答案不一致的记录  
**许可/访问约束：**数据集元数据为 Apache-2.0；仍需遵守上游图像与 VQA 来源条款  
**预期用途：**多模态 SFT、rationale 蒸馏、结构化输出分析与视觉推理数据审计
