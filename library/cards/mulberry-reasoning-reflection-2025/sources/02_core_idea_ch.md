# 核心思想

Mulberry 不再让单一策略直接生成整条推理，而是由四个模型共同提出完整续写、给中间节点评分，并把成功路径以及选定的“负节点到正节点”转折序列化为 SFT 目标。其核心对象是可训练的多模态推理示范，反馈契约由集体节点评分与最终答案正确性构成；MCTS 是构造底座，而不是发布记录所属的类别。

Google Scholar 引用数：201（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Mulberry%3A+Empowering+MLLM+with+o1-like+Reasoning+and+Reflection+via+Collective+Monte+Carlo+Tree+Search&author=Huanjin+Yao&hl=en）

**开源数据：**有  
**数据集名称：**Mulberry-SFT / Mulberry-260K  
**官方地址：**https://huggingface.co/datasets/HuanjinYao/Mulberry-SFT  
**规模：**26 万条多模态 instruction 记录，其中抽取 1.5 万个源问题用于反思路径训练  
**记录形式：**`images` 与由角色、内容组成的 `messages`；assistant 目标含图像描述、推理依据、编号步骤和最终答案  
**文件与存储格式：**`mulberry_sft.json` 加 `mulberry_images.tar`，发布页说明了 ShareGPT 字段映射  
**领域与语言：**英文数学、图表与文档、科学、医学图像、自然场景 VQA 和通用视觉理解  
**构造与筛选：**GPT-4o、Qwen2-VL-7B、Llama-3.2-11B-Vision-Instruct 和 Qwen2-VL-72B 共同扩展并评分推理树，剪除低分分支并保留答案正确的路径  
**许可与访问约束：**公开发布采用 Apache-2.0；底层图像和问题数据仍受各自来源条款约束  
**预期用途：**多模态 SFT、推理与反思蒸馏、树搜索分析和数据质量审计
