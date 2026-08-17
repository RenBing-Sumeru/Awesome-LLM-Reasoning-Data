阅读时先看论文的动机和原始评测设计，再看官方仓库中的可执行 harness 与 leaderboard 约定。要分开三件事：MMLU 作为宽学科基准、某个 harness 下的分数、以及关于专家级能力的外推。

aggregate accuracy 不是逐题干净的证据。下游使用时要分开原始答案键正确性、后续 benchmark audit 发现和模型分数比较。
