# 问题

固定检索式 RAG 无论任务是否需要外部知识都会取回文档，也没有经过训练的信号判断文档是否相关、生成陈述是否有证据支持。因此，无关上下文可能削弱模型通用性，并让缺乏依据的文本与可靠回答看起来同样可信。

Self-RAG 在 instruction 输出中插入检索、相关性、支持度和效用 reflection token，再训练一个 generator 同时预测任务文本与这些控制/批判决策。公开的 15 万条 JSONL 记录是 generator 的中心监督对象，而非仅供推理时检索系统分析的日志。

**L4 事实：**主要来源为 arXiv:2310.11511；正式来源为 ICLR 2024 Oral 的官方 OpenReview 记录；判定边界是已发布的 reflection-token SFT 目标，而不是只发布 retriever 或 reward model 的工作；图谱对象与评测面包括 instruction、取回文档、分段输出以及检索/相关性/支持度/效用 token，并在六个事实性、推理和生成任务上评估；收录状态为 `L4_carded`，仅归入一个 Track 01 类别。
