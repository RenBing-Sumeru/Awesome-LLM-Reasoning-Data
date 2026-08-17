1. **一句话定位：** CLEVER 要求模型先生成正确形式规格，再生成被 Lean 证明满足该规格的实现。
2. **方法抓手：** 隐藏规格、等价证明、实现 correctness theorem 和 vacuity 审计是核心。
3. **数据抓手：** 161 个手工任务，字段覆盖签名、docstring、规格、同构证明、实现和辅助 lemma。
4. **证据锚点：** 所有 SOTA 方法在完整验证上仍困难，成功由 Lean type checker 双层确认。
5. **复用决定：** 适合严格 vericoding；必须分解失败来源，不能把 proof search 失败等同算法错误。
