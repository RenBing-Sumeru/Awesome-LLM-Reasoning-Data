权威论文入口是 arXiv:2503.04772，标题为 **Generating Millions Of Lean Theorems With Proofs By Exploring State Transition Graphs**，提交日期为 2025-02-16。没有核验到 conference 或 journal 记录，因此 venue 保持为 **arXiv preprint**。L4 审阅依据包括完整 16 页、无 appendix 的论文，以及官方 `davidsyin/leannavigator` 仓库和 Zenodo 记录 13989482。

自动定理证明器需要大量“形式化证明状态到完成证明的 tactic”样本。Mathlib4 提供可执行的 Lean 证明，但人工编写的定理规模远小于普通语言模型语料；盲目枚举 Lean tactic 也不可行：Mathlib 有 200 多个内置 tactic，而定理应用还会进一步扩大实际动作空间。

LeanNavigator 把每个中间 Lean 状态视为潜在定理。一个状态包含局部假设和目标，带 tactic 标签的边把它转移到另一个状态。如果某状态能够到达 `ProofFinished`，这条路径上的 tactic 序列就是把该状态视作定理时的机器可检查证明。这样，合成定理生成被改写为：探索以现有 Mathlib4 定理为根的有向状态转移图。

因此，生成阶段的数据对象比“定理—证明对”丰富得多。它包含种子定理、当前与前驱状态、成功的 tactic 边、错误转移、终态可达性和备选路径。公开 Zenodo 工件没有保留这个对象，只发布一个顶层 JSON 数组；每行是两个字符串：序列化证明状态和证明/tactic 文本。

这条边界直接影响复用。一个形式上有效的中间状态未必是新的人类关注数学成果，扁平二元对也无法说明它来自哪个定理或图、有哪些拒绝候选、以及使用了什么验证环境。LeanNavigator 属于 **Data Construction and Open Release Recipes**，因为它同时提供可执行搜索 recipe 和开放的 SFT 风格 payload，也清楚暴露了“把已验证搜索图压平为看似独立记录”造成的审计信息损失。它不归为 process-supervision data，因为公开行没有 step label、transition trace 或 verifier output；也不归为 programmatically verifiable outcome data，因为本卡在 Atlas 中关注的是构造与发布 recipe，而不是 outcome benchmark。

L4 证据边界保持明确：已检查论文、代码 snapshot `5c06f1477728ab5e349a0792d68461b1b2961ef9`、Zenodo metadata/archive 结构、10,000 行官方 sample，以及 notebook 报告的 4,702,639 个 loaded example。尚未独立重算完整 archive checksum，也未批量 replay proof；没有 release manifest 把 Zenodo 文件同 Mathlib4/Lean/LeanDojo 环境、graph ancestry、rejected transition 或论文运行 notebook 绑定。L4 表示双语审阅就绪，不表示已完成复现或去污染。
