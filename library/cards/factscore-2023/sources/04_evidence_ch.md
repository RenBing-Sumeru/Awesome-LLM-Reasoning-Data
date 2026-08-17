论文的主要证据有两部分。第一，作者对人物长传记做人类 FActScore 标注，其中详细人工评测设置使用 183 个 labeled entities。第二，作者用自动评测扩展到 13 个后续语言模型的 6,500 条生成，论文估计如果全部人工评测约需 26K 美元。

行级证据是 atomic support label。最终百分比只是这些标签的聚合。ACL 摘要报告 automatic model 相对人工评测的误差低于 2%；官方 README 还报告两个推荐自动 estimator 之间 Pearson correlation 为 0.99。这些数字支持把 package 用于审计，但只在论文中的领域、prompt、知识源和 estimator 设置下成立。

实验结果也说明这个 metric 为什么必要：长回答可能包含很多 facts，不同系统的 response ratio、facts per response 和 factual precision 都不同。生成事实数量多不等于 factual precision 高。证据边界包括 biography-style topics、选定 Wikipedia snapshot 或自定义知识源、分解质量、检索失败和 support judge 漂移。
