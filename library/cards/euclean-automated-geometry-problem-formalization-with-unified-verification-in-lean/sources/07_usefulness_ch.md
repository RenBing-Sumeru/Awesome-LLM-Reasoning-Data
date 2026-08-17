1. **自动形式化训练：** 使用 183,796 条 Numina statement 训练 informal-to-Lean 模型，并以人工语义样本和 compile rate 双重评估。

2. **几何证明课程：** 先在可编译 statement 上训练 prover，再使用 Omni 的 proof-completed 标签按难度组织课程和 rejection sampling。

3. **统一 verifier 研究：** 比较原生 Mathlib 与几何 DSL 的 trusted base、语义错误和证明成功率；若升级 Mathlib，先全量重编译。
