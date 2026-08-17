论文评测五个 benchmark family 中的六类任务：NATURAL PLAN 的 Trip Planning 与 Meeting Planning、LiveBench Reasoning、MATH 500、AIME 2024–2025，以及 LiveCodeBench TestOutputPred。这些任务具有可由 exact match 或规则检查的结构化答案；该外部 checker 不参与在线 self-verification。NATURAL PLAN 使用 Langfun controlled generation 产生结构化输出。Sampling、Self-Verify 和 Self-Correct 使用附录给出的任务定制 zero-shot prompt。

实验涵盖专有与开放模型，同时包含 non-thinking 与 thinking 类型。三个 SETS operation 的报告默认 temperature 均为 0.7。Non-thinking model 的搜索网格为 m 从 1 到 50、n 从 1 到 10；thinking model 的 m 为 1 到 25、n 仍为 1 到 10。SELF-REFINE 只改变 correction depth，best-of-N 基线只改变 sample count，SETS 同时搜索两个维度。由于 benchmark 输出结构化，最终 solution equivalence 采用 exact matching，并随机处理平局。

Scaling curve 针对每个模型、数据集与计算预算选择测试网格中的最佳 hyperparameter。主要计算量指标是平均输出 token 数；附录还报告 API call 和财务成本，wall-clock time 则被有意排除。方法不训练 verifier、policy 或 correction model。已接受 artifact 中未确认官方代码、完整生成轨迹、API snapshot、seed 或可执行复现环境。
