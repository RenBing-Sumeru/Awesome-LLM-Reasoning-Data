核心受控实验以数百万互联网样本训练接近商业规模词表的 tokenizer，再区分候选成员与非成员数据集。词表为 200,000 时，Vocabulary Overlap 的 AUC 为 0.771，Frequency Estimation 为 0.740；目标数据集含 800–1,200 个样本时，两者升至 0.882 与 0.843（表 3–4）。

这些结果支持存在真实的 token 级成员信号，也显示候选数据越大越易被推断。但它并未在拥有真实训练标签的商业 tokenizer 上验证攻击：论文使用效用相近的自训 tokenizer，只在商业词表中观察到特异 token。因此，现实归因仍是带条件的审计线索，而非确定的来源裁决。

两种主方法还体现计算权衡：Vocabulary Overlap 需训练多个 shadow tokenizer，Frequency Estimation 只用一个 shadow，在准确率与成本间交换。

因此比较方法时应同时报告阈值、辅助语料数量和训练预算，不能只比较单个 AUC 数值。
