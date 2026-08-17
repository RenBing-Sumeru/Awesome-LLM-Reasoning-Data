SuperGPQA 可作为大规模专家领域 benchmark 构造 schema 的参考。它展示了如何保存 discipline、field、subfield 层级，如何保留 difficulty label，以及在类别题量不均衡时如何同时报告 sample-level 和 hierarchy-level 指标。

复用时应保留题干、选项、答案键、来源 lineage、discipline、field、subfield、difficulty、prompt 模板、模型回答、解析后答案、是否正确、evaluator 版本和数据集 revision。如果复用的是构造流程而非数据本身，还应保留专家复核状态和拒绝原因，尤其是歧义、答案不唯一、格式错误和来源不可靠。

它也提醒不要把 benchmark 直接当训练材料。评测标签和 response records 可以用于审计或错误分析；若要当训练数据或 reward 数据，必须另做 license、污染和反馈契约审查。
