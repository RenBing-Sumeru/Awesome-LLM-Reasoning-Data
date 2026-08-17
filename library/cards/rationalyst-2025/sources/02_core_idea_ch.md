核心数据对象是一个三元组：前文、插在句子或解题步骤边界处的隐式 rationale，以及后文。Llama-3-8B-Instruct 负责提出 rationale；带 0.9 指数衰减的后续 token 分数比较加入和不加入该 rationale 时的后文预测。过滤器的设计意图是：只有预测改善幅度达到来源特定阈值时才保留。

论文报告共保留约 7.9 万条 rationale，其中约 6.5 万条来自六个 Pile 子域，约 1.4 万条来自 GSM8K 与 ECQA。这些目标用于监督训练 8B RATIONALYST，使其根据当前上下文预测 rationale。测试时，RATIONALYST 给出隐式 rationale，agent 每步采样 3 个候选下一步骤，再用以该 rationale 为条件的似然选择一个。因此，同一个学习对象既是 SFT 目标，也是搜索阶段的潜在引导信号。

这里的反馈契约有意采用弱信号：它衡量 rationale 是否能解释或预示已观察到的后文，并不验证每个中间陈述是否成立。公开 artifact 更突出了这个区别：链接数据集只暴露 `preceeding`、`rationale` 和 `following`，没有重建过滤所需的分数、阈值、来源标识或保留决策。
