官方 Hugging Face 数据卡说明 LegalBench 有 40 位贡献者提供的 162 个任务，全部是英文，任务类型包括 binary classification、multi-class classification、extraction、generation 和 entailment。GitHub 仓库提供更细的 task description 和 license pointer。

行级决定性证据是任务特定的：prediction 必须按该任务 metric 匹配 label、class、抽取值、生成目标或 entailment answer。aggregate LegalBench score 只是所选 task set 的摘要，不能脱离任务组合阅读。

证据边界是开放法律任务评测。LegalBench 提供广泛 benchmark surface，但每一行的正确性取决于原始 source data、贡献者的 transformation，以及该任务自己的 evaluator。
