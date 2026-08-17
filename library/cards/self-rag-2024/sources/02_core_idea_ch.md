# 核心思想

Self-RAG 把细粒度检索与批判判断变成目标序列中的词表 token，使标准 next-token SFT 能教会模型何时检索，以及如何判断文档相关性、陈述支持度和回答效用。增强后的 instruction 输出是核心对象，蒸馏自 GPT-4 的 critic 提供离线筛选标签；检索与搜索是消费机制，不是数据类别。

Google Scholar 引用数：2723（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Self-RAG%3A+Learning+to+Retrieve%2C+Generate%2C+and+Critique+through+Self-Reflection&author=Akari+Asai&hl=en）

**开源数据：**有  
**数据集名称：**selfrag_train_data  
**官方地址：**https://huggingface.co/datasets/selfrag/selfrag_train_data  
**规模：**145,619 个源 input-output pair，论文与发布页按约 15 万条训练记录描述  
**记录形式：**`instruction`、可选 `input`、`output`、`id` 和 `dataset_name`；输出交错包含检索调用、文档文本、相关性/支持度判断、生成片段和终止效用 token  
**文件与存储格式：**一个公开 JSONL 文件（`train.jsonl`）  
**领域与语言：**英文 instruction following、开放域问答、事实验证、科学推理和长篇事实生成  
**构造与筛选：**由 GPT-4 蒸馏得到的 Llama2-7B critic 决定是否检索，并在 Contriever 文档和源输出周围插入 Retrieve、ISREL、ISSUP、ISUSE token  
**许可与访问约束：**发布采用 MIT；组成 instruction 数据和取回文档仍受各自来源条款约束  
**预期用途：**检索感知 SFT、批判蒸馏、事实性训练、可控解码和 reflection-token 审计
