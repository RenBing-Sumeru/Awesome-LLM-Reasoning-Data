已有写作 benchmark 多测显式指令遵循，或用固定维度让 LLM 一次性评分；它们很少说明维度之间如何聚合。HoWToBench 的数据贡献是覆盖长篇、开放、专业文体，而 ToW 的协议贡献是把评分依据组织为带权树结构。它显式暴露“局部特征—父维度—总分”的路径，减少 judge 在不同调用中自行协商标准的 negotiation inconsistency，因此比普通 rubric 提示更可审计。

