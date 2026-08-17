MedReason 先用显式 PrimeKG 路径约束合成医学解释，再让 GPT-4o 写出推理过程，并通过答案恢复选择训练记录。与 HuatuoGPT-o1 的非约束医学 CoT 生成相比，真正改变的是带有检索事实路径的问题—答案—推理记录；PrimeKG 与教师提供引导，标准答案匹配决定样本去留，而定义本分类的是供 SFT 消费的静态推理过程，不是模型 checkpoint 或评测 benchmark。

Google Scholar 引用数：100（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=MedReason%3A+Eliciting+Factual+Medical+Reasoning+Steps+in+LLMs+via+Knowledge+Graphs&author=Juncheng+Wu&hl=en）

开源数据：有
数据集名称：MedReason
官方地址：https://huggingface.co/datasets/UCSC-VLAA/MedReason
规模：最终 32,682 条记录，来自 45,725 条已生成推理和 55,071 条源问答；唯一公开文件大小为 115,474,386 字节
记录形式：dataset_name、id_in_dataset、question、options、answer 和 reasoning；reasoning 含命名知识路径、编号推理过程和结论
文件或存储格式：单个 JSONL 文件 ours_quality_33000.jsonl
领域与语言：英语医学问答，覆盖 MedQA、MedMCQA、PubMedQA、MMLU、MedXpert、HuatuoGPT-o1 和医学 HLE
构造与筛选：GPT-4o 映射实体，把 PrimeKG 最短路径筛到最多三条，生成受约束推理，再仅凭推理回答问题；只保留答案匹配的记录
许可与访问限制：公开且无门禁，数据集标注为 Apache-2.0；上游问答来源的条款仍然适用，GitHub 代码仓库未检测到 LICENSE
预期用途：医学推理 SFT、推理质量分析和知识约束的数据构造研究
