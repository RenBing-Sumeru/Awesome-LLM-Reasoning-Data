LegalBench 可作为广义法律 benchmark library 的 schema 参考。应保留 task id、legal area、source dataset、contributor、prompt、input fields、label space、metric、split、license，以及从既有数据转换的记录。

它适合比较模型在不同法律文本类型和任务格式上的行为，但报告应保留 per-task score，而不是全部压成一个法律能力数字。它也适合做领域 benchmark task provenance 的记录清单。

对 atlas 而言，LegalBench 是 LawBench 的对照：前者是英文协作广覆盖，后者是中文司法辖区特定 taxonomy。两者都应作为 evaluation surface，除非下游流程明确把它们作为训练数据重新审计。
