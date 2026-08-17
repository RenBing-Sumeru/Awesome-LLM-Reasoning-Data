PubMedQA 适合作为紧凑的生物医学推理评测面：给定 passage，答案空间很小，scorer 是确定性的。

复用时应保留 PMID、question、abstract context、被移除的 conclusion 或 long answer 来源、final label、subset 名称、split 名称或 split 脚本和 scorer 版本。还要记录是否使用 PQA-U/PQA-A 这类弱标注或人工生成样本训练，因为这会改变测试分数的解释。

它也是区分 benchmark evidence 与 training data 的好例子。PQA-L 支持 answer-level evaluation；PQA-U 和 PQA-A 可以用于预训练或增强实验，但不能在不说明监督契约差异的情况下折叠成一个笼统的 “PubMedQA score”。
