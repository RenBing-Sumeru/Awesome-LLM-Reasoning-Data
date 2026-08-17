核心贡献是一套把“过程错误识别”变成索引预测任务的人类专家标注 benchmark。它不是让模型写泛泛 critique，而是给出一道数学题和一段已经切成步骤的模型解答，要求输出最早错误步骤的编号；如果没有错误，则输出 `-1`。

机制很清楚：从公开数学题集中取题，用 Qwen/LLaMA 系列模型生成解答，用 Qwen2.5-72B-Instruct 统一段落粒度并剔除少量最终答案被改动的样本，再由博士级数学专家标注最早错误。PRM 评测时要把每步正确性或 scalar score 转成“第一个错误步骤”；通用 LLM 评测时作为 critic model 被 prompt 成输出段落编号。最终反馈契约始终是专家标注，而不是模型自评。

最接近的对象是 PRM800K、MathCheck 和 CriticBench。ProcessBench 的变化在于题目更偏竞赛/奥赛难度、解答来自 12 个生成器、样本规模为 3,400，并且直接验收 earliest-error localization。它的方向信号是过程监督评测；复用为训练数据前必须额外核查 split、污染、Apache-2.0 数据许可证、prompt 和 evaluator 配置。
