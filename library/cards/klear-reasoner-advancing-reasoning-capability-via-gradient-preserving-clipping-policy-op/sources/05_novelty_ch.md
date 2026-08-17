已有 RLVR 数据选择常按 pass rate 保留中等难度题，优化器则直接丢弃越界 token。Klear-Reasoner 同时反转这两个选择：保留更难、甚至当前模型经常失败的 prompt，并让被 clipping 的 token 仍有梯度。新意主要是数据选择与优化器信用分配的协同，不是新的答案 verifier。
