核心贡献是一个协作构建的英文法律推理 benchmark suite。机制是由法律和技术背景贡献者提交任务，再规范到 task directory，并通过任务特定的 prompt、label 和 metric 进行评测。

Hugging Face 数据卡说明 LegalBench 包含 40 位贡献者提供的 162 个任务，覆盖 statutes、judicial opinions、contracts 等法律文本。反馈契约是 task-specific answer scoring，而不是统一法律判断：模型输出会对照 label、class、抽取字段、生成答案或 entailment target。

最近对比对象包括 LawBench、MMLU 法律子集、HELM/BigBench 式开放评测，以及 ContractNLI、CUAD、MAUD、privacy-policy corpus、CaseHOLD 等较早 legal NLP 数据。方向标签是 collaboratively curated legal evaluation surface。
