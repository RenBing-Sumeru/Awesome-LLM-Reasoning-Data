一句话贡献：Video-MMMU 把专业教育视频做成分阶段基准，用来测量 LMM 是否能从视频中感知、理解并迁移知识。

核心机制是把问题与学习过程对齐。Perception 问题测试从视觉或语音内容中抽取信息，类似 OCR 和 ASR。Comprehension 问题测试概念理解，或在变量变化时沿用同一解题策略。Adaptation 问题要求把视频中的概念、公式或解题方法用于新场景，包括 case study 和考试风格问题。

反馈契约是人工标注问题上的答案级正确性，并提出 performance-gain metric 来测量观看视频后的提升。最接近的参照包括 MMMU/MMMU-Pro 的大学级多模态题、Video-MME 等视频 QA 基准，以及只测试内容回忆、但没有明确 adaptation track 的教育视频任务。
