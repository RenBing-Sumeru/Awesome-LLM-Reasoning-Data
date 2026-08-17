此前的基准大多是碎片化评测：一个领域、一个阅读格式或一个窄推理技能。MMLU 的变化在于把大量学科和职业题目放进同一个多选题评分契约下，形成可横向比较的宽覆盖评测面。

方向信号不是新 verifier，也不是训练方法，而是可复用 evaluation surface，以及用宽 subject coverage 报告模型能力的做法。质量信号来自它被大量 frontier-model 报告采用，并成为后续鲁棒性和数据错误研究的基础对象。

不新的部分包括多选题、答案键 exact match 和考试式 QA。复用前要检查数据版本、split、prompt/scoring harness、许可和再分发条款、已知答案键错误以及训练污染风险。
