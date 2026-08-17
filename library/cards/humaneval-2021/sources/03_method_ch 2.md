# 方法：它是怎么工作的？

- 输入：benchmark 的 task prompt、上下文、选项、schema、passage、table、code stub、数据库或其他任务材料。
- 流程：收集或构造任务，定义 train/dev/test 或公开/隐藏 split，附上 reference answer、label、unit tests、evidence 或 scorer。
- 输出：可复用 benchmark instance、官方 metric、scorer/leaderboard 以及版本信息。
- 数据量：164 道手写 Python 函数补全题。
- Verifier / reward / judge / environment：执行生成代码并跑单元测试，常用 pass@k 汇总。
- 训练/评测用途：主要用于 evaluation 和 audit；如果被用作 SFT、reward 或 filtering 数据，必须额外检查 contamination、license 和数据泄漏边界。
- 可复现性备注：比较分数前要固定 split、prompt template、decoding budget、answer extractor、scorer version 和 release date。
