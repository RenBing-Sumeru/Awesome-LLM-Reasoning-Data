通用模型常被要求从异常现象推断最小解释，但现有 abduction benchmark 多依赖自然语言 judge，无法严格检查新假设是否真的推出观察、是否破坏无关知识或是否包含多余条件。模型可能输出流畅解释却通过任意重写理论“解释一切”，导致 creativity 与逻辑严谨性混在一起。

DeFAb 将公开知识库转换为可判定的 defeasible abduction 实例：模型必须添加或覆盖默认规则来解释异常，同时满足 derivation、conservativity 和 minimality。每个答案由规则求解器在多项式时间内验证，数据还提供多种表面渲染、困难集和 Lean 内核验证的 CONJURE 子集，可直接形成无 LLM judge 的精确奖励。
