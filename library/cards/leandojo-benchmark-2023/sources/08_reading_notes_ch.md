阅读时先看 infrastructure，再看 model result。关键区分是 Lean-accepted formal proof 与自然语言数学正确性不是同一个 claim。

要把三件事分开：LeanDojo 工具能 trace 并交互 Lean 仓库；LeanDojo Benchmark 是固定评测面；ReProver 是在该评测面上测试的 retrieval-augmented prover。不要在未重检的情况下跨 Lean version 或 corpus snapshot 转移分数。
