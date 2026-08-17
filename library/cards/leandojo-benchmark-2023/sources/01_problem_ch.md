LeanDojo 的问题是：如何在可交互的 Lean 环境中评测和训练语言模型定理证明器，并让模型接触 premise、proof state 和 tactic feedback。主要来源是 NeurIPS 2023 论文、arXiv:2306.15626、官方项目页、GitHub 仓库和 Zenodo 数据发布。

评测面是 Lean theorem-proving benchmark：任务给出形式化 theorem context，可配合检索到的 premises，模型提出 tactic 或 proof。反馈契约是程序化的：Lean 接受、拒绝、超时，或返回 proof-state/error feedback。

收录边界是 executable formal-proof evaluation and infrastructure。它不是自然语言数学 QA，不是主观 proof-quality judge，也不保证形式化命题忠实表达了某个非形式化题意。
