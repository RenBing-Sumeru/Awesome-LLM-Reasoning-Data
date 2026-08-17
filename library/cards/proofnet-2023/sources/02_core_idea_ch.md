一句话贡献：ProofNet 把本科纯数学教材/考试题整理成自然语言与 Lean 3 形式化陈述并行的数据对象，用于评测 statement autoformalization、informalization、形式证明和 proof autoformalization。

核心机制是人工选择适合形式化的题目，再由懂 Lean 的标注者写出形式化定理陈述。选题标准包括自包含、自然可形式化、以及降低与 mathlib 或未来预训练数据重叠的风险。因此它不是 mathlib 的抽象定理库，而是更偏“把通用本科数学结论用于具体题目”的评测集。

最接近的比较对象是 formal theorem proving benchmark（论文引用 miniF2F）和 Isabelle/Lean autoformalization 工作。反馈契约是混合的：Lean typecheck 判断代码是否良构；语义是否正确仍由专家判断；BLEU 在论文中被指出不能可靠代表形式化正确性。方向标签是 verifier-backed formal-math evaluation surface。
