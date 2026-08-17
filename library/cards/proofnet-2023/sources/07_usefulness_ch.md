ProofNet 可作为 formal-math evaluation 的 schema 和审计清单：自然语言陈述、自然语言证明、形式陈述、source header、定理证明器版本、typecheck 结果、语义评审标签、prompt/evaluator provenance 都应分开保存。

做 benchmark 时，它示范了如何选择具体教材应用题而不是直接复制 mathlib 陈述，也说明可执行反馈需要与语义审查配套。做模型评测时，它可支持 statement autoformalization、informalization、formal proving 和 proof autoformalization，但必须明确当前任务到底由 Lean、专家还是其他 judge 判定成功。

对 atlas 来说，它是 verifier-backed benchmark surface，不是训练 recipe。它可以启发 reward/verifier 设计；若把公开行用于训练，必须记录污染风险，并决定底层 substrate 是 Lean 3 还是经过核验的 Lean 4 port。
