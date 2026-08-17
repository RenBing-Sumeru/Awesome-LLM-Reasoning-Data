一句话贡献是：把模型答案转换成人类考试风格总分和学科分的 benchmark。

核心机制是zero-shot 模型提示、按学科分组、客观评分、主观评分和分数转换。被评分对象是2010-2022 年 2,811 道高考试题，覆盖 9 个学科，其中 1,781 道客观题、1,030 道主观题，并带答案键或评分 rubric，反馈契约是客观题 exact/rule matching，加上主观题人工评分或带 marking criteria 的 GPT-4-turbo judge 评分。

最近对比对象是C-Eval、CMMLU、MMLU 和其他考试 benchmark；它们没有这么直接的高考评分结构。方向标签是 evaluation surface 与 feedback contract curation，而不是泛泛数据集摘要。
