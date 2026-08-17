# 核心思想

MAmmoTH-VL 把数据质量问题转化为“按类别改写 + 视觉一致性过滤”：保留高质量来源记录，把简短图像问答/描述扩展为含中间 rationale 的复杂任务，并移除弱来源或被 judge 拒绝的改写。开放文本/多模态模型编写目标，视觉相关性—一致性—准确性的 Yes/No judge 提供筛选信号，LLaVA-OneVision 风格的 8B 模型通过 SFT 消费记录。

Google Scholar 引用数：129（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=MAmmoTH-VL%3A+Eliciting+Multimodal+Reasoning+with+Instruction+Tuning+at+Scale&author=Jarvis+Guo&hl=en）

**开放数据集：**是  
**数据集名称：**MAmmoTH-VL-Instruct-12M  
**官方地址：**https://huggingface.co/datasets/MAmmoTH-VL/MAmmoTH-VL-Instruct-12M  
**规模：**来自 153 个筛查来源的 1200 万条记录；1000 万单图与 200 万单图/多图/视频 manifest  
**记录形式：**媒体引用、来源/类别上下文、instruction、带详细 rationale 的回答和过滤谱系  
**文件/存储格式：**JSON manifest 与 WebDataset 风格压缩媒体 shard  
**领域/语言：**英文通用 VQA、OCR、图表、描述、代码/数学、领域任务、检测、多图、视频与纯语言 instruction  
**构造与筛选：**开放 70B/76B 模型改写 Group B；InternVL2-Llama3-76B 判断视觉相关性、一致性和准确性  
**许可/访问约束：**发布元数据为 Apache-2.0；上游数据集/媒体仍保留各自条款  
**预期用途：**多模态 SFT、rationale 蒸馏、数据混合研究与过滤审计
