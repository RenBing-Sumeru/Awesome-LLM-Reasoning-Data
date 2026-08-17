已有基线是抽取式阅读理解，答案经常可以从单个 span 复制。DROP 改变的是任务表面：答案可能需要把段落多个事实通过算术、计数、排序或比较组合起来，同时仍保留自动 answer-level 评分。

方向信号是在自然语言段落 QA 中评估符号/离散操作能力。质量信号是对抗式众包构造、专家人类对照，以及覆盖 span、数字和日期的 generalized metric。不新的是 QA passage、众包和 EM/F1 评分本身。复用前要检查确切 release size、答案 schema、scorer 实现、数据 license、split 泄漏，以及模型是否在预训练或指令调优中见过公开样本。
