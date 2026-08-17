1. **整合知识源：** 从 18 个公开知识库提取 taxonomy、实体关系和行为属性，统一 predicate 与类型，物化可用于默认推理的规则图。

2. **生成异常与假设：** 组合分类层级和行为边，建立正常默认理论，再注入与预期冲突的 observation；按 Level 1–3 构造候选最小规则覆盖或新增假设。

3. **形式筛选：** 用规则/ASP 求解器检查 hypothesis 能推出异常、保持无关结论且不存在更小子集；不满足 derivation、conservativity 或 minimality 的样本删除。

4. **渲染与扩展：** 将同一逻辑题输出四种文本/符号形式，构造 DeFAb-Hard；CONJURE 把答案定义写入 Lean 并由内核检查。复现需固定知识库版本、实体对齐、负采样和 solver。
