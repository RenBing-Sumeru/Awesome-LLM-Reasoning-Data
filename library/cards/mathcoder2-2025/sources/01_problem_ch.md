权威论文入口是 [ICLR 2025 proceedings record](https://proceedings.iclr.cc/paper_files/paper/2025/hash/bea94fe9c5573e74294657f692069d89-Abstract-Conference.html)，21 页终版论文及 Appendices A-H 作为 ICLR 2025 论文发布；[OpenReview](https://openreview.net/forum?id=1Iuw1jcIrf) 记录其 Spotlight 状态。MathCoder2 研究一个问题：通过为数学代码补充普通代码语料常常缺失的数学上下文，能否让它更适合 continued pretraining。现有 Python 与 Jupyter 数据即使导入数学库，也常用于工程、机器学习或测试，并不解释具体数学计算。

该工作构建 MathCode-Pile，论文报告其包含 19,487,652 个文档、19,184,073,343 个 token。最有辨识度的记录是模型翻译块，包含自然语言条件、LaTeX 计算表达式、teacher-stated result 和可执行 Python。通过筛选的块被压平成 text，再与筛选网页、合成数学/科学文本、使用数学包的代码和在线教材混合。

本文属于“数据构建与开放发布配方”，因为研究对象是 source filtering、teacher translation、execution-based selection、flattening、decontamination、packaging 与 checkpoint pipeline。它不是以 SFT-only corpus、独立 execution-verifier benchmark 或 RL recipe 为主。语料的主要用途是 continued causal-language-model pretraining，但当前仓库枚举没有对应值。本卡保留 `sft`，仅因为论文在 continued pretraining 后另行报告了监督式数学微调；不能因此把 MathCode-Pile 本身改写成 SFT 数据集。

这里的 L4 证据边界是分析完整度，而不是发布完整度。终版论文、appendix、官方 supplemental、project page、固定 revision 的代码、部分 Hugging Face 数据和四个 continued-pretrained checkpoint 均已检查。当前公开版本仍是 partial、text-only 且只有一个 split；item-level provenance、rejected translation、execution observation、textbook manifest、source right 与可端到端运行的 pipeline 均不可用。因此论文规模的构建过程与可下载工件必须分开审计。
