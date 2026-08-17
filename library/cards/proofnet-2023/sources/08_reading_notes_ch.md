阅读时要把三件事分开：Lean typecheck、autoformalization 语义正确、以及 proof 是否成功。模型可能生成能 typecheck 的 Lean 代码，但表达了错误命题。

建议先读数据集构造，再读模型方法，然后看 Table 3 和定性分析。核心审计提醒是：总体指标，尤其 BLEU，不等于逐样本 verifier result。

复用时必须记录 Lean substrate、prompt 版本和 evaluator 版本。官方仓库是原始 Lean 3 artifact；Lean 4 port 应视为另一个评测面。
