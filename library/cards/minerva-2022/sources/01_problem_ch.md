Minerva 是 Google Research 在 2022 年发布的 arXiv 模型报告，问题是大语言模型经过数学、科学文本继续训练后，能否在高难度定量推理题上给出可判分的最终答案。它不是一个新的数学数据集发布，而是把已有数学/科学评测面组织成早期的推理能力坐标。

可审计对象是 MATH、GSM8K、MMLU-STEM 和论文报告的 OCW 课程题等 prompt、模型逐步解答文本、最终答案和 benchmark 分数。收录边界是 reasoning evaluation surface；不能把这些公开 benchmark 分数直接当作无污染训练数据或通用 reward 信号。
