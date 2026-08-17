程序 verifier 擅长检查格式和关键词，却难判断意图相关、上下文依赖的复杂约束；通用 LLM Judge 又常使用宽泛标准，无法稳定作为 RL 奖励。缺少专家 rubric 会使模型在企业 Agent 和复杂指令中学习表面合规。

该工作总结专家 rubric 构建原则，并以 ComplexConstraints 验证原子准则既能提高评价可靠性，也能作为可迁移 RLVR 信号。
