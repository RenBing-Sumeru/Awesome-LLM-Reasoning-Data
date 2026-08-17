MMLU-Pro 追问的是：原始 MMLU 在饱和、prompt 敏感和题目噪声风险下，能否被改造成更有区分度的宽学科评测。主要来源是 Wang 等人的 "MMLU-Pro: A More Robust and Challenging Multi-Task Language Understanding Benchmark"，2024 年 6 月 arXiv，后列为 NeurIPS 2024 Datasets and Benchmarks spotlight；官方 GitHub 和 Hugging Face 发布评测资产。

收录边界是静态 benchmark upgrade，不是新模型、reward model 或交互环境。一个数据对象是 10 选项多选题、正确答案、类别元数据和评测 split/package 信息。反馈契约是在官方评测流程下与答案键 exact match。

它对 atlas 的价值在于它是对 MMLU 的显式加固：清理题目、保留更难样本、增加选项数，并提供一个观察宽学科基准是否还能区分 frontier models 的审计对象。
