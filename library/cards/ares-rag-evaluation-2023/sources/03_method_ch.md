1. 输入：目标域 passage 集、少量 few-shot query-answer 示例、被评测 RAG 系统输出的 query-document-answer 三元组，以及约 150 条以上目标准则人工标注验证样本。
2. 合成：用 FLAN-T5 XXL 从 passage 生成 question/answer，并通过检索过滤和负例采样形成正负三元组。
3. 训练：分别微调 context relevance、answer faithfulness、answer relevance 三个二分类 judge。
4. 评测：judge 对每个 RAG 系统的大量未标注三元组打标签，PPI 用验证集标签校正误差并输出系统级分数和置信区间。
5. 输出：三个准则的分数、置信区间和 RAG 配置排序。复现必须固定 passage 版本、few-shot prompt、合成模型、judge checkpoint、RAGAS/基线版本、验证标签和 PPI 置信水平。
