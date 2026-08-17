核心贡献是一个大型人工标注 text-to-SQL 数据集，并通过 train/dev/test 数据库不重叠要求模型泛化到新 schema。常用 Spider release 包含 10,181 个问题、5,693 条 unique complex SQL、200 个数据库和 138 个领域。

数据对象是 question-schema-SQL record。反馈契约是程序化的：预测 SQL 通过 SQL component exact-set matching 和必要时的 execution accuracy 评分。最接近的对比是 ATIS、GeoQuery、WikiSQL，以及后来的 BIRD 等 text-to-SQL benchmark。方向标签是 cross-domain semantic parsing with SQL verifier metrics。
