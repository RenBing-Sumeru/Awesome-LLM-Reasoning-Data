MuMath-Code 把扩展后的数学题变成完整示范：先做自然语言分析，再调用和调试 Python，最后依据真值或多数投票指引给出答案。最接近的相邻方向是工具环境或只保留结果的数据，但发布的训练目标是供 SFT 消费的序列化解题轨迹，因此主类别是指令、示范与推理过程数据。

Google Scholar 引用数：10（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=MuMath-Code%3A+Combining+Tool-Use+Large+Language+Models+with+Multi-perspective+Data+Augmentation+for+Mathematical+Reasoning&author=Shuo+Yin&hl=en）

开源数据：有。
数据集名称：MuMath-Code-Data，其中包括同名工具数据和第一阶段的 MuMath-Data 文件。
官方地址：https://huggingface.co/datasets/weihao1/MuMath-Code-Data。
规模：第二阶段含 600K 条代码集成记录，第一阶段自然语言语料含 751K 条。
记录形式：每个对象含标准答案和消息列表；用户消息是数学题，助手消息含推理、Python 代码或纠错内容，以及最终答案。
文件/存储格式：两个无需认证即可访问的 JSONL 文件，分别存放工具数据与自然语言数据。
领域/语言：英文小学数学和竞赛数学，来源为 GSM8K 与 MATH，并包含 Python 工具使用。
构造与过滤：先从多角度扩展题目，再由 GPT-4 生成前置思维链和代码，执行解释器并纠错；候选通过已知答案或多数投票伪答案筛选。
许可/访问约束：官方数据卡未声明数据许可；访问受 Hugging Face 平台条款约束，上游题目与 GPT-4 输出权利需另行审核。
预期用途：两阶段数学 SFT、工具使用蒸馏、纠错轨迹研究，以及自然语言监督与可执行推理监督的对照。
