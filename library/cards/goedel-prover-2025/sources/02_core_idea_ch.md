Goedel-Prover 把形式陈述和编译通过的完整证明视为不断增长的监督池：两个形式化器增加陈述风格多样性，模型裁判筛查语义忠实度，Lean 提供硬证明判据，每一轮监督微调证明器再为下一轮发现新的正例。最接近的比较对象是只保留结果的定理证明，但公开产物序列化了陈述和完整证明示范，因此主类别是指令、示范与推理过程数据。

Google Scholar 引用数：135（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=Goedel-Prover%3A+A+Frontier+Model+for+Open-Source+Automated+Theorem+Proving&author=Yong+Lin&hl=en）

开放数据集：是，两个官方无门槛数据集均已匿名读取。
数据集名称：Goedel-Pset-v1 与 Lean-workbook-proofs。
官方地址：https://huggingface.co/datasets/Goedel-LM/Goedel-Pset-v1 和 https://huggingface.co/datasets/Goedel-LM/Lean-workbook-proofs。
规模：四个分片中的 164 万条形式陈述，以及 29,750 条完整证明。
记录形式：以题目标识连接的自然语言与形式陈述对，以及独立的题目标识与完整证明记录。
文件与存储格式：Parquet 训练文件，陈述数据三列，证明数据两列。
领域与语言：英文自然语言数学和 Lean 4 形式数学，覆盖竞赛、中小学和本科主题。
构造与过滤：双重自动形式化、Lean 编译、模型忠实度检查、每题十六次完整证明采样、编译核验和八轮累计专家迭代。
许可与访问约束：两个数据集均未标注许可；MIT 只适用于代码，来源与教师输出权利需单独审查。
预期用途：监督微调、验证器驱动的证明数据扩展、形式化研究和定理证明器评测。
