核心贡献同时是基础设施和 benchmark：LeanDojo 从 Lean 仓库抽取数据，让模型与 Lean 环境交互，并发布用于 retrieval-augmented theorem proving 的 benchmark。配套模型 ReProver 展示了如何用 premise retrieval 辅助 tactic generation。

数据对象不只是 theorem string。它可以包含 theorem statement、local context、proof state、available premises、retrieved candidates、generated tactics 和 Lean execution result。反馈契约是 Lean checker 与 tactic engine，不是人工 rubric。

最近对比对象包括静态 proof corpus、miniF2F 式 theorem benchmark 和自然语言数学数据集。LeanDojo 的差异在于暴露 interactive proof-state transitions 和 premise retrieval。方向标签是 executable verifier-backed formal reasoning data。
