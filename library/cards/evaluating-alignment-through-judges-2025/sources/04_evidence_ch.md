主张——当标签来自足够强且对顺序自一致的 oracle 时，模型的判别能力可用于排序其对齐质量。

受控设置——15 个 LLM 一方面按 GPT-4o 判定的生成胜率排序，另一方面按同一批筛选回答对上的 Cohen’s kappa 排序。交换顺序后 oracle 改判的回答对被滤除：AlpacaEval 为 58.3%，Arena-Hard 为 50.7%。

结果——生成—评测的 Spearman 相关在 AlpacaEval 为 0.839、Arena-Hard 为 0.971；不筛选时仅为 0.743 和 0.793（表 1、图 2）。在 23 个模型上，AlignEval-CLAUDE 与风格控制 ChatBot Arena 排名相关为 0.885；与 IFEval 平均排序后，两种版本均为 0.946（表 4）。

边界——该代理关系相对于强 LLM oracle 标签及所选基准成立，并非对所有对齐维度的人类偏好直接测量。
