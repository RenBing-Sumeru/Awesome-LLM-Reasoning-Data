现有RM往往针对固定标准、输出不透明标量，难以迁移到新的评价维度。论文研究如何让模型在未固定rubric时生成理由并评分。

R3构建20Krubric—reasoning—score数据，训练rubric-agnosticrewardmodel，根据query和回应自行识别评价角度并给出可解释分数。
