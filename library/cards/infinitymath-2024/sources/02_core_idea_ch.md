InfinityMath 把一道已解数值题转成通用题目、可复用函数程序、变量约束以及经过检查的原始与生成答案。它不同于自由改写题目，因为发布对象明确给出数字变化时应保持不变的计算过程；它也不同于只留结果的数据，因为供监督微调消费的程序轨迹被完整序列化，所以主类别是指令、示范与推理过程数据。

Google Scholar 引用数：22（查询于 2026-07-27；https://scholar.google.com/scholar_lookup?title=InfinityMath%3A+A+Scalable+Instruction+Tuning+Dataset+in+Programmatic+Mathematical+Reasoning&author=Bo-Wen+Zhang&hl=en）

开放数据集：是，可匿名读取并已实际检查。
数据集名称：InfinityMATH。
官方地址：https://huggingface.co/datasets/BAAI/InfinityMATH。
规模：来自七个来源数据集的 101,380 条保留记录。
记录形式：来源题、数值无关题、带注释可执行程序、变量映射或约束，以及原始与生成答案。
文件与存储格式：一个含八个顶层字段的 UTF-8 JSONL 文件。
领域与语言：英文小学数学、竞赛数学、代数、数量推理和定理类题目。
构造与过滤：遮蔽数字，合成通用函数程序，用已知答案执行检查，失败后最多做一次最小修复，再保留答案一致记录。
许可与访问约束：当前数据元数据为 Apache-2.0；上游来源和生成输出条款仍需沿血缘审查。
预期用途：程序化数学推理监督微调、数值稳健性研究和程序化模板扩展。
