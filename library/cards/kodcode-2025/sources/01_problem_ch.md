人工整理的编程数据可靠但难以扩展，大型合成数据则往往牺牲领域多样性、题目难度或可执行正确性。同一个模型生成的答案与测试即使彼此一致也可能共同出错，而简单 rejection sampling 还会不成比例地删除高难问题。

KodCode 合成十二类问题，反复重新生成答案与单元测试，直到它们能执行并达到完整分支覆盖，再把通过验收的三元组转换成多种任务格式。DeepSeek-R1 为每题编写三份候选推理回答，配套测试负责选择 SFT target；论文版本共有 447K 条已验证三元组。

**L4 事实：**主要来源为 Findings of ACL 2025 第 6980-7008 页，https://aclanthology.org/2025.findings-acl.365/；KodCode-V1 与 KodCode-V1-SFT-R1 是采用 CC BY-NC 4.0 的公开 Parquet 数据；构造、schema、执行契约、split/版本差异、使用信号与 benchmark 证据均已核对。
