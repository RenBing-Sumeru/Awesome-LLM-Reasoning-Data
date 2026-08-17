CODE I/O 把可执行函数与一个已知输入或输出配对，让 DeepSeek-V2.5 预测缺失的一侧，从而把程序逻辑展开成自然语言 CoT；缓存答案匹配或重新执行程序会给出正确性反馈，CODE I/O++ 再附加一次修订，而不是直接丢弃错误首答。这些解释与纠错轮次直接作为两阶段 SFT target，因此本工作属于指令、示范与理由数据，而不是原始代码预训练或代码 benchmark。

Google Scholar 引用数：55（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=CODE+I%2FO%3A+Condensing+Reasoning+Patterns+via+Code+Input-Output+Prediction&author=Junlong+Li&hl=en）

开源数据：有，但存在明确的发布范围限制。数据集名称：CodeIO-PyEdu-Reasoning。官方地址：https://huggingface.co/datasets/hkust-nlp/CodeIO-PyEdu-Reasoning。规模：论文完整流程构造约 3.52M 条样本；公开子集是一个 11,225,166,333 字节的 JSONL 文件，发布页未披露准确行数。记录形式：`prompt`、`turn_1`、`feedback_1`、可选 `turn_2` 与 `feedback_2`。文件/存储格式：`pyedur_full.jsonl`。领域/语言：英文自然语言轨迹，底层是覆盖 STEM、系统、逻辑谜题及其他推理任务的教育类 Python 函数。构造与筛选：DeepSeek-V2.5 规范化代码并写预测，Python 执行删除不可用函数并检查答案；错误回答仍随反馈和可选修订保留。许可/访问限制：公开、无需审批、采用 ODC-BY；因合作方合规要求，只发布 PythonEdu-Reasoning 子集。预期用途：通用 instruction tuning 之前的推理 SFT 与蒸馏。
