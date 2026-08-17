# 证据

**主张：**广泛来源与混合 CoT/PoT 目标比特定数据集 CoT 调优更能提升数学泛化。**受控设置：**图 2 使用同一 LLaMA-2-7B 基座，对比 WizardMath 风格数据、MathInstruct 的 CoT-only、PoT-only 与混合 mixture。**结果：**混合 mixture 在论文报告的九项数据集平均分上最好，表 5 的来源消融也显示域外收益更大。**边界：**mixture 规模、领域和目标格式同时变化，因此结果支持完整配方，不能把收益只归因于 PoT。

