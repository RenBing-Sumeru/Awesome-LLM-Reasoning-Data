PutnamBench 要回答的问题是：神经定理证明器能否在机器可检查的形式化环境中解决 Putnam 本科竞赛数学题，而不是只给出自然语言答案。主来源是 arXiv:2407.11214，论文被 NeurIPS 2024 Datasets and Benchmarks Track 接收；同时核验了 TrishulLab 官方项目页和 GitHub 仓库。需要注意版本口径：arXiv v2 写的是 640 个 theorem 的 1692 个手工形式化版本，当前项目页/仓库写的是 Lean 4、Isabelle、Coq 合计 1724 个 language-level formalizations，所以任何按数量或榜单复用的工作都必须固定来源日期和仓库版本。

它的 data object 是某个证明助手里的 theorem statement；成功条件是模型提交的 formal proof 被 Lean、Isabelle 或 Coq 对应检查器接受。收录边界很明确：这是可执行形式化数学 benchmark 和污染审计对象，不是自然语言数学答案基准，也不是 proof 美学/可读性评价，更不是天然的过程监督数据集。
