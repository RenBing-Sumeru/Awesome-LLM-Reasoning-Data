多数 prover 在变换和组合 split 上相对 seed 明显退化；DeepSeek-Prover-V2-7B 最稳健，但 pass@32 仍下降约 20%。即使把组成部分的形式 proof 放入上下文，模型整体表现仍低，说明瓶颈不只是不会基础 lemma，而是无法组织它们。该证据支持组合诊断，但 375 题和不等式领域不足以代表全部 theorem proving。
