核心实验在 LLM-AggreFact 上将 HalluGuard 与专用幻觉检测器及更大的通用 judge 比较。在 RAGTruth 子集上，HalluGuard 达到 84.4% balanced accuracy，高于 Granite Guardian 3.3-8B 的 82.2%，也略高于 MiniCheck-7B 的 84.0%，而其 backbone 只有 4B。

在完整 LLM-AggreFact 上，HalluGuard 达到 77.1%，超过 GPT-4o 的 75.9%。外部 benchmark、模型规模对照、标签检查和双 judge 一致筛选共同支持其有效性。但这些结果只能证明文档级 grounding 分类能力，不能证明生成理由具有因果忠实性，也不能保证输入文档本身事实正确。
