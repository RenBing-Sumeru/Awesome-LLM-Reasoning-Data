一句话贡献是：为 scalable oversight 实验设计的 Google-proof 研究生水平 QA benchmark。

核心机制是专家出题、专家和非专家验证、答案键评分和 baseline 模型评测。被评分对象是448 道由生物、物理、化学领域专家编写的选择题，包含选项、正确答案和验证元数据，反馈契约是对 gold multiple-choice answer 做 exact match。

最近对比对象是MMLU 式专家考试和普通可搜索科学 QA。方向标签是 evaluation surface 与 feedback contract curation，而不是泛泛数据集摘要。
