Preference leakage 是一种污染机制：有关联的生成器和 judge LLM 将偏好传递给由该生成器数据训练的学生。论文将关联操作化为同一模型、继承关系或同家族，并以 preference leakage score 比较 judge 结果。它公开研究代码和数据，而非提出新奖励模型；核心审计对象是生成器—学生—judge 谱系及其造成的成对判决偏差。
