# 核心思想

Math-LLaVA 先把异构公开图像问答源压缩成受清晰度与复杂度控制的四万条种子池，再通过按任务生成新问题、增加难度、同义改写和欠明确改写来提高每张图像的问题密度。序列化目标是关联图像的 LLaVA 对话，GPT-4V 是合成记录作者，源答案与格式约束提供筛选信号，LLaVA-1.5 的 SFT 是消费端，因此中心贡献属于公开示范数据，而非只发布模型。

Google Scholar 引用数：239（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Math-LLaVA%3A+Bootstrapping+Mathematical+Reasoning+for+Multimodal+Large+Language+Models&author=Wenhao+Shi&hl=en）

**开放数据集：**是  
**数据集名称：**MathV360K  
**官方地址：**https://huggingface.co/datasets/Zhiqiang007/MathV360K  
**规模：**约四万张图像、三十六万条问答；标注 JSON 文件为 174.6 MB  
**记录形式：**`id`、图像路径，以及含有人类图像问题和助手短答案的 `conversations` 列表  
**文件/存储格式：**一个公开 JSON 标注文件，加按来源组织的图像目录  
**领域/语言：**覆盖代数、算术、几何、逻辑、数值推理、科学、教材问答、图表、文档和通用视觉问答；以英文为主，GeoQA+ 子集含中文  
**构造与过滤：**GPT-4V 标注一万张图像，两个 ViT 分类器筛选并分层全部来源；GPT-4V 再增加二十万条新问题和十二万条高难、改写或欠明确变体  
**许可/访问约束：**公开访问；代码采用 Apache-2.0，记录与图像继承 Apache、MIT、BSD、GPL、Creative Commons 和仅限研究等混合上游条款  
**预期用途：**多模态 SFT、蒸馏、数据混合消融，以及每图多问合成审计
