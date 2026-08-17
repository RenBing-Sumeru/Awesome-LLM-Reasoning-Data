# 方法：它是怎么工作的？

- 输入：task prompt、metadata，以及 benchmark 所需的 context、schema、passage、table、code stub、database 或 answer choices。
- 流程：收集/筛选样本，定义 split，附上 reference answer 或 label，并发布 evaluator 或 scoring policy。
- 输出：benchmark instance、官方 metric 和复现元数据。
- Verifier / reward / judge / environment：answer exact match/F1 and supporting-fact F1。
- 训练/评测用途：主要用于 evaluation 和 audit；若进入训练，需要额外做 contamination 与 license 审计。
- 需要核验的 artifact：paper/arXiv、官方代码或项目页、数据 release、scorer、license 和 leaderboard policy。
- 可复现性备注：固定 split、prompt template、decoding budget、answer extractor、scorer version 和 release date。
