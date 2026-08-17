# 核心思想

MetaMathQA 把答案增强与正反向问题变换结合，使可训练对象同时覆盖 prompt 多样性和教师写作的推理目标。记录是变换后的数学 instruction、rationale 与最终答案，已知答案匹配提供反馈契约，公开 SFT 示范使 Track 01 成为合适分类。

Google Scholar 引用数：1322（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=MetaMath%3A+Bootstrap+Your+Own+Mathematical+Questions+for+Large+Language+Models&author=Longhui+Yu&hl=en）

**开放数据集：**是  
**数据集名称：**MetaMathQA  
**官方地址：**https://huggingface.co/datasets/meta-math/MetaMathQA  
**规模：**395k 条，其中 240k 源自 GSM8K，155k 源自 MATH  
**记录形式：**变换类型、query、response、原问题和原 response  
**文件/存储格式：**Hugging Face 数据文件；训练时使用 Alpaca 风格 instruction/output  
**领域/语言：**英文基础与竞赛数学  
**构造与过滤：**GPT-3.5-Turbo 写多条解答和变换题目，已知答案用于过滤或约束输出  
**许可/访问约束：**公开；官方仓库为 Apache-2.0，同时需遵守上游 GSM8K/MATH 与教师服务条款  
**预期用途：**SFT、蒸馏、mixture 分析与问题多样性审计

