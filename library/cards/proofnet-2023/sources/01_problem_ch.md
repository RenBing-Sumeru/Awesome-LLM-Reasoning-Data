ProofNet 是 2023 年 arXiv 论文提出的本科数学 autoformalization / formal proving 基准。官方论文、GitHub 和 Hugging Face 数据集一致说明：它包含 371 个例子，每个例子把自然语言定理陈述、自然语言证明和 Lean 3 形式化定理陈述配在一起。

这张卡的边界不是“自然语言数学能力综述”，而是把教材习题式数学对象接到 Lean 3 可检查表面上。一个样本至少包含 `id`、`nl_statement`、`nl_proof`、`formal_statement` 和用于 Lean 环境的 `src_header`。

收录价值在于它把对象、评测面和反馈契约拆开了：Lean 3 可以检查生成陈述是否类型正确，但“是否表达了同一个数学命题”在论文实验中仍需人类专家判断，因为不同 Lean 表述可能语义等价但不定义相等。复用时必须保留这个机械检查和语义判定的边界。
