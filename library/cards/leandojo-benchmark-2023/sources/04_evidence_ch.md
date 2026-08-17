官方论文报告 LeanDojo Benchmark 包含 98,734 个 theorem，并显示 ReProver 通过在 tactic generation 前检索 premise 提升证明表现。项目页和仓库提供实现，Zenodo 提供发布的 benchmark artifact。

行级决定性证据是机械执行：生成的 tactic/proof 在 Lean 中运行，要么推进 proof state、完成 theorem，要么失败或超时。aggregate pass rate 只有在固定 theorem split、search budget、timeout、retrieval corpus 和 Lean version 后才可解释。

证据边界是 Lean 中的形式化接受。Lean acceptance 证明的是 imported libraries 下编码后的 formal theorem，不证明非形式化数学题意、proof usefulness，也不自动排除 benchmark leakage；split 和 premise policy 仍需审计。
