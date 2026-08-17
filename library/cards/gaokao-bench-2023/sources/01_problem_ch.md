GAOKAO-Bench 用中国高考主客观题评测 LLM，并把人类考试总分与主观题评分一致性纳入审计。 主来源是arXiv 2305.12474 和 OpenLMLab GAOKAO-Bench 仓库。

它回答的具体问题是：LLM 在中国国家考试评分面上表现如何，而不是只看通用 NLP 任务。决策边界是考试来源评测，不是 reasoning trace 数据集，也不是可通用复用的训练集。

数据对象或评测面是2010-2022 年 2,811 道高考试题，覆盖 9 个学科，其中 1,781 道客观题、1,030 道主观题，并带答案键或评分 rubric。它对 atlas 的价值在于把反馈契约说清楚：客观题 exact/rule matching，加上主观题人工评分或带 marking criteria 的 GPT-4-turbo judge 评分。
